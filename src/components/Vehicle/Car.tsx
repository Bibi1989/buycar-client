import React, { useEffect } from "react";
import styled from "styled-components";
import { formatPrice } from "../../Utils/FormatPrice";
import { Descriptions, Col, Row } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { fetchCar } from "../../reducers/carRedcer/store";
import { useLocation } from "react-router-dom";
import { useQuery } from "../../Utils/searchQuery";

const Car = () => {
  const query = useQuery(useLocation);
  const dispatch = useDispatch();
  const car = useSelector(({ cars: { car } }: any) => car);

  console.log(car);
  console.log(query);

  useEffect(() => {
    fetchCar(dispatch, query.id);

    // eslint-disable-next-line
  }, [query.id]);
  return (
    <Container>
      <H1>
        {car && car.name} - {car && car.model} - {car && car.year}
      </H1>
      <Row gutter={[16, 16]} align='middle' style={{ width: "100%" }}>
        <Col span={12} xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
          <Image>
            <img src={car && car.photo_url} alt='cars poster' />
          </Image>
        </Col>
        <Col span={12} xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
          <Descriptions title='Car Details' bordered>
            <Descriptions.Item label='Car Make'>
              {car && car.name.toUpperCase()}
            </Descriptions.Item>
            <Descriptions.Item label='Car Model'>
              {car && car.model[0].toUpperCase() + car.model.slice(1)}
            </Descriptions.Item>
          </Descriptions>
          <Descriptions bordered>
            <Descriptions.Item label='Manufacturing Year'>
              {car && car.year}
            </Descriptions.Item>
            <Descriptions.Item label='Car Price'>
              ₦ {formatPrice(car && car.price)}
            </Descriptions.Item>
          </Descriptions>
          <Descriptions bordered>
            <Descriptions.Item label='Car Distance'>
              {formatPrice(car && car.distance)} KM
            </Descriptions.Item>
            <Descriptions.Item label='Fuel Type'>
              {car && car.fuel_type}
            </Descriptions.Item>
          </Descriptions>
          <Descriptions bordered>
            <Descriptions.Item label='Location'>
              {car && car.location}
            </Descriptions.Item>
          </Descriptions>
          <Descriptions bordered>
            <Descriptions.Item label='Car Discription'>
              {car && car.description}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </Container>
  );
};

export default Car;

const Container = styled.div`
  margin-bottom: 1em;
`;
const Image = styled.div`
  max-height: 100%;
  overflow: hidden;

  img {
    border-radius: 0.25em;
    width: 100%;
  }
`;
const H1 = styled.h1`
  text-align: center;
  color: #555555;
  padding: 1em 0;
  text-transform: uppercase;
`;
//  const Content = styled.div``
