define([
    'entity-manager',
],
function (
    EntityManager
) {
    var Upgrade = function () {
    };

    Upgrade.prototype = {

        update: function () {
        },

        create: function () {
            this.game.add.sprite(0, 0, 'upgrade_menu_back_ground');
            this.game.add.sprite(0, 0, 'upgrade_menu_middleground');
            this.game.add.sprite(0, 0, 'upgrade_menu_foreground');
        },

    };

    return Upgrade;
});