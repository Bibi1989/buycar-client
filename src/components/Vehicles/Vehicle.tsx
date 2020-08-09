import React from "react";
import { Row, Col } from "antd";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { formatPrice } from "../../Utils/FormatPrice";
import { viewCarParams } from "../../Utils/searchQuery";

const Vehicle = ({ car }: any) => {
  const history = useHistory();
  const {
    _id,
    name,
    model,
    year,
    location,
    color,
    description,
    photo_url,
    price,
  } = car;

  const query = {
    make: name,
    model,
    id: _id,
  };
  const handleNav = (id: any) => {
    viewCarParams(history, query);
    // history.push(`/car?${name}&${model}&${id}`);
  };
  return (
    <Row gutter={[16, 16]} style={{ width: "100%" }} align='middle'>
      <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
        <Image onClick={() => handleNav(_id)}>
          <img src={photo_url} alt='cars poster' />
        </Image>
      </Col>
      <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
        <Content color={color}>
          <h1 className='make'>
            <span>{name.toUpperCase()}</span>
            <span></span>
          </h1>
          <h2 className='model'>Car Model: {model}</h2>
          <p className='year'>Manufacturing Year: {year}</p>
          <p className='price'>Car Price: ₦ {formatPrice(price)}</p>
          <p className='location'>Location: {location}</p>
          <p className='description'>{`${description.slice(0, 50)}...`}</p>
        </Content>
      </Col>
    </Row>
  );
};

export default Vehicle;

const Image = styled.div`
  max-height: 100%;
  overflow: hidden;
  cursor: pointer;

  img {
    border-radius: 0.25em;
    width: 100%;
  }
`;
const Content = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p,
  h2,
  h1 {
    margin-bottom: 5px;
  }

  .make {
    display: flex;
    align-items: center;

    span:last-child {
      display: block;
      width: 30px;
      height: 15px;
      background: ${({ color }) =>
        color === "white" ? "#cccccc" : color ? color : "#aaaaaa"};
      margin-left: 1em;
      border-radius: 4px;
    }
  }
`;
