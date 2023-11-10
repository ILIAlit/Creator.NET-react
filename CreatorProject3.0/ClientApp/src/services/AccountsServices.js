

export default class AccountsServices {

  async signUp(registerData) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(registerData)
    };
    const response = await fetch(`/api/accounts/register`, options);
    const responseJson = await response.json();
    return(responseJson);
  };

  async signIn(loginData) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(loginData)
    };
    const response = await fetch(`/api/accounts/login`, options);
    const responseJson = await response.json();
    return(responseJson);
  }
}