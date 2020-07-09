import { styled } from 'baseui';
import { useState } from 'react';
import Sidebar from './sidebar';

const Wrapper = styled('div', {});

function App(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <canvas></canvas>
      <div className='draw-over' onClick={() => setSidebarOpen(true)}>
        My App
      </div>
    </div>
  );
}

export default App;
