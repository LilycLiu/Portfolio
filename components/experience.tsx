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

export default function Experience() {
  const { ref } = useSectionInView('Experience');

  return (
    <section id='experience' ref={ref} className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={ true }
              contentStyle={{
                background: '#a855f7',
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #C154C1",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "pink",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize text-pink-100">{item.title}</h3>
              <p className="font-normal !mt-0 text-pink-100">{item.location}</p>
              <p className="!mt-1 !font-normal text-purple-200 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
