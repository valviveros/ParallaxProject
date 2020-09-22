// Se hace importación de la clase AudioPlayer
import {AudioPlayer} from './AudioPlayer'
// Se llama el elemento player, a través de un string por medio del método getElementById el cual recibe un string y nos devuelve el respectivo elemento
const playersEl: HTMLElement = document.getElementById('player');
const players = [];
// Se añade al arreglo un nuevo AudioPlayer
players.push(new AudioPlayer(playersEl));