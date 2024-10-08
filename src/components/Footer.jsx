import React from 'react';
import { footer } from '../utils/database';
import FacebookIconSvg from './svg/FacebookIconSvg';
import InstagramIconSvg from './svg/InstagramIconSvg';
import LinkedInIconSvg from './svg/LinkedInIconSvg';
import TwitterIconSvg from './svg/TwitterIconSvg';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Logo Section */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <a href="#" className="mb-6 inline-block max-h-[100px]">
                <img
                  src="assets/images/logo/logo.svg"
                  alt="logo"
                  className="max-w-full"
                />
              </a>
              <p className="mb-8 lg:max-w-[270px] text-base text-gray-700">
                {footer.subtitle}
              </p>
              <div class="-mx-3 flex items-center">
              <a href="javascript:void(0)" class="px-3 text-gray-7 hover:text-white">
                <FacebookIconSvg size="22" />
              </a>
              <a href="javascript:void(0)" class="px-3 text-gray-7 hover:text-white">
                <TwitterIconSvg size="22" />
              </a>
              <a href="javascript:void(0)" class="px-3 text-gray-7 hover:text-white">
                <InstagramIconSvg size="22" />
              </a>
              <a href="javascript:void(0)" class="px-3 text-gray-7 hover:text-white">
                <LinkedInIconSvg />
              </a>
            </div>
            </div>
          </div>

          {/* About Us Section */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">About Us</h4>
              <ul>
                {footer.about_us_links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="mb-3 inline-block text-base text-gray-700 hover:text-primary"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features Section */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">Features</h4>
              <ul>
              {footer.feature_links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="mb-3 inline-block text-base text-gray-700 hover:text-primary">
                    {link.title}
                  </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Latest Blog Section */}
          <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">Latest Blog</h4>
              <div className="flex flex-col gap-8">
              {footer.latest_blogs.map((blog, index) => (
                  <a href="#" className="group flex items-center gap-[22px]">
                  <div className="overflow-hidden rounded">
                    <img src={blog.image} alt={blog.title} />
                  </div>
                  <span className="max-w-[180px] text-base text-gray-700 group-hover:text-white">
                    {blog.title}
                  </span>
                </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
