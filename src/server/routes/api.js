const express = require('express');
const router = express.Router();
const storage = require('../services/storage_service');

// curl localhost:3042/players
router.get('/players', (_, res) => {
  res.send(storage.getPlayers());
});

// curl localhost:3042/player/1
router.get('/player/:player_id', (req, res) => {
  res.send(storage.getPlayer(req.params.player_id));
});

// curl -X POST localhost:3042/player   -H 'Content-Type: application/json'   -d '{ "player_id":99,"player_name":"player name","age":30,"position":"Attacker","country":"fr"}'
router.post('/player', async (req, res) => {
  await storage.createPlayer(req.body);
  res.end();
});

// curl -X PUT localhost:3042/player   -H 'Content-Type: application/json'   -d '{"player_id":99,"player_name":"player name","age":30,"position":"Attacker","country":"pt"}'
router.put('/player', async (req, res) => {
  await storage.updatePlayer(req.body);
  res.end();
});

// curl -X DELETE localhost:3042/player   -H 'Content-Type: application/json'   -d '{"player_id":99}'
router.delete('/player', (req, res) => {
  storage.deletePlayer(req.body.player_id);
  res.end();
});

module.exports = router;
