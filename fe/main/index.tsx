import * as React from 'react'
import { render  } from 'react-dom'

class Index extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return(
      <div>asdas</div>
    )
  }
}

render(
  <Index />,  document.querySelector('#app')
)
