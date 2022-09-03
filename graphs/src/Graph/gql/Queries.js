import { gql } from "@apollo/client";


export const LOAD_POSTS= gql`
  query {
    allPosts(count: 5) {
    id
    title
    body
    published
    createdAt
    author {
      id
      firstName
      lastName
      avatar
    }
  }
}
`;