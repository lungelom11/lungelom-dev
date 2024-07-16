import React from "react";
import { stackList } from "../../data/projectData";
import image from "../../Images/lungelom.jpeg"
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src={image}
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
          <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Lungelo Mkhwemte</strong>.I am a versatile software developer with experience across the entire system development lifecycle. From initial analysis to final deployment, I thrive on transforming ideas into functional and innovative software solutions.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My role begins with thorough analysis and requirements gathering. I excel in understanding user needs and translating them into detailed specifications that guide the development process. In design, I leverage my knowledge of software architecture patterns and UI/UX principles to create intuitive and scalable solutions. Crafting robust backend systems and designing responsive frontend interfaces are integral to my daily work.
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInLeft">
            When it comes to implementation, I am proficient in multiple programming languages and frameworks. Whether it's JavaScript for dynamic web applications or Python for backend services, I write clean and efficient code that meets high standards of quality and performance.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            Beyond technical skills, I embody a continuous learning mindset. I stay updated with the latest technologies and industry trends, integrating new tools and methodologies to enhance productivity and deliver cutting-edge solutions.

            Collaboration is key to my success. Working within agile teams, I contribute my expertise while learning from others, fostering a culture of innovation and excellence.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
