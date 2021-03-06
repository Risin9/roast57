/**
 * Import the Roast API URL from the config
 */

 import { ROAST_CONFIG } from '../config';


 export default {
    /**
     * GET /api/v1/cafes
     */
    getCafes: function () {
        return axios.get(ROAST_CONFIG.API_URL + '/cages');
    },

    /**
     * Get /api/v1/cafes/{cafeID}
     */
    getCafe: function (cafeID) {
        return axios.get( ROAST_CONFIG.API_URL + '/cafes/' + cafeID);
    },

    /**
     * POST /api/v1/cafes
     */
    postNewCafe: function (name, address, city, state, zip) {
        return axios.post(ROAST_CONFIG.API_URL + '/cafes',
        {
            name: name,
            address: address,
            city: city,
            state: state,
            zip: zip
        }
        );
    }
 }