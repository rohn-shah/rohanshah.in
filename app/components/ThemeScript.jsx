const ThemeScript = () => {
	const themeScript = `
(function() {
  try {
    const savedTheme = localStorage.getItem('theme');
    let theme = 'light';

    if (savedTheme) {
      theme = JSON.parse(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = 'dark';
    }

    document.documentElement.dataset.theme = theme;
  } catch (e) {
    document.documentElement.dataset.theme = 'light';
  }
})();
`;

	return (
		<script
			dangerouslySetInnerHTML={{ __html: themeScript }}
			suppressHydrationWarning
		/>
	);
};

export default ThemeScript;
