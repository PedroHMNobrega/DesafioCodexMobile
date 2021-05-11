import React, {useState} from 'react';

export const DataContext = React.createContext();

const Provider = ({children}) => {
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');

  function displayMessage(messageType, messageToDisplay) {
    setType(messageType);
    setMessage(messageToDisplay);
  }

  function resetMessage() {
    setMessage('');
  }

  return (
    <DataContext.Provider
      value={{
        message,
        type,
        displayMessage,
        resetMessage,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default Provider;
