interface CouponCodeReducerType {
  type: string;
  payload: string | number;
}

type CouponReducerType = CouponCodeReducerType;

export type { CouponCodeReducerType, CouponReducerType };
