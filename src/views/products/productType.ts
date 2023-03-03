type ProductDetailsType = {
  aboutProduct: ProductAboutsType;
  fireBaseId: string;
  group?: string;
  id: string;
  mainIngredient?: string;
  mlAndPrice?: { [key: string]: { ml: string; price: number } };
  moreCombina?: Array<{ option: string; price: number }>;
  name: string;
  photo?: string[];
  status?: string;
  rickText?: Record<string, any>;
  price?: number;
};

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
  id?: string;
  group?: string;
};

type PropsProductAbout = {
  index: number;
  descripton1: string;
  label: string;
  photo: string;
  title: string;
};

type PropsProductOverview = {
  data: ProductOverviewType;
};

type MlAndPrice = { [key: string]: { ml: string; price: number } };

type MoreCombina = {
  options: string;
  price: number;
};

type ProductModalTypes = {
  labelTextContent?: string;
  labelTitle?: string;
  labelSucess?: string;
  labelCancel?: string;
  isOpenModal?: boolean;
  onSucess?: () => void;
  onCancel?: () => void;
};

type ProductSnackbarType = {
  isOpenSnackBar: boolean;
  status: 'success' | 'warning' | 'error' | 'info' | undefined;
  message: string;
  position: {
    vertical: 'top' | 'bottom';
    horizontal: 'right' | 'left' | 'center';
  };
};

export {
  MlAndPrice,
  MoreCombina,
  ProductAboutsType,
  ProductDetailsType,
  ProductModalTypes,
  ProductOverviewType,
  ProductSnackbarType,
  PropsProductAbout,
  PropsProductOverview,
};
