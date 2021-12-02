export interface OrdemResponse {
  id: number;
  item: string;
  acao: string;
  nome_instituicao: string;
  emprestimo: boolean;
  area_conhecimento: string;
}

export interface ListOrdemResponse {
  total: number;
  total_paginas: number;
  pagina_anterior: string;
  proxima_pagina: string;
  primeira_pagina: number;
  ultima_pagina: number;
  itens: OrdemResponse[];
}

export interface Order {
  item: string;
  descricao: string;
  acao: string;
  tipo: string;
  data_validade: string;
  data_publicacao: string;
  emprestimo: boolean;
  area_conhecimento: string;
  nome_instituicao: string;
  quantidade: string;
  id_usuario: number;
  nome: string;
  contato: string;
  email: string;
}

interface OrderRequest {
  item: string;
  descricao: string;
  acao: string;
  tipo: string;
  data_validade: string;
  emprestimo: boolean;
  area_conhecimento: string;
  quantidade: string;
  id_usuario: number;
}

export interface CreateOrderRequest {
  order: OrderRequest;
}
export interface UpdateOrderRequest {
  order: Order;
}

interface Detail {
  loc: string[];
  msg: string;
  type: string;
}
export interface CreateUpdateOrderResponseError {
  detail: Detail[];
}
