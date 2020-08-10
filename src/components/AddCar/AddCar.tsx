import React, { useState } from "react";
import { Form, Input, Button, Select } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { states } from "../../Utils/states";
import { addCar } from "../../reducers/carRedcer/store";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const { Option } = Select;

const AddCar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const error = useSelector(({ cars: { error } }: any) => error);
  let [values, setValues] = useState<any>({
    color: "",
    description: "",
    distance: "",
    fuel_type: "",
    location: "",
    model: "",
    name: "",
    file: [],
    price: "",
    year: "",
  });
  const handleInput = ({ target: { value, name } }: any) => {
    setValues({
      ...values,
      [name]: value,
    });
  };
  console.log([...values.file]);
  const addCarToSite = async () => {
    const form = new FormData();
    form.append("name", values.name.toLowerCase());
    form.append("model", values.model.toLowerCase());
    form.append("description", values.description);
    form.append("price", values.price);
    form.append("color", values.color);
    form.append("fuel_type", values.fuel_type.toLowerCase());
    form.append("distance", values.distance);
    Object.values(values.file).map((file: any) => form.append("file", file));
    form.append("year", values.year);
    form.append("location", values.location.toLowerCase());

    await addCar(dispatch, form);
    if (error) {
      history.push("/add");
    } else {
      history.push("/?page=1");
    }
  };
  return (
    <Formstyle
      name='normal_login'
      className='login-form'
      initialValues={{ remember: true }}
    >
      <h1>Sell Your Car</h1>

      <Form.Item
        name='name'
        rules={[{ required: true, message: "Please input Car Make!" }]}
      >
        <Inputstyle
          onChange={handleInput}
          name='name'
          prefix={<UserOutlined className='site-form-item-icon' />}
          placeholder='Car Make'
        />
      </Form.Item>
      <Form.Item
        name='model'
        rules={[{ required: true, message: "Please input Car Model!" }]}
      >
        <Inputstyle
          onChange={handleInput}
          name='model'
          prefix={<LockOutlined className='site-form-item-icon' />}
          placeholder='Car Model'
        />
      </Form.Item>
      <Form.Item
        name='price'
        rules={[{ required: true, message: "Please input your price!" }]}
      >
        <Inputstyle
          onChange={handleInput}
          name='price'
          prefix={<LockOutlined className='site-form-item-icon' />}
          placeholder='Car Cost'
        />
      </Form.Item>
      <Form.Item
        name='year'
        rules={[{ required: true, message: "Please input Year!" }]}
      >
        <Inputstyle
          onChange={handleInput}
          name='year'
          prefix={<LockOutlined className='site-form-item-icon' />}
          placeholder='Manufacturing year'
        />
      </Form.Item>
      <Form.Item name='distance'>
        <Inputstyle
          onChange={handleInput}
          name='distance'
          prefix={<LockOutlined className='site-form-item-icon' />}
          placeholder='Car Distance in KM'
        />
      </Form.Item>
      <Form.Item
        name='fuel_type'
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Inputstyle
          onChange={handleInput}
          name='fuel_type'
          prefix={<LockOutlined className='site-form-item-icon' />}
          placeholder='Fuel Type'
        />
      </Form.Item>
      <Form.Item>
        <Select
          onChange={(value: string) =>
            setValues({ ...values, location: value })
          }
          placeholder='Please select a country'
        >
          {states.map((state: string) => (
            <Option key={state} value={state.toLowerCase()}>
              {state}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name='color'
        rules={[{ required: true, message: "Please input your Password!" }]}
        style={{ width: "200px" }}
      >
        <Inputstyle
          type='color'
          onChange={handleInput}
          name='color'
          prefix={<LockOutlined className='site-form-item-icon' />}
          placeholder='Car Color'
        />
      </Form.Item>
      <Form.Item name='description'>
        <Input.TextArea
          placeholder='Car description'
          onChange={handleInput}
          name='description'
        />
      </Form.Item>
      <Form.Item name='file' label='Upload' extra=''>
        <Input
          type='file'
          onChange={(e: any) => setValues({ ...values, file: e.target.files })}
          accept='image/*'
          multiple
        />
      </Form.Item>

      <Form.Item>
        <Button
          type='primary'
          onClick={addCarToSite}
          className='login-form-button'
        >
          Add Car
        </Button>
      </Form.Item>
    </Formstyle>
  );
};

export default AddCar;

const Formstyle = styled(Form)`
  padding-top: 20px;
  width: 50%;
  margin: auto;
`;
const Inputstyle = styled(Input)`
  padding: 0.7em;
`;
