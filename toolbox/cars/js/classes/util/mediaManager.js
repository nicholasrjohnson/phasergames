class MediaManager
{
	constructor(config)
	{
		this.scene = config.scene;
		emitter.on(G.PLAY_SOUND, this.playSound, this);
	}

	playSound(key)
	{
		if (model.soundOn == true)
		{
			var sound = this.scene.sound.add(key);
			sound.play();
		}
	}
	
	setBackgroundMusic(key)
	{
		if (model.musicOn == true)
		{
			var background = this.scene.sound.add(key,{
				volume: .5,
				loop: true
			});
			background.play();
		}
	}
}
