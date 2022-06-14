import axios from "axios";

export const errorHandler = (error) => {
  const errors = {
    'INVALID_LOGIN': "Credenciais inválidas!",
    'INVALID_DATA': "Dados inválidos. Tente novamente.",
    'MISSING_ID': "ID não informado!"
  };

  return (
    errors[error] ||
    "Ocorreu um erro inesperado. Tente novamente em algum tempo ou contate o suporte."
  );
};

export const api = axios.create({
  baseURL: "http://localhost:3000/api/",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    
    if (token) {
      config.headers.authorization = token;
    } else {
      config.headers.authorization = "";
    }

    return config;
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/login";
      window.localStorage.clear();
    }
    return error;
  }
);

export const validateEmail = (email) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
};

export const validateToken = (token = "") => {
  const valid_token = "Bearer valid_access_token";

  return token === valid_token;
};

export const storage = {
  users: [
    {
      id: 1,
      name: "Matheus Lima User",
      birthDate: "26/04/2006",
      cpf: 12345678901,
      phone: 88997371962,
      email: "roichmankill@gmail.com",
      password: "senha123",
    },
  ],
  companies: [
    {
      id: 1,
      name: "CodeShip",
      cnpj: 10269743000204,
      contact: {
        phone: 88997371962,
        email: "codeshipsoftware@gmail.com",
      },
      admin: {
        name: "Matheus Lima Admin",
        birthDate: "26/04/2006",
        cpf: 12345678902,
        phone: 88997371963,
        email: "roichmankill@gmail.org",
        password: "senha321",
      },
    },
  ],
  orders: [
    {
      id: 1,
      product: 3,
      street: "Rua dos Bobos",
      number: 123,
      complement: "Apto. 101",
      neighbourhood: "Centro",
      status: "PENDENTE",
      payment: "PIX"
    }
  ],
  products: [
    {
      id: 1,
      name: "Ração de Cachorro Médio Porte",
      description:
        "Essa ração de cachorro Pedigree é indicada para cachorros de médio porte de todas as raças.",
      brand: "Pedigree",
      category: "Alimentação",
      price: 19.99,
      weight: "400g",
      company_id: 1,
      picture: "https://m.media-amazon.com/images/I/81SE1Pw7rdL._AC_SY741_.jpg",
    },
    {
      id: 2,
      name: "Ração de Gato Pequeno Porte",
      description:
        "Essa ração de gato Whiskas é indicada para gatos de pequeno porte de todas as raças.",
      brand: "Whiskas",
      category: "Alimentação",
      price: 14.99,
      weight: "400g",
      company_id: 1,
      picture:
        "https://s3-eu-west-1.amazonaws.com/w3.cdn.gpd/large_0d575fa4-9694-485d-8f95-663fceb6c0c4.png",
    },
    {
      id: 3,
      name: "Ração de Gato Pequeno Porte",
      description:
        "Essa ração de gato Whiskas é indicada para gatos de pequeno porte de todas as raças.",
      brand: "Whiskas",
      category: "Alimentação",
      price: 14.99,
      weight: "200g",
      company_id: 1,
      picture:
        "https://s3-eu-west-1.amazonaws.com/w3.cdn.gpd/large_0d575fa4-9694-485d-8f95-663fceb6c0c4.png",
    },
    {
      id: 4,
      name: "Ração PREMIUM de Cachorro Médio Porte",
      description:
        "Essa ração de cachorro Pedigree é indicada para cachorros de médio porte de todas as raças. Tem qualidade PREMIUM!",
      brand: "Pedigree",
      category: "Alimentação",
      price: 29.99,
      weight: "500g",
      company_id: 1,
      picture: "https://m.media-amazon.com/images/I/81SE1Pw7rdL._AC_SY741_.jpg",
    },
    {
      id: 5,
      name: "Ração PREMIUM de Gato Pequeno Porte",
      description:
        "Essa ração de gato Whiskas é indicada para gatos de pequeno porte de todas as raças. Tem qualidade PREMIUM!",
      brand: "Whiskas",
      category: "Alimentação",
      price: 24.99,
      weight: "500g",
      company_id: 1,
      picture:
        "https://s3-eu-west-1.amazonaws.com/w3.cdn.gpd/large_0d575fa4-9694-485d-8f95-663fceb6c0c4.png",
    },
  ],
};
