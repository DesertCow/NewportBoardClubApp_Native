
import * as SecureStore from 'expo-secure-store';
import decode from 'jwt-decode';


class AuthService {

  async getProfile() {

    //* Get JWT Token from SecureStore
    let token = await SecureStore.getItemAsync("boardClub_JWT_Token")

    //*Decode JWT Token
    let decoded = await decode(token)

    // console.log("Token = " + token)
    // console.log("Token Decode = " + JSON.stringify(decoded))
    
    return decoded

  }

  async login(token) {

    // console.log("Store Token: " + token)
    await SecureStore.setItemAsync("boardClub_JWT_Token", token);

  }

  async getToken() {

    let returnToken = await SecureStore.getItemAsync("boardClub_JWT_Token");
    
    if(returnToken){
      // console.log("Retrived Token: " + returnToken)
      return returnToken
    }
    else{
      console.log("No Data Found!")
    } 
  }

  async logout() {

    await SecureStore.deleteItemAsync("boardClub_JWT_Token")
  }
  
}

export default new AuthService();