import React from "react";
import Navbar from "../components/layout/navbar/Index";
class Page extends React.Component {
  render() {
    return (
      <div>
        <Navbar value={this.props.value} />
        {this.props.children}
      </div>
    );
  }
}
export default Page;
