'use client'
import Grid from "@/app/components/grid";
import Menu from "@/app/header";
import Footer from "@/components/ui/footer";
import { useSession } from "next-auth/react"
export default function Event(){

    return(
        <>
            <div className={`bg-white dark:bg-[#111827] min-h-screen flex flex-col `}>
            <Menu/>
            <Grid/>
            <Footer/>
            </div>
        </>
    )
}