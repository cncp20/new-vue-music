const mutations = {
    'SET_SINGER': function(state, payload) {
        console.log(state, payload);
        state.singer = payload;
    }
}
export default mutations;