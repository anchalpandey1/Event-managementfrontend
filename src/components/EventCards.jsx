import React from "react";
import { Calendar, GraduationCap, Mic, MonitorPlay, Users, Music, PartyPopper, GalleryHorizontalEnd } from "lucide-react";

const EventCards = () => {
  const categories = [
    { name: "Conferences", icon: <Mic size={40} className="text-green-600 mx-auto" /> },
    { name: "Workshops", icon: <GraduationCap size={40} className="text-green-600 mx-auto" /> },
    { name: "Seminars", icon: <Calendar size={40} className="text-green-600 mx-auto" /> },
    { name: "Webinars", icon: <MonitorPlay size={40} className="text-green-600 mx-auto" /> },
    { name: "Meetups", icon: <Users size={40} className="text-green-600 mx-auto" /> },
    { name: "Concerts", icon: <Music size={40} className="text-green-600 mx-auto" /> },
    { name: "Festivals", icon: <PartyPopper size={40} className="text-green-600 mx-auto" /> },
    { name: "Exhibitions", icon: <GalleryHorizontalEnd size={40} className="text-green-600 mx-auto" /> },
  ];

  return (
    <div className="p-6 mt-10">
      <h1 className="text-center text-3xl font-bold text-gray-800">Welcome to The Event</h1>
      <p className="text-center text-lg text-gray-600 mt-2">Discover and join exciting events around you!</p>
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
              {category.icon}
              <p className="mt-4 text-lg font-semibold text-green-900">{category.name}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default EventCards;
