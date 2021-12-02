export enum AREAS {
  BIOLOGICAS = "Biológicas",
  EXATAS = "Exatas",
  HUMANAS = "Humanas",
  TECNOLOGIAS = "Tecnologias",
}

export enum ITEM_TYPE {
  INSUMO = "I",
  LIVRO = "L",
}

export enum ITEM_ACTION_TYPE {
  OFERTA = "O",
  PEDIDO = "P",
}

export const itemActionType = {
  ["P"]: "Pedido",
  ["O"]: "Oferta",
};

export const itemType = {
  ["L"]: "Livro",
  ["I"]: "Insumo",
};

type filterTypes = "tipo" | "emprestimo" | "area_do_conhecimento" | "acao";

export interface filterValues {
  filterEnabled: filterTypes[];
  ["tipo"]?: typeof ITEM_TYPE;
  ["emprestimo"]?: boolean;
  ["area_do_conhecimento"]?: AREAS[];
  ["acao"]?: ITEM_ACTION_TYPE;
}
