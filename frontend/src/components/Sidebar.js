import React from 'react';
import { BsHouseDoorFill, BsBank, BsCurrencyRupee,BsCoin, BsReception4,BsPersonSquare,  BsArrowBarLeft } from 'react-icons/bs';

function Sidebar() {
  return (
    <div>
      <header>
        <div class="sidebar">
          <ul>
            <li>
              <div>
                <a href= "/Home"> Home</a>
                <BsHouseDoorFill style={{ color: 'black', fontSize: '25px' }} />
              </div>
            </li>
            <li>
              <div >
                <a href="/balance-enquiry">Balance Enquiry</a>
                <BsCurrencyRupee style={{ color: 'black', fontSize: '25px' }} />
              </div>
            </li>
            <li>
              <div >
                <a href="/bank statement">Bank Statement</a>
                <BsBank style={{ color: 'black', fontSize: '25px' }} />
              </div>
            </li>
            <li>
              <div >
                <a href="/transfer money">Transfer Money</a>
                <BsCoin style={{ color: 'black', fontSize: '25px' }} />
              </div>
            </li>
             <li>
               <div>
              <a href="/loan enquiry"> Loan Enquiry </a>
                <BsReception4 style={{ color: 'black', fontSize: '25px' }} /> 
                </div>
            </li>
            <li>
               <div>
              <a href="/account"> Account </a>
                <BsPersonSquare style={{ color: 'black', fontSize: '25px' }} /> 
                </div>
            </li>
            <li>
              <div>
              <a href="/Log out"> Log Out </a>
                <BsArrowBarLeft style={{ color: 'black', fontSize: '25px' }} /> 
              </div>
            </li>
          </ul>
        </div>
      </header>
      <main></main>
    </div>
  );
}

export default Sidebar;