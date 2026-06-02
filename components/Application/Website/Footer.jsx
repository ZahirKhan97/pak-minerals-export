import { WEBSITE_HOME } from '@/routes/WebsiteRoute';
import Link from 'next/link';
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { getCategories } from '@/lib/categories'


const Footer = async () => {
  const categoriesData = await getCategories();
  const categories = categoriesData?.categoriesData || [];

  return (
    <footer className="bg-green-900 text-white mt-20">
      
      <div className="max-w-7xl mx-auto px-4 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4 uppercase">
              Pak Minerals Export
            </h2>

            <p className="text-green-100 leading-7">
              Premium quality minerals and gemstones
              exported directly from Pakistan to
              international buyers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href={WEBSITE_HOME}
                  className="hover:text-green-300 transition"
                >
                  Home
                </Link>
              </li>

              {
                categories.map((category) => (
                  <li key={category._id}>
                    <Link
                      href={`${category.slug}`}
                      className="hover:text-green-300 transition"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))
              }

              <li>
                <Link
                  href="#contact"
                  className="hover:text-green-300 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact Info
            </h3>

            <div className="space-y-3 text-green-100">
              <div className="flex items-center gap-2">
                <FaWhatsapp size={22} />
                <p>+92 331 4421188</p>
              </div>

              <div className="flex items-center gap-2">
                <IoMailOutline size={22} />
                <p>info@minerals.com</p>
              </div>
              
              <div className="flex items-center gap-2">
                <IoLocationOutline size={22} />
                <p>Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-green-800">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          
          <p className="text-sm text-green-200">
            © 2026 Pak Minerals Export. All Rights Reserved.
          </p>

          <div className="flex items-center gap-5 text-sm">
            <Link
              href="/privacy-policy"
              className="hover:text-green-300 transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-green-300 transition"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer