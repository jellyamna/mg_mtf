import React from 'react';
import {
  Typography,
  Progress,
  Col,
  Row,
  Divider,
} from "antd";

const CustomerAssetNonRestru = (data) => {
    const { Title } = Typography;
  return (
    <>
      <Title level={4} underline={true}>
        2. WorkFlow Data Static (Customer- Asset)
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
                percent={data?.data.nonrestru_workflow_customer_migrate_persen}
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
              Data Static Customer MUF :{" "}
              {data?.data.nonrestru_workflow_customer}
              <br />
              Data Static Customer migrate ke Canalis :{" "}
            </Title>
            <ul>
              <li>
                {" "}
                <text className="detail-text">
                  Data Customer :
                  {data?.data.nonrestru_workflow_customer_migrate}
                </text>
              </li>
            </ul>
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
                percent={data?.data.nonrestru_workflow_asset_migrate_persen}
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
                paddingTop: "2px",
              }}
            >
              Data Static Asset MUF : {data?.data.nonrestru_workflow_asset}
              <br />
              Data Static Asset migrate ke Canalis :{" "}
            </Title>
            <ul>
              <li>
                {" "}
                <text className="detail-text">
                  Data Asset migrate :
                  {data?.data.nonrestru_workflow_asset_migrate}
                </text>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CustomerAssetNonRestru