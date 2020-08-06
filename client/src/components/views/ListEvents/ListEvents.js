import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Typography, Form, Input, Button, DatePicker } from "antd";
import TextArea from "antd/lib/input/TextArea";
import axios from "axios";
import { useSelector } from "react-redux";
import "./ListEvents.css";
import TimeField from "react-simple-timefield";
const { RangePicker } = DatePicker;
const { Title } = Typography;

const ListEvents = (props) => {
  const today = new Date();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const userId = window.localStorage.getItem("userId");
  const [open, setOpen] = useState(false);
  const [Time, setTime] = useState(time);
  const user = useSelector((state) => state.user);
  const [Name, setName] = useState("");
  const [Venue, setVenue] = useState("");
  const [Limit, setLimit] = useState("");
  const [dates1, setDates1] = useState([]);
  const [dates2, setDates2] = useState([]);
  const [About, setAbout] = useState("");
  const disabledDate = (current) => {
    if (!dates1 || dates1.length === 0) {
      return false;
    }
    const tooLate = dates1 && current.diff(dates1, "days") > 7;
    const tooEarly = dates2 && dates2.diff(current, "days") > 7;
    return tooEarly || tooLate;
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleVenue = (e) => {
    setVenue(e.target.value);
  };
  const handleLimit = (e) => {
    setLimit(parseInt(e.target.value));
  };
  const handleAbout = (e) => {
    setAbout(e.target.value);
  };

  const onTimeChange = (time) => {
    setTime(time);
  };
  const onSubmit = () => {
    if (Number.isInteger(Name)) alert("Please enter a valid name !!");
    else if (Number.isInteger(Venue)) alert("Please enter a valid venue !!");
    else if (Number.isInteger(About))
      alert("Please enter a valid about what will be the event !!");
    else if (Limit < 1) alert("Please enter a valid limit for the event !!");
    else if (!Number.isInteger(Limit))
      alert("Limit should only be positive no. !!");
    else if (Name === "" || About === "" || Limit === "" || Venue === "") {
      alert("Please fill all the fields !!");
    } else {
      const event = {
        eventCreator: userId,
        name: Name,
        about: About,
        date1: dates1,
        date2: dates2,
        limit: Limit,
        time: Time,
        venue: Venue,
      };

      axios.post("/api/events/list/event", event).then((res) => {
        if (res.data.success) {
          alert("Event created successfully !!");
        } else {
          alert("Failed to create event !!");
        }
      });

      props.history.push("/");
    }
  };
  return (
    <>
      <div className="form">
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
        >
          <Title level={2} style={{ color: "#3e91f7" }}>
            Enter event details
          </Title>
          <br />
          <Form.Item label="Name ">
            <Input placeholder="Enter name here" onChange={handleName} />
          </Form.Item>
          <Form.Item label="Venue ">
            <Input placeholder="Enter venue here" onChange={handleVenue} />
          </Form.Item>
          <Form.Item label="About">
            <TextArea
              placeholder="About the event ..."
              onChange={handleAbout}
            />
          </Form.Item>
          <Form.Item label="Limit">
            <Input placeholder="Seats" onChange={handleLimit} />
          </Form.Item>
          <Form.Item label="Date">
            <RangePicker
              disabledDate={disabledDate}
              onCalendarChange={(value) => {
                setDates1(value[0]);
                setDates2(value[1]);
              }}
            />
          </Form.Item>
          <Form.Item label="Timings">
            <TextField
              id="time"
              type="time"
              defaultValue={time}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={onTimeChange}
              inputProps={{
                step: 30,
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              className="login-form-button"
              style={{ minWidth: "100%" }}
              onClick={onSubmit}
            >
              Create Event
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ListEvents;
