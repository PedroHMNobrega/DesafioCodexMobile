import React, {useState} from 'react';

export const DataContext = React.createContext();

const Provider = ({children}) => {
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');
  const [loading, setLoading] = useState(false);

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
        loading,
        setLoading,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default Provider;
