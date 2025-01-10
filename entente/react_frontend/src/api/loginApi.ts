type LoginInfo = {
  username: string;
  password: string;
}
export default function submitLogin(loginInfo: LoginInfo): string {
   let message = ''

   fetch('http://localhost:8080/api/token/',
         {
           headers:
             {'Content-Type': 'application/json'},
           method: 'POST',
           body: JSON.stringify(loginInfo)
         })
    .then((response) => {
      // do stuff
     localStorage.setItem('refresh_token', response.data.refresh)
     localStorage.setItem('access_token', response.data.access)
     message = "Login Successful"
    })
    .catch((error) => {
      message = "Login Failed"
    });
   return message
}
