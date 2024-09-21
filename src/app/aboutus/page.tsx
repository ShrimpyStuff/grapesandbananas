import { Navbar } from "../page";
import React from 'react'

export default function Page() {
    async function handleClick() {
        'use server';
        console.log("Hello");
    }

    return (
        <main>
            <Navbar></Navbar>
            <form action={handleClick}>
                <button type="submit">Likes</button>
            </form>
            <footer>Made by Z, A, and S.</footer>
        </main>
    )
}
