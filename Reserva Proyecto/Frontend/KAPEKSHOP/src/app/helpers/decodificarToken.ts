import { JwtHelperService } from '@auth0/angular-jwt';
const helper = new JwtHelperService();

const leerToken = () => {

    let token = localStorage.getItem('token');
    if( token ){
        const dec = helper.decodeToken(token)
        return dec
    }
    
    return false;
}


export default leerToken;
