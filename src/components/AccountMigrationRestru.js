import React from "react";
import { Typography, Progress, Col, Row } from "antd";
import BlinkingNum from "./BlinkingNum";
import BlinkingStatus from "./BlinkingStatus";

const AccountMigrationRestru = (data) => {
  const { Title } = Typography;
  return (
    <>
      <Title level={4} underline={true}>
        6. Eksekusi Service DM - Financial
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
          <Col xs={24} sm={24} >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "10px",
              }}
            >
              <Progress
                type="circle"
                percent={data?.data.restru_workflow_account_migrate_persen}
                format={(percent) => `${percent} %`}
                strokeWidth={10}
                width={180}
              />
            </div>
          </Col>
          <Col xs={24} sm={24} >
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
                {/* Data Account Transaction MUF :{" "}
              {data?.data.restru_workflow_account} */}
                <br />
                Progress : {"  "}
                <BlinkingNum
                  num={data?.data.restru_workflow_account_migrate}
                  num2={data?.data.restru_workflow_account}
                />{" "}
                / {data?.data.restru_workflow_account}
              </Title>
            </div>
            {/* <ul>
              <li>
                {" "}
                <text className="detail-text">
                  Data Transaction :{data?.data.restru_workflow_account_migrate}
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
                  text={data?.data.restru_workflow_account_status_job}
                />
              </h2>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AccountMigrationRestru;
