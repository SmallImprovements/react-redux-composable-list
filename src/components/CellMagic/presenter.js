import PropTypes from 'prop-types';
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
  item: PropTypes.object.isRequired,
  activeMagicSort: PropTypes.object.isRequired,
};

export default CellMagic;
