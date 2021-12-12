import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import "./MyNavBarTop.css";

const MyNavBarTop = () => {
    return (
      <>  

  <Navbar collapseOnSelect fixed='top' expand="sm" className="color-nav" variant="dark">
  <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
              <Navbar.Collapse id="responsive-navbar-nav">
    <Navbar.Brand className="nav-item" href="/">Kanahaiya Kumawat</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link className="nav-item" href="/projects">Projects</Nav.Link>
      <Nav.Link className="nav-item" href="/java">Java</Nav.Link>
        <Nav.Link className="nav-item" href="/post">Post</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button className="nav-item" variant="outline-light">Search</Button>
    </Form>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  
  </>
  
     )
}

export default MyNavBarTop;