"use client";
import { RotateCcw, Trophy, Users, X as XIcon, Circle } from "lucide-react";
import { useEffect, useState } from "react";

type Player = "X" | "O";
type Cell = Player | null;
type Board = Cell[];

const WIN_COMBOS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
];

function checkWinner(board: Board): { winner: Player; line: number[] } | null {
    for (const combo of WIN_COMBOS) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return { winner: board[a]!, line: combo };
        }
    }
    return null;
}

function isDraw(board: Board): boolean {
    return board.every((c) => c !== null);
}

export default function TicTacToe() {
    const [board, setBoard] = useState<Board>(Array(9).fill(null));
    const [turn, setTurn] = useState<Player>("X");
    const [result, setResult] = useState<{ winner: Player; line: number[] } | null>(null);
    const [draw, setDraw] = useState(false);
    const [scores, setScores] = useState({ X: 0, O: 0 });
    const [moves, setMoves] = useState<number[]>([]);

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setTurn("X");
        setResult(null);
        setDraw(false);
        setMoves([]);
    };

    const handleClick = (i: number) => {
        if (board[i] || result || draw) return;
        const next = [...board];
        next[i] = turn;
        setBoard(next);
        setMoves((prev) => [...prev, i]);

        const w = checkWinner(next);
        if (w) {
            setResult(w);
            setScores((s) => ({ ...s, [w.winner]: s[w.winner] + 1 }));
            return;
        }

        if (isDraw(next)) {
            setDraw(true);
            return;
        }

        setTurn((t) => (t === "X" ? "O" : "X"));
    };

    return (
        <div className="flex items-center justify-center h-full relative z-10 p-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 animate-fade-in">

                {/* Scoreboard */}
                <div className="flex lg:flex-col gap-6 order-2 lg:order-1">
                    <div className="bg-bg-card/80 backdrop-blur-xl border border-border/60 rounded-2xl p-5 w-32 text-center">
                        <XIcon className="w-5 h-5 text-neon-cyan mx-auto mb-1" />
                        <p className="text-3xl font-black text-white">{scores.X}</p>
                        <p className="text-[10px] text-text-secondary uppercase tracking-widest mt-1">Wins</p>
                    </div>
                    <div className="bg-bg-card/80 backdrop-blur-xl border border-border/60 rounded-2xl p-5 w-32 text-center">
                        <Circle className="w-5 h-5 text-neon-purple mx-auto mb-1" />
                        <p className="text-3xl font-black text-white">{scores.O}</p>
                        <p className="text-[10px] text-text-secondary uppercase tracking-widest mt-1">Wins</p>
                    </div>
                </div>

                {/* Board */}
                <div className="relative order-1 lg:order-2">
                    <div className="absolute -inset-10 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-purple/10 rounded-[4rem] blur-3xl pointer-events-none" />
                    <div className="relative bg-bg-card/80 backdrop-blur-2xl border border-border/60 rounded-3xl p-6 shadow-[0_0_60px_-20px_#7c5cfc30]">
                        <div className="flex items-center justify-between mb-6 px-1">
                            <div className="flex items-center gap-2.5">
                                {turn === "X" ? (
                                    <XIcon className="w-5 h-5 text-neon-cyan" />
                                ) : (
                                    <Circle className="w-5 h-5 text-neon-purple" />
                                )}
                                <span className="text-sm font-bold text-text-secondary">
                                    {result ? `${result.winner} wins!` : draw ? "Draw!" : `${turn}'s turn`}
                                </span>
                            </div>
                            <button onClick={resetGame} className="p-2 rounded-xl bg-surface/50 border border-border/60 text-text-secondary hover:text-white hover:bg-surface-alt hover:border-primary/40 transition-all duration-200 cursor-pointer">
                                <RotateCcw className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="grid grid-cols-3 gap-2.5">
                            {board.map((cell, i) => {
                                const isWinCell = result?.line.includes(i);
                                return (
                                    <button key={i} onClick={() => handleClick(i)}
                                        className={`relative w-24 h-24 rounded-2xl border-2 transition-all duration-200 overflow-hidden ${cell ? "cursor-default" : "cursor-pointer hover:border-primary/40"} ${isWinCell ? "border-neon-green/80 shadow-[0_0_20px_-5px_#00e5a0]" : cell ? "border-border/80" : "border-border/40 bg-bg-card/40 hover:bg-bg-card/60"}`}
                                    >
                                        {!cell && <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200" />}
                                        {isWinCell && <div className="absolute inset-0 bg-neon-green/10 animate-pulse rounded-2xl" />}
                                        <span className="relative z-10 flex items-center justify-center w-full h-full">
                                            {cell === "X" && <XIcon className={`w-11 h-11 ${isWinCell ? "text-neon-green" : "text-neon-cyan"} drop-shadow-[0_0_8px_${isWinCell ? "#00e5a0" : "#00d2ff"}]`} />}
                                            {cell === "O" && <Circle className={`w-11 h-11 ${isWinCell ? "text-neon-green" : "text-neon-purple"} drop-shadow-[0_0_8px_${isWinCell ? "#00e5a0" : "#e040fb"}]`} />}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Moves history */}
                <div className="order-3">
                    <div className="bg-bg-card/80 backdrop-blur-xl border border-border/60 rounded-2xl p-5 w-32">
                        <p className="text-[10px] text-text-secondary uppercase tracking-widest mb-3 text-center font-bold">Moves</p>
                        <div className="flex flex-col-reverse gap-1 max-h-48 overflow-y-auto custom-scrollbar">
                            {moves.length === 0 && <p className="text-[11px] text-text-muted text-center">—</p>}
                            {moves.map((idx, step) => (
                                <div key={step} className="flex items-center gap-2 text-[11px] font-medium text-text-secondary/70 bg-surface/30 rounded-lg px-2.5 py-1.5">
                                    <span className={step % 2 === 0 ? "text-neon-cyan" : "text-neon-purple"}>{step % 2 === 0 ? "X" : "O"}</span>
                                    <span className="text-text-muted">pos {idx + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
