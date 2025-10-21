"use client";
import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:from-transparent dark:to-transparent px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0">
      <div className="mx-auto max-w-7xl bg-white dark:bg-blacksection rounded-lg shadow-md p-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* LEFT SIDE */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Claim Your Offer
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
              Hello, We have a special ongoing offer for our new customers to
              avail <strong>30% OFF & 150% Cashback</strong> on their first
              assignment with us. We are committed to delivering premium service
              despite an affordable price. Enter your phone number below to get
              the coupon code. <span className="text-gray-500">(We do not spam)</span>
            </p>

            <div className="mt-6">
              <p className="font-semibold text-black dark:text-white">
                Susan White
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Head of Sales Department
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex flex-col justify-center"
          >
            <h3 className="text-3xl font-extrabold text-blue-700 mb-2">
              30% OFF & 150% Cashback
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              on your First order! <br />
              Type your WhatsApp number to get an exclusive code.
            </p>

            <div className="flex items-center gap-2">
              <input
                type="tel"
                placeholder="Enter Your WhatsApp No."
                className="flex-1 rounded-full border border-gray-300 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <a
                href="https://wa.me/917763875269?text=Looking%20for%20Academic%20Help%21%21"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
              >
                Get Offer on WhatsApp
              </a>
            </div>

            <div className="mt-4">
              <a
                href="https://wa.me/917763875269?text=Looking%20for%20Academic%20Help%21%21"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 font-semibold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.932 7.932 0 0 0 8.003 0C3.584 0 .003 3.58.003 8a7.951 7.951 0 0 0 1.155 4.145L0 16l3.973-1.028A7.962 7.962 0 0 0 8.003 16c4.42 0 8-3.58 8-8 0-2.137-.832-4.145-2.402-5.674zM8.003 14.6a6.57 6.57 0 0 1-3.356-.917l-.24-.144-2.358.61.63-2.296-.155-.237A6.56 6.56 0 0 1 1.403 8c0-3.637 2.963-6.6 6.6-6.6a6.59 6.59 0 0 1 6.601 6.6c0 3.637-2.964 6.6-6.601 6.6z" />
                  <path d="M11.557 9.416c-.197-.099-1.165-.574-1.347-.64-.18-.066-.312-.099-.445.099-.132.197-.512.64-.627.773-.116.132-.23.148-.427.05-.198-.099-.836-.308-1.59-.983-.588-.524-.986-1.173-1.102-1.37-.115-.197-.012-.304.086-.403.088-.088.198-.23.296-.346.099-.115.132-.198.198-.33.066-.132.033-.247-.017-.346-.05-.099-.445-1.074-.61-1.47-.16-.38-.323-.33-.445-.336h-.38c-.132 0-.346.05-.527.247-.18.198-.69.674-.69 1.64s.707 1.9.806 2.032c.099.132 1.39 2.122 3.37 2.976.472.203.84.325 1.127.418.473.15.904.129 1.246.078.38-.057 1.165-.475 1.33-.933.164-.458.164-.851.115-.933-.05-.083-.18-.132-.38-.23z" />
                </svg>
                Order/Chat On WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
