class Model
{
    constructor()
    {
        this.score = 0;
    }

    set score(val)
    {
        this._score = val;
        console.log("score updated!");
        alert(G.SCORE_UPDATED);
        emitter.emit(G.SCORE_UPDATED);
    }

    get score()
    {
        return this._score;
    }
}
