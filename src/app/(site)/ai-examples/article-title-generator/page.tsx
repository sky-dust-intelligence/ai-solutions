"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import axios from "axios";
import PreviewGeneratedText from "@/components/AiTools/PreviewGeneratedText";
import Options from "@/components/AiTools/Options";

const optionData = [1, 2, 3, 4, 5];

const ArticleTitleGeneratorPage = () => {
  const [generatedContent, setGeneratedContent] = useState("");
  const [data, setData] = useState({
    numberOfWord: "",
    articleTopic: "",
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
          "You will be provided with the article topic and number of word needed, and your task is to generate multiple article titles.",
      },
      {
        role: "user",
        content: `Number of words: ${data.numberOfWord} \n Article topic: ${data.articleTopic}`,
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

      const cleanedResponse = response.data.replace(/"/g, "");
      setGeneratedContent(cleanedResponse);
    } catch (error) {
      setGeneratedContent("Please Add the API Key!");
      console.error("Error:", error.message);
    }

    setData({
      numberOfWord: "",
      articleTopic: "",
    });
  };

  return (
    <>
      <title>
        Article Title Generator | AI Tool - Next.js Template for AI Tools
      </title>
      <meta name="description" content="This is AI Examples page for AI Tool" />
      <Breadcrumb pageTitle="Article Title Generator" />

      <section className="pb-17.5 lg:pb-22.5 xl:pb-27.5">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 p-8 bg-dark-8 gradient-box rounded-lg">
            <h2 className="text-white font-bold text-2xl pb-2">Title Topic</h2>
            <p className="pb-6">What your title will be about?</p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="articleTopic" className="pb-4">
                  Topic
                </label>
                <input
                  onChange={handleChange}
                  value={data.articleTopic}
                  name="articleTopic"
                  type="text"
                  className="bg-dark-7 border border-white/[0.12] focus:border-purple outline-none rounded-lg py-3 px-5 text-white"
                  placeholder="Type article topic here"
                  required
                />
              </div>

              <Options
                values={optionData}
                title={"Select the Number of Words"}
                name={"numberOfWord"}
                handleChange={handleChange}
                selected={data.numberOfWord}
              />

              <button className="hero-button-gradient w-full text-center rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80 mt-5 ">
                Generate
              </button>
            </form>
          </div>
          <PreviewGeneratedText
            generatedContent={generatedContent}
            height={262}
          />{" "}
        </div>
      </section>
    </>
  );
};

export default ArticleTitleGeneratorPage;
