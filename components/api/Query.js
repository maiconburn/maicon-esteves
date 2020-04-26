import React from "react" 
import { useQuery } from "@apollo/react-hooks"
import CircularProgress from '@material-ui/core/CircularProgress'
import css from '../../src/css/components/Query.module.scss'

const styles = css

const Query = ({ children, query, id }) => {  
  console.log('Recebeu',id)
  const { data, loading, error } = useQuery(query, {
    variables: { id: id }
  })

  if (loading) return <CircularProgress className={styles.progress} size={80} />
  if (error) return <p>Error: {JSON.stringify(error)}</p>
  console.log('Return Data',data)
  return children({ data })
};

export default Query