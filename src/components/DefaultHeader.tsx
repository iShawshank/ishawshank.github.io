import React from 'react';

export default class DefaultHeader extends React.Component {
  render() {
    return (
      <div className="default-header w-full">
        <ul className="grid">
          <li>Home</li>
          <li>About Me</li>
          <li>Contact</li>
          <li>Simple Golf Stats</li>
        </ul>
      </div>
    )
  }
}