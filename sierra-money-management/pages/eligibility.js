import React from 'react';
import styles from '../styles/elegible.module.css';
import Cards from '../components/Cards.js';
import Squares from '../components/Squares.js';
import { Button, Card } from 'react-bootstrap';
function eligibility() {
  return (
    <div>
      <div
        style={{
          width: '70%',
          margin: 'auto',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h2>Eligibility Criteria</h2>
        </div>
        <p>
          Need a personal loan to meet your immediate financial requirements?
          Make sure you run through the basic personal loan eligibility criteria
          listed below to avail a personal loan as fast as possible, only from
          Kotak Mahindra Bank. Also, remember to put in place all the necessary
          documents well ahead in time, for faster processing of your personal
          loan.
        </p>
        <strong>Personal Loan Eligibility Criteria</strong>

        <p>
          Any Indian resident who is an active employee of an MNC, Public or
          Private limited company and is between 21- 58 years of age is eligible
          for availing a personal loan.
        </p>

        <strong>
          The following are some of the other criteria for availing a Personal
          loan.
        </strong>
        <ul>
          <li>
            A net Salary of Rs.25,000/- per month for Corp Sal, A net Salary of
            Rs.30,000/- per month for Non-Corp Sal , A net Salary of Rs.20,000/-
            per month .
          </li>
          <li>
            A person who has a minimum educational qualification of being a
            graduate.
          </li>
          <li>An active resident of a city for at least 1 year</li>
          <li>A minimum work experience of at least 1 year</li>
        </ul>
        <strong>Documents Required For Personal Loan</strong>
        <p>
          Meeting the basic documentation requirement is a must for applying for
          any kind of loan. If you intend to apply for a personal loan , you
          must provide self-attested copies of all the required documents,
          depending upon a number of factors such as your service/profession,
          income and loan requirement. At the same time, carry the original
          copies for the purpose of verification.
        </p>
        <strong>What are the Interest Rates and the Tenure?</strong>
        <p>
          You can avail an attractive rate of interest on a personal loan, only
          after you have fulfilled the personal loan eligibility criteria.
          However, the rate of interest to be levied on your personal loan is
          solely at the bank’s discretion. Currently, the rate of interest
          applied on personal loan varies from 10.75%-24% p.a. The tenure of a
          personal loan may range up to maximum 60 months.
        </p>
        <strong>Know Your EMIs and Available Repayment Options</strong>
        <p>
          If you take a personal loan you shall be offered with a convenient
          option of repaying your amount of loan over a period of fixed term.
          You can repay the borrowed sum through feasible EMIs which can be
          calculated accurately with the help of our Personal Loan EMI
          Calculator. The duration of the tenure and the monthly instalment of
          EMI are closely related to each other. The shorter the duration of the
          tenure higher will be the amount that you need to pay towards the
          repayment of the loan each month.
        </p>
        <p>
          Make sure you check the personal loan eligibility criteria before
          applying for a personal loan.
        </p>
      </div>
      <br></br>

      <div>
        <div
          style={{
            height: '180px',
            width: '100%',
            backgroundImage:
              'linear-gradient(to right top, #f36f32, #f2612c, #f15128, #f03e25, #ee2424)',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h3>Ready to take the next step?</h3>
          <Button
            style={{
              backgroundColor: 'white',
              color: '#EE2424',
              width: '150px',
            }}
          >
            Apply Now
          </Button>
        </div>
      </div>

      <div className={styles.AskedQue}>
        <div>
          <h4>Frequently Asked Questions</h4>
        </div>
        <div>
          <Cards></Cards>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="outline-danger">View All</Button>{' '}
        </div>
        <div style={{ marginTop: '20px' }}>
          <div style={{ textAlign: 'center' }}>
            <h4>People also looked At</h4>
          </div>
          <Squares></Squares>
        </div>

        <div
          style={{
            height: '400px',
            // border: '1px solid red',
            marginTop: '40px',
            marginBottom: '40px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: 'white',
          }}
        >
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Locate Us</Card.Title>
                <Card.Text>
                  You are never too far away from quick, efficient banking
                  services. Locate your nearest branch or an ATM.
                </Card.Text>
              </Card.Body>
              <Button variant="outline-warning">Locate Now</Button>{' '}
            </Card>
          </div>
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Call Us</Card.Title>
                <Card.Text>
                  In case you wish to speak to our phone banking officer for
                  urgent resolution
                </Card.Text>
              </Card.Body>
              <Button variant="outline-danger">Call Now</Button>{' '}
            </Card>
          </div>
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Write to us</Card.Title>
                <Card.Text>
                  Be it an enquiry, feedback or a simple suggestion, write to us
                  & we'll get back to you
                </Card.Text>
              </Card.Body>
              <Button variant="outline-success">Write Now</Button>{' '}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default eligibility;
