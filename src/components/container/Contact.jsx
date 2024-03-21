import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="section" id="contact">
      <div className="text-center max-w-[600px] mx-auto">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Ikuti sekarang juga
        </div>
        <p className="text-sm leading-7 text-gray">
          Ikuti sekarang juga kursus SmartAcademy untuk meraih pengetahuan dan keterampilan yang berharga. Dengan instruktur berkualitas dan kurikulum terbaik, Anda dapat memulai perjalanan pembelajaran Anda dengan cepat dan efektif. Jangan tunda lagi, segera daftar dan mulailah menggapai impian Anda hari ini!
        </p>
        <motion.form
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-5"
        >
          <input
            type="text"
            placeholder="smartacademy@sch.id"
            className="sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60"
          />
          <button className="text-sm text-white bg-Teal sm:p-3 p-2 shadow-md font-bold">
            Subscribe
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
