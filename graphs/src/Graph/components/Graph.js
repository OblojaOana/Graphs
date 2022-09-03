import React from "react";
import { useQuery } from "@apollo/client";
import { LOAD_POSTS } from "../gql/Queries";


function Graph() {
  const { error, loading, data } = useQuery(LOAD_POSTS);
   
  
  return (
    <div>
      {/* {" "}
      {users.map((val) => {
        return <h1> {val.firstName}</h1>;
      })} */}
    </div>
  );
}

export default Graph;