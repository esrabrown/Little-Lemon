import React from 'react';

function Footer() {
  return (
    <div className='footer'>
      <div className='one'>
      <img src='{logo}' alt='Secondary Logo' />
      </div>
      <div className='three'>
        <ul>
          <h5>Contact</h5>
          <li>
            <a id='nav' href='#'>Phone Number</a>
          </li>
          <li>
            <a id='nav' href='#'>Email</a>
          </li>
          <li>
            <a id='nav' href='#'>Address</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;