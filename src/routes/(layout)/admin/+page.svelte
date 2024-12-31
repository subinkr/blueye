<script>
  import { Input, Button } from 'flowbite-svelte'
  import TitleResponsive from '$lib/components/title-responsive.svelte'
</script>

<div class='px-4 md:px-20 w-full flex flex-col md:flex-row justify-center items-center gap-20 min-h-screen text-center'>
  <form method="post" action='?/username' id="username" class={`w-full flex flex-col justify-center max-h-[50vh] gap-8`}>
    <TitleResponsive>아이디 변경</TitleResponsive>
    <Input name="newUsername" autocomplete="username" placeholder="새 아이디 입력" />
    <Button type="submit">아이디 변경</Button>
  </form>
  <form method="post" action='?/password' id="password" class={`w-full flex flex-col justify-center max-h-[50vh] gap-8`}>
    <TitleResponsive>비밀번호 변경</TitleResponsive>
    <Input type="password" name="newPassword" autocomplete="new-password" placeholder="새 비밀번호 입력" />
    <Input type="password" name="repeatPassword" autocomplete="new-password" placeholder="새 비밀번호 확인" />
    <Button type="submit">비밀번호 변경</Button>
  </form>
</div>