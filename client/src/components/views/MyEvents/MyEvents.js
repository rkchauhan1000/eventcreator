import React, { useState, useEffect } from "react";
import Axios from "axios";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export default function MyEvents() {
  const [MyEvents, setMyEvents] = useState([]);
  const userId = window.localStorage.getItem("userId");
  console.log(userId);
  const id = window.localStorage.getItem("rememberMe");
  //   console.log(id);
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "Event",
      field: "name",
    },
    {
      headerName: "Venue",
      field: "venue",
    },
    {
      headerName: "From",
      field: "date1",
    },
    {
      headerName: "To",
      field: "date2",
    },
    {
      headerName: "Timing",
      field: "time",
    },
  ]);

  useEffect(() => {
    Axios.get("/api/events/show/myEvents").then((res) => {
      if (res.data.success) {
        console.log(res.data);
        setMyEvents(res.data.data);
      } else {
        alert("Error while loading events !!");
      }
    });
  }, []);

  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: "700px",
        width: "1304px",
      }}
    >
      <AgGridReact columnDefs={columnDefs} rowData={MyEvents}></AgGridReact>
    </div>
  );
}
