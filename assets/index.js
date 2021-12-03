import mediaPlayer from './mediaPlayer.js';

const video = document.querySelector ("video");
const button = document.querySelector ("button");
//funcionaria pero no es el metodo correcto
//button.onclick = () => video.play();
//accion prohibida por el navegador
//video.play();


 const player = new mediaPlayer ({el:video});
 button.onclick = () => player.play();
 video.onclick = () => player.play ();