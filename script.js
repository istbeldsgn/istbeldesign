// Функция для переключения меню
function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Функция для переключения темы
function toggleTheme() {
    let body = document.body;
    body.classList.toggle("dark");
    body.classList.toggle("light");
    
    // Переключение цветов блоков при изменении темы
    let contentBlocks = document.querySelectorAll('.content-block');
    contentBlocks.forEach(block => {
        block.classList.toggle('dark-theme');
    });
}

// Функция для открытия страницы Википедии при клике на имя или событие
function openWikipediaLink(event) {
    let target = event.target;
    if (target.classList.contains('wiki-link')) {
        window.open(target.getAttribute('data-link'), '_blank');
    }
}

// Добавление обработчиков событий на все элементы с классом 'wiki-link'
document.addEventListener('DOMContentLoaded', () => {
    const wikiLinks = document.querySelectorAll('.wiki-link');
    wikiLinks.forEach(link => {
        link.addEventListener('click', openWikipediaLink);
    });
});
// Функция для анимации появления блоков при прокрутке
function revealOnScroll() {
    let blocks = document.querySelectorAll('.content-block');
    let windowHeight = window.innerHeight;

    blocks.forEach(block => {
        let blockTop = block.getBoundingClientRect().top;

        if (blockTop < windowHeight * 0.85) {
            block.classList.add('visible');
        }
    });
}

// Вызов функции при загрузке и при скролле
document.addEventListener('DOMContentLoaded', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);

// Кнопка "Назад к началу"
const backToTopBtn = document.createElement("button");
backToTopBtn.innerText = "↑ Назад к началу";
backToTopBtn.style.position = "fixed";
backToTopBtn.style.bottom = "20px";
backToTopBtn.style.right = "20px";
backToTopBtn.style.backgroundColor = "#333366";
backToTopBtn.style.color = "white";
backToTopBtn.style.border = "none";
backToTopBtn.style.padding = "10px 20px";
backToTopBtn.style.fontSize = "18px";
backToTopBtn.style.borderRadius = "5px";
backToTopBtn.style.cursor = "pointer";
backToTopBtn.style.transition = "opacity 0.3s ease, transform 0.3s ease";
backToTopBtn.style.opacity = "0";
document.body.appendChild(backToTopBtn);

// Показать кнопку при прокрутке
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTopBtn.style.opacity = "1";
        backToTopBtn.style.transform = "scale(1)";
    } else {
        backToTopBtn.style.opacity = "0";
        backToTopBtn.style.transform = "scale(0.8)";
    }
});

// Прокрутка к началу страницы при клике
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
