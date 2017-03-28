# Empty Enhancement

export default compose(
  withEmpty({ component: EmptyBecauseNoList }),
  withSelectables({ ids: [0] }),
  withPreselectables({ ids: [2, 3] }),
  withUnselectables({ ids: [4, 6] }),
  withFilter(),
  withEmpty({ component: EmptyBecauseFilter }),
  withSort(),
  withPaginate({ size: 10 }),
)(TodoList);

 ref Filter Enhancement