import React from 'react';
import styles from '../styles/Document.module.css';
import Cards from '../components/Cards';
import Squares from '../components/Squares.js';
import {Card, Button } from 'react-bootstrap';
function Document() {
  return (
    <div>
      <div
        style={{
          width: '70%',
          margin: 'auto',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h3>Documents Required For Personal Loan</h3>
        </div>

        <p>
          There is no such difference in the required personal loan documents
          for the ETB (Existing to Bank) and the NTB (New to Bank) customers.
          The following enlists the personal loan documents required to be
          submitted by personal loan applicants.
        </p>
      </div>
      <div>
        <table
          className={styles.table}
          style={{ width: '70%', justifyContent: 'center', margin: 'auto' }}
        >
          <thead>
            <tr
              style={{
                color: 'white',
                backgroundColor: 'red',
                textAlign: 'left',
                height: '55px',
              }}
            >
              <th style={{ color: 'white' }}>Salaried Applicant</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              Proof of Identity like Passport/ PAN Card, Aadhar card, Voter's
              ID, Driving License
            </tr>
            <tr>
              Proof of Residence like Utility Bill, Passport or Leave and
              License Agreement
            </tr>
            <tr>Bank Statement for the last 3 months with income details</tr>
            <tr>Salary slip for the last 3 months</tr>
            <tr>2-3 Passport Size photographs</tr>
          </tbody>
        </table>
      </div>

      <div className={styles.AskedQue}>
        <div style={{margin: '20px auto',textAlign: 'center'}}>
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

export default Document;
