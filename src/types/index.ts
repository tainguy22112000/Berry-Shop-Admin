import React from 'react';

import { CouponDataTypes } from '../store/coupon/couponType';

export interface IRowOrderDataProps {
  name: string;
  address: string;
  id: number;
  orders: string;
  date: string;
  status: string;
  action: string;
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}
export interface IRowUserDataProps {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  txtPhone: string;
  email: string;
  gender: Gender;
}

export interface IRowCouponDataProps {
  id: string;
  couponCode: string;
  couponOptions: string;
  couponValue: number;
  couponStartDate: {
    date: string;
    time: string;
  };
  couponEndDate: {
    date: string;
    time: string;
  };
  couponFreeShipping: boolean;
  couponProductType: string[];
  couponProductDetails: string;
  couponQuantity: number;
  couponNote: string;
}

export type IRowDataProps =
  | IRowOrderDataProps
  | IRowUserDataProps
  | IRowCouponDataProps;

export type Order = 'asc' | 'desc';

export interface ITableHeader {
  disablePadding: boolean;
  label: string;
  numeric: boolean;
}

export interface IOrderTableHeader extends ITableHeader {
  id: keyof IRowOrderDataProps;
}

export interface IUserTableHeader extends ITableHeader {
  id: keyof IRowUserDataProps;
}

export interface ICouponTableHeader extends ITableHeader {
  id: keyof IRowCouponDataProps;
}

export type IHeaderContentProps =
  | IOrderTableHeader
  | IUserTableHeader
  | ICouponTableHeader;

export interface ITableHeaderProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: any) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  headerContent: IHeaderContentProps[];
}
