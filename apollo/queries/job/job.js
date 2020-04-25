import gql from "graphql-tag"

const JOB_QUERY = gql`  
  query Jobs($id: ID!) {
    job(id: $id) {
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

export default JOB_QUERY