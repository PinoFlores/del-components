import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  color: 'success' | 'error' | 'danger';
}

export const ClientCard: FC<Props> = ({ children, ...props }) => {
  return (
    <div style={{ background: props.color === 'error' ? 'red' : '#FFF' }}>
      {children || `Enter some children`}
    </div>
  );
};
