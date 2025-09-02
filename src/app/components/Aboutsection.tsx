import { Shield, Eye, Heart } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* About Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Accure Enterprises is a leading electrical contracting company with over a decade of experience in providing
            comprehensive electrical solutions. We specialize in residential, commercial, and industrial electrical
            services, ensuring safety, reliability, and excellence in every project.
          </p>
        </div>

        {/* Company Description */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Expertise</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded with a commitment to electrical excellence, Accure Enterprises has grown to become a trusted name
              in the electrical industry. Our team of certified electricians brings years of experience and technical
              expertise to every project.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From simple residential wiring to complex industrial installations, we handle projects of all sizes with
              the same level of professionalism and attention to detail. Our commitment to using the latest technology
              and following industry best practices ensures that every installation meets the highest standards of
              safety and efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                Licensed & Insured
              </span>
              <span className="bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                24/7 Emergency Service
              </span>
              <span className="bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                10+ Years Experience
              </span>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-blue-700 rounded-full mr-3"></div>
                Certified and experienced electricians
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-blue-700 rounded-full mr-3"></div>
                Competitive pricing with transparent quotes
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-blue-700 rounded-full mr-3"></div>
                Quality workmanship with warranty
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-blue-700 rounded-full mr-3"></div>
                Timely project completion
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-blue-700 rounded-full mr-3"></div>
                Excellent customer service
              </li>
            </ul>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Our Mission</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              To provide safe, reliable, and innovative electrical solutions that exceed our clients' expectations while
              maintaining the highest standards of professionalism and integrity.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Our Vision</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              To be the leading electrical contracting company in the region, recognized for our technical expertise,
              customer service excellence, and commitment to sustainable practices.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Our Values</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Safety first, quality workmanship, honest communication, continuous learning, and building lasting
              relationships with our clients and community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
