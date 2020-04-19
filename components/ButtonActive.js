import { useRouter } from 'next/router'
import Button from '@material-ui/core/Button'

function ButtonActive(props) {
  const router = useRouter()
  const style = {
    backgroundColor: router.pathname === props.href ? '#464646' : 'none',
    height: '35px',
    margin: '7px 5px',
    borderRadius: '5px',
  }

  const handleClick = e => {
    e.preventDefault()
    router.push(props.href)
  }

  return (
    <Button href={props.href} className={props.className} color={props.color} onClick={handleClick} style={style}>
      {props.children}
    </Button>
  )
}

export default ButtonActive