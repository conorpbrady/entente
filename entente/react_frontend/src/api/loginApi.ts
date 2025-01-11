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
     .then((response) => response.json())
     .then((data) => {
        console.log(data)
        localStorage.setItem('refresh_token', data.refresh)
        localStorage.setItem('access_token', data.access)
        message = "Login Successful"
     })
    .catch((error) => {
      message = "Login Failed"
    });
   return message
}
