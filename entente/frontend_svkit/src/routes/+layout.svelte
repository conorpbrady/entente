<script lang="ts>
  let { children } = $props();
</script>

<nav>
<a href='/'>Home</a>
<a href='/'>Login/Logout</a>
</nav>

{@render children()}
