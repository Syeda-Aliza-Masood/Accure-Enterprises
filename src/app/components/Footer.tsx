import { Facebook, Linkedin, Instagram, Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 mt-auto">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + Title + Description */}
          <div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 relative">
                <Image
                  src="/logo2.png"
                  alt="Accure Enterprises Logo"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold">Accure Enterprises</h1>
                <p className="text-xs text-gray-300">Switching To Accuracy</p>
              </div>
            </div>
            <p className="text-base leading-relaxed mt-4">
              Accure Enterprises is a trusted name in technology solutions, delivering high-quality products and reliable services in electrical, solar, surveillance, lighting, automation, and custom fabrication to power homes, businesses, and industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-base">
              <li><Link href="/" className="hover:text-blue-700 transition-colors duration-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-700 transition-colors duration-300">About Us</Link></li>
              <li><Link href="/services" className="hover:text-blue-700 transition-colors duration-300">Services</Link></li>
              <li><Link href="/projects" className="hover:text-blue-700 transition-colors duration-300">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-blue-700 transition-colors duration-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-base">
              <li><Link href="/services/1" className="hover:text-blue-700 transition-colors duration-300">Surveillance System</Link></li>
              <li><Link href="/services/2" className="hover:text-blue-700 transition-colors duration-300">Solar Solutions</Link></li>
              <li><Link href="/services/3" className="hover:text-blue-700 transition-colors duration-300">Electrical Distribution</Link></li>
              <li><Link href="/services/4" className="hover:text-blue-700 transition-colors duration-300">Lighting System</Link></li>
              <li><Link href="/services/5" className="hover:text-blue-700 transition-colors duration-300">Industrial Automation</Link></li>
              <li><Link href="/services/6" className="hover:text-blue-700 transition-colors duration-300">Custom Fabrication</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-blue-700 mr-2" />
                <p className="text-base">Karachi, Pakistan</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-blue-700 mr-2" />
                <div>
                  <p className="text-base">021-33483019</p>
                  <p className="text-base">0325-2658029</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-blue-700 mr-2" />
                <div>
                  <p className="text-base">accureenterprises@gmail.com</p>
                  <p className="text-base">contact@accureengineering.com</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/accureenterprises/?igsh=MWIzY29iMzR1b2V6ZA%3D%3D#" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 p-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61578222690057&sk=about" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 p-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/company/accure-enterprises/posts/?feedView=all" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 p-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="https://urldefense.proofpoint.com/v2/url?u=http-3A__wa.me_-2B923252658029&d=DwMFaQ&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=o--fgKM70LzvCSCNBuqUSZ77_6cfWdEwm3-Fj6qpLFCwbJurwg1rCJ6ws8XfmLBj&m=AFkyFC0C3W1ULJzabMu_AmmzhOAlVBfqjFcnqCwBQ6XY6_JjhuYvA_P3KpZ9AmaL&s=WQd-YMJ0Wykeq833vdeHrYqP_Najzp797WQ-3GFsjzE&e=" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 p-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-700 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Accure Enterprises. All Rights Reserved. | Powering Your Future with Excellence
          </p>
        </div>
      </div>
    </footer>
  )
}
