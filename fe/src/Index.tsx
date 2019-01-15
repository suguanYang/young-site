import * as React from "react";
import { render } from "react-dom";

class Index extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return(
      <div>
        <h1>haha</h1>
      </div>
    );
  }
}

render(
  <Index />, window.document.querySelector("#app"),
);
