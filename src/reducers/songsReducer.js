
 
export default (state = [], action) => {
    switch(action.type){
        case 'SET_SONGS':
            return action.songs
        case 'UP_VOTE':
            return state.map((song) => {
                if (action.id === song.id){
                    console.log(song.votes);
                    return {...song, votes: song.votes+1}
                } else {
                    return song;
                }
            });
        case 'DOWN_VOTE':
            return state.map((song) => {
                if (action.id === song.id && song.votes > 0){
                    return {...song, votes: song.votes-1}
                } else {
                    return song;
                }
            });
        default:
            return state;
    }
}