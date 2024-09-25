import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function ConnectButton() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/connect")
  }
  
  return (
    <Button
      className="btn-connect" 
      onClick={handleClick} type="submit"
    >
      Connect
    </Button>
  )
}