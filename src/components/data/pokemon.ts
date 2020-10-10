import { types } from "./types";

// export const pokemons = [
//   { id: 1, name: "Amoongus", type: [types.grass, types.poison] },
//   { id: 2, name: "Primarina", type: [types.water, types.fairy] },
//   { id: 3, name: "Arcanine", type: [types.fire] },
//   { id: 4, name: "Talonflame", type: [types.fire, types.flying] },
// ];

export const pokemons = [
  {
    national_number: "001",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png",
      large: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif",
    },
    name: "Bulbasaur",
    type: [types.grass, types.poison],
    total: 318,
    hp: 45,
    attack: 49,
    defense: 49,
    sp_atk: 65,
    sp_def: 65,
    speed: 45,
  },
  {
    national_number: "002",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ivysaur.png",
      large: "https://img.pokemondb.net/artwork/ivysaur.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif",
    },
    name: "Ivysaur",
    type: [types.grass, types.poison],
    total: 405,
    hp: 60,
    attack: 62,
    defense: 63,
    sp_atk: 80,
    sp_def: 80,
    speed: 60,
  },
  {
    national_number: "003",
    evolution: { name: "Mega Venusaur" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venusaur.png",
      large: "https://img.pokemondb.net/artwork/venusaur.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif",
    },
    name: "Venusaur",
    type: [types.grass, types.poison],
    total: 625,
    hp: 80,
    attack: 100,
    defense: 123,
    sp_atk: 122,
    sp_def: 120,
    speed: 80,
  },
  {
    national_number: "003",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venusaur.png",
      large: "https://img.pokemondb.net/artwork/venusaur.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif",
    },
    name: "Venusaur",
    type: [types.grass, types.poison],
    total: 525,
    hp: 80,
    attack: 82,
    defense: 83,
    sp_atk: 100,
    sp_def: 100,
    speed: 80,
  },
  {
    national_number: "004",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charmander.png",
      large: "https://img.pokemondb.net/artwork/charmander.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif",
    },
    name: "Charmander",
    type: [types.fire],
    total: 309,
    hp: 39,
    attack: 52,
    defense: 43,
    sp_atk: 60,
    sp_def: 50,
    speed: 65,
  },
  {
    national_number: "005",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charmeleon.png",
      large: "https://img.pokemondb.net/artwork/charmeleon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif",
    },
    name: "Charmeleon",
    type: [types.fire],
    total: 405,
    hp: 58,
    attack: 64,
    defense: 58,
    sp_atk: 80,
    sp_def: 65,
    speed: 80,
  },
  {
    national_number: "006",
    evolution: { name: "Mega Charizard X" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charizard.png",
      large: "https://img.pokemondb.net/artwork/charizard.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif",
    },
    name: "Charizard",
    type: [types.fire, types.dragon],
    total: 634,
    hp: 78,
    attack: 130,
    defense: 111,
    sp_atk: 130,
    sp_def: 85,
    speed: 100,
  },
  {
    national_number: "006",
    evolution: { name: "Mega Charizard Y" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charizard.png",
      large: "https://img.pokemondb.net/artwork/charizard.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif",
    },
    name: "Charizard",
    type: [types.fire, types.flying],
    total: 634,
    hp: 78,
    attack: 104,
    defense: 78,
    sp_atk: 159,
    sp_def: 115,
    speed: 100,
  },
  {
    national_number: "006",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charizard.png",
      large: "https://img.pokemondb.net/artwork/charizard.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif",
    },
    name: "Charizard",
    type: [types.fire, types.flying],
    total: 534,
    hp: 78,
    attack: 84,
    defense: 78,
    sp_atk: 109,
    sp_def: 85,
    speed: 100,
  },
  {
    national_number: "007",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/squirtle.png",
      large: "https://img.pokemondb.net/artwork/squirtle.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif",
    },
    name: "Squirtle",
    type: [types.water],
    total: 314,
    hp: 44,
    attack: 48,
    defense: 65,
    sp_atk: 50,
    sp_def: 64,
    speed: 43,
  },
  {
    national_number: "008",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wartortle.png",
      large: "https://img.pokemondb.net/artwork/wartortle.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif",
    },
    name: "Wartortle",
    type: [types.water],
    total: 405,
    hp: 59,
    attack: 63,
    defense: 80,
    sp_atk: 65,
    sp_def: 80,
    speed: 58,
  },
  {
    national_number: "009",
    evolution: { name: "Mega Blastoise" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/blastoise.png",
      large: "https://img.pokemondb.net/artwork/blastoise.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif",
    },
    name: "Blastoise",
    type: [types.water],
    total: 630,
    hp: 79,
    attack: 103,
    defense: 120,
    sp_atk: 135,
    sp_def: 115,
    speed: 78,
  },
  {
    national_number: "009",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/blastoise.png",
      large: "https://img.pokemondb.net/artwork/blastoise.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif",
    },
    name: "Blastoise",
    type: [types.water],
    total: 530,
    hp: 79,
    attack: 83,
    defense: 100,
    sp_atk: 85,
    sp_def: 105,
    speed: 78,
  },
  {
    national_number: "010",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/caterpie.png",
      large: "https://img.pokemondb.net/artwork/caterpie.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/caterpie.gif",
    },
    name: "Caterpie",
    type: [types.bug],
    total: 195,
    hp: 45,
    attack: 30,
    defense: 35,
    sp_atk: 20,
    sp_def: 20,
    speed: 45,
  },
  {
    national_number: "011",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/metapod.png",
      large: "https://img.pokemondb.net/artwork/metapod.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/metapod.gif",
    },
    name: "Metapod",
    type: [types.bug],
    total: 205,
    hp: 50,
    attack: 20,
    defense: 55,
    sp_atk: 25,
    sp_def: 25,
    speed: 30,
  },
  {
    national_number: "012",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/butterfree.png",
      large: "https://img.pokemondb.net/artwork/butterfree.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/butterfree.gif",
    },
    name: "Butterfree",
    type: [types.bug, types.flying],
    total: 395,
    hp: 60,
    attack: 45,
    defense: 50,
    sp_atk: 90,
    sp_def: 80,
    speed: 70,
  },
  {
    national_number: "013",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/weedle.png",
      large: "https://img.pokemondb.net/artwork/weedle.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/weedle.gif",
    },
    name: "Weedle",
    type: [types.bug, types.poison],
    total: 195,
    hp: 40,
    attack: 35,
    defense: 30,
    sp_atk: 20,
    sp_def: 20,
    speed: 50,
  },
  {
    national_number: "014",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kakuna.png",
      large: "https://img.pokemondb.net/artwork/kakuna.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/kakuna.gif",
    },
    name: "Kakuna",
    type: [types.bug, types.poison],
    total: 205,
    hp: 45,
    attack: 25,
    defense: 50,
    sp_atk: 25,
    sp_def: 25,
    speed: 35,
  },
  {
    national_number: "015",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/beedrill.png",
      large: "https://img.pokemondb.net/artwork/beedrill.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/beedrill.gif",
    },
    name: "Beedrill",
    type: [types.bug, types.poison],
    total: 395,
    hp: 65,
    attack: 90,
    defense: 40,
    sp_atk: 45,
    sp_def: 80,
    speed: 75,
  },
  {
    national_number: "015",
    evolution: { name: "Mega Beedrill" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/beedrill.png",
      large: "https://img.pokemondb.net/artwork/beedrill.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/beedrill.gif",
    },
    name: "Beedrill",
    type: [types.bug, types.poison],
    total: 495,
    hp: 65,
    attack: 150,
    defense: 40,
    sp_atk: 15,
    sp_def: 80,
    speed: 145,
  },
  {
    national_number: "016",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pidgey.png",
      large: "https://img.pokemondb.net/artwork/pidgey.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgey.gif",
    },
    name: "Pidgey",
    type: [types.normal, types.flying],
    total: 251,
    hp: 40,
    attack: 45,
    defense: 40,
    sp_atk: 35,
    sp_def: 35,
    speed: 56,
  },
  {
    national_number: "017",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pidgeotto.png",
      large: "https://img.pokemondb.net/artwork/pidgeotto.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeotto.gif",
    },
    name: "Pidgeotto",
    type: [types.normal, types.flying],
    total: 349,
    hp: 63,
    attack: 60,
    defense: 55,
    sp_atk: 50,
    sp_def: 50,
    speed: 71,
  },
  {
    national_number: "018",
    evolution: { name: "Mega Pidgeot" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pidgeot.png",
      large: "https://img.pokemondb.net/artwork/pidgeot.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeot.gif",
    },
    name: "Pidgeot",
    type: [types.normal, types.flying],
    total: 579,
    hp: 83,
    attack: 80,
    defense: 80,
    sp_atk: 135,
    sp_def: 80,
    speed: 121,
  },
  {
    national_number: "018",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pidgeot.png",
      large: "https://img.pokemondb.net/artwork/pidgeot.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeot.gif",
    },
    name: "Pidgeot",
    type: [types.normal, types.flying],
    total: 479,
    hp: 83,
    attack: 80,
    defense: 75,
    sp_atk: 70,
    sp_def: 70,
    speed: 101,
  },
  {
    national_number: "019",
    evolution: { name: "Alolan Rattata" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rattata.png",
      large: "https://img.pokemondb.net/artwork/rattata.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/rattata.gif",
    },
    name: "Rattata",
    type: [types.dark, types.normal],
    total: 253,
    hp: 30,
    attack: 56,
    defense: 35,
    sp_atk: 25,
    sp_def: 35,
    speed: 72,
  },
  {
    national_number: "019",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rattata.png",
      large: "https://img.pokemondb.net/artwork/rattata.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/rattata.gif",
    },
    name: "Rattata",
    type: [types.normal],
    total: 253,
    hp: 30,
    attack: 56,
    defense: 35,
    sp_atk: 25,
    sp_def: 35,
    speed: 72,
  },
  {
    national_number: "020",
    evolution: { name: "Alolan Raticate" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/raticate.png",
      large: "https://img.pokemondb.net/artwork/raticate.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/raticate.gif",
    },
    name: "Raticate",
    type: [types.dark, types.normal],
    total: 413,
    hp: 75,
    attack: 71,
    defense: 70,
    sp_atk: 40,
    sp_def: 80,
    speed: 77,
  },
  {
    national_number: "020",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/raticate.png",
      large: "https://img.pokemondb.net/artwork/raticate.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/raticate.gif",
    },
    name: "Raticate",
    type: [types.normal],
    total: 413,
    hp: 55,
    attack: 81,
    defense: 60,
    sp_atk: 50,
    sp_def: 70,
    speed: 97,
  },
  {
    national_number: "021",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/spearow.png",
      large: "https://img.pokemondb.net/artwork/spearow.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/spearow.gif",
    },
    name: "Spearow",
    type: [types.normal, types.flying],
    total: 262,
    hp: 40,
    attack: 60,
    defense: 30,
    sp_atk: 31,
    sp_def: 31,
    speed: 70,
  },
  {
    national_number: "022",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/fearow.png",
      large: "https://img.pokemondb.net/artwork/fearow.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/fearow.gif",
    },
    name: "Fearow",
    type: [types.normal, types.flying],
    total: 442,
    hp: 65,
    attack: 90,
    defense: 65,
    sp_atk: 61,
    sp_def: 61,
    speed: 100,
  },
  {
    national_number: "023",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ekans.png",
      large: "https://img.pokemondb.net/artwork/ekans.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/ekans.gif",
    },
    name: "Ekans",
    type: [types.poison],
    total: 288,
    hp: 35,
    attack: 60,
    defense: 44,
    sp_atk: 40,
    sp_def: 54,
    speed: 55,
  },
  {
    national_number: "024",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/arbok.png",
      large: "https://img.pokemondb.net/artwork/arbok.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/arbok.gif",
    },
    name: "Arbok",
    type: [types.poison],
    total: 448,
    hp: 60,
    attack: 95,
    defense: 69,
    sp_atk: 65,
    sp_def: 79,
    speed: 80,
  },
  {
    national_number: "025",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pikachu.png",
      large: "https://img.pokemondb.net/artwork/pikachu.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif",
    },
    name: "Pikachu",
    type: [types.electric],
    total: 320,
    hp: 35,
    attack: 55,
    defense: 40,
    sp_atk: 50,
    sp_def: 50,
    speed: 90,
  },
  {
    national_number: "026",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/raichu.png",
      large: "https://img.pokemondb.net/artwork/raichu.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/raichu.gif",
    },
    name: "Raichu",
    type: [types.electric],
    total: 485,
    hp: 60,
    attack: 90,
    defense: 55,
    sp_atk: 90,
    sp_def: 80,
    speed: 110,
  },
  {
    national_number: "026",
    evolution: { name: "Alolan Raichu" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/raichu.png",
      large: "https://img.pokemondb.net/artwork/raichu.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/raichu.gif",
    },
    name: "Raichu",
    type: [types.electric, types.psychic],
    total: 485,
    hp: 60,
    attack: 85,
    defense: 50,
    sp_atk: 95,
    sp_def: 85,
    speed: 110,
  },
  {
    national_number: "027",
    evolution: { name: "Alolan Sandshrew" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sandshrew.png",
      large: "https://img.pokemondb.net/artwork/sandshrew.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/sandshrew.gif",
    },
    name: "Sandshrew",
    type: [types.ice, types.steel],
    total: 300,
    hp: 50,
    attack: 75,
    defense: 90,
    sp_atk: 10,
    sp_def: 35,
    speed: 40,
  },
  {
    national_number: "027",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sandshrew.png",
      large: "https://img.pokemondb.net/artwork/sandshrew.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/sandshrew.gif",
    },
    name: "Sandshrew",
    type: [types.ground],
    total: 300,
    hp: 50,
    attack: 75,
    defense: 85,
    sp_atk: 20,
    sp_def: 30,
    speed: 40,
  },
  {
    national_number: "028",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sandslash.png",
      large: "https://img.pokemondb.net/artwork/sandslash.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/sandslash.gif",
    },
    name: "Sandslash",
    type: [types.ground],
    total: 450,
    hp: 75,
    attack: 100,
    defense: 110,
    sp_atk: 45,
    sp_def: 55,
    speed: 65,
  },
  {
    national_number: "028",
    evolution: { name: "Alolan Sandslash" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sandslash.png",
      large: "https://img.pokemondb.net/artwork/sandslash.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/sandslash.gif",
    },
    name: "Sandslash",
    type: [types.ice, types.steel],
    total: 450,
    hp: 75,
    attack: 100,
    defense: 120,
    sp_atk: 25,
    sp_def: 65,
    speed: 65,
  },
  {
    national_number: "029",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidoran♀.png",
      large: "https://img.pokemondb.net/artwork/nidoran♀.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran♀.gif",
    },
    name: "Nidoran♀",
    type: [types.poison],
    total: 275,
    hp: 55,
    attack: 47,
    defense: 52,
    sp_atk: 40,
    sp_def: 40,
    speed: 41,
  },
  {
    national_number: "030",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidorina.png",
      large: "https://img.pokemondb.net/artwork/nidorina.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/nidorina.gif",
    },
    name: "Nidorina",
    type: [types.poison],
    total: 365,
    hp: 70,
    attack: 62,
    defense: 67,
    sp_atk: 55,
    sp_def: 55,
    speed: 56,
  },
  {
    national_number: "031",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidoqueen.png",
      large: "https://img.pokemondb.net/artwork/nidoqueen.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoqueen.gif",
    },
    name: "Nidoqueen",
    type: [types.poison, types.ground],
    total: 505,
    hp: 90,
    attack: 92,
    defense: 87,
    sp_atk: 75,
    sp_def: 85,
    speed: 76,
  },
  {
    national_number: "032",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidoran♂.png",
      large: "https://img.pokemondb.net/artwork/nidoran♂.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran♂.gif",
    },
    name: "Nidoran♂",
    type: [types.poison],
    total: 273,
    hp: 46,
    attack: 57,
    defense: 40,
    sp_atk: 40,
    sp_def: 40,
    speed: 50,
  },
  {
    national_number: "033",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidorino.png",
      large: "https://img.pokemondb.net/artwork/nidorino.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/nidorino.gif",
    },
    name: "Nidorino",
    type: [types.poison],
    total: 365,
    hp: 61,
    attack: 72,
    defense: 57,
    sp_atk: 55,
    sp_def: 55,
    speed: 65,
  },
  {
    national_number: "034",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidoking.png",
      large: "https://img.pokemondb.net/artwork/nidoking.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoking.gif",
    },
    name: "Nidoking",
    type: [types.poison, types.ground],
    total: 505,
    hp: 81,
    attack: 102,
    defense: 77,
    sp_atk: 85,
    sp_def: 75,
    speed: 85,
  },
  {
    national_number: "035",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/clefairy.png",
      large: "https://img.pokemondb.net/artwork/clefairy.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/clefairy.gif",
    },
    name: "Clefairy",
    type: [types.fairy],
    total: 323,
    hp: 70,
    attack: 45,
    defense: 48,
    sp_atk: 60,
    sp_def: 65,
    speed: 35,
  },
  {
    national_number: "036",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/clefable.png",
      large: "https://img.pokemondb.net/artwork/clefable.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/clefable.gif",
    },
    name: "Clefable",
    type: [types.fairy],
    total: 483,
    hp: 95,
    attack: 70,
    defense: 73,
    sp_atk: 95,
    sp_def: 90,
    speed: 60,
  },
  {
    national_number: "037",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vulpix.png",
      large: "https://img.pokemondb.net/artwork/vulpix.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/vulpix.gif",
    },
    name: "Vulpix",
    type: [types.fire],
    total: 299,
    hp: 38,
    attack: 41,
    defense: 40,
    sp_atk: 50,
    sp_def: 65,
    speed: 65,
  },
  {
    national_number: "037",
    evolution: { name: "Alolan Vulpix" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vulpix.png",
      large: "https://img.pokemondb.net/artwork/vulpix.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/vulpix.gif",
    },
    name: "Vulpix",
    type: [types.ice],
    total: 299,
    hp: 38,
    attack: 41,
    defense: 40,
    sp_atk: 50,
    sp_def: 65,
    speed: 65,
  },
  {
    national_number: "038",
    evolution: { name: "Alolan Ninetales" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ninetales.png",
      large: "https://img.pokemondb.net/artwork/ninetales.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/ninetales.gif",
    },
    name: "Ninetales",
    type: [types.ice, types.fairy],
    total: 505,
    hp: 73,
    attack: 67,
    defense: 75,
    sp_atk: 81,
    sp_def: 100,
    speed: 109,
  },
  {
    national_number: "038",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ninetales.png",
      large: "https://img.pokemondb.net/artwork/ninetales.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/ninetales.gif",
    },
    name: "Ninetales",
    type: [types.fire],
    total: 505,
    hp: 73,
    attack: 76,
    defense: 75,
    sp_atk: 81,
    sp_def: 100,
    speed: 100,
  },
  {
    national_number: "039",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/jigglypuff.png",
      large: "https://img.pokemondb.net/artwork/jigglypuff.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/jigglypuff.gif",
    },
    name: "Jigglypuff",
    type: [types.normal, types.fairy],
    total: 270,
    hp: 115,
    attack: 45,
    defense: 20,
    sp_atk: 45,
    sp_def: 25,
    speed: 20,
  },
  {
    national_number: "040",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wigglytuff.png",
      large: "https://img.pokemondb.net/artwork/wigglytuff.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/wigglytuff.gif",
    },
    name: "Wigglytuff",
    type: [types.normal, types.fairy],
    total: 435,
    hp: 140,
    attack: 70,
    defense: 45,
    sp_atk: 85,
    sp_def: 50,
    speed: 45,
  },
  {
    national_number: "041",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zubat.png",
      large: "https://img.pokemondb.net/artwork/zubat.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/zubat.gif",
    },
    name: "Zubat",
    type: [types.poison, types.flying],
    total: 245,
    hp: 40,
    attack: 45,
    defense: 35,
    sp_atk: 30,
    sp_def: 40,
    speed: 55,
  },
  {
    national_number: "042",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/golbat.png",
      large: "https://img.pokemondb.net/artwork/golbat.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/golbat.gif",
    },
    name: "Golbat",
    type: [types.poison, types.flying],
    total: 455,
    hp: 75,
    attack: 80,
    defense: 70,
    sp_atk: 65,
    sp_def: 75,
    speed: 90,
  },
  {
    national_number: "043",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/oddish.png",
      large: "https://img.pokemondb.net/artwork/oddish.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/oddish.gif",
    },
    name: "Oddish",
    type: [types.grass, types.poison],
    total: 320,
    hp: 45,
    attack: 50,
    defense: 55,
    sp_atk: 75,
    sp_def: 65,
    speed: 30,
  },
  {
    national_number: "044",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gloom.png",
      large: "https://img.pokemondb.net/artwork/gloom.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gloom.gif",
    },
    name: "Gloom",
    type: [types.grass, types.poison],
    total: 395,
    hp: 60,
    attack: 65,
    defense: 70,
    sp_atk: 85,
    sp_def: 75,
    speed: 40,
  },
  {
    national_number: "045",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vileplume.png",
      large: "https://img.pokemondb.net/artwork/vileplume.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/vileplume.gif",
    },
    name: "Vileplume",
    type: [types.grass, types.poison],
    total: 490,
    hp: 75,
    attack: 80,
    defense: 85,
    sp_atk: 110,
    sp_def: 90,
    speed: 50,
  },
  {
    national_number: "046",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/paras.png",
      large: "https://img.pokemondb.net/artwork/paras.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/paras.gif",
    },
    name: "Paras",
    type: [types.bug, types.grass],
    total: 285,
    hp: 35,
    attack: 70,
    defense: 55,
    sp_atk: 45,
    sp_def: 55,
    speed: 25,
  },
  {
    national_number: "047",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/parasect.png",
      large: "https://img.pokemondb.net/artwork/parasect.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/parasect.gif",
    },
    name: "Parasect",
    type: [types.bug, types.grass],
    total: 405,
    hp: 60,
    attack: 95,
    defense: 80,
    sp_atk: 60,
    sp_def: 80,
    speed: 30,
  },
  {
    national_number: "048",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venonat.png",
      large: "https://img.pokemondb.net/artwork/venonat.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/venonat.gif",
    },
    name: "Venonat",
    type: [types.bug, types.poison],
    total: 305,
    hp: 60,
    attack: 55,
    defense: 50,
    sp_atk: 40,
    sp_def: 55,
    speed: 45,
  },
  {
    national_number: "049",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venomoth.png",
      large: "https://img.pokemondb.net/artwork/venomoth.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/venomoth.gif",
    },
    name: "Venomoth",
    type: [types.bug, types.poison],
    total: 450,
    hp: 70,
    attack: 65,
    defense: 60,
    sp_atk: 90,
    sp_def: 75,
    speed: 90,
  },
  {
    national_number: "050",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/diglett.png",
      large: "https://img.pokemondb.net/artwork/diglett.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/diglett.gif",
    },
    name: "Diglett",
    type: [types.ground],
    total: 265,
    hp: 10,
    attack: 55,
    defense: 25,
    sp_atk: 35,
    sp_def: 45,
    speed: 95,
  },
  {
    national_number: "050",
    evolution: { name: "Alolan Diglett" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/diglett.png",
      large: "https://img.pokemondb.net/artwork/diglett.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/diglett.gif",
    },
    name: "Diglett",
    type: [types.ground, types.steel],
    total: 265,
    hp: 10,
    attack: 55,
    defense: 30,
    sp_atk: 35,
    sp_def: 45,
    speed: 90,
  },
  {
    national_number: "051",
    evolution: { name: "Alolan Dugtrio" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dugtrio.png",
      large: "https://img.pokemondb.net/artwork/dugtrio.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/dugtrio.gif",
    },
    name: "Dugtrio",
    type: [types.ground, types.steel],
    total: 425,
    hp: 35,
    attack: 100,
    defense: 60,
    sp_atk: 50,
    sp_def: 70,
    speed: 110,
  },
  {
    national_number: "051",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dugtrio.png",
      large: "https://img.pokemondb.net/artwork/dugtrio.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/dugtrio.gif",
    },
    name: "Dugtrio",
    type: [types.ground],
    total: 425,
    hp: 35,
    attack: 100,
    defense: 50,
    sp_atk: 50,
    sp_def: 70,
    speed: 120,
  },
  {
    national_number: "052",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/meowth.png",
      large: "https://img.pokemondb.net/artwork/meowth.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/meowth.gif",
    },
    name: "Meowth",
    type: [types.normal],
    total: 290,
    hp: 40,
    attack: 45,
    defense: 35,
    sp_atk: 40,
    sp_def: 40,
    speed: 90,
  },
  {
    national_number: "052",
    evolution: { name: "Alolan Meowth" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/meowth.png",
      large: "https://img.pokemondb.net/artwork/meowth.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/meowth.gif",
    },
    name: "Meowth",
    type: [types.dark],
    total: 290,
    hp: 40,
    attack: 35,
    defense: 35,
    sp_atk: 50,
    sp_def: 40,
    speed: 90,
  },
  {
    national_number: "053",
    evolution: { name: "Alolan Persian" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/persian.png",
      large: "https://img.pokemondb.net/artwork/persian.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/persian.gif",
    },
    name: "Persian",
    type: [types.dark],
    total: 440,
    hp: 65,
    attack: 60,
    defense: 60,
    sp_atk: 75,
    sp_def: 65,
    speed: 115,
  },
  {
    national_number: "053",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/persian.png",
      large: "https://img.pokemondb.net/artwork/persian.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/persian.gif",
    },
    name: "Persian",
    type: [types.normal],
    total: 440,
    hp: 65,
    attack: 70,
    defense: 60,
    sp_atk: 65,
    sp_def: 65,
    speed: 115,
  },
  {
    national_number: "054",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/psyduck.png",
      large: "https://img.pokemondb.net/artwork/psyduck.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/psyduck.gif",
    },
    name: "Psyduck",
    type: [types.water],
    total: 320,
    hp: 50,
    attack: 52,
    defense: 48,
    sp_atk: 65,
    sp_def: 50,
    speed: 55,
  },
  {
    national_number: "055",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/golduck.png",
      large: "https://img.pokemondb.net/artwork/golduck.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/golduck.gif",
    },
    name: "Golduck",
    type: [types.water],
    total: 500,
    hp: 80,
    attack: 82,
    defense: 78,
    sp_atk: 95,
    sp_def: 80,
    speed: 85,
  },
  {
    national_number: "056",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mankey.png",
      large: "https://img.pokemondb.net/artwork/mankey.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mankey.gif",
    },
    name: "Mankey",
    type: [types.fighting],
    total: 305,
    hp: 40,
    attack: 80,
    defense: 35,
    sp_atk: 35,
    sp_def: 45,
    speed: 70,
  },
  {
    national_number: "057",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/primeape.png",
      large: "https://img.pokemondb.net/artwork/primeape.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/primeape.gif",
    },
    name: "Primeape",
    type: [types.fighting],
    total: 455,
    hp: 65,
    attack: 105,
    defense: 60,
    sp_atk: 60,
    sp_def: 70,
    speed: 95,
  },
  {
    national_number: "058",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/growlithe.png",
      large: "https://img.pokemondb.net/artwork/growlithe.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/growlithe.gif",
    },
    name: "Growlithe",
    type: [types.fire],
    total: 350,
    hp: 55,
    attack: 70,
    defense: 45,
    sp_atk: 70,
    sp_def: 50,
    speed: 60,
  },
  {
    national_number: "059",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/arcanine.png",
      large: "https://img.pokemondb.net/artwork/arcanine.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/arcanine.gif",
    },
    name: "Arcanine",
    type: [types.fire],
    total: 555,
    hp: 90,
    attack: 110,
    defense: 80,
    sp_atk: 100,
    sp_def: 80,
    speed: 95,
  },
  {
    national_number: "060",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/poliwag.png",
      large: "https://img.pokemondb.net/artwork/poliwag.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/poliwag.gif",
    },
    name: "Poliwag",
    type: [types.water],
    total: 300,
    hp: 40,
    attack: 50,
    defense: 40,
    sp_atk: 40,
    sp_def: 40,
    speed: 90,
  },
  {
    national_number: "061",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/poliwhirl.png",
      large: "https://img.pokemondb.net/artwork/poliwhirl.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/poliwhirl.gif",
    },
    name: "Poliwhirl",
    type: [types.water],
    total: 385,
    hp: 65,
    attack: 65,
    defense: 65,
    sp_atk: 50,
    sp_def: 50,
    speed: 90,
  },
  {
    national_number: "062",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/poliwrath.png",
      large: "https://img.pokemondb.net/artwork/poliwrath.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/poliwrath.gif",
    },
    name: "Poliwrath",
    type: [types.water, types.fighting],
    total: 510,
    hp: 90,
    attack: 95,
    defense: 95,
    sp_atk: 70,
    sp_def: 90,
    speed: 70,
  },
  {
    national_number: "063",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/abra.png",
      large: "https://img.pokemondb.net/artwork/abra.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/abra.gif",
    },
    name: "Abra",
    type: [types.psychic],
    total: 310,
    hp: 25,
    attack: 20,
    defense: 15,
    sp_atk: 105,
    sp_def: 55,
    speed: 90,
  },
  {
    national_number: "064",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kadabra.png",
      large: "https://img.pokemondb.net/artwork/kadabra.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/kadabra.gif",
    },
    name: "Kadabra",
    type: [types.psychic],
    total: 400,
    hp: 40,
    attack: 35,
    defense: 30,
    sp_atk: 120,
    sp_def: 70,
    speed: 105,
  },
  {
    national_number: "065",
    evolution: { name: "Mega Alakazam" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/alakazam.png",
      large: "https://img.pokemondb.net/artwork/alakazam.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/alakazam.gif",
    },
    name: "Alakazam",
    type: [types.psychic],
    total: 600,
    hp: 55,
    attack: 50,
    defense: 65,
    sp_atk: 175,
    sp_def: 105,
    speed: 150,
  },
  {
    national_number: "065",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/alakazam.png",
      large: "https://img.pokemondb.net/artwork/alakazam.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/alakazam.gif",
    },
    name: "Alakazam",
    type: [types.psychic],
    total: 500,
    hp: 55,
    attack: 50,
    defense: 45,
    sp_atk: 135,
    sp_def: 95,
    speed: 120,
  },
  {
    national_number: "066",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/machop.png",
      large: "https://img.pokemondb.net/artwork/machop.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/machop.gif",
    },
    name: "Machop",
    type: [types.fighting],
    total: 305,
    hp: 70,
    attack: 80,
    defense: 50,
    sp_atk: 35,
    sp_def: 35,
    speed: 35,
  },
  {
    national_number: "067",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/machoke.png",
      large: "https://img.pokemondb.net/artwork/machoke.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/machoke.gif",
    },
    name: "Machoke",
    type: [types.fighting],
    total: 405,
    hp: 80,
    attack: 100,
    defense: 70,
    sp_atk: 50,
    sp_def: 60,
    speed: 45,
  },
  {
    national_number: "068",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/machamp.png",
      large: "https://img.pokemondb.net/artwork/machamp.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/machamp.gif",
    },
    name: "Machamp",
    type: [types.fighting],
    total: 505,
    hp: 90,
    attack: 130,
    defense: 80,
    sp_atk: 65,
    sp_def: 85,
    speed: 55,
  },
  {
    national_number: "069",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bellsprout.png",
      large: "https://img.pokemondb.net/artwork/bellsprout.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/bellsprout.gif",
    },
    name: "Bellsprout",
    type: [types.grass, types.poison],
    total: 300,
    hp: 50,
    attack: 75,
    defense: 35,
    sp_atk: 70,
    sp_def: 30,
    speed: 40,
  },
  {
    national_number: "070",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/weepinbell.png",
      large: "https://img.pokemondb.net/artwork/weepinbell.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/weepinbell.gif",
    },
    name: "Weepinbell",
    type: [types.grass, types.poison],
    total: 390,
    hp: 65,
    attack: 90,
    defense: 50,
    sp_atk: 85,
    sp_def: 45,
    speed: 55,
  },
  {
    national_number: "071",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/victreebel.png",
      large: "https://img.pokemondb.net/artwork/victreebel.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/victreebel.gif",
    },
    name: "Victreebel",
    type: [types.grass, types.poison],
    total: 490,
    hp: 80,
    attack: 105,
    defense: 65,
    sp_atk: 100,
    sp_def: 70,
    speed: 70,
  },
  {
    national_number: "072",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tentacool.png",
      large: "https://img.pokemondb.net/artwork/tentacool.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/tentacool.gif",
    },
    name: "Tentacool",
    type: [types.water, types.poison],
    total: 335,
    hp: 40,
    attack: 40,
    defense: 35,
    sp_atk: 50,
    sp_def: 100,
    speed: 70,
  },
  {
    national_number: "073",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tentacruel.png",
      large: "https://img.pokemondb.net/artwork/tentacruel.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/tentacruel.gif",
    },
    name: "Tentacruel",
    type: [types.water, types.poison],
    total: 515,
    hp: 80,
    attack: 70,
    defense: 65,
    sp_atk: 80,
    sp_def: 120,
    speed: 100,
  },
  {
    national_number: "074",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/geodude.png",
      large: "https://img.pokemondb.net/artwork/geodude.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/geodude.gif",
    },
    name: "Geodude",
    type: [types.rock, types.ground],
    total: 300,
    hp: 40,
    attack: 80,
    defense: 100,
    sp_atk: 30,
    sp_def: 30,
    speed: 20,
  },
  {
    national_number: "074",
    evolution: { name: "Alolan Geodude" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/geodude.png",
      large: "https://img.pokemondb.net/artwork/geodude.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/geodude.gif",
    },
    name: "Geodude",
    type: [types.rock, types.electric],
    total: 300,
    hp: 40,
    attack: 80,
    defense: 100,
    sp_atk: 30,
    sp_def: 30,
    speed: 20,
  },
  {
    national_number: "075",
    evolution: { name: "Alolan Graveler" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/graveler.png",
      large: "https://img.pokemondb.net/artwork/graveler.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/graveler.gif",
    },
    name: "Graveler",
    type: [types.rock, types.electric],
    total: 390,
    hp: 55,
    attack: 95,
    defense: 115,
    sp_atk: 45,
    sp_def: 45,
    speed: 35,
  },
  {
    national_number: "075",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/graveler.png",
      large: "https://img.pokemondb.net/artwork/graveler.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/graveler.gif",
    },
    name: "Graveler",
    type: [types.rock, types.ground],
    total: 390,
    hp: 55,
    attack: 95,
    defense: 115,
    sp_atk: 45,
    sp_def: 45,
    speed: 35,
  },
  {
    national_number: "076",
    evolution: { name: "Alolan Golem" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/golem.png",
      large: "https://img.pokemondb.net/artwork/golem.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/golem.gif",
    },
    name: "Golem",
    type: [types.rock, types.electric],
    total: 495,
    hp: 80,
    attack: 120,
    defense: 130,
    sp_atk: 55,
    sp_def: 65,
    speed: 45,
  },
  {
    national_number: "076",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/golem.png",
      large: "https://img.pokemondb.net/artwork/golem.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/golem.gif",
    },
    name: "Golem",
    type: [types.rock, types.ground],
    total: 495,
    hp: 80,
    attack: 120,
    defense: 130,
    sp_atk: 55,
    sp_def: 65,
    speed: 45,
  },
  {
    national_number: "077",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ponyta.png",
      large: "https://img.pokemondb.net/artwork/ponyta.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/ponyta.gif",
    },
    name: "Ponyta",
    type: [types.fire],
    total: 410,
    hp: 50,
    attack: 85,
    defense: 55,
    sp_atk: 65,
    sp_def: 65,
    speed: 90,
  },
  {
    national_number: "078",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rapidash.png",
      large: "https://img.pokemondb.net/artwork/rapidash.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/rapidash.gif",
    },
    name: "Rapidash",
    type: [types.fire],
    total: 500,
    hp: 65,
    attack: 100,
    defense: 70,
    sp_atk: 80,
    sp_def: 80,
    speed: 105,
  },
  {
    national_number: "079",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/slowpoke.png",
      large: "https://img.pokemondb.net/artwork/slowpoke.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/slowpoke.gif",
    },
    name: "Slowpoke",
    type: [types.water, types.psychic],
    total: 315,
    hp: 90,
    attack: 65,
    defense: 65,
    sp_atk: 40,
    sp_def: 40,
    speed: 15,
  },
  {
    national_number: "080",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/slowbro.png",
      large: "https://img.pokemondb.net/artwork/slowbro.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/slowbro.gif",
    },
    name: "Slowbro",
    type: [types.water, types.psychic],
    total: 490,
    hp: 95,
    attack: 75,
    defense: 110,
    sp_atk: 100,
    sp_def: 80,
    speed: 30,
  },
  {
    national_number: "080",
    evolution: { name: "Mega Slowbro" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/slowbro.png",
      large: "https://img.pokemondb.net/artwork/slowbro.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/slowbro.gif",
    },
    name: "Slowbro",
    type: [types.water, types.psychic],
    total: 590,
    hp: 95,
    attack: 75,
    defense: 180,
    sp_atk: 130,
    sp_def: 80,
    speed: 30,
  },
  {
    national_number: "081",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/magnemite.png",
      large: "https://img.pokemondb.net/artwork/magnemite.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/magnemite.gif",
    },
    name: "Magnemite",
    type: [types.electric, types.steel],
    total: 325,
    hp: 25,
    attack: 35,
    defense: 70,
    sp_atk: 95,
    sp_def: 55,
    speed: 45,
  },
  {
    national_number: "082",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/magneton.png",
      large: "https://img.pokemondb.net/artwork/magneton.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/magneton.gif",
    },
    name: "Magneton",
    type: [types.electric, types.steel],
    total: 465,
    hp: 50,
    attack: 60,
    defense: 95,
    sp_atk: 120,
    sp_def: 70,
    speed: 70,
  },
  {
    national_number: "083",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/farfetch'd.png",
      large: "https://img.pokemondb.net/artwork/farfetch'd.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/farfetch'd.gif",
    },
    name: "Farfetch'd",
    type: [types.normal, types.flying],
    total: 377,
    hp: 52,
    attack: 90,
    defense: 55,
    sp_atk: 58,
    sp_def: 62,
    speed: 60,
  },
  {
    national_number: "084",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/doduo.png",
      large: "https://img.pokemondb.net/artwork/doduo.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/doduo.gif",
    },
    name: "Doduo",
    type: [types.normal, types.flying],
    total: 310,
    hp: 35,
    attack: 85,
    defense: 45,
    sp_atk: 35,
    sp_def: 35,
    speed: 75,
  },
  {
    national_number: "085",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dodrio.png",
      large: "https://img.pokemondb.net/artwork/dodrio.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/dodrio.gif",
    },
    name: "Dodrio",
    type: [types.normal, types.flying],
    total: 470,
    hp: 60,
    attack: 110,
    defense: 70,
    sp_atk: 60,
    sp_def: 60,
    speed: 110,
  },
  {
    national_number: "086",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/seel.png",
      large: "https://img.pokemondb.net/artwork/seel.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/seel.gif",
    },
    name: "Seel",
    type: [types.water],
    total: 325,
    hp: 65,
    attack: 45,
    defense: 55,
    sp_atk: 45,
    sp_def: 70,
    speed: 45,
  },
  {
    national_number: "087",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dewgong.png",
      large: "https://img.pokemondb.net/artwork/dewgong.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/dewgong.gif",
    },
    name: "Dewgong",
    type: [types.water, types.ice],
    total: 475,
    hp: 90,
    attack: 70,
    defense: 80,
    sp_atk: 70,
    sp_def: 95,
    speed: 70,
  },
  {
    national_number: "088",
    evolution: { name: "Alolan Grimer" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/grimer.png",
      large: "https://img.pokemondb.net/artwork/grimer.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/grimer.gif",
    },
    name: "Grimer",
    type: [types.poison, types.dark],
    total: 325,
    hp: 80,
    attack: 80,
    defense: 50,
    sp_atk: 40,
    sp_def: 50,
    speed: 25,
  },
  {
    national_number: "088",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/grimer.png",
      large: "https://img.pokemondb.net/artwork/grimer.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/grimer.gif",
    },
    name: "Grimer",
    type: [types.poison],
    total: 325,
    hp: 80,
    attack: 80,
    defense: 50,
    sp_atk: 40,
    sp_def: 50,
    speed: 25,
  },
  {
    national_number: "089",
    evolution: { name: "Alolan Muk" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/muk.png",
      large: "https://img.pokemondb.net/artwork/muk.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/muk.gif",
    },
    name: "Muk",
    type: [types.poison, types.dark],
    total: 500,
    hp: 105,
    attack: 105,
    defense: 75,
    sp_atk: 65,
    sp_def: 100,
    speed: 50,
  },
  {
    national_number: "089",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/muk.png",
      large: "https://img.pokemondb.net/artwork/muk.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/muk.gif",
    },
    name: "Muk",
    type: [types.poison],
    total: 500,
    hp: 105,
    attack: 105,
    defense: 75,
    sp_atk: 65,
    sp_def: 100,
    speed: 50,
  },
  {
    national_number: "090",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shellder.png",
      large: "https://img.pokemondb.net/artwork/shellder.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/shellder.gif",
    },
    name: "Shellder",
    type: [types.water],
    total: 305,
    hp: 30,
    attack: 65,
    defense: 100,
    sp_atk: 45,
    sp_def: 25,
    speed: 40,
  },
  {
    national_number: "091",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cloyster.png",
      large: "https://img.pokemondb.net/artwork/cloyster.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/cloyster.gif",
    },
    name: "Cloyster",
    type: [types.water, types.ice],
    total: 525,
    hp: 50,
    attack: 95,
    defense: 180,
    sp_atk: 85,
    sp_def: 45,
    speed: 70,
  },
  {
    national_number: "092",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gastly.png",
      large: "https://img.pokemondb.net/artwork/gastly.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gastly.gif",
    },
    name: "Gastly",
    type: [types.ghost, types.poison],
    total: 310,
    hp: 30,
    attack: 35,
    defense: 30,
    sp_atk: 100,
    sp_def: 35,
    speed: 80,
  },
  {
    national_number: "093",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/haunter.png",
      large: "https://img.pokemondb.net/artwork/haunter.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/haunter.gif",
    },
    name: "Haunter",
    type: [types.ghost, types.poison],
    total: 405,
    hp: 45,
    attack: 50,
    defense: 45,
    sp_atk: 115,
    sp_def: 55,
    speed: 95,
  },
  {
    national_number: "094",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gengar.png",
      large: "https://img.pokemondb.net/artwork/gengar.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif",
    },
    name: "Gengar",
    type: [types.ghost, types.poison],
    total: 500,
    hp: 60,
    attack: 65,
    defense: 60,
    sp_atk: 130,
    sp_def: 75,
    speed: 110,
  },
  {
    national_number: "094",
    evolution: { name: "Mega Gengar" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gengar.png",
      large: "https://img.pokemondb.net/artwork/gengar.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif",
    },
    name: "Gengar",
    type: [types.ghost, types.poison],
    total: 600,
    hp: 60,
    attack: 65,
    defense: 80,
    sp_atk: 170,
    sp_def: 95,
    speed: 130,
  },
  {
    national_number: "095",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/onix.png",
      large: "https://img.pokemondb.net/artwork/onix.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/onix.gif",
    },
    name: "Onix",
    type: [types.rock, types.ground],
    total: 385,
    hp: 35,
    attack: 45,
    defense: 160,
    sp_atk: 30,
    sp_def: 45,
    speed: 70,
  },
  {
    national_number: "096",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/drowzee.png",
      large: "https://img.pokemondb.net/artwork/drowzee.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/drowzee.gif",
    },
    name: "Drowzee",
    type: [types.psychic],
    total: 328,
    hp: 60,
    attack: 48,
    defense: 45,
    sp_atk: 43,
    sp_def: 90,
    speed: 42,
  },
  {
    national_number: "097",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hypno.png",
      large: "https://img.pokemondb.net/artwork/hypno.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/hypno.gif",
    },
    name: "Hypno",
    type: [types.psychic],
    total: 483,
    hp: 85,
    attack: 73,
    defense: 70,
    sp_atk: 73,
    sp_def: 115,
    speed: 67,
  },
  {
    national_number: "098",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/krabby.png",
      large: "https://img.pokemondb.net/artwork/krabby.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/krabby.gif",
    },
    name: "Krabby",
    type: [types.water],
    total: 325,
    hp: 30,
    attack: 105,
    defense: 90,
    sp_atk: 25,
    sp_def: 25,
    speed: 50,
  },
  {
    national_number: "099",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kingler.png",
      large: "https://img.pokemondb.net/artwork/kingler.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/kingler.gif",
    },
    name: "Kingler",
    type: [types.water],
    total: 475,
    hp: 55,
    attack: 130,
    defense: 115,
    sp_atk: 50,
    sp_def: 50,
    speed: 75,
  },
  {
    national_number: "100",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/voltorb.png",
      large: "https://img.pokemondb.net/artwork/voltorb.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/voltorb.gif",
    },
    name: "Voltorb",
    type: [types.electric],
    total: 330,
    hp: 40,
    attack: 30,
    defense: 50,
    sp_atk: 55,
    sp_def: 55,
    speed: 100,
  },
  {
    national_number: "101",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/electrode.png",
      large: "https://img.pokemondb.net/artwork/electrode.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/electrode.gif",
    },
    name: "Electrode",
    type: [types.electric],
    total: 490,
    hp: 60,
    attack: 50,
    defense: 70,
    sp_atk: 80,
    sp_def: 80,
    speed: 150,
  },
  {
    national_number: "102",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/exeggcute.png",
      large: "https://img.pokemondb.net/artwork/exeggcute.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/exeggcute.gif",
    },
    name: "Exeggcute",
    type: [types.grass, types.psychic],
    total: 325,
    hp: 60,
    attack: 40,
    defense: 80,
    sp_atk: 60,
    sp_def: 45,
    speed: 40,
  },
  {
    national_number: "103",
    evolution: { name: "Alolan Exeggutor" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/exeggutor.png",
      large: "https://img.pokemondb.net/artwork/exeggutor.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/exeggutor.gif",
    },
    name: "Exeggutor",
    type: [types.grass, types.dragon],
    total: 530,
    hp: 95,
    attack: 105,
    defense: 85,
    sp_atk: 125,
    sp_def: 75,
    speed: 45,
  },
  {
    national_number: "103",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/exeggutor.png",
      large: "https://img.pokemondb.net/artwork/exeggutor.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/exeggutor.gif",
    },
    name: "Exeggutor",
    type: [types.grass, types.psychic],
    total: 530,
    hp: 95,
    attack: 95,
    defense: 85,
    sp_atk: 125,
    sp_def: 75,
    speed: 55,
  },
  {
    national_number: "104",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cubone.png",
      large: "https://img.pokemondb.net/artwork/cubone.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/cubone.gif",
    },
    name: "Cubone",
    type: [types.ground],
    total: 320,
    hp: 50,
    attack: 50,
    defense: 95,
    sp_atk: 40,
    sp_def: 50,
    speed: 35,
  },
  {
    national_number: "105",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/marowak.png",
      large: "https://img.pokemondb.net/artwork/marowak.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/marowak.gif",
    },
    name: "Marowak",
    type: [types.ground],
    total: 425,
    hp: 60,
    attack: 80,
    defense: 110,
    sp_atk: 50,
    sp_def: 80,
    speed: 45,
  },
  {
    national_number: "105",
    evolution: { name: "Alolan Marowak" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/marowak.png",
      large: "https://img.pokemondb.net/artwork/marowak.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/marowak.gif",
    },
    name: "Marowak",
    type: [types.fire, types.ghost],
    total: 425,
    hp: 60,
    attack: 80,
    defense: 110,
    sp_atk: 50,
    sp_def: 80,
    speed: 45,
  },
  {
    national_number: "106",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hitmonlee.png",
      large: "https://img.pokemondb.net/artwork/hitmonlee.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/hitmonlee.gif",
    },
    name: "Hitmonlee",
    type: [types.fighting],
    total: 455,
    hp: 50,
    attack: 120,
    defense: 53,
    sp_atk: 35,
    sp_def: 110,
    speed: 87,
  },
  {
    national_number: "107",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hitmonchan.png",
      large: "https://img.pokemondb.net/artwork/hitmonchan.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/hitmonchan.gif",
    },
    name: "Hitmonchan",
    type: [types.fighting],
    total: 455,
    hp: 50,
    attack: 105,
    defense: 79,
    sp_atk: 35,
    sp_def: 110,
    speed: 76,
  },
  {
    national_number: "108",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lickitung.png",
      large: "https://img.pokemondb.net/artwork/lickitung.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/lickitung.gif",
    },
    name: "Lickitung",
    type: [types.normal],
    total: 385,
    hp: 90,
    attack: 55,
    defense: 75,
    sp_atk: 60,
    sp_def: 75,
    speed: 30,
  },
  {
    national_number: "109",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/koffing.png",
      large: "https://img.pokemondb.net/artwork/koffing.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/koffing.gif",
    },
    name: "Koffing",
    type: [types.poison],
    total: 340,
    hp: 40,
    attack: 65,
    defense: 95,
    sp_atk: 60,
    sp_def: 45,
    speed: 35,
  },
  {
    national_number: "110",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/weezing.png",
      large: "https://img.pokemondb.net/artwork/weezing.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/weezing.gif",
    },
    name: "Weezing",
    type: [types.poison],
    total: 490,
    hp: 65,
    attack: 90,
    defense: 120,
    sp_atk: 85,
    sp_def: 70,
    speed: 60,
  },
  {
    national_number: "111",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rhyhorn.png",
      large: "https://img.pokemondb.net/artwork/rhyhorn.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/rhyhorn.gif",
    },
    name: "Rhyhorn",
    type: [types.ground, types.rock],
    total: 345,
    hp: 80,
    attack: 85,
    defense: 95,
    sp_atk: 30,
    sp_def: 30,
    speed: 25,
  },
  {
    national_number: "112",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rhydon.png",
      large: "https://img.pokemondb.net/artwork/rhydon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/rhydon.gif",
    },
    name: "Rhydon",
    type: [types.ground, types.rock],
    total: 485,
    hp: 105,
    attack: 130,
    defense: 120,
    sp_atk: 45,
    sp_def: 45,
    speed: 40,
  },
  {
    national_number: "113",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/chansey.png",
      large: "https://img.pokemondb.net/artwork/chansey.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/chansey.gif",
    },
    name: "Chansey",
    type: [types.normal],
    total: 450,
    hp: 250,
    attack: 5,
    defense: 5,
    sp_atk: 35,
    sp_def: 105,
    speed: 50,
  },
  {
    national_number: "114",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tangela.png",
      large: "https://img.pokemondb.net/artwork/tangela.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/tangela.gif",
    },
    name: "Tangela",
    type: [types.grass],
    total: 435,
    hp: 65,
    attack: 55,
    defense: 115,
    sp_atk: 100,
    sp_def: 40,
    speed: 60,
  },
  {
    national_number: "115",
    evolution: { name: "Mega Kangaskhan" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kangaskhan.png",
      large: "https://img.pokemondb.net/artwork/kangaskhan.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/kangaskhan.gif",
    },
    name: "Kangaskhan",
    type: [types.normal],
    total: 590,
    hp: 105,
    attack: 125,
    defense: 100,
    sp_atk: 60,
    sp_def: 100,
    speed: 100,
  },
  {
    national_number: "115",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kangaskhan.png",
      large: "https://img.pokemondb.net/artwork/kangaskhan.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/kangaskhan.gif",
    },
    name: "Kangaskhan",
    type: [types.normal],
    total: 490,
    hp: 105,
    attack: 95,
    defense: 80,
    sp_atk: 40,
    sp_def: 80,
    speed: 90,
  },
  {
    national_number: "116",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/horsea.png",
      large: "https://img.pokemondb.net/artwork/horsea.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/horsea.gif",
    },
    name: "Horsea",
    type: [types.water],
    total: 295,
    hp: 30,
    attack: 40,
    defense: 70,
    sp_atk: 70,
    sp_def: 25,
    speed: 60,
  },
  {
    national_number: "117",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/seadra.png",
      large: "https://img.pokemondb.net/artwork/seadra.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/seadra.gif",
    },
    name: "Seadra",
    type: [types.water],
    total: 440,
    hp: 55,
    attack: 65,
    defense: 95,
    sp_atk: 95,
    sp_def: 45,
    speed: 85,
  },
  {
    national_number: "118",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/goldeen.png",
      large: "https://img.pokemondb.net/artwork/goldeen.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/goldeen.gif",
    },
    name: "Goldeen",
    type: [types.water],
    total: 320,
    hp: 45,
    attack: 67,
    defense: 60,
    sp_atk: 35,
    sp_def: 50,
    speed: 63,
  },
  {
    national_number: "119",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/seaking.png",
      large: "https://img.pokemondb.net/artwork/seaking.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/seaking.gif",
    },
    name: "Seaking",
    type: [types.water],
    total: 450,
    hp: 80,
    attack: 92,
    defense: 65,
    sp_atk: 65,
    sp_def: 80,
    speed: 68,
  },
  {
    national_number: "120",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/staryu.png",
      large: "https://img.pokemondb.net/artwork/staryu.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/staryu.gif",
    },
    name: "Staryu",
    type: [types.water],
    total: 340,
    hp: 30,
    attack: 45,
    defense: 55,
    sp_atk: 70,
    sp_def: 55,
    speed: 85,
  },
  {
    national_number: "121",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/starmie.png",
      large: "https://img.pokemondb.net/artwork/starmie.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/starmie.gif",
    },
    name: "Starmie",
    type: [types.water, types.psychic],
    total: 520,
    hp: 60,
    attack: 75,
    defense: 85,
    sp_atk: 100,
    sp_def: 85,
    speed: 115,
  },
  {
    national_number: "122",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mr.-mime.png",
      large: "https://img.pokemondb.net/artwork/mr.-mime.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mr.-mime.gif",
    },
    name: "Mr. Mime",
    type: [types.psychic, types.fairy],
    total: 460,
    hp: 40,
    attack: 45,
    defense: 65,
    sp_atk: 100,
    sp_def: 120,
    speed: 90,
  },
  {
    national_number: "123",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/scyther.png",
      large: "https://img.pokemondb.net/artwork/scyther.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/scyther.gif",
    },
    name: "Scyther",
    type: [types.bug, types.flying],
    total: 500,
    hp: 70,
    attack: 110,
    defense: 80,
    sp_atk: 55,
    sp_def: 80,
    speed: 105,
  },
  {
    national_number: "124",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/jynx.png",
      large: "https://img.pokemondb.net/artwork/jynx.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/jynx.gif",
    },
    name: "Jynx",
    type: [types.ice, types.psychic],
    total: 455,
    hp: 65,
    attack: 50,
    defense: 35,
    sp_atk: 115,
    sp_def: 95,
    speed: 95,
  },
  {
    national_number: "125",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/electabuzz.png",
      large: "https://img.pokemondb.net/artwork/electabuzz.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/electabuzz.gif",
    },
    name: "Electabuzz",
    type: [types.electric],
    total: 490,
    hp: 65,
    attack: 83,
    defense: 57,
    sp_atk: 95,
    sp_def: 85,
    speed: 105,
  },
  {
    national_number: "126",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/magmar.png",
      large: "https://img.pokemondb.net/artwork/magmar.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/magmar.gif",
    },
    name: "Magmar",
    type: [types.fire],
    total: 495,
    hp: 65,
    attack: 95,
    defense: 57,
    sp_atk: 100,
    sp_def: 85,
    speed: 93,
  },
  {
    national_number: "127",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pinsir.png",
      large: "https://img.pokemondb.net/artwork/pinsir.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pinsir.gif",
    },
    name: "Pinsir",
    type: [types.bug],
    total: 500,
    hp: 65,
    attack: 125,
    defense: 100,
    sp_atk: 55,
    sp_def: 70,
    speed: 85,
  },
  {
    national_number: "127",
    evolution: { name: "Mega Pinsir" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pinsir.png",
      large: "https://img.pokemondb.net/artwork/pinsir.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pinsir.gif",
    },
    name: "Pinsir",
    type: [types.bug, types.flying],
    total: 600,
    hp: 65,
    attack: 155,
    defense: 120,
    sp_atk: 65,
    sp_def: 90,
    speed: 105,
  },
  {
    national_number: "128",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tauros.png",
      large: "https://img.pokemondb.net/artwork/tauros.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/tauros.gif",
    },
    name: "Tauros",
    type: [types.normal],
    total: 490,
    hp: 75,
    attack: 100,
    defense: 95,
    sp_atk: 40,
    sp_def: 70,
    speed: 110,
  },
  {
    national_number: "129",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/magikarp.png",
      large: "https://img.pokemondb.net/artwork/magikarp.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/magikarp.gif",
    },
    name: "Magikarp",
    type: [types.water],
    total: 200,
    hp: 20,
    attack: 10,
    defense: 55,
    sp_atk: 15,
    sp_def: 20,
    speed: 80,
  },
  {
    national_number: "130",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gyarados.png",
      large: "https://img.pokemondb.net/artwork/gyarados.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gyarados.gif",
    },
    name: "Gyarados",
    type: [types.water, types.flying],
    total: 540,
    hp: 95,
    attack: 125,
    defense: 79,
    sp_atk: 60,
    sp_def: 100,
    speed: 81,
  },
  {
    national_number: "130",
    evolution: { name: "Mega Gyarados" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gyarados.png",
      large: "https://img.pokemondb.net/artwork/gyarados.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gyarados.gif",
    },
    name: "Gyarados",
    type: [types.water, types.dark],
    total: 640,
    hp: 95,
    attack: 155,
    defense: 109,
    sp_atk: 70,
    sp_def: 130,
    speed: 81,
  },
  {
    national_number: "131",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lapras.png",
      large: "https://img.pokemondb.net/artwork/lapras.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/lapras.gif",
    },
    name: "Lapras",
    type: [types.water, types.ice],
    total: 535,
    hp: 130,
    attack: 85,
    defense: 80,
    sp_atk: 85,
    sp_def: 95,
    speed: 60,
  },
  {
    national_number: "132",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ditto.png",
      large: "https://img.pokemondb.net/artwork/ditto.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/ditto.gif",
    },
    name: "Ditto",
    type: [types.normal],
    total: 288,
    hp: 48,
    attack: 48,
    defense: 48,
    sp_atk: 48,
    sp_def: 48,
    speed: 48,
  },
  {
    national_number: "133",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/eevee.png",
      large: "https://img.pokemondb.net/artwork/eevee.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/eevee.gif",
    },
    name: "Eevee",
    type: [types.normal],
    total: 325,
    hp: 55,
    attack: 55,
    defense: 50,
    sp_atk: 45,
    sp_def: 65,
    speed: 55,
  },
  {
    national_number: "134",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vaporeon.png",
      large: "https://img.pokemondb.net/artwork/vaporeon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/vaporeon.gif",
    },
    name: "Vaporeon",
    type: [types.water],
    total: 525,
    hp: 130,
    attack: 65,
    defense: 60,
    sp_atk: 110,
    sp_def: 95,
    speed: 65,
  },
  {
    national_number: "135",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/jolteon.png",
      large: "https://img.pokemondb.net/artwork/jolteon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/jolteon.gif",
    },
    name: "Jolteon",
    type: [types.electric],
    total: 525,
    hp: 65,
    attack: 65,
    defense: 60,
    sp_atk: 110,
    sp_def: 95,
    speed: 130,
  },
  {
    national_number: "136",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/flareon.png",
      large: "https://img.pokemondb.net/artwork/flareon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/flareon.gif",
    },
    name: "Flareon",
    type: [types.fire],
    total: 525,
    hp: 65,
    attack: 130,
    defense: 60,
    sp_atk: 95,
    sp_def: 110,
    speed: 65,
  },
  {
    national_number: "137",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/porygon.png",
      large: "https://img.pokemondb.net/artwork/porygon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/porygon.gif",
    },
    name: "Porygon",
    type: [types.normal],
    total: 395,
    hp: 65,
    attack: 60,
    defense: 70,
    sp_atk: 85,
    sp_def: 75,
    speed: 40,
  },
  {
    national_number: "138",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/omanyte.png",
      large: "https://img.pokemondb.net/artwork/omanyte.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/omanyte.gif",
    },
    name: "Omanyte",
    type: [types.rock, types.water],
    total: 355,
    hp: 35,
    attack: 40,
    defense: 100,
    sp_atk: 90,
    sp_def: 55,
    speed: 35,
  },
  {
    national_number: "139",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/omastar.png",
      large: "https://img.pokemondb.net/artwork/omastar.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/omastar.gif",
    },
    name: "Omastar",
    type: [types.rock, types.water],
    total: 495,
    hp: 70,
    attack: 60,
    defense: 125,
    sp_atk: 115,
    sp_def: 70,
    speed: 55,
  },
  {
    national_number: "140",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kabuto.png",
      large: "https://img.pokemondb.net/artwork/kabuto.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/kabuto.gif",
    },
    name: "Kabuto",
    type: [types.rock, types.water],
    total: 355,
    hp: 30,
    attack: 80,
    defense: 90,
    sp_atk: 55,
    sp_def: 45,
    speed: 55,
  },
  {
    national_number: "141",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kabutops.png",
      large: "https://img.pokemondb.net/artwork/kabutops.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/kabutops.gif",
    },
    name: "Kabutops",
    type: [types.rock, types.water],
    total: 495,
    hp: 60,
    attack: 115,
    defense: 105,
    sp_atk: 65,
    sp_def: 70,
    speed: 80,
  },
  {
    national_number: "142",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/aerodactyl.png",
      large: "https://img.pokemondb.net/artwork/aerodactyl.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/aerodactyl.gif",
    },
    name: "Aerodactyl",
    type: [types.rock, types.flying],
    total: 515,
    hp: 80,
    attack: 105,
    defense: 65,
    sp_atk: 60,
    sp_def: 75,
    speed: 130,
  },
  {
    national_number: "142",
    evolution: { name: "Mega Aerodactyl" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/aerodactyl.png",
      large: "https://img.pokemondb.net/artwork/aerodactyl.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/aerodactyl.gif",
    },
    name: "Aerodactyl",
    type: [types.rock, types.flying],
    total: 615,
    hp: 80,
    attack: 135,
    defense: 85,
    sp_atk: 70,
    sp_def: 95,
    speed: 150,
  },
  {
    national_number: "143",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/snorlax.png",
      large: "https://img.pokemondb.net/artwork/snorlax.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif",
    },
    name: "Snorlax",
    type: [types.normal],
    total: 540,
    hp: 160,
    attack: 110,
    defense: 65,
    sp_atk: 65,
    sp_def: 110,
    speed: 30,
  },
  {
    national_number: "144",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/articuno.png",
      large: "https://img.pokemondb.net/artwork/articuno.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/articuno.gif",
    },
    name: "Articuno",
    type: [types.ice, types.flying],
    total: 580,
    hp: 90,
    attack: 85,
    defense: 100,
    sp_atk: 95,
    sp_def: 125,
    speed: 85,
  },
  {
    national_number: "145",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zapdos.png",
      large: "https://img.pokemondb.net/artwork/zapdos.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/zapdos.gif",
    },
    name: "Zapdos",
    type: [types.electric, types.flying],
    total: 580,
    hp: 90,
    attack: 90,
    defense: 85,
    sp_atk: 125,
    sp_def: 90,
    speed: 100,
  },
  {
    national_number: "146",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/moltres.png",
      large: "https://img.pokemondb.net/artwork/moltres.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/moltres.gif",
    },
    name: "Moltres",
    type: [types.fire, types.flying],
    total: 580,
    hp: 90,
    attack: 100,
    defense: 90,
    sp_atk: 125,
    sp_def: 85,
    speed: 90,
  },
  {
    national_number: "147",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dratini.png",
      large: "https://img.pokemondb.net/artwork/dratini.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/dratini.gif",
    },
    name: "Dratini",
    type: [types.dragon],
    total: 300,
    hp: 41,
    attack: 64,
    defense: 45,
    sp_atk: 50,
    sp_def: 50,
    speed: 50,
  },
  {
    national_number: "148",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dragonair.png",
      large: "https://img.pokemondb.net/artwork/dragonair.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/dragonair.gif",
    },
    name: "Dragonair",
    type: [types.dragon],
    total: 420,
    hp: 61,
    attack: 84,
    defense: 65,
    sp_atk: 70,
    sp_def: 70,
    speed: 70,
  },
  {
    national_number: "149",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dragonite.png",
      large: "https://img.pokemondb.net/artwork/dragonite.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif",
    },
    name: "Dragonite",
    type: [types.dragon, types.flying],
    total: 600,
    hp: 91,
    attack: 134,
    defense: 95,
    sp_atk: 100,
    sp_def: 100,
    speed: 80,
  },
  {
    national_number: "150",
    evolution: { name: "Mega Mewtwo Y" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mewtwo.png",
      large: "https://img.pokemondb.net/artwork/mewtwo.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mewtwo.gif",
    },
    name: "Mewtwo",
    type: [types.psychic],
    total: 780,
    hp: 106,
    attack: 150,
    defense: 70,
    sp_atk: 194,
    sp_def: 120,
    speed: 140,
  },
  {
    national_number: "150",
    evolution: { name: "Mega Mewtwo X" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mewtwo.png",
      large: "https://img.pokemondb.net/artwork/mewtwo.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mewtwo.gif",
    },
    name: "Mewtwo",
    type: [types.psychic, types.fighting],
    total: 780,
    hp: 106,
    attack: 190,
    defense: 100,
    sp_atk: 154,
    sp_def: 100,
    speed: 130,
  },
  {
    national_number: "150",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mewtwo.png",
      large: "https://img.pokemondb.net/artwork/mewtwo.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mewtwo.gif",
    },
    name: "Mewtwo",
    type: [types.psychic],
    total: 680,
    hp: 106,
    attack: 110,
    defense: 90,
    sp_atk: 154,
    sp_def: 90,
    speed: 130,
  },
  {
    national_number: "151",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mew.png",
      large: "https://img.pokemondb.net/artwork/mew.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mew.gif",
    },
    name: "Mew",
    type: [types.psychic],
    total: 600,
    hp: 100,
    attack: 100,
    defense: 100,
    sp_atk: 100,
    sp_def: 100,
    speed: 100,
  },
  {
    national_number: "152",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/chikorita.png",
      large: "https://img.pokemondb.net/artwork/chikorita.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/chikorita.gif",
    },
    name: "Chikorita",
    type: [types.grass],
    total: 318,
    hp: 45,
    attack: 49,
    defense: 65,
    sp_atk: 49,
    sp_def: 65,
    speed: 45,
  },
  {
    national_number: "153",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bayleef.png",
      large: "https://img.pokemondb.net/artwork/bayleef.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/bayleef.gif",
    },
    name: "Bayleef",
    type: [types.grass],
    total: 405,
    hp: 60,
    attack: 62,
    defense: 80,
    sp_atk: 63,
    sp_def: 80,
    speed: 60,
  },
  {
    national_number: "154",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/meganium.png",
      large: "https://img.pokemondb.net/artwork/meganium.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/meganium.gif",
    },
    name: "Meganium",
    type: [types.grass],
    total: 525,
    hp: 80,
    attack: 82,
    defense: 100,
    sp_atk: 83,
    sp_def: 100,
    speed: 80,
  },
  {
    national_number: "155",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cyndaquil.png",
      large: "https://img.pokemondb.net/artwork/cyndaquil.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/cyndaquil.gif",
    },
    name: "Cyndaquil",
    type: [types.fire],
    total: 309,
    hp: 39,
    attack: 52,
    defense: 43,
    sp_atk: 60,
    sp_def: 50,
    speed: 65,
  },
  {
    national_number: "156",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/quilava.png",
      large: "https://img.pokemondb.net/artwork/quilava.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/quilava.gif",
    },
    name: "Quilava",
    type: [types.fire],
    total: 405,
    hp: 58,
    attack: 64,
    defense: 58,
    sp_atk: 80,
    sp_def: 65,
    speed: 80,
  },
  {
    national_number: "157",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/typhlosion.png",
      large: "https://img.pokemondb.net/artwork/typhlosion.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/typhlosion.gif",
    },
    name: "Typhlosion",
    type: [types.fire],
    total: 534,
    hp: 78,
    attack: 84,
    defense: 78,
    sp_atk: 109,
    sp_def: 85,
    speed: 100,
  },
  {
    national_number: "158",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/totodile.png",
      large: "https://img.pokemondb.net/artwork/totodile.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/totodile.gif",
    },
    name: "Totodile",
    type: [types.water],
    total: 314,
    hp: 50,
    attack: 65,
    defense: 64,
    sp_atk: 44,
    sp_def: 48,
    speed: 43,
  },
  {
    national_number: "159",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/croconaw.png",
      large: "https://img.pokemondb.net/artwork/croconaw.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/croconaw.gif",
    },
    name: "Croconaw",
    type: [types.water],
    total: 405,
    hp: 65,
    attack: 80,
    defense: 80,
    sp_atk: 59,
    sp_def: 63,
    speed: 58,
  },
  {
    national_number: "160",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/feraligatr.png",
      large: "https://img.pokemondb.net/artwork/feraligatr.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/feraligatr.gif",
    },
    name: "Feraligatr",
    type: [types.water],
    total: 530,
    hp: 85,
    attack: 105,
    defense: 100,
    sp_atk: 79,
    sp_def: 83,
    speed: 78,
  },
  {
    national_number: "161",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sentret.png",
      large: "https://img.pokemondb.net/artwork/sentret.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/sentret.gif",
    },
    name: "Sentret",
    type: [types.normal],
    total: 215,
    hp: 35,
    attack: 46,
    defense: 34,
    sp_atk: 35,
    sp_def: 45,
    speed: 20,
  },
  {
    national_number: "162",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/furret.png",
      large: "https://img.pokemondb.net/artwork/furret.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/furret.gif",
    },
    name: "Furret",
    type: [types.normal],
    total: 415,
    hp: 85,
    attack: 76,
    defense: 64,
    sp_atk: 45,
    sp_def: 55,
    speed: 90,
  },
  {
    national_number: "163",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hoothoot.png",
      large: "https://img.pokemondb.net/artwork/hoothoot.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/hoothoot.gif",
    },
    name: "Hoothoot",
    type: [types.normal, types.flying],
    total: 262,
    hp: 60,
    attack: 30,
    defense: 30,
    sp_atk: 36,
    sp_def: 56,
    speed: 50,
  },
  {
    national_number: "164",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/noctowl.png",
      large: "https://img.pokemondb.net/artwork/noctowl.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/noctowl.gif",
    },
    name: "Noctowl",
    type: [types.normal, types.flying],
    total: 452,
    hp: 100,
    attack: 50,
    defense: 50,
    sp_atk: 86,
    sp_def: 96,
    speed: 70,
  },
  {
    national_number: "165",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ledyba.png",
      large: "https://img.pokemondb.net/artwork/ledyba.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/ledyba.gif",
    },
    name: "Ledyba",
    type: [types.bug, types.flying],
    total: 265,
    hp: 40,
    attack: 20,
    defense: 30,
    sp_atk: 40,
    sp_def: 80,
    speed: 55,
  },
  {
    national_number: "166",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ledian.png",
      large: "https://img.pokemondb.net/artwork/ledian.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/ledian.gif",
    },
    name: "Ledian",
    type: [types.bug, types.flying],
    total: 390,
    hp: 55,
    attack: 35,
    defense: 50,
    sp_atk: 55,
    sp_def: 110,
    speed: 85,
  },
  {
    national_number: "167",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/spinarak.png",
      large: "https://img.pokemondb.net/artwork/spinarak.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/spinarak.gif",
    },
    name: "Spinarak",
    type: [types.bug, types.poison],
    total: 250,
    hp: 40,
    attack: 60,
    defense: 40,
    sp_atk: 40,
    sp_def: 40,
    speed: 30,
  },
  {
    national_number: "168",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ariados.png",
      large: "https://img.pokemondb.net/artwork/ariados.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/ariados.gif",
    },
    name: "Ariados",
    type: [types.bug, types.poison],
    total: 400,
    hp: 70,
    attack: 90,
    defense: 70,
    sp_atk: 60,
    sp_def: 70,
    speed: 40,
  },
  {
    national_number: "169",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/crobat.png",
      large: "https://img.pokemondb.net/artwork/crobat.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/crobat.gif",
    },
    name: "Crobat",
    type: [types.poison, types.flying],
    total: 535,
    hp: 85,
    attack: 90,
    defense: 80,
    sp_atk: 70,
    sp_def: 80,
    speed: 130,
  },
  {
    national_number: "170",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/chinchou.png",
      large: "https://img.pokemondb.net/artwork/chinchou.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/chinchou.gif",
    },
    name: "Chinchou",
    type: [types.water, types.electric],
    total: 330,
    hp: 75,
    attack: 38,
    defense: 38,
    sp_atk: 56,
    sp_def: 56,
    speed: 67,
  },
  {
    national_number: "171",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lanturn.png",
      large: "https://img.pokemondb.net/artwork/lanturn.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/lanturn.gif",
    },
    name: "Lanturn",
    type: [types.water, types.electric],
    total: 460,
    hp: 125,
    attack: 58,
    defense: 58,
    sp_atk: 76,
    sp_def: 76,
    speed: 67,
  },
  {
    national_number: "172",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pichu.png",
      large: "https://img.pokemondb.net/artwork/pichu.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pichu.gif",
    },
    name: "Pichu",
    type: [types.electric],
    total: 205,
    hp: 20,
    attack: 40,
    defense: 15,
    sp_atk: 35,
    sp_def: 35,
    speed: 60,
  },
  {
    national_number: "173",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cleffa.png",
      large: "https://img.pokemondb.net/artwork/cleffa.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/cleffa.gif",
    },
    name: "Cleffa",
    type: [types.fairy],
    total: 218,
    hp: 50,
    attack: 25,
    defense: 28,
    sp_atk: 45,
    sp_def: 55,
    speed: 15,
  },
  {
    national_number: "174",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/igglybuff.png",
      large: "https://img.pokemondb.net/artwork/igglybuff.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/igglybuff.gif",
    },
    name: "Igglybuff",
    type: [types.normal, types.fairy],
    total: 210,
    hp: 90,
    attack: 30,
    defense: 15,
    sp_atk: 40,
    sp_def: 20,
    speed: 15,
  },
  {
    national_number: "175",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/togepi.png",
      large: "https://img.pokemondb.net/artwork/togepi.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/togepi.gif",
    },
    name: "Togepi",
    type: [types.fairy],
    total: 245,
    hp: 35,
    attack: 20,
    defense: 65,
    sp_atk: 40,
    sp_def: 65,
    speed: 20,
  },
  {
    national_number: "176",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/togetic.png",
      large: "https://img.pokemondb.net/artwork/togetic.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/togetic.gif",
    },
    name: "Togetic",
    type: [types.fairy, types.flying],
    total: 405,
    hp: 55,
    attack: 40,
    defense: 85,
    sp_atk: 80,
    sp_def: 105,
    speed: 40,
  },
  {
    national_number: "177",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/natu.png",
      large: "https://img.pokemondb.net/artwork/natu.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/natu.gif",
    },
    name: "Natu",
    type: [types.psychic, types.flying],
    total: 320,
    hp: 40,
    attack: 50,
    defense: 45,
    sp_atk: 70,
    sp_def: 45,
    speed: 70,
  },
  {
    national_number: "178",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/xatu.png",
      large: "https://img.pokemondb.net/artwork/xatu.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/xatu.gif",
    },
    name: "Xatu",
    type: [types.psychic, types.flying],
    total: 470,
    hp: 65,
    attack: 75,
    defense: 70,
    sp_atk: 95,
    sp_def: 70,
    speed: 95,
  },
  {
    national_number: "179",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mareep.png",
      large: "https://img.pokemondb.net/artwork/mareep.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mareep.gif",
    },
    name: "Mareep",
    type: [types.electric],
    total: 280,
    hp: 55,
    attack: 40,
    defense: 40,
    sp_atk: 65,
    sp_def: 45,
    speed: 35,
  },
  {
    national_number: "180",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/flaaffy.png",
      large: "https://img.pokemondb.net/artwork/flaaffy.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/flaaffy.gif",
    },
    name: "Flaaffy",
    type: [types.electric],
    total: 365,
    hp: 70,
    attack: 55,
    defense: 55,
    sp_atk: 80,
    sp_def: 60,
    speed: 45,
  },
  {
    national_number: "181",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ampharos.png",
      large: "https://img.pokemondb.net/artwork/ampharos.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/ampharos.gif",
    },
    name: "Ampharos",
    type: [types.electric],
    total: 510,
    hp: 90,
    attack: 75,
    defense: 85,
    sp_atk: 115,
    sp_def: 90,
    speed: 55,
  },
  {
    national_number: "181",
    evolution: { name: "Mega Ampharos" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ampharos.png",
      large: "https://img.pokemondb.net/artwork/ampharos.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/ampharos.gif",
    },
    name: "Ampharos",
    type: [types.electric, types.dragon],
    total: 610,
    hp: 90,
    attack: 95,
    defense: 105,
    sp_atk: 165,
    sp_def: 110,
    speed: 45,
  },
  {
    national_number: "182",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bellossom.png",
      large: "https://img.pokemondb.net/artwork/bellossom.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/bellossom.gif",
    },
    name: "Bellossom",
    type: [types.grass],
    total: 490,
    hp: 75,
    attack: 80,
    defense: 95,
    sp_atk: 90,
    sp_def: 100,
    speed: 50,
  },
  {
    national_number: "183",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/marill.png",
      large: "https://img.pokemondb.net/artwork/marill.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/marill.gif",
    },
    name: "Marill",
    type: [types.water, types.fairy],
    total: 250,
    hp: 70,
    attack: 20,
    defense: 50,
    sp_atk: 20,
    sp_def: 50,
    speed: 40,
  },
  {
    national_number: "184",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/azumarill.png",
      large: "https://img.pokemondb.net/artwork/azumarill.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/azumarill.gif",
    },
    name: "Azumarill",
    type: [types.water, types.fairy],
    total: 420,
    hp: 100,
    attack: 50,
    defense: 80,
    sp_atk: 60,
    sp_def: 80,
    speed: 50,
  },
  {
    national_number: "185",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sudowoodo.png",
      large: "https://img.pokemondb.net/artwork/sudowoodo.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/sudowoodo.gif",
    },
    name: "Sudowoodo",
    type: [types.rock],
    total: 410,
    hp: 70,
    attack: 100,
    defense: 115,
    sp_atk: 30,
    sp_def: 65,
    speed: 30,
  },
  {
    national_number: "186",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/politoed.png",
      large: "https://img.pokemondb.net/artwork/politoed.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/politoed.gif",
    },
    name: "Politoed",
    type: [types.water],
    total: 500,
    hp: 90,
    attack: 75,
    defense: 75,
    sp_atk: 90,
    sp_def: 100,
    speed: 70,
  },
  {
    national_number: "187",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hoppip.png",
      large: "https://img.pokemondb.net/artwork/hoppip.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/hoppip.gif",
    },
    name: "Hoppip",
    type: [types.grass, types.flying],
    total: 250,
    hp: 35,
    attack: 35,
    defense: 40,
    sp_atk: 35,
    sp_def: 55,
    speed: 50,
  },
  {
    national_number: "188",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/skiploom.png",
      large: "https://img.pokemondb.net/artwork/skiploom.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/skiploom.gif",
    },
    name: "Skiploom",
    type: [types.grass, types.flying],
    total: 340,
    hp: 55,
    attack: 45,
    defense: 50,
    sp_atk: 45,
    sp_def: 65,
    speed: 80,
  },
  {
    national_number: "189",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/jumpluff.png",
      large: "https://img.pokemondb.net/artwork/jumpluff.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/jumpluff.gif",
    },
    name: "Jumpluff",
    type: [types.grass, types.flying],
    total: 460,
    hp: 75,
    attack: 55,
    defense: 70,
    sp_atk: 55,
    sp_def: 95,
    speed: 110,
  },
  {
    national_number: "190",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/aipom.png",
      large: "https://img.pokemondb.net/artwork/aipom.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/aipom.gif",
    },
    name: "Aipom",
    type: [types.normal],
    total: 360,
    hp: 55,
    attack: 70,
    defense: 55,
    sp_atk: 40,
    sp_def: 55,
    speed: 85,
  },
  {
    national_number: "191",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sunkern.png",
      large: "https://img.pokemondb.net/artwork/sunkern.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/sunkern.gif",
    },
    name: "Sunkern",
    type: [types.grass],
    total: 180,
    hp: 30,
    attack: 30,
    defense: 30,
    sp_atk: 30,
    sp_def: 30,
    speed: 30,
  },
  {
    national_number: "192",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sunflora.png",
      large: "https://img.pokemondb.net/artwork/sunflora.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/sunflora.gif",
    },
    name: "Sunflora",
    type: [types.grass],
    total: 425,
    hp: 75,
    attack: 75,
    defense: 55,
    sp_atk: 105,
    sp_def: 85,
    speed: 30,
  },
  {
    national_number: "193",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/yanma.png",
      large: "https://img.pokemondb.net/artwork/yanma.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/yanma.gif",
    },
    name: "Yanma",
    type: [types.bug, types.flying],
    total: 390,
    hp: 65,
    attack: 65,
    defense: 45,
    sp_atk: 75,
    sp_def: 45,
    speed: 95,
  },
  {
    national_number: "194",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wooper.png",
      large: "https://img.pokemondb.net/artwork/wooper.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/wooper.gif",
    },
    name: "Wooper",
    type: [types.water, types.ground],
    total: 210,
    hp: 55,
    attack: 45,
    defense: 45,
    sp_atk: 25,
    sp_def: 25,
    speed: 15,
  },
  {
    national_number: "195",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/quagsire.png",
      large: "https://img.pokemondb.net/artwork/quagsire.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/quagsire.gif",
    },
    name: "Quagsire",
    type: [types.water, types.ground],
    total: 430,
    hp: 95,
    attack: 85,
    defense: 85,
    sp_atk: 65,
    sp_def: 65,
    speed: 35,
  },
  {
    national_number: "196",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/espeon.png",
      large: "https://img.pokemondb.net/artwork/espeon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/espeon.gif",
    },
    name: "Espeon",
    type: [types.psychic],
    total: 525,
    hp: 65,
    attack: 65,
    defense: 60,
    sp_atk: 130,
    sp_def: 95,
    speed: 110,
  },
  {
    national_number: "197",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/umbreon.png",
      large: "https://img.pokemondb.net/artwork/umbreon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/umbreon.gif",
    },
    name: "Umbreon",
    type: [types.dark],
    total: 525,
    hp: 95,
    attack: 65,
    defense: 110,
    sp_atk: 60,
    sp_def: 130,
    speed: 65,
  },
  {
    national_number: "198",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/murkrow.png",
      large: "https://img.pokemondb.net/artwork/murkrow.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/murkrow.gif",
    },
    name: "Murkrow",
    type: [types.dark, types.flying],
    total: 405,
    hp: 60,
    attack: 85,
    defense: 42,
    sp_atk: 85,
    sp_def: 42,
    speed: 91,
  },
  {
    national_number: "199",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/slowking.png",
      large: "https://img.pokemondb.net/artwork/slowking.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/slowking.gif",
    },
    name: "Slowking",
    type: [types.water, types.psychic],
    total: 490,
    hp: 95,
    attack: 75,
    defense: 80,
    sp_atk: 100,
    sp_def: 110,
    speed: 30,
  },
  {
    national_number: "200",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/misdreavus.png",
      large: "https://img.pokemondb.net/artwork/misdreavus.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/misdreavus.gif",
    },
    name: "Misdreavus",
    type: [types.ghost],
    total: 435,
    hp: 60,
    attack: 60,
    defense: 60,
    sp_atk: 85,
    sp_def: 85,
    speed: 85,
  },
  {
    national_number: "201",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/unown.png",
      large: "https://img.pokemondb.net/artwork/unown.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/unown.gif",
    },
    name: "Unown",
    type: [types.psychic],
    total: 336,
    hp: 48,
    attack: 72,
    defense: 48,
    sp_atk: 72,
    sp_def: 48,
    speed: 48,
  },
  {
    national_number: "202",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wobbuffet.png",
      large: "https://img.pokemondb.net/artwork/wobbuffet.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/wobbuffet.gif",
    },
    name: "Wobbuffet",
    type: [types.psychic],
    total: 405,
    hp: 190,
    attack: 33,
    defense: 58,
    sp_atk: 33,
    sp_def: 58,
    speed: 33,
  },
  {
    national_number: "203",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/girafarig.png",
      large: "https://img.pokemondb.net/artwork/girafarig.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/girafarig.gif",
    },
    name: "Girafarig",
    type: [types.normal, types.psychic],
    total: 455,
    hp: 70,
    attack: 80,
    defense: 65,
    sp_atk: 90,
    sp_def: 65,
    speed: 85,
  },
  {
    national_number: "204",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pineco.png",
      large: "https://img.pokemondb.net/artwork/pineco.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pineco.gif",
    },
    name: "Pineco",
    type: [types.bug],
    total: 290,
    hp: 50,
    attack: 65,
    defense: 90,
    sp_atk: 35,
    sp_def: 35,
    speed: 15,
  },
  {
    national_number: "205",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/forretress.png",
      large: "https://img.pokemondb.net/artwork/forretress.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/forretress.gif",
    },
    name: "Forretress",
    type: [types.bug, types.steel],
    total: 465,
    hp: 75,
    attack: 90,
    defense: 140,
    sp_atk: 60,
    sp_def: 60,
    speed: 40,
  },
  {
    national_number: "206",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dunsparce.png",
      large: "https://img.pokemondb.net/artwork/dunsparce.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/dunsparce.gif",
    },
    name: "Dunsparce",
    type: [types.normal],
    total: 415,
    hp: 100,
    attack: 70,
    defense: 70,
    sp_atk: 65,
    sp_def: 65,
    speed: 45,
  },
  {
    national_number: "207",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gligar.png",
      large: "https://img.pokemondb.net/artwork/gligar.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gligar.gif",
    },
    name: "Gligar",
    type: [types.ground, types.flying],
    total: 430,
    hp: 65,
    attack: 75,
    defense: 105,
    sp_atk: 35,
    sp_def: 65,
    speed: 85,
  },
  {
    national_number: "208",
    evolution: { name: "Mega Steelix" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/steelix.png",
      large: "https://img.pokemondb.net/artwork/steelix.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/steelix.gif",
    },
    name: "Steelix",
    type: [types.steel, types.ground],
    total: 610,
    hp: 75,
    attack: 125,
    defense: 230,
    sp_atk: 55,
    sp_def: 95,
    speed: 30,
  },
  {
    national_number: "208",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/steelix.png",
      large: "https://img.pokemondb.net/artwork/steelix.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/steelix.gif",
    },
    name: "Steelix",
    type: [types.steel, types.ground],
    total: 510,
    hp: 75,
    attack: 85,
    defense: 200,
    sp_atk: 55,
    sp_def: 65,
    speed: 30,
  },
  {
    national_number: "209",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/snubbull.png",
      large: "https://img.pokemondb.net/artwork/snubbull.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/snubbull.gif",
    },
    name: "Snubbull",
    type: [types.fairy],
    total: 300,
    hp: 60,
    attack: 80,
    defense: 50,
    sp_atk: 40,
    sp_def: 40,
    speed: 30,
  },
  {
    national_number: "210",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/granbull.png",
      large: "https://img.pokemondb.net/artwork/granbull.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/granbull.gif",
    },
    name: "Granbull",
    type: [types.fairy],
    total: 450,
    hp: 90,
    attack: 120,
    defense: 75,
    sp_atk: 60,
    sp_def: 60,
    speed: 45,
  },
  {
    national_number: "211",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/qwilfish.png",
      large: "https://img.pokemondb.net/artwork/qwilfish.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/qwilfish.gif",
    },
    name: "Qwilfish",
    type: [types.water, types.poison],
    total: 440,
    hp: 65,
    attack: 95,
    defense: 85,
    sp_atk: 55,
    sp_def: 55,
    speed: 85,
  },
  {
    national_number: "212",
    evolution: { name: "Mega Scizor" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/scizor.png",
      large: "https://img.pokemondb.net/artwork/scizor.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/scizor.gif",
    },
    name: "Scizor",
    type: [types.bug, types.steel],
    total: 600,
    hp: 70,
    attack: 150,
    defense: 140,
    sp_atk: 65,
    sp_def: 100,
    speed: 75,
  },
  {
    national_number: "212",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/scizor.png",
      large: "https://img.pokemondb.net/artwork/scizor.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/scizor.gif",
    },
    name: "Scizor",
    type: [types.bug, types.steel],
    total: 500,
    hp: 70,
    attack: 130,
    defense: 100,
    sp_atk: 55,
    sp_def: 80,
    speed: 65,
  },
  {
    national_number: "213",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shuckle.png",
      large: "https://img.pokemondb.net/artwork/shuckle.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/shuckle.gif",
    },
    name: "Shuckle",
    type: [types.bug, types.rock],
    total: 505,
    hp: 20,
    attack: 10,
    defense: 230,
    sp_atk: 10,
    sp_def: 230,
    speed: 5,
  },
  {
    national_number: "214",
    evolution: { name: "Mega Heracross" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/heracross.png",
      large: "https://img.pokemondb.net/artwork/heracross.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/heracross.gif",
    },
    name: "Heracross",
    type: [types.bug, types.fighting],
    total: 600,
    hp: 80,
    attack: 185,
    defense: 115,
    sp_atk: 40,
    sp_def: 105,
    speed: 75,
  },
  {
    national_number: "214",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/heracross.png",
      large: "https://img.pokemondb.net/artwork/heracross.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/heracross.gif",
    },
    name: "Heracross",
    type: [types.bug, types.fighting],
    total: 500,
    hp: 80,
    attack: 125,
    defense: 75,
    sp_atk: 40,
    sp_def: 95,
    speed: 85,
  },
  {
    national_number: "215",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sneasel.png",
      large: "https://img.pokemondb.net/artwork/sneasel.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/sneasel.gif",
    },
    name: "Sneasel",
    type: [types.dark, types.ice],
    total: 430,
    hp: 55,
    attack: 95,
    defense: 55,
    sp_atk: 35,
    sp_def: 75,
    speed: 115,
  },
  {
    national_number: "216",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/teddiursa.png",
      large: "https://img.pokemondb.net/artwork/teddiursa.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/teddiursa.gif",
    },
    name: "Teddiursa",
    type: [types.normal],
    total: 330,
    hp: 60,
    attack: 80,
    defense: 50,
    sp_atk: 50,
    sp_def: 50,
    speed: 40,
  },
  {
    national_number: "217",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ursaring.png",
      large: "https://img.pokemondb.net/artwork/ursaring.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/ursaring.gif",
    },
    name: "Ursaring",
    type: [types.normal],
    total: 500,
    hp: 90,
    attack: 130,
    defense: 75,
    sp_atk: 75,
    sp_def: 75,
    speed: 55,
  },
  {
    national_number: "218",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/slugma.png",
      large: "https://img.pokemondb.net/artwork/slugma.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/slugma.gif",
    },
    name: "Slugma",
    type: [types.fire],
    total: 250,
    hp: 40,
    attack: 40,
    defense: 40,
    sp_atk: 70,
    sp_def: 40,
    speed: 20,
  },
  {
    national_number: "219",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/magcargo.png",
      large: "https://img.pokemondb.net/artwork/magcargo.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/magcargo.gif",
    },
    name: "Magcargo",
    type: [types.fire, types.rock],
    total: 430,
    hp: 60,
    attack: 50,
    defense: 120,
    sp_atk: 90,
    sp_def: 80,
    speed: 30,
  },
  {
    national_number: "220",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/swinub.png",
      large: "https://img.pokemondb.net/artwork/swinub.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/swinub.gif",
    },
    name: "Swinub",
    type: [types.ice, types.ground],
    total: 250,
    hp: 50,
    attack: 50,
    defense: 40,
    sp_atk: 30,
    sp_def: 30,
    speed: 50,
  },
  {
    national_number: "221",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/piloswine.png",
      large: "https://img.pokemondb.net/artwork/piloswine.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/piloswine.gif",
    },
    name: "Piloswine",
    type: [types.ice, types.ground],
    total: 450,
    hp: 100,
    attack: 100,
    defense: 80,
    sp_atk: 60,
    sp_def: 60,
    speed: 50,
  },
  {
    national_number: "222",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/corsola.png",
      large: "https://img.pokemondb.net/artwork/corsola.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/corsola.gif",
    },
    name: "Corsola",
    type: [types.water, types.rock],
    total: 410,
    hp: 65,
    attack: 55,
    defense: 95,
    sp_atk: 65,
    sp_def: 95,
    speed: 35,
  },
  {
    national_number: "223",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/remoraid.png",
      large: "https://img.pokemondb.net/artwork/remoraid.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/remoraid.gif",
    },
    name: "Remoraid",
    type: [types.water],
    total: 300,
    hp: 35,
    attack: 65,
    defense: 35,
    sp_atk: 65,
    sp_def: 35,
    speed: 65,
  },
  {
    national_number: "224",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/octillery.png",
      large: "https://img.pokemondb.net/artwork/octillery.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/octillery.gif",
    },
    name: "Octillery",
    type: [types.water],
    total: 480,
    hp: 75,
    attack: 105,
    defense: 75,
    sp_atk: 105,
    sp_def: 75,
    speed: 45,
  },
  {
    national_number: "225",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/delibird.png",
      large: "https://img.pokemondb.net/artwork/delibird.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/delibird.gif",
    },
    name: "Delibird",
    type: [types.ice, types.flying],
    total: 330,
    hp: 45,
    attack: 55,
    defense: 45,
    sp_atk: 65,
    sp_def: 45,
    speed: 75,
  },
  {
    national_number: "226",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mantine.png",
      large: "https://img.pokemondb.net/artwork/mantine.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mantine.gif",
    },
    name: "Mantine",
    type: [types.water, types.flying],
    total: 485,
    hp: 85,
    attack: 40,
    defense: 70,
    sp_atk: 80,
    sp_def: 140,
    speed: 70,
  },
  {
    national_number: "227",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/skarmory.png",
      large: "https://img.pokemondb.net/artwork/skarmory.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/skarmory.gif",
    },
    name: "Skarmory",
    type: [types.steel, types.flying],
    total: 465,
    hp: 65,
    attack: 80,
    defense: 140,
    sp_atk: 40,
    sp_def: 70,
    speed: 70,
  },
  {
    national_number: "228",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/houndour.png",
      large: "https://img.pokemondb.net/artwork/houndour.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/houndour.gif",
    },
    name: "Houndour",
    type: [types.dark, types.fire],
    total: 330,
    hp: 45,
    attack: 60,
    defense: 30,
    sp_atk: 80,
    sp_def: 50,
    speed: 65,
  },
  {
    national_number: "229",
    evolution: { name: "Mega Houndoom" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/houndoom.png",
      large: "https://img.pokemondb.net/artwork/houndoom.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/houndoom.gif",
    },
    name: "Houndoom",
    type: [types.dark, types.fire],
    total: 600,
    hp: 75,
    attack: 90,
    defense: 90,
    sp_atk: 140,
    sp_def: 90,
    speed: 115,
  },
  {
    national_number: "229",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/houndoom.png",
      large: "https://img.pokemondb.net/artwork/houndoom.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/houndoom.gif",
    },
    name: "Houndoom",
    type: [types.dark, types.fire],
    total: 500,
    hp: 75,
    attack: 90,
    defense: 50,
    sp_atk: 110,
    sp_def: 80,
    speed: 95,
  },
  {
    national_number: "230",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kingdra.png",
      large: "https://img.pokemondb.net/artwork/kingdra.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/kingdra.gif",
    },
    name: "Kingdra",
    type: [types.water, types.dragon],
    total: 540,
    hp: 75,
    attack: 95,
    defense: 95,
    sp_atk: 95,
    sp_def: 95,
    speed: 85,
  },
  {
    national_number: "231",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/phanpy.png",
      large: "https://img.pokemondb.net/artwork/phanpy.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/phanpy.gif",
    },
    name: "Phanpy",
    type: [types.ground],
    total: 330,
    hp: 90,
    attack: 60,
    defense: 60,
    sp_atk: 40,
    sp_def: 40,
    speed: 40,
  },
  {
    national_number: "232",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/donphan.png",
      large: "https://img.pokemondb.net/artwork/donphan.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/donphan.gif",
    },
    name: "Donphan",
    type: [types.ground],
    total: 500,
    hp: 90,
    attack: 120,
    defense: 120,
    sp_atk: 60,
    sp_def: 60,
    speed: 50,
  },
  {
    national_number: "233",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/porygon2.png",
      large: "https://img.pokemondb.net/artwork/porygon2.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/porygon2.gif",
    },
    name: "Porygon2",
    type: [types.normal],
    total: 515,
    hp: 85,
    attack: 80,
    defense: 90,
    sp_atk: 105,
    sp_def: 95,
    speed: 60,
  },
  {
    national_number: "234",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/stantler.png",
      large: "https://img.pokemondb.net/artwork/stantler.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/stantler.gif",
    },
    name: "Stantler",
    type: [types.normal],
    total: 465,
    hp: 73,
    attack: 95,
    defense: 62,
    sp_atk: 85,
    sp_def: 65,
    speed: 85,
  },
  {
    national_number: "235",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/smeargle.png",
      large: "https://img.pokemondb.net/artwork/smeargle.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/smeargle.gif",
    },
    name: "Smeargle",
    type: [types.normal],
    total: 250,
    hp: 55,
    attack: 20,
    defense: 35,
    sp_atk: 20,
    sp_def: 45,
    speed: 75,
  },
  {
    national_number: "236",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tyrogue.png",
      large: "https://img.pokemondb.net/artwork/tyrogue.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/tyrogue.gif",
    },
    name: "Tyrogue",
    type: [types.fighting],
    total: 210,
    hp: 35,
    attack: 35,
    defense: 35,
    sp_atk: 35,
    sp_def: 35,
    speed: 35,
  },
  {
    national_number: "237",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hitmontop.png",
      large: "https://img.pokemondb.net/artwork/hitmontop.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/hitmontop.gif",
    },
    name: "Hitmontop",
    type: [types.fighting],
    total: 455,
    hp: 50,
    attack: 95,
    defense: 95,
    sp_atk: 35,
    sp_def: 110,
    speed: 70,
  },
  {
    national_number: "238",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/smoochum.png",
      large: "https://img.pokemondb.net/artwork/smoochum.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/smoochum.gif",
    },
    name: "Smoochum",
    type: [types.ice, types.psychic],
    total: 305,
    hp: 45,
    attack: 30,
    defense: 15,
    sp_atk: 85,
    sp_def: 65,
    speed: 65,
  },
  {
    national_number: "239",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/elekid.png",
      large: "https://img.pokemondb.net/artwork/elekid.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/elekid.gif",
    },
    name: "Elekid",
    type: [types.electric],
    total: 360,
    hp: 45,
    attack: 63,
    defense: 37,
    sp_atk: 65,
    sp_def: 55,
    speed: 95,
  },
  {
    national_number: "240",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/magby.png",
      large: "https://img.pokemondb.net/artwork/magby.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/magby.gif",
    },
    name: "Magby",
    type: [types.fire],
    total: 365,
    hp: 45,
    attack: 75,
    defense: 37,
    sp_atk: 70,
    sp_def: 55,
    speed: 83,
  },
  {
    national_number: "241",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/miltank.png",
      large: "https://img.pokemondb.net/artwork/miltank.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/miltank.gif",
    },
    name: "Miltank",
    type: [types.normal],
    total: 490,
    hp: 95,
    attack: 80,
    defense: 105,
    sp_atk: 40,
    sp_def: 70,
    speed: 100,
  },
  {
    national_number: "242",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/blissey.png",
      large: "https://img.pokemondb.net/artwork/blissey.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/blissey.gif",
    },
    name: "Blissey",
    type: [types.normal],
    total: 540,
    hp: 255,
    attack: 10,
    defense: 10,
    sp_atk: 75,
    sp_def: 135,
    speed: 55,
  },
  {
    national_number: "243",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/raikou.png",
      large: "https://img.pokemondb.net/artwork/raikou.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/raikou.gif",
    },
    name: "Raikou",
    type: [types.electric],
    total: 580,
    hp: 90,
    attack: 85,
    defense: 75,
    sp_atk: 115,
    sp_def: 100,
    speed: 115,
  },
  {
    national_number: "244",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/entei.png",
      large: "https://img.pokemondb.net/artwork/entei.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/entei.gif",
    },
    name: "Entei",
    type: [types.fire],
    total: 580,
    hp: 115,
    attack: 115,
    defense: 85,
    sp_atk: 90,
    sp_def: 75,
    speed: 100,
  },
  {
    national_number: "245",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/suicune.png",
      large: "https://img.pokemondb.net/artwork/suicune.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/suicune.gif",
    },
    name: "Suicune",
    type: [types.water],
    total: 580,
    hp: 100,
    attack: 75,
    defense: 115,
    sp_atk: 90,
    sp_def: 115,
    speed: 85,
  },
  {
    national_number: "246",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/larvitar.png",
      large: "https://img.pokemondb.net/artwork/larvitar.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/larvitar.gif",
    },
    name: "Larvitar",
    type: [types.rock, types.ground],
    total: 300,
    hp: 50,
    attack: 64,
    defense: 50,
    sp_atk: 45,
    sp_def: 50,
    speed: 41,
  },
  {
    national_number: "247",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pupitar.png",
      large: "https://img.pokemondb.net/artwork/pupitar.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pupitar.gif",
    },
    name: "Pupitar",
    type: [types.rock, types.ground],
    total: 410,
    hp: 70,
    attack: 84,
    defense: 70,
    sp_atk: 65,
    sp_def: 70,
    speed: 51,
  },
  {
    national_number: "248",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tyranitar.png",
      large: "https://img.pokemondb.net/artwork/tyranitar.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/tyranitar.gif",
    },
    name: "Tyranitar",
    type: [types.rock, types.dark],
    total: 600,
    hp: 100,
    attack: 134,
    defense: 110,
    sp_atk: 95,
    sp_def: 100,
    speed: 61,
  },
  {
    national_number: "248",
    evolution: { name: "Mega Tyranitar" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tyranitar.png",
      large: "https://img.pokemondb.net/artwork/tyranitar.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/tyranitar.gif",
    },
    name: "Tyranitar",
    type: [types.rock, types.dark],
    total: 700,
    hp: 100,
    attack: 164,
    defense: 150,
    sp_atk: 95,
    sp_def: 120,
    speed: 71,
  },
  {
    national_number: "249",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lugia.png",
      large: "https://img.pokemondb.net/artwork/lugia.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/lugia.gif",
    },
    name: "Lugia",
    type: [types.psychic, types.flying],
    total: 680,
    hp: 106,
    attack: 90,
    defense: 130,
    sp_atk: 90,
    sp_def: 154,
    speed: 110,
  },
  {
    national_number: "250",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ho-oh.png",
      large: "https://img.pokemondb.net/artwork/ho-oh.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/ho-oh.gif",
    },
    name: "Ho-oh",
    type: [types.fire, types.flying],
    total: 680,
    hp: 106,
    attack: 130,
    defense: 90,
    sp_atk: 110,
    sp_def: 154,
    speed: 90,
  },
  {
    national_number: "251",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/celebi.png",
      large: "https://img.pokemondb.net/artwork/celebi.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/celebi.gif",
    },
    name: "Celebi",
    type: [types.psychic, types.grass],
    total: 600,
    hp: 100,
    attack: 100,
    defense: 100,
    sp_atk: 100,
    sp_def: 100,
    speed: 100,
  },
  {
    national_number: "252",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/treecko.png",
      large: "https://img.pokemondb.net/artwork/treecko.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/treecko.gif",
    },
    name: "Treecko",
    type: [types.grass],
    total: 310,
    hp: 40,
    attack: 45,
    defense: 35,
    sp_atk: 65,
    sp_def: 55,
    speed: 70,
  },
  {
    national_number: "253",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/grovyle.png",
      large: "https://img.pokemondb.net/artwork/grovyle.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/grovyle.gif",
    },
    name: "Grovyle",
    type: [types.grass],
    total: 405,
    hp: 50,
    attack: 65,
    defense: 45,
    sp_atk: 85,
    sp_def: 65,
    speed: 95,
  },
  {
    national_number: "254",
    evolution: { name: "Mega Sceptile" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sceptile.png",
      large: "https://img.pokemondb.net/artwork/sceptile.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/sceptile.gif",
    },
    name: "Sceptile",
    type: [types.grass, types.dragon],
    total: 630,
    hp: 70,
    attack: 110,
    defense: 75,
    sp_atk: 145,
    sp_def: 85,
    speed: 145,
  },
  {
    national_number: "254",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sceptile.png",
      large: "https://img.pokemondb.net/artwork/sceptile.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/sceptile.gif",
    },
    name: "Sceptile",
    type: [types.grass],
    total: 530,
    hp: 70,
    attack: 85,
    defense: 65,
    sp_atk: 105,
    sp_def: 85,
    speed: 120,
  },
  {
    national_number: "255",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/torchic.png",
      large: "https://img.pokemondb.net/artwork/torchic.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/torchic.gif",
    },
    name: "Torchic",
    type: [types.fire],
    total: 310,
    hp: 45,
    attack: 60,
    defense: 40,
    sp_atk: 70,
    sp_def: 50,
    speed: 45,
  },
  {
    national_number: "256",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/combusken.png",
      large: "https://img.pokemondb.net/artwork/combusken.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/combusken.gif",
    },
    name: "Combusken",
    type: [types.fire, types.fighting],
    total: 405,
    hp: 60,
    attack: 85,
    defense: 60,
    sp_atk: 85,
    sp_def: 60,
    speed: 55,
  },
  {
    national_number: "257",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/blaziken.png",
      large: "https://img.pokemondb.net/artwork/blaziken.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/blaziken.gif",
    },
    name: "Blaziken",
    type: [types.fire, types.fighting],
    total: 530,
    hp: 80,
    attack: 120,
    defense: 70,
    sp_atk: 110,
    sp_def: 70,
    speed: 80,
  },
  {
    national_number: "257",
    evolution: { name: "Mega Blaziken" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/blaziken.png",
      large: "https://img.pokemondb.net/artwork/blaziken.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/blaziken.gif",
    },
    name: "Blaziken",
    type: [types.fire, types.fighting],
    total: 630,
    hp: 80,
    attack: 160,
    defense: 80,
    sp_atk: 130,
    sp_def: 80,
    speed: 100,
  },
  {
    national_number: "258",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mudkip.png",
      large: "https://img.pokemondb.net/artwork/mudkip.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mudkip.gif",
    },
    name: "Mudkip",
    type: [types.water],
    total: 310,
    hp: 50,
    attack: 70,
    defense: 50,
    sp_atk: 50,
    sp_def: 50,
    speed: 40,
  },
  {
    national_number: "259",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/marshtomp.png",
      large: "https://img.pokemondb.net/artwork/marshtomp.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/marshtomp.gif",
    },
    name: "Marshtomp",
    type: [types.water, types.ground],
    total: 405,
    hp: 70,
    attack: 85,
    defense: 70,
    sp_atk: 60,
    sp_def: 70,
    speed: 50,
  },
  {
    national_number: "260",
    evolution: { name: "Mega Swampert" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/swampert.png",
      large: "https://img.pokemondb.net/artwork/swampert.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/swampert.gif",
    },
    name: "Swampert",
    type: [types.water, types.ground],
    total: 635,
    hp: 100,
    attack: 150,
    defense: 110,
    sp_atk: 95,
    sp_def: 110,
    speed: 70,
  },
  {
    national_number: "260",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/swampert.png",
      large: "https://img.pokemondb.net/artwork/swampert.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/swampert.gif",
    },
    name: "Swampert",
    type: [types.water, types.ground],
    total: 535,
    hp: 100,
    attack: 110,
    defense: 90,
    sp_atk: 85,
    sp_def: 90,
    speed: 60,
  },
  {
    national_number: "261",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/poochyena.png",
      large: "https://img.pokemondb.net/artwork/poochyena.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/poochyena.gif",
    },
    name: "Poochyena",
    type: [types.dark],
    total: 220,
    hp: 35,
    attack: 55,
    defense: 35,
    sp_atk: 30,
    sp_def: 30,
    speed: 35,
  },
  {
    national_number: "262",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mightyena.png",
      large: "https://img.pokemondb.net/artwork/mightyena.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mightyena.gif",
    },
    name: "Mightyena",
    type: [types.dark],
    total: 420,
    hp: 70,
    attack: 90,
    defense: 70,
    sp_atk: 60,
    sp_def: 60,
    speed: 70,
  },
  {
    national_number: "263",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zigzagoon.png",
      large: "https://img.pokemondb.net/artwork/zigzagoon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/zigzagoon.gif",
    },
    name: "Zigzagoon",
    type: [types.normal],
    total: 240,
    hp: 38,
    attack: 30,
    defense: 41,
    sp_atk: 30,
    sp_def: 41,
    speed: 60,
  },
  {
    national_number: "264",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/linoone.png",
      large: "https://img.pokemondb.net/artwork/linoone.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/linoone.gif",
    },
    name: "Linoone",
    type: [types.normal],
    total: 420,
    hp: 78,
    attack: 70,
    defense: 61,
    sp_atk: 50,
    sp_def: 61,
    speed: 100,
  },
  {
    national_number: "265",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wurmple.png",
      large: "https://img.pokemondb.net/artwork/wurmple.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/wurmple.gif",
    },
    name: "Wurmple",
    type: [types.bug],
    total: 195,
    hp: 45,
    attack: 45,
    defense: 35,
    sp_atk: 20,
    sp_def: 30,
    speed: 20,
  },
  {
    national_number: "266",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/silcoon.png",
      large: "https://img.pokemondb.net/artwork/silcoon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/silcoon.gif",
    },
    name: "Silcoon",
    type: [types.bug],
    total: 205,
    hp: 50,
    attack: 35,
    defense: 55,
    sp_atk: 25,
    sp_def: 25,
    speed: 15,
  },
  {
    national_number: "267",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/beautifly.png",
      large: "https://img.pokemondb.net/artwork/beautifly.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/beautifly.gif",
    },
    name: "Beautifly",
    type: [types.bug, types.flying],
    total: 395,
    hp: 60,
    attack: 70,
    defense: 50,
    sp_atk: 100,
    sp_def: 50,
    speed: 65,
  },
  {
    national_number: "268",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cascoon.png",
      large: "https://img.pokemondb.net/artwork/cascoon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/cascoon.gif",
    },
    name: "Cascoon",
    type: [types.bug],
    total: 205,
    hp: 50,
    attack: 35,
    defense: 55,
    sp_atk: 25,
    sp_def: 25,
    speed: 15,
  },
  {
    national_number: "269",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dustox.png",
      large: "https://img.pokemondb.net/artwork/dustox.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/dustox.gif",
    },
    name: "Dustox",
    type: [types.bug, types.poison],
    total: 385,
    hp: 60,
    attack: 50,
    defense: 70,
    sp_atk: 50,
    sp_def: 90,
    speed: 65,
  },
  {
    national_number: "270",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lotad.png",
      large: "https://img.pokemondb.net/artwork/lotad.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/lotad.gif",
    },
    name: "Lotad",
    type: [types.water, types.grass],
    total: 220,
    hp: 40,
    attack: 30,
    defense: 30,
    sp_atk: 40,
    sp_def: 50,
    speed: 30,
  },
  {
    national_number: "271",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lombre.png",
      large: "https://img.pokemondb.net/artwork/lombre.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/lombre.gif",
    },
    name: "Lombre",
    type: [types.water, types.grass],
    total: 340,
    hp: 60,
    attack: 50,
    defense: 50,
    sp_atk: 60,
    sp_def: 70,
    speed: 50,
  },
  {
    national_number: "272",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ludicolo.png",
      large: "https://img.pokemondb.net/artwork/ludicolo.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/ludicolo.gif",
    },
    name: "Ludicolo",
    type: [types.water, types.grass],
    total: 480,
    hp: 80,
    attack: 70,
    defense: 70,
    sp_atk: 90,
    sp_def: 100,
    speed: 70,
  },
  {
    national_number: "273",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/seedot.png",
      large: "https://img.pokemondb.net/artwork/seedot.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/seedot.gif",
    },
    name: "Seedot",
    type: [types.grass],
    total: 220,
    hp: 40,
    attack: 40,
    defense: 50,
    sp_atk: 30,
    sp_def: 30,
    speed: 30,
  },
  {
    national_number: "274",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nuzleaf.png",
      large: "https://img.pokemondb.net/artwork/nuzleaf.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/nuzleaf.gif",
    },
    name: "Nuzleaf",
    type: [types.grass, types.dark],
    total: 340,
    hp: 70,
    attack: 70,
    defense: 40,
    sp_atk: 60,
    sp_def: 40,
    speed: 60,
  },
  {
    national_number: "275",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shiftry.png",
      large: "https://img.pokemondb.net/artwork/shiftry.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/shiftry.gif",
    },
    name: "Shiftry",
    type: [types.grass, types.dark],
    total: 480,
    hp: 90,
    attack: 100,
    defense: 60,
    sp_atk: 90,
    sp_def: 60,
    speed: 80,
  },
  {
    national_number: "276",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/taillow.png",
      large: "https://img.pokemondb.net/artwork/taillow.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/taillow.gif",
    },
    name: "Taillow",
    type: [types.normal, types.flying],
    total: 270,
    hp: 40,
    attack: 55,
    defense: 30,
    sp_atk: 30,
    sp_def: 30,
    speed: 85,
  },
  {
    national_number: "277",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/swellow.png",
      large: "https://img.pokemondb.net/artwork/swellow.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/swellow.gif",
    },
    name: "Swellow",
    type: [types.normal, types.flying],
    total: 455,
    hp: 60,
    attack: 85,
    defense: 60,
    sp_atk: 75,
    sp_def: 50,
    speed: 125,
  },
  {
    national_number: "278",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wingull.png",
      large: "https://img.pokemondb.net/artwork/wingull.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/wingull.gif",
    },
    name: "Wingull",
    type: [types.water, types.flying],
    total: 270,
    hp: 40,
    attack: 30,
    defense: 30,
    sp_atk: 55,
    sp_def: 30,
    speed: 85,
  },
  {
    national_number: "279",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pelipper.png",
      large: "https://img.pokemondb.net/artwork/pelipper.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pelipper.gif",
    },
    name: "Pelipper",
    type: [types.water, types.flying],
    total: 440,
    hp: 60,
    attack: 50,
    defense: 100,
    sp_atk: 95,
    sp_def: 70,
    speed: 65,
  },
  {
    national_number: "280",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ralts.png",
      large: "https://img.pokemondb.net/artwork/ralts.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/ralts.gif",
    },
    name: "Ralts",
    type: [types.psychic, types.fairy],
    total: 198,
    hp: 28,
    attack: 25,
    defense: 25,
    sp_atk: 45,
    sp_def: 35,
    speed: 40,
  },
  {
    national_number: "281",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kirlia.png",
      large: "https://img.pokemondb.net/artwork/kirlia.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/kirlia.gif",
    },
    name: "Kirlia",
    type: [types.psychic, types.fairy],
    total: 278,
    hp: 38,
    attack: 35,
    defense: 35,
    sp_atk: 65,
    sp_def: 55,
    speed: 50,
  },
  {
    national_number: "282",
    evolution: { name: "Mega Gardevoir" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gardevoir.png",
      large: "https://img.pokemondb.net/artwork/gardevoir.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gardevoir.gif",
    },
    name: "Gardevoir",
    type: [types.psychic, types.fairy],
    total: 618,
    hp: 68,
    attack: 85,
    defense: 65,
    sp_atk: 165,
    sp_def: 135,
    speed: 100,
  },
  {
    national_number: "282",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gardevoir.png",
      large: "https://img.pokemondb.net/artwork/gardevoir.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gardevoir.gif",
    },
    name: "Gardevoir",
    type: [types.psychic, types.fairy],
    total: 518,
    hp: 68,
    attack: 65,
    defense: 65,
    sp_atk: 125,
    sp_def: 115,
    speed: 80,
  },
  {
    national_number: "283",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/surskit.png",
      large: "https://img.pokemondb.net/artwork/surskit.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/surskit.gif",
    },
    name: "Surskit",
    type: [types.bug, types.water],
    total: 269,
    hp: 40,
    attack: 30,
    defense: 32,
    sp_atk: 50,
    sp_def: 52,
    speed: 65,
  },
  {
    national_number: "284",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/masquerain.png",
      large: "https://img.pokemondb.net/artwork/masquerain.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/masquerain.gif",
    },
    name: "Masquerain",
    type: [types.bug, types.flying],
    total: 454,
    hp: 70,
    attack: 60,
    defense: 62,
    sp_atk: 100,
    sp_def: 82,
    speed: 80,
  },
  {
    national_number: "285",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shroomish.png",
      large: "https://img.pokemondb.net/artwork/shroomish.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/shroomish.gif",
    },
    name: "Shroomish",
    type: [types.grass],
    total: 295,
    hp: 60,
    attack: 40,
    defense: 60,
    sp_atk: 40,
    sp_def: 60,
    speed: 35,
  },
  {
    national_number: "286",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/breloom.png",
      large: "https://img.pokemondb.net/artwork/breloom.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/breloom.gif",
    },
    name: "Breloom",
    type: [types.grass, types.fighting],
    total: 460,
    hp: 60,
    attack: 130,
    defense: 80,
    sp_atk: 60,
    sp_def: 60,
    speed: 70,
  },
  {
    national_number: "287",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/slakoth.png",
      large: "https://img.pokemondb.net/artwork/slakoth.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/slakoth.gif",
    },
    name: "Slakoth",
    type: [types.normal],
    total: 280,
    hp: 60,
    attack: 60,
    defense: 60,
    sp_atk: 35,
    sp_def: 35,
    speed: 30,
  },
  {
    national_number: "288",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vigoroth.png",
      large: "https://img.pokemondb.net/artwork/vigoroth.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/vigoroth.gif",
    },
    name: "Vigoroth",
    type: [types.normal],
    total: 440,
    hp: 80,
    attack: 80,
    defense: 80,
    sp_atk: 55,
    sp_def: 55,
    speed: 90,
  },
  {
    national_number: "289",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/slaking.png",
      large: "https://img.pokemondb.net/artwork/slaking.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/slaking.gif",
    },
    name: "Slaking",
    type: [types.normal],
    total: 670,
    hp: 150,
    attack: 160,
    defense: 100,
    sp_atk: 95,
    sp_def: 65,
    speed: 100,
  },
  {
    national_number: "290",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nincada.png",
      large: "https://img.pokemondb.net/artwork/nincada.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/nincada.gif",
    },
    name: "Nincada",
    type: [types.bug, types.ground],
    total: 266,
    hp: 31,
    attack: 45,
    defense: 90,
    sp_atk: 30,
    sp_def: 30,
    speed: 40,
  },
  {
    national_number: "291",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ninjask.png",
      large: "https://img.pokemondb.net/artwork/ninjask.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/ninjask.gif",
    },
    name: "Ninjask",
    type: [types.bug, types.flying],
    total: 456,
    hp: 61,
    attack: 90,
    defense: 45,
    sp_atk: 50,
    sp_def: 50,
    speed: 160,
  },
  {
    national_number: "292",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shedinja.png",
      large: "https://img.pokemondb.net/artwork/shedinja.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/shedinja.gif",
    },
    name: "Shedinja",
    type: [types.bug, types.ghost],
    total: 236,
    hp: 1,
    attack: 90,
    defense: 45,
    sp_atk: 30,
    sp_def: 30,
    speed: 40,
  },
  {
    national_number: "293",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/whismur.png",
      large: "https://img.pokemondb.net/artwork/whismur.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/whismur.gif",
    },
    name: "Whismur",
    type: [types.normal],
    total: 240,
    hp: 64,
    attack: 51,
    defense: 23,
    sp_atk: 51,
    sp_def: 23,
    speed: 28,
  },
  {
    national_number: "294",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/loudred.png",
      large: "https://img.pokemondb.net/artwork/loudred.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/loudred.gif",
    },
    name: "Loudred",
    type: [types.normal],
    total: 360,
    hp: 84,
    attack: 71,
    defense: 43,
    sp_atk: 71,
    sp_def: 43,
    speed: 48,
  },
  {
    national_number: "295",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/exploud.png",
      large: "https://img.pokemondb.net/artwork/exploud.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/exploud.gif",
    },
    name: "Exploud",
    type: [types.normal],
    total: 490,
    hp: 104,
    attack: 91,
    defense: 63,
    sp_atk: 91,
    sp_def: 73,
    speed: 68,
  },
  {
    national_number: "296",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/makuhita.png",
      large: "https://img.pokemondb.net/artwork/makuhita.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/makuhita.gif",
    },
    name: "Makuhita",
    type: [types.fighting],
    total: 237,
    hp: 72,
    attack: 60,
    defense: 30,
    sp_atk: 20,
    sp_def: 30,
    speed: 25,
  },
  {
    national_number: "297",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hariyama.png",
      large: "https://img.pokemondb.net/artwork/hariyama.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/hariyama.gif",
    },
    name: "Hariyama",
    type: [types.fighting],
    total: 474,
    hp: 144,
    attack: 120,
    defense: 60,
    sp_atk: 40,
    sp_def: 60,
    speed: 50,
  },
  {
    national_number: "298",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/azurill.png",
      large: "https://img.pokemondb.net/artwork/azurill.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/azurill.gif",
    },
    name: "Azurill",
    type: [types.normal, types.fairy],
    total: 190,
    hp: 50,
    attack: 20,
    defense: 40,
    sp_atk: 20,
    sp_def: 40,
    speed: 20,
  },
  {
    national_number: "299",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nosepass.png",
      large: "https://img.pokemondb.net/artwork/nosepass.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/nosepass.gif",
    },
    name: "Nosepass",
    type: [types.rock],
    total: 375,
    hp: 30,
    attack: 45,
    defense: 135,
    sp_atk: 45,
    sp_def: 90,
    speed: 30,
  },
  {
    national_number: "300",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/skitty.png",
      large: "https://img.pokemondb.net/artwork/skitty.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/skitty.gif",
    },
    name: "Skitty",
    type: [types.normal],
    total: 260,
    hp: 50,
    attack: 45,
    defense: 45,
    sp_atk: 35,
    sp_def: 35,
    speed: 50,
  },
  {
    national_number: "301",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/delcatty.png",
      large: "https://img.pokemondb.net/artwork/delcatty.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/delcatty.gif",
    },
    name: "Delcatty",
    type: [types.normal],
    total: 400,
    hp: 70,
    attack: 65,
    defense: 65,
    sp_atk: 55,
    sp_def: 55,
    speed: 90,
  },
  {
    national_number: "302",
    evolution: { name: "Mega Sableye" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sableye.png",
      large: "https://img.pokemondb.net/artwork/sableye.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/sableye.gif",
    },
    name: "Sableye",
    type: [types.dark, types.ghost],
    total: 480,
    hp: 50,
    attack: 85,
    defense: 125,
    sp_atk: 85,
    sp_def: 115,
    speed: 20,
  },
  {
    national_number: "302",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sableye.png",
      large: "https://img.pokemondb.net/artwork/sableye.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/sableye.gif",
    },
    name: "Sableye",
    type: [types.dark, types.ghost],
    total: 380,
    hp: 50,
    attack: 75,
    defense: 75,
    sp_atk: 65,
    sp_def: 65,
    speed: 50,
  },
  {
    national_number: "303",
    evolution: { name: "Mega Mawile" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mawile.png",
      large: "https://img.pokemondb.net/artwork/mawile.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mawile.gif",
    },
    name: "Mawile",
    type: [types.steel, types.fairy],
    total: 480,
    hp: 50,
    attack: 105,
    defense: 125,
    sp_atk: 55,
    sp_def: 95,
    speed: 50,
  },
  {
    national_number: "303",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mawile.png",
      large: "https://img.pokemondb.net/artwork/mawile.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mawile.gif",
    },
    name: "Mawile",
    type: [types.steel, types.fairy],
    total: 380,
    hp: 50,
    attack: 85,
    defense: 85,
    sp_atk: 55,
    sp_def: 55,
    speed: 50,
  },
  {
    national_number: "304",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/aron.png",
      large: "https://img.pokemondb.net/artwork/aron.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/aron.gif",
    },
    name: "Aron",
    type: [types.steel, types.rock],
    total: 330,
    hp: 50,
    attack: 70,
    defense: 100,
    sp_atk: 40,
    sp_def: 40,
    speed: 30,
  },
  {
    national_number: "305",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lairon.png",
      large: "https://img.pokemondb.net/artwork/lairon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/lairon.gif",
    },
    name: "Lairon",
    type: [types.steel, types.rock],
    total: 430,
    hp: 60,
    attack: 90,
    defense: 140,
    sp_atk: 50,
    sp_def: 50,
    speed: 40,
  },
  {
    national_number: "306",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/aggron.png",
      large: "https://img.pokemondb.net/artwork/aggron.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/aggron.gif",
    },
    name: "Aggron",
    type: [types.steel, types.rock],
    total: 530,
    hp: 70,
    attack: 110,
    defense: 180,
    sp_atk: 60,
    sp_def: 60,
    speed: 50,
  },
  {
    national_number: "306",
    evolution: { name: "Mega Aggron" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/aggron.png",
      large: "https://img.pokemondb.net/artwork/aggron.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/aggron.gif",
    },
    name: "Aggron",
    type: [types.steel],
    total: 630,
    hp: 70,
    attack: 140,
    defense: 230,
    sp_atk: 60,
    sp_def: 80,
    speed: 50,
  },
  {
    national_number: "307",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/meditite.png",
      large: "https://img.pokemondb.net/artwork/meditite.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/meditite.gif",
    },
    name: "Meditite",
    type: [types.fighting, types.psychic],
    total: 280,
    hp: 30,
    attack: 40,
    defense: 55,
    sp_atk: 40,
    sp_def: 55,
    speed: 60,
  },
  {
    national_number: "308",
    evolution: { name: "Mega Medicham" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/medicham.png",
      large: "https://img.pokemondb.net/artwork/medicham.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/medicham.gif",
    },
    name: "Medicham",
    type: [types.fighting, types.psychic],
    total: 510,
    hp: 60,
    attack: 100,
    defense: 85,
    sp_atk: 80,
    sp_def: 85,
    speed: 100,
  },
  {
    national_number: "308",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/medicham.png",
      large: "https://img.pokemondb.net/artwork/medicham.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/medicham.gif",
    },
    name: "Medicham",
    type: [types.fighting, types.psychic],
    total: 410,
    hp: 60,
    attack: 60,
    defense: 75,
    sp_atk: 60,
    sp_def: 75,
    speed: 80,
  },
  {
    national_number: "309",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/electrike.png",
      large: "https://img.pokemondb.net/artwork/electrike.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/electrike.gif",
    },
    name: "Electrike",
    type: [types.electric],
    total: 295,
    hp: 40,
    attack: 45,
    defense: 40,
    sp_atk: 65,
    sp_def: 40,
    speed: 65,
  },
  {
    national_number: "310",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/manectric.png",
      large: "https://img.pokemondb.net/artwork/manectric.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/manectric.gif",
    },
    name: "Manectric",
    type: [types.electric],
    total: 475,
    hp: 70,
    attack: 75,
    defense: 60,
    sp_atk: 105,
    sp_def: 60,
    speed: 105,
  },
  {
    national_number: "310",
    evolution: { name: "Mega Manectric" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/manectric.png",
      large: "https://img.pokemondb.net/artwork/manectric.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/manectric.gif",
    },
    name: "Manectric",
    type: [types.electric],
    total: 575,
    hp: 70,
    attack: 75,
    defense: 80,
    sp_atk: 135,
    sp_def: 80,
    speed: 135,
  },
  {
    national_number: "311",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/plusle.png",
      large: "https://img.pokemondb.net/artwork/plusle.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/plusle.gif",
    },
    name: "Plusle",
    type: [types.electric],
    total: 405,
    hp: 60,
    attack: 50,
    defense: 40,
    sp_atk: 85,
    sp_def: 75,
    speed: 95,
  },
  {
    national_number: "312",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/minun.png",
      large: "https://img.pokemondb.net/artwork/minun.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/minun.gif",
    },
    name: "Minun",
    type: [types.electric],
    total: 405,
    hp: 60,
    attack: 40,
    defense: 50,
    sp_atk: 75,
    sp_def: 85,
    speed: 95,
  },
  {
    national_number: "313",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/volbeat.png",
      large: "https://img.pokemondb.net/artwork/volbeat.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/volbeat.gif",
    },
    name: "Volbeat",
    type: [types.bug],
    total: 430,
    hp: 65,
    attack: 73,
    defense: 75,
    sp_atk: 47,
    sp_def: 85,
    speed: 85,
  },
  {
    national_number: "314",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/illumise.png",
      large: "https://img.pokemondb.net/artwork/illumise.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/illumise.gif",
    },
    name: "Illumise",
    type: [types.bug],
    total: 430,
    hp: 65,
    attack: 47,
    defense: 75,
    sp_atk: 73,
    sp_def: 85,
    speed: 85,
  },
  {
    national_number: "315",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/roselia.png",
      large: "https://img.pokemondb.net/artwork/roselia.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/roselia.gif",
    },
    name: "Roselia",
    type: [types.grass, types.poison],
    total: 400,
    hp: 50,
    attack: 60,
    defense: 45,
    sp_atk: 100,
    sp_def: 80,
    speed: 65,
  },
  {
    national_number: "316",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gulpin.png",
      large: "https://img.pokemondb.net/artwork/gulpin.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gulpin.gif",
    },
    name: "Gulpin",
    type: [types.poison],
    total: 302,
    hp: 70,
    attack: 43,
    defense: 53,
    sp_atk: 43,
    sp_def: 53,
    speed: 40,
  },
  {
    national_number: "317",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/swalot.png",
      large: "https://img.pokemondb.net/artwork/swalot.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/swalot.gif",
    },
    name: "Swalot",
    type: [types.poison],
    total: 467,
    hp: 100,
    attack: 73,
    defense: 83,
    sp_atk: 73,
    sp_def: 83,
    speed: 55,
  },
  {
    national_number: "318",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/carvanha.png",
      large: "https://img.pokemondb.net/artwork/carvanha.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/carvanha.gif",
    },
    name: "Carvanha",
    type: [types.water, types.dark],
    total: 305,
    hp: 45,
    attack: 90,
    defense: 20,
    sp_atk: 65,
    sp_def: 20,
    speed: 65,
  },
  {
    national_number: "319",
    evolution: { name: "Mega Sharpedo" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sharpedo.png",
      large: "https://img.pokemondb.net/artwork/sharpedo.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/sharpedo.gif",
    },
    name: "Sharpedo",
    type: [types.water, types.dark],
    total: 560,
    hp: 70,
    attack: 140,
    defense: 70,
    sp_atk: 110,
    sp_def: 65,
    speed: 105,
  },
  {
    national_number: "319",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sharpedo.png",
      large: "https://img.pokemondb.net/artwork/sharpedo.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/sharpedo.gif",
    },
    name: "Sharpedo",
    type: [types.water, types.dark],
    total: 460,
    hp: 70,
    attack: 120,
    defense: 40,
    sp_atk: 95,
    sp_def: 40,
    speed: 95,
  },
  {
    national_number: "320",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wailmer.png",
      large: "https://img.pokemondb.net/artwork/wailmer.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/wailmer.gif",
    },
    name: "Wailmer",
    type: [types.water],
    total: 400,
    hp: 130,
    attack: 70,
    defense: 35,
    sp_atk: 70,
    sp_def: 35,
    speed: 60,
  },
  {
    national_number: "321",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wailord.png",
      large: "https://img.pokemondb.net/artwork/wailord.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/wailord.gif",
    },
    name: "Wailord",
    type: [types.water],
    total: 500,
    hp: 170,
    attack: 90,
    defense: 45,
    sp_atk: 90,
    sp_def: 45,
    speed: 60,
  },
  {
    national_number: "322",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/numel.png",
      large: "https://img.pokemondb.net/artwork/numel.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/numel.gif",
    },
    name: "Numel",
    type: [types.fire, types.ground],
    total: 305,
    hp: 60,
    attack: 60,
    defense: 40,
    sp_atk: 65,
    sp_def: 45,
    speed: 35,
  },
  {
    national_number: "323",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/camerupt.png",
      large: "https://img.pokemondb.net/artwork/camerupt.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/camerupt.gif",
    },
    name: "Camerupt",
    type: [types.fire, types.ground],
    total: 460,
    hp: 70,
    attack: 100,
    defense: 70,
    sp_atk: 105,
    sp_def: 75,
    speed: 40,
  },
  {
    national_number: "323",
    evolution: { name: "Mega Camerupt" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/camerupt.png",
      large: "https://img.pokemondb.net/artwork/camerupt.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/camerupt.gif",
    },
    name: "Camerupt",
    type: [types.fire, types.ground],
    total: 560,
    hp: 70,
    attack: 120,
    defense: 100,
    sp_atk: 145,
    sp_def: 105,
    speed: 20,
  },
  {
    national_number: "324",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/torkoal.png",
      large: "https://img.pokemondb.net/artwork/torkoal.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/torkoal.gif",
    },
    name: "Torkoal",
    type: [types.fire],
    total: 470,
    hp: 70,
    attack: 85,
    defense: 140,
    sp_atk: 85,
    sp_def: 70,
    speed: 20,
  },
  {
    national_number: "325",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/spoink.png",
      large: "https://img.pokemondb.net/artwork/spoink.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/spoink.gif",
    },
    name: "Spoink",
    type: [types.psychic],
    total: 330,
    hp: 60,
    attack: 25,
    defense: 35,
    sp_atk: 70,
    sp_def: 80,
    speed: 60,
  },
  {
    national_number: "326",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/grumpig.png",
      large: "https://img.pokemondb.net/artwork/grumpig.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/grumpig.gif",
    },
    name: "Grumpig",
    type: [types.psychic],
    total: 470,
    hp: 80,
    attack: 45,
    defense: 65,
    sp_atk: 90,
    sp_def: 110,
    speed: 80,
  },
  {
    national_number: "327",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/spinda.png",
      large: "https://img.pokemondb.net/artwork/spinda.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/spinda.gif",
    },
    name: "Spinda",
    type: [types.normal],
    total: 360,
    hp: 60,
    attack: 60,
    defense: 60,
    sp_atk: 60,
    sp_def: 60,
    speed: 60,
  },
  {
    national_number: "328",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/trapinch.png",
      large: "https://img.pokemondb.net/artwork/trapinch.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/trapinch.gif",
    },
    name: "Trapinch",
    type: [types.ground],
    total: 290,
    hp: 45,
    attack: 100,
    defense: 45,
    sp_atk: 45,
    sp_def: 45,
    speed: 10,
  },
  {
    national_number: "329",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vibrava.png",
      large: "https://img.pokemondb.net/artwork/vibrava.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/vibrava.gif",
    },
    name: "Vibrava",
    type: [types.ground, types.dragon],
    total: 340,
    hp: 50,
    attack: 70,
    defense: 50,
    sp_atk: 50,
    sp_def: 50,
    speed: 70,
  },
  {
    national_number: "330",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/flygon.png",
      large: "https://img.pokemondb.net/artwork/flygon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/flygon.gif",
    },
    name: "Flygon",
    type: [types.ground, types.dragon],
    total: 520,
    hp: 80,
    attack: 100,
    defense: 80,
    sp_atk: 80,
    sp_def: 80,
    speed: 100,
  },
  {
    national_number: "331",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cacnea.png",
      large: "https://img.pokemondb.net/artwork/cacnea.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/cacnea.gif",
    },
    name: "Cacnea",
    type: [types.grass],
    total: 335,
    hp: 50,
    attack: 85,
    defense: 40,
    sp_atk: 85,
    sp_def: 40,
    speed: 35,
  },
  {
    national_number: "332",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cacturne.png",
      large: "https://img.pokemondb.net/artwork/cacturne.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/cacturne.gif",
    },
    name: "Cacturne",
    type: [types.grass, types.dark],
    total: 475,
    hp: 70,
    attack: 115,
    defense: 60,
    sp_atk: 115,
    sp_def: 60,
    speed: 55,
  },
  {
    national_number: "333",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/swablu.png",
      large: "https://img.pokemondb.net/artwork/swablu.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/swablu.gif",
    },
    name: "Swablu",
    type: [types.normal, types.flying],
    total: 310,
    hp: 45,
    attack: 40,
    defense: 60,
    sp_atk: 40,
    sp_def: 75,
    speed: 50,
  },
  {
    national_number: "334",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/altaria.png",
      large: "https://img.pokemondb.net/artwork/altaria.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/altaria.gif",
    },
    name: "Altaria",
    type: [types.dragon, types.flying],
    total: 490,
    hp: 75,
    attack: 70,
    defense: 90,
    sp_atk: 70,
    sp_def: 105,
    speed: 80,
  },
  {
    national_number: "334",
    evolution: { name: "Mega Altaria" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/altaria.png",
      large: "https://img.pokemondb.net/artwork/altaria.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/altaria.gif",
    },
    name: "Altaria",
    type: [types.dragon, types.fairy],
    total: 590,
    hp: 75,
    attack: 110,
    defense: 110,
    sp_atk: 110,
    sp_def: 105,
    speed: 80,
  },
  {
    national_number: "335",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zangoose.png",
      large: "https://img.pokemondb.net/artwork/zangoose.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/zangoose.gif",
    },
    name: "Zangoose",
    type: [types.normal],
    total: 458,
    hp: 73,
    attack: 115,
    defense: 60,
    sp_atk: 60,
    sp_def: 60,
    speed: 90,
  },
  {
    national_number: "336",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/seviper.png",
      large: "https://img.pokemondb.net/artwork/seviper.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/seviper.gif",
    },
    name: "Seviper",
    type: [types.poison],
    total: 458,
    hp: 73,
    attack: 100,
    defense: 60,
    sp_atk: 100,
    sp_def: 60,
    speed: 65,
  },
  {
    national_number: "337",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lunatone.png",
      large: "https://img.pokemondb.net/artwork/lunatone.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/lunatone.gif",
    },
    name: "Lunatone",
    type: [types.rock, types.psychic],
    total: 460,
    hp: 90,
    attack: 55,
    defense: 65,
    sp_atk: 95,
    sp_def: 85,
    speed: 70,
  },
  {
    national_number: "338",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/solrock.png",
      large: "https://img.pokemondb.net/artwork/solrock.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/solrock.gif",
    },
    name: "Solrock",
    type: [types.rock, types.psychic],
    total: 460,
    hp: 90,
    attack: 95,
    defense: 85,
    sp_atk: 55,
    sp_def: 65,
    speed: 70,
  },
  {
    national_number: "339",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/barboach.png",
      large: "https://img.pokemondb.net/artwork/barboach.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/barboach.gif",
    },
    name: "Barboach",
    type: [types.water, types.ground],
    total: 288,
    hp: 50,
    attack: 48,
    defense: 43,
    sp_atk: 46,
    sp_def: 41,
    speed: 60,
  },
  {
    national_number: "340",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/whiscash.png",
      large: "https://img.pokemondb.net/artwork/whiscash.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/whiscash.gif",
    },
    name: "Whiscash",
    type: [types.water, types.ground],
    total: 468,
    hp: 110,
    attack: 78,
    defense: 73,
    sp_atk: 76,
    sp_def: 71,
    speed: 60,
  },
  {
    national_number: "341",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/corphish.png",
      large: "https://img.pokemondb.net/artwork/corphish.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/corphish.gif",
    },
    name: "Corphish",
    type: [types.water],
    total: 308,
    hp: 43,
    attack: 80,
    defense: 65,
    sp_atk: 50,
    sp_def: 35,
    speed: 35,
  },
  {
    national_number: "342",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/crawdaunt.png",
      large: "https://img.pokemondb.net/artwork/crawdaunt.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/crawdaunt.gif",
    },
    name: "Crawdaunt",
    type: [types.water, types.dark],
    total: 468,
    hp: 63,
    attack: 120,
    defense: 85,
    sp_atk: 90,
    sp_def: 55,
    speed: 55,
  },
  {
    national_number: "343",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/baltoy.png",
      large: "https://img.pokemondb.net/artwork/baltoy.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/baltoy.gif",
    },
    name: "Baltoy",
    type: [types.ground, types.psychic],
    total: 300,
    hp: 40,
    attack: 40,
    defense: 55,
    sp_atk: 40,
    sp_def: 70,
    speed: 55,
  },
  {
    national_number: "344",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/claydol.png",
      large: "https://img.pokemondb.net/artwork/claydol.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/claydol.gif",
    },
    name: "Claydol",
    type: [types.ground, types.psychic],
    total: 500,
    hp: 60,
    attack: 70,
    defense: 105,
    sp_atk: 70,
    sp_def: 120,
    speed: 75,
  },
  {
    national_number: "345",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lileep.png",
      large: "https://img.pokemondb.net/artwork/lileep.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/lileep.gif",
    },
    name: "Lileep",
    type: [types.rock, types.grass],
    total: 355,
    hp: 66,
    attack: 41,
    defense: 77,
    sp_atk: 61,
    sp_def: 87,
    speed: 23,
  },
  {
    national_number: "346",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cradily.png",
      large: "https://img.pokemondb.net/artwork/cradily.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/cradily.gif",
    },
    name: "Cradily",
    type: [types.rock, types.grass],
    total: 495,
    hp: 86,
    attack: 81,
    defense: 97,
    sp_atk: 81,
    sp_def: 107,
    speed: 43,
  },
  {
    national_number: "347",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/anorith.png",
      large: "https://img.pokemondb.net/artwork/anorith.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/anorith.gif",
    },
    name: "Anorith",
    type: [types.rock, types.bug],
    total: 355,
    hp: 45,
    attack: 95,
    defense: 50,
    sp_atk: 40,
    sp_def: 50,
    speed: 75,
  },
  {
    national_number: "348",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/armaldo.png",
      large: "https://img.pokemondb.net/artwork/armaldo.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/armaldo.gif",
    },
    name: "Armaldo",
    type: [types.rock, types.bug],
    total: 495,
    hp: 75,
    attack: 125,
    defense: 100,
    sp_atk: 70,
    sp_def: 80,
    speed: 45,
  },
  {
    national_number: "349",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/feebas.png",
      large: "https://img.pokemondb.net/artwork/feebas.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/feebas.gif",
    },
    name: "Feebas",
    type: [types.water],
    total: 200,
    hp: 20,
    attack: 15,
    defense: 20,
    sp_atk: 10,
    sp_def: 55,
    speed: 80,
  },
  {
    national_number: "350",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/milotic.png",
      large: "https://img.pokemondb.net/artwork/milotic.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/milotic.gif",
    },
    name: "Milotic",
    type: [types.water],
    total: 540,
    hp: 95,
    attack: 60,
    defense: 79,
    sp_atk: 100,
    sp_def: 125,
    speed: 81,
  },
  {
    national_number: "351",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/castform.png",
      large: "https://img.pokemondb.net/artwork/castform.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/castform.gif",
    },
    name: "Castform",
    type: [types.normal],
    total: 420,
    hp: 70,
    attack: 70,
    defense: 70,
    sp_atk: 70,
    sp_def: 70,
    speed: 70,
  },
  {
    national_number: "352",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kecleon.png",
      large: "https://img.pokemondb.net/artwork/kecleon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/kecleon.gif",
    },
    name: "Kecleon",
    type: [types.normal],
    total: 440,
    hp: 60,
    attack: 90,
    defense: 70,
    sp_atk: 60,
    sp_def: 120,
    speed: 40,
  },
  {
    national_number: "353",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shuppet.png",
      large: "https://img.pokemondb.net/artwork/shuppet.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/shuppet.gif",
    },
    name: "Shuppet",
    type: [types.ghost],
    total: 295,
    hp: 44,
    attack: 75,
    defense: 35,
    sp_atk: 63,
    sp_def: 33,
    speed: 45,
  },
  {
    national_number: "354",
    evolution: { name: "Mega Banette" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/banette.png",
      large: "https://img.pokemondb.net/artwork/banette.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/banette.gif",
    },
    name: "Banette",
    type: [types.ghost],
    total: 555,
    hp: 64,
    attack: 165,
    defense: 75,
    sp_atk: 93,
    sp_def: 83,
    speed: 75,
  },
  {
    national_number: "354",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/banette.png",
      large: "https://img.pokemondb.net/artwork/banette.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/banette.gif",
    },
    name: "Banette",
    type: [types.ghost],
    total: 455,
    hp: 64,
    attack: 115,
    defense: 65,
    sp_atk: 83,
    sp_def: 63,
    speed: 65,
  },
  {
    national_number: "355",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/duskull.png",
      large: "https://img.pokemondb.net/artwork/duskull.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/duskull.gif",
    },
    name: "Duskull",
    type: [types.ghost],
    total: 295,
    hp: 20,
    attack: 40,
    defense: 90,
    sp_atk: 30,
    sp_def: 90,
    speed: 25,
  },
  {
    national_number: "356",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dusclops.png",
      large: "https://img.pokemondb.net/artwork/dusclops.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/dusclops.gif",
    },
    name: "Dusclops",
    type: [types.ghost],
    total: 455,
    hp: 40,
    attack: 70,
    defense: 130,
    sp_atk: 60,
    sp_def: 130,
    speed: 25,
  },
  {
    national_number: "357",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tropius.png",
      large: "https://img.pokemondb.net/artwork/tropius.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/tropius.gif",
    },
    name: "Tropius",
    type: [types.grass, types.flying],
    total: 460,
    hp: 99,
    attack: 68,
    defense: 83,
    sp_atk: 72,
    sp_def: 87,
    speed: 51,
  },
  {
    national_number: "358",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/chimecho.png",
      large: "https://img.pokemondb.net/artwork/chimecho.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/chimecho.gif",
    },
    name: "Chimecho",
    type: [types.psychic],
    total: 455,
    hp: 75,
    attack: 50,
    defense: 80,
    sp_atk: 95,
    sp_def: 90,
    speed: 65,
  },
  {
    national_number: "359",
    evolution: { name: "Mega Absol" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/absol.png",
      large: "https://img.pokemondb.net/artwork/absol.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/absol.gif",
    },
    name: "Absol",
    type: [types.dark],
    total: 565,
    hp: 65,
    attack: 150,
    defense: 60,
    sp_atk: 115,
    sp_def: 60,
    speed: 115,
  },
  {
    national_number: "359",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/absol.png",
      large: "https://img.pokemondb.net/artwork/absol.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/absol.gif",
    },
    name: "Absol",
    type: [types.dark],
    total: 465,
    hp: 65,
    attack: 130,
    defense: 60,
    sp_atk: 75,
    sp_def: 60,
    speed: 75,
  },
  {
    national_number: "360",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wynaut.png",
      large: "https://img.pokemondb.net/artwork/wynaut.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/wynaut.gif",
    },
    name: "Wynaut",
    type: [types.psychic],
    total: 260,
    hp: 95,
    attack: 23,
    defense: 48,
    sp_atk: 23,
    sp_def: 48,
    speed: 23,
  },
  {
    national_number: "361",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/snorunt.png",
      large: "https://img.pokemondb.net/artwork/snorunt.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/snorunt.gif",
    },
    name: "Snorunt",
    type: [types.ice],
    total: 300,
    hp: 50,
    attack: 50,
    defense: 50,
    sp_atk: 50,
    sp_def: 50,
    speed: 50,
  },
  {
    national_number: "362",
    evolution: { name: "Mega Glalie" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/glalie.png",
      large: "https://img.pokemondb.net/artwork/glalie.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/glalie.gif",
    },
    name: "Glalie",
    type: [types.ice],
    total: 580,
    hp: 80,
    attack: 120,
    defense: 80,
    sp_atk: 120,
    sp_def: 80,
    speed: 100,
  },
  {
    national_number: "362",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/glalie.png",
      large: "https://img.pokemondb.net/artwork/glalie.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/glalie.gif",
    },
    name: "Glalie",
    type: [types.ice],
    total: 480,
    hp: 80,
    attack: 80,
    defense: 80,
    sp_atk: 80,
    sp_def: 80,
    speed: 80,
  },
  {
    national_number: "363",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/spheal.png",
      large: "https://img.pokemondb.net/artwork/spheal.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/spheal.gif",
    },
    name: "Spheal",
    type: [types.ice, types.water],
    total: 290,
    hp: 70,
    attack: 40,
    defense: 50,
    sp_atk: 55,
    sp_def: 50,
    speed: 25,
  },
  {
    national_number: "364",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sealeo.png",
      large: "https://img.pokemondb.net/artwork/sealeo.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/sealeo.gif",
    },
    name: "Sealeo",
    type: [types.ice, types.water],
    total: 410,
    hp: 90,
    attack: 60,
    defense: 70,
    sp_atk: 75,
    sp_def: 70,
    speed: 45,
  },
  {
    national_number: "365",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/walrein.png",
      large: "https://img.pokemondb.net/artwork/walrein.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/walrein.gif",
    },
    name: "Walrein",
    type: [types.ice, types.water],
    total: 530,
    hp: 110,
    attack: 80,
    defense: 90,
    sp_atk: 95,
    sp_def: 90,
    speed: 65,
  },
  {
    national_number: "366",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/clamperl.png",
      large: "https://img.pokemondb.net/artwork/clamperl.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/clamperl.gif",
    },
    name: "Clamperl",
    type: [types.water],
    total: 345,
    hp: 35,
    attack: 64,
    defense: 85,
    sp_atk: 74,
    sp_def: 55,
    speed: 32,
  },
  {
    national_number: "367",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/huntail.png",
      large: "https://img.pokemondb.net/artwork/huntail.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/huntail.gif",
    },
    name: "Huntail",
    type: [types.water],
    total: 485,
    hp: 55,
    attack: 104,
    defense: 105,
    sp_atk: 94,
    sp_def: 75,
    speed: 52,
  },
  {
    national_number: "368",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gorebyss.png",
      large: "https://img.pokemondb.net/artwork/gorebyss.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gorebyss.gif",
    },
    name: "Gorebyss",
    type: [types.water],
    total: 485,
    hp: 55,
    attack: 84,
    defense: 105,
    sp_atk: 114,
    sp_def: 75,
    speed: 52,
  },
  {
    national_number: "369",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/relicanth.png",
      large: "https://img.pokemondb.net/artwork/relicanth.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/relicanth.gif",
    },
    name: "Relicanth",
    type: [types.water, types.rock],
    total: 485,
    hp: 100,
    attack: 90,
    defense: 130,
    sp_atk: 45,
    sp_def: 65,
    speed: 55,
  },
  {
    national_number: "370",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/luvdisc.png",
      large: "https://img.pokemondb.net/artwork/luvdisc.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/luvdisc.gif",
    },
    name: "Luvdisc",
    type: [types.water],
    total: 330,
    hp: 43,
    attack: 30,
    defense: 55,
    sp_atk: 40,
    sp_def: 65,
    speed: 97,
  },
  {
    national_number: "371",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bagon.png",
      large: "https://img.pokemondb.net/artwork/bagon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/bagon.gif",
    },
    name: "Bagon",
    type: [types.dragon],
    total: 300,
    hp: 45,
    attack: 75,
    defense: 60,
    sp_atk: 40,
    sp_def: 30,
    speed: 50,
  },
  {
    national_number: "372",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shelgon.png",
      large: "https://img.pokemondb.net/artwork/shelgon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/shelgon.gif",
    },
    name: "Shelgon",
    type: [types.dragon],
    total: 420,
    hp: 65,
    attack: 95,
    defense: 100,
    sp_atk: 60,
    sp_def: 50,
    speed: 50,
  },
  {
    national_number: "373",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/salamence.png",
      large: "https://img.pokemondb.net/artwork/salamence.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/salamence.gif",
    },
    name: "Salamence",
    type: [types.dragon, types.flying],
    total: 600,
    hp: 95,
    attack: 135,
    defense: 80,
    sp_atk: 110,
    sp_def: 80,
    speed: 100,
  },
  {
    national_number: "373",
    evolution: { name: "Mega Salamence" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/salamence.png",
      large: "https://img.pokemondb.net/artwork/salamence.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/salamence.gif",
    },
    name: "Salamence",
    type: [types.dragon, types.flying],
    total: 700,
    hp: 95,
    attack: 145,
    defense: 130,
    sp_atk: 120,
    sp_def: 90,
    speed: 120,
  },
  {
    national_number: "374",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/beldum.png",
      large: "https://img.pokemondb.net/artwork/beldum.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/beldum.gif",
    },
    name: "Beldum",
    type: [types.steel, types.psychic],
    total: 300,
    hp: 40,
    attack: 55,
    defense: 80,
    sp_atk: 35,
    sp_def: 60,
    speed: 30,
  },
  {
    national_number: "375",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/metang.png",
      large: "https://img.pokemondb.net/artwork/metang.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/metang.gif",
    },
    name: "Metang",
    type: [types.steel, types.psychic],
    total: 420,
    hp: 60,
    attack: 75,
    defense: 100,
    sp_atk: 55,
    sp_def: 80,
    speed: 50,
  },
  {
    national_number: "376",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/metagross.png",
      large: "https://img.pokemondb.net/artwork/metagross.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/metagross.gif",
    },
    name: "Metagross",
    type: [types.steel, types.psychic],
    total: 600,
    hp: 80,
    attack: 135,
    defense: 130,
    sp_atk: 95,
    sp_def: 90,
    speed: 70,
  },
  {
    national_number: "376",
    evolution: { name: "Mega Metagross" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/metagross.png",
      large: "https://img.pokemondb.net/artwork/metagross.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/metagross.gif",
    },
    name: "Metagross",
    type: [types.steel, types.psychic],
    total: 700,
    hp: 80,
    attack: 145,
    defense: 150,
    sp_atk: 105,
    sp_def: 110,
    speed: 110,
  },
  {
    national_number: "377",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/regirock.png",
      large: "https://img.pokemondb.net/artwork/regirock.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/regirock.gif",
    },
    name: "Regirock",
    type: [types.rock],
    total: 580,
    hp: 80,
    attack: 100,
    defense: 200,
    sp_atk: 50,
    sp_def: 100,
    speed: 50,
  },
  {
    national_number: "378",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/regice.png",
      large: "https://img.pokemondb.net/artwork/regice.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/regice.gif",
    },
    name: "Regice",
    type: [types.ice],
    total: 580,
    hp: 80,
    attack: 50,
    defense: 100,
    sp_atk: 100,
    sp_def: 200,
    speed: 50,
  },
  {
    national_number: "379",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/registeel.png",
      large: "https://img.pokemondb.net/artwork/registeel.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/registeel.gif",
    },
    name: "Registeel",
    type: [types.steel],
    total: 580,
    hp: 80,
    attack: 75,
    defense: 150,
    sp_atk: 75,
    sp_def: 150,
    speed: 50,
  },
  {
    national_number: "380",
    evolution: { name: "Mega Latias" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/latias.png",
      large: "https://img.pokemondb.net/artwork/latias.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/latias.gif",
    },
    name: "Latias",
    type: [types.dragon, types.psychic],
    total: 700,
    hp: 80,
    attack: 100,
    defense: 120,
    sp_atk: 140,
    sp_def: 150,
    speed: 110,
  },
  {
    national_number: "380",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/latias.png",
      large: "https://img.pokemondb.net/artwork/latias.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/latias.gif",
    },
    name: "Latias",
    type: [types.dragon, types.psychic],
    total: 600,
    hp: 80,
    attack: 80,
    defense: 90,
    sp_atk: 110,
    sp_def: 130,
    speed: 110,
  },
  {
    national_number: "381",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/latios.png",
      large: "https://img.pokemondb.net/artwork/latios.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/latios.gif",
    },
    name: "Latios",
    type: [types.dragon, types.psychic],
    total: 600,
    hp: 80,
    attack: 90,
    defense: 80,
    sp_atk: 130,
    sp_def: 110,
    speed: 110,
  },
  {
    national_number: "381",
    evolution: { name: "Mega Latios" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/latios.png",
      large: "https://img.pokemondb.net/artwork/latios.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/latios.gif",
    },
    name: "Latios",
    type: [types.dragon, types.psychic],
    total: 700,
    hp: 80,
    attack: 130,
    defense: 100,
    sp_atk: 160,
    sp_def: 120,
    speed: 110,
  },
  {
    national_number: "382",
    evolution: { name: "Primal Kyogre" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kyogre.png",
      large: "https://img.pokemondb.net/artwork/kyogre.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/kyogre.gif",
    },
    name: "Kyogre",
    type: [types.water],
    total: 770,
    hp: 100,
    attack: 150,
    defense: 90,
    sp_atk: 180,
    sp_def: 160,
    speed: 90,
  },
  {
    national_number: "382",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kyogre.png",
      large: "https://img.pokemondb.net/artwork/kyogre.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/kyogre.gif",
    },
    name: "Kyogre",
    type: [types.water],
    total: 670,
    hp: 100,
    attack: 100,
    defense: 90,
    sp_atk: 150,
    sp_def: 140,
    speed: 90,
  },
  {
    national_number: "383",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/groudon.png",
      large: "https://img.pokemondb.net/artwork/groudon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/groudon.gif",
    },
    name: "Groudon",
    type: [types.ground],
    total: 670,
    hp: 100,
    attack: 150,
    defense: 140,
    sp_atk: 100,
    sp_def: 90,
    speed: 90,
  },
  {
    national_number: "383",
    evolution: { name: "Primal Groudon" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/groudon.png",
      large: "https://img.pokemondb.net/artwork/groudon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/groudon.gif",
    },
    name: "Groudon",
    type: [types.ground, types.fire],
    total: 770,
    hp: 100,
    attack: 180,
    defense: 160,
    sp_atk: 150,
    sp_def: 90,
    speed: 90,
  },
  {
    national_number: "384",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rayquaza.png",
      large: "https://img.pokemondb.net/artwork/rayquaza.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/rayquaza.gif",
    },
    name: "Rayquaza",
    type: [types.dragon, types.flying],
    total: 680,
    hp: 105,
    attack: 150,
    defense: 90,
    sp_atk: 150,
    sp_def: 90,
    speed: 95,
  },
  {
    national_number: "384",
    evolution: { name: "Mega Rayquaza" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rayquaza.png",
      large: "https://img.pokemondb.net/artwork/rayquaza.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/rayquaza.gif",
    },
    name: "Rayquaza",
    type: [types.dragon, types.flying],
    total: 780,
    hp: 105,
    attack: 180,
    defense: 100,
    sp_atk: 180,
    sp_def: 100,
    speed: 115,
  },
  {
    national_number: "385",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/jirachi.png",
      large: "https://img.pokemondb.net/artwork/jirachi.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/jirachi.gif",
    },
    name: "Jirachi",
    type: [types.steel, types.psychic],
    total: 600,
    hp: 100,
    attack: 100,
    defense: 100,
    sp_atk: 100,
    sp_def: 100,
    speed: 100,
  },
  {
    national_number: "386",
    evolution: { name: "Normal Forme" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/deoxys.png",
      large: "https://img.pokemondb.net/artwork/deoxys.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/deoxys.gif",
    },
    name: "Deoxys",
    type: [types.psychic],
    total: 600,
    hp: 50,
    attack: 150,
    defense: 50,
    sp_atk: 150,
    sp_def: 50,
    speed: 150,
  },
  {
    national_number: "386",
    evolution: { name: "Defense Forme" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/deoxys.png",
      large: "https://img.pokemondb.net/artwork/deoxys.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/deoxys.gif",
    },
    name: "Deoxys",
    type: [types.psychic],
    total: 600,
    hp: 50,
    attack: 70,
    defense: 160,
    sp_atk: 70,
    sp_def: 160,
    speed: 90,
  },
  {
    national_number: "386",
    evolution: { name: "Speed Forme" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/deoxys.png",
      large: "https://img.pokemondb.net/artwork/deoxys.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/deoxys.gif",
    },
    name: "Deoxys",
    type: [types.psychic],
    total: 600,
    hp: 50,
    attack: 95,
    defense: 90,
    sp_atk: 95,
    sp_def: 90,
    speed: 180,
  },
  {
    national_number: "386",
    evolution: { name: "Attack Forme" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/deoxys.png",
      large: "https://img.pokemondb.net/artwork/deoxys.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/deoxys.gif",
    },
    name: "Deoxys",
    type: [types.psychic],
    total: 600,
    hp: 50,
    attack: 180,
    defense: 20,
    sp_atk: 180,
    sp_def: 20,
    speed: 150,
  },
  {
    national_number: "387",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/turtwig.png",
      large: "https://img.pokemondb.net/artwork/turtwig.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/turtwig.gif",
    },
    name: "Turtwig",
    type: [types.grass],
    total: 318,
    hp: 55,
    attack: 68,
    defense: 64,
    sp_atk: 45,
    sp_def: 55,
    speed: 31,
  },
  {
    national_number: "388",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/grotle.png",
      large: "https://img.pokemondb.net/artwork/grotle.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/grotle.gif",
    },
    name: "Grotle",
    type: [types.grass],
    total: 405,
    hp: 75,
    attack: 89,
    defense: 85,
    sp_atk: 55,
    sp_def: 65,
    speed: 36,
  },
  {
    national_number: "389",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/torterra.png",
      large: "https://img.pokemondb.net/artwork/torterra.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/torterra.gif",
    },
    name: "Torterra",
    type: [types.grass, types.ground],
    total: 525,
    hp: 95,
    attack: 109,
    defense: 105,
    sp_atk: 75,
    sp_def: 85,
    speed: 56,
  },
  {
    national_number: "390",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/chimchar.png",
      large: "https://img.pokemondb.net/artwork/chimchar.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/chimchar.gif",
    },
    name: "Chimchar",
    type: [types.fire],
    total: 309,
    hp: 44,
    attack: 58,
    defense: 44,
    sp_atk: 58,
    sp_def: 44,
    speed: 61,
  },
  {
    national_number: "391",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/monferno.png",
      large: "https://img.pokemondb.net/artwork/monferno.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/monferno.gif",
    },
    name: "Monferno",
    type: [types.fire, types.fighting],
    total: 405,
    hp: 64,
    attack: 78,
    defense: 52,
    sp_atk: 78,
    sp_def: 52,
    speed: 81,
  },
  {
    national_number: "392",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/infernape.png",
      large: "https://img.pokemondb.net/artwork/infernape.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/infernape.gif",
    },
    name: "Infernape",
    type: [types.fire, types.fighting],
    total: 534,
    hp: 76,
    attack: 104,
    defense: 71,
    sp_atk: 104,
    sp_def: 71,
    speed: 108,
  },
  {
    national_number: "393",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/piplup.png",
      large: "https://img.pokemondb.net/artwork/piplup.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/piplup.gif",
    },
    name: "Piplup",
    type: [types.water],
    total: 314,
    hp: 53,
    attack: 51,
    defense: 53,
    sp_atk: 61,
    sp_def: 56,
    speed: 40,
  },
  {
    national_number: "394",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/prinplup.png",
      large: "https://img.pokemondb.net/artwork/prinplup.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/prinplup.gif",
    },
    name: "Prinplup",
    type: [types.water],
    total: 405,
    hp: 64,
    attack: 66,
    defense: 68,
    sp_atk: 81,
    sp_def: 76,
    speed: 50,
  },
  {
    national_number: "395",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/empoleon.png",
      large: "https://img.pokemondb.net/artwork/empoleon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/empoleon.gif",
    },
    name: "Empoleon",
    type: [types.water, types.steel],
    total: 530,
    hp: 84,
    attack: 86,
    defense: 88,
    sp_atk: 111,
    sp_def: 101,
    speed: 60,
  },
  {
    national_number: "396",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/starly.png",
      large: "https://img.pokemondb.net/artwork/starly.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/starly.gif",
    },
    name: "Starly",
    type: [types.normal, types.flying],
    total: 245,
    hp: 40,
    attack: 55,
    defense: 30,
    sp_atk: 30,
    sp_def: 30,
    speed: 60,
  },
  {
    national_number: "397",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/staravia.png",
      large: "https://img.pokemondb.net/artwork/staravia.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/staravia.gif",
    },
    name: "Staravia",
    type: [types.normal, types.flying],
    total: 340,
    hp: 55,
    attack: 75,
    defense: 50,
    sp_atk: 40,
    sp_def: 40,
    speed: 80,
  },
  {
    national_number: "398",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/staraptor.png",
      large: "https://img.pokemondb.net/artwork/staraptor.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/staraptor.gif",
    },
    name: "Staraptor",
    type: [types.normal, types.flying],
    total: 485,
    hp: 85,
    attack: 120,
    defense: 70,
    sp_atk: 50,
    sp_def: 60,
    speed: 100,
  },
  {
    national_number: "399",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bidoof.png",
      large: "https://img.pokemondb.net/artwork/bidoof.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/bidoof.gif",
    },
    name: "Bidoof",
    type: [types.normal],
    total: 250,
    hp: 59,
    attack: 45,
    defense: 40,
    sp_atk: 35,
    sp_def: 40,
    speed: 31,
  },
  {
    national_number: "400",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bibarel.png",
      large: "https://img.pokemondb.net/artwork/bibarel.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/bibarel.gif",
    },
    name: "Bibarel",
    type: [types.normal, types.water],
    total: 410,
    hp: 79,
    attack: 85,
    defense: 60,
    sp_atk: 55,
    sp_def: 60,
    speed: 71,
  },
  {
    national_number: "401",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kricketot.png",
      large: "https://img.pokemondb.net/artwork/kricketot.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/kricketot.gif",
    },
    name: "Kricketot",
    type: [types.bug],
    total: 194,
    hp: 37,
    attack: 25,
    defense: 41,
    sp_atk: 25,
    sp_def: 41,
    speed: 25,
  },
  {
    national_number: "402",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kricketune.png",
      large: "https://img.pokemondb.net/artwork/kricketune.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/kricketune.gif",
    },
    name: "Kricketune",
    type: [types.bug],
    total: 384,
    hp: 77,
    attack: 85,
    defense: 51,
    sp_atk: 55,
    sp_def: 51,
    speed: 65,
  },
  {
    national_number: "403",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shinx.png",
      large: "https://img.pokemondb.net/artwork/shinx.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/shinx.gif",
    },
    name: "Shinx",
    type: [types.electric],
    total: 263,
    hp: 45,
    attack: 65,
    defense: 34,
    sp_atk: 40,
    sp_def: 34,
    speed: 45,
  },
  {
    national_number: "404",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/luxio.png",
      large: "https://img.pokemondb.net/artwork/luxio.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/luxio.gif",
    },
    name: "Luxio",
    type: [types.electric],
    total: 363,
    hp: 60,
    attack: 85,
    defense: 49,
    sp_atk: 60,
    sp_def: 49,
    speed: 60,
  },
  {
    national_number: "405",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/luxray.png",
      large: "https://img.pokemondb.net/artwork/luxray.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/luxray.gif",
    },
    name: "Luxray",
    type: [types.electric],
    total: 523,
    hp: 80,
    attack: 120,
    defense: 79,
    sp_atk: 95,
    sp_def: 79,
    speed: 70,
  },
  {
    national_number: "406",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/budew.png",
      large: "https://img.pokemondb.net/artwork/budew.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/budew.gif",
    },
    name: "Budew",
    type: [types.grass, types.poison],
    total: 280,
    hp: 40,
    attack: 30,
    defense: 35,
    sp_atk: 50,
    sp_def: 70,
    speed: 55,
  },
  {
    national_number: "407",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/roserade.png",
      large: "https://img.pokemondb.net/artwork/roserade.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/roserade.gif",
    },
    name: "Roserade",
    type: [types.grass, types.poison],
    total: 515,
    hp: 60,
    attack: 70,
    defense: 65,
    sp_atk: 125,
    sp_def: 105,
    speed: 90,
  },
  {
    national_number: "408",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cranidos.png",
      large: "https://img.pokemondb.net/artwork/cranidos.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/cranidos.gif",
    },
    name: "Cranidos",
    type: [types.rock],
    total: 350,
    hp: 67,
    attack: 125,
    defense: 40,
    sp_atk: 30,
    sp_def: 30,
    speed: 58,
  },
  {
    national_number: "409",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rampardos.png",
      large: "https://img.pokemondb.net/artwork/rampardos.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/rampardos.gif",
    },
    name: "Rampardos",
    type: [types.rock],
    total: 495,
    hp: 97,
    attack: 165,
    defense: 60,
    sp_atk: 65,
    sp_def: 50,
    speed: 58,
  },
  {
    national_number: "410",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shieldon.png",
      large: "https://img.pokemondb.net/artwork/shieldon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/shieldon.gif",
    },
    name: "Shieldon",
    type: [types.rock, types.steel],
    total: 350,
    hp: 30,
    attack: 42,
    defense: 118,
    sp_atk: 42,
    sp_def: 88,
    speed: 30,
  },
  {
    national_number: "411",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bastiodon.png",
      large: "https://img.pokemondb.net/artwork/bastiodon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/bastiodon.gif",
    },
    name: "Bastiodon",
    type: [types.rock, types.steel],
    total: 495,
    hp: 60,
    attack: 52,
    defense: 168,
    sp_atk: 47,
    sp_def: 138,
    speed: 30,
  },
  {
    national_number: "412",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/burmy.png",
      large: "https://img.pokemondb.net/artwork/burmy.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/burmy.gif",
    },
    name: "Burmy",
    type: [types.bug],
    total: 224,
    hp: 40,
    attack: 29,
    defense: 45,
    sp_atk: 29,
    sp_def: 45,
    speed: 36,
  },
  {
    national_number: "413",
    evolution: { name: "Plant Cloak" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wormadam.png",
      large: "https://img.pokemondb.net/artwork/wormadam.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/wormadam.gif",
    },
    name: "Wormadam",
    type: [types.bug, types.grass],
    total: 424,
    hp: 60,
    attack: 59,
    defense: 85,
    sp_atk: 79,
    sp_def: 105,
    speed: 36,
  },
  {
    national_number: "413",
    evolution: { name: "Sandy Cloak" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wormadam.png",
      large: "https://img.pokemondb.net/artwork/wormadam.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/wormadam.gif",
    },
    name: "Wormadam",
    type: [types.bug, types.ground],
    total: 424,
    hp: 60,
    attack: 79,
    defense: 105,
    sp_atk: 59,
    sp_def: 85,
    speed: 36,
  },
  {
    national_number: "413",
    evolution: { name: "Trash Cloak" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wormadam.png",
      large: "https://img.pokemondb.net/artwork/wormadam.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/wormadam.gif",
    },
    name: "Wormadam",
    type: [types.bug, types.steel],
    total: 424,
    hp: 60,
    attack: 69,
    defense: 95,
    sp_atk: 69,
    sp_def: 95,
    speed: 36,
  },
  {
    national_number: "414",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mothim.png",
      large: "https://img.pokemondb.net/artwork/mothim.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mothim.gif",
    },
    name: "Mothim",
    type: [types.bug, types.flying],
    total: 424,
    hp: 70,
    attack: 94,
    defense: 50,
    sp_atk: 94,
    sp_def: 50,
    speed: 66,
  },
  {
    national_number: "415",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/combee.png",
      large: "https://img.pokemondb.net/artwork/combee.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/combee.gif",
    },
    name: "Combee",
    type: [types.bug, types.flying],
    total: 244,
    hp: 30,
    attack: 30,
    defense: 42,
    sp_atk: 30,
    sp_def: 42,
    speed: 70,
  },
  {
    national_number: "416",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vespiquen.png",
      large: "https://img.pokemondb.net/artwork/vespiquen.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/vespiquen.gif",
    },
    name: "Vespiquen",
    type: [types.bug, types.flying],
    total: 474,
    hp: 70,
    attack: 80,
    defense: 102,
    sp_atk: 80,
    sp_def: 102,
    speed: 40,
  },
  {
    national_number: "417",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pachirisu.png",
      large: "https://img.pokemondb.net/artwork/pachirisu.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pachirisu.gif",
    },
    name: "Pachirisu",
    type: [types.electric],
    total: 405,
    hp: 60,
    attack: 45,
    defense: 70,
    sp_atk: 45,
    sp_def: 90,
    speed: 95,
  },
  {
    national_number: "418",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/buizel.png",
      large: "https://img.pokemondb.net/artwork/buizel.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/buizel.gif",
    },
    name: "Buizel",
    type: [types.water],
    total: 330,
    hp: 55,
    attack: 65,
    defense: 35,
    sp_atk: 60,
    sp_def: 30,
    speed: 85,
  },
  {
    national_number: "419",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/floatzel.png",
      large: "https://img.pokemondb.net/artwork/floatzel.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/floatzel.gif",
    },
    name: "Floatzel",
    type: [types.water],
    total: 495,
    hp: 85,
    attack: 105,
    defense: 55,
    sp_atk: 85,
    sp_def: 50,
    speed: 115,
  },
  {
    national_number: "420",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cherubi.png",
      large: "https://img.pokemondb.net/artwork/cherubi.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/cherubi.gif",
    },
    name: "Cherubi",
    type: [types.grass],
    total: 275,
    hp: 45,
    attack: 35,
    defense: 45,
    sp_atk: 62,
    sp_def: 53,
    speed: 35,
  },
  {
    national_number: "421",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cherrim.png",
      large: "https://img.pokemondb.net/artwork/cherrim.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/cherrim.gif",
    },
    name: "Cherrim",
    type: [types.grass],
    total: 450,
    hp: 70,
    attack: 60,
    defense: 70,
    sp_atk: 87,
    sp_def: 78,
    speed: 85,
  },
  {
    national_number: "422",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shellos.png",
      large: "https://img.pokemondb.net/artwork/shellos.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/shellos.gif",
    },
    name: "Shellos",
    type: [types.water],
    total: 325,
    hp: 76,
    attack: 48,
    defense: 48,
    sp_atk: 57,
    sp_def: 62,
    speed: 34,
  },
  {
    national_number: "423",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gastrodon.png",
      large: "https://img.pokemondb.net/artwork/gastrodon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gastrodon.gif",
    },
    name: "Gastrodon",
    type: [types.water, types.ground],
    total: 475,
    hp: 111,
    attack: 83,
    defense: 68,
    sp_atk: 92,
    sp_def: 82,
    speed: 39,
  },
  {
    national_number: "424",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ambipom.png",
      large: "https://img.pokemondb.net/artwork/ambipom.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/ambipom.gif",
    },
    name: "Ambipom",
    type: [types.normal],
    total: 482,
    hp: 75,
    attack: 100,
    defense: 66,
    sp_atk: 60,
    sp_def: 66,
    speed: 115,
  },
  {
    national_number: "425",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/drifloon.png",
      large: "https://img.pokemondb.net/artwork/drifloon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/drifloon.gif",
    },
    name: "Drifloon",
    type: [types.ghost, types.flying],
    total: 348,
    hp: 90,
    attack: 50,
    defense: 34,
    sp_atk: 60,
    sp_def: 44,
    speed: 70,
  },
  {
    national_number: "426",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/drifblim.png",
      large: "https://img.pokemondb.net/artwork/drifblim.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/drifblim.gif",
    },
    name: "Drifblim",
    type: [types.ghost, types.flying],
    total: 498,
    hp: 150,
    attack: 80,
    defense: 44,
    sp_atk: 90,
    sp_def: 54,
    speed: 80,
  },
  {
    national_number: "427",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/buneary.png",
      large: "https://img.pokemondb.net/artwork/buneary.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/buneary.gif",
    },
    name: "Buneary",
    type: [types.normal],
    total: 350,
    hp: 55,
    attack: 66,
    defense: 44,
    sp_atk: 44,
    sp_def: 56,
    speed: 85,
  },
  {
    national_number: "428",
    evolution: { name: "Mega Lopunny" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lopunny.png",
      large: "https://img.pokemondb.net/artwork/lopunny.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/lopunny.gif",
    },
    name: "Lopunny",
    type: [types.normal, types.fighting],
    total: 580,
    hp: 65,
    attack: 136,
    defense: 94,
    sp_atk: 54,
    sp_def: 96,
    speed: 135,
  },
  {
    national_number: "428",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lopunny.png",
      large: "https://img.pokemondb.net/artwork/lopunny.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/lopunny.gif",
    },
    name: "Lopunny",
    type: [types.normal],
    total: 480,
    hp: 65,
    attack: 76,
    defense: 84,
    sp_atk: 54,
    sp_def: 96,
    speed: 105,
  },
  {
    national_number: "429",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mismagius.png",
      large: "https://img.pokemondb.net/artwork/mismagius.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mismagius.gif",
    },
    name: "Mismagius",
    type: [types.ghost],
    total: 495,
    hp: 60,
    attack: 60,
    defense: 60,
    sp_atk: 105,
    sp_def: 105,
    speed: 105,
  },
  {
    national_number: "430",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/honchkrow.png",
      large: "https://img.pokemondb.net/artwork/honchkrow.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/honchkrow.gif",
    },
    name: "Honchkrow",
    type: [types.dark, types.flying],
    total: 505,
    hp: 100,
    attack: 125,
    defense: 52,
    sp_atk: 105,
    sp_def: 52,
    speed: 71,
  },
  {
    national_number: "431",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/glameow.png",
      large: "https://img.pokemondb.net/artwork/glameow.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/glameow.gif",
    },
    name: "Glameow",
    type: [types.normal],
    total: 310,
    hp: 49,
    attack: 55,
    defense: 42,
    sp_atk: 42,
    sp_def: 37,
    speed: 85,
  },
  {
    national_number: "432",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/purugly.png",
      large: "https://img.pokemondb.net/artwork/purugly.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/purugly.gif",
    },
    name: "Purugly",
    type: [types.normal],
    total: 452,
    hp: 71,
    attack: 82,
    defense: 64,
    sp_atk: 64,
    sp_def: 59,
    speed: 112,
  },
  {
    national_number: "433",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/chingling.png",
      large: "https://img.pokemondb.net/artwork/chingling.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/chingling.gif",
    },
    name: "Chingling",
    type: [types.psychic],
    total: 285,
    hp: 45,
    attack: 30,
    defense: 50,
    sp_atk: 65,
    sp_def: 50,
    speed: 45,
  },
  {
    national_number: "434",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/stunky.png",
      large: "https://img.pokemondb.net/artwork/stunky.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/stunky.gif",
    },
    name: "Stunky",
    type: [types.poison, types.dark],
    total: 329,
    hp: 63,
    attack: 63,
    defense: 47,
    sp_atk: 41,
    sp_def: 41,
    speed: 74,
  },
  {
    national_number: "435",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/skuntank.png",
      large: "https://img.pokemondb.net/artwork/skuntank.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/skuntank.gif",
    },
    name: "Skuntank",
    type: [types.poison, types.dark],
    total: 479,
    hp: 103,
    attack: 93,
    defense: 67,
    sp_atk: 71,
    sp_def: 61,
    speed: 84,
  },
  {
    national_number: "436",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bronzor.png",
      large: "https://img.pokemondb.net/artwork/bronzor.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/bronzor.gif",
    },
    name: "Bronzor",
    type: [types.steel, types.psychic],
    total: 300,
    hp: 57,
    attack: 24,
    defense: 86,
    sp_atk: 24,
    sp_def: 86,
    speed: 23,
  },
  {
    national_number: "437",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bronzong.png",
      large: "https://img.pokemondb.net/artwork/bronzong.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/bronzong.gif",
    },
    name: "Bronzong",
    type: [types.steel, types.psychic],
    total: 500,
    hp: 67,
    attack: 89,
    defense: 116,
    sp_atk: 79,
    sp_def: 116,
    speed: 33,
  },
  {
    national_number: "438",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bonsly.png",
      large: "https://img.pokemondb.net/artwork/bonsly.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/bonsly.gif",
    },
    name: "Bonsly",
    type: [types.rock],
    total: 290,
    hp: 50,
    attack: 80,
    defense: 95,
    sp_atk: 10,
    sp_def: 45,
    speed: 10,
  },
  {
    national_number: "439",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mime-jr..png",
      large: "https://img.pokemondb.net/artwork/mime-jr..jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mime-jr..gif",
    },
    name: "Mime Jr.",
    type: [types.psychic, types.fairy],
    total: 310,
    hp: 20,
    attack: 25,
    defense: 45,
    sp_atk: 70,
    sp_def: 90,
    speed: 60,
  },
  {
    national_number: "440",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/happiny.png",
      large: "https://img.pokemondb.net/artwork/happiny.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/happiny.gif",
    },
    name: "Happiny",
    type: [types.normal],
    total: 220,
    hp: 100,
    attack: 5,
    defense: 5,
    sp_atk: 15,
    sp_def: 65,
    speed: 30,
  },
  {
    national_number: "441",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/chatot.png",
      large: "https://img.pokemondb.net/artwork/chatot.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/chatot.gif",
    },
    name: "Chatot",
    type: [types.normal, types.flying],
    total: 411,
    hp: 76,
    attack: 65,
    defense: 45,
    sp_atk: 92,
    sp_def: 42,
    speed: 91,
  },
  {
    national_number: "442",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/spiritomb.png",
      large: "https://img.pokemondb.net/artwork/spiritomb.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/spiritomb.gif",
    },
    name: "Spiritomb",
    type: [types.ghost, types.dark],
    total: 485,
    hp: 50,
    attack: 92,
    defense: 108,
    sp_atk: 92,
    sp_def: 108,
    speed: 35,
  },
  {
    national_number: "443",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gible.png",
      large: "https://img.pokemondb.net/artwork/gible.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gible.gif",
    },
    name: "Gible",
    type: [types.dragon, types.ground],
    total: 300,
    hp: 58,
    attack: 70,
    defense: 45,
    sp_atk: 40,
    sp_def: 45,
    speed: 42,
  },
  {
    national_number: "444",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gabite.png",
      large: "https://img.pokemondb.net/artwork/gabite.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gabite.gif",
    },
    name: "Gabite",
    type: [types.dragon, types.ground],
    total: 410,
    hp: 68,
    attack: 90,
    defense: 65,
    sp_atk: 50,
    sp_def: 55,
    speed: 82,
  },
  {
    national_number: "445",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/garchomp.png",
      large: "https://img.pokemondb.net/artwork/garchomp.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/garchomp.gif",
    },
    name: "Garchomp",
    type: [types.dragon, types.ground],
    total: 600,
    hp: 108,
    attack: 130,
    defense: 95,
    sp_atk: 80,
    sp_def: 85,
    speed: 102,
  },
  {
    national_number: "445",
    evolution: { name: "Mega Garchomp" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/garchomp.png",
      large: "https://img.pokemondb.net/artwork/garchomp.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/garchomp.gif",
    },
    name: "Garchomp",
    type: [types.dragon, types.ground],
    total: 700,
    hp: 108,
    attack: 170,
    defense: 115,
    sp_atk: 120,
    sp_def: 95,
    speed: 92,
  },
  {
    national_number: "446",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/munchlax.png",
      large: "https://img.pokemondb.net/artwork/munchlax.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/munchlax.gif",
    },
    name: "Munchlax",
    type: [types.normal],
    total: 390,
    hp: 135,
    attack: 85,
    defense: 40,
    sp_atk: 40,
    sp_def: 85,
    speed: 5,
  },
  {
    national_number: "447",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/riolu.png",
      large: "https://img.pokemondb.net/artwork/riolu.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/riolu.gif",
    },
    name: "Riolu",
    type: [types.fighting],
    total: 285,
    hp: 40,
    attack: 70,
    defense: 40,
    sp_atk: 35,
    sp_def: 40,
    speed: 60,
  },
  {
    national_number: "448",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lucario.png",
      large: "https://img.pokemondb.net/artwork/lucario.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/lucario.gif",
    },
    name: "Lucario",
    type: [types.fighting, types.steel],
    total: 525,
    hp: 70,
    attack: 110,
    defense: 70,
    sp_atk: 115,
    sp_def: 70,
    speed: 90,
  },
  {
    national_number: "448",
    evolution: { name: "Mega Lucario" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lucario.png",
      large: "https://img.pokemondb.net/artwork/lucario.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/lucario.gif",
    },
    name: "Lucario",
    type: [types.fighting, types.steel],
    total: 625,
    hp: 70,
    attack: 145,
    defense: 88,
    sp_atk: 140,
    sp_def: 70,
    speed: 112,
  },
  {
    national_number: "449",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hippopotas.png",
      large: "https://img.pokemondb.net/artwork/hippopotas.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/hippopotas.gif",
    },
    name: "Hippopotas",
    type: [types.ground],
    total: 330,
    hp: 68,
    attack: 72,
    defense: 78,
    sp_atk: 38,
    sp_def: 42,
    speed: 32,
  },
  {
    national_number: "450",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hippowdon.png",
      large: "https://img.pokemondb.net/artwork/hippowdon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/hippowdon.gif",
    },
    name: "Hippowdon",
    type: [types.ground],
    total: 525,
    hp: 108,
    attack: 112,
    defense: 118,
    sp_atk: 68,
    sp_def: 72,
    speed: 47,
  },
  {
    national_number: "451",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/skorupi.png",
      large: "https://img.pokemondb.net/artwork/skorupi.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/skorupi.gif",
    },
    name: "Skorupi",
    type: [types.poison, types.bug],
    total: 330,
    hp: 40,
    attack: 50,
    defense: 90,
    sp_atk: 30,
    sp_def: 55,
    speed: 65,
  },
  {
    national_number: "452",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/drapion.png",
      large: "https://img.pokemondb.net/artwork/drapion.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/drapion.gif",
    },
    name: "Drapion",
    type: [types.poison, types.dark],
    total: 500,
    hp: 70,
    attack: 90,
    defense: 110,
    sp_atk: 60,
    sp_def: 75,
    speed: 95,
  },
  {
    national_number: "453",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/croagunk.png",
      large: "https://img.pokemondb.net/artwork/croagunk.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/croagunk.gif",
    },
    name: "Croagunk",
    type: [types.poison, types.fighting],
    total: 300,
    hp: 48,
    attack: 61,
    defense: 40,
    sp_atk: 61,
    sp_def: 40,
    speed: 50,
  },
  {
    national_number: "454",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/toxicroak.png",
      large: "https://img.pokemondb.net/artwork/toxicroak.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/toxicroak.gif",
    },
    name: "Toxicroak",
    type: [types.poison, types.fighting],
    total: 490,
    hp: 83,
    attack: 106,
    defense: 65,
    sp_atk: 86,
    sp_def: 65,
    speed: 85,
  },
  {
    national_number: "455",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/carnivine.png",
      large: "https://img.pokemondb.net/artwork/carnivine.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/carnivine.gif",
    },
    name: "Carnivine",
    type: [types.grass],
    total: 454,
    hp: 74,
    attack: 100,
    defense: 72,
    sp_atk: 90,
    sp_def: 72,
    speed: 46,
  },
  {
    national_number: "456",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/finneon.png",
      large: "https://img.pokemondb.net/artwork/finneon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/finneon.gif",
    },
    name: "Finneon",
    type: [types.water],
    total: 330,
    hp: 49,
    attack: 49,
    defense: 56,
    sp_atk: 49,
    sp_def: 61,
    speed: 66,
  },
  {
    national_number: "457",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lumineon.png",
      large: "https://img.pokemondb.net/artwork/lumineon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/lumineon.gif",
    },
    name: "Lumineon",
    type: [types.water],
    total: 460,
    hp: 69,
    attack: 69,
    defense: 76,
    sp_atk: 69,
    sp_def: 86,
    speed: 91,
  },
  {
    national_number: "458",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mantyke.png",
      large: "https://img.pokemondb.net/artwork/mantyke.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mantyke.gif",
    },
    name: "Mantyke",
    type: [types.water, types.flying],
    total: 345,
    hp: 45,
    attack: 20,
    defense: 50,
    sp_atk: 60,
    sp_def: 120,
    speed: 50,
  },
  {
    national_number: "459",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/snover.png",
      large: "https://img.pokemondb.net/artwork/snover.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/snover.gif",
    },
    name: "Snover",
    type: [types.grass, types.ice],
    total: 334,
    hp: 60,
    attack: 62,
    defense: 50,
    sp_atk: 62,
    sp_def: 60,
    speed: 40,
  },
  {
    national_number: "460",
    evolution: { name: "Mega Abomasnow" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/abomasnow.png",
      large: "https://img.pokemondb.net/artwork/abomasnow.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/abomasnow.gif",
    },
    name: "Abomasnow",
    type: [types.grass, types.ice],
    total: 594,
    hp: 90,
    attack: 132,
    defense: 105,
    sp_atk: 132,
    sp_def: 105,
    speed: 30,
  },
  {
    national_number: "460",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/abomasnow.png",
      large: "https://img.pokemondb.net/artwork/abomasnow.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/abomasnow.gif",
    },
    name: "Abomasnow",
    type: [types.grass, types.ice],
    total: 494,
    hp: 90,
    attack: 92,
    defense: 75,
    sp_atk: 92,
    sp_def: 85,
    speed: 60,
  },
  {
    national_number: "461",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/weavile.png",
      large: "https://img.pokemondb.net/artwork/weavile.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/weavile.gif",
    },
    name: "Weavile",
    type: [types.dark, types.ice],
    total: 510,
    hp: 70,
    attack: 120,
    defense: 65,
    sp_atk: 45,
    sp_def: 85,
    speed: 125,
  },
  {
    national_number: "462",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/magnezone.png",
      large: "https://img.pokemondb.net/artwork/magnezone.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/magnezone.gif",
    },
    name: "Magnezone",
    type: [types.electric, types.steel],
    total: 535,
    hp: 70,
    attack: 70,
    defense: 115,
    sp_atk: 130,
    sp_def: 90,
    speed: 60,
  },
  {
    national_number: "463",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lickilicky.png",
      large: "https://img.pokemondb.net/artwork/lickilicky.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/lickilicky.gif",
    },
    name: "Lickilicky",
    type: [types.normal],
    total: 515,
    hp: 110,
    attack: 85,
    defense: 95,
    sp_atk: 80,
    sp_def: 95,
    speed: 50,
  },
  {
    national_number: "464",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rhyperior.png",
      large: "https://img.pokemondb.net/artwork/rhyperior.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/rhyperior.gif",
    },
    name: "Rhyperior",
    type: [types.ground, types.rock],
    total: 535,
    hp: 115,
    attack: 140,
    defense: 130,
    sp_atk: 55,
    sp_def: 55,
    speed: 40,
  },
  {
    national_number: "465",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tangrowth.png",
      large: "https://img.pokemondb.net/artwork/tangrowth.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/tangrowth.gif",
    },
    name: "Tangrowth",
    type: [types.grass],
    total: 535,
    hp: 100,
    attack: 100,
    defense: 125,
    sp_atk: 110,
    sp_def: 50,
    speed: 50,
  },
  {
    national_number: "466",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/electivire.png",
      large: "https://img.pokemondb.net/artwork/electivire.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/electivire.gif",
    },
    name: "Electivire",
    type: [types.electric],
    total: 540,
    hp: 75,
    attack: 123,
    defense: 67,
    sp_atk: 95,
    sp_def: 85,
    speed: 95,
  },
  {
    national_number: "467",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/magmortar.png",
      large: "https://img.pokemondb.net/artwork/magmortar.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/magmortar.gif",
    },
    name: "Magmortar",
    type: [types.fire],
    total: 540,
    hp: 75,
    attack: 95,
    defense: 67,
    sp_atk: 125,
    sp_def: 95,
    speed: 83,
  },
  {
    national_number: "468",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/togekiss.png",
      large: "https://img.pokemondb.net/artwork/togekiss.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/togekiss.gif",
    },
    name: "Togekiss",
    type: [types.fairy, types.flying],
    total: 545,
    hp: 85,
    attack: 50,
    defense: 95,
    sp_atk: 120,
    sp_def: 115,
    speed: 80,
  },
  {
    national_number: "469",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/yanmega.png",
      large: "https://img.pokemondb.net/artwork/yanmega.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/yanmega.gif",
    },
    name: "Yanmega",
    type: [types.bug, types.flying],
    total: 515,
    hp: 86,
    attack: 76,
    defense: 86,
    sp_atk: 116,
    sp_def: 56,
    speed: 95,
  },
  {
    national_number: "470",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/leafeon.png",
      large: "https://img.pokemondb.net/artwork/leafeon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/leafeon.gif",
    },
    name: "Leafeon",
    type: [types.grass],
    total: 525,
    hp: 65,
    attack: 110,
    defense: 130,
    sp_atk: 60,
    sp_def: 65,
    speed: 95,
  },
  {
    national_number: "471",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/glaceon.png",
      large: "https://img.pokemondb.net/artwork/glaceon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/glaceon.gif",
    },
    name: "Glaceon",
    type: [types.ice],
    total: 525,
    hp: 65,
    attack: 60,
    defense: 110,
    sp_atk: 130,
    sp_def: 95,
    speed: 65,
  },
  {
    national_number: "472",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gliscor.png",
      large: "https://img.pokemondb.net/artwork/gliscor.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gliscor.gif",
    },
    name: "Gliscor",
    type: [types.ground, types.flying],
    total: 510,
    hp: 75,
    attack: 95,
    defense: 125,
    sp_atk: 45,
    sp_def: 75,
    speed: 95,
  },
  {
    national_number: "473",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mamoswine.png",
      large: "https://img.pokemondb.net/artwork/mamoswine.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mamoswine.gif",
    },
    name: "Mamoswine",
    type: [types.ice, types.ground],
    total: 530,
    hp: 110,
    attack: 130,
    defense: 80,
    sp_atk: 70,
    sp_def: 60,
    speed: 80,
  },
  {
    national_number: "474",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/porygon-z.png",
      large: "https://img.pokemondb.net/artwork/porygon-z.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/porygon-z.gif",
    },
    name: "Porygon-Z",
    type: [types.normal],
    total: 535,
    hp: 85,
    attack: 80,
    defense: 70,
    sp_atk: 135,
    sp_def: 75,
    speed: 90,
  },
  {
    national_number: "475",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gallade.png",
      large: "https://img.pokemondb.net/artwork/gallade.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gallade.gif",
    },
    name: "Gallade",
    type: [types.psychic, types.fighting],
    total: 518,
    hp: 68,
    attack: 125,
    defense: 65,
    sp_atk: 65,
    sp_def: 115,
    speed: 80,
  },
  {
    national_number: "475",
    evolution: { name: "Mega Gallade" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gallade.png",
      large: "https://img.pokemondb.net/artwork/gallade.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gallade.gif",
    },
    name: "Gallade",
    type: [types.psychic, types.fighting],
    total: 618,
    hp: 68,
    attack: 165,
    defense: 95,
    sp_atk: 65,
    sp_def: 115,
    speed: 110,
  },
  {
    national_number: "476",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/probopass.png",
      large: "https://img.pokemondb.net/artwork/probopass.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/probopass.gif",
    },
    name: "Probopass",
    type: [types.rock, types.steel],
    total: 525,
    hp: 60,
    attack: 55,
    defense: 145,
    sp_atk: 75,
    sp_def: 150,
    speed: 40,
  },
  {
    national_number: "477",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dusknoir.png",
      large: "https://img.pokemondb.net/artwork/dusknoir.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/dusknoir.gif",
    },
    name: "Dusknoir",
    type: [types.ghost],
    total: 525,
    hp: 45,
    attack: 100,
    defense: 135,
    sp_atk: 65,
    sp_def: 135,
    speed: 45,
  },
  {
    national_number: "478",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/froslass.png",
      large: "https://img.pokemondb.net/artwork/froslass.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/froslass.gif",
    },
    name: "Froslass",
    type: [types.ice, types.ghost],
    total: 480,
    hp: 70,
    attack: 80,
    defense: 70,
    sp_atk: 80,
    sp_def: 70,
    speed: 110,
  },
  {
    national_number: "479",
    evolution: { name: "Wash Rotom" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rotom.png",
      large: "https://img.pokemondb.net/artwork/rotom.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/rotom.gif",
    },
    name: "Rotom",
    type: [types.electric, types.water],
    total: 520,
    hp: 50,
    attack: 65,
    defense: 107,
    sp_atk: 105,
    sp_def: 107,
    speed: 86,
  },
  {
    national_number: "479",
    evolution: { name: "Frost Rotom" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rotom.png",
      large: "https://img.pokemondb.net/artwork/rotom.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/rotom.gif",
    },
    name: "Rotom",
    type: [types.electric, types.ice],
    total: 520,
    hp: 50,
    attack: 65,
    defense: 107,
    sp_atk: 105,
    sp_def: 107,
    speed: 86,
  },
  {
    national_number: "479",
    evolution: { name: "Fan Rotom" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rotom.png",
      large: "https://img.pokemondb.net/artwork/rotom.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/rotom.gif",
    },
    name: "Rotom",
    type: [types.electric, types.flying],
    total: 520,
    hp: 50,
    attack: 65,
    defense: 107,
    sp_atk: 105,
    sp_def: 107,
    speed: 86,
  },
  {
    national_number: "479",
    evolution: { name: "Mow Rotom" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rotom.png",
      large: "https://img.pokemondb.net/artwork/rotom.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/rotom.gif",
    },
    name: "Rotom",
    type: [types.electric, types.grass],
    total: 520,
    hp: 50,
    attack: 65,
    defense: 107,
    sp_atk: 105,
    sp_def: 107,
    speed: 86,
  },
  {
    national_number: "479",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rotom.png",
      large: "https://img.pokemondb.net/artwork/rotom.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/rotom.gif",
    },
    name: "Rotom",
    type: [types.electric, types.ghost],
    total: 440,
    hp: 50,
    attack: 50,
    defense: 77,
    sp_atk: 95,
    sp_def: 77,
    speed: 91,
  },
  {
    national_number: "479",
    evolution: { name: "Heat Rotom" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rotom.png",
      large: "https://img.pokemondb.net/artwork/rotom.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/rotom.gif",
    },
    name: "Rotom",
    type: [types.electric, types.fire],
    total: 520,
    hp: 50,
    attack: 65,
    defense: 107,
    sp_atk: 105,
    sp_def: 107,
    speed: 86,
  },
  {
    national_number: "480",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/uxie.png",
      large: "https://img.pokemondb.net/artwork/uxie.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/uxie.gif",
    },
    name: "Uxie",
    type: [types.psychic],
    total: 580,
    hp: 75,
    attack: 75,
    defense: 130,
    sp_atk: 75,
    sp_def: 130,
    speed: 95,
  },
  {
    national_number: "481",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mesprit.png",
      large: "https://img.pokemondb.net/artwork/mesprit.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mesprit.gif",
    },
    name: "Mesprit",
    type: [types.psychic],
    total: 580,
    hp: 80,
    attack: 105,
    defense: 105,
    sp_atk: 105,
    sp_def: 105,
    speed: 80,
  },
  {
    national_number: "482",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/azelf.png",
      large: "https://img.pokemondb.net/artwork/azelf.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/azelf.gif",
    },
    name: "Azelf",
    type: [types.psychic],
    total: 580,
    hp: 75,
    attack: 125,
    defense: 70,
    sp_atk: 125,
    sp_def: 70,
    speed: 115,
  },
  {
    national_number: "483",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dialga.png",
      large: "https://img.pokemondb.net/artwork/dialga.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/dialga.gif",
    },
    name: "Dialga",
    type: [types.steel, types.dragon],
    total: 680,
    hp: 100,
    attack: 120,
    defense: 120,
    sp_atk: 150,
    sp_def: 100,
    speed: 90,
  },
  {
    national_number: "484",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/palkia.png",
      large: "https://img.pokemondb.net/artwork/palkia.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/palkia.gif",
    },
    name: "Palkia",
    type: [types.water, types.dragon],
    total: 680,
    hp: 90,
    attack: 120,
    defense: 100,
    sp_atk: 150,
    sp_def: 120,
    speed: 100,
  },
  {
    national_number: "485",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/heatran.png",
      large: "https://img.pokemondb.net/artwork/heatran.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/heatran.gif",
    },
    name: "Heatran",
    type: [types.fire, types.steel],
    total: 600,
    hp: 91,
    attack: 90,
    defense: 106,
    sp_atk: 130,
    sp_def: 106,
    speed: 77,
  },
  {
    national_number: "486",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/regigigas.png",
      large: "https://img.pokemondb.net/artwork/regigigas.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/regigigas.gif",
    },
    name: "Regigigas",
    type: [types.normal],
    total: 670,
    hp: 110,
    attack: 160,
    defense: 110,
    sp_atk: 80,
    sp_def: 110,
    speed: 100,
  },
  {
    national_number: "487",
    evolution: { name: "Altered Forme" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/giratina.png",
      large: "https://img.pokemondb.net/artwork/giratina.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/giratina.gif",
    },
    name: "Giratina",
    type: [types.ghost, types.dragon],
    total: 680,
    hp: 150,
    attack: 100,
    defense: 120,
    sp_atk: 100,
    sp_def: 120,
    speed: 90,
  },
  {
    national_number: "487",
    evolution: { name: "Origin Forme" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/giratina.png",
      large: "https://img.pokemondb.net/artwork/giratina.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/giratina.gif",
    },
    name: "Giratina",
    type: [types.ghost, types.dragon],
    total: 680,
    hp: 150,
    attack: 120,
    defense: 100,
    sp_atk: 120,
    sp_def: 100,
    speed: 90,
  },
  {
    national_number: "488",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cresselia.png",
      large: "https://img.pokemondb.net/artwork/cresselia.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/cresselia.gif",
    },
    name: "Cresselia",
    type: [types.psychic],
    total: 600,
    hp: 120,
    attack: 70,
    defense: 120,
    sp_atk: 75,
    sp_def: 130,
    speed: 85,
  },
  {
    national_number: "489",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/phione.png",
      large: "https://img.pokemondb.net/artwork/phione.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/phione.gif",
    },
    name: "Phione",
    type: [types.water],
    total: 480,
    hp: 80,
    attack: 80,
    defense: 80,
    sp_atk: 80,
    sp_def: 80,
    speed: 80,
  },
  {
    national_number: "490",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/manaphy.png",
      large: "https://img.pokemondb.net/artwork/manaphy.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/manaphy.gif",
    },
    name: "Manaphy",
    type: [types.water],
    total: 600,
    hp: 100,
    attack: 100,
    defense: 100,
    sp_atk: 100,
    sp_def: 100,
    speed: 100,
  },
  {
    national_number: "491",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/darkrai.png",
      large: "https://img.pokemondb.net/artwork/darkrai.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/darkrai.gif",
    },
    name: "Darkrai",
    type: [types.dark],
    total: 600,
    hp: 70,
    attack: 90,
    defense: 90,
    sp_atk: 135,
    sp_def: 90,
    speed: 125,
  },
  {
    national_number: "492",
    evolution: { name: "Sky Forme" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shaymin.png",
      large: "https://img.pokemondb.net/artwork/shaymin.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/shaymin.gif",
    },
    name: "Shaymin",
    type: [types.grass, types.flying],
    total: 600,
    hp: 100,
    attack: 103,
    defense: 75,
    sp_atk: 120,
    sp_def: 75,
    speed: 127,
  },
  {
    national_number: "492",
    evolution: { name: "Land Forme" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shaymin.png",
      large: "https://img.pokemondb.net/artwork/shaymin.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/shaymin.gif",
    },
    name: "Shaymin",
    type: [types.grass],
    total: 600,
    hp: 100,
    attack: 100,
    defense: 100,
    sp_atk: 100,
    sp_def: 100,
    speed: 100,
  },
  {
    national_number: "493",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/arceus.png",
      large: "https://img.pokemondb.net/artwork/arceus.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/arceus.gif",
    },
    name: "Arceus",
    type: [types.normal],
    total: 720,
    hp: 120,
    attack: 120,
    defense: 120,
    sp_atk: 120,
    sp_def: 120,
    speed: 120,
  },
  {
    national_number: "494",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/victini.png",
      large: "https://img.pokemondb.net/artwork/victini.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/victini.gif",
    },
    name: "Victini",
    type: [types.psychic, types.fire],
    total: 600,
    hp: 100,
    attack: 100,
    defense: 100,
    sp_atk: 100,
    sp_def: 100,
    speed: 100,
  },
  {
    national_number: "495",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/snivy.png",
      large: "https://img.pokemondb.net/artwork/snivy.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/snivy.gif",
    },
    name: "Snivy",
    type: [types.grass],
    total: 308,
    hp: 45,
    attack: 45,
    defense: 55,
    sp_atk: 45,
    sp_def: 55,
    speed: 63,
  },
  {
    national_number: "496",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/servine.png",
      large: "https://img.pokemondb.net/artwork/servine.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/servine.gif",
    },
    name: "Servine",
    type: [types.grass],
    total: 413,
    hp: 60,
    attack: 60,
    defense: 75,
    sp_atk: 60,
    sp_def: 75,
    speed: 83,
  },
  {
    national_number: "497",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/serperior.png",
      large: "https://img.pokemondb.net/artwork/serperior.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/serperior.gif",
    },
    name: "Serperior",
    type: [types.grass],
    total: 528,
    hp: 75,
    attack: 75,
    defense: 95,
    sp_atk: 75,
    sp_def: 95,
    speed: 113,
  },
  {
    national_number: "498",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tepig.png",
      large: "https://img.pokemondb.net/artwork/tepig.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/tepig.gif",
    },
    name: "Tepig",
    type: [types.fire],
    total: 308,
    hp: 65,
    attack: 63,
    defense: 45,
    sp_atk: 45,
    sp_def: 45,
    speed: 45,
  },
  {
    national_number: "499",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pignite.png",
      large: "https://img.pokemondb.net/artwork/pignite.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pignite.gif",
    },
    name: "Pignite",
    type: [types.fire, types.fighting],
    total: 418,
    hp: 90,
    attack: 93,
    defense: 55,
    sp_atk: 70,
    sp_def: 55,
    speed: 55,
  },
  {
    national_number: "500",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/emboar.png",
      large: "https://img.pokemondb.net/artwork/emboar.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/emboar.gif",
    },
    name: "Emboar",
    type: [types.fire, types.fighting],
    total: 528,
    hp: 110,
    attack: 123,
    defense: 65,
    sp_atk: 100,
    sp_def: 65,
    speed: 65,
  },
  {
    national_number: "501",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/oshawott.png",
      large: "https://img.pokemondb.net/artwork/oshawott.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/oshawott.gif",
    },
    name: "Oshawott",
    type: [types.water],
    total: 308,
    hp: 55,
    attack: 55,
    defense: 45,
    sp_atk: 63,
    sp_def: 45,
    speed: 45,
  },
  {
    national_number: "502",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dewott.png",
      large: "https://img.pokemondb.net/artwork/dewott.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/dewott.gif",
    },
    name: "Dewott",
    type: [types.water],
    total: 413,
    hp: 75,
    attack: 75,
    defense: 60,
    sp_atk: 83,
    sp_def: 60,
    speed: 60,
  },
  {
    national_number: "503",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/samurott.png",
      large: "https://img.pokemondb.net/artwork/samurott.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/samurott.gif",
    },
    name: "Samurott",
    type: [types.water],
    total: 528,
    hp: 95,
    attack: 100,
    defense: 85,
    sp_atk: 108,
    sp_def: 70,
    speed: 70,
  },
  {
    national_number: "504",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/patrat.png",
      large: "https://img.pokemondb.net/artwork/patrat.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/patrat.gif",
    },
    name: "Patrat",
    type: [types.normal],
    total: 255,
    hp: 45,
    attack: 55,
    defense: 39,
    sp_atk: 35,
    sp_def: 39,
    speed: 42,
  },
  {
    national_number: "505",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/watchog.png",
      large: "https://img.pokemondb.net/artwork/watchog.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/watchog.gif",
    },
    name: "Watchog",
    type: [types.normal],
    total: 420,
    hp: 60,
    attack: 85,
    defense: 69,
    sp_atk: 60,
    sp_def: 69,
    speed: 77,
  },
  {
    national_number: "506",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lillipup.png",
      large: "https://img.pokemondb.net/artwork/lillipup.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/lillipup.gif",
    },
    name: "Lillipup",
    type: [types.normal],
    total: 275,
    hp: 45,
    attack: 60,
    defense: 45,
    sp_atk: 25,
    sp_def: 45,
    speed: 55,
  },
  {
    national_number: "507",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/herdier.png",
      large: "https://img.pokemondb.net/artwork/herdier.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/herdier.gif",
    },
    name: "Herdier",
    type: [types.normal],
    total: 370,
    hp: 65,
    attack: 80,
    defense: 65,
    sp_atk: 35,
    sp_def: 65,
    speed: 60,
  },
  {
    national_number: "508",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/stoutland.png",
      large: "https://img.pokemondb.net/artwork/stoutland.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/stoutland.gif",
    },
    name: "Stoutland",
    type: [types.normal],
    total: 500,
    hp: 85,
    attack: 110,
    defense: 90,
    sp_atk: 45,
    sp_def: 90,
    speed: 80,
  },
  {
    national_number: "509",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/purrloin.png",
      large: "https://img.pokemondb.net/artwork/purrloin.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/purrloin.gif",
    },
    name: "Purrloin",
    type: [types.dark],
    total: 281,
    hp: 41,
    attack: 50,
    defense: 37,
    sp_atk: 50,
    sp_def: 37,
    speed: 66,
  },
  {
    national_number: "510",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/liepard.png",
      large: "https://img.pokemondb.net/artwork/liepard.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/liepard.gif",
    },
    name: "Liepard",
    type: [types.dark],
    total: 446,
    hp: 64,
    attack: 88,
    defense: 50,
    sp_atk: 88,
    sp_def: 50,
    speed: 106,
  },
  {
    national_number: "511",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pansage.png",
      large: "https://img.pokemondb.net/artwork/pansage.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pansage.gif",
    },
    name: "Pansage",
    type: [types.grass],
    total: 316,
    hp: 50,
    attack: 53,
    defense: 48,
    sp_atk: 53,
    sp_def: 48,
    speed: 64,
  },
  {
    national_number: "512",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/simisage.png",
      large: "https://img.pokemondb.net/artwork/simisage.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/simisage.gif",
    },
    name: "Simisage",
    type: [types.grass],
    total: 498,
    hp: 75,
    attack: 98,
    defense: 63,
    sp_atk: 98,
    sp_def: 63,
    speed: 101,
  },
  {
    national_number: "513",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pansear.png",
      large: "https://img.pokemondb.net/artwork/pansear.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pansear.gif",
    },
    name: "Pansear",
    type: [types.fire],
    total: 316,
    hp: 50,
    attack: 53,
    defense: 48,
    sp_atk: 53,
    sp_def: 48,
    speed: 64,
  },
  {
    national_number: "514",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/simisear.png",
      large: "https://img.pokemondb.net/artwork/simisear.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/simisear.gif",
    },
    name: "Simisear",
    type: [types.fire],
    total: 498,
    hp: 75,
    attack: 98,
    defense: 63,
    sp_atk: 98,
    sp_def: 63,
    speed: 101,
  },
  {
    national_number: "515",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/panpour.png",
      large: "https://img.pokemondb.net/artwork/panpour.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/panpour.gif",
    },
    name: "Panpour",
    type: [types.water],
    total: 316,
    hp: 50,
    attack: 53,
    defense: 48,
    sp_atk: 53,
    sp_def: 48,
    speed: 64,
  },
  {
    national_number: "516",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/simipour.png",
      large: "https://img.pokemondb.net/artwork/simipour.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/simipour.gif",
    },
    name: "Simipour",
    type: [types.water],
    total: 498,
    hp: 75,
    attack: 98,
    defense: 63,
    sp_atk: 98,
    sp_def: 63,
    speed: 101,
  },
  {
    national_number: "517",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/munna.png",
      large: "https://img.pokemondb.net/artwork/munna.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/munna.gif",
    },
    name: "Munna",
    type: [types.psychic],
    total: 292,
    hp: 76,
    attack: 25,
    defense: 45,
    sp_atk: 67,
    sp_def: 55,
    speed: 24,
  },
  {
    national_number: "518",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/musharna.png",
      large: "https://img.pokemondb.net/artwork/musharna.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/musharna.gif",
    },
    name: "Musharna",
    type: [types.psychic],
    total: 487,
    hp: 116,
    attack: 55,
    defense: 85,
    sp_atk: 107,
    sp_def: 95,
    speed: 29,
  },
  {
    national_number: "519",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pidove.png",
      large: "https://img.pokemondb.net/artwork/pidove.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pidove.gif",
    },
    name: "Pidove",
    type: [types.normal, types.flying],
    total: 264,
    hp: 50,
    attack: 55,
    defense: 50,
    sp_atk: 36,
    sp_def: 30,
    speed: 43,
  },
  {
    national_number: "520",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tranquill.png",
      large: "https://img.pokemondb.net/artwork/tranquill.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/tranquill.gif",
    },
    name: "Tranquill",
    type: [types.normal, types.flying],
    total: 358,
    hp: 62,
    attack: 77,
    defense: 62,
    sp_atk: 50,
    sp_def: 42,
    speed: 65,
  },
  {
    national_number: "521",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/unfezant.png",
      large: "https://img.pokemondb.net/artwork/unfezant.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/unfezant.gif",
    },
    name: "Unfezant",
    type: [types.normal, types.flying],
    total: 488,
    hp: 80,
    attack: 115,
    defense: 80,
    sp_atk: 65,
    sp_def: 55,
    speed: 93,
  },
  {
    national_number: "522",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/blitzle.png",
      large: "https://img.pokemondb.net/artwork/blitzle.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/blitzle.gif",
    },
    name: "Blitzle",
    type: [types.electric],
    total: 295,
    hp: 45,
    attack: 60,
    defense: 32,
    sp_atk: 50,
    sp_def: 32,
    speed: 76,
  },
  {
    national_number: "523",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zebstrika.png",
      large: "https://img.pokemondb.net/artwork/zebstrika.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/zebstrika.gif",
    },
    name: "Zebstrika",
    type: [types.electric],
    total: 497,
    hp: 75,
    attack: 100,
    defense: 63,
    sp_atk: 80,
    sp_def: 63,
    speed: 116,
  },
  {
    national_number: "524",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/roggenrola.png",
      large: "https://img.pokemondb.net/artwork/roggenrola.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/roggenrola.gif",
    },
    name: "Roggenrola",
    type: [types.rock],
    total: 280,
    hp: 55,
    attack: 75,
    defense: 85,
    sp_atk: 25,
    sp_def: 25,
    speed: 15,
  },
  {
    national_number: "525",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/boldore.png",
      large: "https://img.pokemondb.net/artwork/boldore.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/boldore.gif",
    },
    name: "Boldore",
    type: [types.rock],
    total: 390,
    hp: 70,
    attack: 105,
    defense: 105,
    sp_atk: 50,
    sp_def: 40,
    speed: 20,
  },
  {
    national_number: "526",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gigalith.png",
      large: "https://img.pokemondb.net/artwork/gigalith.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gigalith.gif",
    },
    name: "Gigalith",
    type: [types.rock],
    total: 515,
    hp: 85,
    attack: 135,
    defense: 130,
    sp_atk: 60,
    sp_def: 80,
    speed: 25,
  },
  {
    national_number: "527",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/woobat.png",
      large: "https://img.pokemondb.net/artwork/woobat.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/woobat.gif",
    },
    name: "Woobat",
    type: [types.psychic, types.flying],
    total: 323,
    hp: 65,
    attack: 45,
    defense: 43,
    sp_atk: 55,
    sp_def: 43,
    speed: 72,
  },
  {
    national_number: "528",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/swoobat.png",
      large: "https://img.pokemondb.net/artwork/swoobat.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/swoobat.gif",
    },
    name: "Swoobat",
    type: [types.psychic, types.flying],
    total: 425,
    hp: 67,
    attack: 57,
    defense: 55,
    sp_atk: 77,
    sp_def: 55,
    speed: 114,
  },
  {
    national_number: "529",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/drilbur.png",
      large: "https://img.pokemondb.net/artwork/drilbur.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/drilbur.gif",
    },
    name: "Drilbur",
    type: [types.ground],
    total: 328,
    hp: 60,
    attack: 85,
    defense: 40,
    sp_atk: 30,
    sp_def: 45,
    speed: 68,
  },
  {
    national_number: "530",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/excadrill.png",
      large: "https://img.pokemondb.net/artwork/excadrill.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/excadrill.gif",
    },
    name: "Excadrill",
    type: [types.ground, types.steel],
    total: 508,
    hp: 110,
    attack: 135,
    defense: 60,
    sp_atk: 50,
    sp_def: 65,
    speed: 88,
  },
  {
    national_number: "531",
    evolution: { name: "Mega Audino" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/audino.png",
      large: "https://img.pokemondb.net/artwork/audino.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/audino.gif",
    },
    name: "Audino",
    type: [types.normal, types.fairy],
    total: 545,
    hp: 103,
    attack: 60,
    defense: 126,
    sp_atk: 80,
    sp_def: 126,
    speed: 50,
  },
  {
    national_number: "531",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/audino.png",
      large: "https://img.pokemondb.net/artwork/audino.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/audino.gif",
    },
    name: "Audino",
    type: [types.normal],
    total: 445,
    hp: 103,
    attack: 60,
    defense: 86,
    sp_atk: 60,
    sp_def: 86,
    speed: 50,
  },
  {
    national_number: "532",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/timburr.png",
      large: "https://img.pokemondb.net/artwork/timburr.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/timburr.gif",
    },
    name: "Timburr",
    type: [types.fighting],
    total: 305,
    hp: 75,
    attack: 80,
    defense: 55,
    sp_atk: 25,
    sp_def: 35,
    speed: 35,
  },
  {
    national_number: "533",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gurdurr.png",
      large: "https://img.pokemondb.net/artwork/gurdurr.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gurdurr.gif",
    },
    name: "Gurdurr",
    type: [types.fighting],
    total: 405,
    hp: 85,
    attack: 105,
    defense: 85,
    sp_atk: 40,
    sp_def: 50,
    speed: 40,
  },
  {
    national_number: "534",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/conkeldurr.png",
      large: "https://img.pokemondb.net/artwork/conkeldurr.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/conkeldurr.gif",
    },
    name: "Conkeldurr",
    type: [types.fighting],
    total: 505,
    hp: 105,
    attack: 140,
    defense: 95,
    sp_atk: 55,
    sp_def: 65,
    speed: 45,
  },
  {
    national_number: "535",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tympole.png",
      large: "https://img.pokemondb.net/artwork/tympole.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/tympole.gif",
    },
    name: "Tympole",
    type: [types.water],
    total: 294,
    hp: 50,
    attack: 50,
    defense: 40,
    sp_atk: 50,
    sp_def: 40,
    speed: 64,
  },
  {
    national_number: "536",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/palpitoad.png",
      large: "https://img.pokemondb.net/artwork/palpitoad.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/palpitoad.gif",
    },
    name: "Palpitoad",
    type: [types.water, types.ground],
    total: 384,
    hp: 75,
    attack: 65,
    defense: 55,
    sp_atk: 65,
    sp_def: 55,
    speed: 69,
  },
  {
    national_number: "537",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/seismitoad.png",
      large: "https://img.pokemondb.net/artwork/seismitoad.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/seismitoad.gif",
    },
    name: "Seismitoad",
    type: [types.water, types.ground],
    total: 509,
    hp: 105,
    attack: 95,
    defense: 75,
    sp_atk: 85,
    sp_def: 75,
    speed: 74,
  },
  {
    national_number: "538",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/throh.png",
      large: "https://img.pokemondb.net/artwork/throh.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/throh.gif",
    },
    name: "Throh",
    type: [types.fighting],
    total: 465,
    hp: 120,
    attack: 100,
    defense: 85,
    sp_atk: 30,
    sp_def: 85,
    speed: 45,
  },
  {
    national_number: "539",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sawk.png",
      large: "https://img.pokemondb.net/artwork/sawk.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/sawk.gif",
    },
    name: "Sawk",
    type: [types.fighting],
    total: 465,
    hp: 75,
    attack: 125,
    defense: 75,
    sp_atk: 30,
    sp_def: 75,
    speed: 85,
  },
  {
    national_number: "540",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sewaddle.png",
      large: "https://img.pokemondb.net/artwork/sewaddle.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/sewaddle.gif",
    },
    name: "Sewaddle",
    type: [types.bug, types.grass],
    total: 310,
    hp: 45,
    attack: 53,
    defense: 70,
    sp_atk: 40,
    sp_def: 60,
    speed: 42,
  },
  {
    national_number: "541",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/swadloon.png",
      large: "https://img.pokemondb.net/artwork/swadloon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/swadloon.gif",
    },
    name: "Swadloon",
    type: [types.bug, types.grass],
    total: 380,
    hp: 55,
    attack: 63,
    defense: 90,
    sp_atk: 50,
    sp_def: 80,
    speed: 42,
  },
  {
    national_number: "542",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/leavanny.png",
      large: "https://img.pokemondb.net/artwork/leavanny.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/leavanny.gif",
    },
    name: "Leavanny",
    type: [types.bug, types.grass],
    total: 500,
    hp: 75,
    attack: 103,
    defense: 80,
    sp_atk: 70,
    sp_def: 80,
    speed: 92,
  },
  {
    national_number: "543",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venipede.png",
      large: "https://img.pokemondb.net/artwork/venipede.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/venipede.gif",
    },
    name: "Venipede",
    type: [types.bug, types.poison],
    total: 260,
    hp: 30,
    attack: 45,
    defense: 59,
    sp_atk: 30,
    sp_def: 39,
    speed: 57,
  },
  {
    national_number: "544",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/whirlipede.png",
      large: "https://img.pokemondb.net/artwork/whirlipede.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/whirlipede.gif",
    },
    name: "Whirlipede",
    type: [types.bug, types.poison],
    total: 360,
    hp: 40,
    attack: 55,
    defense: 99,
    sp_atk: 40,
    sp_def: 79,
    speed: 47,
  },
  {
    national_number: "545",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/scolipede.png",
      large: "https://img.pokemondb.net/artwork/scolipede.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/scolipede.gif",
    },
    name: "Scolipede",
    type: [types.bug, types.poison],
    total: 485,
    hp: 60,
    attack: 100,
    defense: 89,
    sp_atk: 55,
    sp_def: 69,
    speed: 112,
  },
  {
    national_number: "546",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cottonee.png",
      large: "https://img.pokemondb.net/artwork/cottonee.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/cottonee.gif",
    },
    name: "Cottonee",
    type: [types.grass, types.fairy],
    total: 280,
    hp: 40,
    attack: 27,
    defense: 60,
    sp_atk: 37,
    sp_def: 50,
    speed: 66,
  },
  {
    national_number: "547",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/whimsicott.png",
      large: "https://img.pokemondb.net/artwork/whimsicott.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/whimsicott.gif",
    },
    name: "Whimsicott",
    type: [types.grass, types.fairy],
    total: 480,
    hp: 60,
    attack: 67,
    defense: 85,
    sp_atk: 77,
    sp_def: 75,
    speed: 116,
  },
  {
    national_number: "548",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/petilil.png",
      large: "https://img.pokemondb.net/artwork/petilil.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/petilil.gif",
    },
    name: "Petilil",
    type: [types.grass],
    total: 280,
    hp: 45,
    attack: 35,
    defense: 50,
    sp_atk: 70,
    sp_def: 50,
    speed: 30,
  },
  {
    national_number: "549",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lilligant.png",
      large: "https://img.pokemondb.net/artwork/lilligant.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/lilligant.gif",
    },
    name: "Lilligant",
    type: [types.grass],
    total: 480,
    hp: 70,
    attack: 60,
    defense: 75,
    sp_atk: 110,
    sp_def: 75,
    speed: 90,
  },
  {
    national_number: "550",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/basculin.png",
      large: "https://img.pokemondb.net/artwork/basculin.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/basculin.gif",
    },
    name: "Basculin",
    type: [types.water],
    total: 460,
    hp: 70,
    attack: 92,
    defense: 65,
    sp_atk: 80,
    sp_def: 55,
    speed: 98,
  },
  {
    national_number: "551",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sandile.png",
      large: "https://img.pokemondb.net/artwork/sandile.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/sandile.gif",
    },
    name: "Sandile",
    type: [types.ground, types.dark],
    total: 292,
    hp: 50,
    attack: 72,
    defense: 35,
    sp_atk: 35,
    sp_def: 35,
    speed: 65,
  },
  {
    national_number: "552",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/krokorok.png",
      large: "https://img.pokemondb.net/artwork/krokorok.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/krokorok.gif",
    },
    name: "Krokorok",
    type: [types.ground, types.dark],
    total: 351,
    hp: 60,
    attack: 82,
    defense: 45,
    sp_atk: 45,
    sp_def: 45,
    speed: 74,
  },
  {
    national_number: "553",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/krookodile.png",
      large: "https://img.pokemondb.net/artwork/krookodile.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/krookodile.gif",
    },
    name: "Krookodile",
    type: [types.ground, types.dark],
    total: 519,
    hp: 95,
    attack: 117,
    defense: 80,
    sp_atk: 65,
    sp_def: 70,
    speed: 92,
  },
  {
    national_number: "554",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/darumaka.png",
      large: "https://img.pokemondb.net/artwork/darumaka.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/darumaka.gif",
    },
    name: "Darumaka",
    type: [types.fire],
    total: 315,
    hp: 70,
    attack: 90,
    defense: 45,
    sp_atk: 15,
    sp_def: 45,
    speed: 50,
  },
  {
    national_number: "555",
    evolution: { name: "Zen Mode" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/darmanitan.png",
      large: "https://img.pokemondb.net/artwork/darmanitan.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/darmanitan.gif",
    },
    name: "Darmanitan",
    type: [types.fire, types.psychic],
    total: 540,
    hp: 105,
    attack: 30,
    defense: 105,
    sp_atk: 140,
    sp_def: 105,
    speed: 55,
  },
  {
    national_number: "555",
    evolution: { name: "Standard Mode" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/darmanitan.png",
      large: "https://img.pokemondb.net/artwork/darmanitan.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/darmanitan.gif",
    },
    name: "Darmanitan",
    type: [types.fire],
    total: 480,
    hp: 105,
    attack: 140,
    defense: 55,
    sp_atk: 30,
    sp_def: 55,
    speed: 95,
  },
  {
    national_number: "556",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/maractus.png",
      large: "https://img.pokemondb.net/artwork/maractus.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/maractus.gif",
    },
    name: "Maractus",
    type: [types.grass],
    total: 461,
    hp: 75,
    attack: 86,
    defense: 67,
    sp_atk: 106,
    sp_def: 67,
    speed: 60,
  },
  {
    national_number: "557",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dwebble.png",
      large: "https://img.pokemondb.net/artwork/dwebble.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/dwebble.gif",
    },
    name: "Dwebble",
    type: [types.bug, types.rock],
    total: 325,
    hp: 50,
    attack: 65,
    defense: 85,
    sp_atk: 35,
    sp_def: 35,
    speed: 55,
  },
  {
    national_number: "558",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/crustle.png",
      large: "https://img.pokemondb.net/artwork/crustle.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/crustle.gif",
    },
    name: "Crustle",
    type: [types.bug, types.rock],
    total: 485,
    hp: 70,
    attack: 105,
    defense: 125,
    sp_atk: 65,
    sp_def: 75,
    speed: 45,
  },
  {
    national_number: "559",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/scraggy.png",
      large: "https://img.pokemondb.net/artwork/scraggy.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/scraggy.gif",
    },
    name: "Scraggy",
    type: [types.dark, types.fighting],
    total: 348,
    hp: 50,
    attack: 75,
    defense: 70,
    sp_atk: 35,
    sp_def: 70,
    speed: 48,
  },
  {
    national_number: "560",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/scrafty.png",
      large: "https://img.pokemondb.net/artwork/scrafty.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/scrafty.gif",
    },
    name: "Scrafty",
    type: [types.dark, types.fighting],
    total: 488,
    hp: 65,
    attack: 90,
    defense: 115,
    sp_atk: 45,
    sp_def: 115,
    speed: 58,
  },
  {
    national_number: "561",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sigilyph.png",
      large: "https://img.pokemondb.net/artwork/sigilyph.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/sigilyph.gif",
    },
    name: "Sigilyph",
    type: [types.psychic, types.flying],
    total: 490,
    hp: 72,
    attack: 58,
    defense: 80,
    sp_atk: 103,
    sp_def: 80,
    speed: 97,
  },
  {
    national_number: "562",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/yamask.png",
      large: "https://img.pokemondb.net/artwork/yamask.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/yamask.gif",
    },
    name: "Yamask",
    type: [types.ghost],
    total: 303,
    hp: 38,
    attack: 30,
    defense: 85,
    sp_atk: 55,
    sp_def: 65,
    speed: 30,
  },
  {
    national_number: "563",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cofagrigus.png",
      large: "https://img.pokemondb.net/artwork/cofagrigus.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/cofagrigus.gif",
    },
    name: "Cofagrigus",
    type: [types.ghost],
    total: 483,
    hp: 58,
    attack: 50,
    defense: 145,
    sp_atk: 95,
    sp_def: 105,
    speed: 30,
  },
  {
    national_number: "564",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tirtouga.png",
      large: "https://img.pokemondb.net/artwork/tirtouga.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/tirtouga.gif",
    },
    name: "Tirtouga",
    type: [types.water, types.rock],
    total: 355,
    hp: 54,
    attack: 78,
    defense: 103,
    sp_atk: 53,
    sp_def: 45,
    speed: 22,
  },
  {
    national_number: "565",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/carracosta.png",
      large: "https://img.pokemondb.net/artwork/carracosta.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/carracosta.gif",
    },
    name: "Carracosta",
    type: [types.water, types.rock],
    total: 495,
    hp: 74,
    attack: 108,
    defense: 133,
    sp_atk: 83,
    sp_def: 65,
    speed: 32,
  },
  {
    national_number: "566",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/archen.png",
      large: "https://img.pokemondb.net/artwork/archen.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/archen.gif",
    },
    name: "Archen",
    type: [types.rock, types.flying],
    total: 401,
    hp: 55,
    attack: 112,
    defense: 45,
    sp_atk: 74,
    sp_def: 45,
    speed: 70,
  },
  {
    national_number: "567",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/archeops.png",
      large: "https://img.pokemondb.net/artwork/archeops.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/archeops.gif",
    },
    name: "Archeops",
    type: [types.rock, types.flying],
    total: 567,
    hp: 75,
    attack: 140,
    defense: 65,
    sp_atk: 112,
    sp_def: 65,
    speed: 110,
  },
  {
    national_number: "568",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/trubbish.png",
      large: "https://img.pokemondb.net/artwork/trubbish.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/trubbish.gif",
    },
    name: "Trubbish",
    type: [types.poison],
    total: 329,
    hp: 50,
    attack: 50,
    defense: 62,
    sp_atk: 40,
    sp_def: 62,
    speed: 65,
  },
  {
    national_number: "569",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/garbodor.png",
      large: "https://img.pokemondb.net/artwork/garbodor.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/garbodor.gif",
    },
    name: "Garbodor",
    type: [types.poison],
    total: 474,
    hp: 80,
    attack: 95,
    defense: 82,
    sp_atk: 60,
    sp_def: 82,
    speed: 75,
  },
  {
    national_number: "570",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zorua.png",
      large: "https://img.pokemondb.net/artwork/zorua.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/zorua.gif",
    },
    name: "Zorua",
    type: [types.dark],
    total: 330,
    hp: 40,
    attack: 65,
    defense: 40,
    sp_atk: 80,
    sp_def: 40,
    speed: 65,
  },
  {
    national_number: "571",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zoroark.png",
      large: "https://img.pokemondb.net/artwork/zoroark.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/zoroark.gif",
    },
    name: "Zoroark",
    type: [types.dark],
    total: 510,
    hp: 60,
    attack: 105,
    defense: 60,
    sp_atk: 120,
    sp_def: 60,
    speed: 105,
  },
  {
    national_number: "572",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/minccino.png",
      large: "https://img.pokemondb.net/artwork/minccino.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/minccino.gif",
    },
    name: "Minccino",
    type: [types.normal],
    total: 300,
    hp: 55,
    attack: 50,
    defense: 40,
    sp_atk: 40,
    sp_def: 40,
    speed: 75,
  },
  {
    national_number: "573",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cinccino.png",
      large: "https://img.pokemondb.net/artwork/cinccino.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/cinccino.gif",
    },
    name: "Cinccino",
    type: [types.normal],
    total: 470,
    hp: 75,
    attack: 95,
    defense: 60,
    sp_atk: 65,
    sp_def: 60,
    speed: 115,
  },
  {
    national_number: "574",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gothita.png",
      large: "https://img.pokemondb.net/artwork/gothita.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gothita.gif",
    },
    name: "Gothita",
    type: [types.psychic],
    total: 290,
    hp: 45,
    attack: 30,
    defense: 50,
    sp_atk: 55,
    sp_def: 65,
    speed: 45,
  },
  {
    national_number: "575",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gothorita.png",
      large: "https://img.pokemondb.net/artwork/gothorita.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gothorita.gif",
    },
    name: "Gothorita",
    type: [types.psychic],
    total: 390,
    hp: 60,
    attack: 45,
    defense: 70,
    sp_atk: 75,
    sp_def: 85,
    speed: 55,
  },
  {
    national_number: "576",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gothitelle.png",
      large: "https://img.pokemondb.net/artwork/gothitelle.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gothitelle.gif",
    },
    name: "Gothitelle",
    type: [types.psychic],
    total: 490,
    hp: 70,
    attack: 55,
    defense: 95,
    sp_atk: 95,
    sp_def: 110,
    speed: 65,
  },
  {
    national_number: "577",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/solosis.png",
      large: "https://img.pokemondb.net/artwork/solosis.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/solosis.gif",
    },
    name: "Solosis",
    type: [types.psychic],
    total: 290,
    hp: 45,
    attack: 30,
    defense: 40,
    sp_atk: 105,
    sp_def: 50,
    speed: 20,
  },
  {
    national_number: "578",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/duosion.png",
      large: "https://img.pokemondb.net/artwork/duosion.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/duosion.gif",
    },
    name: "Duosion",
    type: [types.psychic],
    total: 370,
    hp: 65,
    attack: 40,
    defense: 50,
    sp_atk: 125,
    sp_def: 60,
    speed: 30,
  },
  {
    national_number: "579",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/reuniclus.png",
      large: "https://img.pokemondb.net/artwork/reuniclus.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/reuniclus.gif",
    },
    name: "Reuniclus",
    type: [types.psychic],
    total: 490,
    hp: 110,
    attack: 65,
    defense: 75,
    sp_atk: 125,
    sp_def: 85,
    speed: 30,
  },
  {
    national_number: "580",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ducklett.png",
      large: "https://img.pokemondb.net/artwork/ducklett.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/ducklett.gif",
    },
    name: "Ducklett",
    type: [types.water, types.flying],
    total: 305,
    hp: 62,
    attack: 44,
    defense: 50,
    sp_atk: 44,
    sp_def: 50,
    speed: 55,
  },
  {
    national_number: "581",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/swanna.png",
      large: "https://img.pokemondb.net/artwork/swanna.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/swanna.gif",
    },
    name: "Swanna",
    type: [types.water, types.flying],
    total: 473,
    hp: 75,
    attack: 87,
    defense: 63,
    sp_atk: 87,
    sp_def: 63,
    speed: 98,
  },
  {
    national_number: "582",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vanillite.png",
      large: "https://img.pokemondb.net/artwork/vanillite.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/vanillite.gif",
    },
    name: "Vanillite",
    type: [types.ice],
    total: 305,
    hp: 36,
    attack: 50,
    defense: 50,
    sp_atk: 65,
    sp_def: 60,
    speed: 44,
  },
  {
    national_number: "583",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vanillish.png",
      large: "https://img.pokemondb.net/artwork/vanillish.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/vanillish.gif",
    },
    name: "Vanillish",
    type: [types.ice],
    total: 395,
    hp: 51,
    attack: 65,
    defense: 65,
    sp_atk: 80,
    sp_def: 75,
    speed: 59,
  },
  {
    national_number: "584",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vanilluxe.png",
      large: "https://img.pokemondb.net/artwork/vanilluxe.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/vanilluxe.gif",
    },
    name: "Vanilluxe",
    type: [types.ice],
    total: 535,
    hp: 71,
    attack: 95,
    defense: 85,
    sp_atk: 110,
    sp_def: 95,
    speed: 79,
  },
  {
    national_number: "585",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/deerling.png",
      large: "https://img.pokemondb.net/artwork/deerling.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/deerling.gif",
    },
    name: "Deerling",
    type: [types.normal, types.grass],
    total: 335,
    hp: 60,
    attack: 60,
    defense: 50,
    sp_atk: 40,
    sp_def: 50,
    speed: 75,
  },
  {
    national_number: "586",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sawsbuck.png",
      large: "https://img.pokemondb.net/artwork/sawsbuck.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/sawsbuck.gif",
    },
    name: "Sawsbuck",
    type: [types.normal, types.grass],
    total: 475,
    hp: 80,
    attack: 100,
    defense: 70,
    sp_atk: 60,
    sp_def: 70,
    speed: 95,
  },
  {
    national_number: "587",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/emolga.png",
      large: "https://img.pokemondb.net/artwork/emolga.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/emolga.gif",
    },
    name: "Emolga",
    type: [types.electric, types.flying],
    total: 428,
    hp: 55,
    attack: 75,
    defense: 60,
    sp_atk: 75,
    sp_def: 60,
    speed: 103,
  },
  {
    national_number: "588",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/karrablast.png",
      large: "https://img.pokemondb.net/artwork/karrablast.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/karrablast.gif",
    },
    name: "Karrablast",
    type: [types.bug],
    total: 315,
    hp: 50,
    attack: 75,
    defense: 45,
    sp_atk: 40,
    sp_def: 45,
    speed: 60,
  },
  {
    national_number: "589",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/escavalier.png",
      large: "https://img.pokemondb.net/artwork/escavalier.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/escavalier.gif",
    },
    name: "Escavalier",
    type: [types.bug, types.steel],
    total: 495,
    hp: 70,
    attack: 135,
    defense: 105,
    sp_atk: 60,
    sp_def: 105,
    speed: 20,
  },
  {
    national_number: "590",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/foongus.png",
      large: "https://img.pokemondb.net/artwork/foongus.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/foongus.gif",
    },
    name: "Foongus",
    type: [types.grass, types.poison],
    total: 294,
    hp: 69,
    attack: 55,
    defense: 45,
    sp_atk: 55,
    sp_def: 55,
    speed: 15,
  },
  {
    national_number: "591",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/amoonguss.png",
      large: "https://img.pokemondb.net/artwork/amoonguss.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/amoonguss.gif",
    },
    name: "Amoonguss",
    type: [types.grass, types.poison],
    total: 464,
    hp: 114,
    attack: 85,
    defense: 70,
    sp_atk: 85,
    sp_def: 80,
    speed: 30,
  },
  {
    national_number: "592",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/frillish.png",
      large: "https://img.pokemondb.net/artwork/frillish.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/frillish.gif",
    },
    name: "Frillish",
    type: [types.water, types.ghost],
    total: 335,
    hp: 55,
    attack: 40,
    defense: 50,
    sp_atk: 65,
    sp_def: 85,
    speed: 40,
  },
  {
    national_number: "593",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/jellicent.png",
      large: "https://img.pokemondb.net/artwork/jellicent.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/jellicent.gif",
    },
    name: "Jellicent",
    type: [types.water, types.ghost],
    total: 480,
    hp: 100,
    attack: 60,
    defense: 70,
    sp_atk: 85,
    sp_def: 105,
    speed: 60,
  },
  {
    national_number: "594",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/alomomola.png",
      large: "https://img.pokemondb.net/artwork/alomomola.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/alomomola.gif",
    },
    name: "Alomomola",
    type: [types.water],
    total: 470,
    hp: 165,
    attack: 75,
    defense: 80,
    sp_atk: 40,
    sp_def: 45,
    speed: 65,
  },
  {
    national_number: "595",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/joltik.png",
      large: "https://img.pokemondb.net/artwork/joltik.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/joltik.gif",
    },
    name: "Joltik",
    type: [types.bug, types.electric],
    total: 319,
    hp: 50,
    attack: 47,
    defense: 50,
    sp_atk: 57,
    sp_def: 50,
    speed: 65,
  },
  {
    national_number: "596",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/galvantula.png",
      large: "https://img.pokemondb.net/artwork/galvantula.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/galvantula.gif",
    },
    name: "Galvantula",
    type: [types.bug, types.electric],
    total: 472,
    hp: 70,
    attack: 77,
    defense: 60,
    sp_atk: 97,
    sp_def: 60,
    speed: 108,
  },
  {
    national_number: "597",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ferroseed.png",
      large: "https://img.pokemondb.net/artwork/ferroseed.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/ferroseed.gif",
    },
    name: "Ferroseed",
    type: [types.grass, types.steel],
    total: 305,
    hp: 44,
    attack: 50,
    defense: 91,
    sp_atk: 24,
    sp_def: 86,
    speed: 10,
  },
  {
    national_number: "598",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ferrothorn.png",
      large: "https://img.pokemondb.net/artwork/ferrothorn.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/ferrothorn.gif",
    },
    name: "Ferrothorn",
    type: [types.grass, types.steel],
    total: 489,
    hp: 74,
    attack: 94,
    defense: 131,
    sp_atk: 54,
    sp_def: 116,
    speed: 20,
  },
  {
    national_number: "599",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/klink.png",
      large: "https://img.pokemondb.net/artwork/klink.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/klink.gif",
    },
    name: "Klink",
    type: [types.steel],
    total: 300,
    hp: 40,
    attack: 55,
    defense: 70,
    sp_atk: 45,
    sp_def: 60,
    speed: 30,
  },
  {
    national_number: "600",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/klang.png",
      large: "https://img.pokemondb.net/artwork/klang.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/klang.gif",
    },
    name: "Klang",
    type: [types.steel],
    total: 440,
    hp: 60,
    attack: 80,
    defense: 95,
    sp_atk: 70,
    sp_def: 85,
    speed: 50,
  },
  {
    national_number: "601",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/klinklang.png",
      large: "https://img.pokemondb.net/artwork/klinklang.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/klinklang.gif",
    },
    name: "Klinklang",
    type: [types.steel],
    total: 520,
    hp: 60,
    attack: 100,
    defense: 115,
    sp_atk: 70,
    sp_def: 85,
    speed: 90,
  },
  {
    national_number: "602",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tynamo.png",
      large: "https://img.pokemondb.net/artwork/tynamo.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/tynamo.gif",
    },
    name: "Tynamo",
    type: [types.electric],
    total: 275,
    hp: 35,
    attack: 55,
    defense: 40,
    sp_atk: 45,
    sp_def: 40,
    speed: 60,
  },
  {
    national_number: "603",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/eelektrik.png",
      large: "https://img.pokemondb.net/artwork/eelektrik.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/eelektrik.gif",
    },
    name: "Eelektrik",
    type: [types.electric],
    total: 405,
    hp: 65,
    attack: 85,
    defense: 70,
    sp_atk: 75,
    sp_def: 70,
    speed: 40,
  },
  {
    national_number: "604",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/eelektross.png",
      large: "https://img.pokemondb.net/artwork/eelektross.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/eelektross.gif",
    },
    name: "Eelektross",
    type: [types.electric],
    total: 515,
    hp: 85,
    attack: 115,
    defense: 80,
    sp_atk: 105,
    sp_def: 80,
    speed: 50,
  },
  {
    national_number: "605",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/elgyem.png",
      large: "https://img.pokemondb.net/artwork/elgyem.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/elgyem.gif",
    },
    name: "Elgyem",
    type: [types.psychic],
    total: 335,
    hp: 55,
    attack: 55,
    defense: 55,
    sp_atk: 85,
    sp_def: 55,
    speed: 30,
  },
  {
    national_number: "606",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/beheeyem.png",
      large: "https://img.pokemondb.net/artwork/beheeyem.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/beheeyem.gif",
    },
    name: "Beheeyem",
    type: [types.psychic],
    total: 485,
    hp: 75,
    attack: 75,
    defense: 75,
    sp_atk: 125,
    sp_def: 95,
    speed: 40,
  },
  {
    national_number: "607",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/litwick.png",
      large: "https://img.pokemondb.net/artwork/litwick.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/litwick.gif",
    },
    name: "Litwick",
    type: [types.ghost, types.fire],
    total: 275,
    hp: 50,
    attack: 30,
    defense: 55,
    sp_atk: 65,
    sp_def: 55,
    speed: 20,
  },
  {
    national_number: "608",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lampent.png",
      large: "https://img.pokemondb.net/artwork/lampent.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/lampent.gif",
    },
    name: "Lampent",
    type: [types.ghost, types.fire],
    total: 370,
    hp: 60,
    attack: 40,
    defense: 60,
    sp_atk: 95,
    sp_def: 60,
    speed: 55,
  },
  {
    national_number: "609",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/chandelure.png",
      large: "https://img.pokemondb.net/artwork/chandelure.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/chandelure.gif",
    },
    name: "Chandelure",
    type: [types.ghost, types.fire],
    total: 520,
    hp: 60,
    attack: 55,
    defense: 90,
    sp_atk: 145,
    sp_def: 90,
    speed: 80,
  },
  {
    national_number: "610",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/axew.png",
      large: "https://img.pokemondb.net/artwork/axew.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/axew.gif",
    },
    name: "Axew",
    type: [types.dragon],
    total: 320,
    hp: 46,
    attack: 87,
    defense: 60,
    sp_atk: 30,
    sp_def: 40,
    speed: 57,
  },
  {
    national_number: "611",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/fraxure.png",
      large: "https://img.pokemondb.net/artwork/fraxure.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/fraxure.gif",
    },
    name: "Fraxure",
    type: [types.dragon],
    total: 410,
    hp: 66,
    attack: 117,
    defense: 70,
    sp_atk: 40,
    sp_def: 50,
    speed: 67,
  },
  {
    national_number: "612",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/haxorus.png",
      large: "https://img.pokemondb.net/artwork/haxorus.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/haxorus.gif",
    },
    name: "Haxorus",
    type: [types.dragon],
    total: 540,
    hp: 76,
    attack: 147,
    defense: 90,
    sp_atk: 60,
    sp_def: 70,
    speed: 97,
  },
  {
    national_number: "613",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cubchoo.png",
      large: "https://img.pokemondb.net/artwork/cubchoo.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/cubchoo.gif",
    },
    name: "Cubchoo",
    type: [types.ice],
    total: 305,
    hp: 55,
    attack: 70,
    defense: 40,
    sp_atk: 60,
    sp_def: 40,
    speed: 40,
  },
  {
    national_number: "614",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/beartic.png",
      large: "https://img.pokemondb.net/artwork/beartic.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/beartic.gif",
    },
    name: "Beartic",
    type: [types.ice],
    total: 505,
    hp: 95,
    attack: 130,
    defense: 80,
    sp_atk: 70,
    sp_def: 80,
    speed: 50,
  },
  {
    national_number: "615",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cryogonal.png",
      large: "https://img.pokemondb.net/artwork/cryogonal.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/cryogonal.gif",
    },
    name: "Cryogonal",
    type: [types.ice],
    total: 515,
    hp: 80,
    attack: 50,
    defense: 50,
    sp_atk: 95,
    sp_def: 135,
    speed: 105,
  },
  {
    national_number: "616",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shelmet.png",
      large: "https://img.pokemondb.net/artwork/shelmet.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/shelmet.gif",
    },
    name: "Shelmet",
    type: [types.bug],
    total: 305,
    hp: 50,
    attack: 40,
    defense: 85,
    sp_atk: 40,
    sp_def: 65,
    speed: 25,
  },
  {
    national_number: "617",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/accelgor.png",
      large: "https://img.pokemondb.net/artwork/accelgor.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/accelgor.gif",
    },
    name: "Accelgor",
    type: [types.bug],
    total: 495,
    hp: 80,
    attack: 70,
    defense: 40,
    sp_atk: 100,
    sp_def: 60,
    speed: 145,
  },
  {
    national_number: "618",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/stunfisk.png",
      large: "https://img.pokemondb.net/artwork/stunfisk.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/stunfisk.gif",
    },
    name: "Stunfisk",
    type: [types.ground, types.electric],
    total: 471,
    hp: 109,
    attack: 66,
    defense: 84,
    sp_atk: 81,
    sp_def: 99,
    speed: 32,
  },
  {
    national_number: "619",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mienfoo.png",
      large: "https://img.pokemondb.net/artwork/mienfoo.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mienfoo.gif",
    },
    name: "Mienfoo",
    type: [types.fighting],
    total: 350,
    hp: 45,
    attack: 85,
    defense: 50,
    sp_atk: 55,
    sp_def: 50,
    speed: 65,
  },
  {
    national_number: "620",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mienshao.png",
      large: "https://img.pokemondb.net/artwork/mienshao.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mienshao.gif",
    },
    name: "Mienshao",
    type: [types.fighting],
    total: 510,
    hp: 65,
    attack: 125,
    defense: 60,
    sp_atk: 95,
    sp_def: 60,
    speed: 105,
  },
  {
    national_number: "621",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/druddigon.png",
      large: "https://img.pokemondb.net/artwork/druddigon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/druddigon.gif",
    },
    name: "Druddigon",
    type: [types.dragon],
    total: 485,
    hp: 77,
    attack: 120,
    defense: 90,
    sp_atk: 60,
    sp_def: 90,
    speed: 48,
  },
  {
    national_number: "622",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/golett.png",
      large: "https://img.pokemondb.net/artwork/golett.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/golett.gif",
    },
    name: "Golett",
    type: [types.ground, types.ghost],
    total: 303,
    hp: 59,
    attack: 74,
    defense: 50,
    sp_atk: 35,
    sp_def: 50,
    speed: 35,
  },
  {
    national_number: "623",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/golurk.png",
      large: "https://img.pokemondb.net/artwork/golurk.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/golurk.gif",
    },
    name: "Golurk",
    type: [types.ground, types.ghost],
    total: 483,
    hp: 89,
    attack: 124,
    defense: 80,
    sp_atk: 55,
    sp_def: 80,
    speed: 55,
  },
  {
    national_number: "624",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pawniard.png",
      large: "https://img.pokemondb.net/artwork/pawniard.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pawniard.gif",
    },
    name: "Pawniard",
    type: [types.dark, types.steel],
    total: 340,
    hp: 45,
    attack: 85,
    defense: 70,
    sp_atk: 40,
    sp_def: 40,
    speed: 60,
  },
  {
    national_number: "625",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bisharp.png",
      large: "https://img.pokemondb.net/artwork/bisharp.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/bisharp.gif",
    },
    name: "Bisharp",
    type: [types.dark, types.steel],
    total: 490,
    hp: 65,
    attack: 125,
    defense: 100,
    sp_atk: 60,
    sp_def: 70,
    speed: 70,
  },
  {
    national_number: "626",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bouffalant.png",
      large: "https://img.pokemondb.net/artwork/bouffalant.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/bouffalant.gif",
    },
    name: "Bouffalant",
    type: [types.normal],
    total: 490,
    hp: 95,
    attack: 110,
    defense: 95,
    sp_atk: 40,
    sp_def: 95,
    speed: 55,
  },
  {
    national_number: "627",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rufflet.png",
      large: "https://img.pokemondb.net/artwork/rufflet.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/rufflet.gif",
    },
    name: "Rufflet",
    type: [types.normal, types.flying],
    total: 350,
    hp: 70,
    attack: 83,
    defense: 50,
    sp_atk: 37,
    sp_def: 50,
    speed: 60,
  },
  {
    national_number: "628",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/braviary.png",
      large: "https://img.pokemondb.net/artwork/braviary.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/braviary.gif",
    },
    name: "Braviary",
    type: [types.normal, types.flying],
    total: 510,
    hp: 100,
    attack: 123,
    defense: 75,
    sp_atk: 57,
    sp_def: 75,
    speed: 80,
  },
  {
    national_number: "629",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vullaby.png",
      large: "https://img.pokemondb.net/artwork/vullaby.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/vullaby.gif",
    },
    name: "Vullaby",
    type: [types.dark, types.flying],
    total: 370,
    hp: 70,
    attack: 55,
    defense: 75,
    sp_atk: 45,
    sp_def: 65,
    speed: 60,
  },
  {
    national_number: "630",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mandibuzz.png",
      large: "https://img.pokemondb.net/artwork/mandibuzz.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mandibuzz.gif",
    },
    name: "Mandibuzz",
    type: [types.dark, types.flying],
    total: 510,
    hp: 110,
    attack: 65,
    defense: 105,
    sp_atk: 55,
    sp_def: 95,
    speed: 80,
  },
  {
    national_number: "631",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/heatmor.png",
      large: "https://img.pokemondb.net/artwork/heatmor.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/heatmor.gif",
    },
    name: "Heatmor",
    type: [types.fire],
    total: 484,
    hp: 85,
    attack: 97,
    defense: 66,
    sp_atk: 105,
    sp_def: 66,
    speed: 65,
  },
  {
    national_number: "632",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/durant.png",
      large: "https://img.pokemondb.net/artwork/durant.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/durant.gif",
    },
    name: "Durant",
    type: [types.bug, types.steel],
    total: 484,
    hp: 58,
    attack: 109,
    defense: 112,
    sp_atk: 48,
    sp_def: 48,
    speed: 109,
  },
  {
    national_number: "633",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/deino.png",
      large: "https://img.pokemondb.net/artwork/deino.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/deino.gif",
    },
    name: "Deino",
    type: [types.dark, types.dragon],
    total: 300,
    hp: 52,
    attack: 65,
    defense: 50,
    sp_atk: 45,
    sp_def: 50,
    speed: 38,
  },
  {
    national_number: "634",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zweilous.png",
      large: "https://img.pokemondb.net/artwork/zweilous.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/zweilous.gif",
    },
    name: "Zweilous",
    type: [types.dark, types.dragon],
    total: 420,
    hp: 72,
    attack: 85,
    defense: 70,
    sp_atk: 65,
    sp_def: 70,
    speed: 58,
  },
  {
    national_number: "635",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hydreigon.png",
      large: "https://img.pokemondb.net/artwork/hydreigon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/hydreigon.gif",
    },
    name: "Hydreigon",
    type: [types.dark, types.dragon],
    total: 600,
    hp: 92,
    attack: 105,
    defense: 90,
    sp_atk: 125,
    sp_def: 90,
    speed: 98,
  },
  {
    national_number: "636",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/larvesta.png",
      large: "https://img.pokemondb.net/artwork/larvesta.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/larvesta.gif",
    },
    name: "Larvesta",
    type: [types.bug, types.fire],
    total: 360,
    hp: 55,
    attack: 85,
    defense: 55,
    sp_atk: 50,
    sp_def: 55,
    speed: 60,
  },
  {
    national_number: "637",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/volcarona.png",
      large: "https://img.pokemondb.net/artwork/volcarona.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/volcarona.gif",
    },
    name: "Volcarona",
    type: [types.bug, types.fire],
    total: 550,
    hp: 85,
    attack: 60,
    defense: 65,
    sp_atk: 135,
    sp_def: 105,
    speed: 100,
  },
  {
    national_number: "638",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cobalion.png",
      large: "https://img.pokemondb.net/artwork/cobalion.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/cobalion.gif",
    },
    name: "Cobalion",
    type: [types.steel, types.fighting],
    total: 580,
    hp: 91,
    attack: 90,
    defense: 129,
    sp_atk: 90,
    sp_def: 72,
    speed: 108,
  },
  {
    national_number: "639",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/terrakion.png",
      large: "https://img.pokemondb.net/artwork/terrakion.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/terrakion.gif",
    },
    name: "Terrakion",
    type: [types.rock, types.fighting],
    total: 580,
    hp: 91,
    attack: 129,
    defense: 90,
    sp_atk: 72,
    sp_def: 90,
    speed: 108,
  },
  {
    national_number: "640",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/virizion.png",
      large: "https://img.pokemondb.net/artwork/virizion.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/virizion.gif",
    },
    name: "Virizion",
    type: [types.grass, types.fighting],
    total: 580,
    hp: 91,
    attack: 90,
    defense: 72,
    sp_atk: 90,
    sp_def: 129,
    speed: 108,
  },
  {
    national_number: "641",
    evolution: { name: "Incarnate Forme" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tornadus.png",
      large: "https://img.pokemondb.net/artwork/tornadus.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/tornadus.gif",
    },
    name: "Tornadus",
    type: [types.flying],
    total: 580,
    hp: 79,
    attack: 115,
    defense: 70,
    sp_atk: 125,
    sp_def: 80,
    speed: 111,
  },
  {
    national_number: "641",
    evolution: { name: "Therian Forme" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tornadus.png",
      large: "https://img.pokemondb.net/artwork/tornadus.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/tornadus.gif",
    },
    name: "Tornadus",
    type: [types.flying],
    total: 580,
    hp: 79,
    attack: 100,
    defense: 80,
    sp_atk: 110,
    sp_def: 90,
    speed: 121,
  },
  {
    national_number: "642",
    evolution: { name: "Incarnate Forme" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/thundurus.png",
      large: "https://img.pokemondb.net/artwork/thundurus.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/thundurus.gif",
    },
    name: "Thundurus",
    type: [types.electric, types.flying],
    total: 580,
    hp: 79,
    attack: 115,
    defense: 70,
    sp_atk: 125,
    sp_def: 80,
    speed: 111,
  },
  {
    national_number: "642",
    evolution: { name: "Therian Forme" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/thundurus.png",
      large: "https://img.pokemondb.net/artwork/thundurus.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/thundurus.gif",
    },
    name: "Thundurus",
    type: [types.electric, types.flying],
    total: 580,
    hp: 79,
    attack: 105,
    defense: 70,
    sp_atk: 145,
    sp_def: 80,
    speed: 101,
  },
  {
    national_number: "643",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/reshiram.png",
      large: "https://img.pokemondb.net/artwork/reshiram.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/reshiram.gif",
    },
    name: "Reshiram",
    type: [types.dragon, types.fire],
    total: 680,
    hp: 100,
    attack: 120,
    defense: 100,
    sp_atk: 150,
    sp_def: 120,
    speed: 90,
  },
  {
    national_number: "644",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zekrom.png",
      large: "https://img.pokemondb.net/artwork/zekrom.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/zekrom.gif",
    },
    name: "Zekrom",
    type: [types.dragon, types.electric],
    total: 680,
    hp: 100,
    attack: 150,
    defense: 120,
    sp_atk: 120,
    sp_def: 100,
    speed: 90,
  },
  {
    national_number: "645",
    evolution: { name: "Therian Forme" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/landorus.png",
      large: "https://img.pokemondb.net/artwork/landorus.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/landorus.gif",
    },
    name: "Landorus",
    type: [types.ground, types.flying],
    total: 600,
    hp: 89,
    attack: 145,
    defense: 90,
    sp_atk: 105,
    sp_def: 80,
    speed: 91,
  },
  {
    national_number: "645",
    evolution: { name: "Incarnate Forme" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/landorus.png",
      large: "https://img.pokemondb.net/artwork/landorus.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/landorus.gif",
    },
    name: "Landorus",
    type: [types.ground, types.flying],
    total: 600,
    hp: 89,
    attack: 125,
    defense: 90,
    sp_atk: 115,
    sp_def: 80,
    speed: 101,
  },
  {
    national_number: "646",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kyurem.png",
      large: "https://img.pokemondb.net/artwork/kyurem.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/kyurem.gif",
    },
    name: "Kyurem",
    type: [types.dragon, types.ice],
    total: 660,
    hp: 125,
    attack: 130,
    defense: 90,
    sp_atk: 130,
    sp_def: 90,
    speed: 95,
  },
  {
    national_number: "646",
    evolution: { name: "White Kyurem" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kyurem.png",
      large: "https://img.pokemondb.net/artwork/kyurem.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/kyurem.gif",
    },
    name: "Kyurem",
    type: [types.dragon, types.ice],
    total: 700,
    hp: 125,
    attack: 120,
    defense: 90,
    sp_atk: 170,
    sp_def: 100,
    speed: 95,
  },
  {
    national_number: "646",
    evolution: { name: "Black Kyurem" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kyurem.png",
      large: "https://img.pokemondb.net/artwork/kyurem.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/kyurem.gif",
    },
    name: "Kyurem",
    type: [types.dragon, types.ice],
    total: 700,
    hp: 125,
    attack: 170,
    defense: 100,
    sp_atk: 120,
    sp_def: 90,
    speed: 95,
  },
  {
    national_number: "647",
    evolution: { name: "Resolute Forme" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/keldeo.png",
      large: "https://img.pokemondb.net/artwork/keldeo.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/keldeo.gif",
    },
    name: "Keldeo",
    type: [types.water, types.fighting],
    total: 580,
    hp: 91,
    attack: 72,
    defense: 90,
    sp_atk: 129,
    sp_def: 90,
    speed: 108,
  },
  {
    national_number: "647",
    evolution: { name: "Ordinary Forme" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/keldeo.png",
      large: "https://img.pokemondb.net/artwork/keldeo.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/keldeo.gif",
    },
    name: "Keldeo",
    type: [types.water, types.fighting],
    total: 580,
    hp: 91,
    attack: 72,
    defense: 90,
    sp_atk: 129,
    sp_def: 90,
    speed: 108,
  },
  {
    national_number: "648",
    evolution: { name: "Pirouette Forme" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/meloetta.png",
      large: "https://img.pokemondb.net/artwork/meloetta.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/meloetta.gif",
    },
    name: "Meloetta",
    type: [types.normal, types.fighting],
    total: 600,
    hp: 100,
    attack: 128,
    defense: 90,
    sp_atk: 77,
    sp_def: 77,
    speed: 128,
  },
  {
    national_number: "648",
    evolution: { name: "Aria Forme" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/meloetta.png",
      large: "https://img.pokemondb.net/artwork/meloetta.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/meloetta.gif",
    },
    name: "Meloetta",
    type: [types.normal, types.psychic],
    total: 600,
    hp: 100,
    attack: 77,
    defense: 77,
    sp_atk: 128,
    sp_def: 128,
    speed: 90,
  },
  {
    national_number: "649",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/genesect.png",
      large: "https://img.pokemondb.net/artwork/genesect.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/genesect.gif",
    },
    name: "Genesect",
    type: [types.bug, types.steel],
    total: 600,
    hp: 71,
    attack: 120,
    defense: 95,
    sp_atk: 120,
    sp_def: 95,
    speed: 99,
  },
  {
    national_number: "650",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/chespin.png",
      large: "https://img.pokemondb.net/artwork/chespin.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/chespin.gif",
    },
    name: "Chespin",
    type: [types.grass],
    total: 313,
    hp: 56,
    attack: 61,
    defense: 65,
    sp_atk: 48,
    sp_def: 45,
    speed: 38,
  },
  {
    national_number: "651",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/quilladin.png",
      large: "https://img.pokemondb.net/artwork/quilladin.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/quilladin.gif",
    },
    name: "Quilladin",
    type: [types.grass],
    total: 405,
    hp: 61,
    attack: 78,
    defense: 95,
    sp_atk: 56,
    sp_def: 58,
    speed: 57,
  },
  {
    national_number: "652",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/chesnaught.png",
      large: "https://img.pokemondb.net/artwork/chesnaught.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/chesnaught.gif",
    },
    name: "Chesnaught",
    type: [types.grass, types.fighting],
    total: 530,
    hp: 88,
    attack: 107,
    defense: 122,
    sp_atk: 74,
    sp_def: 75,
    speed: 64,
  },
  {
    national_number: "653",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/fennekin.png",
      large: "https://img.pokemondb.net/artwork/fennekin.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/fennekin.gif",
    },
    name: "Fennekin",
    type: [types.fire],
    total: 307,
    hp: 40,
    attack: 45,
    defense: 40,
    sp_atk: 62,
    sp_def: 60,
    speed: 60,
  },
  {
    national_number: "654",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/braixen.png",
      large: "https://img.pokemondb.net/artwork/braixen.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/braixen.gif",
    },
    name: "Braixen",
    type: [types.fire],
    total: 409,
    hp: 59,
    attack: 59,
    defense: 58,
    sp_atk: 90,
    sp_def: 70,
    speed: 73,
  },
  {
    national_number: "655",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/delphox.png",
      large: "https://img.pokemondb.net/artwork/delphox.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/delphox.gif",
    },
    name: "Delphox",
    type: [types.fire, types.psychic],
    total: 534,
    hp: 75,
    attack: 69,
    defense: 72,
    sp_atk: 114,
    sp_def: 100,
    speed: 104,
  },
  {
    national_number: "656",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/froakie.png",
      large: "https://img.pokemondb.net/artwork/froakie.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/froakie.gif",
    },
    name: "Froakie",
    type: [types.water],
    total: 314,
    hp: 41,
    attack: 56,
    defense: 40,
    sp_atk: 62,
    sp_def: 44,
    speed: 71,
  },
  {
    national_number: "657",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/frogadier.png",
      large: "https://img.pokemondb.net/artwork/frogadier.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/frogadier.gif",
    },
    name: "Frogadier",
    type: [types.water],
    total: 405,
    hp: 54,
    attack: 63,
    defense: 52,
    sp_atk: 83,
    sp_def: 56,
    speed: 97,
  },
  {
    national_number: "658",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/greninja.png",
      large: "https://img.pokemondb.net/artwork/greninja.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/greninja.gif",
    },
    name: "Greninja",
    type: [types.water, types.dark],
    total: 530,
    hp: 72,
    attack: 95,
    defense: 67,
    sp_atk: 103,
    sp_def: 71,
    speed: 122,
  },
  {
    national_number: "658",
    evolution: { name: "Ash-Greninja" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/greninja.png",
      large: "https://img.pokemondb.net/artwork/greninja.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/greninja.gif",
    },
    name: "Greninja",
    type: [types.water, types.dark],
    total: 640,
    hp: 72,
    attack: 145,
    defense: 67,
    sp_atk: 153,
    sp_def: 71,
    speed: 132,
  },
  {
    national_number: "659",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bunnelby.png",
      large: "https://img.pokemondb.net/artwork/bunnelby.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/bunnelby.gif",
    },
    name: "Bunnelby",
    type: [types.normal],
    total: 237,
    hp: 38,
    attack: 36,
    defense: 38,
    sp_atk: 32,
    sp_def: 36,
    speed: 57,
  },
  {
    national_number: "660",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/diggersby.png",
      large: "https://img.pokemondb.net/artwork/diggersby.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/diggersby.gif",
    },
    name: "Diggersby",
    type: [types.normal, types.ground],
    total: 423,
    hp: 85,
    attack: 56,
    defense: 77,
    sp_atk: 50,
    sp_def: 77,
    speed: 78,
  },
  {
    national_number: "661",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/fletchling.png",
      large: "https://img.pokemondb.net/artwork/fletchling.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/fletchling.gif",
    },
    name: "Fletchling",
    type: [types.normal, types.flying],
    total: 278,
    hp: 45,
    attack: 50,
    defense: 43,
    sp_atk: 40,
    sp_def: 38,
    speed: 62,
  },
  {
    national_number: "662",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/fletchinder.png",
      large: "https://img.pokemondb.net/artwork/fletchinder.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/fletchinder.gif",
    },
    name: "Fletchinder",
    type: [types.fire, types.flying],
    total: 382,
    hp: 62,
    attack: 73,
    defense: 55,
    sp_atk: 56,
    sp_def: 52,
    speed: 84,
  },
  {
    national_number: "663",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/talonflame.png",
      large: "https://img.pokemondb.net/artwork/talonflame.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/talonflame.gif",
    },
    name: "Talonflame",
    type: [types.fire, types.flying],
    total: 499,
    hp: 78,
    attack: 81,
    defense: 71,
    sp_atk: 74,
    sp_def: 69,
    speed: 126,
  },
  {
    national_number: "664",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/scatterbug.png",
      large: "https://img.pokemondb.net/artwork/scatterbug.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/scatterbug.gif",
    },
    name: "Scatterbug",
    type: [types.bug],
    total: 200,
    hp: 38,
    attack: 35,
    defense: 40,
    sp_atk: 27,
    sp_def: 25,
    speed: 35,
  },
  {
    national_number: "665",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/spewpa.png",
      large: "https://img.pokemondb.net/artwork/spewpa.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/spewpa.gif",
    },
    name: "Spewpa",
    type: [types.bug],
    total: 213,
    hp: 45,
    attack: 22,
    defense: 60,
    sp_atk: 27,
    sp_def: 30,
    speed: 29,
  },
  {
    national_number: "666",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vivillon.png",
      large: "https://img.pokemondb.net/artwork/vivillon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/vivillon.gif",
    },
    name: "Vivillon",
    type: [types.bug, types.flying],
    total: 411,
    hp: 80,
    attack: 52,
    defense: 50,
    sp_atk: 90,
    sp_def: 50,
    speed: 89,
  },
  {
    national_number: "667",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/litleo.png",
      large: "https://img.pokemondb.net/artwork/litleo.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/litleo.gif",
    },
    name: "Litleo",
    type: [types.fire, types.normal],
    total: 369,
    hp: 62,
    attack: 50,
    defense: 58,
    sp_atk: 73,
    sp_def: 54,
    speed: 72,
  },
  {
    national_number: "668",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pyroar.png",
      large: "https://img.pokemondb.net/artwork/pyroar.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pyroar.gif",
    },
    name: "Pyroar",
    type: [types.fire, types.normal],
    total: 507,
    hp: 86,
    attack: 68,
    defense: 72,
    sp_atk: 109,
    sp_def: 66,
    speed: 106,
  },
  {
    national_number: "669",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/flabébé.png",
      large: "https://img.pokemondb.net/artwork/flabébé.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/flabébé.gif",
    },
    name: "Flabébé",
    type: [types.fairy],
    total: 303,
    hp: 44,
    attack: 38,
    defense: 39,
    sp_atk: 61,
    sp_def: 79,
    speed: 42,
  },
  {
    national_number: "670",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/floette.png",
      large: "https://img.pokemondb.net/artwork/floette.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/floette.gif",
    },
    name: "Floette",
    type: [types.fairy],
    total: 371,
    hp: 54,
    attack: 45,
    defense: 47,
    sp_atk: 75,
    sp_def: 98,
    speed: 52,
  },
  {
    national_number: "671",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/florges.png",
      large: "https://img.pokemondb.net/artwork/florges.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/florges.gif",
    },
    name: "Florges",
    type: [types.fairy],
    total: 552,
    hp: 78,
    attack: 65,
    defense: 68,
    sp_atk: 112,
    sp_def: 154,
    speed: 75,
  },
  {
    national_number: "672",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/skiddo.png",
      large: "https://img.pokemondb.net/artwork/skiddo.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/skiddo.gif",
    },
    name: "Skiddo",
    type: [types.grass],
    total: 350,
    hp: 66,
    attack: 65,
    defense: 48,
    sp_atk: 62,
    sp_def: 57,
    speed: 52,
  },
  {
    national_number: "673",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gogoat.png",
      large: "https://img.pokemondb.net/artwork/gogoat.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gogoat.gif",
    },
    name: "Gogoat",
    type: [types.grass],
    total: 531,
    hp: 123,
    attack: 100,
    defense: 62,
    sp_atk: 97,
    sp_def: 81,
    speed: 68,
  },
  {
    national_number: "674",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pancham.png",
      large: "https://img.pokemondb.net/artwork/pancham.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pancham.gif",
    },
    name: "Pancham",
    type: [types.fighting],
    total: 348,
    hp: 67,
    attack: 82,
    defense: 62,
    sp_atk: 46,
    sp_def: 48,
    speed: 43,
  },
  {
    national_number: "675",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pangoro.png",
      large: "https://img.pokemondb.net/artwork/pangoro.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pangoro.gif",
    },
    name: "Pangoro",
    type: [types.fighting, types.dark],
    total: 495,
    hp: 95,
    attack: 124,
    defense: 78,
    sp_atk: 69,
    sp_def: 71,
    speed: 58,
  },
  {
    national_number: "676",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/furfrou.png",
      large: "https://img.pokemondb.net/artwork/furfrou.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/furfrou.gif",
    },
    name: "Furfrou",
    type: [types.normal],
    total: 472,
    hp: 75,
    attack: 80,
    defense: 60,
    sp_atk: 65,
    sp_def: 90,
    speed: 102,
  },
  {
    national_number: "677",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/espurr.png",
      large: "https://img.pokemondb.net/artwork/espurr.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/espurr.gif",
    },
    name: "Espurr",
    type: [types.psychic],
    total: 355,
    hp: 62,
    attack: 48,
    defense: 54,
    sp_atk: 63,
    sp_def: 60,
    speed: 68,
  },
  {
    national_number: "678",
    evolution: { name: "Male" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/meowstic.png",
      large: "https://img.pokemondb.net/artwork/meowstic.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/meowstic.gif",
    },
    name: "Meowstic",
    type: [types.psychic],
    total: 466,
    hp: 74,
    attack: 48,
    defense: 76,
    sp_atk: 83,
    sp_def: 81,
    speed: 104,
  },
  {
    national_number: "678",
    evolution: { name: "Female" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/meowstic.png",
      large: "https://img.pokemondb.net/artwork/meowstic.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/meowstic.gif",
    },
    name: "Meowstic",
    type: [types.psychic],
    total: 466,
    hp: 74,
    attack: 48,
    defense: 76,
    sp_atk: 83,
    sp_def: 81,
    speed: 104,
  },
  {
    national_number: "679",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/honedge.png",
      large: "https://img.pokemondb.net/artwork/honedge.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/honedge.gif",
    },
    name: "Honedge",
    type: [types.steel, types.ghost],
    total: 325,
    hp: 45,
    attack: 80,
    defense: 100,
    sp_atk: 35,
    sp_def: 37,
    speed: 28,
  },
  {
    national_number: "680",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/doublade.png",
      large: "https://img.pokemondb.net/artwork/doublade.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/doublade.gif",
    },
    name: "Doublade",
    type: [types.steel, types.ghost],
    total: 448,
    hp: 59,
    attack: 110,
    defense: 150,
    sp_atk: 45,
    sp_def: 49,
    speed: 35,
  },
  {
    national_number: "681",
    evolution: { name: "Blade Forme" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/aegislash.png",
      large: "https://img.pokemondb.net/artwork/aegislash.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/aegislash.gif",
    },
    name: "Aegislash",
    type: [types.steel, types.ghost],
    total: 520,
    hp: 60,
    attack: 150,
    defense: 50,
    sp_atk: 150,
    sp_def: 50,
    speed: 60,
  },
  {
    national_number: "681",
    evolution: { name: "Shield Forme" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/aegislash.png",
      large: "https://img.pokemondb.net/artwork/aegislash.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/aegislash.gif",
    },
    name: "Aegislash",
    type: [types.steel, types.ghost],
    total: 520,
    hp: 60,
    attack: 50,
    defense: 150,
    sp_atk: 50,
    sp_def: 150,
    speed: 60,
  },
  {
    national_number: "682",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/spritzee.png",
      large: "https://img.pokemondb.net/artwork/spritzee.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/spritzee.gif",
    },
    name: "Spritzee",
    type: [types.fairy],
    total: 341,
    hp: 78,
    attack: 52,
    defense: 60,
    sp_atk: 63,
    sp_def: 65,
    speed: 23,
  },
  {
    national_number: "683",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/aromatisse.png",
      large: "https://img.pokemondb.net/artwork/aromatisse.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/aromatisse.gif",
    },
    name: "Aromatisse",
    type: [types.fairy],
    total: 462,
    hp: 101,
    attack: 72,
    defense: 72,
    sp_atk: 99,
    sp_def: 89,
    speed: 29,
  },
  {
    national_number: "684",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/swirlix.png",
      large: "https://img.pokemondb.net/artwork/swirlix.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/swirlix.gif",
    },
    name: "Swirlix",
    type: [types.fairy],
    total: 341,
    hp: 62,
    attack: 48,
    defense: 66,
    sp_atk: 59,
    sp_def: 57,
    speed: 49,
  },
  {
    national_number: "685",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/slurpuff.png",
      large: "https://img.pokemondb.net/artwork/slurpuff.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/slurpuff.gif",
    },
    name: "Slurpuff",
    type: [types.fairy],
    total: 480,
    hp: 82,
    attack: 80,
    defense: 86,
    sp_atk: 85,
    sp_def: 75,
    speed: 72,
  },
  {
    national_number: "686",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/inkay.png",
      large: "https://img.pokemondb.net/artwork/inkay.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/inkay.gif",
    },
    name: "Inkay",
    type: [types.dark, types.psychic],
    total: 288,
    hp: 53,
    attack: 54,
    defense: 53,
    sp_atk: 37,
    sp_def: 46,
    speed: 45,
  },
  {
    national_number: "687",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/malamar.png",
      large: "https://img.pokemondb.net/artwork/malamar.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/malamar.gif",
    },
    name: "Malamar",
    type: [types.dark, types.psychic],
    total: 482,
    hp: 86,
    attack: 92,
    defense: 88,
    sp_atk: 68,
    sp_def: 75,
    speed: 73,
  },
  {
    national_number: "688",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/binacle.png",
      large: "https://img.pokemondb.net/artwork/binacle.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/binacle.gif",
    },
    name: "Binacle",
    type: [types.rock, types.water],
    total: 306,
    hp: 42,
    attack: 52,
    defense: 67,
    sp_atk: 39,
    sp_def: 56,
    speed: 50,
  },
  {
    national_number: "689",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/barbaracle.png",
      large: "https://img.pokemondb.net/artwork/barbaracle.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/barbaracle.gif",
    },
    name: "Barbaracle",
    type: [types.rock, types.water],
    total: 500,
    hp: 72,
    attack: 105,
    defense: 115,
    sp_atk: 54,
    sp_def: 86,
    speed: 68,
  },
  {
    national_number: "690",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/skrelp.png",
      large: "https://img.pokemondb.net/artwork/skrelp.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/skrelp.gif",
    },
    name: "Skrelp",
    type: [types.poison, types.water],
    total: 320,
    hp: 50,
    attack: 60,
    defense: 60,
    sp_atk: 60,
    sp_def: 60,
    speed: 30,
  },
  {
    national_number: "691",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dragalge.png",
      large: "https://img.pokemondb.net/artwork/dragalge.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/dragalge.gif",
    },
    name: "Dragalge",
    type: [types.poison, types.dragon],
    total: 494,
    hp: 65,
    attack: 75,
    defense: 90,
    sp_atk: 97,
    sp_def: 123,
    speed: 44,
  },
  {
    national_number: "692",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/clauncher.png",
      large: "https://img.pokemondb.net/artwork/clauncher.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/clauncher.gif",
    },
    name: "Clauncher",
    type: [types.water],
    total: 330,
    hp: 50,
    attack: 53,
    defense: 62,
    sp_atk: 58,
    sp_def: 63,
    speed: 44,
  },
  {
    national_number: "693",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/clawitzer.png",
      large: "https://img.pokemondb.net/artwork/clawitzer.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/clawitzer.gif",
    },
    name: "Clawitzer",
    type: [types.water],
    total: 500,
    hp: 71,
    attack: 73,
    defense: 88,
    sp_atk: 120,
    sp_def: 89,
    speed: 59,
  },
  {
    national_number: "694",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/helioptile.png",
      large: "https://img.pokemondb.net/artwork/helioptile.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/helioptile.gif",
    },
    name: "Helioptile",
    type: [types.electric, types.normal],
    total: 289,
    hp: 44,
    attack: 38,
    defense: 33,
    sp_atk: 61,
    sp_def: 43,
    speed: 70,
  },
  {
    national_number: "695",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/heliolisk.png",
      large: "https://img.pokemondb.net/artwork/heliolisk.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/heliolisk.gif",
    },
    name: "Heliolisk",
    type: [types.electric, types.normal],
    total: 481,
    hp: 62,
    attack: 55,
    defense: 52,
    sp_atk: 109,
    sp_def: 94,
    speed: 109,
  },
  {
    national_number: "696",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tyrunt.png",
      large: "https://img.pokemondb.net/artwork/tyrunt.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/tyrunt.gif",
    },
    name: "Tyrunt",
    type: [types.rock, types.dragon],
    total: 362,
    hp: 58,
    attack: 89,
    defense: 77,
    sp_atk: 45,
    sp_def: 45,
    speed: 48,
  },
  {
    national_number: "697",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tyrantrum.png",
      large: "https://img.pokemondb.net/artwork/tyrantrum.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/tyrantrum.gif",
    },
    name: "Tyrantrum",
    type: [types.rock, types.dragon],
    total: 521,
    hp: 82,
    attack: 121,
    defense: 119,
    sp_atk: 69,
    sp_def: 59,
    speed: 71,
  },
  {
    national_number: "698",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/amaura.png",
      large: "https://img.pokemondb.net/artwork/amaura.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/amaura.gif",
    },
    name: "Amaura",
    type: [types.rock, types.ice],
    total: 362,
    hp: 77,
    attack: 59,
    defense: 50,
    sp_atk: 67,
    sp_def: 63,
    speed: 46,
  },
  {
    national_number: "699",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/aurorus.png",
      large: "https://img.pokemondb.net/artwork/aurorus.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/aurorus.gif",
    },
    name: "Aurorus",
    type: [types.rock, types.ice],
    total: 521,
    hp: 123,
    attack: 77,
    defense: 72,
    sp_atk: 99,
    sp_def: 92,
    speed: 58,
  },
  {
    national_number: "700",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sylveon.png",
      large: "https://img.pokemondb.net/artwork/sylveon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/sylveon.gif",
    },
    name: "Sylveon",
    type: [types.fairy],
    total: 525,
    hp: 95,
    attack: 65,
    defense: 65,
    sp_atk: 110,
    sp_def: 130,
    speed: 60,
  },
  {
    national_number: "701",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hawlucha.png",
      large: "https://img.pokemondb.net/artwork/hawlucha.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/hawlucha.gif",
    },
    name: "Hawlucha",
    type: [types.fighting, types.flying],
    total: 500,
    hp: 78,
    attack: 92,
    defense: 75,
    sp_atk: 74,
    sp_def: 63,
    speed: 118,
  },
  {
    national_number: "702",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dedenne.png",
      large: "https://img.pokemondb.net/artwork/dedenne.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/dedenne.gif",
    },
    name: "Dedenne",
    type: [types.electric, types.fairy],
    total: 431,
    hp: 67,
    attack: 58,
    defense: 57,
    sp_atk: 81,
    sp_def: 67,
    speed: 101,
  },
  {
    national_number: "703",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/carbink.png",
      large: "https://img.pokemondb.net/artwork/carbink.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/carbink.gif",
    },
    name: "Carbink",
    type: [types.rock, types.fairy],
    total: 500,
    hp: 50,
    attack: 50,
    defense: 150,
    sp_atk: 50,
    sp_def: 150,
    speed: 50,
  },
  {
    national_number: "704",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/goomy.png",
      large: "https://img.pokemondb.net/artwork/goomy.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/goomy.gif",
    },
    name: "Goomy",
    type: [types.dragon],
    total: 300,
    hp: 45,
    attack: 50,
    defense: 35,
    sp_atk: 55,
    sp_def: 75,
    speed: 40,
  },
  {
    national_number: "705",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sliggoo.png",
      large: "https://img.pokemondb.net/artwork/sliggoo.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/sliggoo.gif",
    },
    name: "Sliggoo",
    type: [types.dragon],
    total: 452,
    hp: 68,
    attack: 75,
    defense: 53,
    sp_atk: 83,
    sp_def: 113,
    speed: 60,
  },
  {
    national_number: "706",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/goodra.png",
      large: "https://img.pokemondb.net/artwork/goodra.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/goodra.gif",
    },
    name: "Goodra",
    type: [types.dragon],
    total: 600,
    hp: 90,
    attack: 100,
    defense: 70,
    sp_atk: 110,
    sp_def: 150,
    speed: 80,
  },
  {
    national_number: "707",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/klefki.png",
      large: "https://img.pokemondb.net/artwork/klefki.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/klefki.gif",
    },
    name: "Klefki",
    type: [types.steel, types.fairy],
    total: 470,
    hp: 57,
    attack: 80,
    defense: 91,
    sp_atk: 80,
    sp_def: 87,
    speed: 75,
  },
  {
    national_number: "708",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/phantump.png",
      large: "https://img.pokemondb.net/artwork/phantump.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/phantump.gif",
    },
    name: "Phantump",
    type: [types.ghost, types.grass],
    total: 309,
    hp: 43,
    attack: 70,
    defense: 48,
    sp_atk: 50,
    sp_def: 60,
    speed: 38,
  },
  {
    national_number: "709",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/trevenant.png",
      large: "https://img.pokemondb.net/artwork/trevenant.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/trevenant.gif",
    },
    name: "Trevenant",
    type: [types.ghost, types.grass],
    total: 474,
    hp: 85,
    attack: 110,
    defense: 76,
    sp_atk: 65,
    sp_def: 82,
    speed: 56,
  },
  {
    national_number: "710",
    evolution: { name: "Average Size" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pumpkaboo.png",
      large: "https://img.pokemondb.net/artwork/pumpkaboo.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pumpkaboo.gif",
    },
    name: "Pumpkaboo",
    type: [types.ghost, types.grass],
    total: 335,
    hp: 49,
    attack: 66,
    defense: 70,
    sp_atk: 44,
    sp_def: 55,
    speed: 51,
  },
  {
    national_number: "710",
    evolution: { name: "Small Size" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pumpkaboo.png",
      large: "https://img.pokemondb.net/artwork/pumpkaboo.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pumpkaboo.gif",
    },
    name: "Pumpkaboo",
    type: [types.ghost, types.grass],
    total: 335,
    hp: 44,
    attack: 66,
    defense: 70,
    sp_atk: 44,
    sp_def: 55,
    speed: 56,
  },
  {
    national_number: "710",
    evolution: { name: "Large Size" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pumpkaboo.png",
      large: "https://img.pokemondb.net/artwork/pumpkaboo.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pumpkaboo.gif",
    },
    name: "Pumpkaboo",
    type: [types.ghost, types.grass],
    total: 335,
    hp: 54,
    attack: 66,
    defense: 70,
    sp_atk: 44,
    sp_def: 55,
    speed: 46,
  },
  {
    national_number: "710",
    evolution: { name: "Super Size" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pumpkaboo.png",
      large: "https://img.pokemondb.net/artwork/pumpkaboo.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pumpkaboo.gif",
    },
    name: "Pumpkaboo",
    type: [types.ghost, types.grass],
    total: 335,
    hp: 59,
    attack: 66,
    defense: 70,
    sp_atk: 44,
    sp_def: 55,
    speed: 41,
  },
  {
    national_number: "711",
    evolution: { name: "Average Size" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gourgeist.png",
      large: "https://img.pokemondb.net/artwork/gourgeist.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gourgeist.gif",
    },
    name: "Gourgeist",
    type: [types.ghost, types.grass],
    total: 494,
    hp: 65,
    attack: 90,
    defense: 122,
    sp_atk: 58,
    sp_def: 75,
    speed: 84,
  },
  {
    national_number: "711",
    evolution: { name: "Small Size" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gourgeist.png",
      large: "https://img.pokemondb.net/artwork/gourgeist.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gourgeist.gif",
    },
    name: "Gourgeist",
    type: [types.ghost, types.grass],
    total: 494,
    hp: 55,
    attack: 85,
    defense: 122,
    sp_atk: 58,
    sp_def: 75,
    speed: 99,
  },
  {
    national_number: "711",
    evolution: { name: "Large Size" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gourgeist.png",
      large: "https://img.pokemondb.net/artwork/gourgeist.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gourgeist.gif",
    },
    name: "Gourgeist",
    type: [types.ghost, types.grass],
    total: 494,
    hp: 75,
    attack: 95,
    defense: 122,
    sp_atk: 58,
    sp_def: 75,
    speed: 69,
  },
  {
    national_number: "711",
    evolution: { name: "Super Size" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gourgeist.png",
      large: "https://img.pokemondb.net/artwork/gourgeist.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gourgeist.gif",
    },
    name: "Gourgeist",
    type: [types.ghost, types.grass],
    total: 494,
    hp: 85,
    attack: 100,
    defense: 122,
    sp_atk: 58,
    sp_def: 75,
    speed: 54,
  },
  {
    national_number: "712",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bergmite.png",
      large: "https://img.pokemondb.net/artwork/bergmite.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/bergmite.gif",
    },
    name: "Bergmite",
    type: [types.ice],
    total: 304,
    hp: 55,
    attack: 69,
    defense: 85,
    sp_atk: 32,
    sp_def: 35,
    speed: 28,
  },
  {
    national_number: "713",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/avalugg.png",
      large: "https://img.pokemondb.net/artwork/avalugg.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/avalugg.gif",
    },
    name: "Avalugg",
    type: [types.ice],
    total: 514,
    hp: 95,
    attack: 117,
    defense: 184,
    sp_atk: 44,
    sp_def: 46,
    speed: 28,
  },
  {
    national_number: "714",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/noibat.png",
      large: "https://img.pokemondb.net/artwork/noibat.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/noibat.gif",
    },
    name: "Noibat",
    type: [types.flying, types.dragon],
    total: 245,
    hp: 40,
    attack: 30,
    defense: 35,
    sp_atk: 45,
    sp_def: 40,
    speed: 55,
  },
  {
    national_number: "715",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/noivern.png",
      large: "https://img.pokemondb.net/artwork/noivern.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/noivern.gif",
    },
    name: "Noivern",
    type: [types.flying, types.dragon],
    total: 535,
    hp: 85,
    attack: 70,
    defense: 80,
    sp_atk: 97,
    sp_def: 80,
    speed: 123,
  },
  {
    national_number: "716",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/xerneas.png",
      large: "https://img.pokemondb.net/artwork/xerneas.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/xerneas.gif",
    },
    name: "Xerneas",
    type: [types.fairy],
    total: 680,
    hp: 126,
    attack: 131,
    defense: 95,
    sp_atk: 131,
    sp_def: 98,
    speed: 99,
  },
  {
    national_number: "717",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/yveltal.png",
      large: "https://img.pokemondb.net/artwork/yveltal.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/yveltal.gif",
    },
    name: "Yveltal",
    type: [types.dark, types.flying],
    total: 680,
    hp: 126,
    attack: 131,
    defense: 95,
    sp_atk: 131,
    sp_def: 98,
    speed: 99,
  },
  {
    national_number: "718",
    evolution: { name: "10% Forme" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zygarde.png",
      large: "https://img.pokemondb.net/artwork/zygarde.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/zygarde.gif",
    },
    name: "Zygarde",
    type: [types.dragon, types.ground],
    total: 486,
    hp: 54,
    attack: 100,
    defense: 71,
    sp_atk: 61,
    sp_def: 85,
    speed: 115,
  },
  {
    national_number: "718",
    evolution: { name: "Complete Forme" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zygarde.png",
      large: "https://img.pokemondb.net/artwork/zygarde.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/zygarde.gif",
    },
    name: "Zygarde",
    type: [types.dragon, types.ground],
    total: 708,
    hp: 216,
    attack: 100,
    defense: 121,
    sp_atk: 91,
    sp_def: 95,
    speed: 85,
  },
  {
    national_number: "718",
    evolution: { name: "50% Forme" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zygarde.png",
      large: "https://img.pokemondb.net/artwork/zygarde.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/zygarde.gif",
    },
    name: "Zygarde",
    type: [types.dragon, types.ground],
    total: 600,
    hp: 108,
    attack: 100,
    defense: 121,
    sp_atk: 81,
    sp_def: 95,
    speed: 95,
  },
  {
    national_number: "719",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/diancie.png",
      large: "https://img.pokemondb.net/artwork/diancie.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/diancie.gif",
    },
    name: "Diancie",
    type: [types.rock, types.fairy],
    total: 600,
    hp: 50,
    attack: 100,
    defense: 150,
    sp_atk: 100,
    sp_def: 150,
    speed: 50,
  },
  {
    national_number: "719",
    evolution: { name: "Mega Diancie" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/diancie.png",
      large: "https://img.pokemondb.net/artwork/diancie.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/diancie.gif",
    },
    name: "Diancie",
    type: [types.rock, types.fairy],
    total: 700,
    hp: 50,
    attack: 160,
    defense: 110,
    sp_atk: 160,
    sp_def: 110,
    speed: 110,
  },
  {
    national_number: "720",
    evolution: { name: "Hoopa Unbound" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hoopa.png",
      large: "https://img.pokemondb.net/artwork/hoopa.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/hoopa.gif",
    },
    name: "Hoopa",
    type: [types.psychic, types.dark],
    total: 680,
    hp: 80,
    attack: 160,
    defense: 60,
    sp_atk: 170,
    sp_def: 130,
    speed: 80,
  },
  {
    national_number: "720",
    evolution: { name: "Hoopa Confined" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hoopa.png",
      large: "https://img.pokemondb.net/artwork/hoopa.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/hoopa.gif",
    },
    name: "Hoopa",
    type: [types.psychic, types.ghost],
    total: 600,
    hp: 80,
    attack: 110,
    defense: 60,
    sp_atk: 150,
    sp_def: 130,
    speed: 70,
  },
  {
    national_number: "721",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/volcanion.png",
      large: "https://img.pokemondb.net/artwork/volcanion.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/volcanion.gif",
    },
    name: "Volcanion",
    type: [types.fire, types.water],
    total: 600,
    hp: 80,
    attack: 110,
    defense: 120,
    sp_atk: 130,
    sp_def: 90,
    speed: 70,
  },
  {
    national_number: "722",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rowlet.png",
      large: "https://img.pokemondb.net/artwork/rowlet.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/rowlet.gif",
    },
    name: "Rowlet",
    type: [types.grass, types.flying],
    total: 320,
    hp: 68,
    attack: 55,
    defense: 55,
    sp_atk: 50,
    sp_def: 50,
    speed: 42,
  },
  {
    national_number: "723",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dartrix.png",
      large: "https://img.pokemondb.net/artwork/dartrix.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/dartrix.gif",
    },
    name: "Dartrix",
    type: [types.grass, types.flying],
    total: 420,
    hp: 78,
    attack: 75,
    defense: 75,
    sp_atk: 70,
    sp_def: 70,
    speed: 52,
  },
  {
    national_number: "724",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/decidueye.png",
      large: "https://img.pokemondb.net/artwork/decidueye.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/decidueye.gif",
    },
    name: "Decidueye",
    type: [types.grass, types.ghost],
    total: 530,
    hp: 78,
    attack: 107,
    defense: 75,
    sp_atk: 100,
    sp_def: 100,
    speed: 70,
  },
  {
    national_number: "725",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/litten.png",
      large: "https://img.pokemondb.net/artwork/litten.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/litten.gif",
    },
    name: "Litten",
    type: [types.fire],
    total: 320,
    hp: 45,
    attack: 65,
    defense: 40,
    sp_atk: 60,
    sp_def: 40,
    speed: 70,
  },
  {
    national_number: "726",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/torracat.png",
      large: "https://img.pokemondb.net/artwork/torracat.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/torracat.gif",
    },
    name: "Torracat",
    type: [types.fire],
    total: 420,
    hp: 65,
    attack: 85,
    defense: 50,
    sp_atk: 80,
    sp_def: 50,
    speed: 90,
  },
  {
    national_number: "727",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/incineroar.png",
      large: "https://img.pokemondb.net/artwork/incineroar.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/incineroar.gif",
    },
    name: "Incineroar",
    type: [types.fire, types.dark],
    total: 530,
    hp: 95,
    attack: 115,
    defense: 90,
    sp_atk: 80,
    sp_def: 90,
    speed: 60,
  },
  {
    national_number: "728",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/popplio.png",
      large: "https://img.pokemondb.net/artwork/popplio.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/popplio.gif",
    },
    name: "Popplio",
    type: [types.water],
    total: 320,
    hp: 50,
    attack: 54,
    defense: 54,
    sp_atk: 66,
    sp_def: 56,
    speed: 40,
  },
  {
    national_number: "729",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/brionne.png",
      large: "https://img.pokemondb.net/artwork/brionne.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/brionne.gif",
    },
    name: "Brionne",
    type: [types.water],
    total: 420,
    hp: 60,
    attack: 69,
    defense: 69,
    sp_atk: 91,
    sp_def: 81,
    speed: 50,
  },
  {
    national_number: "730",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/primarina.png",
      large: "https://img.pokemondb.net/artwork/primarina.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/primarina.gif",
    },
    name: "Primarina",
    type: [types.water, types.fairy],
    total: 530,
    hp: 80,
    attack: 74,
    defense: 74,
    sp_atk: 126,
    sp_def: 116,
    speed: 60,
  },
  {
    national_number: "731",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pikipek.png",
      large: "https://img.pokemondb.net/artwork/pikipek.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pikipek.gif",
    },
    name: "Pikipek",
    type: [types.normal, types.flying],
    total: 265,
    hp: 35,
    attack: 75,
    defense: 30,
    sp_atk: 30,
    sp_def: 30,
    speed: 65,
  },
  {
    national_number: "732",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/trumbeak.png",
      large: "https://img.pokemondb.net/artwork/trumbeak.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/trumbeak.gif",
    },
    name: "Trumbeak",
    type: [types.normal, types.flying],
    total: 355,
    hp: 55,
    attack: 85,
    defense: 50,
    sp_atk: 40,
    sp_def: 50,
    speed: 75,
  },
  {
    national_number: "733",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/toucannon.png",
      large: "https://img.pokemondb.net/artwork/toucannon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/toucannon.gif",
    },
    name: "Toucannon",
    type: [types.normal, types.flying],
    total: 485,
    hp: 80,
    attack: 120,
    defense: 75,
    sp_atk: 75,
    sp_def: 75,
    speed: 60,
  },
  {
    national_number: "734",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/yungoos.png",
      large: "https://img.pokemondb.net/artwork/yungoos.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/yungoos.gif",
    },
    name: "Yungoos",
    type: [types.normal],
    total: 253,
    hp: 48,
    attack: 70,
    defense: 30,
    sp_atk: 30,
    sp_def: 30,
    speed: 45,
  },
  {
    national_number: "735",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gumshoos.png",
      large: "https://img.pokemondb.net/artwork/gumshoos.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gumshoos.gif",
    },
    name: "Gumshoos",
    type: [types.normal],
    total: 418,
    hp: 88,
    attack: 110,
    defense: 60,
    sp_atk: 55,
    sp_def: 60,
    speed: 45,
  },
  {
    national_number: "736",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/grubbin.png",
      large: "https://img.pokemondb.net/artwork/grubbin.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/grubbin.gif",
    },
    name: "Grubbin",
    type: [types.bug],
    total: 300,
    hp: 47,
    attack: 62,
    defense: 45,
    sp_atk: 55,
    sp_def: 45,
    speed: 46,
  },
  {
    national_number: "737",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charjabug.png",
      large: "https://img.pokemondb.net/artwork/charjabug.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/charjabug.gif",
    },
    name: "Charjabug",
    type: [types.bug, types.electric],
    total: 400,
    hp: 57,
    attack: 82,
    defense: 95,
    sp_atk: 55,
    sp_def: 75,
    speed: 36,
  },
  {
    national_number: "738",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vikavolt.png",
      large: "https://img.pokemondb.net/artwork/vikavolt.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/vikavolt.gif",
    },
    name: "Vikavolt",
    type: [types.bug, types.electric],
    total: 500,
    hp: 77,
    attack: 70,
    defense: 90,
    sp_atk: 145,
    sp_def: 75,
    speed: 43,
  },
  {
    national_number: "739",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/crabrawler.png",
      large: "https://img.pokemondb.net/artwork/crabrawler.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/crabrawler.gif",
    },
    name: "Crabrawler",
    type: [types.fighting],
    total: 338,
    hp: 47,
    attack: 82,
    defense: 57,
    sp_atk: 42,
    sp_def: 47,
    speed: 63,
  },
  {
    national_number: "740",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/crabominable.png",
      large: "https://img.pokemondb.net/artwork/crabominable.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/crabominable.gif",
    },
    name: "Crabominable",
    type: [types.fighting, types.ice],
    total: 478,
    hp: 97,
    attack: 132,
    defense: 77,
    sp_atk: 62,
    sp_def: 67,
    speed: 43,
  },
  {
    national_number: "741",
    evolution: { name: "Pa'u Style" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/oricorio.png",
      large: "https://img.pokemondb.net/artwork/oricorio.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/oricorio.gif",
    },
    name: "Oricorio",
    type: [types.psychic, types.flying],
    total: 476,
    hp: 75,
    attack: 70,
    defense: 70,
    sp_atk: 98,
    sp_def: 70,
    speed: 93,
  },
  {
    national_number: "741",
    evolution: { name: "Sensu Style" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/oricorio.png",
      large: "https://img.pokemondb.net/artwork/oricorio.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/oricorio.gif",
    },
    name: "Oricorio",
    type: [types.ghost, types.flying],
    total: 476,
    hp: 75,
    attack: 70,
    defense: 70,
    sp_atk: 98,
    sp_def: 70,
    speed: 93,
  },
  {
    national_number: "741",
    evolution: { name: "Baile Style" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/oricorio.png",
      large: "https://img.pokemondb.net/artwork/oricorio.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/oricorio.gif",
    },
    name: "Oricorio",
    type: [types.fire, types.flying],
    total: 476,
    hp: 75,
    attack: 70,
    defense: 70,
    sp_atk: 98,
    sp_def: 70,
    speed: 93,
  },
  {
    national_number: "741",
    evolution: { name: "Pom-Pom Style" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/oricorio.png",
      large: "https://img.pokemondb.net/artwork/oricorio.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/oricorio.gif",
    },
    name: "Oricorio",
    type: [types.electric, types.flying],
    total: 476,
    hp: 75,
    attack: 70,
    defense: 70,
    sp_atk: 98,
    sp_def: 70,
    speed: 93,
  },
  {
    national_number: "742",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cutiefly.png",
      large: "https://img.pokemondb.net/artwork/cutiefly.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/cutiefly.gif",
    },
    name: "Cutiefly",
    type: [types.bug, types.fairy],
    total: 304,
    hp: 40,
    attack: 45,
    defense: 40,
    sp_atk: 55,
    sp_def: 40,
    speed: 84,
  },
  {
    national_number: "743",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ribombee.png",
      large: "https://img.pokemondb.net/artwork/ribombee.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/ribombee.gif",
    },
    name: "Ribombee",
    type: [types.bug, types.fairy],
    total: 464,
    hp: 60,
    attack: 55,
    defense: 60,
    sp_atk: 95,
    sp_def: 70,
    speed: 124,
  },
  {
    national_number: "744",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rockruff.png",
      large: "https://img.pokemondb.net/artwork/rockruff.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/rockruff.gif",
    },
    name: "Rockruff",
    type: [types.rock],
    total: 280,
    hp: 45,
    attack: 65,
    defense: 40,
    sp_atk: 30,
    sp_def: 40,
    speed: 60,
  },
  {
    national_number: "745",
    evolution: { name: "Midday Form" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lycanroc.png",
      large: "https://img.pokemondb.net/artwork/lycanroc.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/lycanroc.gif",
    },
    name: "Lycanroc",
    type: [types.rock],
    total: 487,
    hp: 75,
    attack: 115,
    defense: 65,
    sp_atk: 55,
    sp_def: 65,
    speed: 112,
  },
  {
    national_number: "745",
    evolution: { name: "Midnight Form" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lycanroc.png",
      large: "https://img.pokemondb.net/artwork/lycanroc.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/lycanroc.gif",
    },
    name: "Lycanroc",
    type: [types.rock],
    total: 487,
    hp: 85,
    attack: 115,
    defense: 75,
    sp_atk: 55,
    sp_def: 75,
    speed: 82,
  },
  {
    national_number: "745",
    evolution: { name: "Dusk Form" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lycanroc.png",
      large: "https://img.pokemondb.net/artwork/lycanroc.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/lycanroc.gif",
    },
    name: "Lycanroc",
    type: [types.rock],
    total: 487,
    hp: 75,
    attack: 117,
    defense: 65,
    sp_atk: 55,
    sp_def: 65,
    speed: 110,
  },
  {
    national_number: "746",
    evolution: { name: "Solo Form" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wishiwashi.png",
      large: "https://img.pokemondb.net/artwork/wishiwashi.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/wishiwashi.gif",
    },
    name: "Wishiwashi",
    type: [types.water],
    total: 175,
    hp: 45,
    attack: 20,
    defense: 20,
    sp_atk: 25,
    sp_def: 25,
    speed: 40,
  },
  {
    national_number: "746",
    evolution: { name: "School Form" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wishiwashi.png",
      large: "https://img.pokemondb.net/artwork/wishiwashi.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/wishiwashi.gif",
    },
    name: "Wishiwashi",
    type: [types.water],
    total: 620,
    hp: 45,
    attack: 140,
    defense: 130,
    sp_atk: 140,
    sp_def: 135,
    speed: 30,
  },
  {
    national_number: "747",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mareanie.png",
      large: "https://img.pokemondb.net/artwork/mareanie.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mareanie.gif",
    },
    name: "Mareanie",
    type: [types.poison, types.water],
    total: 305,
    hp: 50,
    attack: 53,
    defense: 62,
    sp_atk: 43,
    sp_def: 52,
    speed: 45,
  },
  {
    national_number: "748",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/toxapex.png",
      large: "https://img.pokemondb.net/artwork/toxapex.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/toxapex.gif",
    },
    name: "Toxapex",
    type: [types.poison, types.water],
    total: 495,
    hp: 50,
    attack: 63,
    defense: 152,
    sp_atk: 53,
    sp_def: 142,
    speed: 35,
  },
  {
    national_number: "749",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mudbray.png",
      large: "https://img.pokemondb.net/artwork/mudbray.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mudbray.gif",
    },
    name: "Mudbray",
    type: [types.ground],
    total: 385,
    hp: 70,
    attack: 100,
    defense: 70,
    sp_atk: 45,
    sp_def: 55,
    speed: 45,
  },
  {
    national_number: "750",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mudsdale.png",
      large: "https://img.pokemondb.net/artwork/mudsdale.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mudsdale.gif",
    },
    name: "Mudsdale",
    type: [types.ground],
    total: 500,
    hp: 100,
    attack: 125,
    defense: 100,
    sp_atk: 55,
    sp_def: 85,
    speed: 35,
  },
  {
    national_number: "751",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dewpider.png",
      large: "https://img.pokemondb.net/artwork/dewpider.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/dewpider.gif",
    },
    name: "Dewpider",
    type: [types.water, types.bug],
    total: 269,
    hp: 38,
    attack: 40,
    defense: 52,
    sp_atk: 40,
    sp_def: 72,
    speed: 27,
  },
  {
    national_number: "752",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/araquanid.png",
      large: "https://img.pokemondb.net/artwork/araquanid.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/araquanid.gif",
    },
    name: "Araquanid",
    type: [types.water, types.bug],
    total: 454,
    hp: 68,
    attack: 70,
    defense: 92,
    sp_atk: 50,
    sp_def: 132,
    speed: 42,
  },
  {
    national_number: "753",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/fomantis.png",
      large: "https://img.pokemondb.net/artwork/fomantis.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/fomantis.gif",
    },
    name: "Fomantis",
    type: [types.grass],
    total: 250,
    hp: 40,
    attack: 55,
    defense: 35,
    sp_atk: 50,
    sp_def: 35,
    speed: 35,
  },
  {
    national_number: "754",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lurantis.png",
      large: "https://img.pokemondb.net/artwork/lurantis.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/lurantis.gif",
    },
    name: "Lurantis",
    type: [types.grass],
    total: 480,
    hp: 70,
    attack: 105,
    defense: 90,
    sp_atk: 80,
    sp_def: 90,
    speed: 45,
  },
  {
    national_number: "755",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/morelull.png",
      large: "https://img.pokemondb.net/artwork/morelull.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/morelull.gif",
    },
    name: "Morelull",
    type: [types.grass, types.fairy],
    total: 285,
    hp: 40,
    attack: 35,
    defense: 55,
    sp_atk: 65,
    sp_def: 75,
    speed: 15,
  },
  {
    national_number: "756",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shiinotic.png",
      large: "https://img.pokemondb.net/artwork/shiinotic.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/shiinotic.gif",
    },
    name: "Shiinotic",
    type: [types.grass, types.fairy],
    total: 405,
    hp: 60,
    attack: 45,
    defense: 80,
    sp_atk: 90,
    sp_def: 100,
    speed: 30,
  },
  {
    national_number: "757",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/salandit.png",
      large: "https://img.pokemondb.net/artwork/salandit.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/salandit.gif",
    },
    name: "Salandit",
    type: [types.poison, types.fire],
    total: 320,
    hp: 48,
    attack: 44,
    defense: 40,
    sp_atk: 71,
    sp_def: 40,
    speed: 77,
  },
  {
    national_number: "758",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/salazzle.png",
      large: "https://img.pokemondb.net/artwork/salazzle.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/salazzle.gif",
    },
    name: "Salazzle",
    type: [types.poison, types.fire],
    total: 480,
    hp: 68,
    attack: 64,
    defense: 60,
    sp_atk: 111,
    sp_def: 60,
    speed: 117,
  },
  {
    national_number: "759",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/stufful.png",
      large: "https://img.pokemondb.net/artwork/stufful.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/stufful.gif",
    },
    name: "Stufful",
    type: [types.normal, types.fighting],
    total: 340,
    hp: 70,
    attack: 75,
    defense: 50,
    sp_atk: 45,
    sp_def: 50,
    speed: 50,
  },
  {
    national_number: "760",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bewear.png",
      large: "https://img.pokemondb.net/artwork/bewear.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/bewear.gif",
    },
    name: "Bewear",
    type: [types.normal, types.fighting],
    total: 500,
    hp: 120,
    attack: 125,
    defense: 80,
    sp_atk: 55,
    sp_def: 60,
    speed: 60,
  },
  {
    national_number: "761",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bounsweet.png",
      large: "https://img.pokemondb.net/artwork/bounsweet.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/bounsweet.gif",
    },
    name: "Bounsweet",
    type: [types.grass],
    total: 210,
    hp: 42,
    attack: 30,
    defense: 38,
    sp_atk: 30,
    sp_def: 38,
    speed: 32,
  },
  {
    national_number: "762",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/steenee.png",
      large: "https://img.pokemondb.net/artwork/steenee.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/steenee.gif",
    },
    name: "Steenee",
    type: [types.grass],
    total: 290,
    hp: 52,
    attack: 40,
    defense: 48,
    sp_atk: 40,
    sp_def: 48,
    speed: 62,
  },
  {
    national_number: "763",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tsareena.png",
      large: "https://img.pokemondb.net/artwork/tsareena.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/tsareena.gif",
    },
    name: "Tsareena",
    type: [types.grass],
    total: 510,
    hp: 72,
    attack: 120,
    defense: 98,
    sp_atk: 50,
    sp_def: 98,
    speed: 72,
  },
  {
    national_number: "764",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/comfey.png",
      large: "https://img.pokemondb.net/artwork/comfey.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/comfey.gif",
    },
    name: "Comfey",
    type: [types.fairy],
    total: 485,
    hp: 51,
    attack: 52,
    defense: 90,
    sp_atk: 82,
    sp_def: 110,
    speed: 100,
  },
  {
    national_number: "765",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/oranguru.png",
      large: "https://img.pokemondb.net/artwork/oranguru.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/oranguru.gif",
    },
    name: "Oranguru",
    type: [types.normal, types.psychic],
    total: 490,
    hp: 90,
    attack: 60,
    defense: 80,
    sp_atk: 90,
    sp_def: 110,
    speed: 60,
  },
  {
    national_number: "766",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/passimian.png",
      large: "https://img.pokemondb.net/artwork/passimian.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/passimian.gif",
    },
    name: "Passimian",
    type: [types.fighting],
    total: 490,
    hp: 100,
    attack: 120,
    defense: 90,
    sp_atk: 40,
    sp_def: 60,
    speed: 80,
  },
  {
    national_number: "767",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wimpod.png",
      large: "https://img.pokemondb.net/artwork/wimpod.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/wimpod.gif",
    },
    name: "Wimpod",
    type: [types.bug, types.water],
    total: 230,
    hp: 25,
    attack: 35,
    defense: 40,
    sp_atk: 20,
    sp_def: 30,
    speed: 80,
  },
  {
    national_number: "768",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/golisopod.png",
      large: "https://img.pokemondb.net/artwork/golisopod.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/golisopod.gif",
    },
    name: "Golisopod",
    type: [types.bug, types.water],
    total: 530,
    hp: 75,
    attack: 125,
    defense: 140,
    sp_atk: 60,
    sp_def: 90,
    speed: 40,
  },
  {
    national_number: "769",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sandygast.png",
      large: "https://img.pokemondb.net/artwork/sandygast.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/sandygast.gif",
    },
    name: "Sandygast",
    type: [types.ghost, types.ground],
    total: 320,
    hp: 55,
    attack: 55,
    defense: 80,
    sp_atk: 70,
    sp_def: 45,
    speed: 15,
  },
  {
    national_number: "770",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/palossand.png",
      large: "https://img.pokemondb.net/artwork/palossand.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/palossand.gif",
    },
    name: "Palossand",
    type: [types.ghost, types.ground],
    total: 480,
    hp: 85,
    attack: 75,
    defense: 110,
    sp_atk: 100,
    sp_def: 75,
    speed: 35,
  },
  {
    national_number: "771",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pyukumuku.png",
      large: "https://img.pokemondb.net/artwork/pyukumuku.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pyukumuku.gif",
    },
    name: "Pyukumuku",
    type: [types.water],
    total: 410,
    hp: 55,
    attack: 60,
    defense: 130,
    sp_atk: 30,
    sp_def: 130,
    speed: 5,
  },
  {
    national_number: "772",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/type:-null.png",
      large: "https://img.pokemondb.net/artwork/type:-null.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/type:-null.gif",
    },
    name: "Type: Null",
    type: [types.normal],
    total: 534,
    hp: 95,
    attack: 95,
    defense: 95,
    sp_atk: 95,
    sp_def: 95,
    speed: 59,
  },
  {
    national_number: "773",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/silvally.png",
      large: "https://img.pokemondb.net/artwork/silvally.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/silvally.gif",
    },
    name: "Silvally",
    type: [types.normal],
    total: 570,
    hp: 95,
    attack: 95,
    defense: 95,
    sp_atk: 95,
    sp_def: 95,
    speed: 95,
  },
  {
    national_number: "774",
    evolution: { name: "Meteor Form" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/minior.png",
      large: "https://img.pokemondb.net/artwork/minior.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/minior.gif",
    },
    name: "Minior",
    type: [types.rock, types.flying],
    total: 440,
    hp: 60,
    attack: 60,
    defense: 100,
    sp_atk: 60,
    sp_def: 100,
    speed: 60,
  },
  {
    national_number: "774",
    evolution: { name: "Core Form" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/minior.png",
      large: "https://img.pokemondb.net/artwork/minior.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/minior.gif",
    },
    name: "Minior",
    type: [types.rock, types.flying],
    total: 500,
    hp: 60,
    attack: 100,
    defense: 60,
    sp_atk: 100,
    sp_def: 60,
    speed: 120,
  },
  {
    national_number: "775",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/komala.png",
      large: "https://img.pokemondb.net/artwork/komala.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/komala.gif",
    },
    name: "Komala",
    type: [types.normal],
    total: 480,
    hp: 65,
    attack: 115,
    defense: 65,
    sp_atk: 75,
    sp_def: 95,
    speed: 65,
  },
  {
    national_number: "776",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/turtonator.png",
      large: "https://img.pokemondb.net/artwork/turtonator.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/turtonator.gif",
    },
    name: "Turtonator",
    type: [types.fire, types.dragon],
    total: 485,
    hp: 60,
    attack: 78,
    defense: 135,
    sp_atk: 91,
    sp_def: 85,
    speed: 36,
  },
  {
    national_number: "777",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/togedemaru.png",
      large: "https://img.pokemondb.net/artwork/togedemaru.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/togedemaru.gif",
    },
    name: "Togedemaru",
    type: [types.electric, types.steel],
    total: 435,
    hp: 65,
    attack: 98,
    defense: 63,
    sp_atk: 40,
    sp_def: 73,
    speed: 96,
  },
  {
    national_number: "778",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mimikyu.png",
      large: "https://img.pokemondb.net/artwork/mimikyu.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mimikyu.gif",
    },
    name: "Mimikyu",
    type: [types.ghost, types.fairy],
    total: 476,
    hp: 55,
    attack: 90,
    defense: 80,
    sp_atk: 50,
    sp_def: 105,
    speed: 96,
  },
  {
    national_number: "779",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bruxish.png",
      large: "https://img.pokemondb.net/artwork/bruxish.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/bruxish.gif",
    },
    name: "Bruxish",
    type: [types.water, types.psychic],
    total: 475,
    hp: 68,
    attack: 105,
    defense: 70,
    sp_atk: 70,
    sp_def: 70,
    speed: 92,
  },
  {
    national_number: "780",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/drampa.png",
      large: "https://img.pokemondb.net/artwork/drampa.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/drampa.gif",
    },
    name: "Drampa",
    type: [types.normal, types.dragon],
    total: 485,
    hp: 78,
    attack: 60,
    defense: 85,
    sp_atk: 135,
    sp_def: 91,
    speed: 36,
  },
  {
    national_number: "781",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dhelmise.png",
      large: "https://img.pokemondb.net/artwork/dhelmise.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/dhelmise.gif",
    },
    name: "Dhelmise",
    type: [types.ghost, types.grass],
    total: 517,
    hp: 70,
    attack: 131,
    defense: 100,
    sp_atk: 86,
    sp_def: 90,
    speed: 40,
  },
  {
    national_number: "782",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/jangmo-o.png",
      large: "https://img.pokemondb.net/artwork/jangmo-o.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/jangmo-o.gif",
    },
    name: "Jangmo-o",
    type: [types.dragon],
    total: 300,
    hp: 45,
    attack: 55,
    defense: 65,
    sp_atk: 45,
    sp_def: 45,
    speed: 45,
  },
  {
    national_number: "783",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hakamo-o.png",
      large: "https://img.pokemondb.net/artwork/hakamo-o.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/hakamo-o.gif",
    },
    name: "Hakamo-o",
    type: [types.dragon, types.fighting],
    total: 420,
    hp: 55,
    attack: 75,
    defense: 90,
    sp_atk: 65,
    sp_def: 70,
    speed: 65,
  },
  {
    national_number: "784",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kommo-o.png",
      large: "https://img.pokemondb.net/artwork/kommo-o.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/kommo-o.gif",
    },
    name: "Kommo-o",
    type: [types.dragon, types.fighting],
    total: 600,
    hp: 75,
    attack: 110,
    defense: 125,
    sp_atk: 100,
    sp_def: 105,
    speed: 85,
  },
  {
    national_number: "785",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tapu-koko.png",
      large: "https://img.pokemondb.net/artwork/tapu-koko.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/tapu-koko.gif",
    },
    name: "Tapu Koko",
    type: [types.electric, types.fairy],
    total: 570,
    hp: 70,
    attack: 115,
    defense: 85,
    sp_atk: 95,
    sp_def: 75,
    speed: 130,
  },
  {
    national_number: "786",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tapu-lele.png",
      large: "https://img.pokemondb.net/artwork/tapu-lele.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/tapu-lele.gif",
    },
    name: "Tapu Lele",
    type: [types.psychic, types.fairy],
    total: 570,
    hp: 70,
    attack: 85,
    defense: 75,
    sp_atk: 130,
    sp_def: 115,
    speed: 95,
  },
  {
    national_number: "787",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tapu-bulu.png",
      large: "https://img.pokemondb.net/artwork/tapu-bulu.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/tapu-bulu.gif",
    },
    name: "Tapu Bulu",
    type: [types.grass, types.fairy],
    total: 570,
    hp: 70,
    attack: 130,
    defense: 115,
    sp_atk: 85,
    sp_def: 95,
    speed: 75,
  },
  {
    national_number: "788",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tapu-fini.png",
      large: "https://img.pokemondb.net/artwork/tapu-fini.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/tapu-fini.gif",
    },
    name: "Tapu Fini",
    type: [types.water, types.fairy],
    total: 570,
    hp: 70,
    attack: 75,
    defense: 115,
    sp_atk: 95,
    sp_def: 130,
    speed: 85,
  },
  {
    national_number: "789",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cosmog.png",
      large: "https://img.pokemondb.net/artwork/cosmog.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/cosmog.gif",
    },
    name: "Cosmog",
    type: [types.psychic],
    total: 200,
    hp: 43,
    attack: 29,
    defense: 31,
    sp_atk: 29,
    sp_def: 31,
    speed: 37,
  },
  {
    national_number: "790",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cosmoem.png",
      large: "https://img.pokemondb.net/artwork/cosmoem.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/cosmoem.gif",
    },
    name: "Cosmoem",
    type: [types.psychic],
    total: 400,
    hp: 43,
    attack: 29,
    defense: 131,
    sp_atk: 29,
    sp_def: 131,
    speed: 37,
  },
  {
    national_number: "791",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/solgaleo.png",
      large: "https://img.pokemondb.net/artwork/solgaleo.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/solgaleo.gif",
    },
    name: "Solgaleo",
    type: [types.psychic, types.steel],
    total: 680,
    hp: 137,
    attack: 137,
    defense: 107,
    sp_atk: 113,
    sp_def: 89,
    speed: 97,
  },
  {
    national_number: "792",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lunala.png",
      large: "https://img.pokemondb.net/artwork/lunala.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/lunala.gif",
    },
    name: "Lunala",
    type: [types.psychic, types.ghost],
    total: 680,
    hp: 137,
    attack: 113,
    defense: 89,
    sp_atk: 137,
    sp_def: 107,
    speed: 97,
  },
  {
    national_number: "793",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nihilego.png",
      large: "https://img.pokemondb.net/artwork/nihilego.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/nihilego.gif",
    },
    name: "Nihilego",
    type: [types.rock, types.poison],
    total: 570,
    hp: 109,
    attack: 53,
    defense: 47,
    sp_atk: 127,
    sp_def: 131,
    speed: 103,
  },
  {
    national_number: "794",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/buzzwole.png",
      large: "https://img.pokemondb.net/artwork/buzzwole.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/buzzwole.gif",
    },
    name: "Buzzwole",
    type: [types.bug, types.fighting],
    total: 570,
    hp: 107,
    attack: 139,
    defense: 139,
    sp_atk: 53,
    sp_def: 53,
    speed: 79,
  },
  {
    national_number: "795",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pheromosa.png",
      large: "https://img.pokemondb.net/artwork/pheromosa.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pheromosa.gif",
    },
    name: "Pheromosa",
    type: [types.bug, types.fighting],
    total: 570,
    hp: 71,
    attack: 137,
    defense: 37,
    sp_atk: 137,
    sp_def: 37,
    speed: 151,
  },
  {
    national_number: "796",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/xurkitree.png",
      large: "https://img.pokemondb.net/artwork/xurkitree.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/xurkitree.gif",
    },
    name: "Xurkitree",
    type: [types.electric],
    total: 570,
    hp: 83,
    attack: 89,
    defense: 71,
    sp_atk: 173,
    sp_def: 71,
    speed: 83,
  },
  {
    national_number: "797",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/celesteela.png",
      large: "https://img.pokemondb.net/artwork/celesteela.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/celesteela.gif",
    },
    name: "Celesteela",
    type: [types.steel, types.flying],
    total: 570,
    hp: 97,
    attack: 101,
    defense: 103,
    sp_atk: 107,
    sp_def: 101,
    speed: 61,
  },
  {
    national_number: "798",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kartana.png",
      large: "https://img.pokemondb.net/artwork/kartana.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/kartana.gif",
    },
    name: "Kartana",
    type: [types.grass, types.steel],
    total: 570,
    hp: 59,
    attack: 181,
    defense: 131,
    sp_atk: 59,
    sp_def: 31,
    speed: 109,
  },
  {
    national_number: "799",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/guzzlord.png",
      large: "https://img.pokemondb.net/artwork/guzzlord.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/guzzlord.gif",
    },
    name: "Guzzlord",
    type: [types.dark, types.dragon],
    total: 570,
    hp: 223,
    attack: 101,
    defense: 53,
    sp_atk: 97,
    sp_def: 53,
    speed: 43,
  },
  {
    national_number: "800",
    evolution: { name: "Dusk Mane Necrozma" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/necrozma.png",
      large: "https://img.pokemondb.net/artwork/necrozma.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/necrozma.gif",
    },
    name: "Necrozma",
    type: [types.psychic, types.steel],
    total: 680,
    hp: 97,
    attack: 157,
    defense: 127,
    sp_atk: 113,
    sp_def: 109,
    speed: 77,
  },
  {
    national_number: "800",
    evolution: { name: "Dawn Wings Necrozma" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/necrozma.png",
      large: "https://img.pokemondb.net/artwork/necrozma.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/necrozma.gif",
    },
    name: "Necrozma",
    type: [types.psychic, types.ghost],
    total: 680,
    hp: 97,
    attack: 113,
    defense: 109,
    sp_atk: 157,
    sp_def: 127,
    speed: 77,
  },
  {
    national_number: "800",
    evolution: { name: "Ultra Necrozma" },
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/necrozma.png",
      large: "https://img.pokemondb.net/artwork/necrozma.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/necrozma.gif",
    },
    name: "Necrozma",
    type: [types.psychic, types.dragon],
    total: 754,
    hp: 97,
    attack: 167,
    defense: 97,
    sp_atk: 167,
    sp_def: 97,
    speed: 129,
  },
  {
    national_number: "800",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/necrozma.png",
      large: "https://img.pokemondb.net/artwork/necrozma.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/necrozma.gif",
    },
    name: "Necrozma",
    type: [types.psychic],
    total: 600,
    hp: 97,
    attack: 107,
    defense: 101,
    sp_atk: 127,
    sp_def: 89,
    speed: 79,
  },
  {
    national_number: "801",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/magearna.png",
      large: "https://img.pokemondb.net/artwork/magearna.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/magearna.gif",
    },
    name: "Magearna",
    type: [types.steel, types.fairy],
    total: 600,
    hp: 80,
    attack: 95,
    defense: 115,
    sp_atk: 130,
    sp_def: 115,
    speed: 65,
  },
  {
    national_number: "802",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/marshadow.png",
      large: "https://img.pokemondb.net/artwork/marshadow.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/marshadow.gif",
    },
    name: "Marshadow",
    type: [types.fighting, types.ghost],
    total: 600,
    hp: 90,
    attack: 125,
    defense: 80,
    sp_atk: 90,
    sp_def: 90,
    speed: 125,
  },
  {
    national_number: "803",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/poipole.png",
      large: "https://img.pokemondb.net/artwork/poipole.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/poipole.gif",
    },
    name: "Poipole",
    type: [types.poison],
    total: 420,
    hp: 67,
    attack: 73,
    defense: 67,
    sp_atk: 73,
    sp_def: 67,
    speed: 73,
  },
  {
    national_number: "804",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/naganadel.png",
      large: "https://img.pokemondb.net/artwork/naganadel.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/naganadel.gif",
    },
    name: "Naganadel",
    type: [types.poison, types.dragon],
    total: 540,
    hp: 73,
    attack: 73,
    defense: 73,
    sp_atk: 127,
    sp_def: 73,
    speed: 121,
  },
  {
    national_number: "805",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/stakataka.png",
      large: "https://img.pokemondb.net/artwork/stakataka.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/stakataka.gif",
    },
    name: "Stakataka",
    type: [types.rock, types.steel],
    total: 570,
    hp: 61,
    attack: 131,
    defense: 211,
    sp_atk: 53,
    sp_def: 101,
    speed: 13,
  },
  {
    national_number: "806",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/blacephalon.png",
      large: "https://img.pokemondb.net/artwork/blacephalon.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/blacephalon.gif",
    },
    name: "Blacephalon",
    type: [types.fire, types.ghost],
    total: 570,
    hp: 53,
    attack: 127,
    defense: 53,
    sp_atk: 151,
    sp_def: 79,
    speed: 107,
  },
  {
    national_number: "807",
    evolution: null,
    sprites: {
      normal:
        "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zeraora.png",
      large: "https://img.pokemondb.net/artwork/zeraora.jpg",
      animated:
        "https://img.pokemondb.net/sprites/black-white/anim/normal/zeraora.gif",
    },
    name: "Zeraora",
    type: [types.electric],
    total: 600,
    hp: 88,
    attack: 112,
    defense: 75,
    sp_atk: 102,
    sp_def: 80,
    speed: 143,
  },
];
