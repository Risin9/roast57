/**
 * Add the promise polyfill for IE 11
 */
require ('es6-promise').polyfill();
/**
 * Import vue and vuex
 */
 import Vue from 'vue'

 import Vuex from 'vuex'

 Vue.use( Vuex );

 import { cafes } from './modules/cafes.js';

 export default new Vuex.Store({
     modules: {
        cafes
     }
 })