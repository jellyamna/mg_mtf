import React from 'react';
import { Typography, Progress, Col, Row, Divider } from "antd";

const AccountMigrationNonRestru = (data) => {
     const { Title } = Typography;
  return (
    <>
      <Title level={4} underline={true}>
        3. WorkFlow Account Transaction
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
          <Col xs={24} sm={24} md={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "10px",
              }}
            >
              <Progress
                type="circle"
                percent={data?.data.nonrestru_workflow_account_migrate_persen}
                format={(percent) => `${percent} %`}
                strokeWidth={10}
                width={180}
              />
            </div>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Title
              level={5}
              style={{
                alignSelf: "center",
              }}
            >
              Data Account Transaction MUF :{" "}
              {data?.data.nonrestru_workflow_account}
              <br />
              Data Account Transaction migrate ke Canalis :{" "}
            </Title>
            <ul>
              <li>
                {" "}
                <text className="detail-text">
                  Data Transaction :
                  {data?.data.nonrestru_workflow_account_migrate}
                </text>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default AccountMigrationNonRestru