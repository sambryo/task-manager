import React, { useState } from 'react';
import { AddItemButton } from './styles';
import { NewItemForm } from './NewItemForm';

interface AddNewItemsProps {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
}

export const AddNewItem = (props: AddNewItemsProps) => {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, toggleButtonText, dark } = props;

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }
  return <button onClick={() => setShowForm(true)}>{toggleButtonText}</button>;
};
