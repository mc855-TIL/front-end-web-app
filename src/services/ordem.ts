import {
  CreateOrderRequest,
  ListOrdemResponse,
  Order,
  UpdateOrderRequest,
} from "./types";

import { AxiosRequestConfig } from "axios";
import api from "../config/api";

const getOrderList = async (params?: any) => {
  try {
    const { data } = await api.get<ListOrdemResponse>("/ordens", { params });
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getMostRecentOrders = async () => {
  try {
    const { data } = await api.get<ListOrdemResponse>(`/ordens?ultimos=true`, {
      params: { auth: true },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

const createOrder = async (newOrder: CreateOrderRequest) => {
  try {
    const { order } = newOrder;
    const response = await api.post(
      "/ordens",
      { ...order },
      { params: { auth: true } }
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

const updateOrder = async (order: UpdateOrderRequest) => {
  try {
    const response = await api.patch("/ordens", order);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

const getOrderById = async (id: number) => {
  try {
    const { data } = await api.get<Order>(`/ordens/${id}`, {
      params: { auth: true },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getOrdersByName = async (name: string, auth = false) => {
  try {
    const response = await api.get<Order[]>(`/ordens/${name}`, {
      params: {
        auth,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

const deleteOrderByID = async (id: string) => {
  try {
    const response = await api.delete(`/ordens/${id}`);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export {
  getOrderList,
  createOrder,
  updateOrder,
  getOrderById,
  deleteOrderByID,
  getOrdersByName,
  getMostRecentOrders,
};
