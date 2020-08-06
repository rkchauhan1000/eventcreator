import React from "react";
import { Menu } from "antd";

function LeftMenu(props) {
  return (
    <div id="left_menu">
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/">Home</a>
        </Menu.Item>
        <Menu.Item key="evt3">
          <a href="/show/events">Upcoming Events</a>
        </Menu.Item>
        <Menu.Item key="evt">
          <a href="/list/event">Create Event</a>
        </Menu.Item>

        {/* <Menu.Item key="evt1">
          <a href="/show/myEvents">My Events</a>
        </Menu.Item> */}
      </Menu>
    </div>
  );
}

export default LeftMenu;
