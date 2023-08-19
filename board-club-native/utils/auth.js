
import * as SecureStore from 'expo-secure-store';
import decode from 'jwt-decode';


class AuthService {

  async getProfile() {

    return decode(this.getToken());

  }

  // async login(value) {
  async login(token) {
    console.log("Store Token: " + token)
    await SecureStore.setItemAsync('boardClub_JWT_Token', token);
  }

  async getToken() {

    let returnToken = await SecureStore.getItemAsync('boardClub_JWT_Token');
    
    if(returnToken){
      // console.log("Retrived Token: " + returnToken)
      return returnToken
    }
    else{
      console.log("No Data Found!")
    } 
  }
  
}

export default new AuthService();