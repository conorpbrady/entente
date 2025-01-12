type LoginInfo = {
  username: string;
  password: string;
}
export default async function submitLogin(loginInfo: LoginInfo): Promise<boolean> {

   const response = await fetch('http://localhost:8080/api/token/',
         {
           headers:
             {'Content-Type': 'application/json'},
           method: 'POST',
           body: JSON.stringify(loginInfo)
         })
   if(response.status === 200) {
        const data = await response.json()
        console.log(data)
        localStorage.setItem('refresh_token', data.refresh)
        localStorage.setItem('access_token', data.access)
        return Promise.resolve(true)
   }
    else {
      return Promise.reject(false)
      }
}
