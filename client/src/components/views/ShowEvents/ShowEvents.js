import React, { useEffect, useState } from "react";
import Axios from "axios";
import { AgGridReact } from "ag-grid-react";
import "./ShowEvents.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export default function ShowEvents() {
  const [Events, setEvents] = useState("");
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "Event Name",
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
      headerName: "Timings",
      field: "time",
    },
    {
      headerName: "Limit",
      field: "limit",
    },
  ]);

  useEffect(() => {
    Axios.get("/api/events/show/events").then((res) => {
      if (res.data.success) {
        console.log(res.data.data);
        setEvents(res.data.data);
      } else {
        alert("There is some issue while loading events !!");
      }
    });
  }, []);

  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: "700px",
        width: "1510px",
      }}
    >
      <AgGridReact columnDefs={columnDefs} rowData={Events}></AgGridReact>
    </div>
  );
}
