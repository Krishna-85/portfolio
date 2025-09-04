import { assets,   infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { MdOutlineVerified } from "react-icons/md";
import { LuMousePointerClick } from "react-icons/lu";
const About = () => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20 "
      >

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl "
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1 "
        >
          <p className="mb-10 max-w-2xl font-Ovo">
            I am a Full stack Devloper who learn's daily something new, Throught
            my career , i have had the privilage of collabrating with
            prestigious organizaions, contributing organizations, contributing
            to their success and growth.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[#000]"
                key={index}
              >
                <Image className="w-7 mt-3 " src={icon} alt={title} />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="gap-6 max-w-xl"
          >
            <motion.li
              whileHover={{ scale: 1.05 }}
              className="border-[0.5px] mt-5 flex flex-col sm:flex-row items-center border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[#000]"
            >
              {/* Image */}
              <div className="w-full sm:w-[90%] h-56 relative mb-4 sm:mb-0 sm:mr-5">
                <Image
                  src="/VaibhavPratapcertificate-kodr.png"
                  alt="Certificate"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>

              {/* Text */}
              <div className="flex items-center flex-col text-center">
                <h3 className="font-semibold flex items-center gap-1 text-gray-700">
                  Mern Certified <MdOutlineVerified />
                </h3>
                <p className="text-gray-600 text-sm">
                  Sheryians Coding School Offline 6 Months Bootcamp.
                </p>
                <p className="text-gray-600 flex items-center gap-1 text-sm underline">
                  <a href="https://sheryians.com/certificates/verify/3b98f31d-850e-4052-8fab-08647d7fc26b">
                    Verify
                  </a>
                  <LuMousePointerClick size={"2em"} />
                </p>
              </div>
            </motion.li>
          </motion.ul>

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="my-6 text-gray-700 font-Ovo"
          >
            Tools I use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="flex items-center flex-wrap justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer  hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7 " />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
