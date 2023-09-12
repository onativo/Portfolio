"use server";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactForm from "@/email/contactForm";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const senderName = formData.get("senderName");
  const senderMessage = formData.get("senderMessage");

  console.log(senderEmail);

  if (!validateString(senderEmail, 300)) {
    return {
      error: "E-mail inválido",
    };
  }
  if (!validateString(senderName, 300)) {
    return {
      error: "Nome inválido",
    };
  }
  if (!validateString(senderMessage, 3000)) {
    return {
      error: "Mensagem inválida",
    };
  }

  let data;
  try {
    resend.emails.send({
      from: "Contato Portfolio <onboarding@resend.dev>",
      to: "onativo@outlook.com",
      subject: "Nova mensagem de contato",
      reply_to: senderEmail as string,
      react: React.createElement(ContactForm, {
        senderMessage: senderMessage as string,
        senderEmail: senderEmail as string,
        senderName: senderName as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data
  }
};
