import { gql } from "graphql-request";

export const getKeywordQuery = {
  query: gql`
    {
      domainKeywords {
        keyword_id
        keyword_name
      }
    }
  `,
  key: "testQueryName",
};
