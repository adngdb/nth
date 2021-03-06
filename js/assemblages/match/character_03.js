define({
    name: 'Character_03',
    description: 'Playable character 03. Nickname: Punkette. ',
    components: [
        'Animated',
        'AnimationIdle',
        'Displayable',
        'Position',
        'Character',
        'Player',
    ],
    initialState: {
        'Displayable': {
            scaleX: 4,
            scaleY: 4,
        },
        'Character': {
            name: 'Punkette',
            sprite: 'chara_punkette_',
        },
    }
});
