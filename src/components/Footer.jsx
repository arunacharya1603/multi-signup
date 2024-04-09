import React from "react";
import { CiBasketball } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black p-4">
      <div className="container mx-auto grid grid-cols-5 ml-5 gap-4">
        <div>
          <h3 className="font-bold text-pink-600 font-sacramento text-lg">
            dribbble
          </h3>
          <p className="text-normal">
            Dribbble is the world’s leading community for creatives to share,
            grow, and get hired.
          </p>
          <div className="flex gap-2 mt-5">
            <CiBasketball />
            <FaTwitter />
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>

        {/* Repeat for other columns using the same structure */}
        <div className="flex w-max gap-10 text-sm">
          <div className="font-normal">
            <h3 className="font-bold">For designers</h3>
            <ul className="mt-5">
              <li className="mb-2 ">Go Pro!</li>
              <li className="mb-2">Explore design work</li>
              <li className="mb-2">Design blog</li>
              <li className="mb-2">Overtime podcast</li>
              <li className="mb-2">Playoffs</li>
              <li className="mb-2">Weekly Warm-Up</li>
              <li className="mb-2">Refer a Friend</li>
              <li className="mb-2">Code of conduct</li>
              {/* More items */}
            </ul>
          </div>

          <div className="font-normal">
            <h3 className="font-bold ">Hire designers</h3>
            <ul className="mt-5">
              <li className="mb-2">Post a job opening</li>
              <li className="mb-2">Post a freelance project</li>
              <li className="mb-2">Search for designers</li>
              {/* More items */}
            </ul>

            <h3 className="font-bold  mt-5">For Brands</h3>
            <ul className="mt-5">
              <li className="mb-2">Advertise with us</li>
              {/* More items */}
            </ul>
          </div>

          <div className="font-normal">
            <h3 className="font-bold ">Company</h3>
            <ul className="mt-5">
              <li className="mb-2">About</li>
              <li className="mb-2">Careers</li>
              <li className="mb-2">Support</li>
              <li className="mb-2">Media kit</li>
              <li className="mb-2">Testimonials</li>
              <li className="mb-2">API</li>
              <li className="mb-2">Terms of service</li>
              <li className="mb-2">Privacy policy</li>
              <li className="mb-2">Cookie policy</li>
              {/* More items */}
            </ul>
          </div>

          <div className="font-normal">
            <h3 className="font-bold ">Directories</h3>
            <ul className="mt-5">
              <li className="mb-2">Design jobs</li>
              <li className="mb-2">Designers for hire</li>
              <li className="mb-2">Freelance designers for hire</li>
              <li className="mb-2">Tags</li>
              <li className="mb-2">Places</li>
              {/* More items */}
            </ul>

            <h3 className="font-bold  mt-5">Design assets</h3>
            <ul className="mt-5">
              <li className="mb-2">Dribbble Marketplace</li>
              <li className="mb-2">Creative Market</li>
              <li className="mb-2">Fontspring</li>
              <li className="mb-2">Font Squirrel</li>
              {/* More items */}
            </ul>
          </div>

          <div className="font-normal">
            <h3 className="font-bold ">Design Topics</h3>
            <ul className="mt-5">
              <li className="mb-2">Design Resources</li>
              <li className="mb-2">Freelancing</li>
              <li className="mb-2">Design Hiring</li>
              <li className="mb-2">Design Portfolio</li>
              <li className="mb-2">Design Education</li>
              <li className="mb-2">Creative Process</li>
              <li className="mb-2">Design Industry</li>
              <li className="mb-2">Trends</li>
              {/* More items */}
            </ul>
          </div>
        </div>

        {/* ... */}
      </div>

      <hr />

      <div className="text-center flex justify-between  text-sm py-4">
        <div>
          <p>© 2023 Dribbble. All rights reserved.</p>
        </div>
        <div className="flex w-56 items-center">
          {" "}
          {/* Added flex and items-center */}
          <p className="inline-flex">
            20,501,853 shots dribbbled
            <CiBasketball
              className="bg-pink-500 rounded-full text-lg h-5 w-5"
              style={{ marginLeft: "0.5rem" }}
            />{" "}
            {/* Adjust margin as needed */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
