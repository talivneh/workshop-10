class StorageService {
  constructor() {
    //TODO: remove, items should be stored to DB using Item sequelize model
    this.players = [
      {
        "player_id": 1,
        "player_name": "David de Gea",
        "age": 25,
        "position": "Goalkeeper",
        "country": "Spain"
      },
      {
        "player_id": 2,
        "player_name": "Phil Jones",
        "age": 24,
        "position": "Defender",
        "country": "England"
      },
      {
        "player_id": 3,
        "player_name": "Marcos Rojo",
        "age": 27,
        "position": "Defender",
        "country": "Argentina"
      },
      {
        "player_id": 4,
        "player_name": "Chris Smalling",
        "age": 27,
        "position": "Defender",
        "country": "England"
      },
      {
        "player_id": 5,
        "player_name": "Daley Blind",
        "age": 28,
        "position": "Defender",
        "country": "Netherlands"
      },
      {
        "player_id": 6,
        "player_name": "Luke Shaw",
        "age": 21,
        "position": "Defender",
        "country": "England"
      },
      {
        "player_id": 7,
        "player_name": "Antonio Valencia",
        "age": 29,
        "position": "Defender",
        "country": "Ecuador"
      },
      {
        "player_id": 8,
        "player_name": "Matteo Darmian",
        "age": 24,
        "position": "Defender",
        "country": "Italy"
      },
      {
        "player_id": 9,
        "player_name": "Juan Mata",
        "age": 29,
        "position": "Midfielder",
        "country": "Spain"
      },
      {
        "player_id": 10,
        "player_name": "Michael Carrick",
        "age": 36,
        "position": "Midfielder",
        "country": "England"
      }];
  }

  getPlayers = () => this.players;

  getPlayer = (player_id) => {
    return this.players.find(i => i.player_id == player_id);
  };

  createPlayer = async player => {
    console.log(player);
    const {
      player_id,
      player_name,
      age,
      position,
      country
    } = player;

    this.players.push({
      player_id,
      player_name,
      age,
      position,
      country
    });
  };

  updatePlayer = async player => {
    const existingPlayer = this.getPlayer(player.player_id);
    existingPlayer.player_name = player.player_name;
    existingPlayer.age = player.age;
    existingPlayer.position = player.position;
    existingPlayer.country = player.country;
  };

  deletePlayer = playerId => {
    this.players = this.players.filter(i => i.player_id != playerId);
  };
}

module.exports = new StorageService();
