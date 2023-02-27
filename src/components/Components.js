import { QueryClient } from "react-query";
import { Progress } from "antd";
import "antd/dist/reset.css";
import { AreaChartOutlined } from "@ant-design/icons";
import { useDataMg } from "../hooks/useDataMg";
import React from "react";
import { Typography } from "antd";

const queryClient = new QueryClient();



const { Title } = Typography;

const Components = () => {
  const onSuccess = () => queryClient.invalidateQueries(["data-mandiri"]);

  const onError = (error) => {
    console.log("perfom side effect after encountering error ", error);
  };

  const { isLoading, data, isError, error } = useDataMg(onSuccess, onError);

  if (isLoading) {
    return <h1> Loadingg .... </h1>;
  }

  if (isError) {
    return <h1> {error.message}</h1>;
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
          <Title level={4}>Progress ETL Data MUF</Title>
          <Title level={5}>
            Accont Data MUF yang di pindahkan : {data?.data.totalaccountmtf} -
            Data yang di prosess {data?.data.progresstotalaccountmtf}
          </Title>
          <Progress
            percent={data?.data.persenaccountmtf}
            strokeWidth={20}
            status="active"
            strokeColor={{
              from: "#108ee9",
              to: "#87d068",
            }}
          />

          <br />
          <br />
          <br />
          <Title level={4}>Progress Inset Data Canalis</Title>
          <Title level={5}>
            Insert To Canalis : {data?.data.progressaccountcanalis} account
          </Title>
          <Progress
            percent={data?.data.persenaccountcanalis}
            strokeWidth={20}
            status="active"
            strokeColor={{
              from: "#108ee9",
              to: "#87d068",
            }}
          />

          <br />
          <br />
          <br />

          <div className="circle">
            <Title level={4}>Info Type Account Insert Canalis</Title>

            <div
              style={{
                display: "flex",
                paddingTop: "20px",
                justifyContent: "start",
                gap: "30px ",
              }}
            >
              <Progress
                type="circle"
                percent={data?.data.persenaccountcanalispart1}
                format={(percent) => `${percent} %`}
                strokeWidth={10}
                width={180}
              />
              <Title
                level={5}
                style={{
                  alignSelf: "center",
                }}
              >
                Total Account WO yang sudah Running :{" "}
                {data?.data.progressaccountcanalispart1}
              </Title>
            </div>

            <div
              style={{
                display: "flex",
                paddingTop: "20px",
                justifyContent: "start",
                gap: "30px ",
              }}
            >
              <Progress
                type="circle"
                percent={data?.data.persenaccountcanalispart2}
                format={(percent) => `${percent} %`}
                strokeWidth={10}
                width={180}
              />
              <Title
                level={5}
                style={{
                  alignSelf: "center",
                }}
              >
                Total Account Active yang sudah Running :{" "}
                {data?.data.progressaccountcanalispart2}
              </Title>
            </div>

            <div
              style={{
                display: "flex",
                paddingTop: "20px",
                justifyContent: "start",
                gap: "30px ",
              }}
            >
              <Progress
                type="circle"
                percent={100}
                format={() => "Done"}
                strokeWidth={10}
                width={180}
              />
              <Title
                level={5}
                style={{
                  alignSelf: "center",
                }}
              >
                Total Account Active yang sudah Running :{" "}
                {data?.data.progressaccountcanalispart3}
              </Title>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Components;
