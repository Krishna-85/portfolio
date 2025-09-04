import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20 "
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My latest work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Outfit"
      >
        Welcome to My Portfolio! Explore a collection of projects showcasing my
        experties in fullStack-developement.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] my-10 gap-5 "
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          style={{
            backgroundImage: `url(https://ik.imagekit.io/onvky6lf8/Screenshot%202025-09-04%20135424.png?updatedAt=1756974308021)`
          }}
        >
          <div className="bg-white w-3/4 rounded-md absolute bottom-4 left-1/2 -translate-x-1/2 py-2 px-4 flex items-center justify-between duration-500 group-hover:bottom-6 shadow-md">
            <div>
              <h2 className="font-semibold text-sm">N/A</h2>
              <p className="text-xs text-gray-700">Web app</p>
            </div>
            <div className="border rounded-full border-black w-8 h-8 flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
               {/* add image inside anchor tag */}
                <Image src={assets.send_icon} alt="send icon" className="w-4" />
              
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          style={{
            backgroundImage: `url(https://ik.imagekit.io/onvky6lf8/Screenshot%202025-09-04%20135424.png?updatedAt=1756974308021)`
          }}
        >
          <div className="bg-white w-3/4 rounded-md absolute bottom-4 left-1/2 -translate-x-1/2 py-2 px-4 flex items-center justify-between duration-500 group-hover:bottom-6 shadow-md">
            <div>
              <h2 className="font-semibold text-sm">BG-Remover</h2>
              <p className="text-xs text-gray-700">Web app</p>
            </div>
            <div className="border rounded-full border-black w-8 h-8 flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://bg-remover-h89r.vercel.app/"
              >
                <Image src={assets.send_icon} alt="send icon" className="w-4" />
              </a>
            </div>
          </div>
        </motion.div>

         <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          style={{
            backgroundImage: `url(https://ik.imagekit.io/onvky6lf8/Screenshot%202025-09-04%20135424.png?updatedAt=1756974308021)`
          }}
        >
          <div className="bg-white w-3/4 rounded-md absolute bottom-4 left-1/2 -translate-x-1/2 py-2 px-4 flex items-center justify-between duration-500 group-hover:bottom-6 shadow-md">
            <div>
              <h2 className="font-semibold text-sm">N/A</h2>
              <p className="text-xs text-gray-700">Web app</p>
            </div>
            <div className="border rounded-full border-black w-8 h-8 flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
               {/* add image inside anchor tag */}
                <Image src={assets.send_icon} alt="send icon" className="w-4" />
              
            </div>
          </div>
        </motion.div>
  <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          style={{
            backgroundImage: `url(https://ik.imagekit.io/onvky6lf8/Screenshot%202025-09-04%20135424.png?updatedAt=1756974308021)`
          }}
        >
          <div className="bg-white w-3/4 rounded-md absolute bottom-4 left-1/2 -translate-x-1/2 py-2 px-4 flex items-center justify-between duration-500 group-hover:bottom-6 shadow-md">
            <div>
              <h2 className="font-semibold text-sm">N/A</h2>
              <p className="text-xs text-gray-700">Web app</p>
            </div>
            <div className="border rounded-full border-black w-8 h-8 flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
               {/* add image inside anchor tag */}
                <Image src={assets.send_icon} alt="send icon" className="w-4" />
              
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[#fcf4ff] duration-500"
      >
        show more{" "}
        <Image
          src={assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
