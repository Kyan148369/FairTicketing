import type { Session } from "next-auth"

export function UserInfo({ session }: { session: Session | null }) {
    return (
        <div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{session?.user?.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{session?.user?.email}</p>
        </div>
    )
}