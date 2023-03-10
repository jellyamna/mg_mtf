import React from "react";
import { Typography, Progress, Col, Row } from "antd";
import Blinking from "./Blinking";

const RekonQuery = (data) => {
  const { Title } = Typography;
  return (
    <>
      <Title level={4} underline={true}>
        8. Item Reconcile Query :
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
                percent={data?.data.rekon_query_persen}
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
              Item Query Reconcile Canalis :{" "}
            </Title>

            <ul>
              {data?.data.rekon.map((item) => {
                return (
                  <li key={item.id}>
                    <text className="detail-text">
                      {item.name} : <Blinking text={item.status} />
                    </text>
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RekonQuery;
