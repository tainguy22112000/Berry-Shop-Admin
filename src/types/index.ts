import React from 'react';

export interface IRowOrderDataProps {
  name: string;
  address: string;
  id: number;
  orders: string;
  date: string;
  status: string;
  action: string;
}

export interface IRowUserDataProps {
  id: number;
  name: string;
  address: string;
  phone: string;
  loyalty: string;
  vote: number;
}

export type Order = 'asc' | 'desc';

export interface IOrderTableHeader {
  disablePadding: boolean;
  id: keyof IRowOrderDataProps;
  label: string;
  numeric: boolean;
}

export interface IUserTableHeader {
  disablePadding: boolean;
  id: keyof IRowUserDataProps;
  label: string;
  numeric: boolean;
}

export interface ITableHeaderProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: any) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}
