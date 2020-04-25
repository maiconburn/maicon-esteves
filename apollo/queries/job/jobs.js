import gql from "graphql-tag"

const JOBS_QUERY = gql`  
  query Jobs {
    jobs {
      id
      type
      title
      client
      description
      skills
      images{url}
    }
  }
`;

export default JOBS_QUERY