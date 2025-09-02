import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HeroSlider from "./components/Hero"
import { Zap, Shield, Users, Award, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"  

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative">
        <HeroSlider />
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Accure Enterprises?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With years of experience and a commitment to excellence, we deliver reliable electrical solutions that
              power your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-blue-700 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-800 transition-colors">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Certified electricians with extensive experience in all electrical services.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-blue-700 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-800 transition-colors">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety First</h3>
              <p className="text-gray-600">Strict adherence to safety protocols and industry standards.</p>
            </div>

            <div className="text-center group">
              <div className="bg-blue-700 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-800 transition-colors">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for emergency electrical services.</p>
            </div>

            <div className="text-center group">
              <div className="bg-blue-700 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-800 transition-colors">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600">Premium materials and workmanship with comprehensive warranties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Featured Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive electrical solutions for residential, commercial, and industrial needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/services/1.png"
                alt="Surveillance Systems"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Surveillance Systems</h3>
                <p className="text-gray-600 mb-4">
                  Advanced security camera installations and monitoring systems for complete protection.
                </p>
                <Link href="/services/1" className="text-blue-700 hover:text-blue-800 font-medium">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/services/2.png"
                alt="Solar Solutions"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Solar Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Sustainable solar panel installations and renewable energy systems.
                </p>
                <Link href="/services/2" className="text-blue-700 hover:text-blue-800 font-medium">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/services/3.png"
                alt="Electrical Distribution"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Electrical Distribution</h3>
                <p className="text-gray-600 mb-4">
                  Professional electrical panel installations and power distribution systems.
                </p>
                <Link href="/services/3" className="text-blue-700 hover:text-blue-800 font-medium">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/services"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Power Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get in touch with our expert team for a free consultation and quote on your electrical needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-white" />
              <span>021-33483019 | 0325-2658029</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-white" />
              <span>accureenterprises@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-700 px-8 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-colors font-medium"
            >
              Get Free Quote
            </Link>
            <Link
              href="/projects"
              className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-colors font-medium"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
