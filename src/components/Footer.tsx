import PentagonLogo from '../assets/images/pentagon-logo.svg?react';

export default function Footer() {
  return (
    <footer className="bg-white shadow dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="mb-4 flex items-center space-x-3 rtl:space-x-reverse sm:mb-0"
          >
            <PentagonLogo
              fill="#ffffff"
              stroke="#ffffff"
              className="h-8 w-auto"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              PENTAGON
            </span>
          </a>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
            <li>
              <a href="/aboutme" className="me-4 hover:underline md:me-6">
                About Me
              </a>
            </li>
            <li>
              <a href="/portfolio" className="me-4 hover:underline md:me-6">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/blog" className="me-4 hover:underline md:me-6">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023 PENTAGON™. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
