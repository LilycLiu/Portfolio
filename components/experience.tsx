'use client';

import React from 'react';
import SectionHeading from './section-heading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/library/data';
import { useSectionInView } from '@/library/hooks';
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView('Experience');
  const { theme } = useTheme();

  return (
    <section id='experience' ref={ref} className='scroll-mt-28 mb-28 lg:w-[60rem]'>
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>              
          <VerticalTimelineElement
              visible={ true }
              contentStyle={{
                background: 
                theme === "light" ? '#a855f7' : "rgba(246, 74, 138, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              
              contentArrowStyle={{
                borderRight: 
                theme === "light"
                    ? "0.4rem solid #C154C1"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                textAlign: "left",
                background:
                theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
                color: "#e11584",
                backgroundColor: "#E0B0FF"
              }}
            >
              <h3 className="font-semibold capitalize text-pink-800 dark:text-pink-300">{item.title}</h3>
              <p className="font-normal !mt-0 text-pink-700 dark:text-[#FFD1DC]">{item.location}</p>
              <p className="!mt-1 !font-normal text-purple-600 dark:text-[#fcbacb]">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
