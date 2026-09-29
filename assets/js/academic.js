(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  if (!button) return;
  const apply = (theme) => {
    root.dataset.theme = theme;
    const next = theme === 'dark' ? 'light' : 'dark';
    button.setAttribute('aria-label', `Switch to ${next} theme`);
    button.title = `Switch to ${next} theme`;
    button.firstElementChild.textContent = next === 'light' ? '☀' : '☾';
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#0c141e' : '#f8fafb';
  };
  try {
    const saved = localStorage.getItem('academic-theme');
    if (saved === 'dark' || saved === 'light') apply(saved);
  } catch (_) { /* The switch also works when storage is unavailable. */ }
  button.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    apply(theme);
    try { localStorage.setItem('academic-theme', theme); } catch (_) {}
  });
})();
