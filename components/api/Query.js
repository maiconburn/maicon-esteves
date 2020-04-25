import React from "react" 
import { useQuery } from "@apollo/react-hooks"

const Query = ({ children, query, id }) => {  
  console.log('Recebeu',id)
  const { data, loading, error } = useQuery(query, {
    variables: { id: id }
  })

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>
  console.log('Return Data',data)
  return children({ data })
};

export default Query