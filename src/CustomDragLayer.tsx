import React from 'react';
import { XYCoord, useDragLayer } from 'react-dnd';
import { CustomDragLayerContainer } from './styles';
import { Column } from './Column';
import { NONAME } from 'dns';

export const CustomDragLayer: React.FC = () => {
  const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));
  return isDragging ? (
    <CustomDragLayerContainer>
      <div style={getItemStyles(currentOffset)}></div>
    </CustomDragLayerContainer>
  ) : null;
};

function getItemStyles(currentOffset: XYCoord | null): React.CSSProperties {
  if (!currentOffset) {
    return {
      display: 'none',
    };
  }
  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}
