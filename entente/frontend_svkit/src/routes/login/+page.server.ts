export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    // fetch data.get('username'), data.get('password)
    const response = await fetch('api/token', {
      method: "POST",
      body: {
        "username": data.get("username"),
        "password": data.get("password"),
      },
      headers: {"Content-type": "application/json"}
    });

    //if successful, redirect home
    //
    //throw error;
  }
};
