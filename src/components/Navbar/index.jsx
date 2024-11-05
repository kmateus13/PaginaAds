"use client"
import style from "./style.module.css"
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {
  return (
    <>
      <Navbar fixed="top" key='md' expand='md' className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand href="/home" className={style.logo}>
            <Image src="/logoUnifacisa.png" width={0} height={0} layout='responsive' className={style.logoImg}  alt="Logo Unifacisa"/>
            <div className="vr mx-2"></div>
            <Image src="/logoADS.svg" width={0} height={0} layout='responsive'  className={style.logoImg} alt="Logo ADS"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-'md'`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-'md'`}
            aria-labelledby={`offcanvasNavbarLabel-expand-'md'`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-'md'`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Turmas</Nav.Link>
                <Nav.Link href="#action2">Professores</Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-'md'`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;