import { useCreateSubscriberMutation } from "../graphql/generated";
import { useCallback, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

interface InputEvent {
  target: {
    name: string;
    value: string;
  };
}

export function Subscribe() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "" });
  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  const handleChange = useCallback(
    (event: InputEvent) =>
      setForm((_form) => ({
        ..._form,
        [event.target.name]: event.target.value,
      })),
    [setForm]
  );

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      await createSubscriber({ variables: { ...form } });

      navigate("/event");
    },
    [form]
  );

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex flex-col lg:flex-row items-center justify-between mt-20 mx-auto">
        <div className="max-w-screen-sm px-10">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div className="p-8 mt-16 lg:mt-0 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
            <input
              name="name"
              autoFocus
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={handleChange}
            />
            <input
              name="email"
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={handleChange}
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img
        src="/src/assets/code-mockup.png"
        className="mt-18"
        alt="code-mockup"
      />
    </div>
  );
}
