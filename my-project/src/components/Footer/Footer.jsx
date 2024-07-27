import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import creditcard from "../../assets/creditcard.webp";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryDark pt-1 pb-8 text-white">
      <div className="conainer">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company details section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold uppercase"> Coders Cafe</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
              accusamus fugit neque nam consectetur iure aliquam libero
              veritatis provident vitae?
            </p>
            <div>
              <p className="flex items-center gap-2">
                <FaPhone />
                +91 8404811303
              </p>
              <p className="flex items-center gap-2 mt-2">
                {" "}
                <FaMapLocation /> Dhanbad Katras
              </p>
            </div>
          </motion.div>

          {/* Footer link section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-2 gap-3">
              {/* first column section */}
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Poilcy</li>
                </ul>
              </div>
              {/* second column section */}
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Poilcy</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Social Link section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Follow us</h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
            </div>
            <div>
              <h1 className="text-xl font-semibold mb-2">Payment Method</h1>
              <img src={creditcard} alt="credit card" className="w-[80%]" />
            </div>
          </motion.div>
        </div>
        {/* copy right section */}
        <p className="text-white text-center mt-8 pt-8 border-t-2">
          Copyright &copy; 2024 Lets Learn.All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
