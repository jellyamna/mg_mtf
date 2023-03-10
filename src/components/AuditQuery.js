import React from "react";
import { Typography, Progress, Col, Row } from "antd";
import BlinkingStatus from "./BlinkingStatus";
import StartDate from "./StartDate";

const AuditQuery = (data) => {
  const { Title } = Typography;
  return (
    <>
      <Title level={4} underline={true}>
        7. Process Audit Query :
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
                percent={data?.data.audit_query_persen}
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
              <h2>
                <BlinkingStatus
                  text={data?.data.audit_query_persen_status_job}
                />
              </h2>
            </div>
            <StartDate
              startdate={data?.data.audit_query_persen_start_date}
              enddate={data?.data.audit_query_persen_end_date}
              status={data?.data.audit_query_persen_status_job}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AuditQuery;
