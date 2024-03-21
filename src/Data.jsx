import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode, FaMosque } from "react-icons/fa";
import { MdOutlineScience } from "react-icons/md";

import courses1 from "./assets/courses1.png";
import courses2 from "./assets/courses2.jpg";
import courses3 from "./assets/courses3.png";
import courses4 from "./assets/courses4.jpg";
import courses5 from "./assets/courses5.png";
import courses6 from "./assets/courses6.png";
import courses7 from "./assets/courses7.png";
import courses8 from "./assets/courses8.png";

import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";

export const navLinks = [
  {
    id: 1,
    href: "home",
    link: "Beranda",
  },
  {
    id: 2,
    href: "about",
    link: "Tentang",
  },
  {
    id: 3,
    href: "courses",
    link: "Kursus",
  },
  {
    id: 4,
    href: "teacher",
    link: "Pengajar",
  },
  {
    id: 5,
    href: "contact",
    link: "Kontak",
  },
];

export const categories = [
  {
    id: 1,
    icon: <FiPenTool />,
    category: "Design",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    category: "Development",
  },
  {
    id: 3,
    icon: <FaMosque />,
    category: "Islamic",
  },
  {
    id: 4,
    icon: <MdOutlineScience />,
    category: "Science",
  },
];

export const courses = [
  {
    id: 1,
    image: courses1,
    category: "Design",
    title: "Design Grafis For Kids",
    rating: 4.9,
    participants: 100,
    price: "20.000",
  },
  {
    id: 2,
    image: courses2,
    category: "Development",
    title: "Coding For Kids",
    rating: 4.8,
    participants: 100,
    price: "20.000",
  },
  {
    id: 3,
    image: courses3,
    category: "Islamic",
    title: "Tahfidz Qur'an",
    rating: 4.9,
    participants: 300,
    price: "20.000",
  },
  {
    id: 4,
    image: courses4,
    category: "Sport",
    title: "Archery(Memanah)",
    rating: 4.7,
    participants: 20,
    price: "20.000",
  },
  {
    id: 5,
    image: courses5,
    category: "Sport",
    title: "Taekwondo",
    rating: 4.9,
    participants: 20,
    price: "20.000",
  },
  {
    id: 6,
    image: courses6,
    category: "Sport",
    title: "Futsal",
    rating: 4.9,
    participants: 50,
    price: "20.000",
  },
  {
    id: 7,
    image: courses7,
    category: "Sport",
    title: "Basket",
    rating: 4.9,
    participants: 20,
    price: "20.000",
  },
  {
    id: 8,
    image: courses8,
    category: "Development",
    title: "Robotik",
    rating: 4.9,
    participants: 20,
    price: "20.000",
  },
  {
    id: 9,
    image: courses8,
    category: "Design",
    title: "Design D3 For Kids",
    rating: 4.9,
    participants: 50,
    price: "20.000",
  },
];

export const logos = [logo1, logo2, logo3];

export const accordions = [
  {
    id: 1,
    title: "Apa itu SmartAcademy",
    content: "SmartAcademy adalah platform pembelajaran daring yang menyediakan beragam kursus untuk memenuhi kebutuhan belajar anak Anda. Dengan instruktur berkualitas dan kurikulum terstruktur, SmartAcademy memastikan anak Anda mendapatkan pengalaman pembelajaran yang optimal. Temukan kursus-kursus dalam berbagai bidang seperti desain, pengembangan, ilmu pengetahuan, dan banyak lagi. Dengan fleksibilitas belajar di mana saja dan kapan saja, SmartAcademy memungkinkan anak Anda meraih potensi maksimal mereka. Ayo mulai belajar dan tingkatkan keterampilan anak Anda dengan SmartAcademy!"
  },
  {
    id: 2,
    title: "Apa yang bisa saya pelajari dari SmartAcademy?",
    content: "Anak Anda dapat mempelajari berbagai hal dari SmartAcademy, mulai dari desain grafis, pengembangan perangkat lunak, ilmu pengetahuan, agama dan kebudayaan Islam, hingga keterampilan soft dan kategori lainnya sesuai dengan minat dan kebutuhan mereka."
  },
  {
    id: 3,
    title: "Bisakah saya mengajar di SmartAcademy?",
    content: "Tentu saja! Anda dapat menjadi instruktur di SmartAcademy. Kami selalu mencari individu yang berpengalaman dan berpengetahuan dalam berbagai bidang untuk berbagi pengetahuan mereka dengan komunitas kami. Jika Anda memiliki keahlian dan pengalaman yang relevan, Anda dapat mengajukan diri sebagai instruktur. Silakan kunjungi situs web kami atau hubungi tim kami untuk informasi lebih lanjut tentang proses pendaftaran menjadi instruktur."
  },
];
