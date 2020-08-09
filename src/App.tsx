import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Layout } from "antd";

import Layouts from "./Layout/Layout";

import "antd/dist/antd.css";
import Navbar from "./components/Navbar/Navbar";
import Car from "./components/Vehicle/Car";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Router>
      <LayoutStyle>
        <Header>
          <Navbar />
        </Header>
        <Content>
          <Switch>
            <Route exact path='/'>
              <Layouts />
            </Route>
            <Route exact path='/car'>
              <Car />
            </Route>
          </Switch>
        </Content>
        <Footer style={{ background: "gold" }}>Footer</Footer>
      </LayoutStyle>
    </Router>
  );
}

export default App;

const LayoutStyle = styled(Layout)`
  min-height: 100vh;
`;
