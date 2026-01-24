document.addEventListener("DOMContentLoaded", () => {
    const html_theme = document.documentElement;
    const theme_btn = document.getElementById('theme-btn');
    const theme_menu = document.getElementById('theme-menu');

    function change_theme(theme) {
        let nextTheme;
        
        if (theme === "auto") {
            nextTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        } else {
            nextTheme = theme;
        }
        
        const currentTheme = html_theme.classList.contains('dark') ? 'dark' : 'light';
        
        if (currentTheme === nextTheme) return;
        
        html_theme.classList.remove('dark', 'light');
        html_theme.classList.add(nextTheme);
    }


    theme_btn.addEventListener("click", () => {
        theme_menu.classList.toggle("open");
    })

    theme_menu.addEventListener("click", (e) => {
        const item = e.target;

        if (!item.dataset.theme) return;
        change_theme(item.dataset.theme)

        theme_menu.classList.toggle("open");
    })
});