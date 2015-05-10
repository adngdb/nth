define([
    'global-manager',
    'components/global/input',
    'processors/global/input',
], function(GlobalManager, Input, InputProcessor) {

    var Preloader = function(game) {
        this.background = null;
        this.preloadBar = null;
        this.loadingText = null;
    };

    Preloader.prototype = {

        init: function () {
            GlobalManager.addComponent(Input.name, Input);
            GlobalManager.addProcessor(new InputProcessor(this.game));
        },

        preload: function() {
            this.background = this.add.sprite(this.world.centerX - 162, this.world.centerY + 100, 'preloaderBackground');
            this.preloadBar = this.add.sprite(this.world.centerX - 162, this.world.centerY + 100, 'preloaderBar');
            this.loadingText = this.add.sprite(this.world.centerX - 162, this.world.centerY - 10, 'preloaderText');

            this.load.setPreloadSprite(this.preloadBar);

            /** Game state stuff **/
            this.game.load.spritesheet('chara_fat', 'assets/gfx/chara_fat.png', 64, 96);
            this.game.load.spritesheet('chara_thin', 'assets/gfx/chara_thin.png', 64, 96);
            this.game.load.spritesheet('fx', 'assets/gfx/fx.png', 64, 96);

            // GUI
            this.game.load.image('inGameGUIBarBorder', 'assets/gfx/inGameGUIBarBorder.png');
            this.game.load.image('inGameGUIBarFill', 'assets/gfx/inGameGUIBarFill.png');
            this.game.load.image('inGameGUITimer', 'assets/gfx/inGameGUITimer.png');

            var cacheKey = Phaser.Plugin.Tiled.utils.cacheKey;
            this.game.load.tiledmap(
                cacheKey('level_map', 'tiledmap'),
                'assets/levels/map_01.json',
                null,
                Phaser.Tilemap.TILED_JSON
            );
            this.game.load.image(
                cacheKey('level_map', 'tileset', 'lvl_all'),
                'assets/gfx/lvl_all.png'
            );

            /** Upgrade state stuff **/
            this.game.load.image('upgrade_menu_back_ground', 'assets/gfx/upgrade_menu_back_ground.png');
            this.game.load.image('upgrade_menu_box', 'assets/gfx/upgrade_menu_box.png');
            this.game.load.image('upgrade_menu_foreground', 'assets/gfx/upgrade_menu_foreground.png');
            this.game.load.image('upgrade_menu_middleground', 'assets/gfx/upgrade_menu_middleground.png');

            /** Ambiance music **/
            this.game.load.audio('ambiance_lvl_1', 'assets/sfx/ambiance_lvl_1.ogg');
            this.game.load.audio('ambiance_menu_all', 'assets/sfx/ambiance_menu_all.ogg');
        },

        create: function() {
            // Animate away.
            this.add.tween(this.background)
                .to({alpha: 0}, 800, Phaser.Easing.Linear.None, true);
            this.add.tween(this.loadingText)
                .to({alpha: 0}, 800, Phaser.Easing.Linear.None, true);
            this.add.tween(this.preloadBar)
                .to({alpha: 0}, 800, Phaser.Easing.Linear.None, true)
                .onComplete.add(this.startGame, this);
        },

        startGame: function() {
             this.game.state.start('PlayerChoice');
        }

    };

    return Preloader;
});
