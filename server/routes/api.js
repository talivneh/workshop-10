const express = require('express');
const router = express.Router();
const storage = require('../services/storage_service');

// curl localhost:3042/players
router.get('/players', async (_, res) => {
  res.send(await storage.getPlayers());
});

// curl localhost:3042/player/1
router.get('/player/:player_id', async (req, res) => {
  res.send(await storage.getPlayer(req.params.player_id));
});

// curl -X POST localhost:3042/player   -H 'Content-Type: application/json'   -d '{ "player_id":99,"player_name":"player name","age":30,"position":"Attacker","country":"fr"}'
router.post('/player', async (req, res) => {
  await storage.createPlayer(req.body);
  res.end();
});

module.exports = router;
