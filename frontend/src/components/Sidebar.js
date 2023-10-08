import React from 'react';

function Sidebar() {
  return (
    <div>
      <header>
        <h1></h1>
        <div class="sidebar">
          <h2>Systummmm</h2>
          <ul>
            <li style={{ marginBottom: '65px' }}>
              <a href="#">Home</a>
            </li>
            <li style={{ marginBottom: '65px' }}>
              <a href="#">Balance Enquiry</a>
            </li>
            <li style={{ marginBottom: '65px' }}>
              <a href="#">Bank Statement</a>
            </li>
            <li style={{ marginBottom: '65px' }}>
              <a href="#">Transfer Money</a>
            </li>
            <li style={{ marginBottom: '65px' }}>
              <a href="#">Loan Enquiry</a>
            </li>
            <li style={{ marginBottom: '65px' }}>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Log out</a>
            </li>
          </ul>
        </div>
      </header>
      <main></main>
    </div>
  );
}

export default Sidebar;