import React from "react";
import { Switch, Route } from "react-router-dom";
import { MAIN_PAGE, TEST_PAGE } from "../constants/index";
import { SetupContext } from "../context/SetupContext";
import Main from "../pages/Main";
import Quiz from "../pages/Quiz";

function RoutingPage() {
  return (
    <Switch>
      <Route path={MAIN_PAGE} exact>
        <SetupContext>
          <Main />
        </SetupContext>
      </Route>
      <Route path={TEST_PAGE}>
        <Quiz />
      </Route>
      <Route>Not Found</Route>
    </Switch>
  );
}

export default RoutingPage;
