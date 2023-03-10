import { QueryClient } from "react-query";
import "antd/dist/reset.css";
import { AreaChartOutlined } from "@ant-design/icons";
import { useDataMg } from "../hooks/useDataMg";
import CustomerAssetNonRestru from "./CustomerAssetNonRestru";
import CustomerAssetRestru from "./CustomerAssetRestru";
import ETLinsertDBNonRestru from "./ETLinsertDBNonRestru";
import ETLinsertDBRestru from "./ETLinsertDBRestru";
import AccountMigrationNonRestru from "./AccountMigrationNonRestru";
import AccountMigrationRestru from "./AccountMigrationRestru";
import AuditQuery from "./AuditQuery";
import RekonQuery from "./RekonQuery";

import React from "react";
import { Typography, Spin, Space, Divider } from "antd";


const queryClient = new QueryClient();

const { Title } = Typography;

const Components = () => {
  const onSuccess = () => queryClient.invalidateQueries(["data-mandiri"]);

  const onError = (error) => {
    console.log("perfom side effect after encountering error ", error);
  };

  const { isLoading, data, isError, error } = useDataMg(onSuccess, onError);

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

  return (
    <>
      <div className="container">
        <div className="judul">
          <AreaChartOutlined
            style={{ fontSize: "36px", color: "#08c" }}
            className="iconchar"
          />
          <Title level={3}> Dashboard DM JF MUF to Canalis</Title>
        </div>

        <div className="card">
          <br />
          <div className="circle">
            <Title level={5}>Last Update : {data?.data.date}</Title>
            <Title level={3}> ##Account Non Restru##</Title>
            <Divider />
            {/* part 1 */}
            <ETLinsertDBNonRestru data={data?.data} />
            <Divider />
            {/* part 2 */}
            <CustomerAssetNonRestru data={data?.data} />
            <Divider />
            {/* part 3 */}
            <AccountMigrationNonRestru data={data?.data} />
          </div>
          <br />
          <br />
          <div className="circle">
            <Title level={3}>## Account Restru ##</Title>
            <Divider />
            <ETLinsertDBRestru data={data?.data} />
            <Divider />
            <CustomerAssetRestru data={data?.data} />
            <Divider />
            <AccountMigrationRestru data={data?.data} />
          </div>
          <br />
          <br />
          <div className="circle">
            <Title level={3}>## Audit Query ##</Title>
            <Divider />
            <AuditQuery data={data?.data} />
          </div>
          <br />
          <br />
          <div className="circle">
            <Title level={3}>## Reconcile Query ##</Title>
            <Divider />
            <RekonQuery data={data?.data} />
          </div>

          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
              marginBottom: "1",
              paddingBottom: "1",
            }}
          >
            <footer>
              <p>10 - 13 Maret 2023</p>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};
export default Components;
