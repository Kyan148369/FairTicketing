import { useSession } from "next-auth/react"
import {UserInfo} from "@/app/UserInfo";

export default function Details() {
    const { data: session } = useSession()

    return (
        <>
            <nav className="w-10 h-10">
                <UserInfo session={session} />
            </nav>
        </>
    )
}