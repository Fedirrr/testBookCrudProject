import React from "react";
import {Button} from "antd";
import {Link} from "react-router-dom";
import "./header.css";

const Header = () => {
    return (
        <div className="headerWrapper">
            <div className="headerLogo" ><Link to="/" style={{color:"white"}}>Books App</Link></div>
            <div className="headerBtn">
                <Button className="addBtn">
                    <Link to="addBook"
                          style={{color: "black", marginRight: "5px"}}>
                        Add new book
                    </Link> </Button>
                <Button className="toListBtn">
                    <Link to="/"
                          style={{color: "black"}}>
                        Back to book list
                    </Link> </Button>
            </div>
        </div>
    )
};

export default Header;

