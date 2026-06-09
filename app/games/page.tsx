import Link from "next/link";

function GamesPage() {
    const gameList = [
        { name: "Tic Tac Toe", path: "/tic-tac-toe" },
        { name: "Snake", path: "/snake" },
        { name: "Pong", path: "/pong" },
    ];

    return (
        <div className="">
            <h1 className="text-4xl font-bold text-slate-200">Games Page</h1>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gameList.map((game) => (
                    <div key={game.name} className="p-6 bg-primary rounded-lg shadow-md hover:bg-electric-800 transition-colors cursor-pointer">
                        <Link href={game.path} className="text-xl font-semibold text-white">
                            {game.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div >
    );
}


export default GamesPage;