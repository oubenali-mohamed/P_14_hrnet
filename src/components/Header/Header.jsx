import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav'

function Header() {
  return (
    <div className='mobileHeader'>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/employee" eventKey="link-1">
            Employés
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}
export default Header
