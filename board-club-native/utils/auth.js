
import * as SecureStore from 'expo-secure-store';
import decode from 'jwt-decode';


class AuthService {

  async getProfile() {

    // return await decode(this.getToken());
    return await decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im1lbWJlckVtYWlsIjoidGVzdDEyQGdtYWlsLmNvbSIsIm1lbWJlckZpcnN0TmFtZSI6IkNsYXl0b24iLCJtZW1iZXJMYXN0TmFtZSI6IlNrYWdncyIsIl9pZCI6IjY0ZTAxMjAzZDJmYTA5ZjVmNjg4MTg0ZCJ9LCJpYXQiOjE2OTI0MDgyOTAsImV4cCI6MTY5MjQ5NDY5MH0.lzlq-AS4Li6Ao4BOJ5DRsQhsiZZ2Y4LxhUl5KJu5mQs");

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