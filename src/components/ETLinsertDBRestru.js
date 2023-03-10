import React from "react";
import { Typography, Progress, Col, Row } from "antd";

const ETLinsertDBRestru = (data) => {
  const { Title } = Typography;
  let nilaipersenmuf = 0;

  if (data?.data) {
    nilaipersenmuf = data?.data.restru_muf_persen;
    console.log(nilaipersenmuf);
  }
  const onDone = (persen) => {
    if (nilaipersenmuf <= 10) {
      console.log(nilaipersenmuf);

      return " #42b883";
    }

    return "red";
  };

  const onPercentReverse = (persen) => {
    if (nilaipersenmuf === 0) {
      console.log(nilaipersenmuf);
      return 100;
    }

    return nilaipersenmuf;
  };

  return (
    <>
      <Title level={4} underline={true}>
        4. ETL Batch Data Migration
      </Title>
      <br />
      {/* Account Non Restru */}
      <div className="box-shadow ">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "5px",
          }}
        >
          <Title
            level={5}
            style={{
              alignSelf: "center",
            }}
          >
            JFMUF TO Canalis
          </Title>
        </div>

        <Row gutter={[10, 10]} align="top" justify="center">
          <Col xs={24} sm={24} md={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Progress
                type="circle"
                //percent={data?.data.nonrestru_muf_persen}
                percent={`${onPercentReverse(nilaipersenmuf)}`}
                //format={(percent) => `${percent} %`}
                //format={`${onDonePersen(nilaipersenmuf)}`}
                format={() => {
                  if (nilaipersenmuf === 0) {
                    return "Done";
                  } else return `${nilaipersenmuf} %`;
                }}
                strokeWidth={10}
                width={180}
                //strokeColor={`${onDone(nilaipersenmuf)} `}
                strokeColor="blue"
              />
            </div>
          </Col>
          <Col xs={24} sm={24} md={6}>
            <Title
              level={5}
              style={{
                alignSelf: "center",
              }}
            >
              Account JFMUF yang akan dipindahkan :{" "}
            </Title>
            <ul>
              <li>
                {" "}
                <text className="detail-text">
                  Data Account :{data?.data.restru_muf_static_account}
                </text>
              </li>
              <li>
                {" "}
                <text className="detail-text">
                  Data Customer :{data?.data.restru_muf_static_customer}
                </text>
              </li>
              <li>
                {" "}
                <text className="detail-text">
                  Data Asset :{data?.data.restru_muf_static_asset}
                </text>
              </li>
            </ul>
          </Col>

          <Col xs={24} sm={24} md={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "10px",
              }}
            >
              <Progress
                type="circle"
                percent={data?.data.restru_canalis_persen}
                format={(percent) => `${percent} %`}
                strokeWidth={10}
                width={180}
                strokeColor="green"
              />
            </div>
          </Col>
          <Col xs={24} sm={24} md={6}>
            <Title
              level={5}
              style={{
                alignSelf: "center",
              }}
            >
              Account masuk ke Canalis :{" "}
            </Title>
            <ul>
              <li>
                {" "}
                <text className="detail-text2">
                  Data Account :{data?.data.restru_canalis_static_account}
                </text>
              </li>
              <li>
                {" "}
                <text className="detail-text2">
                  Data Customer :{data?.data.restru_canalis_static_customer}
                </text>
              </li>
              <li>
                {" "}
                <text className="detail-text2">
                  Data Asset :{data?.data.restru_canalis_static_asset}
                </text>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ETLinsertDBRestru;
