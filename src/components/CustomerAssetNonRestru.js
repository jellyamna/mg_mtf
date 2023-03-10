import React from "react";
import { Typography, Progress, Col, Row, Divider } from "antd";
import BlinkingNum from "./BlinkingNum";
import BlinkingStatus from "./BlinkingStatus";
import StartDate from "./StartDate";

const CustomerAssetNonRestru = (data) => {
  const { Title } = Typography;
  return (
    <>
      <Title level={4} underline={true}>
        2. Eksekusi Service DM - Customer & Asset
      </Title>
      <div className="box-shadow ">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Title
            level={5}
            style={{
              alignSelf: "center",
            }}
          >
            {/* Customer */}
          </Title>
        </div>

        <Row gutter={[10, 8]} align="top" justify="center">
          <Col xs={24} sm={24}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "10px",
              }}
            >
              <Progress
                type="circle"
                percent={data?.data.nonrestru_workflow_customer_migrate_persen}
                format={(percent) => `${percent} %`}
                strokeWidth={10}
                width={180}
                strokeColor="green"
              />
            </div>
          </Col>
          <Col xs={24} sm={24}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "10px",
              }}
            >
              <Title
                level={5}
                style={{
                  alignSelf: "center",
                }}
              >
                {/* Data Static Customer MUF :{" "}
              {data?.data.nonrestru_workflow_customer} */}
                <br />
                Progress :{" "}
                <BlinkingNum
                  num={data?.data.nonrestru_workflow_customer_migrate}
                  num2={data?.data.nonrestru_workflow_customer}
                />{" "}
                / {data?.data.nonrestru_workflow_customer}
              </Title>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "10px",
              }}
            >
              <h2>
                <BlinkingStatus
                  text={data?.data.nonrestru_workflow_customer_status_job}
                />
              </h2>
            </div>
            <StartDate
              startdate={data?.data.nonrestru_workflow_customer_start_date}
              enddate={data?.data.nonrestru_workflow_customer_end_date}
              status={data?.data.nonrestru_workflow_customer_status_job}
            />
          </Col>
        </Row>
      </div>

      <Divider />
      {/* part 3 */}

      <div className="box-shadow ">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {/* <Title
                  level={5}
                  style={{
                    justifySelf: "end",
                  }}
                >
                  Customer Static : 111
                </Title> */}
        </div>

        <Row gutter={[10, 8]} align="top" justify="center">
          <Col xs={24} sm={24}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "10px",
              }}
            >
              <Progress
                type="circle"
                percent={data?.data.nonrestru_workflow_asset_migrate_persen}
                format={(percent) => `${percent} %`}
                strokeWidth={10}
                width={180}
                strokeColor="green"
              />
            </div>
          </Col>
          <Col xs={24} sm={24}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "10px",
              }}
            >
              <Title
                level={5}
                style={{
                  alignSelf: "center",
                  paddingTop: "2px",
                }}
              >
                {/* Data Static Asset MUF : {data?.data.nonrestru_workflow_asset}
                 */}
                <br />
                Progress :{" "}
                <BlinkingNum
                  num={data?.data.nonrestru_workflow_asset_migrate}
                  num2={data?.data.nonrestru_workflow_asset}
                />{" "}
                / {data?.data.nonrestru_workflow_asset}
              </Title>
            </div>
            {/* <ul>
              <li>
                {" "}
                <text className="detail-text">
                  Data Asset migrate :
                  {data?.data.nonrestru_workflow_asset_migrate}
                </text>
              </li>
            </ul> */}
          </Col>
          <Col xs={24} sm={24} md={24}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "10px",
              }}
            >
              <h2>
                <BlinkingStatus
                  text={data?.data.nonrestru_workflow_asset_status_job}
                />
              </h2>
            </div>
            <StartDate
              startdate={data?.data.nonrestru_workflow_asset_start_date}
              enddate={data?.data.nonrestru_workflow_asset_end_date}
              status={data?.data.nonrestru_workflow_asset_status_job}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CustomerAssetNonRestru;
