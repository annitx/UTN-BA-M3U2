const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/contacto', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/contacto.html'));
});

module.exports = router;