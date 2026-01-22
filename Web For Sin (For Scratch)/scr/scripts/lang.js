const txt = {
    en: {
        "title-txt": `Scratch Next-Generation Engine -SIN-<br>Development Lead <a href="https://scratch.mit.edu/users/luwarz1024" target="_blank" rel="noopener noreferrer">@luwarz1024</a><br>Supported by <a href="https://scratch.mit.edu/studios/51192952/" target="_blank" rel="noopener noreferrer">Scratcher Federation</a>`,

        "about-title": `About The Future`,

        "rwj-title": `Run with JavaScript`,

        "rwj-txt": `- Make it executable even when written directly in JavaScript.<br>- Enable file distribution.`,

        "rtc-title": `Real-time Chat via API`,

        "rtc-txt": `- Using the -SIN- app enables real-time chat via API`,

        "ve-title": `Various engines`,

        "ve-txt": `- Create engines for anime and games.<br>- Make 3D and online game creation easy.`,

        "faq-1-q": `What is SNGE -SIN-?`,

        "faq-1-a": `It's a Scratch Next-Generation Engine developed by <a href="https://scratch.mit.edu/users/luwarz1024" target="_blank" rel="noopener noreferrer">@luwarz1024</a>.`,

        "faq-2-q": `What is Scratcher Federation?`,

        "faq-2-a": `This is a technology studio operated by <a href="https://scratch.mit.edu/users/riki-kusa" target="_blank" rel="noopener noreferrer">@riki-kusa</a>.`,

        "cu-title": `Contact Us`,

        "cu-txt": `If you have any questions or would like to participate in this project, please contact us.`
    },

    jp: {
        "title-txt": `Scratch Next-Generation Engine -SIN-<br>開発リーダー <a href="https://scratch.mit.edu/users/luwarz1024" target="_blank" rel="noopener noreferrer">@luwarz1024</a><br>支援者 <a href="https://scratch.mit.edu/studios/51192952/" target="_blank" rel="noopener noreferrer">Scratcher Federation</a>`,

        "about-title": `今後の予定について`,

        "rwj-title": `JavaScriptで動かす`,

        "rwj-txt": `- 直接JavaScriptを書いても動かせるようにする。<br>- ファイルの配布をできるようにする。`,

        "rtc-title": `APIを使ってリアルタイムチャット`,

        "rtc-txt": `- -SIN-アプリを使い、外部API経由でリアルタイムチャットを可能にする。`,

        "ve-title": `様々なエンジン`,

        "ve-txt": `- アニメやゲーム用のエンジンを作成する。<br>- 3Dやオンラインゲームの作成を簡単にする。`,

        "faq-1-q": `-SIN-とは何ですか？`,

        "faq-1-a": `<a href="https://scratch.mit.edu/users/luwarz1024" target="_blank" rel="noopener noreferrer">@luwarz1024</a>によって作成されている次世代型Scratchエンジンです。`,

        "faq-2-q": `スクラッチ連盟とは何ですか？`,

        "faq-2-a": `<a href="https://scratch.mit.edu/users/riki-kusa" target="_blank" rel="noopener noreferrer">@riki-kusa</a>によって運営されているScratchの技術スタジオです。`,

        "cu-title": `お問い合わせ`,

        "cu-txt": `ご質問がある場合、またはこのプロジェクトへの参加をご希望の場合は、お問い合わせください。`
    },
};

document.addEventListener("DOMContentLoaded", () => {
    function change_txt(lang) {
        const elements = document.querySelectorAll('[data-key]');
        
        elements.forEach((el) => {
            const key = el.dataset.key;
            el.innerHTML = txt[lang][key];
        });
    };

    const langBtn = document.getElementById('langBtn');
    const langMenu = document.getElementById('lang-menu');
    const lang_html = document.documentElement;

    change_txt(lang_html.classList.contains('jp') ? 'jp' : 'en');

    langBtn.addEventListener("click", () => {
        langMenu.classList.toggle("open");
    });

    langMenu.addEventListener("click", (e) => {
        const item = e.target

        if (!item.dataset.lang) return;
        change_txt(item.dataset.lang);

        langMenu.classList.toggle("open");

    })
});;
