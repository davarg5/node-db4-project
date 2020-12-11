const express = require('express');
const router = express.Router();

const Cookbook = require('./cookbook-model');

router.get('/recipes', (req, res) => {
    Cookbook.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        });
});

router.get('/recipes/:id/shoppinglist', (req, res) => {
    
});

router.get('/recipes/:id/instructions', (req, res) => {

});

router.get('/ingredients/:id/recipes', (req, res) => {
    
});

module.exports = router;