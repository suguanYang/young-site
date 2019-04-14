import * as React from "react"

import { Navigation } from "components/layouts/navigation"

import { StyledHeader, StyledHeadLine } from "components/styles/layouts"

type HeaderProps = {
  title: string,
}

export default class Header extends React.Component<HeaderProps, any> {
  constructor(props: HeaderProps) {
    super(props)
  }

  render() {
    return (
      <header>
        <StyledHeader>
          <div className="title">{ this.props.title }</div>
        </StyledHeader>
        <StyledHeadLine />
        <Navigation />
      </header>
    )
  }
}
