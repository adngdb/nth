define({
    name: 'Character_04',
    description: 'Playable character 04. Nickname: Eva. ',
    components: [
        'Animated',
        'AnimationIdle',
        'Displayable',
        'Position',
        'Character',
        'Player',
    ],
    initialState: {
        'AnimationIdle': {
            keys: [0, 1, 2, 3],
            speed: 8,
        },
        'Displayable': {
            sprite: 'chara_eva',
            scaleX: 4,
            scaleY: 4,
        },
        'Character': {
            name: 'Eva',
        },
    }
});