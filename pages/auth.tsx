import Input from "@/components/Input";
import { useCallback, useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/img/bg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/img/tls.png" alt="logo" className="h-20" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Se connecter" : "Se registrer"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id="name"
                  type="text"
                  label="Identifiant"
                  value={name}
                  onChange={(e: any) => setName(e.target.value)}
                />
              )}

              <Input
                label="Email" /*email dans le input en gris */
                type="email"
                id="email"
                onChange={(e: any) => setEmail(e.target.value)}
                value={email}
              />
              <Input
                label="Mot de passe" /*email dans le input en gris */
                type="password"
                id="password"
                onChange={(e: any) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button className="bg-yellow-600 py-3 text-white rounded-md w-full mt-10 hover:bg-yellow-700 transition">
              Se connecter
            </button>
            <p className="text-neutral-500 mt-12">
              Prèmiere fois sur TLS.COM ?
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                Créer un compte
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
