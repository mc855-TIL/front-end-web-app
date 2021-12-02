import { ListOrdemResponse, OrdemResponse } from "../services/types";
import { ReactNode, createContext, useContext, useState } from "react";

import { filterValues } from "../Constants";
import { getOrderList } from "../services/ordem";

type AppContextType = {
  loading: boolean;
  searchResults: ListOrdemResponse;
  itemsList: ListOrdemResponse;
  getItemsList: () => void;
  searchItem: (query: string) => void;
  handleFilterResults: (obj: filterValues) => void
};

const AppContextDefaultValues: AppContextType = {
  loading: false,
  searchResults: null,
  itemsList: null,
  getItemsList: () => {},
  searchItem: (query: string) => {},
  handleFilterResults: (obj: filterValues) => {},
};

const AppContext = createContext<AppContextType>(AppContextDefaultValues);

export function useAppData() {
  return useContext(AppContext);
}

type Props = {
  children: ReactNode;
};

export function AppProvider({ children }: Props) {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<ListOrdemResponse>(null);
  const [itemsList, setItemsList] = useState<ListOrdemResponse>(null);
  const [filteredItemsList, setFilteredItemsList] =
    useState<ListOrdemResponse>(null);
  const [error, setError] = useState<any>(null);

  const getItemsList = async () => {
    try {
      setLoading(true);
      const data = await getOrderList();
      setItemsList(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const searchItem = async (itemName: string) => {
    try {
      setLoading(true);
      const data = await getOrderList({ pesquisa: itemName });
      setSearchResults(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterResults = (filterObject: filterValues) => {
    const { filterEnabled } = filterObject;

    if (filterEnabled.length === 0) return;

    let result: OrdemResponse[];
    filterEnabled.map((filter) => {
      if (filterObject[filter]) {
        result.concat(
          itemsList.itens.filter(
            (item) => item[filter] === filterObject[filter]
          )
        );
      }
    });
    setFilteredItemsList({ ...itemsList, itens: result });
    console.log(result);
  };

  const value = {
    loading,
    searchResults,
    itemsList,
    getItemsList,
    searchItem,
    handleFilterResults,
  };
  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  );
}
