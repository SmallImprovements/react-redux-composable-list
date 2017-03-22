import React from 'react';

const CellMagic = ({ item, activeMagicSort }) =>
  <div>
    { activeMagicSort.component
      ? <activeMagicSort.component
        { ...activeMagicSort.resolve(item) }
      />
      : activeMagicSort.resolve(item)
    }
  </div>;

CellMagic.propTypes = {
  item: React.PropTypes.object.isRequired,
  activeMagicSort: React.PropTypes.object.isRequired,
};

export default CellMagic;
