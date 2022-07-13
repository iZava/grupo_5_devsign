import { http } from "./fetch";

export const DashboardService = {

  getUsers: async (url) => {
    try {
      
      return await http
      
        .get('http://localhost:3001/products/')
        .then((res) => {
          console.log('res', res);
          return res;
          
        })
        .catch((ex) => {
          console.log('http', http)
          console.log('EX',ex);
          return {};
        });
    } catch (err) {
      console.log('Error',err);
      throw Error("Error al obtener usuarios");
    }
  }
}
