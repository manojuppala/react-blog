import { gql } from "@apollo/client";

export const GET_POSTS_QUERY = gql`
  query getPosts {
    home(order_by: { id: asc }) {
      title
      id
      date
      content
    }
  }
`;
