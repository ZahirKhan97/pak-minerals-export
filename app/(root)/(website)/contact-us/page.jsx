import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaClock,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className="min-h-screen bg-[#f4fff6] py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">

        {/* Header */}
        <div className="mb-12">
          <span className="text-green-700 font-semibold uppercase tracking-wider">
            Contact Us
          </span>

          <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Let's Connect
          </h1>

          <p className="mt-4 text-gray-600 max-w-7xl px-2 mx-auto">
            Whether you're looking for product information, export inquiries,
            pricing details, or partnership opportunities, our team is ready
            to assist you.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

          <a
            href="mailto:info@minerals.com"
            className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition"
          >
            <FaEnvelope className="text-3xl text-green-700 mb-4" />

            <h3 className="font-bold text-lg text-gray-800 mb-2">
              Email
            </h3>

            <p className="text-gray-600 text-sm break-all">
              info@minerals.com
            </p>
          </a>

          <a
            href="https://wa.me/923314421188"
            target="_blank"
            className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition"
          >
            <FaWhatsapp className="text-3xl text-green-700 mb-4" />

            <h3 className="font-bold text-lg text-gray-800 mb-2">
              WhatsApp
            </h3>

            <p className="text-gray-600 text-sm">
              +92 331 4421188
            </p>
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition"
          >
            <FaFacebookF className="text-3xl text-green-700 mb-4" />

            <h3 className="font-bold text-lg text-gray-800 mb-2">
              Facebook
            </h3>

            <p className="text-gray-600 text-sm">
              Follow our page
            </p>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition"
          >
            <FaInstagram className="text-3xl text-green-700 mb-4" />

            <h3 className="font-bold text-lg text-gray-800 mb-2">
              Instagram
            </h3>

            <p className="text-gray-600 text-sm">
              Follow our updates
            </p>
          </a>

        </div>

        {/* Company Information */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10">

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Business Information
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="flex gap-4">
              <FaMapMarkerAlt className="text-green-700 text-2xl mt-1" />

              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Office Address
                </h3>

                <p className="text-gray-600">
                  Your Office Address Here
                  <br />
                  City, Country
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaClock className="text-green-700 text-2xl mt-1" />

              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Business Hours
                </h3>

                <p className="text-gray-600">
                  Monday – Friday
                  <br />
                  9:00 AM – 6:00 PM
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaGlobe className="text-green-700 text-2xl mt-1" />

              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Export Markets
                </h3>

                <p className="text-gray-600">
                  Worldwide Shipping &
                  International Export Services
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaWhatsapp className="text-green-700 text-2xl mt-1" />

              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Quick Response
                </h3>

                <p className="text-gray-600">
                  Contact us via WhatsApp for
                  faster communication.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}