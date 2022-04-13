import React from "react";
import DefaultHeader from "./DefaultHeader";

export default class DefaultLayout extends React.Component {
  render() {
    return (
      <div className="w-full min-h-screen">
        <DefaultHeader />
      </div>
    )
  }
}