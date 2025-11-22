const Footer = () => {
  return (
    <footer className="bg-black-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">About Hela Transport</h4>
            <div className="flex flex-col space-y-2">
              <a href="/about" className="hover:text-white transition-colors duration-300">About Us</a>
              <a href="/Services" className="hover:text-white transition-colors duration-300">Services</a>
              <a href="/careers" className="hover:text-white transition-colors duration-300">Careers</a>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <div className="flex flex-col space-y-2">
              <a href="/booking" className="hover:text-white transition-colors duration-300">Book your bus</a>
              <a href="/courrier" className="hover:text-white transition-colors duration-300">Courrier Service</a>
              <a href="/pickuplocation" className="hover:text-white transition-colors duration-300">Pickup Locations</a>
              <a href="/fares" className="hover:text-white transition-colors duration-300">Fares</a>
            </div>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <div className="flex flex-col space-y-2">
              <a href="/terms" className="hover:text-white transition-colors duration-300">Terms & Conditions</a>
              <a href="/privacy" className="hover:text-white transition-colors duration-300">Privacy</a>
              <a href="/security" className="hover:text-white transition-colors duration-300">Security</a>
              <a href="/sitemap" className="hover:text-white transition-colors duration-300">Sitemap</a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="flex flex-col space-y-2">
              <a href="/contact" className="hover:text-white transition-colors duration-300">Contact</a>
              <a href="/support" className="hover:text-white transition-colors duration-300">Support</a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-blue-600 mt-12 pt-8 text-center">
          <p className="text-sm">&copy; 2024 Hela Transport. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
