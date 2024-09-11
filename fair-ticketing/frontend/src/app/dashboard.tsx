import { useSession } from "next-auth/react"
import {UserAvatar} from "@/app/UserAvatar";

export default function Dashboard() {
    const { data: session } = useSession()

    return (
        <>
        <nav className="w-10 h-10">
            <UserAvatar session={session} />
        </nav>
        </>
    )
}