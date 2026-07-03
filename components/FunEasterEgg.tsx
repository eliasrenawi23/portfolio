"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { useTetris } from '@/lib/hooks/useTetris';
import { BOARD_WIDTH, BOARD_HEIGHT, CELL_SIZE, TETROMINOES } from '@/lib/tetris';
import { FaChevronDown, FaChevronUp, FaGamepad } from 'react-icons/fa';

const FunEasterEgg = () => {
    const [isOpen, setIsOpen] = useState(false);
    
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
    } = useTetris();

    // Render the board with current piece overlay
    const renderBoard = () => {
        const displayBoard = board.map(row => [...row]);
        if (currentPiece) {
            for (let y = 0; y < currentPiece.shape.length; y++) {
                for (let x = 0; x < currentPiece.shape[y].length; x++) {
                    if (currentPiece.shape[y][x] && currentPiece.y + y >= 0) {
                        displayBoard[currentPiece.y + y][currentPiece.x + x] = currentPiece.color;
                    }
                }
            }
        }
        return displayBoard;
    };

    const renderNextPiece = () => {
        const tetromino = TETROMINOES[nextPiece];
        return (
            <div className="flex flex-col items-center gap-0.5">
                {tetromino.shape.map((row, y) => (
                    <div key={y} className="flex gap-0.5">
                        {row.map((cell, x) => (
                            <div
                                key={x}
                                className="w-3.5 h-3.5 rounded-sm"
                                style={{
                                    backgroundColor: cell ? tetromino.color : 'transparent',
                                    border: cell ? '1px solid var(--border)' : 'none'
                                }}
                            />
                        ))}
                    </div>
                ))}
            </div>
        );
    };

    const mobileCellSize = 16;
    const desktopCellSize = CELL_SIZE;
    const renderedBoard = renderBoard();

    return (
        <section
            className="w-full max-w-[70rem] mx-auto px-4 sm:px-6 py-12 scroll-mt-20"
            id="fun"
        >
            <div className="border border-border bg-bg-soft rounded-lg p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-text flex items-center gap-2">
                        <FaGamepad className="text-accent" />
                        After hours
                    </h3>
                    <p className="text-sm text-muted">
                        A small React Tetris game because portfolios should have a little personality.
                    </p>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 px-4 py-2 border border-border bg-bg hover:bg-bg-soft rounded text-xs font-mono uppercase tracking-wider text-text transition-colors"
                >
                    {isOpen ? (
                        <>
                            Close Game <FaChevronUp />
                        </>
                    ) : (
                        <>
                            Open Game <FaChevronDown />
                        </>
                    )}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-6 border border-border bg-bg rounded-lg p-6"
                    >
                        {/* Mobile Layout */}
                        <div className="lg:hidden flex flex-col items-center gap-4">
                            <div className="flex justify-around w-full max-w-[280px] bg-bg-soft border border-border p-3 rounded">
                                <div className="text-center">
                                    <p className="text-[9px] font-mono uppercase text-muted">Score</p>
                                    <p className="text-base font-bold text-accent">{score}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-[9px] font-mono uppercase text-muted">Level</p>
                                    <p className="text-base font-bold text-accent-2">{level}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-[9px] font-mono uppercase text-muted">Lines</p>
                                    <p className="text-base font-bold text-accent-3">{lines}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-[9px] font-mono uppercase text-muted">Next</p>
                                    <div className="flex justify-center mt-1">{renderNextPiece()}</div>
                                </div>
                            </div>

                            <div 
                                className="relative rounded overflow-hidden border border-border bg-bg-soft"
                                style={{
                                    width: BOARD_WIDTH * mobileCellSize + 2,
                                    height: BOARD_HEIGHT * mobileCellSize + 2,
                                }}
                            >
                                {renderedBoard.map((row, y) => (
                                    <div key={y} className="flex">
                                        {row.map((cell, x) => (
                                            <div
                                                key={x}
                                                style={{
                                                    width: mobileCellSize,
                                                    height: mobileCellSize,
                                                    backgroundColor: cell || 'transparent',
                                                    border: cell ? '1px solid var(--border)' : '1px solid rgba(0,0,0,0.03)',
                                                    borderRadius: '1px',
                                                }}
                                            />
                                        ))}
                                    </div>
                                ))}
                                
                                {gameOver && (
                                    <div className="absolute inset-0 bg-bg/90 flex flex-col items-center justify-center">
                                        <p className="text-lg font-serif font-bold text-text mb-1">Game Over</p>
                                        <p className="text-xs text-muted mb-3">Score: {score}</p>
                                        <button onClick={startGame} className="px-4 py-1.5 border border-accent text-accent hover:bg-accent hover:text-bg text-xs font-mono uppercase tracking-wider rounded font-bold">Play Again</button>
                                    </div>
                                )}
                                {isPaused && !gameOver && (
                                    <div className="absolute inset-0 bg-bg/80 flex items-center justify-center"><p className="text-lg font-serif font-bold text-text">Paused</p></div>
                                )}
                                {!isPlaying && !gameOver && (
                                    <div className="absolute inset-0 bg-bg/85 flex items-center justify-center">
                                        <button onClick={startGame} className="px-5 py-2 border border-accent text-accent hover:bg-accent hover:text-bg text-xs font-mono uppercase tracking-wider rounded font-bold">Start Game</button>
                                    </div>
                                )}
                            </div>
                            
                            {/* Mobile Controls */}
                            <div className="border border-border p-3 bg-bg-soft rounded w-full max-w-[280px]">
                                <div className="flex justify-between items-center gap-4">
                                    <div className="grid grid-cols-3 gap-1">
                                        <div />
                                        <button onClick={rotate} disabled={!isPlaying || isPaused || gameOver} className="w-10 h-10 border border-border bg-bg text-text rounded font-bold flex items-center justify-center touch-manipulation disabled:opacity-50">↻</button>
                                        <div />
                                        <button onClick={moveLeft} disabled={!isPlaying || isPaused || gameOver} className="w-10 h-10 border border-border bg-bg text-text rounded font-bold flex items-center justify-center touch-manipulation disabled:opacity-50">←</button>
                                        <button onClick={moveDown} disabled={!isPlaying || isPaused || gameOver} className="w-10 h-10 border border-border bg-bg text-text rounded font-bold flex items-center justify-center touch-manipulation disabled:opacity-50">↓</button>
                                        <button onClick={moveRight} disabled={!isPlaying || isPaused || gameOver} className="w-10 h-10 border border-border bg-bg text-text rounded font-bold flex items-center justify-center touch-manipulation disabled:opacity-50">→</button>
                                    </div>
                                    
                                    <div className="flex flex-col gap-2">
                                        <button onClick={hardDrop} disabled={!isPlaying || isPaused || gameOver} className="px-3 py-2 border border-accent-2 text-accent-2 bg-bg hover:bg-accent-2 hover:text-bg rounded font-mono text-[10px] uppercase font-bold touch-manipulation">DROP</button>
                                        {isPlaying && !gameOver && (
                                            <button onClick={() => setIsPaused(!isPaused)} className="px-3 py-2 border border-border bg-bg hover:bg-bg-soft rounded text-xs touch-manipulation">
                                                {isPaused ? '▶ Resume' : '⏸ Pause'}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden lg:flex flex-row gap-8 items-center justify-center">
                            <div className="border border-border bg-bg-soft p-4 rounded">
                                <div className="relative rounded overflow-hidden bg-bg border border-border/80"
                                    style={{
                                        width: BOARD_WIDTH * desktopCellSize + 2,
                                        height: BOARD_HEIGHT * desktopCellSize + 2,
                                    }}
                                >
                                    {renderedBoard.map((row, y) => (
                                        <div key={y} className="flex">
                                            {row.map((cell, x) => (
                                                <div
                                                    key={x}
                                                    style={{
                                                        width: desktopCellSize,
                                                        height: desktopCellSize,
                                                        backgroundColor: cell || 'transparent',
                                                        border: cell ? '1px solid var(--border)' : '1px solid rgba(0,0,0,0.03)',
                                                        borderRadius: '1px',
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    ))}
                                    
                                    {gameOver && (
                                        <div className="absolute inset-0 bg-bg/90 flex flex-col items-center justify-center">
                                            <p className="text-xl font-serif font-bold text-text mb-1">Game Over</p>
                                            <p className="text-sm text-muted mb-4">Score: {score}</p>
                                            <button onClick={startGame} className="px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-bg text-xs font-mono uppercase tracking-wider rounded font-bold">Play Again</button>
                                        </div>
                                    )}
                                    {isPaused && !gameOver && (
                                        <div className="absolute inset-0 bg-bg/85 flex items-center justify-center"><p className="text-xl font-serif font-bold text-text">Paused</p></div>
                                    )}
                                    {!isPlaying && !gameOver && (
                                        <div className="absolute inset-0 bg-bg/85 flex items-center justify-center">
                                            <button onClick={startGame} className="px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-bg text-xs font-mono uppercase tracking-wider rounded font-bold">Start Game</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                            {/* Side Panel - Desktop */}
                            <div className="flex flex-col gap-4 min-w-[180px]">
                                <div className="border border-border bg-bg-soft p-3 text-center rounded">
                                    <p className="text-[9px] font-mono uppercase text-muted">Score</p>
                                    <p className="text-xl font-bold text-accent">{score}</p>
                                </div>
                                <div className="border border-border bg-bg-soft p-3 text-center rounded">
                                    <p className="text-[9px] font-mono uppercase text-muted">Level</p>
                                    <p className="text-xl font-bold text-accent-2">{level}</p>
                                </div>
                                <div className="border border-border bg-bg-soft p-3 text-center rounded">
                                    <p className="text-[9px] font-mono uppercase text-muted">Lines</p>
                                    <p className="text-xl font-bold text-accent-3">{lines}</p>
                                </div>
                                <div className="border border-border bg-bg-soft p-3 text-center rounded">
                                    <p className="text-[9px] font-mono uppercase text-muted mb-1.5">Next Piece</p>
                                    <div className="flex justify-center items-center h-10">{renderNextPiece()}</div>
                                </div>
                                <div className="border border-border bg-bg-soft p-3 rounded">
                                    <p className="text-[9px] font-mono uppercase text-muted mb-2 text-center">Controls</p>
                                    <div className="text-[10px] font-mono text-muted space-y-1">
                                        <p>&larr; &rarr; : Move</p>
                                        <p>&darr; : Soft Drop</p>
                                        <p>&uarr; : Rotate</p>
                                        <p>Space : Hard Drop</p>
                                        <p>P : Pause</p>
                                    </div>
                                </div>
                                {isPlaying && !gameOver && (
                                    <button onClick={() => setIsPaused(!isPaused)} className="px-3 py-2 border border-border bg-bg hover:bg-bg-soft rounded text-xs font-mono uppercase tracking-wider text-text font-bold">
                                        {isPaused ? 'Resume' : 'Pause'}
                                    </button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default FunEasterEgg;
