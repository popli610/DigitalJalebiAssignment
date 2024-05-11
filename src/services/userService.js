import { axiosinstance } from "../axios";

export const userService = {
  fetchUser: async (query) => {
    try {
      const response = await axiosinstance.get(`/users/search?q=${query}`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  },
};
