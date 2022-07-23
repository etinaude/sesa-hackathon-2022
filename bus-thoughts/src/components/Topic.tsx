import React from "react";
const tableTopicGenerator = require("table-topic-generator");
const tableTopic = tableTopicGenerator(1, "Summer", "Vacation");

const array = tableTopic.Table_Topics;
export const Topic = () => {
  //get today date
  let date = new Date().toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  //   console.log(tableTopic);
  return (
    <div>
      <div className="pl-4">{date}</div>
      <div className="border-red-900 p-4 ">{array[0]}</div>
    </div>
  );
};
