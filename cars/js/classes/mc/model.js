class Model
{
    constructor()
    {
        this._score = 0;
        this._soundOn = true;
        this._musicOn = true;
        this._gameOver = false;
    }

    set musicOn(val)
    {
        this._musicOn = val;
        emitter.emit(G.MUSIC_CHANGED,this.musicChanged);
    }

    get musicOn()
    {
        return this._musicOn;
    }


    set soundOn(val)
    {
        this._soundOn = val;
    }

    get soundOn()
    {
        return this._soundOn;
    }

    set gameOver(val)
    {
        this._gameOver = val;
    }

    get gameOver()
    {
        return this._gameOver;
    }

    set score(val)
    {
        this._score = val;
        emitter.emit(G.SCORE_UPDATED);
    }

    get score()
    {
        return this._score;
    }
}
