export default (state = {}, action ) => {
    switch(action.type){
        case 'SET_TRACK_REQUEST':
            return {
                ...state,
                trackRequest: action.trackRequest
                }
        default:
            return state 
    }
}