import Image from "next/image";
import { useState } from "react";
// import { Menu } from "lucide-react";


export default function Home() {
const [open, setOpen] = useState(false);


return (
<div className="min-h-screen flex flex-col font-sans">
{/* Navbar */}
<header className="flex justify-between items-center px-6 py-4 border-b text-sm">
<div className="flex items-center space-x-6">
<button onClick={() => setOpen(!open)}>
{/* <Menu className="w-6 h-6" /> */}
</button>
<nav className="hidden md:flex space-x-4 font-medium">
<a href="#" className="hover:text-orange-500">Live</a>
<a href="#" className="hover:text-orange-500">Push</a>
<a href="#" className="hover:text-orange-500">Move</a>
<a href="#" className="hover:text-orange-500">Note</a>
<a href="#" className="hover:text-orange-500">Link</a>
<a href="#" className="hover:text-orange-500">Shop</a>
<a href="#" className="hover:text-orange-500">Packs</a>
<a href="#" className="hover:text-orange-500">Help</a>
<a href="#" className="text-orange-500">More +</a>
</nav>
</div>
<div className="flex items-center space-x-4">
<a href="#" className="text-blue-600 font-medium">Try Live 12 for free</a>
<a href="#" className="hover:underline">Log in or register</a>
</div>
</header>


{/* Hero Section */}
<main className="flex-1 flex flex-col items-center justify-center text-center px-4">
<div className="relative w-full max-w-5xl">
<Image
src="/studio.png"
alt="Ableton Studio"
width={1200}
height={600}
className="rounded-xl shadow-lg"
/>
<h1 className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-red-500">
Ableton
</h1>
</div>
</main>
</div>
);
}