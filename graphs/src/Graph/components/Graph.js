import React from "react";
import { useQuery } from "@apollo/client";
import { LOAD_POSTS } from "../gql/Queries";
import { monthsNames } from "./monthsNames";

function Graph() {
  const { loading, data } = useQuery(LOAD_POSTS);

  if (loading) return <div></div>;

  const filterPosts = data.allPosts.filter((item) => {
    return new Date(parseInt(item.createdAt)).getFullYear() === 2019;
  });

  const rawMonthData = filterPosts.reduce((acc, el) => {
    acc[new Date(parseInt(el.createdAt)).getMonth()]++;
    return acc;
  }, new Array(12).fill(0));

  const statData = rawMonthData.map((el, idx) => {
    return {
      month: monthsNames[idx],
      nr: el,
    };
  });

  return <div></div>;
}

export default Graph;
