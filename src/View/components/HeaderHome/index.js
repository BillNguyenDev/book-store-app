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
    InputGroupButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
import { Link } from 'react-router-dom';



const HeaderHome = props => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

    console.log(props);
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
                <Nav className="pull-right">
                    <NavItem>
                        <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
                            <DropdownToggle color="info" caret>{props.users}</DropdownToggle>
                            <DropdownMenu color="info">
                                <DropdownItem heade color="info" block onClick={logout}> Đăng Xuất </DropdownItem>
                            </DropdownMenu>
                        </InputGroupButtonDropdown>
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