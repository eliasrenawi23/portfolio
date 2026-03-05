"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import SectionHeading from './SectionHeading'
import { useTetris } from '@/lib/hooks/useTetris'
import { BOARD_WIDTH, BOARD_HEIGHT, CELL_SIZE, TETROMINOES } from '@/lib/tetris'

const TetrisGame = () => {
    const { ref } = useSectionInView('Fun')
    
    const {
        board,
        currentPiece,
        nextPiece,
        score,
        lines,
        level,
        gameOver,
        isPaused,
        isPlaying,
        startGame,
        setIsPaused,
        moveLeft,
        moveRight,
        moveDown,
        rotate,
        hardDrop
    } = useTetris()

    // Render the board with current piece overlay
    const renderBoard = () => {
        const displayBoard = board.map(row => [...row])
        if (currentPiece) {
            for (let y = 0; y < currentPiece.shape.length; y++) {
                for (let x = 0; x < currentPiece.shape[y].length; x++) {
                    if (currentPiece.shape[y][x] && currentPiece.y + y >= 0) {
                        displayBoard[currentPiece.y + y][currentPiece.x + x] = currentPiece.color
                    }
                }
            }
        }
        return displayBoard
    }

    const renderNextPiece = () => {
        const tetromino = TETROMINOES[nextPiece]
        return (
            <div className="flex flex-col items-center gap-0.5">
                {tetromino.shape.map((row, y) => (
                    <div key={y} className="flex gap-0.5">
                        {row.map((cell, x) => (
                            <div
                                key={x}
                                className="w-3 h-3 lg:w-4 lg:h-4 rounded-sm"
                                style={{
                                    backgroundColor: cell ? tetromino.color : 'transparent',
                                    boxShadow: cell ? `0 0 8px ${tetromino.color}` : 'none',
                                }}
                            />
                        ))}
                    </div>
                ))}
            </div>
        )
    }

    const mobileCellSize = 16
    const desktopCellSize = CELL_SIZE
    const renderedBoard = renderBoard()

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[60rem] scroll-mt-28 sm:mb-40 px-4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="fun"
        >
            <SectionHeading>🎮 A Little Game Just for You!</SectionHeading>
            
            <div className="glass-card p-4 sm:p-8 text-center mb-6">
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-lg">
                    Hey there, curious visitor! Since you&apos;ve explored this far into my portfolio, 
                    here&apos;s a little treat — a classic{" "}
                    <span className="font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                        Tetris game
                    </span>
                    , built entirely in React. Take a break, stack some blocks, and enjoy! 🧱
                </p>
            </div>

            {/* Mobile Stats Bar */}
            <div className="lg:hidden glass-card p-3 mb-4">
                <div className="flex justify-around items-center">
                    <div className="text-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">Score</p>
                        <p className="text-lg font-bold gradient-text">{score}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">Level</p>
                        <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{level}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">Lines</p>
                        <p className="text-lg font-bold text-purple-600 dark:text-purple-400">{lines}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">Next</p>
                        <div className="flex justify-center mt-1">
                            {renderNextPiece()}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Mobile Layout */}
            <div className="lg:hidden flex flex-col items-center gap-4">
                <div className="glass-card p-2 glow-card">
                    <div 
                        className="relative rounded-lg overflow-hidden"
                        style={{
                            width: BOARD_WIDTH * mobileCellSize + 2,
                            height: BOARD_HEIGHT * mobileCellSize + 2,
                            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.6), rgba(30, 27, 75, 0.6))',
                            border: '1px solid rgba(139, 92, 246, 0.3)',
                            boxShadow: 'inset 0 0 20px rgba(139, 92, 246, 0.1)',
                        }}
                    >
                        {renderedBoard.map((row, y) => (
                            <div key={y} className="flex">
                                {row.map((cell, x) => (
                                    <div
                                        key={x}
                                        className="transition-all duration-75"
                                        style={{
                                            width: mobileCellSize,
                                            height: mobileCellSize,
                                            backgroundColor: cell || 'rgba(0, 0, 0, 0.1)',
                                            border: cell ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.03)',
                                            borderRadius: '2px',
                                            boxShadow: cell ? `inset 0 0 6px rgba(255,255,255,0.4), 0 0 6px ${cell}` : 'none',
                                        }}
                                    />
                                ))}
                            </div>
                        ))}
                        
                        {/* Overlays */}
                        {gameOver && (
                            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center backdrop-blur-sm">
                                <p className="text-xl font-bold text-white mb-2">Game Over!</p>
                                <p className="text-sm text-gray-300 mb-3">Score: {score}</p>
                                <button onClick={startGame} className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold text-sm hover:opacity-90">
                                    Play Again
                                </button>
                            </div>
                        )}
                        {isPaused && !gameOver && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">
                                <p className="text-xl font-bold text-white">Paused</p>
                            </div>
                        )}
                        {!isPlaying && !gameOver && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">
                                <button onClick={startGame} className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-bold text-sm hover:scale-105 transition-transform glow-button">
                                    Start Game
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                
                {/* Mobile Controls */}
                <div className="glass-card p-3 w-full max-w-[280px]">
                    <div className="flex justify-between items-center gap-4">
                        <div className="grid grid-cols-3 gap-1">
                            <div />
                            <button onClick={rotate} disabled={!isPlaying || isPaused || gameOver} className="w-10 h-10 bg-indigo-500 text-white rounded-lg font-bold flex items-center justify-center touch-manipulation disabled:opacity-50">↻</button>
                            <div />
                            <button onClick={moveLeft} disabled={!isPlaying || isPaused || gameOver} className="w-10 h-10 bg-indigo-500 text-white rounded-lg font-bold flex items-center justify-center touch-manipulation disabled:opacity-50">←</button>
                            <button onClick={moveDown} disabled={!isPlaying || isPaused || gameOver} className="w-10 h-10 bg-indigo-500 text-white rounded-lg font-bold flex items-center justify-center touch-manipulation disabled:opacity-50">↓</button>
                            <button onClick={moveRight} disabled={!isPlaying || isPaused || gameOver} className="w-10 h-10 bg-indigo-500 text-white rounded-lg font-bold flex items-center justify-center touch-manipulation disabled:opacity-50">→</button>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <button onClick={hardDrop} disabled={!isPlaying || isPaused || gameOver} className="px-4 py-2 bg-purple-500 text-white rounded-lg font-bold text-xs active:bg-purple-600 disabled:opacity-50 touch-manipulation">⬇ DROP</button>
                            {isPlaying && !gameOver && (
                                <button onClick={() => setIsPaused(!isPaused)} className="px-4 py-2 bg-gray-500 text-white rounded-lg font-bold text-xs active:bg-gray-600 touch-manipulation">
                                    {isPaused ? '▶' : '⏸'}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Desktop Layout */}
            <div className="hidden lg:flex flex-row gap-8 items-center justify-center">
                <div className="glass-card p-4 glow-card">
                    <div className="relative rounded-lg overflow-hidden"
                        style={{
                            width: BOARD_WIDTH * desktopCellSize + 2,
                            height: BOARD_HEIGHT * desktopCellSize + 2,
                            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.6), rgba(30, 27, 75, 0.6))',
                            border: '1px solid rgba(139, 92, 246, 0.3)',
                            boxShadow: 'inset 0 0 30px rgba(139, 92, 246, 0.15)',
                        }}
                    >
                        {renderedBoard.map((row, y) => (
                            <div key={y} className="flex">
                                {row.map((cell, x) => (
                                    <div
                                        key={x}
                                        className="transition-all duration-75"
                                        style={{
                                            width: desktopCellSize,
                                            height: desktopCellSize,
                                            backgroundColor: cell || 'rgba(0, 0, 0, 0.1)',
                                            border: cell ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.03)',
                                            borderRadius: '2px',
                                            boxShadow: cell ? `inset 0 0 10px rgba(255,255,255,0.4), 0 0 10px ${cell}` : 'none',
                                        }}
                                    />
                                ))}
                            </div>
                        ))}
                        
                        {gameOver && (
                            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center backdrop-blur-sm">
                                <p className="text-2xl font-bold text-white mb-2">Game Over!</p>
                                <p className="text-lg text-gray-300 mb-4">Score: {score}</p>
                                <button onClick={startGame} className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold hover:opacity-90">Play Again</button>
                            </div>
                        )}
                        {isPaused && !gameOver && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm"><p className="text-2xl font-bold text-white">Paused</p></div>
                        )}
                        {!isPlaying && !gameOver && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">
                                <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-bold text-lg hover:scale-105 transition-transform glow-button">Start Game</button>
                            </div>
                        )}
                    </div>
                </div>
                
                {/* Side Panel - Desktop */}
                <div className="flex flex-col gap-4">
                    <div className="glass-card p-4 text-center min-w-[150px]">
                        <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Score</p>
                        <p className="text-2xl font-bold gradient-text">{score}</p>
                    </div>
                    <div className="glass-card p-4 text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Level</p>
                        <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{level}</p>
                    </div>
                    <div className="glass-card p-4 text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Lines</p>
                        <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{lines}</p>
                    </div>
                    <div className="glass-card p-4 text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Next</p>
                        <div className="flex justify-center items-center h-12">{renderNextPiece()}</div>
                    </div>
                    <div className="glass-card p-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 text-center">Controls</p>
                        <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                            <p>← → : Move</p>
                            <p>↓ : Soft Drop</p>
                            <p>↑ : Rotate</p>
                            <p>Space : Hard Drop</p>
                            <p>P : Pause</p>
                        </div>
                    </div>
                    {isPlaying && !gameOver && (
                        <button onClick={() => setIsPaused(!isPaused)} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 transition-colors">
                            {isPaused ? 'Resume' : 'Pause'}
                        </button>
                    )}
                </div>
            </div>
        </motion.section>
    )
}

export default TetrisGame
