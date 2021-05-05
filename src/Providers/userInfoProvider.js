import React, {useState} from 'react';

export const DataContext = React.createContext();

const Provider = ({children}) => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  async function setUserInfo(newAge, newGender) {
    setAge(newAge);
    setGender(newGender);
  }

  return (
    <DataContext.Provider
      value={{
        age,
        gender,
        setUserInfo,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default Provider;
