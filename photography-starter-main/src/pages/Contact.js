import toast, { Toaster } from "react-hot-toast";
import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

// Import Images
import aryancon from "../img/contact/xza.png";

// Import Motion
import { motion } from "framer-motion";

// Import Transition
import { transition1 } from "../transitions";
import Header from "../components/Header";
const notify = () =>
  toast("Form Submitted Successfully", {
    icon: "✅",
  });

const Contact = () => {
  const form = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_22uzg44",
        "template_4dyo8ui",
        form.current,
        "tkVajDIr47ow5T5V-",
        this
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent to us");
          notify();
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Header />
      <motion.section
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={transition1}
        className="section overflow-hidden"
      >
        <div className="container mx-auto h-full">
          <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36  gap-x-8 text-center lg:text-left">
            {/* BG */}
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={transition1}
              className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10"
            ></motion.div>
            {/* Forms */}

            <div className="lg:flex-1 lg:pt-32 px-4">
              <h1 className="h1">Contact</h1>
              <p className="mb-12">I would love to get suggestions from you.</p>
              <form
                className="flex flex-col gap-y-4"
                ref={form}
                onSubmit={sendEmail}
                enctype="multipart/form-data"
                method="post"
              >
                <div className="flex gap-x-10">
                  <input
                    className="outline-none border-b border-b-primary h-[60px] bg-transparent fobt-secondary w-full pl-3 placeholder:text-[#757879]"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                  <input
                    className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    required
                  />
                </div>
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  name="content"
                  placeholder="Your messages"
                  required
                />
                <button
                  className="  btn mb-[30px] mx-auto lg:mx-0 self-start hover:bg-slate-700"
                  type="submit"
                >
                  Send It
                </button>
              </form>
            </div>
            <div>
              <Toaster />
            </div>

            {/* Images */}
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ transition: transition1, duration: 1.5 }}
              className="lg:flex-1"
            >
              {" "}
              <img src={aryancon} alt="" className="  hover:scale-110" />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
