// 浮遊するハートの生成
function createFloatingPeach() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '🍑';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.fontSize = (Math.random() * 10 + 15) + 'px';

    document.getElementById('floatingHearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// 浮遊するハートの生成
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '🌸';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.style.fontSize = (Math.random() * 10 + 15) + 'px';

    document.getElementById('floatingHearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// 定期的にハートを生成
setInterval(createFloatingPeach, 1000);

setInterval(createFloatingHeart, 1000);

// スクロール時のフェードイン効果
function checkFadeIn() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkFadeIn);
window.addEventListener('load', checkFadeIn);

// 音楽の再生/停止
const audio = document.getElementById('backgroundMusic');

// 音楽自動開始のためのウェルカムモーダル処理
document.getElementById('enterButton').addEventListener('click', function () {
    const modal = document.getElementById('welcomeModal');
    modal.style.opacity = '0';
    modal.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        modal.style.display = 'none';
        // 音楽を自動開始
        startBackgroundMusic();
    }, 500);
});

function startBackgroundMusic() {
    // 音楽ファイルが設定されている場合に自動再生
    if (audio.querySelector('source')) {
        audio.play().then(() => {
            console.log('🎵 音楽が開始されました！');
        }).catch(error => {
            console.log('音楽の自動再生に失敗しました:', error);
        });
    } else {
        console.log('🎵 音楽ファイルを設定してください！');
    }
}

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});