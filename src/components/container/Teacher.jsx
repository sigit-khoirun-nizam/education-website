import React from "react";
import teacher1 from "../../assets/teacher1.png";
import teacher2 from "../../assets/teacher2.png";
import { accordions } from "../../Data";
import Accordion from "./Accordion";
const Teacher = () => {
  return (
    <div className="section" id="teacher">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Mari join bersama <span className="text-Teal"> <br /> Pengajar handal </span> kami.
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
          Mari bergabung dengan pengajar handal kami. Dapatkan bimbingan terbaik untuk mencapai tujuan pembelajaran anak Anda. Ayo mulai perjalanan menuju kesuksesan bersama!
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
            Join Sekarang!
          </button>
        </div>
        <div className="p-4 md:w-3/4 sm:row-start-1">
          <img src={teacher1} alt="" />
        </div>
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
          Mari join bersama <span className="text-Teal"> <br /> Pengajar handal </span> kami.
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
          Mari bergabung dengan pengajar handal kami. Dapatkan bimbingan terbaik untuk mencapai tujuan pembelajaran anak Anda. Ayo mulai perjalanan menuju kesuksesan bersama!
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
            Join sekarang!
          </button>
        </div>
        <div className="p-4 md:w-3/4">
          <img src={teacher2} alt="" />
        </div>
      </div>
      <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
        Pertanyaan <span className="text-Teal">yang Sering Diajukan</span>
      </div>
      <div className="mt-12 max-w-[700px] mx-auto">
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />;
        })}
      </div>
    </div>
  );
};

export default Teacher;
