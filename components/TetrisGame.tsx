"use client"
import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import SectionHeading from './SectionHeading'

// Tetris Constants
const BOARD_WIDTH = 10
const BOARD_HEIGHT = 20
const CELL_SIZE = 24

// Tetromino shapes with their colors
const TETROMINOES = {
    I: {
        shape: [[1, 1, 1, 1]],
        color: '#00f5ff', // Cyan
    },
    O: {
        shape: [
            [1, 1],
            [1, 1],
        ],
        color: '#ffd700', // Yellow
    },
    T: {
        shape: [
            [0, 1, 0],
            [1, 1, 1],
        ],
        color: '#a855f7', // Purple
    },
    S: {
        shape: [
            [0, 1, 1],
            [1, 1, 0],
        ],
        color: '#22c55e', // Green
    },
    Z: {
        shape: [
            [1, 1, 0],
            [0, 1, 1],
        ],
        color: '#ef4444', // Red
    },
    J: {
        shape: [
            [1, 0, 0],
            [1, 1, 1],
        ],
        color: '#3b82f6', // Blue
    },
    L: {
        shape: [
            [0, 0, 1],
            [1, 1, 1],
        ],
        color: '#f97316', // Orange
    },
}

type TetrominoType = keyof typeof TETROMINOES
type Board = (string | null)[][]

interface Piece {
    type: TetrominoType
    shape: number[][]
    color: string
    x: number
    y: number
}

const createEmptyBoard = (): Board => {
    return Array(BOARD_HEIGHT)
        .fill(null)
        .map(() => Array(BOARD_WIDTH).fill(null))
}

const getRandomTetromino = (): TetrominoType => {
    const types = Object.keys(TETROMINOES) as TetrominoType[]
    return types[Math.floor(Math.random() * types.length)]
}

const TetrisGame = () => {
    const { ref } = useSectionInView('Fun')
    
    const [board, setBoard] = useState<Board>(createEmptyBoard())
    const [currentPiece, setCurrentPiece] = useState<Piece | null>(null)
    const [nextPiece, setNextPiece] = useState<TetrominoType>('T')
    const [score, setScore] = useState(0)
    const [lines, setLines] = useState(0)
    const [level, setLevel] = useState(1)
    const [gameOver, setGameOver] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    
    const gameLoopRef = useRef<NodeJS.Timeout | null>(null)

    const createNewPiece = useCallback((type: TetrominoType): Piece => {
        const tetromino = TETROMINOES[type]
        return {
            type,
            shape: tetromino.shape.map(row => [...row]),
            color: tetromino.color,
            x: Math.floor(BOARD_WIDTH / 2) - Math.floor(tetromino.shape[0].length / 2),
            y: 0,
        }
    }, [])

    const isValidMove = useCallback((piece: Piece, board: Board, offsetX = 0, offsetY = 0): boolean => {
        for (let y = 0; y < piece.shape.length; y++) {
            for (let x = 0; x < piece.shape[y].length; x++) {
                if (piece.shape[y][x]) {
                    const newX = piece.x + x + offsetX
                    const newY = piece.y + y + offsetY
                    
                    if (newX < 0 || newX >= BOARD_WIDTH || newY >= BOARD_HEIGHT) {
                        return false
                    }
                    
                    if (newY >= 0 && board[newY][newX]) {
                        return false
                    }
                }
            }
        }
        return true
    }, [])

    const rotatePiece = useCallback((piece: Piece): number[][] => {
        const rows = piece.shape.length
        const cols = piece.shape[0].length
        const rotated: number[][] = []
        
        for (let x = 0; x < cols; x++) {
            rotated[x] = []
            for (let y = rows - 1; y >= 0; y--) {
                rotated[x][rows - 1 - y] = piece.shape[y][x]
            }
        }
        
        return rotated
    }, [])

    const placePiece = useCallback((piece: Piece, board: Board): Board => {
        const newBoard = board.map(row => [...row])
        
        for (let y = 0; y < piece.shape.length; y++) {
            for (let x = 0; x < piece.shape[y].length; x++) {
                if (piece.shape[y][x] && piece.y + y >= 0) {
                    newBoard[piece.y + y][piece.x + x] = piece.color
                }
            }
        }
        
        return newBoard
    }, [])

    const clearLines = useCallback((board: Board): { newBoard: Board; linesCleared: number } => {
        let linesCleared = 0
        const newBoard = board.filter(row => {
            const isFull = row.every(cell => cell !== null)
            if (isFull) linesCleared++
            return !isFull
        })
        
        while (newBoard.length < BOARD_HEIGHT) {
            newBoard.unshift(Array(BOARD_WIDTH).fill(null))
        }
        
        return { newBoard, linesCleared }
    }, [])

    const calculateScore = useCallback((linesCleared: number, currentLevel: number): number => {
        const basePoints = [0, 100, 300, 500, 800]
        return basePoints[linesCleared] * currentLevel
    }, [])

    const startGame = useCallback(() => {
        setBoard(createEmptyBoard())
        setScore(0)
        setLines(0)
        setLevel(1)
        setGameOver(false)
        setIsPaused(false)
        setIsPlaying(true)
        
        const firstPiece = createNewPiece(getRandomTetromino())
        setCurrentPiece(firstPiece)
        setNextPiece(getRandomTetromino())
    }, [createNewPiece])

    const moveDown = useCallback(() => {
        if (!currentPiece || isPaused || gameOver) return
        
        if (isValidMove(currentPiece, board, 0, 1)) {
            setCurrentPiece(prev => prev ? { ...prev, y: prev.y + 1 } : null)
        } else {
            // Place piece and check for lines
            const newBoard = placePiece(currentPiece, board)
            const { newBoard: clearedBoard, linesCleared } = clearLines(newBoard)
            
            setBoard(clearedBoard)
            
            if (linesCleared > 0) {
                setLines(prev => {
                    const newLines = prev + linesCleared
                    const newLevel = Math.floor(newLines / 10) + 1
                    setLevel(newLevel)
                    return newLines
                })
                setScore(prev => prev + calculateScore(linesCleared, level))
            }
            
            // Spawn new piece
            const newPiece = createNewPiece(nextPiece)
            
            if (!isValidMove(newPiece, clearedBoard)) {
                setGameOver(true)
                setIsPlaying(false)
            } else {
                setCurrentPiece(newPiece)
                setNextPiece(getRandomTetromino())
            }
        }
    }, [currentPiece, board, isPaused, gameOver, isValidMove, placePiece, clearLines, calculateScore, level, createNewPiece, nextPiece])

    const moveLeft = useCallback(() => {
        if (!currentPiece || isPaused || gameOver) return
        if (isValidMove(currentPiece, board, -1, 0)) {
            setCurrentPiece(prev => prev ? { ...prev, x: prev.x - 1 } : null)
        }
    }, [currentPiece, board, isPaused, gameOver, isValidMove])

    const moveRight = useCallback(() => {
        if (!currentPiece || isPaused || gameOver) return
        if (isValidMove(currentPiece, board, 1, 0)) {
            setCurrentPiece(prev => prev ? { ...prev, x: prev.x + 1 } : null)
        }
    }, [currentPiece, board, isPaused, gameOver, isValidMove])

    const rotate = useCallback(() => {
        if (!currentPiece || isPaused || gameOver) return
        
        const rotatedShape = rotatePiece(currentPiece)
        const rotatedPiece = { ...currentPiece, shape: rotatedShape }
        
        if (isValidMove(rotatedPiece, board)) {
            setCurrentPiece(rotatedPiece)
        }
    }, [currentPiece, board, isPaused, gameOver, rotatePiece, isValidMove])

    const hardDrop = useCallback(() => {
        if (!currentPiece || isPaused || gameOver) return
        
        let dropDistance = 0
        while (isValidMove(currentPiece, board, 0, dropDistance + 1)) {
            dropDistance++
        }
        
        setCurrentPiece(prev => prev ? { ...prev, y: prev.y + dropDistance } : null)
        setScore(prev => prev + dropDistance * 2)
    }, [currentPiece, board, isPaused, gameOver, isValidMove])

    // Game loop
    useEffect(() => {
        if (isPlaying && !isPaused && !gameOver) {
            const speed = Math.max(100, 1000 - (level - 1) * 100)
            gameLoopRef.current = setInterval(moveDown, speed)
        }
        
        return () => {
            if (gameLoopRef.current) {
                clearInterval(gameLoopRef.current)
            }
        }
    }, [isPlaying, isPaused, gameOver, level, moveDown])

    // Keyboard controls
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isPlaying) return
            
            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault()
                    moveLeft()
                    break
                case 'ArrowRight':
                    e.preventDefault()
                    moveRight()
                    break
                case 'ArrowDown':
                    e.preventDefault()
                    moveDown()
                    break
                case 'ArrowUp':
                    e.preventDefault()
                    rotate()
                    break
                case ' ':
                    e.preventDefault()
                    hardDrop()
                    break
                case 'p':
                case 'P':
                    setIsPaused(prev => !prev)
                    break
            }
        }
        
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isPlaying, moveLeft, moveRight, moveDown, rotate, hardDrop])

    // Render the board with current piece
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

    // Render next piece preview
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

    // Responsive cell size
    const mobileCellSize = 16
    const desktopCellSize = CELL_SIZE

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

            {/* Mobile Stats Bar - Shows on small screens */}
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
            
            {/* Mobile Layout: Game centered with controls below */}
            <div className="lg:hidden flex flex-col items-center gap-4">
                {/* Game Board - Mobile */}
                <div className="glass-card p-2 glow-card">
                    <div 
                        className="relative rounded-lg overflow-hidden"
                        style={{
                            width: BOARD_WIDTH * mobileCellSize + 2,
                            height: BOARD_HEIGHT * mobileCellSize + 2,
                            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))',
                            border: '1px solid rgba(139, 92, 246, 0.3)',
                        }}
                    >
                        {renderBoard().map((row, y) => (
                            <div key={y} className="flex">
                                {row.map((cell, x) => (
                                    <div
                                        key={x}
                                        className="transition-all duration-75"
                                        style={{
                                            width: mobileCellSize,
                                            height: mobileCellSize,
                                            backgroundColor: cell || 'rgba(255, 255, 255, 0.03)',
                                            border: cell ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)',
                                            borderRadius: '1px',
                                            boxShadow: cell ? `inset 0 0 4px rgba(255, 255, 255, 0.3), 0 0 2px ${cell}` : 'none',
                                        }}
                                    />
                                ))}
                            </div>
                        ))}
                        
                        {/* Game Over Overlay */}
                        {gameOver && (
                            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center backdrop-blur-sm">
                                <p className="text-xl font-bold text-white mb-2">Game Over!</p>
                                <p className="text-sm text-gray-300 mb-3">Score: {score}</p>
                                <button
                                    onClick={startGame}
                                    className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
                                >
                                    Play Again
                                </button>
                            </div>
                        )}
                        
                        {/* Pause Overlay */}
                        {isPaused && !gameOver && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">
                                <p className="text-xl font-bold text-white">Paused</p>
                            </div>
                        )}
                        
                        {/* Start Screen */}
                        {!isPlaying && !gameOver && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">
                                <button
                                    onClick={startGame}
                                    className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-bold text-sm hover:scale-105 transition-transform glow-button"
                                >
                                    Start Game
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                
                {/* Mobile Controls - Bottom Layout */}
                <div className="glass-card p-3 w-full max-w-[280px]">
                    {/* D-Pad + Actions Row */}
                    <div className="flex justify-between items-center gap-4">
                        {/* D-Pad */}
                        <div className="grid grid-cols-3 gap-1">
                            <div />
                            <button
                                onClick={rotate}
                                className="w-10 h-10 bg-indigo-500 text-white rounded-lg font-bold text-base active:bg-indigo-600 disabled:opacity-50 flex items-center justify-center touch-manipulation"
                                disabled={!isPlaying || isPaused || gameOver}
                            >
                                ↻
                            </button>
                            <div />
                            <button
                                onClick={moveLeft}
                                className="w-10 h-10 bg-indigo-500 text-white rounded-lg font-bold text-base active:bg-indigo-600 disabled:opacity-50 flex items-center justify-center touch-manipulation"
                                disabled={!isPlaying || isPaused || gameOver}
                            >
                                ←
                            </button>
                            <button
                                onClick={moveDown}
                                className="w-10 h-10 bg-indigo-500 text-white rounded-lg font-bold text-base active:bg-indigo-600 disabled:opacity-50 flex items-center justify-center touch-manipulation"
                                disabled={!isPlaying || isPaused || gameOver}
                            >
                                ↓
                            </button>
                            <button
                                onClick={moveRight}
                                className="w-10 h-10 bg-indigo-500 text-white rounded-lg font-bold text-base active:bg-indigo-600 disabled:opacity-50 flex items-center justify-center touch-manipulation"
                                disabled={!isPlaying || isPaused || gameOver}
                            >
                                →
                            </button>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={hardDrop}
                                className="px-4 py-2 bg-purple-500 text-white rounded-lg font-bold text-xs active:bg-purple-600 disabled:opacity-50 touch-manipulation"
                                disabled={!isPlaying || isPaused || gameOver}
                            >
                                ⬇ DROP
                            </button>
                            {isPlaying && !gameOver && (
                                <button
                                    onClick={() => setIsPaused(prev => !prev)}
                                    className="px-4 py-2 bg-gray-500 text-white rounded-lg font-bold text-xs active:bg-gray-600 touch-manipulation"
                                >
                                    {isPaused ? '▶' : '⏸'}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Desktop Layout */}
            <div className="hidden lg:flex flex-row gap-8 items-center justify-center">
                {/* Game Board - Desktop */}
                <div className="glass-card p-4 glow-card">
                    <div 
                        className="relative rounded-lg overflow-hidden"
                        style={{
                            width: BOARD_WIDTH * desktopCellSize + 2,
                            height: BOARD_HEIGHT * desktopCellSize + 2,
                            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))',
                            border: '1px solid rgba(139, 92, 246, 0.3)',
                        }}
                    >
                        {renderBoard().map((row, y) => (
                            <div key={y} className="flex">
                                {row.map((cell, x) => (
                                    <div
                                        key={x}
                                        className="transition-all duration-75"
                                        style={{
                                            width: desktopCellSize,
                                            height: desktopCellSize,
                                            backgroundColor: cell || 'rgba(255, 255, 255, 0.03)',
                                            border: cell ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)',
                                            borderRadius: '2px',
                                            boxShadow: cell ? `inset 0 0 8px rgba(255, 255, 255, 0.3), 0 0 4px ${cell}` : 'none',
                                        }}
                                    />
                                ))}
                            </div>
                        ))}
                        
                        {/* Game Over Overlay */}
                        {gameOver && (
                            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center backdrop-blur-sm">
                                <p className="text-2xl font-bold text-white mb-2">Game Over!</p>
                                <p className="text-lg text-gray-300 mb-4">Score: {score}</p>
                                <button
                                    onClick={startGame}
                                    className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
                                >
                                    Play Again
                                </button>
                            </div>
                        )}
                        
                        {/* Pause Overlay */}
                        {isPaused && !gameOver && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">
                                <p className="text-2xl font-bold text-white">Paused</p>
                            </div>
                        )}
                        
                        {/* Start Screen */}
                        {!isPlaying && !gameOver && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">
                                <button
                                    onClick={startGame}
                                    className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-bold text-lg hover:scale-105 transition-transform glow-button"
                                >
                                    Start Game
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                
                {/* Side Panel - Desktop */}
                <div className="flex flex-col gap-4">
                    {/* Score Display */}
                    <div className="glass-card p-4 text-center min-w-[150px]">
                        <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Score</p>
                        <p className="text-2xl font-bold gradient-text">{score}</p>
                    </div>
                    
                    {/* Level Display */}
                    <div className="glass-card p-4 text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Level</p>
                        <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{level}</p>
                    </div>
                    
                    {/* Lines Display */}
                    <div className="glass-card p-4 text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Lines</p>
                        <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{lines}</p>
                    </div>
                    
                    {/* Next Piece */}
                    <div className="glass-card p-4 text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Next</p>
                        <div className="flex justify-center items-center h-12">
                            {renderNextPiece()}
                        </div>
                    </div>
                    
                    {/* Controls */}
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
                    
                    {/* Pause/Resume Button */}
                    {isPlaying && !gameOver && (
                        <button
                            onClick={() => setIsPaused(prev => !prev)}
                            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        >
                            {isPaused ? 'Resume' : 'Pause'}
                        </button>
                    )}
                </div>
            </div>
        </motion.section>
    )
}

export default TetrisGame
