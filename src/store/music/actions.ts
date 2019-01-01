import * as types from './types';

export default {
    changeCountA({commit}: any, num: any) {
        console.log(num)
        commit(types.CHANGE_COUNTA, num);
    }
}