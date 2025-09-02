import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Users, CheckCircle, Clock } from "lucide-react"

const projectsData = {
  "residential-complex": {
    title: "Green Valley Residential Complex",
    category: "Residential",
    location: "Karachi, Pakistan",
    year: "2024",
    duration: "8 months",
    client: "Green Valley Developers",
    image: "/projects/1.png",
    status: "Completed",
    description:
      "A comprehensive electrical infrastructure project for a modern 200-unit residential complex featuring smart home automation, renewable energy integration, and advanced safety systems.",
    overview:
      "The Green Valley Residential Complex project represents our commitment to sustainable and intelligent electrical solutions. This project involved the complete electrical design and installation for a luxury residential development, incorporating cutting-edge technology and energy-efficient systems.",
    challenges: [
      "Integration of smart home systems across 200 units",
      "Solar panel installation and grid integration",
      "Underground cable management for aesthetic appeal",
      "Compliance with latest safety regulations",
    ],
    solutions: [
      "Implemented centralized smart home control system",
      "Designed hybrid solar-grid power system",
      "Created comprehensive underground utility network",
      "Installed advanced fire safety and emergency systems",
    ],
    features: [
      "Smart Home Automation",
      "Solar Energy Integration",
      "LED Lighting Systems",
      "Emergency Backup Power",
      "Security System Integration",
      "Energy Management System",
    ],
    gallery: ["/projects/1.png", "/projects/detail-1.png", "/projects/detail-2.png"],
  },
  "industrial-plant": {
    title: "Manufacturing Plant Electrical Setup",
    category: "Industrial",
    location: "Lahore, Pakistan",
    year: "2023",
    duration: "12 months",
    client: "Textile Industries Ltd",
    image: "/projects/2.png",
    status: "Completed",
    description:
      "High-voltage electrical distribution system for a large-scale textile manufacturing plant with automated control systems and comprehensive safety protocols.",
    overview:
      "This industrial project involved designing and implementing a robust electrical infrastructure capable of supporting heavy machinery and continuous operations in a textile manufacturing environment.",
    challenges: [
      "High-voltage power distribution design",
      "Integration with existing machinery",
      "Minimizing downtime during installation",
      "Meeting industrial safety standards",
    ],
    solutions: [
      "Designed modular power distribution system",
      "Implemented phased installation approach",
      "Created redundant safety systems",
      "Installed advanced monitoring and control systems",
    ],
    features: [
      "High-Voltage Distribution",
      "Industrial Automation",
      "Motor Control Centers",
      "Power Factor Correction",
      "Emergency Shutdown Systems",
      "Energy Monitoring",
    ],
    gallery: ["/projects/2.png", "/projects/detail-3.png", "/projects/detail-4.png"],
  },
  "shopping-mall": {
    title: "Metro Shopping Mall",
    category: "Commercial",
    location: "Islamabad, Pakistan",
    year: "2024",
    duration: "10 months",
    client: "Metro Development Group",
    image: "/projects/3.png",
    status: "In Progress",
    description:
      "Comprehensive electrical infrastructure for a modern 5-story shopping mall including emergency systems, HVAC controls, and energy-efficient LED lighting solutions.",
    overview:
      "The Metro Shopping Mall project showcases our expertise in commercial electrical systems, featuring advanced lighting design, climate control integration, and comprehensive safety systems for a premium retail environment.",
    challenges: [
      "Complex multi-floor electrical distribution",
      "Integration with HVAC and security systems",
      "Energy-efficient lighting design",
      "Emergency evacuation systems",
    ],
    solutions: [
      "Designed centralized electrical distribution",
      "Implemented smart building management system",
      "Created dynamic lighting control system",
      "Installed comprehensive emergency systems",
    ],
    features: [
      "Smart Lighting Control",
      "HVAC Integration",
      "Emergency Systems",
      "Retail Power Solutions",
      "Security System Integration",
      "Energy Management",
    ],
    gallery: ["/projects/3.png", "/projects/detail-5.png", "/projects/detail-6.png"],
  },
  "hospital-project": {
    title: "City General Hospital",
    category: "Healthcare",
    location: "Karachi, Pakistan",
    year: "2023",
    duration: "14 months",
    client: "City Health Authority",
    image: "/projects/4.png",
    status: "Completed",
    description:
      "Critical electrical systems for a 300-bed hospital including backup power, medical equipment wiring, and specialized lighting for operation theaters.",
    overview:
      "This healthcare project required the highest standards of reliability and safety, featuring redundant power systems, specialized medical equipment wiring, and critical care electrical infrastructure.",
    challenges: [
      "Critical power system reliability",
      "Medical equipment compatibility",
      "Infection control compliance",
      "Emergency power requirements",
    ],
    solutions: [
      "Implemented redundant UPS systems",
      "Designed isolated power systems for critical areas",
      "Created comprehensive backup power solution",
      "Installed specialized medical-grade wiring",
    ],
    features: [
      "Critical Power Systems",
      "Medical Equipment Wiring",
      "Emergency Backup Power",
      "Specialized Lighting",
      "Nurse Call Systems",
      "Medical Gas Alarms",
    ],
    gallery: ["/projects/4.png", "/projects/detail-7.png", "/projects/detail-8.png"],
  },
  "office-tower": {
    title: "Corporate Office Tower",
    category: "Commercial",
    location: "Karachi, Pakistan",
    year: "2024",
    duration: "16 months",
    client: "Corporate Solutions Inc",
    image: "/projects/5.png",
    status: "In Progress",
    description:
      "Smart building electrical systems for a 20-story office tower with energy management, security systems, and high-speed data infrastructure.",
    overview:
      "This high-rise commercial project features state-of-the-art smart building technology, integrating electrical, data, and security systems into a unified intelligent building management platform.",
    challenges: [
      "High-rise electrical distribution",
      "Smart building system integration",
      "Energy efficiency optimization",
      "Future-proofing for technology upgrades",
    ],
    solutions: [
      "Designed vertical electrical distribution system",
      "Implemented building automation platform",
      "Created energy optimization algorithms",
      "Installed flexible infrastructure for future needs",
    ],
    features: [
      "Smart Building Automation",
      "Energy Management System",
      "High-Speed Data Infrastructure",
      "Security System Integration",
      "Elevator Control Systems",
      "Emergency Communication",
    ],
    gallery: ["/projects/5.png", "/projects/detail-9.png", "/projects/detail-10.png"],
  },
  "solar-farm": {
    title: "Solar Energy Farm",
    category: "Renewable Energy",
    location: "Multan, Pakistan",
    year: "2023",
    duration: "18 months",
    client: "Green Energy Solutions",
    image: "/projects/6.png",
    status: "Completed",
    description:
      "50MW solar power plant installation with grid integration, monitoring systems, and comprehensive maintenance infrastructure.",
    overview:
      "This renewable energy project demonstrates our expertise in large-scale solar installations, featuring advanced grid integration technology and comprehensive monitoring systems for optimal performance.",
    challenges: [
      "Large-scale solar panel installation",
      "Grid integration and synchronization",
      "Weather monitoring and protection",
      "Remote monitoring and maintenance",
    ],
    solutions: [
      "Implemented modular solar array design",
      "Created advanced grid synchronization system",
      "Installed weather monitoring stations",
      "Developed remote monitoring platform",
    ],
    features: [
      "50MW Solar Installation",
      "Grid Integration System",
      "Weather Monitoring",
      "Remote Monitoring",
      "Maintenance Infrastructure",
      "Performance Analytics",
    ],
    gallery: ["/projects/6.png", "/projects/detail-11.png", "/projects/detail-12.png"],
  },
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectsData[params.id as keyof typeof projectsData]

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
            <Link href="/projects" className="text-blue-700 hover:underline">
              Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          {/* Hero Section */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
              <div className="absolute bottom-8 left-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-700 rounded-full text-sm font-medium">{project.category}</span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === "Completed" ? "bg-green-500 text-white" : "bg-yellow-500 text-black"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
                <p className="text-xl opacity-90">{project.description}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Project Overview */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{project.overview}</p>
              </section>

              {/* Challenges & Solutions */}
              <section className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Challenges</h3>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Solutions</h3>
                    <ul className="space-y-3">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Key Features */}
              <section className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-blue-700" />
                      <span className="font-medium text-gray-900">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-8 sticky top-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Details</h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-700" />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium text-gray-900">{project.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-blue-700" />
                    <div>
                      <p className="text-sm text-gray-500">Year</p>
                      <p className="font-medium text-gray-900">{project.year}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-700" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium text-gray-900">{project.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-blue-700" />
                    <div>
                      <p className="text-sm text-gray-500">Client</p>
                      <p className="font-medium text-gray-900">{project.client}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-4">Interested in Similar Project?</h4>
                  <Link
                    href="/contact"
                    className="block w-full bg-blue-700 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
