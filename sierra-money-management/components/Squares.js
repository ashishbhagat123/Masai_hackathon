import React from 'react';
import { Square } from './Card';
function Squares() {
  const sqr = [
    {
      img:
        'https://cdn.mos.cms.futurecdn.net/FYjFKKZ65KqMgGUo2EwWER-1024-80.jpeg.webp',
      header: 'Gold Loan',
      para:
        'Make optimum use of your gold reserves collected over the years. Get quick and easy financing with Gold Loan  at attractive interest rates.',
    },
    {
      img:
        'https://techsolidarity.org/images/u2f/yubikey.jpg',
      header: 'Loan Against Security',
      para:
        'Capitalize on your investments without selling them by applying for Loan Against Securities from Kotak Bank.',
    },
    {
      img:
        'https://www.paisabazaar.com/wp-content/uploads/2019/01/quick-business-loans.jpg',
      header: 'Business Loans',
      para:
        'Do not worry to bear the pressure of starting a new business all alone. Grab every opportunity to grow your business with Business Loan from Kotak Bank.',
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        // border: '1px solid black',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: '10px',
      }}
    >
      {sqr.map((item, i) => (
        <Square key={i} {...item}></Square>
      ))}
    </div>
  );
}

export default Squares;
