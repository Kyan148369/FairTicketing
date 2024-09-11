import { Moon, Sun, Ticket } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import type { Session } from "next-auth";
import {UserAvatar} from "@/app/UserAvatar";
import Dashboard from "@/app/dashboard";
import Details from "@/app/details";
import {SignOut} from "@/components/ui/SignOut";

export default function Menu({ session }: { session: Session | null }) {
    const [darkMode, setDarkMode] = useState(false);
    const [active, setActive] = useState('home');
    const [hover, setHover] = useState(false);

    // Toggle dark mode
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <header className="sticky top-0 z-10 bg-white dark:bg-[#111827] shadow-md">
            <div className="container mx-auto px-4 py-4 flex items-center">
                <div className="flex items-center w-1/4 space-x-4">
                    <Ticket className="h-12 w-12 text-purple-600 dark:text-purple-400" aria-label="Ticket Icon"/>
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white">SolanaTickets</h1>
                </div>
                <nav className="hidden justify-center md:flex space-x-4 w-3/4">
                    <div
                        className={`px-5 py-3 rounded-3xl ${active === 'home' ? 'bg-[#cfcfcf] dark:bg-[#1f2937]' : ''}`}>
                        <a href="/"
                           onClick={() => setActive('home')}
                           className="text-xl font-bold text-gray-600 dark:text-gray-300 hover:bg-[#d8d8d8] dark:hover:bg-[#1f2937] px-5 py-3 rounded-3xl">
                            Home
                        </a>
                    </div>
                    <div
                        className={`px-5 py-3 rounded-3xl ${active === 'events' ? 'bg-[#cfcfcf] dark:bg-[#1f2937]' : ''}`}>
                        <a href="/Events"
                           onClick={() => setActive('events')}
                           className="text-xl font-bold text-gray-600 dark:text-gray-300 hover:bg-[#d8d8d8] dark:hover:bg-[#1f2937] px-5 py-3 rounded-3xl">
                            Events
                        </a>
                    </div>
                    <div
                        className={`px-5 py-3 rounded-3xl ${active === 'tickets' ? 'bg-[#cfcfcf] dark:bg-[#1f2937]' : ''}`}>
                        <a href="#"
                           onClick={() => setActive('tickets')}
                           className="text-xl font-bold text-gray-600 dark:text-gray-300 hover:bg-[#d8d8d8] dark:hover:bg-[#1f2937] px-5 py-3 rounded-3xl">
                            My Tickets
                        </a>
                    </div>
                </nav>

                <div className="flex items-center justify-end space-x-2">
                    <Sun className="h-5 w-5 text-gray-600 dark:text-gray-400" aria-label="Sun Icon"/>
                    <Switch
                        checked={darkMode}
                        onCheckedChange={setDarkMode}
                        aria-label="Toggle dark mode"
                    />
                    <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" aria-label="Moon Icon"/>
                </div>

                <div
                    className="relative"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    {/* Wrap both Dashboard and the hoverable dropdown in a common container */}
                    <div className="flex">
                        <Dashboard/>

                        {hover && (
                            <div
                                className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                                <Details/>
                                <div className="mt-2">
                                    <button className="w-full bg-blue-500 text-white py-1 px-2 rounded-md text-sm">
                                        <SignOut/>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </header>
    );
}
