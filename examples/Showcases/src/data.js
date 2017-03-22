import loremIpsum from 'lorem-ipsum';

const generateList = (count) => {
  const list = [];
  for (let i = 0; i <= count; i++) {
    list.push(generateItem(i));
  }
  return list;
};

const generateItem = (id) => ({
  id,
  title: loremIpsum(3, 'words'),
  comment: loremIpsum(1, 'sentences'),
  likes: Math.random(),
  votes: Math.random(),
});

export default generateList;
