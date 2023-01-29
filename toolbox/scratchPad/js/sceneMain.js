class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() {
        this.load.audio('cat',['audio/meow.mp3','audio/meow.ogg']);
        this.load.spritesheet('boy', 'images/boy.png', { frameWidth: 120, frameHeight: 200 });
    }
    create() {
        this.catSound=this.sound.add('cat');

        this.char = this.add.sprite(0, game.config.height/2, "boy");
        this.char.setInteractive();
        this.char.on('pointerdown',this.onDown,this);
        var frameNames = this.anims.generateFrameNumbers("boy");

        this.anims.create({
            key: "walk",
            frames: frameNames,
            frameRate: 8,
            repeat: -1
        });

        this.char.play('walk');
        this.doWalk();
    }
    doWalk()
    {
        this.tweens.add(
            {
                targets: this.char,
                duration: 5000,
                x: game.config.width,
                y:0,
                alpha:0,
                onComplete: this.onCompleteHandler.bind(this)
            });
    }
    onCompleteHandler(tween,targets,custom)
    {
        var char = targets[0];
        char.x=0;
        char.y=game.config.height/2;
        char.alpha=1;
        this.doWalk();
    }
    onDown()
    {
        this.catSound.play();
    }
    update() {
        
    }
}
