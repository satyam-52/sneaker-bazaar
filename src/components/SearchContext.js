import { createContext, useState } from "react";

export const SearchContext = createContext();

export function SearchProvider(props) {
  const [searchQuery, setSearchQuery] = useState("");

  return <SearchContext.Provider value={[searchQuery, setSearchQuery]}>{props.children}</SearchContext.Provider>;
}
