class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("background", "src/images/background.png");
    this.load.spritesheet("ship1", "src/images/ship1.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet("ship2", "src/images/ship2.png", {
      frameWidth: 32,
      frameHeight: 16,
    });
    this.load.spritesheet("ship3", "src/images/ship3.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet("explosion", "src/images/explosion.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet("power-up", "src/images/power-up.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet("player", "src/images/player.png", {
      frameWidth: 16,
      frameHeight: 24,
    });
    this.load.spritesheet("beam", "src/images/beam.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.bitmapFont("pixelFont", "src/font/font.png", "src/font/font.xml");

    this.load.audio("audio_beam", ["src/audio/beam.ogg", "src/audio/beam.mp3"]);
    this.load.audio("audio_explosion", [
      "src/audio/explosion.ogg",
      "src/audio/explosion.mp3",
    ]);
    this.load.audio("audio_pickup", [
      "src/audio/pickup.ogg",
      "src/audio/pickup.mp3",
    ]);
    this.load.audio("music", [
      "src/audio/sci-fi_platformer12.ogg",
      "src/audio/sci-fi_platformer12.mp3",
    ]);
  }

  create() {
    this.add.text(20, 20, "Loading game...");
    this.scene.start("playGame");

    this.anims.create({
      key: "ship1_anim",
      frames: this.anims.generateFrameNumbers("ship1"),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: "ship2_anim",
      frames: this.anims.generateFrameNumbers("ship2"),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: "ship3_anim",
      frames: this.anims.generateFrameNumbers("ship3"),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: "explode",
      frames: this.anims.generateFrameNumbers("explosion"),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true,
    });

    this.anims.create({
      key: "red",
      frames: this.anims.generateFrameNumbers("power-up", {
        start: 0,
        end: 1,
      }),
      frameRate: 5,
      repeat: -1,
    });
    this.anims.create({
      key: "gray",
      frames: this.anims.generateFrameNumbers("power-up", {
        start: 2,
        end: 3,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "thrust",
      frames: this.anims.generateFrameNumbers("player"),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: "beam_anim",
      frames: this.anims.generateFrameNumbers("beam"),
      frameRate: 20,
      repeat: -1,
    });
  }
}
