export default (state = {}, action ) => {
    switch(action.type){
        case 'SET_TRACK_REQUEST':
            return {
                ...state,
                trackRequest: action.trackRequest
                }
        case 'SET_URI':
                return {
                    ...state,
                    song: action.uri
                }
        default:
            return state 
    }
}