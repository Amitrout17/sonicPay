import React from "react";
import {
  BsHouseDoorFill,
  BsBank,
  BsCurrencyRupee,
  BsCoin,
  BsReception4,
  BsPersonSquare,
  BsArrowBarLeft,
} from "react-icons/bs";
import Logo from "../../src/image/logo.png";

import "./sidebar.css";

function Sidebar() {
  return (
    <div>
      <header>
        <div class="sidebar">
          <div className="logo-sidebar">
            <img src={Logo} alt="" />
            <p>Sonic Pay</p>
          </div>
          <ul>
            <li className="sub-headings">
              <span>Dashboard</span>
            </li>
            <li className="li-sidebar-internal">
              <a href="/Home">
                <BsHouseDoorFill
                  style={{ color: "white", height: "22.4px", width: "22px" }}
                  className="react-icons"
                />
                <div>Home</div>
              </a>
            </li>
            <li className="sub-headings">
              <span>Balance Details</span>
            </li>
            <li className="li-sidebar-internal">
              <a href="/balance-enquiry">
                <BsCurrencyRupee
                  style={{ color: "white", height: "22.4px", width: "22px" }}
                />
                <div>Balance Enquiry</div>
              </a>
            </li>
            <li className="li-sidebar-internal">
              <a href="/balance-enquiry">
                <BsBank
                  style={{ color: "white", height: "22.4px", width: "22px" }}
                />
                <div>Bank Statement</div>
              </a>
            </li>
            <li className="sub-headings">
              <span>Loans & Transfer</span>
            </li>
            <li className="li-sidebar-internal">
              <a href="/balance-enquiry">
                <BsCoin
                  style={{ color: "white", height: "22.4px", width: "22px" }}
                />
                <div>Transfer Money</div>
              </a>
            </li>
            <li className="li-sidebar-internal">
              <a href="/balance-enquiry">
                <BsReception4
                  style={{ color: "white", height: "22.4px", width: "22px" }}
                />
                <div>Loan Enquiry</div>
              </a>
            </li>
            <li className="sub-headings">
              <span>Personal</span>
            </li>
            <li className="li-sidebar-internal">
              <a href="/balance-enquiry">
                <BsPersonSquare
                  style={{ color: "white", height: "22.4px", width: "22px" }}
                />
                <div>Account</div>
              </a>
            </li>
            <li className="li-sidebar-internal">
              <a href="/balance-enquiry">
                <BsArrowBarLeft
                  style={{ color: "white", height: "22.4px", width: "22px" }}
                />
                <div>Log Out</div>
              </a>
            </li>
          </ul>
        </div>
      </header>
      <main></main>
    </div>
  );
}

export default Sidebar;
