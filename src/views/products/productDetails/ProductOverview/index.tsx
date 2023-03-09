/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Rating,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';

interface ProductOverviewRowProps {
  name: string;
  title: string;
  isEditMode?: boolean;
  data: any;
  content: any;
  children?: React.ReactNode;
  // handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setData: (data: any) => void;
  isNumber?: boolean;
}

const ProductOverviewRow = ({
  name,
  title,
  isEditMode = false,
  data,
  children,
  content,
  setData,
  // handleInputChange,
  isNumber = false,
}: // handleInputChange,
ProductOverviewRowProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const isListItem = typeof content === 'object';
  console.log(isListItem);

  console.log(content);

  useEffect(() => {}, [isEditMode]);
  return (
    <Stack direction="row" spacing={10} alignItems="center">
      <Typography variant="h4" width={150}>
        {title} :
      </Typography>

      <Box>
        {isEditMode ? (
          <TextField
            name={name}
            value={content}
            onChange={handleInputChange}
            size="small"
            sx={{ width: 400 }}
            type={isNumber ? 'number' : ''}
          />
        ) : (
          <Typography variant="body1">{content}</Typography>
        )}
      </Box>
    </Stack>
  );
};

const ProductOverview = (props: any) => {
  const [data, setData] = useState(props);
  console.log('data', data);
  console.log('data q12', props.overviewProduct?.moreCombina);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  useEffect(() => {
    setData(props.overviewProduct);
  }, [props.overviewProduct]);

  useEffect(() => {
    props.updateProductOverview(data);
  }, [data]);

  useEffect(() => {}, [props.isEditMode]);

  const productOverviewContent = [
    {
      name: 'id',
      title: 'ID',
      content: data.id,
    },
    {
      name: 'name',
      title: 'Tên sản phẩm',
      content: data?.name,
      isEditMode: props.isEditMode,
    },
    {
      name: 'mainIngredient',
      title: 'Nguyên liệu chính',
      content: data?.mainIngredient,
      isEditMode: props.isEditMode,
    },
    {
      name: 'group',
      title: 'Nhóm',
      content: data?.group,
      isEditMode: props.isEditMode,
    },
    {
      name: 'amount',
      title: 'Số lượng',
      content: data?.amount,
      isEditMode: props.isEditMode,
      isNumber: true,
    },
    // {
    //   name: 'moreCombina',
    //   title: 'Thành phần',
    //   content: props.overviewProduct?.moreCombina,
    //   isEditMode: props.isEditMode,
    // },
    // {
    //   name: 'mlAndPrice',
    //   title: 'Dung tích',
    //   content: data?.mlAndPrice['250ml'].ml,
    //   isEditMode: props.isEditMode,
    // },
    // {
    //   title: 'Thành phần',
    //   data: data?.moreCombina,
    //   isEditMode: props.isEditMode,
    // },
    // {
    //   title: 'Dung tích',
    //   data: data?.mlAndPrice,
    //   isEditMode: props.isEditMode,
    // },
    {
      name: 'price',
      title: 'Giá',
      content: data?.price,
      isEditMode: props.isEditMode,
      isNumber: true,
    },
  ];

  return (
    <Paper sx={{ padding: '0 5rem' }}>
      <Stack spacing={2}>
        {/* <Typography variant="h5">ID: {data.id}</Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="h5">Đánh giá : </Typography>
          <Rating name="read-only" value={5} readOnly />
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="h5">Nhóm : </Typography>
          <Box>
            {props.isEditMode ? (
              <TextField
                name="group"
                value={data.group}
                onChange={handleInputChange}
                size="small"
                fullWidth={false}
              />
            ) : (
              <Typography variant="body1">{data.group} </Typography>
            )}
          </Box>
        </Stack>
        <Divider />
        <Stack direction="column">
          <Stack>
            <Typography variant="h5">Nguyên liệu chính</Typography>
          </Stack>
          <Stack sx={{ paddingTop: '8px' }}>
            {props.isEditMode ? (
              <TextField
                name="mainIngredient"
                value={data.mainIngredient}
                onChange={handleInputChange}
                size="small"
              />
            ) : (
              data.mainIngredient
            )}
          </Stack>
        </Stack>
        <Divider />

        <Stack direction="column">
          <Stack>
            <Typography variant="h5">Giá</Typography>
          </Stack>
          <Stack sx={{ paddingTop: '8px' }}>
            {props.isEditMode ? (
              <TextField
                name="price"
                value={data.price}
                type="number"
                onChange={handleInputChange}
                size="small"
              />
            ) : (
              data.price
            )}
          </Stack>
        </Stack>
        <Divider />

        <Stack>
          <Stack>
            <Typography variant="h5">Số lượng</Typography>
          </Stack>
          <Box sx={{ paddingTop: '8px' }}>
            {props.isEditMode ? (
              <TextField
                name="price"
                value={data.amount}
                type="number"
                onChange={handleInputChange}
                size="small"
              />
            ) : (
              data.amount
            )}
          </Box>
        </Stack>
        <Divider />

        <Stack direction="column">
          <Stack>
            <Typography variant="h5">Thành phần</Typography>
          </Stack>
          <Stack sx={{ paddingTop: '8px' }}>
            {props.isEditMode ? (
              <TextField
                name="price"
                value={data.amount}
                type="number"
                onChange={handleInputChange}
                size="small"
              />
            ) : (
              data.amount
            )}
          </Stack>
        </Stack>
        <Divider />

        <Stack direction="column">
          <Stack>
            <Typography variant="h5">Dung tích</Typography>
          </Stack>
          <Stack sx={{ paddingTop: '8px' }}>
            {props.isEditMode ? (
              <TextField
                name="price"
                value={data.amount}
                type="number"
                onChange={handleInputChange}
                size="small"
              />
            ) : (
              data.amount
            )}
          </Stack>
        </Stack>
        <Divider /> */}
        {productOverviewContent.map((row) => (
          <>
            <ProductOverviewRow
              {...row}
              // handleInputChange={handleInputChange}
              setData={setData}
              data={data}
              key={row.title}
            />
            <Divider />
          </>
        ))}

        <Stack direction="row" spacing={10}>
          <Typography variant="h4" width={150}>
            Thành phần :
          </Typography>
          <Stack spacing={2}>
            {props.overviewProduct?.moreCombina.map((item: any) => (
              <Box key={props.id}>
                {props.isEditMode ? (
                  <TextField
                    name="moreCombina"
                    value={item.option}
                    onChange={handleInputChange}
                    sx={{ width: 400 }}
                    size="small"
                    key={props.id}
                  />
                ) : (
                  <Typography variant="body1">{item.option}</Typography>
                )}
              </Box>
            ))}
          </Stack>
        </Stack>

        {/* <Stack direction="row" spacing={10}>
          <Typography variant="h4" width={150}>
            Dung tích :
          </Typography>
          <Stack spacing={2} direction="column">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <Stack direction="row" spacing={3} alignItems="center">
                  <FormControlLabel
                    value="female"
                    control={<Radio size="small" />}
                    label={props.overviewProduct?.mlAndPrice['250ml'].ml}
                  />
                  <Typography variant="body1">Giá : </Typography>
                  <Typography variant="body1">
                    {props.overviewProduct?.mlAndPrice['250ml'].price} VND
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={3} alignItems="center">
                  <FormControlLabel
                    value="female"
                    control={<Radio size="small" />}
                    label={props.overviewProduct?.mlAndPrice['350ml'].ml}
                  />
                  <Typography variant="body1">Giá : </Typography>
                  <Typography variant="body1">
                    {props.overviewProduct?.mlAndPrice['350ml'].price} VND
                  </Typography>
                </Stack>
              </RadioGroup>
            </FormControl>
          </Stack>
        </Stack> */}
      </Stack>
    </Paper>
  );
};

export default ProductOverview;
