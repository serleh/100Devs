const getOne = async (_) => {
  return 1;
};

getOne().then((value) => {
  console.log(value);
});

const test = async (_) => {
  const one = await getOne();
  console.log(one);
};

test();
