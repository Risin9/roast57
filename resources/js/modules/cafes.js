/**
 * -------------------------------------
 * Vuex modules/cafes.js
 * -------------------------------------
 * The vuex data store for the cafes
 */
import CafeAPI from '../api/cage.js';

export const cafes = {
    state: {
        /**
         * status:
         *  0: waiting load
         *  1: loading
         *  2: success
         *  3：failed
         */
        cafes: [],
        cafesLoadStatus: 0,

        cafe: [],
        cafeLoadStatus: 0
    },

    actions: {
        loadCafes( { commit } ){
            commit( 'setCafesLoadStatus', 1);

            CafeAPI.getCafes()
                .then(function (response) {
                    commit( 'setCafes', response.data);
                    commit( 'setCafesLoadStatus', 2);
                })
                .catch(function () {
                    commit('setCafes', []);
                    commit('setCafesLoadStatus', 3);
                });
        },
        loadCafe( { commit } , data ){
            commit('setCafeLoadStatus', 1);
            
            CafeAPI.getCafe( data.id )
                .then(function ( response ) {
                    commit( 'setCafe', response.data );
                    commit( 'setCafeLoadStatus', 2);
                }).catch(function () {
                    commit( 'setCafe', {});
                    commit( 'setCafeLoadStatus', 3);
                });
        }
    },
    mutations: {
        setCafesLoadStatus( state, status){
            state.cafeLoadStatus = status;
        },
        setCafes( state, cafes ){
            state.cafes = cafes;
        },
        setCafeLoadStatus( state, status){
            state.cafeLoadStatus = status;
        },
        setCafe( state, cafe){
            state.cafe = cafe;
        }
    },
    getters: {
        getCafesLoadStatus( status ){
            return state.cafesLoadStatus;
        },

        getCafes( state ){
            return state.cafes;
        },

        getCafeLoadStatus( state ){
            return state.cafeLoadStatus;
        },

        getCafe( state ){
            return state.cafe;        }
    }
}
