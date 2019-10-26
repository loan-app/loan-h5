import io from './axios';

// 获取用户账单列表
export const getOrderList = data => io.request({
  url: 'order/loan_order_records',
  method: 'post',
  data
});

// 获取订单详情
export const getOrderDetail = data => io.request({
  url: '/order/loan_order_detail',
  method: 'post',
  data: data
});

// 检验这个人是否能借多少钱 TODO
export const checkIsCanBorrow = data => io.request({
  url: '/order/loan_order_detail',
  method: 'post',
  data: data
});


