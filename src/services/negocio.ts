import {
  CreateOrderRequest,
  ListOrdemResponse,
  Order,
  UpdateOrderRequest,
} from "./types";

import { AxiosRequestConfig } from "axios";
import api from "../config/api";

export const createNegotiation = async () => {
  try {
    const response = await api.post(
      "/negocios",
      { id_ordem: 3, id_solicitante: 7 },
      { params: { auth: true } }
    );
    return response.status;
  } catch (err) {
    console.log(err);
  }
};
