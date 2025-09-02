import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"

const projects = [
  {
    id: "residential-complex",
    title: "Green Valley Residential Complex",
    category: "Residential",
    location: "Karachi, Pakistan",
    year: "2024",
    image: "/projects/1.png",
    description:
      "Complete electrical installation for a 200-unit residential complex including smart home automation, solar integration, and energy-efficient lighting systems.",
    status: "Completed",
  },
  {
    id: "industrial-plant",
    title: "Manufacturing Plant Electrical Setup",
    category: "Industrial",
    location: "Lahore, Pakistan",
    year: "2023",
    image: "/projects/2.png",
    description:
      "High-voltage electrical distribution system for a textile manufacturing plant with automated control systems and safety protocols.",
    status: "Completed",
  },
  {
    id: "shopping-mall",
    title: "Metro Shopping Mall",
    category: "Commercial",
    location: "Islamabad, Pakistan",
    year: "2024",
    image: "/projects/3.png",
    description:
      "Comprehensive electrical infrastructure for a 5-story shopping mall including emergency systems, HVAC controls, and LED lighting solutions.",
    status: "In Progress",
  },
  {
    id: "hospital-project",
    title: "City General Hospital",
    category: "Healthcare",
    location: "Karachi, Pakistan",
    year: "2023",
    image: "/projects/4.png",
    description:
      "Critical electrical systems for a 300-bed hospital including backup power, medical equipment wiring, and specialized lighting for operation theaters.",
    status: "Completed",
  },
  {
    id: "office-tower",
    title: "Corporate Office Tower",
    category: "Commercial",
    location: "Karachi, Pakistan",
    year: "2024",
    image: "/projects/5.png",
    description:
      "Smart building electrical systems for a 20-story office tower with energy management, security systems, and high-speed data infrastructure.",
    status: "In Progress",
  },
  {
    id: "solar-farm",
    title: "Solar Energy Farm",
    category: "Renewable Energy",
    location: "Multan, Pakistan",
    year: "2023",
    image: "/projects/6.png",
    description:
      "50MW solar power plant installation with grid integration, monitoring systems, and maintenance infrastructure.",
    status: "Completed",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-10 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Projects
            </h2>
            <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our portfolio of successful electrical projects across
              Pakistan. From residential complexes to industrial installations,
              we deliver excellence in every project.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-blue-700 text-white text-sm rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 overflow-hidden">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed overflow-hidden">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center justify-center w-full bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200"
                  >
                    Learn More
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
