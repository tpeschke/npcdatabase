const initialState = {
    page: null
}

const SET_PAGE = 'SET_PAGE'

export function SETPAGE(url) {
    return {
        type: SET_PAGE,
        payload: url
    }
}

export default function reducer(state = initialState, action) {

    switch(action.type) {
        case SET_PAGE:
            return Object.assign({}, state, {page: action.payload})

        default: return state
    }
}