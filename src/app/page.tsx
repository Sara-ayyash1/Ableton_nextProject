
export default function Home() {
return (

<div className="min-h-screen flex flex-col ">

{/* Hero Section */}
<main className="flex-1 flex flex-col items-center justify-center text-center px-4">
<div
  className="w-full max-w-7xl h-[600px] mx-auto bg-no-repeat bg-cover bg-center"
  style={{ backgroundImage: "url('/header.avif')" }}
>
  <h1 className="flex justify-center items-center h-full text-5xl font-bold text-red-500">
    Ableton
  </h1>
</div>

</main>

<div className="max-w-4xl mx-auto my-12 px-4">
  <div className="space-y-4">
    <h1 className="text-l md:text-xl font-semibold leading-relaxed">
      We make 
      <a href="/en/live/" className="text-blue-600 hover:underline"> Live</a>, 
      <a href="/en/push/" className="text-blue-600 hover:underline"> Push</a>, 
      <a href="/en/note/" className="text-blue-600 hover:underline"> Note</a>, 
      <a href="/en/move/" className="text-blue-600 hover:underline"> Move </a> 
      and  
      <a href="/en/link/" className="text-blue-600 hover:underline"> Link</a> 
      — unique software and hardware for music creation and performance. 
      With these products, our community of users creates amazing things.
    </h1>

    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
      Ableton was founded in 1999 and released the first version of Live in 2001. 
      Our products are used by a community of dedicated musicians, sound designers, 
      and artists from across the world.
    </p>
  </div>
</div>


</div>
);
}