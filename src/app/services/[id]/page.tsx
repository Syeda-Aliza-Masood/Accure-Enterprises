import { notFound } from "next/navigation"
import Image from "next/image"
import { CheckCircle, ArrowLeft, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

const services = [
  {
    id: 1,
    title: "Surveillance Systems",
    image: "/services/1.png",
    offeringsImage: "/services/survillance.png",
    description: `We provide state-of-the-art CCTV and surveillance solutions to ensure safety and security across residential, commercial, and industrial environments. From high-definition cameras to advanced monitoring and access control systems, our solutions are reliable, scalable, and tailored to your needs.`,
    offerings: [
      "High-definition CCTV cameras (indoor & outdoor)",
      "IP-based & wireless surveillance systems",
      "Remote monitoring via mobile & desktop applications",
      "Access control systems (biometric, RFID, keypad)",
      "Video analytics (motion detection, facial recognition, license plate recognition)",
      "Network Video Recorders (NVRs) & Digital Video Recorders (DVRs)",
      "Smart integration with alarms, fire systems & IoT devices",
      "Centralized monitoring stations for large-scale facilities",
      "Scalable solutions for residential, commercial & industrial applications",
      "24/7 monitoring & maintenance services",
    ],
  },
  {
    id: 2,
    title: "Solar Solutions",
    image: "/services/2.png",
    offeringsImage: "/services/solar.png",
    description: `We deliver reliable and cost-effective off-grid and hybrid solar systems designed for areas with unstable or no grid electricity. Our solutions reduce generator dependence and ensure uninterrupted power supply with long-term savings.`,
    offerings: [
      "Off-grid solar systems with battery storage for remote locations",
      "Hybrid solar systems (solar + grid + generator integration)",
      "Customized system sizing based on energy requirements",
      "High-efficiency solar panels with extended lifespan",
      "Battery banks (Lithium-ion, Lead-acid, Gel) for continuous supply",
      "Advanced inverter solutions (pure sine wave, hybrid inverters)",
      "Solar-powered backup systems for homes, offices & industries",
      "Procurement & installation of residential solar solutions",
      "Procurement & installation of commercial & industrial solar solutions",
      "Energy-efficient load management & optimized system design",
      "Expert installation, commissioning & testing",
      "Performance monitoring systems with fault detection",
      "After-sales support & maintenance services",
      "Affordable solar packages for residential & commercial use",
    ],
  },
  {
    id: 3,
    title: "Electrical Distribution & Power Systems",
    image: "/services/3.png",
    offeringsImage: "/services/electric.png",
    description: `We provide safe, efficient, and reliable electrical distribution solutions for residential, commercial, and industrial applications. Our systems are engineered to ensure smooth power flow, reduce downtime, and meet international safety standards.`,
    offerings: [
      "Low, medium & high voltage distribution systems",
      "Main distribution boards (MDBs), sub-main boards (SMDBs) & final distribution boards (FDBs)",
      "Design & installation of electrical distribution panels",
      "Installation & commissioning of APF/MCC/Generator synchronization panels",
      "Installation & maintenance of transformers & gensets",
      "C.T / P.T / Isolator & surge arrestor installation",
      "Erection & installation of LT/HT poles",
      "Earthing & grounding of poles, transformers & related equipment",
      "Power factor correction systems for improved efficiency",
      "Busbar trunking systems (BBT) for large facilities",
      "Automatic transfer switches (ATS) & changeover systems",
      "Load balancing & power management solutions",
      "Protective devices (MCBs, MCCBs, ACBs, relays) for electrical safety",
      "UPS integration for critical applications",
      "Power backup solutions (generators, hybrid systems)",
      "Cable management systems (trays, trunking, conduits)",
      "Load calculation, design & installation for residential & commercial buildings",
      "Testing, commissioning & preventive maintenance services",
      "Compliance with local and international electrical codes",
    ],
  },
  {
    id: 4,
    title: "Lighting Systems",
    image: "/services/4.png",
    offeringsImage: "/services/light.png",
    description: `We deliver innovative and energy-efficient lighting solutions designed to enhance safety, productivity, and aesthetics for residential, commercial, and industrial environments. Our lighting systems combine advanced technology with modern design for long-lasting performance.`,
    offerings: [
      "Energy-efficient lighting solutions for homes, offices & industries",
      "Indoor & outdoor lighting systems (residential, commercial, industrial)",
      "Smart lighting controls (sensors, timers, dimmers, automation)",
      "Street lighting & solar-powered outdoor lights",
      "High-bay & low-bay industrial lighting for warehouses & factories",
      "Explosion-proof lighting for hazardous zones",
      "Emergency & exit lighting systems",
      "Architectural & decorative lighting for offices, malls & public spaces",
      "Task lighting solutions for workplaces & specialized operations",
      "Daylight harvesting & energy optimization systems",
      "Retrofit solutions for upgrading outdated lighting systems",
      "Custom lighting design & layout planning",
      "Integration with Building Management Systems (BMS)",
      "Testing, commissioning & after-sales maintenance",
      "Compliance with IEC, NEC & global safety standards",
    ],
  },
  {
    id: 5,
    title: "Industrial Automation",
    image: "/services/5.png",
    offeringsImage: "/services/industry.png",
    description: `We design and implement advanced automation solutions that improve productivity, minimize downtime, and optimize operational efficiency across industries. Our systems are reliable, scalable, and tailored to meet specific process requirements.`,
    offerings: [
      "PLC (Programmable Logic Controller) programming & integration",
      "PLC, DCS, SCADA installation, programming & start-up services",
      "SCADA (Supervisory Control & Data Acquisition) systems",
      "HMI (Human-Machine Interface) design & development",
      "HMI graphics development & upgrades",
      "Industrial sensors & instrumentation for process monitoring & control",
      "Installation & calibration of field/process instruments",
      "Variable Frequency Drives (VFDs) & motor control systems",
      "Configuration of AC/DC drives",
      "Production line & process plant automation",
      "Robotics integration for manufacturing & assembly lines",
      "Energy management & optimization through automation",
      "Batch process control & recipe management",
      "Custom-built control panels (MCC, PCC, PLC-based)",
      "Control panel design & fabrication",
      "Plant/machine control retrofit services",
      "Machine safety systems & interlocks",
      "Retrofitting & upgrading existing automation systems",
      "On-site troubleshooting & startup support",
      "Predictive maintenance solutions with smart analytics",
      "24/7 support, troubleshooting & maintenance services",
    ],
  },
  {
    id: 6,
    title: "Custom Fabrication",
    image: "/services/6.png",
    offeringsImage: "/services/custom.png",
    description: `We provide tailor-made fabrication solutions to meet unique requirements across industrial, commercial, and residential projects. With precision engineering, quality materials, and skilled craftsmanship, we deliver durable and efficient products.`,
    offerings: [
      "Custom enclosures & panels for electrical & automation systems",
      "Metal fabrication (mild steel, stainless steel, aluminum)",
      "Industrial brackets, frames & structural supports",
      "Customized cable trays, ladders & trunking systems",
      "Machine guards, safety covers & protective housings",
      "Control consoles & operator desks",
      "Fabrication of skids & mounting structures",
      "Kiosks & industrial cabinets (design & build)",
      "HVAC ducts & ventilation accessories",
      "Precision sheet metal cutting, bending & welding",
      "Powder coating, painting & finishing services",
      "Prototype development & small-batch fabrication",
      "Heavy-duty fabrication for industrial plants",
      "On-site modifications & installation support",
      "Quality assurance & compliance with industry standards",
    ],
  },
]

export default function ServiceDetail({ params }: { params: { id: string } }) {
  const service = services.find((s) => s.id === Number(params.id))
  if (!service) return notFound()

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-96 overflow-hidden">
        <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">
          <Link href="/services" className="flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">{service.title}</h1>
          <div className="w-24 h-1 bg-blue-700"></div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 md:px-16 py-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Overview</h2>
              <p className="text-gray-700 text-lg leading-relaxed">{service.description}</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">What We Offer</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {service.offerings.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                    <CheckCircle className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Service image */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <Image
                  src={service.offeringsImage || "/placeholder.svg"}
                  alt={`${service.title} offerings`}
                  width={400}
                  height={300}
                  className="rounded-xl w-full object-cover"
                />
              </div>

              {/* Contact card */}
              <div className="bg-blue-700 text-white rounded-2xl p-8">
                <h4 className="text-xl font-bold mb-4">Need This Service?</h4>
                <p className="text-blue-100 mb-6">Get in touch with our experts for a customized solution.</p>
                <div className="space-y-4">
                  <Link
                    href="/contact"
                    className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call for Quote</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email Inquiry</span>
                  </Link>
                </div>
                <Link
                  href="/contact"
                  className="block w-full bg-white text-blue-700 text-center py-3 px-6 rounded-lg font-semibold mt-6 hover:bg-blue-50 transition-colors"
                >
                  Get Started
                </Link>
              </div>

              {/* Other services */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Other Services</h4>
                <div className="space-y-3">
                  {services
                    .filter((s) => s.id !== service.id)
                    .slice(0, 3)
                    .map((otherService) => (
                      <Link
                        key={otherService.id}
                        href={`/services/${otherService.id}`}
                        className="block text-gray-600 hover:text-blue-700 transition-colors text-sm"
                      >
                        {otherService.title}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
