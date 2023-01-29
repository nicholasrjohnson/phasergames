class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }

    preload()
    {

    }

    create()
    {
        var gridConfig = {rows: 5, cols: 5, scene: this};
        var alignGrid = new AlignGrid(gridConfig);
        var mediaManager = new MediaManager({scene: this});
        model.gameOver = false;

        this.road = new Road({scene:this});
        this.road.x=game.config.width/2;
        this.road.makeLines();

        this.sb = new ScoreBox({scene:this});
        this.sb.x = game.config.width - 50;
        this.sb.y = 50;

        alignGrid.showNumbers();
        alignGrid.placeAtIndex(4, this.sb);
        
        var sb = new SoundButtons({scene: this});

        model.score = 0;
    }

    update() {
        this.road.moveLines(); 
        this.road.moveObject();
    }
}
