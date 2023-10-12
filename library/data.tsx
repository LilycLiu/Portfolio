import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ohmyfoodImg from "@/public/Ohmyfood.jpg";
import nespressositeImg from "@/public/nespressosite.jpg";
import terryscafeImg from "@/public/terryscafe.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Web development bootcamp",
    location: "London, UK",
    description:
      "I graduated after 3 months of studying.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Due Diligence Researcher/Data Processor",
    location: "London, UK",
    description:
      "I worked as a Due Diligence Researcher dealing with visa/citizenship applications for 3 years.",
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "Office Manager",
    location: "Taipei, TW" ,
    description:
      "As an office manager, I assistied with director and supporting all departments admin works",
    icon: React.createElement(FaReact),
    date: "2019",
  },
] as const;

export const projectsData = [
  {
    title: "Terry's Cafe",
    description:
      "This was my first project which I tried to copy Terry's cafe website as a pratice project as it does not look too complicated so suitable for a beginner",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: terryscafeImg,
  },
  {
    title: "Nespresso website",
    description:
      "My second project was Nespresso website, it has more responsive feature and good to pratice different screen size modes.",
    tags: ["HTML", "CSS", "Javascript", "SCSS"],
    imageUrl: nespressositeImg,
  },
  {
    title: "Ohmyfood",
    description:
      "My third project is from the bootcamp, I practiced more Sass feasure and animation function.",
    tags: ["HTML", "CSS", "SCSS"],
    imageUrl: ohmyfoodImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "SASS",
] as const;