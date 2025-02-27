"use client";

import React, { useState, useEffect } from "react";
import HeroSection from "./sections/HeroSection";
import Section2 from "./sections/Section2";
import Section2B from "./sections/Section2B";
import Section3 from "./sections/Section3";
import Section6 from "./sections/Section6";
import { db } from "@/lib/firebase"; // Firestore setup
import { collection, getDocs } from "firebase/firestore"; // Firestore methods
import Section5 from "./sections/Section5";
import Section4 from "./sections/Section4";

interface Blog {
  id: string;
  title: string;
  content: string;
  createdAt: any;
  resources: boolean;
}

function Overview() {
  const [latestBlogs, setLatestBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogsData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            createdAt: data.createdAt?.toDate?.() || new Date(),
          } as Blog;
        });

        // Filter blogs with resources = true and sort by latest
        const filteredBlogs = blogsData
          .filter((blog) => blog.resources === true)
          .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
          .slice(0, 3);

        setLatestBlogs(filteredBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      <HeroSection />
      <Section2 />
      <Section2B />
      <Section3 />
      <Section4 latestBlogs={latestBlogs} />
      <Section5 />
      <Section6 />
    </div>
  );
}

export default Overview;
