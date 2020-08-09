import React, { useState, useEffect } from "react";
import { Row, Col, Divider, Empty } from "antd";
import styled from "styled-components";

import Vehicle from "./Vehicle";
import Spinner from "../../ui/Spinner";
import {
  fetchCars,
  filterByMake,
  filterByPrice,
} from "../../reducers/carRedcer/store";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "../../Utils/searchQuery";
import { useLocation, useHistory } from "react-router-dom";

const Vehicles = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const query = useQuery(useLocation);
  const [limit] = useState(5);

  const cars = useSelector(({ cars: { cars } }: any) => cars);
  const filter_make = useSelector(
    ({ cars: { filter_make } }: any) => filter_make
  );
  const filter_price = useSelector(
    ({ cars: { filter_price } }: any) => filter_price
  );
  // const filter_all = useSelector(({ cars: { filter_all } }: any) => filter_all);
  const count = useSelector(({ cars: { count } }: any) => count);
  const loading = useSelector(({ cars: { loading } }: any) => loading);

  let priceQuery = { min: Number(query.min), max: Number(query.max) };

  useEffect(() => {
    fetchCars(dispatch, Number(query.page), limit);
    filterByMake(dispatch, query.make);
    filterByPrice(dispatch, priceQuery);

    // eslint-disable-next-line
  }, [query.make, query.min, query.max, query.page]);

  let filter_cars =
    filter_make.length > 0
      ? filter_make
      : filter_price.length > 0
      ? filter_price
      : cars;

  const prev = () => {
    let num = Number(query.page) ? Number(query.page) - 1 : 0;
    if (num <= 0) {
      num = Math.ceil(count / limit);
    }
    history.push(`/?page=${num}`);
  };
  const next = () => {
    let num = Number(query.page) ? Number(query.page) + 1 : 2;
    if (num > Math.ceil(count / limit)) {
      num = 1;
    }
    history.push(`/?page=${num}`);
  };

  return (
    <Row style={{ width: "100%", paddingLeft: "1em" }}>
      <Col style={{ width: "100%" }}>
        <Divider orientation='left' style={{ width: "100%" }}>
          Cars
        </Divider>
        <div>
          {loading ? <Spinner /> : cars.length <= 0 && <Empty />}
          {filter_cars.map((car: any) => (
            <Vehicle key={car._id} car={car} />
          ))}
          {filter_cars.length > 0 && (
            <Ul className='paginate'>
              <li className='arrow_left' onClick={prev}>
                <span>&#8592;</span>
              </li>
              {Array(Math.ceil(count / limit))
                .fill(null)
                .map((v, i: number) => (
                  <li
                    key={i}
                    className={
                      Number(query.page) === i + 1 ? "active" : undefined
                    }
                    onClick={() => history.push(`/?page=${i + 1}`)}
                  >
                    {i + 1}
                  </li>
                ))}
              <li className='arrow_right' onClick={next}>
                <span>&#8594;</span>
              </li>
            </Ul>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default Vehicles;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em 0;

  li {
    /* padding: 0 1em; */
    width: 20px;
    height: 20px;
    background: #ddd;
    margin-right: 1em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &.active {
      background: teal;
      color: white;
      width: 25px;
      height: 25px;
    }
  }

  .arrow_right,
  .arrow_left {
    width: 30px;
    height: 30px;
    background: teal;
    color: white;
  }
`;
