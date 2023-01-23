import React, { useState } from 'react';
import Topbar from '../Topbar/Topbar';
import './Header.css';
import { Link } from 'react-router-dom';

import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import hicon from '../../assets/img/icons8-doctors-bag.png';

const Header = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (    
    <>
      <Topbar />
      <>
        <div className={click ? "main-container" : ""}  onClick={()=>Close()} />  
        <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container ">

          <Link to="/" className="nav-logo">
            Doc Cares
            <i className='emoji'><img src={hicon} alt='hicon'/></i>
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>

            <li className="nav-item">
              <Link
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
               
                to="/adduser"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Departments
              </Link>
            </li>
          
            <li className="nav-item">
              <Link
               
                to="/updateuser"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Doctors
              </Link>
            </li>      
            <li className="nav-item">
              <Link
               
                to="/updateuser"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
              About Us
              </Link>
            </li>     
            <li className="nav-item">
              <Link
               
                to="/updateuser"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact Us
              </Link>
            </li>     

          </ul>

          <div className="nav-icon" onClick={handleClick}>        
            {  
              click 
              ? 
                <CloseOutlined /> 
              :
                <MenuOutlined />
            }         
          </div>

        </div>
      </nav> 
    </>
    </>
  )
}

export default Header;