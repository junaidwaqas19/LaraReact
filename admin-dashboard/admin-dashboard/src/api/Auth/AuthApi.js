// AuthApi.js
// import axiosInstance from "../axiosSetup"; // Adjust the path based on your project structure


import { useDispatch } from "react-redux";
import axiosInstance from "../../axios";
import { setUser } from "../../store/auth/auth-slice";

export class AuthApi {
  static async signin(email, password,usertype) {
    try {
      const response = await axiosInstance.post("/login", { email, password,usertype });
           
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async signup(email, password) {
    try {
      
      const response = await axiosInstance.post("/signup", { email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async signOut(usertype) {
    try {
      const response = await axiosInstance.post("/logout", { usertype });
  
      // Check if the server response indicates success
      if (response.data && response.data.success) {
        return true;
      } else {
        // Handle other cases or throw an error
        return false;
      }
    } catch (error) {
      throw error;
    }
  }
  
}
