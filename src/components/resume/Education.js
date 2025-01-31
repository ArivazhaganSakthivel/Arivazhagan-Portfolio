import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech in Information Technology"
            subTitle="EGS Pillay Engineering College (2018 - 2021)"
            result="7.8/10"
            des="Established in 1995, E. G. S. Pillay Engineering College is a renowned institution in Tamil Nadu, known for its exceptional infrastructure and academic excellence.."
          />
          <ResumeCard
            title="Full Stack Development Course"
            subTitle="UpGrad Campus (2022 - 2023)"
            result="9/10"
            des="Hands-on experience building real-world projects and working collaboratively with a Team of
                developers."
          />
          {/* <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Freelance MERN Stack Developer"
            subTitle="Focus Edumatics - ( 2023 - Present)"
            result="India"
            des="With experience in both front-end and back-end development, I offer end-to-end solutions that meet your needs and bring your ideas to life.."
          />
          <ResumeCard
            title="Freelance Tutor"
            subTitle="Focus Edumatics - (2024 - 2025)"
            result="USA"
            des="Providing personalized tutoring in Math to students
ranging from 1st grade to 12th grade."
          />
          <ResumeCard
            title="Executive Math Tutor"
            subTitle="Focus Edumatics Pvt Ltd - (28-Jan-2022 to 15-Feb-2024)"
            result="USA"
            des="I have tutored over 5,000+ students in math
subjects, including algebra, geometry, and calculus."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education