import React from 'react';
import { RectangleCard } from './Card';
function Cards() {
  const data = [
    {
      p: 'What can a personal loan be used for?',
      content:
        'Personal Loan can help you meet unexpected expenses such as wedding expenditure, school or college fees, dream vacations, home renovation projects or even for the purchase of consumer durables. ',
    },
    {
      p:
        'Do I need to provide any security or collateral to obtain a personal loan?',
      content:
        'No, you do not have to provide any security or collateral to obtain a personal loan. Personal loan is a type of unsecured loan. This essentially means that it is not backed by the guarantee of collateral. You are not burdened by the need to generate collateral like gold, property or shares, as with other types of loans. As there is no security to assure loan repayment, the bank will focus on the income and financial stability of the applicant. ',
    },
    {
      p: 'What are the benefits of taking a personal loan with Kotak?',
      content:
        'There are several benefits of availing a personal loan from Kotak bank. Some of the most notable benefits include:',
    },
    {
      p: 'What is the eligibility criteria to apply for a personal loan?',
      content: 'The eligibility to avail Personal loan is as follows :',
    },
    {
      p: 'What is the best way to apply for a personal loan?',
      content:
        'You can apply for a personal loan by following the below steps:',
    },
  ];
  return (
    <div>
      {data.map((item, i) => (
        <RectangleCard key={i} {...item}></RectangleCard>
      ))}
    </div>
  );
}

export default Cards;
