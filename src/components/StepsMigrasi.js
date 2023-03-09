import React from "react";
import { Steps, Progress, Typography } from "antd";


const { Title } = Typography;

const description = "This is a description.";
const { Step } = Steps;
const persen = "Progress 90 %";
const persen1 = "Progress 30 %";
const linkurl = () => {
  return (
    <>
      This is the second step : <br />
      {<a href="https://google.com">Detail</a>}
    </>
  );
};

const StepsMigrasi = () => {
  return (
    <>
      <div className="step-center">
        <div className="card">
          <Title level={4}>Progress ETL Data MUF</Title>
          <div>
            <Steps
              direction="horizontal"
              style={{ fontSize: "40", color: "#08c" }}
              responsive={true}
            >
              <Step
                status="finish"
                title="Step 1 - Done "
                // description={<a href="https://google.com">Detail</a>}
                description={linkurl()}
              />
              <Step
                status="process"
                title={"Step 2 : start 11:00  - " + persen}
                description={linkurl()}
              />

              <Step
                status="process"
                title={"Step 3 : start 11:00  - " + persen1}
                description={linkurl()}
              />
              <Step
                status="wait"
                title="Step 4  :  start 13:00  - progress 0 % "
                description={linkurl()}
              />
              <Step
                status="wait"
                title="Step 5 : start 14:00  - progress 0 %"
                description={linkurl()}
              />
              <Step
                status="wait"
                title="Step 5 : start 14:00  - progress 0 %"
                description={linkurl()}
              />
              <Step
                status="wait"
                title="Step 6 : start 14:00  - progress 0 %"
                description={linkurl()}
              />
              <Step
                status="wait"
                title="Step 7 : start 14:00  - progress 0 %"
                description={linkurl()}
              />
            </Steps>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepsMigrasi;
