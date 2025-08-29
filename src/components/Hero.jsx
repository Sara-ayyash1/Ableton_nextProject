export default function Hero({ title, backgroundImage, height = "600px" }) {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
      <div
        className="w-full max-w-7xl mx-auto bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: height,
        }}
      >
        <h1 className="flex justify-center items-center h-full text-5xl font-bold text-red-500">
          {title}
        </h1>
      </div>
    </main>
  );
}
