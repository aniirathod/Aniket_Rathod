import React, { useRef, useState } from "react";
import { Footer, Marque, NavBar, TextReveal } from "../components/index";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const Key = String(import.meta.env.VITE_FORM_URL);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);

    formData.append("access_key", Key);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();

      if (data.success) {
        setSuccessMessage("Your message has been sent successfully!");
        setErrorMessage("");
        form.current.reset();
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please check your connection.");
    }
  };
  const text1 = "Ready to bring your ideas to life?";
  const text =
    " As I begin my front-end development and freelancing journey, I'm eager to create modern, responsive websites tailored to your needs. Let's collaborate and build something exceptional!";
  //creating animations
  const container = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        duration: 0.02,
      },
    },
  };

  const item = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.37, 0, 0.63, 1],
      },
    },
  };

  return (
    <div>
      <NavBar />

      {/* Marquee Say hello! */}
      <motion.div className="pt-32 lg:pt-44 gap-96 ">
        <Marque duration={12} classname="hover:text-stroke-2">
          <span className="px-16 font-semibold text-9xl">SAY HELLO!</span>
          <span className="font-semibold text-9xl ">SAY HELLO!</span>
        </Marque>
      </motion.div>

      {/* Contact Form*/}
      <div className="flex flex-col justify-between w-11/12 mx-auto mt-12 lg:mt-36 lg:flex-row lg:mb-28 ">
        <div className="w-full text-lg font-normal leading-normal tracking-wider lg:leading-10 xl:leading-snug lg:text-3xl xl:text-4xl lg:w-1/2 text-white/90 lg:text-pretty">
          <h1>
            <TextReveal text={text1} duration={0.2} delay={0.02} />
            <TextReveal text={text} duration={0.2} delay={0.02} />
          </h1>
        </div>
        <div className="w-full py-14 lg:py-0 lg:w-1/2 lg:pl-24 xl:pl-36">
          <motion.form
            onSubmit={onSubmit}
            ref={form}
            className="flex flex-col w-full gap-10 text-white lg:gap-14 "
            variants={container}
            initial="initial"
            animate="animate"
          >
            <div className="overflow-hidden ">
              <motion.input
                type="text"
                name="name"
                placeholder="Your name here"
                required
                className="w-full h-16 text-xl bg-transparent border-b outline-none placeholder:text-white border-white/50"
                variants={item}
              />
            </div>
            <div className="overflow-hidden ">
              <motion.input
                type="email"
                name="email"
                required
                placeholder="Your email here"
                className="w-full h-16 text-xl bg-transparent border-b outline-none placeholder:text-white border-white/50 "
                variants={item}
              />
            </div>

            <div className="overflow-hidden ">
              <motion.textarea
                name="message"
                placeholder="Describe the work"
                required
                className="w-full text-xl bg-transparent border-b outline-none h-28 placeholder:text-white border-white/50"
                variants={item}
              />
            </div>

            {successMessage && <p className="">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <motion.button
              type="submit"
              className="flex items-center justify-between w-1/2 px-8 py-5 text-xl border rounded-full xl:w-1/3 border-white/50 group hover:border-white"
              variants={item}
            >
              <span className=""> let's talk</span>{" "}
              <span className="font-bold transition-all duration-100 ease-linear scale-125 group-hover:rotate-90">
                &#8599;
              </span>
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
