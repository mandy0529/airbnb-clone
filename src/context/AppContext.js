import React, {useContext, useState} from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const changeSearchBtn = () => {
    setShowSearch((prev) => !prev);
  };
  return (
    <AppContext.Provider
      value={{showSearch, changeSearchBtn, startDate, endDate}}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default AppProvider;
