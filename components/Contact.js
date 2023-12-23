import React from "react";
import Image from "next/image";
import Link from "next/link";
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
  const sendeEmail = (e) => {
    setLoading(true);
    e.preventDefault();
    // emailjs.sendForm("service_nxlvhta","template_2ttxrjc",e.target)
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
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2  py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8 ">
          <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <h2 className="text-[#5651e5] mt-5">Nicolás Posa</h2>
                <p>Frontend Developer</p>
                <a href="mailto:nicoposa57@gmail.com">
                  <p className="py-4">nicoposa57@gmail.com</p>
                </a>
              </div>
              <p className="uppercase pt-8">Connect with me</p>

              <div className="flex items-center justify-between  py-4 ">
                <a
                  href="https://www.linkedin.com/in/nicolasposa/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/Nicoposa1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <a
                  href="mailto:nicoposa57@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </a>
                <a
                  href="/CV-Nicolas-Posa-Software-Developer.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiFillFilePdf />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 ">
            <div className="p-4">
              <form
                onSubmit={(e) => {
                  if (
                    e.target.name.value === "" ||
                    e.target.user_email.value === "" ||
                    e.target.message.value === ""
                  ) {
                    e.preventDefault();
                    if (e.target.name.value === "") {
                      setNotName(true);
                    } else {
                      setNotName(false);
                    }
                    if (
                      e.target.user_email.value === "" ||
                      !email.includes("@") ||
                      !email.includes(".")
                    ) {
                      setNotEmail(true);
                    } else {
                      setNotEmail(false);
                    }
                    if (e.target.message.value === "") {
                      setNotMessage(true);
                    } else {
                      setNotMessage(false);
                    }
                  } else {
                    sendeEmail(e);
                    setNotName(false);
                    setNotEmail(false);
                    setNotMessage(false);
                  }
                }}
              >
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input
                    className={`border-2 rounded-lg p-3 ${
                      notName && name.length === 0
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    type="text"
                    name="name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    value={name}
                  />
                  {notName && name.length === 0 && (
                    <p className="text-red-500 text-xs pt-1">
                      Please enter a valid name
                    </p>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className={`border-2 rounded-lg p-3 ${
                      notEmail && email.length === 0
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    type="email"
                    name="user_email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                  />
                  {notEmail && email.length === 0 && (
                    <p className="text-red-500 text-xs pt-1">
                      Please enter a valid email
                    </p>
                  )}
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className={`border-2 rounded-lg p-3 ${
                      notMessage && message.length === 0
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    rows={8}
                    name="message"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    value={message}
                  ></textarea>
                  {notMessage && message.length === 0 && (
                    <p className="text-red-500 text-xs pt-1">
                      Please enter a message
                    </p>
                  )}
                </div>
                <button className="w-full p-4 text-gray-100 mt-4 cursor-pointer">
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-4 border-gray-100"></div>
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-12">
          <Link href="/">
            <div className="rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                size={20}
                className="m-auto text-[#5651e5]  "
              />
            </div>
          </Link>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Contact;
