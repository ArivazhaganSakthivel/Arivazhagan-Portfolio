import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo } from "../../assets/index";
import projectThree from "../../assets/images/Movie.jpg"
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {/* <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        /> */}

        <ProjectsCard
          title="E-commerce Website"
          des="I created an easy-to-use online store that allows customers to browse products, make purchases, and complete transactions smoothly. The site is mobile-friendly and includes secure payment options, making it a great shopping experience!"
          src={projectOne}
        />

        <ProjectsCard
          title="Movie Booking Application"
          des="I developed a movie booking app that allows users to browse showtimes, select seats, and purchase tickets easily. The app is user-friendly, supports multiple payment options, and provides real-time updates on movie availability!"
          src={projectThree}
        />
        <ProjectsCard
          title="Chatting App"
          des="I built a real-time chatting app that lets users send and receive messages instantly. The app includes features like private messaging, group chats, and notifications, offering a seamless and engaging communication experience!"
          src={projectTwo}
        />


      </div>
    </section>
  );
}

export default Projects