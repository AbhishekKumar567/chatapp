

import { Switch, Route, Redirect } from "react-router-dom"
import { Join } from "./component/Join/Join"
import { Ch } from "./component/chats/Ch"


export const App = () => {


  return (
    <>
      <Switch>
        <Route exact path="/" component={Join} />
        <Route exact path="/chat" component={Ch} />
        <Redirect to="/" />
      </Switch>

    </>
  );
}


