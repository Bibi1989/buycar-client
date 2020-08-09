import {
  fetchCarsAction,
  getCarMakeAction,
  getCarModelAction,
  loadingAction,
  errorAction,
  filterByMakeAction,
  filterByPriceAction,
  countAction,
  fetchCarAction,
} from "./actions";
import { PriceQueryType, AllQueryType } from "../../Interfaces/QueryInterface";

const count_url = `https://buyyourcar-api.herokuapp.com/api/v1/count`;
const cars_url = `https:buyyourcar-api.herokuapp.com/api/v1/cars`;
const make_url = `https://buyyourcar-api.herokuapp.com/api/v1/makes`;
const model_url = `https://buyyourcar-api.herokuapp.com/api/v1/models`;
const price_url = `https://buyyourcar-api.herokuapp.com/api/v1/prices`;
const all_url = `https://buyyourcar-api.herokuapp.com/api/v1/prices`;
const base_on_make_url = `https://buyyourcar-api.herokuapp.com/api/v1/cars/make`;

const single_url = `https://buyyourcar-api.herokuapp.com/api/v1/cars`;

export const fetchCars = async (dispatch: any, page: number, limit: number) => {
  try {
    dispatch(loadingAction(true));
    const response = await fetch(`${cars_url}?page=${page}&limit=${limit}`);
    const result: any = await response.json();
    dispatch(fetchCarsAction(result.data));
    dispatch(loadingAction(false));
  } catch (error) {
    dispatch(loadingAction(false));
    dispatch(errorAction(error.response));
  }
};

export const fetchCar = async (dispatch: any, id: string) => {
  try {
    dispatch(loadingAction(true));
    const response = await fetch(`${single_url}/${id}`);
    const result: any = await response.json();
    dispatch(fetchCarAction(result.data));
    dispatch(loadingAction(false));
  } catch (error) {
    dispatch(loadingAction(false));
    dispatch(errorAction(error.response));
  }
};

export const getCountOfCars = async (dispatch: any) => {
  try {
    // dispatch(loadingAction(true));
    const response = await fetch(count_url);
    const result: any = await response.json();
    dispatch(countAction(result.data));
    // dispatch(loadingAction(false));
  } catch (error) {
    // dispatch(loadingAction(false));
    dispatch(errorAction(error.response));
  }
};

export const getCarMakes = async (dispatch: any) => {
  try {
    const response = await fetch(make_url);
    const result: any = await response.json();
    dispatch(getCarMakeAction(result.data));
  } catch (error) {
    dispatch(getCarMakeAction([]));
    dispatch(errorAction(error.response));
  }
};
export const getCarModels = async (dispatch: any, make: string) => {
  try {
    const response = await fetch(`${model_url}/${make}`);
    const result: any = await response.json();
    dispatch(getCarModelAction(result.data));
  } catch (error) {
    dispatch(errorAction(error.response));
  }
};
export const filterByMake = async (dispatch: any, make: string) => {
  console.log({ make });
  try {
    const response = await fetch(`${base_on_make_url}/${make}`);
    const result: any = await response.json();
    dispatch(filterByMakeAction(result.data));
  } catch (error) {
    dispatch(errorAction(error.response));
  }
};
export const filterByPrice = async (dispatch: any, prices: PriceQueryType) => {
  console.log({ prices });
  try {
    const response = await fetch(
      `${price_url}?min=${prices.min}&max=${prices.max}`
    );
    const result: any = await response.json();
    dispatch(filterByPriceAction(result.data));
  } catch (error) {
    dispatch(errorAction(error.response));
  }
};
export const filterAll = async (dispatch: any, all: AllQueryType) => {
  console.log({ all });
  try {
    const response = await fetch(
      `${all_url}?min=${all.min}&max=${all.max}&make=${all.make}&model=${all.model}`
    );
    const result: any = await response.json();
    dispatch(filterByPriceAction(result.data));
  } catch (error) {
    dispatch(errorAction(error.response));
  }
};
