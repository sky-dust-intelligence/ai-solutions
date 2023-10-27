"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import AiToolExample from "@/components/AiTools/AiToolExample";
import APIkeyModal from "@/components/AiTools/APIkeyModal";

const AiToolPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isKeyAvailable, setIsKeyAvailable] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleRemoveKey = () => {
    localStorage.removeItem("apiKey");
    setIsKeyAvailable(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".modal-content")) {
        handleModal();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    const key = localStorage.getItem("apiKey");
    if (key) {
      setIsKeyAvailable(true);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, handleModal]);

  return (
    <>
      <title>OpenAI Examples | AI Tool - Next.js Template for AI Tools</title>
      <meta name="description" content="This is AI Examples page for AI Tool" />

      <Breadcrumb pageTitle="OpenAI Examples" />

      <section className="pt-3 pb-25">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 z-10">
          <div className="bg-white/[0.05] relative aiExamples-border-gredient rounded-lg lg:py-2 lg:px-6 p-4 flex justify-center md:justify-between flex-col lg:flex-row items-center">
            <p className="text-center md:text-left">
              <Image
                src={"/images/ai-tools/icon-1.svg"}
                width={20}
                height={20}
                alt="icon"
                className="inline-block mr-2"
              />
              Note: You need to add an OpenAI API key to try example demos, on production you can add it on .env</p>
            <button
              onClick={isKeyAvailable ? handleRemoveKey : handleModal}
              className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80 mt-2 lg:mt-0"
            >
              {isKeyAvailable ? "Remove API Key" : "Set API Key"}
            </button>
          </div>

          <AiToolExample />
        </div>

        {isOpen && <APIkeyModal handleModal={handleModal} />}
      </section>
    </>
  );
};

export default AiToolPage;
