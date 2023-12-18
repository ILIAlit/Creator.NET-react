 
export default class ProfileServices {

  async uploadProfile(profileData, token) {
    const options = {
      method: 'POST',
      headers: {
        "Authorization": "Bearer " + token 
      },
      body: profileData
    };
    const response = await fetch(`/api/profiles`, options);
    const responseJson = await response.json();
    return(responseJson);
    };

  async getProfile(userName, token) {
    const options = {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Authorization": "Bearer " + token 
      }
    }
    const response = await fetch(`/api/profiles/${userName}`, options)
    const responseJson = await response.json();
    return(responseJson);
  }
  }
