import { useState, useEffect, useCallback, useRef } from 'react'
import {
    BOARD_WIDTH,
    BOARD_HEIGHT,
    TETROMINOES,
    TetrominoType,
    Board,
    Piece,
    createEmptyBoard,
    getRandomTetromino
} from '@/lib/tetris'

export function useTetris() {
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

    return {
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
    }
}
