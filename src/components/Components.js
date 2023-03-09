import { QueryClient } from "react-query";
import "antd/dist/reset.css";
import { AreaChartOutlined } from "@ant-design/icons";
import { useDataMg } from "../hooks/useDataMg";
import React from "react";
import {
  Typography,
  Spin,
  Progress,
  Space,
  Col,
  Row,
  Slider,
  Divider,
} from "antd";

const queryClient = new QueryClient();

const { Title } = Typography;

const Components = () => {
  const onSuccess = () => queryClient.invalidateQueries(["data-mandiri"]);

  const onError = (error) => {
    console.log("perfom side effect after encountering error ", error);
  };

  let nilaipersenmuf = 0;
  const { isLoading, data, isError, error } = useDataMg(onSuccess, onError);

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

  if (isLoading) {
    // return <h1> Loadingg .... </h1>;

    return (
      <>
        <Space size="middle">
          <Spin size="large" />
        </Space>
      </>
    );
  }

  if (isError) {
    return <h1> {error.message}</h1>;
  }

  if (data?.data) {
    nilaipersenmuf = data?.data.nonrestru_muf_persen;
    console.log(nilaipersenmuf);
  }

  return (
    <>
      <div className="container">
        <div className="judul">
          <AreaChartOutlined
            style={{ fontSize: "36px", color: "#08c" }}
            className="iconchar"
          />
          <Title level={3}> Dashboard Progress Data Migrasi MUF</Title>
        </div>
        <div className="card">
          <br />

          <div className="circle">
            <Title level={3}>## Account Non Restru ##</Title>
            <Divider />
            <Title level={4} underline={true}>
              ETL Batch Data Migration
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

              <Row gutter={[10, 8]} align="top" justify="center">
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
                      format={() => "Done"}
                      strokeWidth={10}
                      width={180}
                      strokeColor={`${onDone(nilaipersenmuf)} `}
                      //strokeColor="red"
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
                        Data Account :{data?.data.nonrestru_muf_static_account}
                      </text>
                    </li>
                    <li>
                      {" "}
                      <text className="detail-text">
                        Data Customer :
                        {data?.data.nonrestru_muf_static_customer}
                      </text>
                    </li>
                    <li>
                      {" "}
                      <text className="detail-text">
                        Data Asset :{data?.data.nonrestru_muf_static_asset}
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
                      percent={data?.data.nonrestru_canalis_persen}
                      format={(percent) => `${percent} %`}
                      strokeWidth={10}
                      width={180}
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
                    <ul>
                      <li>
                        {" "}
                        <text className="detail-text">
                          Data Account :
                          {data?.data.nonrestru_canalis_static_account}
                        </text>
                      </li>
                      <li>
                        {" "}
                        <text className="detail-text">
                          Data Customer :
                          {data?.data.nonrestru_canalis_static_customer}
                        </text>
                      </li>
                      <li>
                        {" "}
                        <text className="detail-text">
                          Data Asset :
                          {data?.data.nonrestru_canalis_static_asset}
                        </text>
                      </li>
                    </ul>
                  </Title>
                </Col>
              </Row>
            </div>

            <Divider />
            {/* part 2 */}
            <Title level={4} underline={true}>
              WorkFlow Data Static
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
                      percent={data?.data.nonrestru_workflow_customer_persen}
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
                    Data Static Customer masuk ke Canalis :{" "}
                  </Title>
                  <ul>
                    <li>
                      {" "}
                      <text className="detail-text">
                        Data Customer :{data?.data.nonrestru_workflow_customer}
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
                      percent={data?.data.nonrestru_workflow_asset_persen}
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
                    Data Static Asset masuk ke Canalis :{" "}
                  </Title>
                  <ul>
                    <li>
                      {" "}
                      <text className="detail-text">
                        Data Asset :{data?.data.nonrestru_workflow_asset}
                      </text>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Components;
