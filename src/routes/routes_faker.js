const express = require('express');
const { Router } = express;
const router = new Router();
const FakerController = require('../controllers/REST/Faker');
const Faker = new FakerController()

router.get('/', Faker.FakerController);

module.exports = router;
