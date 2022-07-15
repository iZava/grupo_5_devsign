import { http } from "./fetch";

export const DashboardService = {

  getUsers: async () => {
    try {
      
      return await http
      
        .get('http://localhost:3001/users/')
        .then((res) => {
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
  },

  getProducts: async () => {
    try {
      
      return await http
      
        .get('http://localhost:3001/products/')
        .then((res) => {
          return res;
          
        })
        .catch((ex) => {
          console.log('http', http)
          console.log('EX',ex);
          return {};
        });
    } catch (err) {
      console.log('Error',err);
      throw Error("Error al obtener productos");
    }
  },

  getLastProductId: async () => {
    try {
      
      return await http
      
        .get('http://localhost:3001/products/')
        .then((res) => {
          return res;
          
        })
        .catch((ex) => {
          console.log('http', http)
          console.log('EX',ex);
          return {};
        });
    } catch (err) {
      console.log('Error',err);
      throw Error("Error al obtener productos");
    }
  },

  getLastProductDetail: async (id) => {
    try {
      
      return await http
        .get(`http://localhost:3001/products/${id}`)
        .then((res) => {
          return res;
          
        })
        .catch((ex) => {
          console.log('http', http)
          console.log('EX',ex);
          return {};
        });
    } catch (err) {
      console.log('Error',err);
      throw Error("Error al obtener productos");
    }
  },
  getLastUserId: async () => {
    try {
      
      return await http
      
        .get('http://localhost:3001/users/')
        .then((res) => {
          return res;
          
        })
        .catch((ex) => {
          console.log('http', http)
          console.log('EX',ex);
          return {};
        });
    } catch (err) {
      console.log('Error',err);
      throw Error("Error al obtener productos");
    }
  },

  getLastUserDetail: async (id) => {
    try {
      
      return await http
        .get(`http://localhost:3001/users/${id}`)
        .then((res) => {
          return res;
          
        })
        .catch((ex) => {
          console.log('http', http)
          console.log('EX',ex);
          return {};
        });
    } catch (err) {
      console.log('Error',err);
      throw Error("Error al obtener productos");
    }
  }


}
