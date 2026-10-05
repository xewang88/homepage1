// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Trigger only once
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up, .fade-in').forEach(element => {
    observer.observe(element);
});

// Mock News Data
const newsData = [
    { type: 'notice', tag: '공지', title: '가산스페이스 홈페이지가 새롭게 오픈했습니다.', date: '2026.10.05' },
    { type: 'market', tag: '시황', title: '가산 3단지 신규 지식산업센터 분양 동향 및 전망', date: '2026.10.02' },
    { type: 'news', tag: '뉴스', title: '가산디지털단지 교통망 확충 사업 본격화', date: '2026.09.28' },
    { type: 'market', tag: '시황', title: '스타트업을 위한 소형 섹션오피스 인기 증가', date: '2026.09.20' },
    { type: 'notice', tag: '공지', title: '추석 연휴 휴무 안내 (9/28~9/30)', date: '2026.09.15' }
];

// Populate News Board
const newsListElement = document.getElementById('news-list');

if (newsListElement) {
    newsData.forEach(news => {
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="#none">
                <div class="news-title">
                    <span class="tag ${news.type}">${news.tag}</span>
                    ${news.title}
                </div>
                <span class="news-date">${news.date}</span>
            </a>
        `;
        newsListElement.appendChild(li);
    });
}

// Mobile Menu Toggle (Basic)
const mobileBtn = document.querySelector('.mobile-menu-btn');
if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        alert('모바일 메뉴가 열립니다. (구현 필요)');
    });
}
