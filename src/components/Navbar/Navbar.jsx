import React from 'react';
import { Tabs, Tab } from '@mui/material';

function Navbar() {
  return (
    <Tabs
      value={false}
      onChange={() => {}}
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="secondary tabs example"
    >
      <Tab value="one" label="Item One" />
      <Tab value="two" label="Item Two" />
      <Tab value="three" label="Item Three" />
    </Tabs>
  );
}

export default Navbar;
