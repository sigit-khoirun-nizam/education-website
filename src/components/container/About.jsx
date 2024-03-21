import React from "react";
import about from "../../assets/About.jpg";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Kami menyediakan <br /> {" "}
            <span className="text-Teal">kursus online terbaik.</span>
          </div>
          <p className="text-sm text-gray leading-7 mb-4">
          Platform pembelajaran online inovatif dan interaktif. Dengan rangkaian materi pelajaran komprehensif, fitur interaktif, serta dukungan pembelajaran berkelanjutan, kami menjadi pilihan utama pelajar yang mencari pengalaman belajar terkini. Temukan lebih lanjut di website kami dan bergabunglah dengan komunitas belajar online yang dinamis!
          </p>
          <button className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold">
            Pelajari lebih lanjut
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
