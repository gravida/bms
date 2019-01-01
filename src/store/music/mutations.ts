import {
    CHANGE_COUNTA
} from './types'
import actions from './actions';

const state = {
    countA: 1
}

const mutations = {
    [CHANGE_COUNTA](state: any, num :any) {
        state.countA = num;
    }
}

const getters = {
    getCountA(state: any) {
        return state.countA;
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}