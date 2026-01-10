import Title from "@/components/Title";
import React from "react";

const TutorialsPage = async ({ params }) => {
  const { slug } = await params;
  const [technology, topic, , page_no, subject] = slug || [];
  return (
    <div className="space-y-5 text-lg">
      <Title>This is tutorials of {technology}</Title>
      <h2>Topic is: {topic}</h2>
      <hr />
      <div className="flex justify-between">
        <h2>Subject: {subject}</h2>
        <p>Page no: {page_no}</p>
      </div>
    </div>
  );
};

export default TutorialsPage;
