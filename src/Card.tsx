import React, { useRef } from 'react';
import { CardDragItem } from './DragItem';
import { CardContainer } from './styles';
import { useDrop } from 'react-dnd';
import { useItemDrag } from './useItemDrag';
import { useAppState } from './AppStateContext';

interface CardProps {
  text: string;
  index: number;
  id: string;
  columnId: string;
}

export const Card = ({ text, index, id, columnId }: CardProps) => {
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({ type: 'CARD', index, text, id, columnId });
  const [, drop] = useDrop({
    accept: 'CARD',
    hover(item: CardDragItem) {
      if (item.id === id) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;
      const sourceColumn = item.columnId;
      const targetColumn = columnId;

      dispatch({
        type: 'MOVE_TASK',
        payload: { dragIndex, hoverIndex, sourceColumn, targetColumn },
      });
      item.index = hoverIndex;
      item.columnId = targetColumn;
    },
  });
  drag(drop(ref));
  return <CardContainer>{text}</CardContainer>;
};
