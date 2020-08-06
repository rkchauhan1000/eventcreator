import React from "react";
import { FaCode } from "react-icons/fa";

function LandingPage() {
  return (
    <>
      <div className="app">
        <p>
          <b>This is an event listing app where you can create events .</b>
        </p>
        <p>
          This app is made by using <b>MERN stack</b>.
        </p>
        <p>
          In the <b>Upcoming Events</b> section you can see all the upcoming
          events <br /> created by users , it will consist of event name ,
          venue,date, timings.
        </p>
        <p>
          In the <b>Create Event</b> section a user can create an event and list
          it <br /> and other users will be able to see it.
        </p>
        <p>
          This application has <b>Session Management</b> which will
          automatically logs out <br />
          the user after sometime.
        </p>
        <p>
          This app is fully <b>authenticated</b> non-regestered user can't
          access
          <br /> any unauthorized page. User will automatically be redirected to
          login page.
        </p>
        <br />
      </div>
    </>
  );
}

export default LandingPage;
