import Image from 'next/image'
import Link from 'next/link'

let title = "Grapes and Bananas 🍇🍌"

export function Navbar() {
  return(
    <header className='bg-white flex justify-between items-center w-full h-20 text-black sticky nav px-6'>
      <Link href="/"><h1 className="text-2xl">{title}</h1></Link>
      <div id="links" className="flex gap-3">
        <Link href="/aboutus"><h3>About Us</h3></Link>
        <Link href="/ourservices"><h3>Our Services</h3></Link>
        <Link href="/profile"><h3>Profile</h3></Link>
      </div>
    </header>
  )
}

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <h1>Hello</h1>
      <footer>Made by Z, A, and S.</footer>
    </main>
  )
} 