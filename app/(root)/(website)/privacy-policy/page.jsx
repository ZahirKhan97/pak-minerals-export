export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen bg-[#f4fff6] py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">

        {/* Header */}
        <div className="mb-5">
          <span className="text-green-700 font-semibold uppercase tracking-wider">
            Privacy & Policy
          </span>

          <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Your Privacy Matters
          </h1>

          <p className="mt-4 text-gray-600 px-2 mx-auto">
            We are committed to protecting your personal information and ensuring
            transparency about how we collect, use, and safeguard your data.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 lg:p-10 space-y-8">

          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Introduction
            </h2>

            <p className="text-gray-600 leading-relaxed">
              This Privacy Policy explains how we collect, use, disclose, and
              protect your information when you visit our website or interact
              with our services. By using our website, you agree to the
              practices described in this policy.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Information We Collect
            </h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Name and contact information.</li>
              <li>Email address and phone number.</li>
              <li>Business-related inquiries and messages.</li>
              <li>Technical information such as IP address and browser type.</li>
              <li>Website usage and analytics data.</li>
            </ul>
          </div>

          {/* How We Use Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              How We Use Your Information
            </h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>To respond to inquiries and requests.</li>
              <li>To improve our website and services.</li>
              <li>To provide customer support.</li>
              <li>To communicate important updates.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </div>

          {/* Data Protection */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Data Protection
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We implement appropriate security measures to protect your
              information against unauthorized access, disclosure, alteration,
              or destruction. However, no internet transmission method is
              completely secure.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Cookies & Tracking Technologies
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Our website may use cookies and similar technologies to enhance
              user experience, analyze traffic, and improve functionality. You
              may choose to disable cookies through your browser settings.
            </p>
          </div>

          {/* Third Party */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Third-Party Services
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We may use trusted third-party services for analytics, hosting,
              and communication purposes. These providers have access only to
              the information necessary to perform their functions.
            </p>
          </div>

          {/* User Rights */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Your Rights
            </h2>

            <p className="text-gray-600 leading-relaxed">
              You may request access to, correction of, or deletion of your
              personal information. If you wish to exercise these rights,
              please contact us using the information provided below.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Contact Us
            </h2>

            <p className="text-gray-600 leading-relaxed">
              If you have any questions regarding this Privacy Policy, please
              contact us through our website or email support team.
            </p>
          </div>

          {/* Last Updated */}
          <div className="border-t pt-6">
            <p className="text-sm text-gray-500">
              Last Updated: June 2026
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}