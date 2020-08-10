export const ADD_CAR = "ADD_CAR";
export const FETCH_CARS = "FETCH_CARS";
export const FETCH_CAR = "FETCH_CAR";
export const CAR_MAKE = "CAR_MAKE";
export const CAR_MODEL = "CAR_MODEL";
export const FILTER_MAKE = "FILTER_MAKE";
export const FILTER_ALL = "FILTER_ALL";
export const FILTER_PRICE = "FILTER_PRICE";
export const COUNT = "COUNT";
export const LOADING = "LOADING";
export const ERROR = "ERROR";

export const addCarAction = (payload: any) => {
  return {
    type: ADD_CAR,
    payload,
  };
};
export const fetchCarsAction = (payload: any) => {
  return {
    type: FETCH_CARS,
    payload,
  };
};
export const fetchCarAction = (payload: any) => {
  return {
    type: FETCH_CAR,
    payload,
  };
};
export const getCarMakeAction = (payload: any) => {
  return {
    type: CAR_MAKE,
    payload,
  };
};
export const getCarModelAction = (payload: any) => {
  return {
    type: CAR_MODEL,
    payload,
  };
};
export const filterByMakeAction = (payload: any) => {
  return {
    type: FILTER_MAKE,
    payload,
  };
};
export const filterAllAction = (payload: any) => {
  return {
    type: FILTER_ALL,
    payload,
  };
};
export const filterByPriceAction = (payload: any) => {
  return {
    type: FILTER_PRICE,
    payload,
  };
};
export const countAction = (payload: any) => {
  return {
    type: COUNT,
    payload,
  };
};
export const loadingAction = (payload: any) => {
  return {
    type: LOADING,
    payload,
  };
};
export const errorAction = (payload: any) => {
  return {
    type: ERROR,
    payload,
  };
};
