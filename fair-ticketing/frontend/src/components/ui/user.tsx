import { auth } from "@/app/auth"
import { UserAvatar } from "../../app/UserAvatar"

export default function Dashboard({ session }) {
    return (
        <nav>
            <UserAvatar session={session} />
        </nav>
    )
}

export async function getServerSideProps(ctx) {
    const session = await auth(ctx)

    return {
        props: {
            session,
        },
    }
}