import * as React from "react"
import { Link } from "react-router-dom"
import { RouteChildrenProps } from "react-router"

import { StyledNavigation } from "components/styles/layouts"
import { RouterContext } from "components/middlewares/router"

const { useContext, useEffect, useState } = React

const Navigations = {
  "/": "Index",
  "/b": "Index",
  "/c": "Index",
  "/d": "Index",
}

export function Navigation(props: any) {
  const routerContext: RouteChildrenProps<any> = useContext(RouterContext)
  const [currentPath, setCurrentPath] = useState(routerContext.location.pathname)

  useEffect(
    (): any => routerContext.history.listen(history => setCurrentPath(history.pathname)),
    [ routerContext ],
  )

  return (
    <StyledNavigation>
      {
        Object.entries(Navigations).map(([path, name]) => (
          <Link
            to={path}
            key={path}
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
