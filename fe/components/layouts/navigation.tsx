import * as React from "react"
import { Link } from "react-router-dom"

import { StyledNavigation } from "components/styles/layouts"
import { RouterContext } from "components/middlewares/router"

const { useContext, useEffect, useState } = React

const LOST_PATH = "/lost"

const Navigations = [
  ["/", "POSTS"],
  ["/concat", "CONCAT"],
  ["/about", "ABOUT"],
  [LOST_PATH, "FILE LOST"],
]

export function Navigation(props: any) {
  const routerContext = useContext(RouterContext)
  const [currentPath, setCurrentPath] = useState(routerContext.location.pathname)

  useEffect(
    (): any => routerContext.history.listen(history => setCurrentPath(history.pathname)),
    [ routerContext ],
  )

  return (
    <StyledNavigation>
      {
        Navigations.map(([path, name], index) => (
          <Link
            to={path}
            key={index}
            className={
              path === currentPath ? "nav-item active" : "nav-item"
            }>
            { name }
          </Link>
        ))
      }
    </StyledNavigation>
  )
}
