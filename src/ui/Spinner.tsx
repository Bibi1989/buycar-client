import React from "react";
import { Spin, Skeleton } from "antd";

const Spinner = () => {
  return (
    <Spin tip='Loading...' style={{ height: "100vh" }}>
      <Skeleton />
    </Spin>
  );
};

export default Spinner;
