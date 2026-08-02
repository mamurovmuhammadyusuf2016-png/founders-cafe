/* ═══════════════════════════════════════════
   FOUNDERS CAFE — interactions
   ═══════════════════════════════════════════ */

'use strict';

/* ── Данные меню (Яндекс Еда / Яндекс Карты) ── */

const MENU = {
  breakfast: {
    label: 'Завтраки',
    emoji: '🍳',
    items: [
      { name: 'Английский завтрак', price: 75000, weight: '450 г', desc: 'Два яйца, сосиски барбекю и всё, что нужно для бодрого утра', img: 'anglijskij-zavtrak.jpg' },
      { name: 'Полезное начало', price: 65000, weight: '600 г', desc: 'Любимый завтрак основателя: блины с творогом и каша', img: 'poleznoe-nachalo.jpg' },
      { name: 'Оладьи', price: 40000, weight: '300 г', desc: 'Пышные, с золотистой корочкой по краям', img: 'oladi.jpg' },
      { name: 'Беляши с фаршем', price: 60000, weight: '350 г', desc: 'Румяные, слегка хрустящие, с сочной начинкой', img: 'belyashi-s-farshem.jpg' },
      { name: 'Беляши с творогом', price: 47000, weight: '350 г', desc: 'Мягкая, пышная основа и нежный творог', img: 'belyashi-s-tvorogom.jpg' },
      { name: 'Овсяная каша', price: 32000, weight: '250 г', desc: 'Нежная, кремовая текстура', img: 'ovsyanaya-kasha.jpg' },
      { name: 'Рисовая каша', price: 32000, weight: '250 г', desc: 'Мягкая и однородная, как в детстве', img: 'risovaya-kasha.jpg' },
      { name: 'Манная каша', price: 32000, weight: '250 г', desc: 'Гладкая, нежная, без комочков', img: 'mannaya-kasha.jpg' },
    ],
  },
  salads: {
    label: 'Салаты',
    emoji: '🥗',
    items: [
      { name: 'Фаундерс салат', price: 65000, weight: '300 г', desc: 'Фирменный сытный мясной салат — визитка кафе', img: 'faunders-salat.jpg' },
      { name: 'Цезарь', price: 70000, weight: '400 г', desc: 'Хруст листьев романо и нежная заправка', img: 'cezar.jpg' },
      { name: 'Греческий салат', price: 80000, weight: '400 г', desc: 'Свежий, яркий вкус с лёгкой кислинкой', img: 'grecheskij-salat.jpg' },
      { name: 'Хрустящие баклажаны', price: 60000, weight: '400 г', desc: 'Золотистая хрустящая корочка', img: 'hrustyaschie-baklazhany.jpg' },
      { name: 'Французский салат', price: 60000, weight: '350 г', desc: 'Нежная свёкла и сочное яблоко', img: 'francuzskij-salat.jpg' },
      { name: 'Мужской каприз', price: 60000, weight: '400 г', desc: 'Классический сытный салат с мясным характером', img: 'muzhskoj-kapriz.jpg' },
      { name: 'Оливье', price: 52000, weight: '300 г', desc: 'Сбалансированный вкус, знакомый каждому', img: 'olive.jpg' },
      { name: 'Смак', price: 45000, weight: '350 г', desc: 'Традиционный сытный салат', img: 'smak.jpg' },
      { name: 'Чирокчи', price: 42000, weight: '400 г', desc: 'Традиционный сытный салат', img: 'chirokchi.jpg' },
      { name: 'Ачик-чучук', price: 30000, weight: '275 г', desc: 'Свежие помидоры и лук — ярко и освежающе', img: 'achik-chuchuk.jpg' },
    ],
  },
  soups: {
    label: 'Супы',
    emoji: '🍜',
    items: [
      { name: 'Шурпа', price: 55000, weight: '350 г', desc: 'Насыщенный мясной вкус и глубокий аромат', img: 'shurpa.jpg' },
      { name: 'Мастава', price: 47000, weight: '350 г', desc: 'Густой суп с насыщенным вкусом', img: 'mastava.jpg' },
      { name: 'Куриный суп', price: 40000, weight: '350 г', desc: 'Лёгкий, прозрачный бульон', img: 'kurinyj-sup.jpg' },
      { name: 'Чечевичный суп', price: 40000, weight: '350 г', desc: 'Плотная, бархатистая текстура', img: 'chechevichnyj-sup.jpg' },
      { name: 'Суп с фрикадельками', price: 40000, weight: '350 г', desc: 'Лёгкий и сытный домашний суп', img: 'frikadelki.jpg' },
    ],
  },
  hot: {
    label: 'Горячее',
    emoji: '🍖',
    items: [
      { name: 'Блюдо от шефа', price: 87000, weight: '350 г', desc: 'Авторское блюдо с нежной телятиной', img: 'blyudo-ot-shefa.jpg' },
      { name: 'Телятина с грибами', price: 85000, weight: '400 г', desc: 'Насыщенный вкус телятины и грибов', img: 'telyatina-s-gribami.jpg' },
      { name: 'Бефстроганов', price: 79000, weight: '450 г', desc: 'Тонкие полоски мяса в нежном соусе', img: 'befstroganov.jpg' },
      { name: 'Манты', price: 75000, weight: '400 г', desc: 'Сочная начинка и тонкое тесто', img: 'manty.jpg' },
      { name: 'Курица с грибами', price: 65000, weight: '350 г', desc: 'Мягкий, сбалансированный вкус', img: 'kurica-s-gribami.jpg' },
      { name: 'Бифштекс говяжий', price: 58000, weight: '450 г', desc: 'Плотная, но нежная текстура', img: 'bifshteks-govyazhij.jpg' },
      { name: 'Бифштекс куриный', price: 54000, weight: '450 г', desc: 'Нежная текстура и лёгкий вкус', img: 'bifshteks-kurinyj.jpg' },
      { name: 'Дульма', price: 54000, weight: '350 г', desc: 'Традиционное блюдо в виноградных листьях', img: 'dulma.jpg' },
    ],
  },
  steaks: {
    label: 'Стейки',
    emoji: '🥩',
    items: [
      { name: 'Медальоны', price: 170000, weight: '400 г', desc: 'Нежнейшие медальоны из отборной говядины', img: 'medalony.jpg' },
      { name: 'Стейк бон-филе', price: 170000, weight: '400 г', desc: 'Нежная, однородная текстура', img: 'stejk-bon-file.jpg' },
      { name: 'Стейк из куриного филе', price: 120000, weight: '400 г', desc: 'Нежный, но упругий — для лёгкого ужина', img: 'stejk-iz-kurinogo-file.jpg' },
    ],
  },
  pizza: {
    label: 'Пицца',
    emoji: '🍕',
    items: [
      { name: 'Пицца от шефа', price: 130000, weight: '500 г', desc: 'Тонкое тесто с хрустящей корочкой', img: 'picca-ot-shefa.jpg' },
      { name: 'Мексиканская', price: 120000, weight: '500 г', desc: 'Остро, ярко, по-мексикански', img: 'meksikanskaya-picca.jpg' },
      { name: 'Пепперони', price: 105000, weight: '500 г', desc: 'Тонкое хрустящее тесто и пикантная пепперони', img: 'pepperoni.jpg' },
      { name: 'Маргарита', price: 95000, weight: '500 г', desc: 'Классика на тонком тесте', img: 'margarita.jpg' },
    ],
  },
  burgers: {
    label: 'Бургеры',
    emoji: '🍔',
    items: [
      { name: 'Бургер с говядиной', price: 72000, weight: '350 г', desc: 'Сочная котлета из рубленой говядины', img: 'burger-s-govyadinoj.jpg' },
      { name: 'Клаб-сэндвич', price: 65000, weight: '400 г', desc: 'Три ломтика поджаренного хлеба и щедрая начинка', img: 'klab-sendvich.jpg' },
      { name: 'Бургер с курицей', price: 62000, weight: '350 г', desc: 'Нежная куриная котлета', img: 'burger-s-kuricej.jpg' },
    ],
  },
  pasta: {
    label: 'Паста',
    emoji: '🍝',
    items: [
      { name: 'Альфредо', price: 87000, weight: '350 г', desc: 'Сливочный соус с бархатистой текстурой', img: 'alfredo.jpg' },
      { name: 'Карбонара', price: 79000, weight: '350 г', desc: 'Насыщенный сливочный вкус', img: 'karbonara.jpg' },
      { name: 'Болоньезе', price: 79000, weight: '350 г', desc: 'Густой мясной соус', img: 'boloneze.jpg' },
    ],
  },
  sides: {
    label: 'Гарниры',
    emoji: '🍟',
    items: [
      { name: 'Картофель по-деревенски', price: 30000, weight: '150 г', desc: 'Дольки со специями', img: 'kartofel-po-derevenski.jpg' },
      { name: 'Картофель фри', price: 25000, weight: '150 г', desc: 'Золотистая хрустящая корочка', img: 'kartofel-fri.jpg' },
      { name: 'Картофельное пюре', price: 20000, weight: '150 г', img: 'pyure.jpg' },
      { name: 'Гречка', price: 20000, weight: '150 г' },
      { name: 'Рис', price: 20000, weight: '150 г' },
      { name: 'Макароны', price: 20000, weight: '150 г' },
    ],
  },
  drinks: {
    label: 'Напитки',
    emoji: '🥤',
    items: [
      { name: 'Energy drink', price: 18000, weight: '500 мл' },
      { name: 'Coca-Cola', price: 12000, weight: '250 мл' },
      { name: 'Coca-Cola Zero', price: 12000, weight: '250 мл' },
      { name: 'Fanta', price: 12000, weight: '250 мл' },
    ],
  },
};

const fmtPrice = (n) => n.toLocaleString('ru-RU').replace(/,/g, ' ') + ' сум';

/* ── Preloader ── */

window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('preloader').classList.add('is-done'), 600);
});

/* ── Навигация ── */

const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
const toTop = document.getElementById('toTop');

window.addEventListener('scroll', () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 40);
  toTop.classList.toggle('is-visible', window.scrollY > 700);
}, { passive: true });

burger.addEventListener('click', () => {
  burger.classList.toggle('is-open');
  navLinks.classList.toggle('is-open');
});

navLinks.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    burger.classList.remove('is-open');
    navLinks.classList.remove('is-open');
  })
);

toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── Параллакс hero (мышь + скролл) ── */

const heroImg = document.getElementById('heroImg');
const hero = document.getElementById('hero');
const finePointer = window.matchMedia('(pointer: fine)').matches;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (finePointer && !reducedMotion) {
  let raf = null;
  hero.addEventListener('mousemove', (e) => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      heroImg.style.transform = `scale(1.08) translate(${-x}px, ${-y}px)`;
      raf = null;
    });
  });
  hero.addEventListener('mouseleave', () => {
    heroImg.style.transform = 'scale(1.08)';
  });
}

/* ── 3D tilt карточки ── */

if (finePointer && !reducedMotion) {
  const bindTilt = (el) => {
    let raf = null;
    el.addEventListener('mousemove', (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateY(${px * 10}deg) rotateX(${-py * 10}deg) translateY(-4px)`;
        raf = null;
      });
    });
    el.addEventListener('mouseleave', () => {
      el.style.transition = 'transform .6s cubic-bezier(.22,1,.36,1)';
      el.style.transform = '';
      setTimeout(() => (el.style.transition = ''), 600);
    });
  };
  document.querySelectorAll('[data-tilt]').forEach(bindTilt);
  // карточки меню создаются динамически — вешаем tilt через делегирование
  window.__bindTilt = bindTilt;
}

/* ── Меню: табы и рендер ── */

const tabsWrap = document.getElementById('menuTabs');
const grid = document.getElementById('menuGrid');

const renderTabs = () => {
  tabsWrap.innerHTML = Object.entries(MENU)
    .map(([key, cat], i) =>
      `<button class="menu-tab${i === 0 ? ' is-active' : ''}" role="tab" data-cat="${key}">${cat.emoji} ${cat.label}</button>`
    )
    .join('');
};

const renderItems = (key) => {
  const cat = MENU[key];
  grid.innerHTML = cat.items
    .map(
      (item, i) => `
      <article class="menu-item${item.img ? ' menu-item--photo' : ''}" style="--i:${i}">
        ${item.img
          ? `<div class="menu-item__media">
               <img src="assets/menu/${item.img}" alt="${item.name}" loading="lazy" width="400" height="300">
               <span class="menu-item__price menu-item__price--tag">${fmtPrice(item.price)}</span>
             </div>`
          : ''}
        <div class="menu-item__body">
          <div class="menu-item__top">
            ${item.img ? '' : `<span class="menu-item__emoji">${cat.emoji}</span>`}
            <span class="menu-item__name">${item.name}</span>
            ${item.img ? '' : `<span class="menu-item__dots"></span><span class="menu-item__price">${fmtPrice(item.price)}</span>`}
          </div>
          ${item.desc ? `<p class="menu-item__desc">${item.desc}</p>` : ''}
          <span class="menu-item__weight">${item.weight}</span>
        </div>
      </article>`
    )
    .join('');
  if (window.__bindTilt) grid.querySelectorAll('.menu-item').forEach(window.__bindTilt);
};

renderTabs();
renderItems('breakfast');

tabsWrap.addEventListener('click', (e) => {
  const btn = e.target.closest('.menu-tab');
  if (!btn) return;
  tabsWrap.querySelectorAll('.menu-tab').forEach((b) => b.classList.remove('is-active'));
  btn.classList.add('is-active');
  renderItems(btn.dataset.cat);
});

/* ── Появление при скролле ── */

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.setProperty('--rd', `${(i % 4) * 0.08}s`);
  revealObserver.observe(el);
});

/* ── Счётчики в карточках ── */

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const start = performance.now();
      const dur = 1400;
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      countObserver.unobserve(el);
    });
  },
  { threshold: 0.6 }
);

document.querySelectorAll('[data-count]').forEach((el) => countObserver.observe(el));

/* ── Полосы рейтинга ── */

const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const fill = entry.target;
      fill.style.width = fill.dataset.width + '%';
      barObserver.unobserve(fill);
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('.bar__fill').forEach((el) => barObserver.observe(el));

/* ── Бегущая строка: дублируем контент для бесшовности ── */

const track = document.getElementById('marqueeTrack');
track.innerHTML += track.innerHTML;

/* ── Год в футере ── */

document.getElementById('year').textContent = new Date().getFullYear();
