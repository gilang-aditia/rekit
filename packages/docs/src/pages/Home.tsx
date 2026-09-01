import React from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Iphone15Pro } from "@/components/ui/iphone-15-pro";
import { Palette, Terminal } from "lucide-react";

export default function Home() {
  const textVariants: Variants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1,
      },
    },
  };

  return (
    <div className="relative w-full min-h-screen [--color-primary:#6C3AE0] overflow-hidden">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(125%_125%_at_50%_10%,#fff_40%,var(--color-primary)_100%)] dark:bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,var(--color-primary)_100%)]" />

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-start text-center pt-20 md:pt-10 px-4 pb-0 max-w-7xl mx-auto z-10 relative">
        <AnimatedGroup
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            },
            item: textVariants,
          }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-5 leading-[1.1] px-6 md:px-0">
            Rakit Antarmuka
            <br />
            Tanpa Bolak-balik Revisi
          </h1>
          <p className="text-sm sm:text-sm md:text-lg lg:text-xl text-neutral-600 dark:text-neutral-300 max-w-87.5 md:max-w-lg mx-auto mb-6 md:mb-5">
            Library komponen UI buatan lokal yang menyatukan visi desainer dan
            developer dalam satu sistem desain.
          </p>
          <div className="flex flex-row items-center justify-center gap-4 w-75 md:w-full mb-16 mx-auto">
            <Link to="/design" className="w-full sm:w-auto">
              <button className="px-4 py-2.5 text-base rounded-md bg-(--color-primary) hover:opacity-90 text-white w-full sm:w-auto shadow-lg shadow-(--color-primary)/20 transition-all hover:shadow-(--color-primary)/40 cursor-pointer flex items-center justify-center gap-2">
                <Palette className="size-4" />
                Panduan Desainer
              </button>
            </Link>
            <Link to="/docs" className="w-full sm:w-auto">
              <button className="px-4 py-2.5 text-base rounded-md w-full sm:w-auto border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer flex items-center justify-center gap-2">
                <Terminal className="size-4" />
                Baca Dokumentasi
              </button>
            </Link>
          </div>
        </AnimatedGroup>

        {/* Hero Images Section */}
        <div className="relative w-full mx-auto z-20">
          <div className="relative">
            {/* Desktop Screenshot */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="relative w-full rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl dark:bg-gray-900"
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=680&fit=crop&q=80"
                alt="Dashboard web application"
                className="object-cover object-left w-full h-auto"
                loading="eager"
              />
            </motion.div>

            {/* iPhone Frame */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-55%] md:translate-y-[-45%] lg:translate-y-[-55%] w-37.5 sm:w-55 md:w-65 lg:w-320px xl:w-95">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              >
                <Iphone15Pro
                  src="https://images.unsplash.com/photo-1616469829167-0bd76a80c913?w=390&h=844&fit=crop&q=80"
                  alt="Mobile app interface"
                  className="w-full h-60 md:h-105 lg:h-120 xl:h-135"
                />
              </motion.div>
            </div>
          </div>

          {/* Fade Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="absolute -bottom-2 left-0 right-0 h-50 md:h-60 lg:h-80 bg-linear-to-t from-white via-white/80 dark:from-black dark:via-black/80 to-transparent z-30 pointer-events-none rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
