import { errorHandler, api } from '../../utils';

export const productService = {
  getAll: async () => {
    try {
      const response = await api.get('/products');

      if ([200, 304].includes(response.status)) {
        return response.data;
      } else {
        const parsedError = response;

        throw new Error(parsedError.response.data.message)
      }
    } catch (error) {
      throw new Error(errorHandler(error.message));
    }
  },
  getById: async id => {
    try {
      const response = await api.get('/products/' + id);

      if ([200, 304].includes(response.status)) {
        return response.data;
      } else {
        const parsedError = response;

        throw new Error(parsedError.response.data.message)
      }
    } catch (error) {
      throw new Error(errorHandler(error.message));
    }
  }
}