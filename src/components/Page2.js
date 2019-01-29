import React from "react";
import Navbar from "../src/components/layout/navbar/Index";
class Page extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}
export default Page;
