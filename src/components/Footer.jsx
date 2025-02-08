

import React from "react";

const Footer = () => {
  return (
    <footer className="px-3 pt-4 lg:px-9 border-t-2 bg-gray-50">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Company Info */}
        <div className="sm:col-span-2">
          <a href="#" className="inline-flex items-center">
            <img
              src="https://mcqmate.com/public/images/logos/60x60.png"
              alt="logo"
              className="h-8 w-8"
            />
            <span className="ml-2 text-2xl font-bold tracking-wide text-gray-800">
              Event Management
            </span>
          </a>
          <div className="mt-6 lg:max-w-xl">
            <p className="text-lg text-gray-800">
            Join us for an unforgettable experience at **Event Name**! Explore insightful sessions, interactive workshops, and networking opportunities with industry leaders.
            </p>
          </div>
        </div>

       
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">Event Details</p>
          <p><strong>Date:</strong> March 15-17, 2025</p>
          <p><strong>Venue:</strong> Grand Convention Center, New York</p>
          <p><strong>Time:</strong> 10:00 AM - 6:00 PM</p>
          <p className="text-base font-bold tracking-wide text-gray-900 mt-2">Tickets & Registration</p>
          <a href="#">Buy Tickets</a>
          <a href="#">Event Schedule</a>
          <a href="#">Speakers & Guests</a>
        </div>

        {/* Company Availability & Contact */}
        <div>
          <p className="text-base font-bold tracking-wide text-gray-900">
            COMPANY IS ALSO AVAILABLE ON
          </p>
          <div className="flex items-center gap-1 px-2">
          
            <a className="w-full min-w-xl" href="/">
              <img
                src="https://mcqmate.com/public/images/icons/youtube.svg"
                alt="Youtube Button"
                className="h-28"
              />
            </a>
          </div>
          <p className="text-base font-bold tracking-wide text-gray-900 mt-3">Contacts</p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a href="mailto:admin@company.com" title="send email">
              event@organizer.com
            </a>
          </div>
        </div>

      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">© Copyright 2025 Event Management. All rights reserved.</p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a href="#" className="text-sm text-gray-600 transition-colors duration-300 hover:text-purple-600">
              Privacy & Cookies Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-sm text-gray-600 transition-colors duration-300 hover:text-purple-600">
              Disclaimer
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
