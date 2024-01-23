import axiosInstance from "../../axios";
export class UserApi {
  static async UserStore() {
    try {
      const response = await axiosInstance.post('user/store');
      console.log(response.data);
      return response.data;
      
      
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
    }
  }
  static async UserList(){
    try{
       const response =await axiosInstance.get('user');
       return response.data;
    }catch (error){
      console.error('Error:',error);
    }
  }
}

