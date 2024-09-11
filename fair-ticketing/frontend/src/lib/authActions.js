"use server";

import { signIn } from "@/app/auth";

export async function handleSignIn() {
    await signIn("github");
}