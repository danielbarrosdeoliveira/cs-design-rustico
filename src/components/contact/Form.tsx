export const Form = () => {
  return (
    <form method="POST" className="container mx-auto p-4 rounded-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-600">
          Nome:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
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
          className="w-full border border-gray-500 mt-1 p-2 rounded-md"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-[#d18448] hover:bg-zinc-800 transition-all text-white p-2 rounded-md"
      >
        Enviar
      </button>
    </form>
  );
};
