import type { Session } from "next-auth"

export function UserAvatar({ session }: { session: Session | null }) {
    return (
        <div>
            <img
                src={session?.user?.image}
                alt="User Avatar"
            />
        </div>
    )
}