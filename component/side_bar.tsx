"use client";
import {
    Home,
    Users,
    MessageSquare,
    Gamepad2,
    History,
    UserCircle,
    Settings,
    LogOut,
    Hexagon,
    CircleX,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const currentUser = {
    name: "Loay",
    level: 42,
    avatar: "https://i.pravatar.cc/150?img=3",
};

const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "friends", label: "Friends", icon: Users },
    { id: "messages", label: "Messages", icon: MessageSquare, badge: 3 },
    { id: "games", label: "Games", icon: Gamepad2 },
    { id: "history", label: "Match History", icon: History },
    { id: "profile", label: "Profile", icon: UserCircle },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "logout", label: "Logout", icon: LogOut },
];



function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const pathname = usePathname();

    return (
        <aside
            className={`shrink-0 bg-primary border-r border-navy-800 flex flex-col h-full transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"
                }`}
        >
            <div className="flex items-center justify-between p-5 h-20 border-b border-navy-900">
                {!isCollapsed && (
                    <div className="flex justify-between w-full items-center">
                        <div className="flex items-center gap-2 animate-fade-in">
                            <Hexagon className="w-6 h-6 text-electric-400 fill-electric-400/10" />
                            <span className="font-bold tracking-wider text-white uppercase text-lg">
                                Game<span className="text-electric-400">Arena</span>
                            </span>
                        </div>
                        <CircleX
                            size={24}
                            onClick={() => setIsCollapsed(true)}
                            className="text-slate-400 hover:bg-navy-900 hover:text-slate-200"
                        />
                    </div>
                )}
                {isCollapsed && (
                    <Hexagon
                        className="w-6 h-6 text-electric-400 mx-auto"
                        onClick={() => setIsCollapsed(false)}
                    />
                )}
            </div>

            <nav className="flex-1 py-6 px-3 flex flex-col gap-4 overflow-y-auto custom-scrollbar">
                {!isCollapsed && (
                    <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase px-3 mb-2">
                        Main Menu
                    </span>
                )}

                {navItems.map(({ id, label, icon: Icon, badge }) => {
                    const isActive = pathname === `/${id}`;
                    return (
                        <Link
                            href={`/${id}`}
                            key={id}
                            className={`flex items-center gap-3 p-3 rounded-xl font-medium transition-colors 
                ${isActive
                                    ? "bg-slate-800"
                                    : "text-slate-400 hover:bg-navy-900 hover:text-slate-200"
                                }
                ${isCollapsed && "justify-center"}`}
                        >
                            <Icon size={20} className="shrink-0" />

                            {!isCollapsed && (
                                <span className="text-sm truncate">{label}</span>
                            )}

                            {badge && !isCollapsed && (
                                <span className="ml-auto bg-electric-500 text-navy-950 text-xs font-bold px-1.5 py-0.5 rounded-md min-w-5 text-center">
                                    {badge}
                                </span>
                            )}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-navy-900 bg-primary/50 backdrop-blur-sm">
                <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-navy-900/60 transition-all group cursor-pointer">
                    <div className="relative shrink-0">
                        <img
                            src={currentUser.avatar}
                            alt={currentUser.name}
                            className="w-10 h-10 rounded-xl object-cover border border-navy-800 group-hover:border-electric-400 transition-colors"
                        />
                        <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-navy-950" />
                    </div>

                    {!isCollapsed && (
                        <>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-semibold text-slate-200 truncate">
                                    {currentUser.name}
                                </h4>
                                <p className="text-xs text-electric-400 font-medium">
                                    LVL {currentUser.level}
                                </p>
                            </div>
                            <button className="p-1.5 text-slate-500 hover:text-rose-400 rounded-lg hover:bg-rose-500/10 transition-colors">
                                <LogOut size={16} />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </aside>
    );
}

export { Sidebar };
