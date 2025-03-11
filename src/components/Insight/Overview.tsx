"use client";

import React, { useState, useEffect } from "react";
import { Header3, Paragraph1, Paragraph2 } from "../Text";
import AOS from "aos";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import SubscribeForm from "./SubscribeForm";

function Insight() {
  const [loading, setLoading] = useState(false);
  const [insightBlogs, setInsightBlogs] = useState<any[]>([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    const fetchInsights = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogsData = querySnapshot.docs
          .map((doc) => {
            const data = doc.data();
            return {
              id: doc.id,
              ...data,
              createdAt: data.createdAt?.toDate() || new Date(),
            };
          })
          // @ts-ignore
          .filter((blog) => blog.insights === true) // Ensure insights exists and is a boolean
          .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

        setInsightBlogs(blogsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching insights:", error);
      }
    };

    fetchInsights();
  }, []);

  return (
    <div
      className="relative text-p_green bg-cover"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dipwsq5cg/image/upload/v1739707061/Rectangle_9521_mgqmtd.svg')",
      }}
    >
      {loading && (
        <div className="absolute hidden inset-0 flex- items-center justify-center bg-white bg-opacity-50 z-50">
          {/* <div className="animate-spin rounded-full h-[20px] w-[20px] border-t-2 border-b-2 border-primary"></div> */}
        </div>
      )}
      <div className="container1 min-h-screen py-[154px] xl:py-[200px]  text-p_black">
        <div>
          <div>
            <SubscribeForm />

            <Header3 className="mb-8 text-p_green">Latest Insights</Header3>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 xl:gap-4">
              {insightBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white shadow-md rounded-[10px] p-[20px] border border-gray-200 "
                >
                  <img
                    src={blog.blogImageURL1.replace(
                      "/upload/",
                      "/upload/w_500,f_auto/"
                    )}
                    alt={blog.title}
                    className="w-full h-[200px] bg-gray-300 rounded-[10px]"
                  />
                  <Paragraph1 className="text-lg uppercase font-semibold mt-4 text-p_green">
                    {blog.title}
                  </Paragraph1>
                  <Link
                    href={`${blog.description}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-4 py-2 border border-secondary flex w-fit gray-900 rounded-md hover:bg-black gray-900 hover:text-white transition"
                  >
                    <Paragraph2>Learn more</Paragraph2>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insight;
