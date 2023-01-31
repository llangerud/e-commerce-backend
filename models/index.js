// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// N:M
Product.belongsToMany(Tag, { through: ProductTag, foreignKey: 'product_id' });
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: 'tag_id' });

// Tag.belongsToMany(Product,{
//   foreignKey: 'product_id',
// });
// Product.hasMany(Tag, {
//   foreignKey: 'product_id',
// });


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
