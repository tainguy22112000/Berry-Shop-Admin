type ProductAboutsType = {
  description1?: string;
  label?: string;
  photo?: string;
  title?: string;
  photoPosition?: string;
  qoue?: Record<string, any>;
};

type ProductOverviewType = {
  moreCombina?: {
    price: number;
    option: string;
  }[];
  mlAndPrice?: Record<string, any>;
  totalProductValue?: number;
  mainIngredient?: string;
  price?: number;
};

type PropsProductAbout = {
  data: ProductAboutsType;
  index: number;
  updateProductAbouts: (input: {
    data: ProductAboutsType;
    index: number;
  }) => void;
};

type PropsProductOverview = {
  data: ProductOverviewType;
};

type MlAndPrice = {[key: string] : {ml: string, price: number}};

type MoreCombina = {
  options: string;
  price: number;
}

export {
  MlAndPrice,
  MoreCombina,
  ProductAboutsType,
  ProductOverviewType,
  PropsProductAbout,
  PropsProductOverview,
};
