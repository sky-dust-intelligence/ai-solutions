import React, { useState } from "react";
import Image from "next/image";

const APIkeyModal = ({ handleModal }) => {
  const [key, setKey] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("apiKey", key);
    handleModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-dark opacity-90 -z-1"></div>
      <div className="bg-dark-6 p-5 lg:p-12.5 rounded-lg shadow-md w-10/12 md:w-[608px] modal-content relative text-center border-[1px] border-white/10">
        <button
          className="absolute top-2 right-2 bg-white/5 p-3 rounded-full hover:bg-white/10 duration-500 "
          onClick={handleModal}
        >
          <Image
            src={"/images/ai-tools/icon-4.svg"}
            width={13}
            height={13}
            alt="close icon"
          />
        </button>
        <div>
          <h2 className=" text-2xl md:text-3xl text-white">
            Enter your OpenAI API Key
          </h2>
          <p className="pt-4 pb-8">
            To access the capabilities of AI Tools Template, a valid OpenAI API
            Key is required.
          </p>

          <form onSubmit={handleSubmit} className="flex justify-between gap-3">
            <input
              onChange={(e) => setKey(e.target.value)}
              className="rounded-lg border border-white/[0.12] bg-dark-6 focus:border-purple w-full py-3 px-6 outline-none text-white"
              type="text"
              placeholder="API-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
              required
            />
            <button className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80 mt-2 lg:mt-0">
              Save
            </button>
          </form>
          <a
            href="https://openai.com/blog/openai-api"
            target="_blank"
            className="pt-6 inline-block border-b-[1px] hover:text-white duration-300"
          >
            Get your API key from OpenAI
          </a>
        </div>
      </div>
    </div>
  );
};

export default APIkeyModal;
