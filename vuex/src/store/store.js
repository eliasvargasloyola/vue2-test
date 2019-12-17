const myStore = new Vuex.Store({
    state: {
        edad: 10,
        profiles: []
    },
    mutations: {
        aumentar(state, n) {
            state.edad += n;
        },
        disminuir(state) {
            state.edad--;
        },
        llenarProfiles(state, profilesAction){
            state.profiles = profilesAction;
        }
    },
    actions: {
        getProfiles: async function ({commit}) {
            const data = await fetch('src/store/dummy.json');
            const profiles = await data.json();
            commit('llenarProfiles', profiles);
        }
    }
});
