import React from 'react';
import { Footer } from 'flowbite-react';

const Footer_main = () => {
  return (
    <Footer container>
      <div className="w-full bg-black text-white">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 px-6">
          <div>
            <Footer.Brand
              href="https://foodiefy.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Foodiefy Logo"
              name="Foodiefy"
            />
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">About</h2>
            <ul className="text-white">
              <li className="mb-4">
                <a href="#" className="hover:underline">Foodiefy</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Tailwind CSS</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow Us</h2>
            <ul className="text-white">
              <li className="mb-4">
                <a href="#" className="hover:underline">Github</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Discord</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
            <ul className="text-white">
              <li className="mb-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full flex justify-between items-center py-6 px-6">
          <span className="text-sm text-white sm:text-center">© 2022 <a href="https://foodiefy.com" className="hover:underline">Foodiefy™</a>. All Rights Reserved.</span>
          <div className="flex space-x-6 sm:justify-center">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.54 6.42a8.38 8.38 0 0 1-2.42.66 4.21 4.21 0 0 0 1.85-2.32 8.4 8.4 0 0 1-2.66 1.02 4.19 4.19 0 0 0-7.13 3.82 11.88 11.88 0 0 1-8.63-4.38 4.19 4.19 0 0 0 1.3 5.59 4.18 4.18 0 0 1-1.9-.52v.05a4.19 4.19 0 0 0 3.36 4.1 4.2 4.2 0 0 1-1.89.07 4.19 4.19 0 0 0 3.91 2.91 8.41 8.41 0 0 1-5.2 1.8 8.5 8.5 0 0 1-.99-.06 11.88 11.88 0 0 0 6.42 1.88c7.71 0 11.93-6.38 11.93-11.93 0-.18 0-.36-.01-.54a8.52 8.52 0 0 0 2.1-2.17z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 3.58 8.07 8.13 8.93v-6.32h-2.44v-2.61h2.44v-2c0-2.42 1.47-3.75 3.63-3.75 1.03 0 1.92.08 2.18.11v2.53h-1.5c-1.18 0-1.41.56-1.41 1.38v1.8h2.82l-.37 2.61h-2.45v6.32c4.55-.86 8.13-4.51 8.13-8.93 0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 3.58 8.07 8.13 8.93v-6.32h-2.44v-2.61h2.44v-2c0-2.42 1.47-3.75 3.63-3.75 1.03 0 1.92.08 2.18.11v2.53h-1.5c-1.18 0-1.41.56-1.41 1.38v1.8h2.82l-.37 2.61h-2.45v6.32c4.55-.86 8.13-4.51 8.13-8.93 0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 3.58 8.07 8.13 8.93v-6.32h-2.44v-2.61h2.44v-2c0-2.42 1.47-3.75 3.63-3.75 1.03 0 1.92.08 2.18.11v2.53h-1.5c-1.18 0-1.41.56-1.41 1.38v1.8h2.82l-.37 2.61h-2.45v6.32c4.55-.86 8.13-4.51 8.13-8.93 0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 3.58 8.07 8.13 8.93v-6.32h-2.44v-2.61h2.44v-2c0-2.42 1.47-3.75 3.63-3.75 1.03 0 1.92.08 2.18.11v2.53h-1.5c-1.18 0-1.41.56-1.41 1.38v1.8h2.82l-.37 2.61h-2.45v6.32c4.55-.86 8.13-4.51 8.13-8.93 0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Footer_main;