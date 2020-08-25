import { Button, Tooltip } from "@assenti/rui-components";
import "@assenti/rui-components/css/index.css";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import LoginPage from "./Components/Auth";
import FooterApp from "./Components/Footer";
import Form from "./Components/Form";
import Header from "./Components/Header/index";
import List from "./Components/ListTodo";
import View from "./Components/View";

const App = () => {
  const [view, setView] = useState(false);

  //handle view
  const handleView = () => {
    setView(!view);
  };

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/home">
          {" "}
          <div className="root">
            <Header />
            <div className="content">
              <Form />
              <div className="btn-show">
                <Tooltip tooltip="Show">
                  <Button
                    className="view"
                    type="button"
                    onClick={handleView}
                    name={view ? "Task List" : "View task"}
                    size="medium"
                  />
                </Tooltip>
              </div>
              {!view && <List />}
              {view && <View />}
            </div>
            <FooterApp />
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
