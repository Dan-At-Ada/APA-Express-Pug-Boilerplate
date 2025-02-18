const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.render('index', { title: 'This is my new website', foods: [] });
});

router.get('/count/:id', (req, res) => {
  console.log(req.params.id)
  if (req.params.id > 5) {
    res.render('index', { title: "more than 5", foods: [] })
  }
  res.render('index', { title: req.params.id, foods: [] })
})

router.get('/list', (req,res) => {
  console.log("List Web")
  const items = [
    {name: "Pizza"}, 
    {name: "Pasta"}, 
    {name: "Noodles"}, 
    {name: "KFC"}, 
    {name: "Sandwich"}
  ]
  res.render('index', {title: "This is a List", foods: items })
})


module.exports = router;
