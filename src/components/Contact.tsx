import { FormEvent } from "react";
import { Form } from "./contact/Form";
import { SocialMedia } from "./contact/SocialMedia";

const handleFormSubmit = async (event: FormEvent) => {
  event.preventDefault();
};

export const Contact = () => {
  return (
    <section className="mt-16 py-8 bg-zinc-300">
      <h1 className="py-8 text-center text-3xl uppercase font-bold">Contato</h1>
      <div className="flex container mx-auto flex-col md:flex-row">
        <div className="w-full order-2 md:order-1">
          <Form />
        </div>
        <div className="w-full order-1 md:order-2">
          <SocialMedia />
        </div>
      </div>
    </section>
  );
};
