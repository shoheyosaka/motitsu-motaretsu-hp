// A案・B案で共通して読み込むスクリプト

// スマートフォン用メニューの開閉（メニューがあるページのみ）
const nav = document.getElementById("global-nav");
const menuButton = document.querySelector(".menu-button");

if (nav && menuButton) {
  const setMenuOpen = (open) => {
    nav.classList.toggle("nav-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
  };

  menuButton.addEventListener("click", () => {
    setMenuOpen(!nav.classList.contains("nav-open"));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });
}

// お問い合わせフォーム（送信処理は未実装のため、完了表示の切り替えのみ）
const form = document.getElementById("contact-form");
const formSuccess = document.getElementById("form-success");
const formBack = document.getElementById("form-back");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.hidden = true;
  formSuccess.hidden = false;
});

formBack.addEventListener("click", () => {
  formSuccess.hidden = true;
  form.hidden = false;
});
