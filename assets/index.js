const video = document.querySelector ("video");
const button = document.querySelector ("button");
//funcionaria pero no es el metodo correcto
//button.onclick = () => video.play();
//accion prohibida por el navegador
//video.play();

function mediaPlayer  (config) {
  this.media = config.el
};

mediaPlayer.prototype.play = function () {
  if (this.media.paused) {
    this.media.play();
  }else {
    this.media.pause();
  }
};
 const player = new mediaPlayer ({el:video});
 button.onclick = () => player.play();
 video.onclick = () => player.play ();