import * as React from "react"
import { History, Location } from "history"
import { BrowserRouter, Route, match } from "react-router-dom"

export const RouterContext = React.createContext({} as {
  history: History;
  location: Location<any>;
  match: match<any> | null;
})

export default ({ children }: any) => (
  <BrowserRouter>
    <Route>
      {(routeProps) => (
        <RouterContext.Provider value={routeProps}>
          {children}
        </RouterContext.Provider>
      )}
    </Route>
  </BrowserRouter>
)
