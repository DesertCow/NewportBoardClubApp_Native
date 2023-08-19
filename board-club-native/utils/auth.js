
import * as SecureStore from 'expo-secure-store';



class AuthService {

  // async login(value) {
  async login(value) {
    await SecureStore.setItemAsync('boardClub_JWT_Token', value);
  }

    async getToken() {
    // return localStorage.getItem('boardClub_JWT_Token');
    return await SecureStore.getItemAsync('boardClub_JWT_Token');
  }
  
}

export default new AuthService();