import * as React from 'react';
import { Drawer } from 'baseui/drawer';

const drawer = (props) => {
  return (
    <Drawer
      isOpen={props.isOpen}
      autoFocus
      anchor={'left'}
      onClose={() => props.setIsOpen(false)}>
      <div>drawer content</div>
    </Drawer>
  );
};

export default drawer;
