
const actualGame = document.getElementById('actualGame');
const _playerAmount = new WeakMap();
const _gameDuration = new WeakMap();

class Game {
    start(gameType) {
        document.getElementById('startMenu').style.display = 'none';
        actualGame.style.display = 'block';

        document.title = `DuDes vs. Dudes - ${gameType} Game`;
        document.body.style.backgroundImage = `url('../../../Audio\ and\ Images/white.png')`;

        _playerAmount.set(this, document.getElementById('selectPlayerAmount').value);
        _gameDuration.set(this, document.getElementById('chooseGameTime').value);

    }
}
const g = new Game;
