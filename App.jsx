


import Footer from './Components/Layout/Footer'
import Navigation from './Components/Layout/Navigation'
import Header from './Components/Layout/Header'
import Hero from './Components/Sections/Hero'
import Button from './Components/Common/Button'
import Card from './Components/Common/Card'
import './App.css'

import imgAlpha from './assets/images/57fe5f55de2d4285914630665d1e4867_320_320.jpg';
import imgBravo from './assets/images/80ec61228860937.Y3JvcCw4NTAsNjY0LDAsMTE1.png';
import imgCharlie from './assets/images/b8f5f22ab24112b21cc5bcd11ed44b64.jpg';
import imgDelta from './assets/images/Bomaye-Artwork.jpeg';
import imgEcho from './assets/images/images.jpg';
import imgFoxtrot from './assets/images/KYBETd7BNjmatatu-culture.jpg';
import imgGolf from './assets/images/matatu-culture-in-Kenya-The-best-matatus-in-Kenya-latest-matatus-in-Kenya-Nganya-in-Kenya-matatus-in-Africa-4-300x155.jpg';
import imgHotel from './assets/images/Popular-Nairobi-Nga_1756977662-16x9.jpg';

function App() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-10"> {/* Add padding-top to account for fixed navigation */}
        <Header />
        <Hero />
  {/* Buses Section */}
  <section className="py-16 bg-gray-50 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Buses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Bus A */}
              <div className="bg-black rounded-lg shadow-md overflow-hidden flex flex-col">
                <img src={imgAlpha} alt="Alpha" className="w-full h-48 object-cover" />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Panda</h3>
                    <p className="text-gray-600 mb-4">Route: CBD to Westlands</p>
                  </div>
                  <p className="text-blue-600 font-semibold">Fare: 100/=</p>
                </div>
              </div>
              {/* Bus B */}
              <div className="bg-black rounded-lg shadow-md overflow-hidden flex flex-col">
                <img src={imgBravo} alt="Bravo" className="w-full h-48 object-cover" />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Eagle</h3>
                    <p className="text-gray-600 mb-4">Route: CBD to Karen</p>
                  </div>
                  <p className="text-blue-600 font-semibold">Fare: 150/=</p>
                </div>
              </div>
              {/* Bus C */}
              <div className="bg-black rounded-lg shadow-md overflow-hidden flex flex-col">
                <img src={imgCharlie} alt="Charlie" className="w-full h-48 object-cover" />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Lion</h3>
                    <p className="text-gray-600 mb-4">Route: CBD to Rongai</p>
                  </div>
                  <p className="text-blue-600 font-semibold">Fare: 200/=</p>
                </div>
              </div>
              {/* Bus D */}
              <div className="bg-black rounded-lg shadow-md overflow-hidden flex flex-col">
                <img src={imgDelta} alt="Delta" className="w-full h-48 object-cover" />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cheetah</h3>
                    <p className="text-gray-600 mb-4">Route: CBD to Kitengela</p>
                  </div>
                  <p className="text-blue-600 font-semibold">Fare: 200/=</p>
                </div>
              </div>
              {/* Bus E */}
              <div className="bg-black rounded-lg shadow-md overflow-hidden flex flex-col">
                <img src={imgEcho} alt="Echo" className="w-full h-48 object-cover" />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Lion</h3>
                    <p className="text-gray-600 mb-4">Route: CBD to Tajmall</p>
                  </div>
                  <p className="text-blue-600 font-semibold">Fare: 100/=</p>
                </div>
              </div>
              {/* Bus F */}
              <div className="bg-black rounded-lg shadow-md overflow-hidden flex flex-col">
                <img src={imgFoxtrot} alt="Foxtrot" className="w-full h-48 object-cover" />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fox</h3>
                    <p className="text-gray-600 mb-4">Route: CBD to Thika</p>
                  </div>
                  <p className="text-blue-600 font-semibold">Fare: 200/=</p>
                </div>
              </div>
              {/* Bus G */}
              <div className="bg-black rounded-lg shadow-md overflow-hidden flex flex-col">
                <img src={imgGolf} alt="Golf" className="w-full h-48 object-cover" />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Zebra</h3>
                    <p className="text-gray-600 mb-4">Route: CBD to Kawangware</p>
                  </div>
                  <p className="text-blue-600 font-semibold">Fare: 110/=</p>
                </div>
              </div>
              {/* Bus H */}
              <div className="bg-black rounded-lg shadow-md overflow-hidden flex flex-col">
                <img src={imgHotel} alt="Hotel" className="w-full h-48 object-cover" />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Tiger</h3>
                    <p className="text-gray-600 mb-4">Route: CBD to Umoja</p>
                  </div>
                  <p className="text-blue-600 font-semibold">Fare: 130/=</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

export default App
