import { useRouter } from 'next/router'
import Button from '@material-ui/core/Button'

function ButtonActive(props) {
  const router = useRouter()
  const style = {
    background: router.pathname === props.href ? 'linear-gradient(135deg, #6600aa 0%, #55025a 100%)' : 'none',
    height: '35px',
    margin: '7px 5px',
    borderRadius: '5px',
  }

  const handleClick = e => {
    e.preventDefault()
    router.push(props.href)
  }

  return (
    <Button href={props.href} className={props.className} target={props.target} color={props.color} onClick={handleClick} style={style}>
      {props.children}
    </Button>
  )
}

export default ButtonActive