import React, { Component } from 'react'

export default ({ children, nowrap }) => (
  <div className="container-fluid">
    <div className={`container ${nowrap ? '' : 'wrapper'}`}>{children}</div>
  </div>
)
