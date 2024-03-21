import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-Teal p-10"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
        <div>
          <div className="font-bold mb-6">SMARTACADEMY</div>
          <p className="text-sm leading-7">
            
Bergabunglah di Smart Academy Course untuk siswa SD/MI. Dapatkan pembelajaran terstruktur dan inovatif untuk meraih potensi maksimal. Persiapkan masa depan cerah anak Anda hari ini.
          </p>
        </div>
        <div>
          <div className="font-bold mb-6">Kategori</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
              Design
            </a>
            <a href="" className="text-sm hover:underline">
              Development
            </a>
            <a href="" className="text-sm hover:underline">
              {" "}
              Islamic
            </a>
            <a href="" className="text-sm hover:underline">
              Science
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Ikuti kami</div>
          <div className="text-sm mb-4">smartacademy@gmail.com</div>
          <div className="text-sm">+6274837482734</div>
          <div className="flex gap-4 mt-4">
            <a href="" className="hover:scale-110 text-xl">
              <BsFacebook />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsInstagram />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsTwitter />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
