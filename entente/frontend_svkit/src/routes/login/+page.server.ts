import { error, redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ cookie, request }) => {
    const data = await request.formData();
    // fetch data.get('username'), data.get('password)
    const response = await fetch('/api/token', {
      method: "POST",
      body: {
        "username": data.get("username"),
        "password": data.get("password"),
      },
      headers: {"Content-type": "application/json"}
    });

    if(response.ok) {
       redirect(303, '/');
    }
    else {
      error(401, 'Credentials are incorrect');
    }
  }
};
