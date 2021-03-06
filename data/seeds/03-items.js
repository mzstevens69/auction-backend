const faker = require("faker");

const generateRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const createItem = () => ({
  item_name: faker.commerce.productName(),
  description: faker.lorem.paragraph(),
  item_end_time: faker.date.future(),
  img_url: faker.image.image(),
  price: faker.commerce.price(),
  seller_id: generateRandom(1, 5)
});

module.exports.seed = async function(knex, Promise) {
  const items = [];
  for (let i = 0; i < 10; i++) {
    items.push(createItem());
  }
  await knex("items").insert(items);
};
