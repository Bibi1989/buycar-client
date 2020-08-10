import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Layout } from "antd";

import Layouts from "./Layout/Layout";

import "antd/dist/antd.css";
import Navbar from "./components/Navbar/Navbar";
import Car from "./components/Vehicle/Car";
import { useSelector } from "react-redux";
import Spinner from "./ui/Spinner";
import AddCar from "./components/AddCar/AddCar";

const { Header, Footer, Content } = Layout;

function App() {
  const loading = useSelector(({ cars: { loading } }: any) => loading);
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
            <Route exact path='/car/:make/:model'>
              {loading && <Spinner />}
              <Car />
            </Route>
            <Route exact path='/add'>
              <AddCar />
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
