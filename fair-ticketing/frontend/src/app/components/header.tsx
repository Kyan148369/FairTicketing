'use client'
import Image from "next/image"
import Link from 'next/link'
import { FaMoon } from "react-icons/fa";
import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


import { Typewriter } from 'react-simple-typewriter'
export default function Header(props: any) {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
        <>
            <div className=" items-center justify-between px-10 pt-40 pb-20">
                <p className={`uppercase text-xl pb-4 text-black dark:text-white`}>All the fun starts here</p>
                <div>
                    <span className={`text-[#16151a] dark:text-white font-bold text-6xl`}>Discover </span>
                    <span className={'text-[#7e22ce] font-bold text-6xl'}><Typewriter
                        words={['Events', 'Workshops', 'Concerts', 'Conferences']}
                        loop={0}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
                </div>
                <div className={'text-[#16151a] dark:text-white font-bold text-6xl'}>
                    <h1>around you.</h1>
                </div>


                <div className="py-10 px-10 mt-10 rounded-xl bg-black dark:bg-white  w-[60%] flex items-center space-x-8">
                    <div className="flex flex-col ">
                        <Select >
                            <h1 className={`text-white white dark:text-black font-bold text-[14px]`}> WHAT </h1>
                            <SelectTrigger className="w-[180px]  text-white dark:text-black">
                                <SelectValue placeholder="Select Category "/>
                            </SelectTrigger>
                            <SelectContent className={`border-0 dark:text-black dark:bg-white `}>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col ">
                        <Select >
                            <h1 className={`text-white dark:text-black  font-bold text-[14px]`}> WHERE </h1>
                            <SelectTrigger className="w-[180px] text-white  dark:text-black">
                                <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                            <SelectContent className={` dark:text-black border-0 `} >
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col ">
                        <Popover>
                            <h1 className={`text-white dark:text-black font-bold text-[14px]`}> WHEN </h1>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[200px] text-white bg-black  dark:text-black dark:bg-white border-0 justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4"/>
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="dark:bg-white bg-black  text-white dark:text-black w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <button className="bg-[#7e22ce] text-white font-bold py-4 px-8 ">
                        Search
                    </button>
                </div>

            </div>
        </>
    );
}
