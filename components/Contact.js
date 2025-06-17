import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillFilePdf } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [notName, setNotName] = React.useState(false);
  const [notEmail, setNotEmail] = React.useState(false);
  const [notMessage, setNotMessage] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/nicolasposa/",
      label: "LinkedIn"
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/Nicoposa1",
      label: "GitHub"
    },
    {
      icon: <AiOutlineMail />,
      href: "mailto:nicoposa57@gmail.com",
      label: "Email"
    },
    {
      icon: <AiFillFilePdf />,
      href: "/CV-Nicolas-Posa-Software-Developer.pdf",
      label: "Resume"
    }
  ];

  const sendeEmail = (e) => {
    setLoading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nxlvhta",
        "template_2ttxrjc",
        e.target,
        "WhfeZjo7fiHw7MuXC"
      )
      .then(
        function (response) {
          toast.success("Message sent successfully");
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          setName("");
          setEmail("");
          setMessage("");
        },
        function (error) {
          console.log("FAILED...", error);
          setLoading(false);
        }
      );
  };

  return (
    <div id="contact" className="w-full bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-[1240px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xl tracking-widest uppercase text-[#5651e5] font-semibold">
            Contact
          </p>
          <h2 className="py-4 text-3xl font-bold text-gray-800">Get In Touch</h2>
          <div className="w-24 h-1 bg-[#5651e5] mx-auto mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-3 lg:col-span-2 w-full bg-white  shadow-gray-200 rounded-xl p-8"
          >
            <div className="h-full">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#5651e5] mb-2">Nicolás Posa</h2>
                <p className="text-gray-600">Software Developer</p>
              </div>
              
              <p className="uppercase text-gray-600 font-semibold mb-6">Connect with me</p>

              <div className="flex items-center justify-between">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="group"
                  >
                    <div className="rounded-full bg-gray-50 p-4 cursor-pointer 
                                  transition-all duration-300 hover:bg-[#5651e5] hover:text-white">
                      <span className="text-xl">{link.icon}</span>
                    </div>
                    <span className="sr-only">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-3 w-full bg-white  rounded-xl p-8"
          >
            <form onSubmit={(e) => {
              if (name === "" || email === "" || message === "") {
                e.preventDefault();
                setNotName(name === "");
                setNotEmail(email === "" || !email.includes("@") || !email.includes("."));
                setNotMessage(message === "");
              } else {
                sendeEmail(e);
                setNotName(false);
                setNotEmail(false);
                setNotMessage(false);
              }
            }}>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2 text-gray-600 font-semibold">Name</label>
                <input
                  className={`border-2 rounded-lg p-3 focus:outline-none focus:border-[#5651e5] transition-colors duration-300 ${
                    notName ? "border-red-500" : "border-gray-200"
                  }`}
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                {notName && (
                  <p className="text-red-500 text-xs pt-1">Please enter a name</p>
                )}
              </div>

              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2 text-gray-600 font-semibold">Email</label>
                <input
                  className={`border-2 rounded-lg p-3 focus:outline-none focus:border-[#5651e5] transition-colors duration-300 ${
                    notEmail ? "border-red-500" : "border-gray-200"
                  }`}
                  type="email"
                  name="user_email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                {notEmail && (
                  <p className="text-red-500 text-xs pt-1">Please enter a valid email</p>
                )}
              </div>

              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2 text-gray-600 font-semibold">Message</label>
                <textarea
                  className={`border-2 rounded-lg p-3 focus:outline-none focus:border-[#5651e5] transition-colors duration-300 ${
                    notMessage ? "border-red-500" : "border-gray-200"
                  }`}
                  rows={8}
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                ></textarea>
                {notMessage && (
                  <p className="text-red-500 text-xs pt-1">Please enter a message</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-4 bg-[#5651e5] text-white rounded-lg mt-4 font-semibold hover:bg-[#4a45c4] transition-colors duration-300"
                type="submit"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  </div>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center pt-12"
        >
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-full bg-white shadow-lg shadow-gray-200 p-4 cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <HiOutlineChevronDoubleUp size={24} className="text-[#5651e5]" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
      <Toaster position="top-center" />
    </div>
  );
};

export default Contact;
