import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

import { FormData } from "@/types/formContact";

const emailHost = process.env.EMAIL_HOST;
const emailUser = process.env.EMAIL_USER;
const emailPassword = process.env.EMAIL_PASSWORD;
const emailPort = process.env.EMAIL_PORT;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Método não permitido
  }

  try {
    const { name, email, phone, subject, message } = req.body as FormData;

    // Configuração do nodemailer
    const transporter = nodemailer.createTransport({
      host: emailHost,
      port: emailPort ? parseInt(emailPort) : 587,
      secure: false, // true para 465, false para outros portos
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    // Corpo do e-mail
    const mailOptions = {
      from: email ? email : "",
      to: emailUser,
      subject: `Formulário do Site CS Design | ${subject}`,
      text: `
        Nome: ${name}\n 
        Telefone: ${phone}\n
        Mensagem: ${message}`,
    };

    // Envio do e-mail
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    res.status(500).json({ success: false, error: "Erro ao enviar e-mail" });
  }
}
