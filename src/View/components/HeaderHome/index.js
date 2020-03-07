import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    NavLink,
    Button
} from "reactstrap";
import { Link } from 'react-router-dom';



const HeaderHome = props => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Book Store</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink >
                            <Link to="/">Trang chủ</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink >
                            <Link to="/about"> Giới Thiệu</Link>
                        </NavLink>
                    </NavItem>

                    <UncontrolledDropdown nav inNavbar />
                </Nav>
                <Nav>
                    <NavItem className="pull-right">
                        <Button color="primary" block onClick={logout}
                        > Đăng Xuất </Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}


function logout() {
    localStorage.removeItem('token');
    window.location.reload();
    console.log('xong');
}
export default HeaderHome;