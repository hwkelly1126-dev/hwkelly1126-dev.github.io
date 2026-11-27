const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 이전에 설정한 테마 불러오기
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  themeToggle.textContent = '☀️';
}

// 버튼 클릭 시 라이트/다크 모드 전환
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
