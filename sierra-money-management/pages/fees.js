import React from 'react';
import styles from '../styles/fees.module.css';
import { Button, Card } from 'react-bootstrap';
import Cards from '../components/Cards';
import Squares from '../components/Squares.js';
function fees() {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h3>Fees and Charges</h3>
      </div>

      <div style={{ textAlign: 'left', width: '70%', margin: 'auto' }}>
        <strong>List of The Charges Implied </strong>
        <p>
          Knowing the fees and charges not only gives you further details
          pertaining to your loan, but also helps you plan your finances better.
          Are you confused about the fees and charges associated with personal
          loans? Run through the complete list of related costs mentioned below
          and understand the charges implied on personal loans.
        </p>
      </div>

      <div>
        <table
          className={styles.table}
          style={{ width: '70%', justifyContent: 'center', margin: 'auto' }}
        >
          <tr
            style={{
              color: 'white',
              backgroundColor: 'red',
              textAlign: 'left',
              height: '55px',
            }}
          >
            <th>Loan</th>
            <th>Personal Loan</th>
          </tr>

          <tr>
            <td>Fixed Interest Rate</td>
            <td> Starting 10.75%</td>
          </tr>
          <tr>
            <td>Loan Processing Charges</td>
            <td>
              Upto 2.5% of the loan amount+ GST and other applicable statutory
              levies
            </td>
          </tr>
          <tr>
            <td>Stamping Charges</td>
            <td>Applicable as per the respective State's Stamp Act</td>
          </tr>
          <tr>
            <td>Credit Administration Charges</td>
            <td>
              {' '}
              Upto 5% of the Loan amount, not exceeding Rs. 7500 (inclusive of
              GST )
            </td>
          </tr>
          <tr>
            <td>Overdue Interest</td>
            <td>
              3% p.m compounded monthly on the Amount due but unpaid from the
              Date of the Amount falling Due till the Date of actual payment
            </td>
          </tr>
          <tr>
            <td>Collection Charges</td>
            <td>
              30% (inclusive of GST and other applicable statutory levies)of
              cheque / instrument dishonour charges+ overdue interest
            </td>
          </tr>
          <tr>
            <td>Dishonour Charges Per Instance</td>
            <td>
              Rs. 750 per instance (inclusive of GST and other applicable
              statutory levies)
            </td>
          </tr>
          <tr>
            <td>
              Swap Charges (Change in mode of repayment/Instrument/EMI Date
              swap)
            </td>
            <td>
              Rs.500 per Swap per Instance+ GST and other applicable statutory
              levies
            </td>
          </tr>
          <tr>
            <td>Foreclosure Charges</td>
            <td>
              - For Loans disbursed on or before 1st Feb’20: * 5% + GST on
              principal outstanding after 12 months (lock-in period for 12
              months) - For Loans disbursed after 1st Feb’20: * 5% + GST on
              principal outstanding after 12 months (lock-in period for 12
              months) * After 2nd year - 4%+ GST, * After 3rd year - 3% + GST
            </td>
          </tr>
          <tr>
            <td>Part pre-payment charges</td>
            <td>
              - For Loans disbursed on or before 1st Feb’20 : Part payment
              facility not available - For Loans disbursed after 1st Feb’20: *
              Allowed up to 10% every year, after completion of 12 months
              lock-in period. * INR 750 + GST per instance of part-prepayment
            </td>
          </tr>
          <tr>
            <td>Duplicate Issue of NOC</td>
            <td> Nil</td>
          </tr>
          <tr>
            <td>No Due Certificate</td>
            <td>Nil</td>
          </tr>
          <tr>
            <td>
              Charges for furnishing a copy of the credit information report
              (CIBIL) to the applicant.
            </td>
            <td>
              Rs. 50 + GST and other applicable statutory levies per instance
            </td>
          </tr>
          <tr>
            <td>
              Charges applicable in case customer requests for copies of records
              pertaining to his transactions ( SOA / Amortization Schedule)
            </td>
            <td>
              Once yearly without any charge. Post that Rs.200 per request+ GST
              and other applicable statutory levies
            </td>
          </tr>
        </table>
        <div style={{ width: '70%', margin: 'auto', marginTop: '50px' }}>
          <strong>Documents Required For Personal Loan</strong>
          <p>
            Meeting the basic documentation requirement is a must for applying
            for any kind of loan. If you intend to apply for a personal loan ,
            you must provide self-attested copies of all the required documents,
            depending upon a number of factors such as your service/profession,
            income and loan requirement. At the same time, carry the original
            copies for the purpose of verification.
          </p>
          <strong>What are the Interest Rates and the Tenure?</strong>
          <p>
            You can avail an attractive rate of interest on a personal loan,
            only after you have fulfilled the personal loan eligibility
            criteria. However, the rate of interest to be levied on your
            personal loan is solely at the bank’s discretion. Currently, the
            rate of interest applied on personal loan varies from 10.75%-24%
            p.a. The tenure of a personal loan may range up to maximum 60
            months.
          </p>
          <strong>Know Your EMIs and Available Repayment Options</strong>
          <p>
            If you take a personal loan you shall be offered with a convenient
            option of repaying your amount of loan over a period of fixed term.
            You can repay the borrowed sum through feasible EMIs which can be
            calculated accurately with the help of our Personal Loan EMI
            Calculator. The duration of the tenure and the monthly instalment of
            EMI are closely related to each other. The shorter the duration of
            the tenure higher will be the amount that you need to pay towards
            the repayment of the loan each month.
          </p>
          <p>
            Make sure you check the personal loan eligibility criteria before
            applying for a personal loan.
          </p>
        </div>
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
                    Be it an enquiry, feedback or a simple suggestion, write to
                    us & we'll get back to you
                  </Card.Text>
                </Card.Body>
                <Button variant="outline-success">Write Now</Button>{' '}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default fees;
