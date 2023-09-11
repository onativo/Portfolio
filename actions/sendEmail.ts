"use server";
import { Resend } from "resend";
import { validateString } from "@/lib/utils";

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

  try {
    resend.emails.send({
      from: "Contato Portfolio <onboarding@resend.dev>",
      to: "onativo@outlook.com",
      subject: "Nova mensagem de contato",
      text: `${senderName}\n${senderEmail}\n\n${senderMessage}`,
      reply_to: senderEmail as string,
    });
  } catch (error: unknown) {
    return {
      error: error.message,
    };
  }
};
