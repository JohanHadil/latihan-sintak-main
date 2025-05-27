import { youtube } from "lucide-react";
import React from "react";

function JejeNameCard() {
  return (
    <div className="border border-gray-300 p-4 rounded-lg max-w-sm">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <img
            src="./rafi.png"
            alt="rafi"
            className="w-18 rounded-full border border-gray-300 hover:animate-spin"
          />
          <div>
            <h1 className="font-bold text-lg">Johan Hadil Mahasin</h1>
            <h2 className="text-sm">Manajemen Informatika</h2>
          </div>
        </div>
        <p className="text-gray-500">
          "Halo, perkenalkan nama saya Johan Hadil Mahasin saya adalah salah
          satu orang yang mengikuti SINTAK 2025. Salam kenal semuanya..."
        </p>
        <a
          href="https://www.youtube.com/@mrlus9109"
          target="blank"
          className="flex items-center justify-center gap-2 bg-black text-white py-2 rounded-md animate-bounce"
        >
          <Youtube />
          Youtube
        </a>
      </div>
    </div>
  );
}

export default JejeNameCard;
