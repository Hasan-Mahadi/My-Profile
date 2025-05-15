"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+880) 01766-627499",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "hasanmahadiius22@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Banani, Dhaka, Bangladesh.",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      toast.success(
        <div>
          <p className="font-semibold">Thanks For Your Message!</p>
          <p className="text-sm text-muted-foreground">
            Md.Hasan reply will be given very soon.{" "}
          </p>
        </div>
      );
    } else {
      toast.error(
        <div>
          <p className="font-semibold">Error!</p>
          <p className="text-sm text-muted-foreground">
            Failed to send message.
          </p>
        </div>
      );
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] ">
          {/* form */}
          <div className="xl:h-[54%]  order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl "
            >
              <h3
                className="text-4xl text-accent"
                data-aos="flip-right"
                data-aos-delay="100"
                data-aos-duration="800"
              >
                Let's work together
              </h3>
              <p className="text-white/60" data-aos="flip-left"
data-aos-delay="100"
data-aos-duration="800">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
                inventore animi neque, a repellat ratione beatae ipsa tempore
                distinctio obcaecati corrupti atque quae, adipisci mollitia est
                nihil labore praesentium in!
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2  gap-6 ">
                <Input
                  name="firstname"
                  placeholder="FirstName"
                  onChange={handleChange}
                />
                <Input
                  name="lastname"
                  placeholder="LastName"
                  onChange={handleChange}
                />
                <Input
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
                <Input
                  name="phone"
                  placeholder="Phone"
                  onChange={handleChange}
                />
              </div>

              {/* select */}

              <Select
                onValueChange={(val) =>
                  setFormData({ ...formData, service: val })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Full Stack Developer">
                    Full Stack Developer
                  </SelectItem>
                  <SelectItem value="MERN Stack Developer">
                    MERN Stack Developer
                  </SelectItem>
                  <SelectItem value="Web Developer">Web Developer</SelectItem>
                  <SelectItem value="Software Engineer">
                    Software Engineer
                  </SelectItem>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[200px] "
                name="message"
                placeholder="Type your message here"
                onChange={handleChange}
              />

              <Button className="max-w-40 " size="md" type="submit">
                Send message
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col  gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px]  xl:w-[72px] xl:h-[72px] bg-[#27272c]  text-accent rounded-md flex items-center justify-center  ">
                      <div className="text-[28px]  ">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
