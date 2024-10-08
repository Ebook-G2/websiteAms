import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters long"),
  phone: yup
    .string()
    .required("Please enter a phone number")
    .min(10, "Phone number must be 10 digits")
    .max(10, "Phone number must be 10 digits")
    .matches(/^(0\d{9,10})$/, "Invalid phone number"),
  content: yup
    .string()
    .required("Please enter content")
    .min(3, "Content must be at least 3 characters long")
    .max(2000, "Content must be no more than 2000 characters"),
});
export default function FormContact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [statusMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (data) => {
    emailjs
      .send(
        "service_olr51ps",
        "template_pcr5tte",
        {
          to_name: data.name,
          from_email: data.email,
          phone_number: data.phone,
          content: data.content,
        },
        "MoxnxlO8P5EPF0Wdw"
      )
      .then(
        () => {
          toast.success("Sent contact successfully!");
          console.log("SUCCESS!");
          reset();
        },
        (error) => {
          toast.error("Failed to send contact, please try again.");
          console.log("FAILED...", error);
        }
      );
  };
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView1 = useInView(ref, { once: true });
  const isInView2 = useInView(ref, { once: true });
  const isInView3 = useInView(ref, { once: true });
  const isInView4 = useInView(ref, { once: true });
  const isInView5 = useInView(ref, { once: true });
  const isInView6 = useInView(ref, { once: true });
  const isInView7 = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 400 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 1.5 },
  };
  const variants1 = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 1.5, delay: 2 },
  };
  const variants2 = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 1, delay: 1.5 },
  };
  const variants3 = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 1, delay: 1.5 },
  };
  const variants4 = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 1, delay: 2 },
  };
  const variants5 = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    transition: { duration: 1, delay: 3 },
  };
  const variants6 = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    transition: { duration: 1, delay: 3 },
  };
  const variants7 = {
    hidden: { opacity: 0, x: 440 },
    visible: { opacity: 1, x: 0 },
    transition: { duration: 2, delay: 4 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={variants.transition}
      class="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white mt-4 font-[sans-serif] before:absolute before:right-0 before:w-[300px] before:bg-blue-400 before:h-full max-md:before:hidden"
    >
      <div>
        <motion.h2
          ref={ref1}
          initial="hidden"
          animate={isInView1 ? "visible" : "hidden"}
          variants={variants1}
          transition={variants1.transition}
          class="text-gray-800 text-3xl font-bold"
        >
          Contact us
        </motion.h2>
        <motion.p
          ref={ref2}
          initial="hidden"
          animate={isInView2 ? "visible" : "hidden"}
          variants={variants2}
          transition={variants2.transition}
          class="text-sm text-gray-500 mt-4 leading-relaxed"
        >
          Do you have specific questions or are you looking for new
          collaboration opportunities? Let our experienced team accompany you
          and provide the best solutions for you.
        </motion.p>
        {statusMessage && (
          <div
            className={`mt-4 ${
              statusMessage.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {statusMessage}
          </div>
        )}
        <form onSubmit={handleSubmit(sendEmail)}>
          <motion.div
            ref={ref3}
            initial="hidden"
            animate={isInView3 ? "visible" : "hidden"}
            variants={variants3}
            transition={variants3.transition}
            class="space-y-4 mt-8"
          >
            <input
              type="text"
              {...register("name")}
              placeholder="Enter your full name"
              class="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              onChange={handleChange}
            />
            {errors.name && (
              <span className="text-red-500 text-sm pl-2">
                {errors.name.message}
              </span>
            )}
            <input
              type="text"
              {...register("email")}
              placeholder="Enter your mail"
              class="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              onChange={handleChange}
            />
            {errors.email && (
              <span className="text-red-500 text-sm pl-2">
                {errors.email.message}
              </span>
            )}
            <input
              type="text"
              {...register("phone")}
              placeholder="Enter your phone number"
              class="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              onChange={handleChange}
            />
            {errors.phone && (
              <span className="text-red-500 text-sm pl-2">
                {errors.phone.message}
              </span>
            )}
            <textarea
              {...register("content")}
              placeholder="Enter content"
              class="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              onChange={handleChange}
            ></textarea>
            {errors.content && (
              <span className="text-red-500 text-sm pl-2">
                {errors.content.message}
              </span>
            )}
          </motion.div>
          <motion.button
            ref={ref4}
            initial="hidden"
            animate={isInView4 ? "visible" : "hidden"}
            variants={variants4}
            transition={variants4.transition}
            type="submit"
            class="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              fill="#fff"
              class="mr-2"
              viewBox="0 0 548.244 548.244"
            >
              <path
                fill-rule="evenodd"
                d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                clip-rule="evenodd"
                data-original="#000000"
              />
            </svg>
            Send Message
          </motion.button>
        </form>

        <ul class="mt-4 flex flex-wrap justify-center gap-6">
          <motion.li
            ref={ref5}
            initial="hidden"
            animate={isInView5 ? "visible" : "hidden"}
            variants={variants5}
            transition={variants5.transition}
            class="flex items-center text-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              fill="currentColor"
              viewBox="0 0 479.058 479.058"
            >
              <path
                d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                data-original="#000000"
              />
            </svg>
            <a href="javascript:void(0)" class="text-sm ml-4">
              <strong>AMS.JSC@mediasolution.ai</strong>
            </a>
          </motion.li>
          <motion.li
            ref={ref6}
            initial="hidden"
            animate={isInView6 ? "visible" : "hidden"}
            variants={variants6}
            transition={variants6.transition}
            class="flex items-center text-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              fill="currentColor"
              viewBox="0 0 482.6 482.6"
            >
              <path
                d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                data-original="#000000"
              ></path>
            </svg>
            <a href="javascript:void(0)" class="text-sm ml-4">
              <strong>0386902221</strong>
            </a>
          </motion.li>
        </ul>
      </div>
      <motion.div
        ref={ref7}
        initial="hidden"
        animate={isInView7 ? "visible" : "hidden"}
        variants={variants7}
        transition={variants7.transition}
        class="z-10 relative h-full max-md:min-h-[350px]"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.8212934899375!2d106.64120866960886!3d10.789456816731548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f0044d1dcc5%3A0x3eb7bc0716cec607!2sAI%20Media%20Solution!5e0!3m2!1svi!2s!4v1726132372419!5m2!1svi!2s"
          class="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </motion.div>
      <ToastContainer />
    </motion.div>
  );
}
