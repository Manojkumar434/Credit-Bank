import {Container, Nav, Navbar} from 'react-bootstrap'
export const Menus=()=>{
    return(
        <Navbar bg="success" expand="lg" >
            <Container fluid>
                <Navbar.Brand href="#home">
                    Example Router
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="sample" />
                <Navbar.Collapse id="sample">
                <Nav className="ms-auto">
                    <Nav.Link active href="#home">Component One</Nav.Link>
                    <Nav.Link active href="#link">Component Two</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )   
}