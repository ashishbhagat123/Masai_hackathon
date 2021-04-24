import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import styles from "../styles/PieChart.module.css"
import { Animation } from '@devexpress/dx-react-chart';


const PieChart = ({principle, interest, tenure, rate, emi}) => {

    const data = [
        { amount: 'interest', val: interest },
        { amount: 'principle', val: principle},
      ];
      console.log(emi)
    return (
      <>
      <h1>Your Monthly Loan EMI: Rs {emi.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
      <Paper className = {styles.container}>
          <div>
        <Chart
          data={data}
        >
          <PieSeries
            valueField="val"
            argumentField="amount"
            innerRadius={0.3}
          />
          <Title style = {{color : "red"}}
            text="Break-up of all total amount payable"
          />
          <Animation />
        </Chart>
        </div>
        <div className = {styles.chart}>
        <div>
            <div>
              <span style = {{backgroundColor: "#fb6f42"}}></span> <h2>Loan Amount: </h2> 
            </div>
            <div>
               <h2>Rs: {principle.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2> 
            </div>
        </div>
        <div>
            <div>
               <span style = {{backgroundColor: "#43a5f5"}}></span> <h2>Total Interest:</h2>
            </div>
            <div>
                 <h2>Rs: {interest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2> 
            </div>
        </div>
        <div>
            <div>
               <h2>Tenure:</h2>
            </div>
            <div>
                 <h2>{tenure} Years</h2> 
            </div>
        </div>
        <div>
            <div>
               <h2>Interest Rate:</h2>
            </div>
            <div>
                 <h2>{rate} %</h2> 
            </div>
        </div>
        <hr />
        <div>
            <div>
               <h2>Total Amount:</h2>
            </div>
            <div>
                 <h2>Rs: {(principle + interest).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2> 
            </div>
        </div>
        </div>
      </Paper>
      </>
    );
  }

  export default PieChart
