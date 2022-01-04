type incrementAT = {
    type: 'INCREMENT'
}

type resetAT = {
    type: 'RESET'
}

export type unionAT = incrementAT | resetAT

export type initialStateType = {
    startValue: number
}

let initialState = {
    startValue: 0
}

export const countReducer = (state = initialState, action: unionAT) => {
    switch (action.type) {
        case 'INCREMENT' : {
            return {
                ...state,
                startValue: state.startValue + 1
            }
        }

        case 'RESET' : {
            return {
                ...state,
                startValue: state.startValue = 0
            }
        }

        default:
            return state

    }
}

export const incrementAC = (): incrementAT => {
    return {type: 'INCREMENT'}
}

export const resetAC = (): resetAT => {
    return {type: 'RESET'}
}