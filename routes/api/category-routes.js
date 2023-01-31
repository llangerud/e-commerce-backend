const router = require('express').Router();
// const { json } = require('sequelize/types');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/' ,async (req, res) => {
  try {
    const categories = await Category.findAll({include: [{ model: Product }]});

    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  try {
    const categories = await Category.findByPk(req.params.id,{include: [{ model: Product }]});

    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post('/',async (req, res) => {
    try {
      const newCategory = await Category.create({
        category_name: req.body.category_name,
      });
      res.status(200).json(newCategory);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.put('/:id', async (req, res) => {
  try{
    await Category.update({ category_name: "umbrella"}, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(`updated`);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try { await Category.destroy({
    where: {
      id: req.params.id
    }
  });
  res.status(200).json('deleted');
} catch (err) {
  res.status(400).json(err);
}
});

module.exports = router;
