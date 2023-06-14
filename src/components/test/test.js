import React    from "react";
import template from "./test.jsx";

class test extends React.Component {
  render() {
    return template.call(this);
  }
}

export default test;
