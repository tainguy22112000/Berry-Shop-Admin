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
}: ProductOverviewRowProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

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
    {
      name: 'price',
      title: 'Giá',
      content: data?.price,
      isEditMode: props.isEditMode,
      isNumber: true,
    },
  ];

  const [mockData, setMockData] = useState<any>(data.moreCombina);

  return (
    <Paper sx={{ padding: '0 5rem' }}>
      <Stack spacing={2}>
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
            Nguyên liệu thêm :
          </Typography>
          {/* <Stack spacing={2}>
            {data.moreCombina !== undefined
              ? data.moreCombina.map((item: any, index: number) => {
                  const handleCombinaChange = (
                    e: ChangeEvent<HTMLInputElement>,
                  ) => {
                    const { name, value } = e.target;
                    const myNextData = [...data.moreCombina];

                    const newData = myNextData.find((a) => a.index === index);

                    // const updateList = data.moreCombina.map((item: any) => {
                    //   if (item.index === index) {
                    //     return {
                    //       ...item,
                    //       [name]: [value],
                    //     };
                    //   }
                    //   return item;
                    // });

                    // newData.[name] = value;
                    console.log('new', newData);
                  };

                  const handleEditCombina = (nextCombina: any) => {
                    console.log('index', index);
                    data.moreCombina.map((t: any, index: number) => {
                      console.log(index);
                    });
                  };

                  return (
                    <Box key={props.id}>
                      {props.isEditMode ? (
                        <Stack direction="row" justifyContent="space-between">
                          <TextField
                            name="option"
                            value={item.option}
                            onChange={(e) =>
                              handleEditCombina({
                                ...data.more,
                                [e.target.name]: e.target.value,
                              })
                            }
                            size="small"
                            key={props.id}
                            sx={{ width: 300 }}
                          />

                          <TextField
                            name="price"
                            value={item.price}
                            onChange={handleCombinaChange}
                            size="small"
                            key={props.id}
                          />
                        </Stack>
                      ) : (
                        <Stack direction="row" justifyContent="space-between">
                          <Typography variant="body1" width={300}>
                            {item.option} {index}
                          </Typography>
                          <Typography variant="body1">
                            {item.price + ' VND'} {index}
                          </Typography>
                        </Stack>
                      )}
                    </Box>
                  );
                })
              : null}
          </Stack> */}

          {/* <Stack spacing={2}>
            {mockData.map((item: any, index: number) => {
              const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
                const { name, value } = e.target;
                console.log({ name }, { value });

                const myNextData = [...mockData];
                console.log('next', myNextData);
                const artwork = myNextData.find((a) => a.id === item.id);
                if (name === 'price') {
                  artwork[name] = parseInt(value);
                } else {
                  artwork[name] = value;
                }
                console.log('art', artwork);
                setMockData(myNextData);
              };

              return (
                <Box key={props.id}>
                  {props.isEditMode ? (
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      spacing={2}
                    >
                      <TextField
                        name="option"
                        value={item.option}
                        size="small"
                        onChange={handleOnChange}
                        key={props.id}
                        sx={{ width: 300 }}
                      />

                      <TextField
                        name="price"
                        value={item.price}
                        onChange={handleOnChange}
                        size="small"
                        key={props.id}
                        type="number"
                      />
                    </Stack>
                  ) : (
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="body1" width={300}>
                        {item.option}
                      </Typography>
                      <Typography variant="body1">
                        {item.price + ' VND'}
                      </Typography>
                    </Stack>
                  )}
                </Box>
              );
            })}
          </Stack> */}

          <Stack spacing={2}>
            {data.moreCombina !== undefined
              ? data.moreCombina.map((item: any) => {
                  const handleChangeCombina = (
                    e: ChangeEvent<HTMLInputElement>,
                  ) => {
                    const { name, value } = e.target;
                    const myNextData = [...data.moreCombina];

                    console.log('next', myNextData);
                    const selectedInput = myNextData.find(
                      (a) => a.id === item.id,
                    );

                    console.log('selected', selectedInput);

                    const newSelectedInput = {
                      ...selectedInput,
                      [name]: value,
                    };

                    console.log('newSelected', newSelectedInput);

                    setData({
                      ...data,
                      moreCombina: myNextData,
                    });
                  };

                  return (
                    <Box key={props.id}>
                      {props.isEditMode ? (
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          spacing={2}
                        >
                          <TextField
                            name="option"
                            value={item.option}
                            size="small"
                            onChange={handleChangeCombina}
                            key={props.id}
                            sx={{ width: 300 }}
                          />

                          <TextField
                            name="price"
                            value={item.price}
                            onChange={handleChangeCombina}
                            size="small"
                            key={props.id}
                            type="number"
                          />
                        </Stack>
                      ) : (
                        <Stack direction="row" justifyContent="space-between">
                          <Typography variant="body1" width={300}>
                            {item.option}
                          </Typography>
                          <Typography variant="body1">
                            {item.price + ' VND'}
                          </Typography>
                        </Stack>
                      )}
                    </Box>
                  );
                })
              : null}
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default ProductOverview;
