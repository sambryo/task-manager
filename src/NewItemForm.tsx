import React, { useState } from 'react';
import { NewItemFormContainer, NewItemButton, NewItemInput } from './styles';

interface NewItemsProps {
  onAdd(text: string): void;
}

export const NewItemForm = (props: NewItemsProps) => {
  const [text, setText] = useState('');
  const { onAdd } = props;
  return (
    <NewItemFormContainer>
      <NewItemInput
        value={text}
        onChange={(e) => setText((e.target as HTMLTextAreaElement).value)}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};
