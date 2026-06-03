import { WEBSITE_CATEGORY, WEBSITE_HOME } from "@/routes/WebsiteRoute";
import Link from "next/link";
import { getCategories } from '@/lib/categories'


const Header = async () => {
  const categoriesData = await getCategories();
  const categories = categoriesData?.categoriesData || [];

  return (
    <header className="sticky top-0 z-50 bg-green-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href={WEBSITE_HOME}
            className="text-white text-lg sm:text-xl md:text-2xl font-bold uppercase"
          >
            Pak Minerals Export
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              href={WEBSITE_HOME}
              className="text-white hover:text-green-200 transition"
            >
              Home
            </Link>

            {
              categories.map((category) => (
              <Link
                key={category._id}
                href={WEBSITE_CATEGORY(category.slug)}
                className="text-white hover:text-green-200 transition"
              >
                {category.name}
              </Link>
              ))
            }

            <Link
              href="#contact"
              className="text-white hover:text-green-200 transition"
            >
              Contact
            </Link>

            {/* <Link
              href="/admin/login"
              className="bg-white text-green-700 px-4 py-2 rounded-lg font-medium hover:bg-green-100 transition"
            >
              Admin
            </Link> */}
          </nav>

          {/* Mobile Menu */}
          <details className="md:hidden relative">
            <summary className="list-none cursor-pointer text-white text-3xl">
              ☰
            </summary>

            <div className="absolute right-0 mt-4 w-52 bg-green-800 border border-green-600 rounded-lg shadow-lg p-4 flex flex-col gap-4">
              <Link
                href={WEBSITE_HOME}
                className="text-white hover:text-green-200 transition"
              >
                Home
              </Link>

              {
                categories.map((category) => (
                <Link
                key={category._id}
                  href={WEBSITE_CATEGORY(category.slug)}
                  className="text-white hover:text-green-200 transition"
                >
                  {category.name}
                </Link>
                ))
              }

              <Link
                href="#contact"
                className="text-white hover:text-green-200 transition"
              >
                Contact
              </Link>

              {/* <Link
                href="/admin/login"
                className="bg-white text-green-700 px-4 py-2 rounded-lg text-center font-medium hover:bg-green-100 transition"
              >
                Admin
              </Link> */}
            </div>
          </details>

        </div>
      </div>
    </header>
  );
};

export default Header;