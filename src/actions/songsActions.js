
export const upVote = (id) => ({
    type: 'UP_VOTE',
    id,

});

export const downVote = (id) => ({
    type: 'DOWN_VOTE',
    id,
});

export const setSongs = (songs) => ({
    type: 'SET_SONGS',
    songs
})