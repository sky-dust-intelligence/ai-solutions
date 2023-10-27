"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import axios from "axios";
import PreviewGeneratedText from "@/components/AiTools/PreviewGeneratedText";

const ProductNameGeneratorPage = () => {
  const [generatedContent, setGeneratedContent] = useState("");
  const [data, setData] = useState({
    description: "",
    seedWords: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGeneratedContent("Loading....");

    // the prompt
    const prompt = [
      {
        role: "system",
        content:
          "You will be provided with a product description and seed words, and your task is to generate product names. \n",
      },
      {
        role: "user",
        content: `Product description: ${data.description} \n Business seed words: ${data.seedWords}`,
      },
    ];

    //for the demo
    const apiKey = localStorage.getItem("apiKey");

    try {
      const response = await axios.post(
        "/api/ai-examples",
        { prompt, apiKey },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setGeneratedContent(response.data);
    } catch (error) {
      setGeneratedContent("Please Add the API Key!");
      console.error("Error:", error.message);
    }

    setData({
      description: "",
      seedWords: "",
    });
  };

  return (
    <>
      <title>
        Proudct Name Generator | AI Tool - Next.js Template for AI Tools
      </title>
      <meta name="description" content="This is AI Examples page for AI Tool" />
      <Breadcrumb pageTitle="Product Name Generator" />

      <section className="pb-17.5 lg:pb-22.5 xl:pb-27.5">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 p-8 bg-dark-8 gradient-box rounded-lg">
            <h2 className="text-white font-bold text-2xl pb-2">
              Product Topic
            </h2>
            <p className="pb-6">What your product name will be?</p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="description" className="pb-4">
                  Description
                </label>
                <input
                  onChange={handleChange}
                  value={data.description}
                  name="description"
                  type="text"
                  className="bg-dark-7 border border-white/[0.12] focus:border-purple outline-none rounded-lg py-3 px-5 text-white"
                  placeholder="Type your business keyword"
                  required
                />
              </div>

              <div className="flex flex-col pt-5">
                <label htmlFor="seedWords" className="pb-4">
                  Seed Words
                </label>
                <input
                  onChange={handleChange}
                  value={data.seedWords}
                  name="seedWords"
                  type="text"
                  className="bg-dark-7 border border-white/[0.12] focus:border-purple outline-none rounded-lg py-3 pl-5 text-opacity-10"
                  placeholder="Type your Seed Words"
                />
              </div>

              <button
                type="submit"
                className="hero-button-gradient w-full text-center rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80 mt-5 "
              >
                Generate
              </button>
            </form>
          </div>

          <PreviewGeneratedText
            generatedContent={generatedContent}
            height={262}
          />
        </div>
      </section>
    </>
  );
};

export default ProductNameGeneratorPage;
