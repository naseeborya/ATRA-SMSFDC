"use client";
import { useRouter } from "next/navigation";
import React, { useActionState, useState } from "react";
import { Users } from "@/app/lib/constants/placeholder-data";
import Image from "next/image";
import { Input } from "@nextui-org/input";
import { AiOutlineEye } from "react-icons/ai";
import { useFormState } from "react-dom";
import { LoginServerAction } from "@/app/lib/forms/login-server-action";
import { GlobalBox } from "@/app/lib/constants/global-classes";

const LoginForm = (e) => {
  const [state, dispatch] = useActionState(LoginServerAction, undefined);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  function HandleAuthentication(e) {
    e.preventDefault();

    const found = Users.find(
      (u) => u.email === email && u.password === password
    );

    if (found) {
      if (found.role === "admin") {
        router.push("/admin");
      } else if (found.role === "client") {
        router.push("/client");
      }
    } else {
      alert("Invalid credentials, please try again later");
    }
  }

  // className={`${GlobalBox} w-full max-w-lg rounded-[16px]  p-12  `}

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className={`${GlobalBox} p-8 flex flex-col  items-center `}>
        <div className="flex justify-center  mb-6 bg-brand-gray items-center rounded-full w-20 h-20 p-5 ">
          <Image src="/images/atra.png" alt="Logo" width={50} height={50} />
        </div>

        <h2 className="text-3xl font-semibold text-center text-brand-primary">
          Welcome to ATRA
        </h2>
        <p className="text-center text-brand-primary mt-2 text-base">
          Please enter your username and password
        </p>
        <form action={dispatch} className=" w-full">
          <div className=" flex flex-col gap-4 my-8">
            <Input
              id="email"
              name="email"
              label="Email"
              type="email"
              isRequired
            />
            <Input
              label="password"
              name="password"
              id="password"
              type="password"
              isRequired
              endContent={
                <AiOutlineEye className="text-2xl text-default-400 pointer-events-none flex-shrink-0"></AiOutlineEye>
              }
            />
          </div>

          <button
            type="submit"
            className="w-full bg-brand-secondary text-white py-4 px-4 rounded-xl hover:bg-brand-primary transition"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
