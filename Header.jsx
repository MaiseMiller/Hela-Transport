const Header = () => {
  return (
    <header className="bg-gradient-to-r from-brown-900 to-brown-700 py-8 shadow-lg">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-2 tracking-tight">
          Hela <span className="text-amber-300">Transport</span>
        </h1>
        <p className="text-lg md:text-xl text-blue-100 font-medium text-center max-w-2xl">
          Reliable, comfortable, and affordable rides across the city. Your journey starts here.
        </p>
      </div>
    </header>
  )
}
export default Header
