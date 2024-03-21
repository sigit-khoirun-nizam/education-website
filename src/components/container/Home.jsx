import React from "react";
import hero from "../../assets/hero.png";
import { logos } from "../../Data";
import { motion } from "framer-motion";
const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          <div className="font-bold text-xs text-Teal mb-4">
            {" "}
            tempat bimbel terbaik untuk anak anda
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            Mulai <br /> belajar dari Nol, <br /> Menuju kesuksesan! 
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
            Pilihan terbaik untuk siswa SD/MI yang ingin meraih potensi maksimal. Kurikulum terstruktur dan metode pembelajaran inovatif menciptakan suasana belajar yang kreatif dan interaktif. Bergabunglah dengan Smart Academy Course untuk pengalaman belajar yang mendalam dan mempersiapkan masa depan cerah untuk anak Anda.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">
              Join Sekarang!
            </button>
            <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
              Lihat trailer
            </button>
          </div>
        </div>
        <div className="md:w-[60%]">
          <img src={hero} alt="" />
        </div>
      </div>
      <div>
        <p className="text-center text-xl">
            Kami berkolaborasi dengan{" "}
          <span className="text-Teal">
            50+ Universitas ternama di Indonesia
          </span>
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={logo} alt="" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
