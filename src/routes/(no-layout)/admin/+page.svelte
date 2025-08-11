<script>
  import { Input, Button, Card } from 'flowbite-svelte'
  import TitleResponsive from '$lib/components/title-responsive.svelte'
  import Title from '$lib/components/title.svelte'
  import { 
    HomeOutline, 
    BuildingOutline, 
    BookOpenOutline, 
    UserOutline, 
    LockOutline,
    BellOutline
  } from 'flowbite-svelte-icons'
</script>

<div class='px-4 md:px-20 w-full'>
  <div class="max-w-4xl mx-auto my-8">
    <Title>관리자 페이지</Title>
    
    <!-- 관리 메뉴 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <a href="/admin/houses" class="block">
        <Card padding="xl" class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
          <div class="flex items-center">
            <BuildingOutline class="w-10 h-10 mr-4 text-blue-600 dark:text-blue-400" />
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">매물 관리</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">매물 등록 및 관리</p>
            </div>
          </div>
        </Card>
      </a>
      
      <a href="/admin/magazines" class="block">
        <Card padding="xl" class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
          <div class="flex items-center">
            <BookOpenOutline class="w-10 h-10 mr-4 text-green-600 dark:text-green-400" />
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">매거진 관리</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">매거진 업로드 및 관리</p>
            </div>
          </div>
        </Card>
      </a>
      
      <a href="/admin/notices" class="block">
        <Card padding="xl" class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
          <div class="flex items-center">
            <BellOutline class="w-10 h-10 mr-4 text-purple-600 dark:text-purple-400" />
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">공지사항 관리</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">공지사항 등록 및 관리</p>
            </div>
          </div>
        </Card>
      </a>
    </div>
    
    <!-- 계정 관리 섹션 -->
    <h2 class="text-xl font-bold mb-6 text-gray-800 dark:text-white border-t pt-6">계정 관리</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <form method="post" action='?/username' id="username" class="flex flex-col gap-4">
        <div class="flex items-center mb-2">
          <UserOutline class="w-5 h-5 mr-2 text-gray-600 dark:text-gray-400" />
          <h3 class="text-lg font-medium">아이디 변경</h3>
        </div>
        <Input name="newUsername" autocomplete="username" placeholder="새 아이디 입력" />
        <Button type="submit">아이디 변경</Button>
      </form>
      
      <form method="post" action='?/password' id="password" class="flex flex-col gap-4">
        <div class="flex items-center mb-2">
          <LockOutline class="w-5 h-5 mr-2 text-gray-600 dark:text-gray-400" />
          <h3 class="text-lg font-medium">비밀번호 변경</h3>
        </div>
        <Input type="password" name="newPassword" autocomplete="new-password" placeholder="새 비밀번호 입력" />
        <Input type="password" name="repeatPassword" autocomplete="new-password" placeholder="새 비밀번호 확인" />
        <Button type="submit">비밀번호 변경</Button>
      </form>
    </div>
  </div>
</div>