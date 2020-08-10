import React, { useEffect, useState } from "react";
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
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchCar(dispatch, query.id);

    // eslint-disable-next-line
  }, [query.id]);
  const image = car ? JSON.parse(car.photo_url)[index] : "";
  const imgArray = car ? JSON.parse(car.photo_url) : [];
  const handleImg = (i: number) => {
    setIndex(i);
  };
  return (
    <Container>
      <H1>
        {car && car.name} - {car && car.model} - {car && car.year}
      </H1>
      <Row gutter={[16, 16]} align='top' style={{ width: "100%" }}>
        <Col span={12} xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
          <Image>
            <img src={image} alt='cars poster' />
          </Image>
          <Ul>
            {imgArray.map((img: string, i: number) => (
              <Li key={img} onClick={() => handleImg(i)}>
                <img src={img} alt={img} />
              </Li>
            ))}
          </Ul>
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
  max-height: 75vh;
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
const Ul = styled.ul`
  display: flex;
  justify-content: flex-start;
  overflow-x: auto;
  margin-top: 10px;
  list-style: none;

  &::-webkit-scrollbar {
    height: 2px;
  }
`;
const Li = styled.li`
  height: 110px;
  margin-right: 5px;
  cursor: pointer;

  img {
    border-radius: 4px;
    width: 170px;
    height: 110px;
  }
`;
//  const Content = styled.div``
