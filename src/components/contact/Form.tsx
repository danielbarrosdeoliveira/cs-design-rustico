"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FormData } from "@/types/formContact";

export const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("/api/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar formulário");
      }

      setSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Erro:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAlertClose = () => {
    setSuccess(false);
  };

  return (
    <form
      method="POST"
      className="container mx-auto p-4 rounded-md"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-600">
          Nome:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={formData.name}
          onChange={handleInputChange}
          className="w-full border border-gray-500 mt-1 p-2 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-600">
          Telefone:
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          required
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full border border-gray-500 mt-1 p-2 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600">
          E-mail:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={formData.email}
          onChange={handleInputChange}
          className="w-full border border-gray-500 mt-1 p-2 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-600">
          Assunto:
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          value={formData.subject}
          onChange={handleInputChange}
          className="w-full border border-gray-500 mt-1 p-2 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-600">
          Mensagem:
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleInputChange}
          className="w-full border border-gray-500 mt-1 p-2 rounded-md"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-[#d18448] hover:bg-zinc-800 transition-all text-white p-2 rounded-md"
        disabled={loading}
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>

      {success && (
        <div className="mt-2 p-2 bg-green-100 border-green-400 text-green-700 rounded">
          Formulário enviado com sucesso!
          <button className="float-right" onClick={handleAlertClose}>
            Fechar
          </button>
        </div>
      )}
    </form>
  );
};
