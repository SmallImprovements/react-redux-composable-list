import React from 'react';

const CellMagic = ({ item, activeMagicSort }) =>
  <div>
    { !!activeMagicSort.component
      ? <activeMagicSort.component
        { ...activeMagicSort.resolve(item) }
      />
      : activeMagicSort.resolve(item)
    }
  </div>;

export default CellMagic;
