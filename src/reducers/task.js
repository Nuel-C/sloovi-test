const task = []

const taskReducer = (state = task, action) => {
    switch(action.type){
        case 'ADD_TASK':
            return action.data
        default:
            return state
    }
}

export default taskReducer