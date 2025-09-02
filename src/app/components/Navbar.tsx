"use client"

import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-black text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo + Title */}
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 relative">
                <Image
                  src="/logo2.png"
                  alt="Accure Enterprises Logo"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Accure Enterprises</h1>
                <p className="text-sm text-gray-300">Switching To Accuracy</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-12 flex items-center space-x-10">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg text-white hover:text-blue-700 hover:bg-white px-4 py-2 rounded-md font-medium transition-all duration-300 ease-in-out"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-blue-700 hover:bg-white p-3"
              >
                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg text-white hover:text-blue-700 hover:bg-white block px-3 py-2 rounded-md font-medium transition-all duration-300 ease-in-out"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Subnavbar (Responsive Fixed) */}
      <div className="bg-blue-700 text-white py-3">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-wrap justify-between items-center text-sm gap-y-2">
            
            {/* Left Side: Phone & Email */}
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span className="font-medium">Call Us:</span>
                <span>0325-2658029</span>
              </span>

              <span className="hidden sm:inline">|</span>

              <span className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <span className="font-medium">Email:</span>
                <span>contact@accureengineering.com</span>
              </span>
            </div>

            {/* Right Side: Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm bg-white text-blue-700 px-3 py-1 rounded-full font-medium whitespace-nowrap">
                24/7 Emergency Service
              </span>
              <span className="text-sm whitespace-nowrap">Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
