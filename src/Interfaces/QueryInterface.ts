export type PriceQueryType = {
  min: number;
  max: number;
};

export type MakeAndModelQueryType = {
  make: string;
  model: string;
};

export type AllQueryType = MakeAndModelQueryType & PriceQueryType;
