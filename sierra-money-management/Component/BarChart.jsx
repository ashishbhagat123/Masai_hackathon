import React from "react";
import { Chart } from "react-google-charts";
import styles from "../styles/BarChart.module.css"

const BarChart = ({report}) => {
    const data = []
    const rows = [
        report.map((e,i) => {
            let month = i+1
            let principal = e.principal_paid
            let interest = e.interest_paid
            let emi = e.emi
                return ([month, principal, interest, emi])
        })
      ]
      const row = rows[0].filter((e, i)=> i === 0 || i % 12 === 0)
      console.log(row)


    return (
        <div className = {styles.container}>
            <Chart
                width={"100%"}
                height={"500px"}
                style = {{margin: "2% auto"}}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={[
                    ["month","Principal", "Interest", "emi"],
                    ...row
                ]}
                options={{
                    // Material design options
                    chart: {
                        title: "Loan payment Chart",
                        subtitle: "Interest, principal and emi over the loan tenure",
                    },
                }}
                // For tests
                rootProps={{ "data-testid": "2" }}
            />
        </div>
    );
};

export default BarChart;
