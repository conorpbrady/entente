<script lang="ts">
  import { enhance } from '$app/forms'

  const response = await fetch('api/token', {
    method: 'POST',
    body: {
      "username": JSON.stringify(username),
      "password": JSON.stringify(password)
    },
    headers: {"Content-type": "application/json"}
  });


</script>

<form method="POST" use:enhance>

<label for="username">Username
<input name="username" type="text" />
</label>

<label for="password">Password
<input name="password" type="password" />
</label>

<input type="submit" value="submit" />
</form>
