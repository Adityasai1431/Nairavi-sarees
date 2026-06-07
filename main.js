/* NAIRAVI Sarees — Main JavaScript */

const WA_NUMBER = '91XXXXXXXXXX';

/* ═══════════════════════════════════
   DATA — PRODUCTS
═══════════════════════════════════ */
const products = [
  {
    id: 1,
    name: 'Crimson Kanjivaram Silk',
    category: 'Kanjivaram Sarees',
    price: '₹8,500',
    color: 'Crimson',
    description: 'A breathtaking Kanjivaram silk saree with intricate gold zari work and traditional temple border motifs.',
    badge: 'Best Seller',
    fabric: 'Pure Silk',
    occasion: 'Wedding / Festive',
    images: [
      'https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
    ]
  },
  {
    id: 2,
    name: 'Royal Blue Banarasi',
    category: 'Banarasi Sarees',
    price: '₹7,200',
    color: 'Royal Blue',
    description: 'Exquisite Banarasi saree woven with real zari threads. Features floral buta work on a rich royal blue base.',
    badge: 'New Arrival',
    fabric: 'Banarasi Silk',
    occasion: 'Wedding / Reception',
    images: [
      'https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg?auto=compress&cs=tinysrgb&w=600',
    ]
  },
  {
    id: 3,
    name: 'Ivory Chanderi Cotton',
    category: 'Cotton Sarees',
    price: '₹2,800',
    color: 'Ivory',
    description: 'Lightweight Chanderi cotton saree with delicate silver thread work. Perfect for daytime occasions.',
    badge: '',
    fabric: 'Chanderi Cotton',
    occasion: 'Casual / Office',
    images: [
      'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?auto=compress&cs=tinysrgb&w=600',
    ]
  },
  {
    id: 4,
    name: 'Golden Bridal Silk',
    category: 'Wedding Sarees',
    price: '₹15,000',
    color: 'Golden',
    description: 'Opulent bridal saree in pure gold silk with dense zari weaving and heavily embroidered pallu.',
    badge: 'Premium',
    fabric: 'Pure Silk',
    occasion: 'Bridal / Wedding',
    images: [
      'https://images.pexels.com/photos/2531734/pexels-photo-2531734.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
    ]
  },
  {
    id: 5,
    name: 'Peacock Blue Patola',
    category: 'Silk Sarees',
    price: '₹9,800',
    color: 'Peacock Blue',
    description: 'Authentic double-ikat Patola saree with vibrant peacock motifs. A collector\'s treasure.',
    badge: 'Exclusive',
    fabric: 'Patola Silk',
    occasion: 'Festive / Special',
    images: [
      'https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2531734/pexels-photo-2531734.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?auto=compress&cs=tinysrgb&w=600',
    ]
  },
  {
    id: 6,
    name: 'Rose Pink Designer',
    category: 'Designer Sarees',
    price: '₹5,500',
    color: 'Rose Pink',
    description: 'Contemporary designer saree with hand-painted floral motifs and rich embellishments on georgette.',
    badge: 'Trending',
    fabric: 'Georgette',
    occasion: 'Party / Reception',
    images: [
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=600',
    ]
  },
  {
    id: 7,
    name: 'Emerald Green Mysore Silk',
    category: 'Silk Sarees',
    price: '₹6,200',
    color: 'Emerald Green',
    description: 'Classic Mysore silk saree in rich emerald green with traditional gold border and intricate pallu.',
    badge: '',
    fabric: 'Mysore Silk',
    occasion: 'Festive / Puja',
    images: [
      'https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg?auto=compress&cs=tinysrgb&w=600',
    ]
  },
  {
    id: 8,
    name: 'Maroon Party Chiffon',
    category: 'Party Wear Sarees',
    price: '₹3,900',
    color: 'Maroon',
    description: 'Sheer chiffon party wear saree adorned with sequin embroidery and a stunning beaded border.',
    badge: 'Hot Pick',
    fabric: 'Chiffon',
    occasion: 'Party / Cocktail',
    images: [
      'https://images.pexels.com/photos/2531734/pexels-photo-2531734.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
    ]
  },
  {
    id: 9,
    name: 'Saffron Traditional Cotton',
    category: 'Traditional Sarees',
    price: '₹1,950',
    color: 'Saffron',
    description: 'Hand-woven traditional cotton saree in vibrant saffron with contrast temple border in deep maroon.',
    badge: '',
    fabric: 'Handloom Cotton',
    occasion: 'Daily Wear / Puja',
    images: [
      'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?auto=compress&cs=tinysrgb&w=600',
    ]
  },
  {
    id: 10,
    name: 'Pastel Lavender Georgette',
    category: 'Designer Sarees',
    price: '₹4,200',
    color: 'Lavender',
    description: 'Elegant pastel georgette saree with intricate thread embroidery and a delicate lace border.',
    badge: 'New Arrival',
    fabric: 'Georgette',
    occasion: 'Reception / Sangeet',
    images: [
      'https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=600',
    ]
  },
  {
    id: 11,
    name: 'Deep Maroon Bridal Kanchi',
    category: 'Wedding Sarees',
    price: '₹18,500',
    color: 'Maroon',
    description: 'Heirloom-quality bridal Kanchipuram saree with dense gold zari weave and majestic peacock pallu.',
    badge: 'Premium',
    fabric: 'Pure Kanchipuram Silk',
    occasion: 'Bridal / Wedding',
    images: [
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2531734/pexels-photo-2531734.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg?auto=compress&cs=tinysrgb&w=600',
    ]
  },
  {
    id: 12,
    name: 'Teal Blue Pochampally',
    category: 'Traditional Sarees',
    price: '₹3,400',
    color: 'Teal Blue',
    description: 'Authentic Pochampally ikat saree with geometric patterns in teal blue and ivory. A weaving masterpiece.',
    badge: '',
    fabric: 'Handloom Silk Cotton',
    occasion: 'Festive / Casual',
    images: [
      'https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=600',
    ]
  },
  {
    id: 13,
    name: 'Champagne Gold Net',
    category: 'Party Wear Sarees',
    price: '₹5,100',
    color: 'Champagne',
    description: 'Glamorous net saree with all-over sequin work and a heavily embellished border for grand occasions.',
    badge: 'Trending',
    fabric: 'Embroidered Net',
    occasion: 'Party / Festive',
    images: [
      'https://images.pexels.com/photos/2531734/pexels-photo-2531734.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg?auto=compress&cs=tinysrgb&w=600',
    ]
  },
  {
    id: 14,
    name: 'Turquoise Banarasi Brocade',
    category: 'Banarasi Sarees',
    price: '₹8,900',
    color: 'Turquoise',
    description: 'Rich Banarasi brocade saree in vibrant turquoise with gold and silver jangla work throughout.',
    badge: 'Best Seller',
    fabric: 'Banarasi Brocade',
    occasion: 'Wedding / Festive',
    images: [
      'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?auto=compress&cs=tinysrgb&w=600',
    ]
  },
  {
    id: 15,
    name: 'Mustard Linen Handloom',
    category: 'Cotton Sarees',
    price: '₹2,200',
    color: 'Mustard',
    description: 'Breezy linen handloom saree in mustard yellow with a subtle woven pattern and matching blouse piece.',
    badge: '',
    fabric: 'Pure Linen',
    occasion: 'Casual / Office',
    images: [
      'https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2531734/pexels-photo-2531734.jpeg?auto=compress&cs=tinysrgb&w=600',
    ]
  },
  {
    id: 16,
    name: 'Coral Pink Organza',
    category: 'Silk Sarees',
    price: '₹4,600',
    color: 'Coral Pink',
    description: 'Feather-light organza silk saree with hand-embroidered floral motifs and a ruffled pallu.',
    badge: 'New Arrival',
    fabric: 'Organza Silk',
    occasion: 'Party / Reception',
    images: [
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=600',
    ]
  },
  {
    id: 17,
    name: 'Bottle Green Velvet Silk',
    category: 'Designer Sarees',
    price: '₹7,800',
    color: 'Bottle Green',
    description: 'Luxurious velvet silk saree in bottle green with gold embroidery and kundan embellishments.',
    badge: 'Premium',
    fabric: 'Velvet Silk',
    occasion: 'Festive / Special',
    images: [
      'https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg?auto=compress&cs=tinysrgb&w=600',
    ]
  },
  {
    id: 18,
    name: 'Bridal Red Paithani',
    category: 'Wedding Sarees',
    price: '₹12,000',
    color: 'Bridal Red',
    description: 'Traditional Maharashtrian Paithani saree in bridal red with rich peacock pallu woven in golden silk.',
    badge: 'Exclusive',
    fabric: 'Pure Paithani Silk',
    occasion: 'Bridal / Wedding',
    images: [
      'https://images.pexels.com/photos/2531734/pexels-photo-2531734.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
    ]
  },
  {
    id: 19,
    name: 'Silver Grey Tussar',
    category: 'Silk Sarees',
    price: '₹5,800',
    color: 'Silver Grey',
    description: 'Elegant Tussar silk saree in silver grey with hand-painted kalamkari motifs and contrast border.',
    badge: '',
    fabric: 'Tussar Silk',
    occasion: 'Festive / Office',
    images: [
      'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?auto=compress&cs=tinysrgb&w=600',
    ]
  },
  {
    id: 20,
    name: 'Peach Embroidered Chiffon',
    category: 'Party Wear Sarees',
    price: '₹3,600',
    color: 'Peach',
    description: 'Romantic peach chiffon saree with mirror work embroidery, ideal for sangeet and cocktail events.',
    badge: 'Hot Pick',
    fabric: 'Chiffon',
    occasion: 'Party / Sangeet',
    images: [
      'https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=600',
    ]
  },
];

/* ═══════════════════════════════════
   DATA — CATEGORIES
═══════════════════════════════════ */
const categories = [
  { name: 'Silk Sarees',       img: 'https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
  { name: 'Cotton Sarees',     img: 'https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
  { name: 'Banarasi Sarees',   img: 'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
  { name: 'Kanjivaram Sarees', img: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
  { name: 'Wedding Sarees',    img: 'https://images.pexels.com/photos/2531734/pexels-photo-2531734.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
  { name: 'Designer Sarees',   img: 'https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
  { name: 'Party Wear Sarees', img: 'https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
  { name: 'Traditional Sarees',img: 'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
];

/* ═══════════════════════════════════
   DATA — TESTIMONIALS
═══════════════════════════════════ */
const testimonials = [
  {
    name: 'Priya Raghunathan',
    location: 'Chennai, Tamil Nadu',
    text: 'I ordered a Kanjivaram saree for my daughter\'s wedding and the quality was absolutely stunning. The zari work was immaculate and NAIRAVI\'s service through WhatsApp was so convenient!',
    stars: 5,
    img: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Meena Krishnamurthy',
    location: 'Bangalore, Karnataka',
    text: 'Absolutely love my Banarasi saree from NAIRAVI! The colours are vibrant, the silk quality is premium and it arrived exactly as shown. Will definitely order more.',
    stars: 5,
    img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Lakshmi Venkatesh',
    location: 'Coimbatore, Tamil Nadu',
    text: 'The bridal silk saree I bought for my wedding was beyond beautiful. Everyone was asking where I got it from! NAIRAVI truly delivers elegance woven into every thread.',
    stars: 5,
    img: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Deepa Subramaniam',
    location: 'Hyderabad, Telangana',
    text: 'Exceptional quality and prompt WhatsApp support. The designer saree I chose was exactly what I dreamed of. NAIRAVI has become my go-to saree boutique.',
    stars: 5,
    img: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
];

/* ═══════════════════════════════════
   STATE
═══════════════════════════════════ */
let currentSlide = 0;
let slideInterval = null;
let currentFilter = 'all';
let currentSearch = '';
let currentTestimonial = 0;

/* Card image index tracking: productId → currentImgIndex */
const cardImgIndex = {};
products.forEach(p => { cardImgIndex[p.id] = 0; });

/* ═══════════════════════════════════
   LOADING SCREEN
═══════════════════════════════════ */
window.addEventListener('load', () => {
  setTimeout(() => {
    const ls = document.getElementById('loading-screen');
    if (ls) ls.classList.add('hidden');
  }, 2000);
});

/* ═══════════════════════════════════
   NAVBAR — STICKY + HAMBURGER
═══════════════════════════════════ */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // back to top
  const btt = document.getElementById('backToTop');
  if (btt) {
    if (window.scrollY > 400) btt.classList.add('visible');
    else btt.classList.remove('visible');
  }
}, { passive: true });

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('mobile-open');
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('mobile-open');
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const observeNav = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.querySelectorAll('.nav-link').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id);
      });
    }
  });
}, { threshold: 0.35 });

sections.forEach(s => observeNav.observe(s));

/* ═══════════════════════════════════
   HERO SLIDER
═══════════════════════════════════ */
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('sliderDots');

function buildDots() {
  slides.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'dot' + (i === 0 ? ' active' : '');
    btn.setAttribute('aria-label', `Slide ${i + 1}`);
    btn.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(btn);
  });
}

function goToSlide(n) {
  slides[currentSlide].classList.remove('active');
  dotsContainer.children[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dotsContainer.children[currentSlide].classList.add('active');
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

function startAutoSlide() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}

document.getElementById('heroNext').addEventListener('click', () => { nextSlide(); startAutoSlide(); });
document.getElementById('heroPrev').addEventListener('click', () => { prevSlide(); startAutoSlide(); });

// Touch/swipe support
let touchStartX = 0;
const heroSection = document.querySelector('.hero-section');
heroSection.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
heroSection.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {
    diff > 0 ? nextSlide() : prevSlide();
    startAutoSlide();
  }
});

buildDots();
startAutoSlide();

/* ═══════════════════════════════════
   RENDER CATEGORIES
═══════════════════════════════════ */
function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  grid.innerHTML = categories.map(cat => `
    <div class="cat-item reveal" data-cat="${cat.name}" role="button" tabindex="0" aria-label="Filter by ${cat.name}">
      <div class="cat-circle">
        <img src="${cat.img}" alt="${cat.name}" loading="lazy" />
      </div>
      <p class="cat-name">${cat.name}</p>
    </div>
  `).join('');

  grid.querySelectorAll('.cat-item').forEach(item => {
    item.addEventListener('click', () => {
      const cat = item.dataset.cat;
      setFilter(cat);
      document.getElementById('collections').scrollIntoView({ behavior: 'smooth' });
    });
    item.addEventListener('keydown', e => { if (e.key === 'Enter') item.click(); });
  });
}

/* ═══════════════════════════════════
   FILTERING & SEARCH
═══════════════════════════════════ */
function setFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-tag').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
  renderProducts();
}

document.querySelectorAll('.filter-tag').forEach(btn => {
  btn.addEventListener('click', () => {
    currentSearch = '';
    document.getElementById('searchInput').value = '';
    document.getElementById('clearSearch').classList.remove('visible');
    setFilter(btn.dataset.filter);
  });
});

const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearSearch');

searchInput.addEventListener('input', () => {
  currentSearch = searchInput.value.trim().toLowerCase();
  clearBtn.classList.toggle('visible', currentSearch.length > 0);
  renderProducts();
});

clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  currentSearch = '';
  clearBtn.classList.remove('visible');
  renderProducts();
});

// Footer category links
document.querySelectorAll('[data-cat]').forEach(link => {
  if (link.closest('.footer-links')) {
    link.addEventListener('click', e => {
      e.preventDefault();
      setFilter(link.dataset.cat);
      document.getElementById('collections').scrollIntoView({ behavior: 'smooth' });
    });
  }
});

/* ═══════════════════════════════════
   RENDER PRODUCTS
═══════════════════════════════════ */
function getFilteredProducts() {
  return products.filter(p => {
    const matchCat = currentFilter === 'all' || p.category === currentFilter;
    const matchSearch = !currentSearch
      || p.name.toLowerCase().includes(currentSearch)
      || p.category.toLowerCase().includes(currentSearch)
      || p.color.toLowerCase().includes(currentSearch)
      || p.price.toLowerCase().includes(currentSearch);
    return matchCat && matchSearch;
  });
}

function buildWhatsAppUrl(product) {
  const msg = encodeURIComponent(
    `Hello NAIRAVI Sarees,\nI would like to order:\n\nProduct: ${product.name}\nCategory: ${product.category}\nPrice: ${product.price}\n\nPlease provide more details.`
  );
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const noResults = document.getElementById('noResults');
  const filtered = getFilteredProducts();

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';

  grid.innerHTML = filtered.map(product => {
    const imgIdx = cardImgIndex[product.id] || 0;
    const hasMultiple = product.images.length > 1;
    return `
      <article class="product-card reveal" data-id="${product.id}">
        <div class="card-img-wrap">
          <img src="${product.images[imgIdx]}" alt="${product.name}" loading="lazy" />
          ${hasMultiple ? `
            <button class="img-nav img-prev" data-id="${product.id}" aria-label="Previous image">&#8249;</button>
            <button class="img-nav img-next" data-id="${product.id}" aria-label="Next image">&#8250;</button>
            <span class="img-counter">${imgIdx + 1} / ${product.images.length}</span>
          ` : ''}
          ${product.badge ? `<span class="card-badge">${product.badge}</span>` : ''}
        </div>
        <div class="card-body">
          <p class="card-category">${product.category}</p>
          <h3 class="card-name">${product.name}</h3>
          <p class="card-price">${product.price}</p>
          <div class="card-actions">
            <button class="btn-view" data-id="${product.id}">View Details</button>
            <a href="${buildWhatsAppUrl(product)}" target="_blank" class="btn-wa-card">
              <i class="fab fa-whatsapp"></i> Order
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Wire up image navigation
  grid.querySelectorAll('.img-prev, .img-next').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      const product = products.find(p => p.id === id);
      const dir = btn.classList.contains('img-next') ? 1 : -1;
      cardImgIndex[id] = (cardImgIndex[id] + dir + product.images.length) % product.images.length;
      // Update without re-rendering everything
      const card = grid.querySelector(`[data-id="${id}"]`);
      if (card) {
        const img = card.querySelector('.card-img-wrap img');
        const counter = card.querySelector('.img-counter');
        img.src = product.images[cardImgIndex[id]];
        if (counter) counter.textContent = `${cardImgIndex[id] + 1} / ${product.images.length}`;
      }
    });
  });

  // Wire up View Details
  grid.querySelectorAll('.btn-view').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      openModal(id);
    });
  });

  // Trigger reveal on newly added cards
  setTimeout(runReveal, 50);
}

/* ═══════════════════════════════════
   PRODUCT MODAL
═══════════════════════════════════ */
let modalImgIndex = 0;
let modalProduct = null;

function openModal(id) {
  modalProduct = products.find(p => p.id === id);
  modalImgIndex = 0;
  renderModal();
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}

function renderModal() {
  const p = modalProduct;
  const inner = document.getElementById('modalInner');
  inner.innerHTML = `
    <div class="modal-img-section">
      <img id="modalImg" src="${p.images[modalImgIndex]}" alt="${p.name}" />
      ${p.images.length > 1 ? `
        <div class="modal-img-btns">
          ${p.images.map((_, i) => `<button class="modal-img-dot ${i === modalImgIndex ? 'active' : ''}" data-i="${i}"></button>`).join('')}
        </div>
      ` : ''}
    </div>
    <div class="modal-info">
      <p class="modal-eyebrow">${p.category}</p>
      <h2 class="modal-name">${p.name}</h2>
      <p class="modal-price">${p.price}</p>
      <p class="modal-desc">${p.description}</p>
      <div class="modal-details">
        <div class="modal-detail-row"><span>Fabric</span><span>${p.fabric}</span></div>
        <div class="modal-detail-row"><span>Colour</span><span>${p.color}</span></div>
        <div class="modal-detail-row"><span>Occasion</span><span>${p.occasion}</span></div>
      </div>
      <div class="modal-actions">
        <a href="${buildWhatsAppUrl(p)}" target="_blank" class="btn-modal-wa">
          <i class="fab fa-whatsapp"></i> Order on WhatsApp
        </a>
      </div>
    </div>
  `;

  inner.querySelectorAll('.modal-img-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      modalImgIndex = parseInt(dot.dataset.i);
      const img = document.getElementById('modalImg');
      if (img) img.src = p.images[modalImgIndex];
      inner.querySelectorAll('.modal-img-dot').forEach((d, i) => d.classList.toggle('active', i === modalImgIndex));
    });
  });
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('productModal').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ═══════════════════════════════════
   AUTO-SCROLL CAROUSEL
═══════════════════════════════════ */
function renderCarousel() {
  const track = document.getElementById('carouselTrack');
  // Use first 8 products, duplicated for infinite loop effect
  const items = [...products.slice(0, 10), ...products.slice(0, 10)];
  track.innerHTML = items.map(p => `
    <a href="${buildWhatsAppUrl(p)}" target="_blank" class="carousel-item">
      <div class="carousel-img">
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="carousel-info">
        <p class="carousel-name">${p.name}</p>
        <p class="carousel-price">${p.price}</p>
      </div>
    </a>
  `).join('');
}

/* ═══════════════════════════════════
   TESTIMONIALS SLIDER
═══════════════════════════════════ */
function renderTestimonials() {
  const track = document.getElementById('testimonialTrack');
  const dotsEl = document.getElementById('tDots');

  track.innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="t-card-inner">
        <img class="t-avatar" src="${t.img}" alt="${t.name}" loading="lazy" />
        <div class="t-stars">${'★'.repeat(t.stars)}</div>
        <p class="t-text">"${t.text}"</p>
        <p class="t-name">${t.name}</p>
        <p class="t-location">${t.location}</p>
      </div>
    </div>
  `).join('');

  dotsEl.innerHTML = testimonials.map((_, i) =>
    `<button class="dot ${i === 0 ? 'active' : ''}" aria-label="Testimonial ${i + 1}"></button>`
  ).join('');

  dotsEl.querySelectorAll('.dot').forEach((dot, i) => {
    dot.addEventListener('click', () => goToTestimonial(i));
  });

  updateTestimonialPos();
}

function goToTestimonial(n) {
  currentTestimonial = (n + testimonials.length) % testimonials.length;
  updateTestimonialPos();
}

function updateTestimonialPos() {
  const track = document.getElementById('testimonialTrack');
  const dots = document.querySelectorAll('#tDots .dot');
  track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === currentTestimonial));
}

document.getElementById('tNext').addEventListener('click', () => goToTestimonial(currentTestimonial + 1));
document.getElementById('tPrev').addEventListener('click', () => goToTestimonial(currentTestimonial - 1));

setInterval(() => goToTestimonial(currentTestimonial + 1), 6000);

/* ═══════════════════════════════════
   CONTACT FORM → WHATSAPP
═══════════════════════════════════ */
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('cName').value.trim();
  const phone = document.getElementById('cPhone').value.trim();
  const message = document.getElementById('cMessage').value.trim();

  if (!name || !phone || !message) {
    alert('Please fill in all fields before sending.');
    return;
  }

  const msg = encodeURIComponent(
    `Hello NAIRAVI Sarees!\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`
  );
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
});

/* ═══════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════ */
function runReveal() {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
}

/* ═══════════════════════════════════
   BACK TO TOP
═══════════════════════════════════ */
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ═══════════════════════════════════
   SMOOTH SCROLL FOR ANCHOR LINKS
═══════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ═══════════════════════════════════
   INIT
═══════════════════════════════════ */
renderCategories();
renderProducts();
renderCarousel();
renderTestimonials();
runReveal();
