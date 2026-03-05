export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;
export const CELL_SIZE = 24;

export const TETROMINOES = {
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

export type TetrominoType = keyof typeof TETROMINOES;
export type Board = (string | null)[][];

export interface Piece {
    type: TetrominoType;
    shape: number[][];
    color: string;
    x: number;
    y: number;
}

export const createEmptyBoard = (): Board => {
    return Array(BOARD_HEIGHT)
        .fill(null)
        .map(() => Array(BOARD_WIDTH).fill(null))
}

export const getRandomTetromino = (): TetrominoType => {
    const types = Object.keys(TETROMINOES) as TetrominoType[]
    return types[Math.floor(Math.random() * types.length)]
}
