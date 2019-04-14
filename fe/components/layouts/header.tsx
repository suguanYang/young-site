import * as React from "react"

import { Navigation } from "components/layouts/navigation"

import { StyledHeader, StyledHeadLine } from "components/styles/layouts"
import HomeTitle from "components/widgets/homeTitle"

export default function Header(props: {
  title: string,
}) {
  return (
    <header>
      <StyledHeader>
        <div className="title">{ props.title }</div>
      </StyledHeader>
      <StyledHeadLine />
      <Navigation />
      <HomeTitle />
    </header>
  )
}
