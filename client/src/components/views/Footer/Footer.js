import React from "react";
import { SmileOutlined } from "@ant-design/icons";

function Footer() {
  return (
    <div
      style={{
        height: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
        backgroundColor: "lightblue",
      }}
    >
      <p>
        <b>
          Enjoy every second of life <SmileOutlined style={{ size: "4rem" }} />
        </b>
      </p>
    </div>
  );
}

export default Footer;
