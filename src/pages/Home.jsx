import React from "react";
import {
  Hero,
  Line,
  About,
  Skills,
  Projects,
  ContactSection,
  Marque,
  NavBar,
} from "../components/index";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Line classname="xs:-mt-2 lg:-mt-9" />
      <About />
      <Skills />
      <Line classname="mt-5" />
      <Projects />
      <ContactSection />

      {/* Marque text */}
      <div className="w-full mt-10 hover:text-stroke-2 ">
        <Link to="/contact" target="blank">
          <Marque duration={20}>
            <div className="flex uppercase text-[6rem] -mt-7 lg:text-[13rem] select-none font-bold lg:-mt-16 w-full pr-8 lg:pr-16">
              <span>get in touch</span>
            </div>
          </Marque>
        </Link>
      </div>
    </>
  );
};

export default Home;
