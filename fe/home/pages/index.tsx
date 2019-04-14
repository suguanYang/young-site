import * as React from "react"
import { render } from "react-dom"

import Router from "components/middlewares/router"

import Header from "components/layouts/header"

class Index extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return(
      <Router>
        <div className="home-app">
          <Header title="SYSTEM CONTROL"></Header>
        </div>
      </Router>
    )
  }
}

render(
  <Index />,  document.querySelector("#app"),
)
