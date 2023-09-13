"use client";

import React from "react";
import SectionHeading from "./section_heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submitBtn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView({ sectionName: "Contato" });

  return (
    <motion.section
      id="contato"
      ref={ref}
      className="mb-28 mt-20 scroll-mt-20 sm:mb-40 sm:mt-38 w-[min(100%, 38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Fale Comigo!!</SectionHeading>
      <p className="text-slate-700 -mt-6 dark:text-slate-100">
        Você pode me mandar um e-mail para{" "}
        <a href="mailto:onativo@outlook.com" className="underline">
          onativo@outlook.com
        </a>{" "}
        ou pelo formulário abaixo.
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error;
            return;
          }
          else{
            toast.success("Email enviado com sucesso!");
          }
        }}
      >
        <input
          type="email"
          name="senderEmail"
          placeholder="Seu E-mail"
          className="h-14 rounded-lg border_black_10 px-4 first-letter:uppercase dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          required
          maxLength={300}
        />
        <input
          type="text"
          name="senderName"
          placeholder="Seu Nome"
          className="h-14 mt-4 rounded-lg border_black_10 px-4 first-letter:uppercase dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          required
          maxLength={300}
        />
        <textarea
          placeholder="Mensagem"
          name="senderMessage"
          className="h-52 my-3 rounded-lg border_black_10 p-4 first-letter:uppercase dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          required
          maxLength={3000}
        />
        <SubmitBtn/>
      </form>
    </motion.section>
  );
}
