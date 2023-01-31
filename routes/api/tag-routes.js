const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({include: [{ model: Product }]});

    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/:id', async (req, res) => {
  try {
    const tags = await Tag.findByPk(req.params.id,{include: [{ model: Product }]});

    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try{
    await Tag.update({ tag_name: "puce"}, {
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
  try { await Tag.destroy({
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
