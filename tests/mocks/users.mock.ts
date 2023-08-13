const userLogin = {
  username: 'Nome Correto',
  password: 'Password Correto'
};

const userLoginWrongUsername = {
  username: 'Nome',
  password: 'Password Correto',
};

const userLoginWrongPassword = {
  username: 'Nome Correto',
  password: 'Password',
};

const userLoginWithoutPassword = {
  username: 'Nome Correto',
  password: '',
};

const userLoginWithoutUsername = {
  username: '',
  password: 'Password Correto',
};

const userComplete = {
  id: 1,
  username: 'Nome Correto',
  password: 'Password Correto',
  vocation: 'teste',
  level: 1,
};

export default {
  userLogin,
  userLoginWithoutPassword,
  userLoginWithoutUsername,
  userLoginWrongPassword,
  userLoginWrongUsername,
  userComplete,
};