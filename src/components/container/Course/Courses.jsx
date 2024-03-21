import React from "react";
import { categories } from "../../../Data";
import { courses } from "../../../Data";
import Categories from "./Categories";
import Course from "./Course";
import { motion } from "framer-motion";

const Courses = () => {
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
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className="section" id="courses">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Kategori <span className="text-Teal"> Terbaik Kami. </span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
        Tersedia di SmartAcademy, kategori kursus Design, Development, Islamic, dan Science menawarkan berbagai pelatihan untuk pengembangan keterampilan dalam desain, pengembangan perangkat lunak, pemahaman agama Islam, serta pengetahuan dalam ilmu pengetahuan seperti fisika, kimia, biologi, dan matematika. Dengan kurikulum berkualitas dan instruktur terampil, SmartAcademy memberikan kesempatan bagi peserta untuk mendalami minat mereka dalam berbagai bidang.
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8"
      >
        {categories.map((category) => {
          return <Categories key={category.id} {...category} />;
        })}
      </motion.div>
      <div className="text-xl font-bold mt-32">Kursus terbaik kami</div>
      <div className="mt-12 overflow-x-hidden w-full  relative">
        <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
          {courses.map((course) => {
            return <Course key={course.id} {...course} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
