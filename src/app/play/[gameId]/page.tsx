"use client";

import { use, useEffect, useState, useRef } from "react";
import Link from "next/link";
import { getGameById, Game } from "@/lib/games";
import { notFound } from "next/navigation";

export default function GamePage({ params }: { params: Promise<{ gameId: string }> }) {
    const resolvedParams = use(params);
    const game = getGameById(resolvedParams.gameId);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    if (!game) {
        notFound();
    }

    const toggleFullscreen = () => {
        if (!iframeRef.current) return;

        if (!document.fullscreenElement) {
            iframeRef.current.requestFullscreen().catch((err) => {
                console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    };

    // Listen for fullscreen changes to update state
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);


    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            {/* Game Header */}
            <div className="bg-[#111] border-b border-[#222] p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                        ← Back to Home
                    </Link>
                    <div className="h-6 w-px bg-gray-800 mx-2"></div>
                    <h1 className="text-lg font-bold">{game.title}</h1>
                </div>

                <button
                    onClick={toggleFullscreen}
                    className="bg-[#222] hover:bg-[#333] text-sm font-bold py-2 px-4 rounded border border-[#333] transition-colors flex items-center gap-2"
                >
                    {isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
                    <span className="text-xs text-gray-500">
                        {isFullscreen ? '(Esc)' : '(F)'}
                    </span>
                </button>
            </div>

            {/* Game Container */}
            <div className="flex-grow flex items-center justify-center bg-black relative">
                <iframe
                    ref={iframeRef}
                    src={`/games/${game.exportPath}`}
                    className="w-full h-full border-0 absolute inset-0"
                    allow="fullscreen; autoplay; clipboard-write"
                    title={game.title}
                />
            </div>

            {/* Game Info Footer (optional, hidden in fullscreen) */}
            <div className="bg-[#050505] border-t border-[#222] p-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold mb-2">{game.title}</h2>
                    <p className="text-gray-400">{game.description}</p>
                </div>
            </div>
        </div>
    );
}
