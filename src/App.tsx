import React from 'react';
import { AppContainer } from './styles';
import { AddNewItem } from './AddNewItem';
import { Column } from './Column';
import { useAppState } from './AppStateContext';
const App = () => {
  const { state } = useAppState();
  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} index={i} />
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};

export default App;
