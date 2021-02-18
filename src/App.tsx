import React from 'react';
import { AppContainer } from './styles';
import { AddNewItem } from './AddNewItem';
import { Column } from './Column';
import { Card } from './Card';

const App = () => {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Genereate app Scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};

export default App;
