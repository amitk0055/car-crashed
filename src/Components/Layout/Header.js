import { navigate } from '@reach/router'
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'

const Header =()=>{
    return (<>
    <Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand className="pointer" onClick={()=>navigate('/')}>Cars</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </>)
}

export default Header