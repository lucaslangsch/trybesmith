const userLogin = {
  username: 'NomeCorreto',
  password: 'PasswordCorreto',
};

const userLoginWrongUsername = {
  username: 'Xablau',
  password: 'PasswordCorreto',
};

const userLoginWrongPassword = {
  username: 'NomeCorreto',
  password: 'PasswordIncorret',
};

const userLoginWithoutPassword = {
  username: 'NomeCorreto',
  password: '',
};

const userLoginWithoutUsername = {
  username: '',
  password: 'PasswordCorreto',
};

const userComplete = {
  id: 1,
  username: 'NomeCorreto',
  password: '$2y$10$AxJ8S02.eZmNZhYkzgzAc.2qL2ymrAhmSLdAfklbk6BNadRm.cMQy',
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