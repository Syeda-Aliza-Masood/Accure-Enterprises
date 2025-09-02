"use client"
import Image from "next/image"
import Link from "next/link"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const services = [
  {
    id: 1,
    title: "Surveillance Systems",
    tagline: "Smart Security, Total Peace of Mind",
    image: "/services/1.png",
    detail:
      "We provide cutting-edge surveillance solutions with HD cameras, remote monitoring, and advanced security analytics.",
  },
  {
    id: 2,
    title: "Solar Solutions",
    tagline: "Clean Energy for a Brighter Tomorrow",
    image: "/services/2.png",
    detail: "Harness the power of the sun with our efficient solar panels and complete installation services.",
  },
  {
    id: 3,
    title: "Electrical Distribution",
    tagline: "Reliable Power Anytime, Anywhere",
    image: "/services/3.png",
    detail: "Safe and reliable electrical distribution systems designed for homes, offices, and industries.",
  },
  {
    id: 4,
    title: "Lighting Systems",
    tagline: "Illuminating Every Space with Elegance",
    image: "/services/4.png",
    detail: "Modern and energy-efficient lighting solutions for both indoor and outdoor spaces.",
  },
  {
    id: 5,
    title: "Industrial Automation",
    tagline: "Efficiency through Smart Automation",
    image: "/services/5.png",
    detail: "Boost productivity with our advanced industrial automation systems tailored to your business needs.",
  },
  {
    id: 6,
    title: "Custom Fabrication",
    tagline: "Tailored Engineering, Perfect Results",
    image: "/services/6.png",
    detail: "High-quality custom fabrication services with precision and durability.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-10 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">Professional electrical solutions for all your needs</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 overflow-hidden"
              >
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-700">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm font-medium">{service.tagline}</p>
                  <p className="text-gray-700 mb-6 text-sm leading-relaxed">{service.detail}</p>
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-block bg-blue-700 hover:bg-black text-white px-6 py-2 rounded-lg transition-colors duration-300 text-sm font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
