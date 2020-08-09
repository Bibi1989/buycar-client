import {
  FETCH_CARS,
  LOADING,
  ERROR,
  CAR_MAKE,
  CAR_MODEL,
  FILTER_PRICE,
  FILTER_ALL,
  FILTER_MAKE,
  COUNT,
  FETCH_CAR,
} from "./actions";

const initialState = {
  cars: [],
  car: null,
  makes: [],
  model: [],
  filter_make: [],
  filter_all: [],
  filter_price: [],
  count: 0,
  loading: false,
  error: null,
};

const CarReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_CARS:
      return {
        ...state,
        cars: [...action.payload],
      };
    case FETCH_CAR:
      return {
        ...state,
        car: action.payload,
      };
    case CAR_MAKE:
      return {
        ...state,
        makes: action.payload,
      };
    case CAR_MODEL:
      return {
        ...state,
        model: action.payload,
      };
    case FILTER_MAKE:
      return {
        ...state,
        filter_make: [...action.payload],
      };
    case FILTER_PRICE:
      return {
        ...state,
        filter_price: action.payload,
      };
    case FILTER_ALL:
      return {
        ...state,
        filter_all: action.payload,
      };
    case COUNT:
      return {
        ...state,
        count: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default CarReducer;
