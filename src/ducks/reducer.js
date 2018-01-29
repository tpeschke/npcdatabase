const initialState = {
    page: null,
    npc: []
}

const SET_PAGE = 'SET_PAGE'
const SET_NPC = 'SET_NPC'

export function SETPAGE(url) {
    return {
        type: SET_PAGE,
        payload: url
    }
}

export function SETNPC(npc) {
    return {
        type: SET_NPC,
        payload: npc
    }
}

export default function reducer(state = initialState, action) {

    switch(action.type) {
        case SET_PAGE:
            return Object.assign({}, state, {page: action.payload})
        case SET_NPC:
            return Object.assign({}, state, {npc: action.payload})

        default: return state
    }
}