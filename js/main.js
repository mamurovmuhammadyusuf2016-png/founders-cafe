/* ═══════════════════════════════════════════
   FOUNDERS CAFE — ordering platform
   ═══════════════════════════════════════════ */

'use strict';

/* ── Telegram-бот для приёма заказов ──
   Заказы получают все, кто нажал Start у @FoundersCafeeBot
   (владелец сознательно публикует токен: бот служебный). */
const BOT_TOKEN = '8869062841:AAElNN9CqplUq-aYCwrw-YC2TLN4ANqxNbs';
const BOT_USERNAME = 'FoundersCafeeBot';
/* сюда можно вписать постоянные chat_id получателей, напр. [123456789] */
const EXTRA_CHAT_IDS = [];

/* ── Каталог (Яндекс Еда) ── */

const MENU = {
  combo: {
    label: 'Комбо',
    emoji: '🎁',
    items: [
      { name: 'Обед основателя', price: 65000, weight: '750 г', img: 'obed-osnovatelya.jpg' },
      { name: 'Полезное начало', price: 65000, weight: '600 г', img: 'poleznoe-nachalo.jpg' },
    ],
  },
  breakfast: {
    label: 'Завтраки',
    emoji: '🍳',
    items: [
      { name: 'Английский завтрак', price: 75000, weight: '450 г', img: 'anglijskij-zavtrak.jpg' },
      { name: 'Оладьи', price: 40000, weight: '300 г', img: 'oladi.jpg' },
      { name: 'Беляши с фаршем', price: 60000, weight: '350 г', img: 'belyashi-s-farshem.jpg' },
      { name: 'Беляши с творогом', price: 47000, weight: '350 г', img: 'belyashi-s-tvorogom.jpg' },
      { name: 'Овсяная каша', price: 32000, weight: '250 г', img: 'ovsyanaya-kasha.jpg' },
      { name: 'Рисовая каша', price: 32000, weight: '250 г', img: 'risovaya-kasha.jpg' },
      { name: 'Манная каша', price: 32000, weight: '250 г', img: 'mannaya-kasha.jpg' },
    ],
  },
  salads: {
    label: 'Салаты',
    emoji: '🥗',
    items: [
      { name: 'Фаундерс салат', price: 65000, weight: '300 г', img: 'faunders-salat.jpg' },
      { name: 'Цезарь', price: 70000, weight: '400 г', img: 'cezar.jpg' },
      { name: 'Греческий салат', price: 80000, weight: '400 г', img: 'grecheskij-salat.jpg' },
      { name: 'Хрустящие баклажаны', price: 60000, weight: '400 г', img: 'hrustyaschie-baklazhany.jpg' },
      { name: 'Французский салат', price: 60000, weight: '350 г', img: 'francuzskij-salat.jpg' },
      { name: 'Мужской каприз', price: 60000, weight: '400 г', img: 'muzhskoj-kapriz.jpg' },
      { name: 'Оливье', price: 52000, weight: '300 г', img: 'olive.jpg' },
      { name: 'Смак', price: 45000, weight: '350 г', img: 'smak.jpg' },
      { name: 'Чирокчи', price: 42000, weight: '400 г', img: 'chirokchi.jpg' },
      { name: 'Ачик-чучук', price: 30000, weight: '275 г', img: 'achik-chuchuk.jpg' },
    ],
  },
  soups: {
    label: 'Супы',
    emoji: '🍜',
    items: [
      { name: 'Шурпа', price: 55000, weight: '350 г', img: 'shurpa.jpg' },
      { name: 'Мастава', price: 47000, weight: '350 г', img: 'mastava.jpg' },
      { name: 'Куриный суп', price: 40000, weight: '350 г', img: 'kurinyj-sup.jpg' },
      { name: 'Чечевичный суп', price: 40000, weight: '350 г', img: 'chechevichnyj-sup.jpg' },
      { name: 'Суп с фрикадельками', price: 40000, weight: '350 г', img: 'frikadelki.jpg' },
    ],
  },
  hot: {
    label: 'Горячее',
    emoji: '🍖',
    items: [
      { name: 'Блюдо от шефа', price: 87000, weight: '350 г', img: 'blyudo-ot-shefa.jpg' },
      { name: 'Телятина с грибами', price: 85000, weight: '400 г', img: 'telyatina-s-gribami.jpg' },
      { name: 'Бефстроганов', price: 79000, weight: '450 г', img: 'befstroganov.jpg' },
      { name: 'Манты', price: 75000, weight: '400 г', img: 'manty.jpg' },
      { name: 'Курица с грибами', price: 65000, weight: '350 г', img: 'kurica-s-gribami.jpg' },
      { name: 'Бифштекс говяжий', price: 58000, weight: '450 г', img: 'bifshteks-govyazhij.jpg' },
      { name: 'Бифштекс куриный', price: 54000, weight: '450 г', img: 'bifshteks-kurinyj.jpg' },
      { name: 'Дульма', price: 54000, weight: '350 г', img: 'dulma.jpg' },
    ],
  },
  steaks: {
    label: 'Стейки',
    emoji: '🥩',
    items: [
      { name: 'Медальоны', price: 170000, weight: '400 г', img: 'medalony.jpg' },
      { name: 'Стейк бон-филе', price: 170000, weight: '400 г', img: 'stejk-bon-file.jpg' },
      { name: 'Стейк из куриного филе', price: 120000, weight: '400 г', img: 'stejk-iz-kurinogo-file.jpg' },
    ],
  },
  pizza: {
    label: 'Пицца',
    emoji: '🍕',
    items: [
      { name: 'Пицца от шефа', price: 130000, weight: '500 г', img: 'picca-ot-shefa.jpg' },
      { name: 'Мексиканская', price: 120000, weight: '500 г', img: 'meksikanskaya-picca.jpg' },
      { name: 'Пепперони', price: 105000, weight: '500 г', img: 'pepperoni.jpg' },
      { name: 'Маргарита', price: 95000, weight: '500 г', img: 'margarita.jpg' },
    ],
  },
  burgers: {
    label: 'Бургеры',
    emoji: '🍔',
    items: [
      { name: 'Бургер с говядиной', price: 72000, weight: '350 г', img: 'burger-s-govyadinoj.jpg' },
      { name: 'Клаб-сэндвич', price: 65000, weight: '400 г', img: 'klab-sendvich.jpg' },
      { name: 'Бургер с курицей', price: 62000, weight: '350 г', img: 'burger-s-kuricej.jpg' },
    ],
  },
  pasta: {
    label: 'Паста',
    emoji: '🍝',
    items: [
      { name: 'Альфредо', price: 87000, weight: '350 г', img: 'alfredo.jpg' },
      { name: 'Карбонара', price: 79000, weight: '350 г', img: 'karbonara.jpg' },
      { name: 'Болоньезе', price: 79000, weight: '350 г', img: 'boloneze.jpg' },
    ],
  },
  sides: {
    label: 'Гарниры',
    emoji: '🍟',
    items: [
      { name: 'Картофель по-деревенски', price: 30000, weight: '150 г', img: 'kartofel-po-derevenski.jpg' },
      { name: 'Картофель фри', price: 25000, weight: '150 г', img: 'kartofel-fri.jpg' },
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

/* индекс товаров: id → товар */
const PRODUCTS = {};
Object.entries(MENU).forEach(([catKey, cat]) => {
  cat.items.forEach((item, i) => {
    const id = `${catKey}-${i}`;
    PRODUCTS[id] = { ...item, id, catKey, emoji: cat.emoji };
  });
});

const fmt = (n) => n.toLocaleString('ru-RU').replace(/,/g, ' ') + ' сум';

/* ═══════════ КОРЗИНА (localStorage) ═══════════ */

let cart = {};
try {
  const saved = JSON.parse(localStorage.getItem('fc_cart') || '{}');
  Object.keys(saved).forEach((id) => { if (PRODUCTS[id]) cart[id] = saved[id]; });
} catch (e) { /* повреждённое хранилище — начинаем с пустой корзины */ }

const saveCart = () => localStorage.setItem('fc_cart', JSON.stringify(cart));
const cartCount = () => Object.values(cart).reduce((s, q) => s + q, 0);
const cartTotal = () => Object.entries(cart).reduce((s, [id, q]) => s + PRODUCTS[id].price * q, 0);

const setQty = (id, qty) => {
  if (qty <= 0) delete cart[id];
  else cart[id] = qty;
  saveCart();
  syncUI(id);
};

/* ═══════════ РЕНДЕР КАТАЛОГА ═══════════ */

const catalog = document.getElementById('catalog');
const catnavScroll = document.getElementById('catnavScroll');

const productControls = (id) => {
  const qty = cart[id] || 0;
  return qty === 0
    ? `<button class="product__add" data-add="${id}" aria-label="Добавить">+</button>`
    : `<div class="stepper">
         <button data-dec="${id}" aria-label="Убрать">−</button>
         <span>${qty}</span>
         <button data-inc="${id}" aria-label="Добавить">+</button>
       </div>`;
};

const renderCatalog = () => {
  catnavScroll.innerHTML = Object.entries(MENU)
    .map(([key, cat]) => `<button class="catnav__link" data-target="${key}">${cat.emoji} ${cat.label}</button>`)
    .join('');

  catalog.innerHTML = Object.entries(MENU)
    .map(([catKey, cat]) => `
      <section class="cat-section" id="cat-${catKey}" data-cat="${catKey}">
        <h2 class="cat-section__title">${cat.emoji} ${cat.label} <small>${cat.items.length}</small></h2>
        <div class="cat-grid">
          ${cat.items.map((item, i) => {
            const id = `${catKey}-${i}`;
            return `
            <article class="product" data-product="${id}" data-name="${item.name.toLowerCase()}">
              ${item.img
                ? `<div class="product__media"><img src="assets/menu/${item.img}" alt="${item.name}" loading="lazy" width="400" height="300"></div>`
                : `<div class="product__media product__media--emoji">${cat.emoji}</div>`}
              <div class="product__body">
                <h3 class="product__name">${item.name}</h3>
                <span class="product__weight">${item.weight}</span>
                <div class="product__foot">
                  <span class="product__price">${fmt(item.price)}</span>
                  <span class="product__controls" data-controls="${id}">${productControls(id)}</span>
                </div>
              </div>
            </article>`;
          }).join('')}
        </div>
      </section>`)
    .join('');
};

renderCatalog();

/* ═══════════ СИНХРОНИЗАЦИЯ UI ═══════════ */

const cartBadge = document.getElementById('cartBadge');
const fabCart = document.getElementById('fabCart');
const fabCount = document.getElementById('fabCount');
const fabTotal = document.getElementById('fabTotal');

const plural = (n) => {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return `${n} позиция`;
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return `${n} позиции`;
  return `${n} позиций`;
};

function syncUI(changedId) {
  const count = cartCount();
  cartBadge.hidden = count === 0;
  cartBadge.textContent = count;

  fabCart.classList.toggle('is-shown', count > 0);
  fabCart.hidden = count === 0;
  fabCount.textContent = plural(count);
  fabTotal.textContent = fmt(cartTotal());

  if (changedId) {
    const holder = document.querySelector(`[data-controls="${changedId}"]`);
    if (holder) holder.innerHTML = productControls(changedId);
  } else {
    document.querySelectorAll('[data-controls]').forEach((holder) => {
      holder.innerHTML = productControls(holder.dataset.controls);
    });
  }

  renderCartItems();
}

/* ═══════════ КЛИКИ ПО КАТАЛОГУ ═══════════ */

document.addEventListener('click', (e) => {
  const add = e.target.closest('[data-add]');
  const inc = e.target.closest('[data-inc]');
  const dec = e.target.closest('[data-dec]');
  if (add) { setQty(add.dataset.add, 1); toast('Добавлено в корзину ✓'); }
  if (inc) setQty(inc.dataset.inc, (cart[inc.dataset.inc] || 0) + 1);
  if (dec) setQty(dec.dataset.dec, (cart[dec.dataset.dec] || 0) - 1);
});

/* ═══════════ НАВИГАЦИЯ ПО КАТЕГОРИЯМ ═══════════ */

const header = document.getElementById('header');
const catnav = document.getElementById('catnav');

catnavScroll.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-target]');
  if (!btn) return;
  const section = document.getElementById(`cat-${btn.dataset.target}`);
  if (!section) return;
  const offset = header.offsetHeight + catnav.offsetHeight + 6;
  window.scrollTo({ top: section.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
});

/* scrollspy: подсвечиваем активную категорию */
const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const key = entry.target.dataset.cat;
      catnavScroll.querySelectorAll('.catnav__link').forEach((l) => {
        const active = l.dataset.target === key;
        l.classList.toggle('is-active', active);
        if (active) l.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
      });
    });
  },
  { rootMargin: '-30% 0px -60% 0px' }
);
document.querySelectorAll('.cat-section').forEach((s) => spy.observe(s));

document.getElementById('logoLink').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ═══════════ ПОИСК ═══════════ */

const searchInput = document.getElementById('searchInput');
const emptySearch = document.getElementById('emptySearch');

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  let anyVisible = false;
  document.querySelectorAll('.cat-section').forEach((section) => {
    let sectionVisible = false;
    section.querySelectorAll('.product').forEach((card) => {
      const match = !q || card.dataset.name.includes(q);
      card.style.display = match ? '' : 'none';
      if (match) sectionVisible = true;
    });
    section.style.display = sectionVisible ? '' : 'none';
    if (sectionVisible) anyVisible = true;
  });
  emptySearch.hidden = anyVisible;
});

/* ═══════════ КОРЗИНА: DRAWER ═══════════ */

const drawer = document.getElementById('drawer');
const backdrop = document.getElementById('drawerBackdrop');
const drawerTitle = document.getElementById('drawerTitle');
const stepCart = document.getElementById('stepCart');
const stepCheckout = document.getElementById('stepCheckout');
const cartItemsEl = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartFoot = document.getElementById('cartFoot');
const cartTotalEl = document.getElementById('cartTotal');
const checkoutTotalEl = document.getElementById('checkoutTotal');

const openDrawer = () => {
  showStep('cart');
  drawer.classList.add('is-open');
  backdrop.hidden = false;
  document.body.style.overflow = 'hidden';
};
const closeDrawer = () => {
  drawer.classList.remove('is-open');
  backdrop.hidden = true;
  document.body.style.overflow = '';
};
const stepDone = document.getElementById('stepDone');

const showStep = (step) => {
  stepCart.hidden = step !== 'cart';
  stepCheckout.hidden = step !== 'checkout';
  stepDone.hidden = step !== 'done';
  drawerTitle.textContent = { cart: 'Корзина', checkout: 'Оформление', done: 'Готово' }[step];
};

document.getElementById('cartBtn').addEventListener('click', openDrawer);
fabCart.addEventListener('click', openDrawer);
document.getElementById('drawerClose').addEventListener('click', closeDrawer);
backdrop.addEventListener('click', closeDrawer);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeDrawer(); });
document.getElementById('toCheckout').addEventListener('click', () => showStep('checkout'));
document.getElementById('backToCart').addEventListener('click', () => showStep('cart'));

function renderCartItems() {
  const ids = Object.keys(cart);
  cartEmpty.style.display = ids.length ? 'none' : '';
  cartFoot.hidden = ids.length === 0;

  cartItemsEl.innerHTML = ids
    .map((id) => {
      const p = PRODUCTS[id];
      const qty = cart[id];
      return `
      <div class="cart-item">
        ${p.img
          ? `<img class="cart-item__img" src="assets/menu/${p.img}" alt="">`
          : `<span class="cart-item__img cart-item__img--emoji">${p.emoji}</span>`}
        <div>
          <div class="cart-item__name">${p.name}</div>
          <div class="cart-item__price">${fmt(p.price * qty)}</div>
        </div>
        <div class="cart-item__right">
          <div class="stepper">
            <button data-dec="${id}">−</button>
            <span>${qty}</span>
            <button data-inc="${id}">+</button>
          </div>
          <button class="cart-item__remove" data-remove="${id}">убрать</button>
        </div>
      </div>`;
    })
    .join('');

  cartTotalEl.textContent = fmt(cartTotal());
  checkoutTotalEl.textContent = fmt(cartTotal());
}

document.addEventListener('click', (e) => {
  const rm = e.target.closest('[data-remove]');
  if (rm) setQty(rm.dataset.remove, 0);
});

/* ═══════════ ОФОРМЛЕНИЕ ЗАКАЗА ═══════════ */

let mode = 'delivery';
const addressField = document.getElementById('addressField');

stepCheckout.querySelectorAll('.segmented__opt').forEach((btn) => {
  btn.addEventListener('click', () => {
    mode = btn.dataset.mode;
    stepCheckout.querySelectorAll('.segmented__opt').forEach((b) => b.classList.toggle('is-active', b === btn));
    addressField.style.display = mode === 'delivery' ? '' : 'none';
  });
});

/* ── отправка в Telegram-бота ── */

const tg = async (method, params = {}, timeoutMs = 10000) => {
  const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/${method}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
    signal: AbortSignal.timeout(timeoutMs),
  });
  return res.json();
};

/* получатели заказов: все, кто писал боту (getUpdates хранит 24 ч),
   + постоянный список + кэш этого устройства */
async function collectRecipients() {
  const ids = new Set(EXTRA_CHAT_IDS);
  try {
    JSON.parse(localStorage.getItem('fc_chats') || '[]').forEach((id) => ids.add(id));
  } catch (e) { /* игнорируем битый кэш */ }
  try {
    const data = await tg('getUpdates', { limit: 100, allowed_updates: ['message', 'my_chat_member'] });
    if (data.ok) {
      data.result.forEach((u) => {
        const chat = u.message?.chat || u.my_chat_member?.chat;
        if (!chat) return;
        if (u.my_chat_member && ['left', 'kicked'].includes(u.my_chat_member.new_chat_member?.status)) {
          ids.delete(chat.id);
          return;
        }
        ids.add(chat.id);
      });
    }
  } catch (e) { /* сеть недоступна — используем кэш */ }
  const list = [...ids];
  if (list.length) localStorage.setItem('fc_chats', JSON.stringify(list));
  return list;
}

stepCheckout.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('fName');
  const phone = document.getElementById('fPhone');
  const address = document.getElementById('fAddress');
  const comment = document.getElementById('fComment').value.trim();

  let valid = true;
  [name, phone].forEach((f) => {
    const ok = f.value.trim().length > 1;
    f.classList.toggle('is-invalid', !ok);
    if (!ok) valid = false;
  });
  if (mode === 'delivery') {
    const ok = address.value.trim().length > 3;
    address.classList.toggle('is-invalid', !ok);
    if (!ok) valid = false;
  }
  if (!valid) { toast('Заполните обязательные поля'); return; }
  if (cartCount() === 0) { toast('Корзина пуста'); return; }

  const lines = Object.keys(cart).map((id) => {
    const p = PRODUCTS[id];
    return `• ${p.name} × ${cart[id]} — ${fmt(p.price * cart[id])}`;
  });

  const orderNo = Date.now().toString(36).slice(-5).toUpperCase();
  const text = [
    `🛒 Новый заказ #${orderNo} — Founders Cafe`,
    '',
    ...lines,
    '',
    `💰 Итого: ${fmt(cartTotal())}`,
    `👤 ${name.value.trim()}`,
    `📞 ${phone.value.trim()}`,
    mode === 'delivery' ? `🛵 Доставка: ${address.value.trim()}` : '🏃 Самовывоз (Навои, 11А)',
    comment ? `💬 ${comment}` : '',
  ].filter(Boolean).join('\n');

  const submitBtn = document.getElementById('submitOrder');
  submitBtn.classList.add('is-loading');
  submitBtn.textContent = 'Отправляем…';

  const recipients = await collectRecipients();
  let delivered = 0;
  if (recipients.length) {
    const results = await Promise.allSettled(
      recipients.map((chatId) => tg('sendMessage', { chat_id: chatId, text }))
    );
    delivered = results.filter((r) => r.status === 'fulfilled' && r.value.ok).length;
  }

  submitBtn.classList.remove('is-loading');
  submitBtn.textContent = 'Оформить заказ';

  if (delivered > 0) {
    cart = {};
    saveCart();
    syncUI();
    document.getElementById('doneText').textContent =
      `Заказ #${orderNo} уже у кафе. Мы перезвоним на ${phone.value.trim()} для подтверждения.`;
    showStep('done');
  } else {
    /* бот ещё никем не открыт или сеть недоступна — резервный путь */
    if (navigator.clipboard) navigator.clipboard.writeText(text).catch(() => {});
    window.open(`https://t.me/${BOT_USERNAME}?text=`, '_blank');
    toast('Не удалось отправить автоматически — текст заказа скопирован, отправьте его в чат или позвоните');
  }
});

document.getElementById('newOrder').addEventListener('click', closeDrawer);

/* ═══════════ TOAST ═══════════ */

const toastEl = document.getElementById('toast');
let toastTimer = null;

function toast(msg) {
  toastEl.textContent = msg;
  toastEl.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toastEl.hidden = true; }, 2200);
}

/* ═══════════ INIT ═══════════ */

document.getElementById('year').textContent = new Date().getFullYear();
syncUI();
