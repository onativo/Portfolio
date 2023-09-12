import React from "react";
import { ContactFormProps } from "@/lib/types";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export default function ContactForm({
  senderMessage,
  senderEmail,
  senderName
}: ContactFormProps) {
  return(
    <Html>
      <Preview>Portfolio: nova mensagem</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border_black_10 my-10 py-4 rounded-md">
              <Heading className="leading-tight text-normal">
                Alguém enviou uma mensagem através do formulário do portfolio.
              </Heading>
              <Text>{senderMessage}</Text>
              <Hr/>
              <Text>Remetente: {senderName}</Text>
              <Text>E-mail: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
