import { gql } from "@apollo/client";


export const LOAD_POSTS= gql`
  query {
    allPosts(count: 50) {
    id
    createdAt
  }
}
`;