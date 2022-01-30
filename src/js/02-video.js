import throttle from 'lodash.throttle';

console.log(throttle);
const iframe = document.querySelector('iframe');

const player = new Vimeo.Player(iframe);

const PLAYER_CURRENT_TIME = 'videoplayer-current-time';
const outTimeTarget = localStorage.getItem(PLAYER_CURRENT_TIME);

const onPlay = function (data) {
  const playerSecond = data.seconds;

  localStorage.setItem(PLAYER_CURRENT_TIME, playerSecond);

  console.log(playerSecond);
};

player.on('timeupdate', throttle(onPlay, 1000));

player
  .setCurrentTime(outTimeTarget)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
