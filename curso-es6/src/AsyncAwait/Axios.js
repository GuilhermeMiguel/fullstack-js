//AXIOS

import axios from 'axios';

console.log('AXIOS');


class Api {
    static async getUserInfo(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);
        }
        catch(err) {
            console.warn('Erro na Api');
        }

        console.log(response);
    }
}

Api.getUserInfo('GuilhermeMiguel');


