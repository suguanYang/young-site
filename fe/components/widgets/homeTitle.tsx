import * as React from "react"

import { RouterContext } from "components/middlewares/router"

import { StyledArrow, HomeTitleDiv } from "components/styles/widgets"

const { useContext, useEffect, useState } = React

interface Titles {
  "/": string,
  "/lost": string,
  [k: string]: string,
}

const titles: Titles = {
  "/": "POSTS",
  "/lost": "SYSTEM ERROR",
}

function getTitle(path: string) {
  return titles[path] || "PERMISSION DENIED"
}

export default function HomeTitle() {
  const routerContext = useContext(RouterContext)
  const [title, setTitle] = useState(getTitle(routerContext.location.pathname))

  useEffect(
    (): any =>
      routerContext.history.listen(history => setTitle(getTitle(history.pathname))),
    [ routerContext ],
  )

  return (
    <HomeTitleDiv>
      <div className="left">
        <StyledArrow left={true}/>
        <StyledArrow left={true}/>
        <StyledArrow left={true}/>
      </div>
      { title }
      <div className="right">
        <StyledArrow right={true}/>
        <StyledArrow right={true}/>
        <StyledArrow right={true}/>
      </div>
    </HomeTitleDiv>
  )
}
