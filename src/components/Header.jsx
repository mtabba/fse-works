import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
 
export default function Header() {
    return (
        <header> 
            <Navbar expand="lg"
                    bg="warning">
                <Container>
                    <Navbar.Brand href="#home">
                        GeeksforGeeks
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#c++">Services</Nav.Link>
                            <Nav.Link href="#android">Projects</Nav.Link>
                            <Nav.Link href="#spring">About Us</Nav.Link>
                            <Nav.Link href="#python">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
// import companyLogo from '../assets/companylogo.jpg'; 

// const Header = () => {
// const headerItem= ['HOME', 'SERVICES', 'PROJECTS', 'ABOUT US', 'CONTACT US']

//   return (
//     <header className=" text-neutral-50 h-32">
//       <div className="container mx-auto flex justify-between items-center pt-6">
//       <div className="headerName flex items-center">
//         <img src={companyLogo} alt="Company Logo" className="h-16 mr-10" /> 
//         <span className="text-left">MIND TECH SERVICES
//         <div className="text-left">Field Services and Consultation </div>
//         </span> 
//       </div>
//         <nav>
//           <ul className="flex space-x-10">
//             {headerItem.map((item, index)=> 
//             <li className="headerList list-none" key={index}> {item}</li>
//             )}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );

// }

// export default Header