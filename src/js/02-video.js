import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}
player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
