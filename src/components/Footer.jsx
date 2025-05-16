"use client";

import Link from "next/link";
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaCode,
  FaTwitter,
  FaDiscord,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import NewsletterForm from "./NewsletterSubmit";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <footer className="bg-primary border-t border-accent/20 text-white mt-20 pt-10 pb-10 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-10 left-0 right-0 h-20 bg-gradient-to-b from-accent/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30"></div>

      <div className="container mx-auto relative z-10">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <FaCode className="text-primary text-lg" />
              </div>
              <h2
                className="text-2xl font-bold bg-clip-text text-transparent 
               bg-gradient-to-r from-accent to-white"
              >
                Md. Hasan
              </h2>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Full Stack Developer specializing in building scalable web
              applications with clean code and modern architectures.
            </p>
            <div className="flex gap-2">
              <span className="text-xs px-3 py-1 rounded-full border border-accent text-accent">
                MERN Stack
              </span>
              <span className="text-xs px-3 py-1 rounded-full border border-accent text-accent">
                TypeScript
              </span>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-5 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-accent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Resume", path: "/resume" },
                { name: "Projects", path: "/projects" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="hover:text-accent transition-all flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-5 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-accent">
              Contact Me
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:hasanmahadiius22@gmail.com"
                className="flex items-center  gap-3 hover:text-accent transition-all"
              >
                <div className="w-8 h-8  rounded-full bg-accent/10 flex items-center justify-center">
                  <FaPhoneAlt className="text-accent" />
                 
                </div>
                (+880) 1766-627499
              </a>

              <a
                href="mailto:hasanmahadiius22@gmail.com"
                className="flex items-center gap-3 hover:text-accent transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <FaEnvelope className="text-accent" />
                </div>
                hasanmahadiius22@gmail.com
              </a>

              <div className="flex gap-4 mt-4">
                {[
                  {
                    icon: FaLinkedinIn,
                    url: "https://www.linkedin.com/in/md-hasan-570b62334",
                  },
                  { icon: FaGithub, url: "https://github.com/Hasan-Mahadi" },
                  {
                    icon: FaDiscord,
                    url: "https://discord.com/users/1358392781080494101",
                  },
                  { icon: FaTwitter, url: "https://x.com/HASANMA58525411" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center border border-accent rounded-full hover:bg-accent hover:text-primary transition-all hover:scale-110"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
         
         
         <NewsletterForm/>
         
    
        </div>

        {/* Copyright */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.4 }}
          className="pt-8 mt-8 border-t border-white/10 text-center text-white/50 text-sm"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {currentYear} Md. Hasan. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-accent transition-all">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent transition-all">
                Terms of Service
              </Link>
            </div>
            <p className="flex items-center justify-center gap-1">
              <span>Made with</span>
              <span className="text-accent">❤️</span>
              <span>in Bangladesh</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
