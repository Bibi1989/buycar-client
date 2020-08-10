import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Menu, Select, Divider } from "antd";
import {
  RadarChartOutlined,
  QqOutlined,
  DollarOutlined,
  KeyOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getCarMakes,
  getCarModels,
  getCountOfCars,
} from "../../reducers/carRedcer/store";
import { formatPrice, prices } from "../../Utils/FormatPrice";
import { useHistory } from "react-router-dom";
import { searchParams } from "../../Utils/searchQuery";

const { SubMenu } = Menu;
const { Option }: any = Select;

interface SProps {
  make: string;
  model: string;
  min: string;
  max: string;
}

const Sidebar = () => {
  const [select, setSelect] = useState<SProps>({
    make: "",
    model: "",
    min: "",
    max: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const makes = useSelector(({ cars: { makes } }: any) => makes);
  const model = useSelector(({ cars: { model } }: any) => model);
  const count = useSelector(({ cars: { count } }: any) => count);

  useEffect(() => {
    getCarMakes(dispatch);
    getCarModels(dispatch, select.make);
    getCountOfCars(dispatch);

    // eslint-disable-next-line
  }, [select.make]);

  const handleSearch = () => {
    searchParams(history, select);
  };
  // const handleClick = () => {};

  return (
    <Container>
      <Divider orientation='center' style={{ width: "100%" }}>
        Filter Cars
      </Divider>
      <p className='count'> Cars Found!!!</p>
      <Button
        loading={false}
        type='primary'
        shape='round'
        icon={<KeyOutlined />}
        size='large'
        style={{ width: "100%", marginTop: "2em" }}
        onClick={() => history.push("/?page=1")}
      >
        All Cars ({count})
      </Button>
      <Menu style={{ width: "100%" }} mode='inline'>
        <SubMenu
          key='sub1'
          title={
            <span>
              <QqOutlined />
              <span>Car Makes</span>
            </span>
          }
        >
          <div style={{ padding: "1em", paddingLeft: "2em" }}>
            <Select
              defaultValue={select.make ? select.make : "Car Make"}
              style={{ width: "100%" }}
              onChange={(value: string) =>
                setSelect({ ...select, make: value })
              }
            >
              {makes.map((make: any) => (
                <Option value={make.make}>
                  {make.make} ({make.count})
                </Option>
              ))}
            </Select>
          </div>
        </SubMenu>
        <SubMenu
          key='sub2'
          title={
            <span>
              <RadarChartOutlined />
              <span>Car Models</span>
            </span>
          }
        >
          <div style={{ padding: "1em", paddingLeft: "2em" }}>
            <Select
              defaultValue='Car Makes'
              style={{ width: "100%" }}
              onChange={(value: string) =>
                setSelect({ ...select, model: value })
              }
            >
              <Option>Select a make</Option>
              {model &&
                model.map((mod: any) => (
                  <Option value={mod.model}>
                    {mod.model} ({mod.count})
                  </Option>
                ))}
            </Select>
          </div>
        </SubMenu>
        <SubMenu
          key='sub3'
          title={
            <span>
              <DollarOutlined />
              <span>Minimum Price</span>
            </span>
          }
        >
          <div style={{ padding: "1em", paddingLeft: "2em" }}>
            <Select
              defaultValue='Car Minimum Price'
              style={{ width: "100%" }}
              onChange={(value: string) => setSelect({ ...select, min: value })}
            >
              <Option>Minimum Prices</Option>
              {prices.map((price: number) => (
                <Option value={price}>{formatPrice(price)}</Option>
              ))}
            </Select>
          </div>
        </SubMenu>
        <SubMenu
          key='sub4'
          title={
            <span>
              <DollarOutlined />
              <span>Maximum Price</span>
            </span>
          }
        >
          <div style={{ padding: "1em", paddingLeft: "2em" }}>
            <Select
              defaultValue='Car Maximum Price'
              style={{ width: "100%" }}
              onChange={(value: string) => setSelect({ ...select, max: value })}
            >
              <Option>Maximum Prices</Option>
              {prices.map((price: number) => (
                <Option value={price}>{formatPrice(price)}</Option>
              ))}
            </Select>
          </div>
        </SubMenu>
      </Menu>
      <Button
        loading={false}
        type='primary'
        shape='round'
        icon={<KeyOutlined />}
        size='large'
        style={{ width: "100%", marginTop: "2em" }}
        onClick={handleSearch}
      >
        Search For Car
      </Button>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1em;
  border-radius: 0.3em;

  h2 {
    padding: 1em 0;
    padding-top: 0;
  }

  .count {
    text-align: center;
  }
`;
// const Container = styled.div``;
