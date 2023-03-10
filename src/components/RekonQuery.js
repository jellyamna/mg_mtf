import React from "react";
import { Typography, Progress, Col, Row } from "antd";
import BlinkingStatus from "./BlinkingStatus";

const RekonQuery = (data) => {
  const { Title } = Typography;
  return (
    <>
      <Title level={4} underline={true}>
        8. Process Reconcile Query :
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
                percent={data?.data.rekon_query_persen}
                format={(percent) => `${percent} %`}
                strokeWidth={10}
                width={180}
              />
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
                  text={data?.data.audit_query_persen_status_job}
                />
              </h2>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RekonQuery;
