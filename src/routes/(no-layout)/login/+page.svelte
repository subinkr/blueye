<script>
  import { Input, Button } from 'flowbite-svelte'
  import Title from '$lib/components/title.svelte'
</script>

<form method="post" id="login" class={`w-80 flex flex-col justify-center min-h-screen gap-8`}>
  <Title>로그인</Title>
  <Input name="username" autocomplete="username" />
  <Input type="password" name="password" autocomplete="current-password" />
  <Button type="submit">로그인</Button>
  <Button type='button' outline=true href="/">홈으로</Button>
</form>