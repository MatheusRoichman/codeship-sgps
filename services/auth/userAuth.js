import { api, errorHandler } from "../../utils"

export const userAuth = {
  auth: async (email = '', password = '') => {
    try {
      const response = await api.post("/login", {
        email,
        password
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user_id", response.data.id);
        localStorage.setItem("user_type", response.data.role);

        return response.data;
      } else {
        const parsedError = response;
        
        throw new Error(parsedError.response.data.message)
      }
    } catch (error) {
      throw new Error(errorHandler(error.message))
    }
  },
}