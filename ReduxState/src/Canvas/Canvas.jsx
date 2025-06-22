import React from 'react';
import ColorStyle from './ColorStyle';
import FontStyle from './FontStyle';

function Canvas() {
  return (
    <div className="flex content-center justify-center items-center m-8">
      <ColorStyle />
      <FontStyle />
    </div>
  );
}

export default Canvas;
