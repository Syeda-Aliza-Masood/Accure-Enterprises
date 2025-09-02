import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import AboutSection from "../components/Aboutsection"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
