/**
 * GLADIADOR - Tienda de Calzado (Chinú, Córdoba)
 * Lógica e interactividad de la plataforma sin carrito de compras
 */

// Teléfono de WhatsApp de la tienda (Oficial Gladiador: +57 324 287 9256)
const WHATSAPP_STORE_PHONE = "573242879256"; 
const ASSET_VERSION = "20261009-1";

function versionedAssetUrl(path) {
  return `${path}?v=${ASSET_VERSION}`;
}

// Base de datos de productos destacados
const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Tenis Deportivo",
    category: "Tenis",
    price: 180000,
    priceFormatted: "$ 180.000",
    image: "assets/images/prod-tenis-deportivo.png",
    description: "Diseño ergonómico y ultraligero con suela amortiguada de alto rendimiento. Perfecto para running, entrenamiento diario o un estilo urbano activo.",
    sizes: [37, 38, 39, 40, 41, 42],
    colors: ["Negro / Blanco", "Negro / Dorado"]
  },
  {
    id: 2,
    name: "Colegial Azul con Cordones",
    category: "Colegiales",
    price: 0,
    priceFormatted: "Consultar precio",
    image: "assets/images/prod-colegial-azul-cordones.png",
    description: "Zapato colegial azul con cordones blancos, ideal para el uniforme y las actividades de todos los días.",
    sizes: [35, 36, 37, 38, 39, 40, 41],
    colors: ["Azul"]
  },
  {
    id: 11,
    name: "Colegial Rojo con Hebilla",
    category: "Colegiales",
    price: 0,
    priceFormatted: "Consultar precio",
    image: "assets/images/prod-colegial-rojo-hebilla.png",
    description: "Zapato colegial rojo con tira y hebilla. Consulta por WhatsApp el precio y las tallas disponibles.",
    sizes: [35, 36, 37, 38, 39, 40, 41],
    colors: ["Rojo"]
  },
  {
    id: 12,
    name: "Colegial Rojo con Cordones",
    category: "Colegiales",
    price: 0,
    priceFormatted: "Consultar precio",
    image: "assets/images/prod-colegial-rojo-cordones.png",
    description: "Zapato colegial rojo con cordones blancos. Consulta por WhatsApp el precio y las tallas disponibles.",
    sizes: [35, 36, 37, 38, 39, 40, 41],
    colors: ["Rojo"]
  },
  {
    id: 13,
    name: "Colegial Negro con Hebilla",
    category: "Colegiales",
    price: 0,
    priceFormatted: "Consultar precio",
    image: "assets/images/prod-colegial-negro-hebilla.png",
    description: "Zapato colegial negro con tira y hebilla. Consulta por WhatsApp el precio y las tallas disponibles.",
    sizes: [35, 36, 37, 38, 39, 40, 41],
    colors: ["Negro"]
  },
  {
    id: 3,
    name: "Mercurial Dorado / Verde",
    category: "Mercuriales",
    price: 0,
    priceFormatted: "Consultar precio",
    image: "assets/images/prod-mercurial-dorado-verde.png",
    description: "Modelo de fútbol en tonos dorados y verdes. Consulta por WhatsApp el precio y las tallas disponibles.",
    sizes: [35, 36, 37, 38, 39, 40, 41],
    colors: ["Dorado / Verde"]
  },
  {
    id: 7,
    name: "Mercurial Azul",
    category: "Mercuriales",
    price: 0,
    priceFormatted: "Consultar precio",
    image: "assets/images/prod-mercurial-azul.png",
    description: "Modelo de fútbol en tonos azules, negros y blancos. Consulta por WhatsApp el precio y las tallas disponibles.",
    sizes: [35, 36, 37, 38, 39, 40, 41],
    colors: ["Azul / Negro / Blanco"]
  },
  {
    id: 8,
    name: "Mercurial Negro / Azul",
    category: "Mercuriales",
    price: 0,
    priceFormatted: "Consultar precio",
    image: "assets/images/prod-mercurial-negro-azul.png",
    description: "Modelo de fútbol en tonos negros y azules. Consulta por WhatsApp el precio y las tallas disponibles.",
    sizes: [35, 36, 37, 38, 39, 40, 41],
    colors: ["Negro / Azul"]
  },
  {
    id: 9,
    name: "Mercurial Plata / Verde",
    category: "Mercuriales",
    price: 0,
    priceFormatted: "Consultar precio",
    image: "assets/images/prod-mercurial-plata-verde.png",
    description: "Modelo de fútbol en tonos plata y verdes. Consulta por WhatsApp el precio y las tallas disponibles.",
    sizes: [35, 36, 37, 38, 39, 40, 41],
    colors: ["Plata / Verde"]
  },
  {
    id: 10,
    name: "Mercurial Negro / Azul Estrellas",
    category: "Mercuriales",
    price: 0,
    priceFormatted: "Consultar precio",
    image: "assets/images/prod-mercurial-negro-azul-estrellas.png",
    description: "Modelo de fútbol negro con detalles azules y diseño de estrellas. Consulta por WhatsApp el precio y las tallas disponibles.",
    sizes: [35, 36, 37, 38, 39, 40, 41],
    colors: ["Negro / Azul / Blanco"]
  },
  {
    id: 14,
    name: "Tenis Casual Negro con Cordones",
    category: "Casuales",
    price: 0,
    priceFormatted: "Consultar precio",
    image: "assets/images/prod-tenis-casual-negro-cordones.png",
    description: "Tenis casual negro con cordones y acabado clásico. Consulta por WhatsApp el precio y las tallas disponibles.",
    sizes: [36, 37, 38, 39, 40, 41, 42],
    colors: ["Negro"]
  },
  {
    id: 15,
    name: "Tenis Casual Negro Urbano",
    category: "Casuales",
    price: 0,
    priceFormatted: "Consultar precio",
    image: "assets/images/prod-tenis-casual-negro-urbano.png",
    description: "Tenis casual negro de estilo urbano con cordones. Consulta por WhatsApp el precio y las tallas disponibles.",
    sizes: [36, 37, 38, 39, 40, 41, 42],
    colors: ["Negro"]
  },
  {
    id: 6,
    name: "Tenis Infantil",
    category: "Niños",
    price: 120000,
    priceFormatted: "$ 120.000",
    image: "assets/images/prod-tenis-infantil.png",
    description: "Calzado infantil resistente a alto impacto con materiales transpirables y suela flexible. Diseñado para resistir juegos, saltos y aventuras con total seguridad.",
    sizes: [28, 29, 30, 31, 32, 33, 34],
    colors: ["Negro / Amarillo Gladiador", "Azul / Rojo"]
  }
];

// Slides del Hero
const HERO_SLIDES = [
  {
    title: "GLADIADOR",
    subtitle: "PASO A PASO, CON ACTITUD",
    desc: "Los mejores zapatos para cada estilo, cada camino y cada aventura.",
    tagline: "Más que zapatos, es tu estilo de vida",
    image: "assets/images/hero-sneakers.jpg",
    cta: "Explorar Colección"
  },
  {
    title: "COLEGIALES",
    subtitle: "LISTOS PARA CADA DÍA",
    desc: "Calzado clásico para acompañar el uniforme y la jornada escolar.",
    tagline: "Comodidad para aprender y avanzar",
    image: "assets/images/prod-zapato-formal.png",
    cta: "Ver Colegiales"
  },
  {
    title: "MERCURIALES",
    subtitle: "LISTO PARA CADA JUGADA",
    desc: "Calzado deportivo para acompañarte en la cancha con comodidad y estabilidad.",
    tagline: "Domina cada jugada",
    image: "assets/images/prod-mercurial-dorado-verde.png",
    cta: "Ver Mercuriales"
  }
];

// Estado global
let currentSlide = 0;
let selectedProduct = null;
let selectedSize = null;
let favorites = JSON.parse(localStorage.getItem('gladiador_favs') || '[]');

// Inicialización cuando carga el DOM
document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initProductsGrid(PRODUCTS_DATA);
  initCategoryFilters();
  initModalListeners();
  initSearch();
  initNewsletter();
  initMobileMenu();
  initMobileBottomNav();
  updateWishlistCount();
});

/* ==========================================================================
   Hero Slider
   ========================================================================== */
function initHeroSlider() {
  const prevBtn = document.getElementById('heroPrev');
  const nextBtn = document.getElementById('heroNext');
  const dotsContainer = document.getElementById('heroDots');
  const heroSection = document.getElementById('inicio');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
      updateHeroSlide();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % HERO_SLIDES.length;
      updateHeroSlide();
    });
  }

  // Soporte de gestos táctiles (Swipe) para celulares
  if (heroSection) {
    let touchStartX = 0;
    let touchEndX = 0;

    heroSection.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    heroSection.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 45) { // umbral mínimo de deslizamiento
        if (diff < 0) {
          // Deslizar izquierda -> siguiente slide
          currentSlide = (currentSlide + 1) % HERO_SLIDES.length;
        } else {
          // Deslizar derecha -> slide anterior
          currentSlide = (currentSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
        }
        updateHeroSlide();
      }
    }
  }

  // Dots
  if (dotsContainer) {
    dotsContainer.innerHTML = HERO_SLIDES.map((_, i) => `
      <button class="w-3 h-3 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-[#F3A812] w-7' : 'bg-white/40'}"
              onclick="goToSlide(${i})" aria-label="Ir a diapositiva ${i + 1}"></button>
    `).join('');
  }
}

window.goToSlide = function(index) {
  currentSlide = index;
  updateHeroSlide();
};

function updateHeroSlide() {
  const slide = HERO_SLIDES[currentSlide];
  const titleEl = document.getElementById('heroTitle');
  const subEl = document.getElementById('heroSubtitle');
  const descEl = document.getElementById('heroDesc');
  const taglineEl = document.getElementById('heroTagline');
  const dotsContainer = document.getElementById('heroDots');

  if (titleEl) titleEl.innerText = slide.title;
  if (subEl) subEl.innerText = slide.subtitle;
  if (descEl) descEl.innerText = slide.desc;
  if (taglineEl) taglineEl.innerText = slide.tagline;

  if (dotsContainer) {
    const dots = dotsContainer.querySelectorAll('button');
    dots.forEach((dot, idx) => {
      if (idx === currentSlide) {
        dot.className = "w-7 h-3 rounded-full bg-[#F3A812] transition-all duration-300";
      } else {
        dot.className = "w-3 h-3 rounded-full bg-white/40 transition-all duration-300 hover:bg-white/70";
      }
    });
  }
}

/* ==========================================================================
   Renderizado de Productos Destacados
   ========================================================================== */
function initProductsGrid(products) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  if (products.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-12 text-center text-gray-400">
        <i class="fas fa-box-open text-4xl mb-3 text-gold"></i>
        <p class="text-lg">No encontramos productos en esta categoría por ahora.</p>
        <button onclick="resetCategoryFilter()" class="mt-4 btn-gold text-sm">Ver todos los productos</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = products.map(prod => {
    const isFav = favorites.includes(prod.id);
    return `
      <div class="prod-card" data-category="${prod.category}" data-id="${prod.id}">
        <!-- Wishlist Button -->
        <button class="prod-wishlist-btn ${isFav ? 'active' : ''}" 
                onclick="toggleFavorite(${prod.id}, event)" 
                title="${isFav ? 'Eliminar de favoritos' : 'Añadir a favoritos'}">
          <i class="${isFav ? 'fas fa-heart text-red-500' : 'far fa-heart'}"></i>
        </button>

        <!-- Product Image Container -->
        <div class="prod-img-box cursor-pointer" onclick="openProductModal(${prod.id})">
          <img src="${versionedAssetUrl(prod.image)}" alt="${prod.name}" class="prod-img" loading="lazy">
        </div>

        <!-- Product Info -->
        <div class="prod-info">
          <h3 class="prod-title cursor-pointer hover:text-[#F3A812] transition-colors truncate" onclick="openProductModal(${prod.id})">
            ${prod.name}
          </h3>
          <span class="prod-category">${prod.category}</span>
          <div class="prod-price">${prod.priceFormatted}</div>
          
          <!-- Direct WhatsApp Order Button (Sin Carrito) -->
          <button class="prod-btn-action" onclick="orderViaWhatsAppDirect(${prod.id})">
            <i class="fab fa-whatsapp text-sm sm:text-base"></i>
            <span class="text-[0.7rem] sm:text-xs font-bold leading-none truncate">Pedir por WhatsApp</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   Filtro de Categorías
   ========================================================================== */
function initCategoryFilters() {
  const catCards = document.querySelectorAll('.cat-card');
  catCards.forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.getAttribute('data-cat');
      filterByCategory(cat);
    });
  });

  const resetBtn = document.getElementById('viewAllProductsBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', (e) => {
      e.preventDefault();
      resetCategoryFilter();
    });
  }
}

function filterByCategory(categoryName) {
  const filtered = PRODUCTS_DATA.filter(p => 
    p.category.toLowerCase().includes(categoryName.toLowerCase()) || 
    categoryName.toLowerCase().includes(p.category.toLowerCase())
  );
  
  initProductsGrid(filtered.length > 0 ? filtered : PRODUCTS_DATA);
  
  // Resaltar título
  const title = document.getElementById('featuredTitle');
  if (title) {
    title.innerHTML = `Productos <span class="text-gold">${categoryName}</span>`;
  }

  // Desplazar suavemente a la sección de productos
  const prodSec = document.getElementById('productos');
  if (prodSec) {
    prodSec.scrollIntoView({ behavior: 'smooth' });
  }

  showToast(`Filtrado por: ${categoryName}`);
}

window.resetCategoryFilter = function() {
  initProductsGrid(PRODUCTS_DATA);
  const title = document.getElementById('featuredTitle');
  if (title) {
    title.innerHTML = `Productos <span class="text-gold">Destacados</span>`;
  }
  showToast("Mostrando todos los productos");
};

/* ==========================================================================
   Modal de Detalles de Producto
   ========================================================================== */
function initModalListeners() {
  const modal = document.getElementById('productModal');
  const closeBtn = document.getElementById('closeModalBtn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => closeModal());
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Tecla Escape para cerrar
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

window.openProductModal = function(id) {
  const prod = PRODUCTS_DATA.find(p => p.id === id);
  if (!prod) return;

  selectedProduct = prod;
  selectedSize = prod.sizes[0]; // Talla por defecto

  const modal = document.getElementById('productModal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalPrice = document.getElementById('modalPrice');
  const modalDesc = document.getElementById('modalDesc');
  const sizesContainer = document.getElementById('modalSizes');

  if (modalImg) modalImg.src = versionedAssetUrl(prod.image);
  if (modalTitle) modalTitle.innerText = prod.name;
  if (modalCategory) modalCategory.innerText = `Categoría: ${prod.category}`;
  if (modalPrice) modalPrice.innerText = prod.priceFormatted;
  if (modalDesc) modalDesc.innerText = prod.description;

  // Renderizar tallas disponibles
  if (sizesContainer) {
    sizesContainer.innerHTML = prod.sizes.map(size => `
      <button class="size-btn px-3 py-1.5 rounded-lg border text-sm font-semibold transition-all ${size === selectedSize ? 'border-[#F3A812] bg-[#F3A812] text-black' : 'border-gray-600 text-white hover:border-gray-400'}"
              onclick="selectSize(${size}, this)">
        ${size}
      </button>
    `).join('');
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
};

window.selectSize = function(size, btnElement) {
  selectedSize = size;
  const container = document.getElementById('modalSizes');
  if (container) {
    container.querySelectorAll('.size-btn').forEach(btn => {
      btn.className = "size-btn px-3 py-1.5 rounded-lg border text-sm font-semibold transition-all border-gray-600 text-white hover:border-gray-400";
    });
    btnElement.className = "size-btn px-3 py-1.5 rounded-lg border text-sm font-semibold transition-all border-[#F3A812] bg-[#F3A812] text-black";
  }
};

window.closeModal = function() {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
};

/* ==========================================================================
   Generación de Enlaces de WhatsApp
   ========================================================================== */
window.orderViaWhatsAppDirect = function(id) {
  const prod = PRODUCTS_DATA.find(p => p.id === id);
  if (!prod) return;

  const message = `¡Hola Gladiador! 👋 Me interesa comprar el modelo *${prod.name}* (${prod.priceFormatted}) que vi en su página web. ¿Qué tallas tienen disponibles para entrega en Chinú o envío?`;
  openWhatsAppChat(message);
};

window.confirmModalWhatsAppOrder = function() {
  if (!selectedProduct) return;
  const sizeText = selectedSize ? ` | Talla: *${selectedSize}*` : '';
  const message = `¡Hola Gladiador! 👋 Quiero realizar el pedido de:\n\n👟 *${selectedProduct.name}*\n💰 Precio: *${selectedProduct.priceFormatted}*${sizeText}\n\n¿Me confirman disponibilidad y métodos de pago? ¡Gracias!`;
  
  openWhatsAppChat(message);
  closeModal();
};

function openWhatsAppChat(message) {
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_STORE_PHONE}?text=${encoded}`;
  window.open(url, '_blank');
}

/* ==========================================================================
   Favoritos / Wishlist
   ========================================================================== */
window.toggleFavorite = function(id, event) {
  if (event) event.stopPropagation();

  const index = favorites.indexOf(id);
  if (index > -1) {
    favorites.splice(index, 1);
    showToast("Eliminado de favoritos");
  } else {
    favorites.push(id);
    showToast("¡Añadido a tus favoritos!");
  }

  localStorage.setItem('gladiador_favs', JSON.stringify(favorites));
  updateWishlistCount();
  initProductsGrid(PRODUCTS_DATA);
};

function updateWishlistCount() {
  const countEl = document.getElementById('wishlistCount');
  if (countEl) {
    countEl.innerText = favorites.length;
    countEl.classList.toggle('hidden', favorites.length === 0);
  }
}

/* ==========================================================================
   Buscador Interactivo
   ========================================================================== */
function initSearch() {
  const searchBtn = document.getElementById('searchBtn');
  const searchModal = document.getElementById('searchModal');
  const closeSearch = document.getElementById('closeSearch');
  const searchInput = document.getElementById('searchInput');

  if (searchBtn && searchModal) {
    searchBtn.addEventListener('click', () => {
      searchModal.classList.remove('hidden');
      searchModal.classList.add('flex');
      if (searchInput) {
        searchInput.value = '';
        setTimeout(() => searchInput.focus(), 100);
      }
    });

    if (closeSearch) {
      closeSearch.addEventListener('click', () => {
        searchModal.classList.add('hidden');
        searchModal.classList.remove('flex');
      });
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const results = PRODUCTS_DATA.filter(p => 
          p.name.toLowerCase().includes(query) || 
          p.category.toLowerCase().includes(query)
        );
        renderSearchResults(results);
      });
    }
  }
}

function renderSearchResults(results) {
  const container = document.getElementById('searchResults');
  if (!container) return;

  if (results.length === 0) {
    container.innerHTML = `<p class="text-gray-400 py-4 text-center">No se encontraron productos coincidentes.</p>`;
    return;
  }

  container.innerHTML = results.map(p => `
    <div class="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-800 cursor-pointer transition-colors"
         onclick="openProductModal(${p.id}); document.getElementById('searchModal').classList.add('hidden');">
      <div class="flex items-center gap-3">
        <img src="${versionedAssetUrl(p.image)}" alt="${p.name}" class="w-12 h-12 object-contain bg-neutral-900 rounded p-1">
        <div>
          <h4 class="font-bold text-white text-sm">${p.name}</h4>
          <span class="text-xs text-gray-400">${p.category}</span>
        </div>
      </div>
      <div class="text-right">
        <span class="text-[#F3A812] font-bold text-sm">${p.priceFormatted}</span>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   Suscripción y Notificaciones Toast
   ========================================================================== */
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast("¡Gracias por suscribirte! Recibirás nuestras promociones exclusivas.");
        input.value = '';
      }
    });
  }
}

function showToast(message) {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.className = "fixed bottom-6 right-6 z-50 bg-[#1A1A1A] text-white border border-[#F3A812] px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 transform translate-y-20 opacity-0 transition-all duration-300";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <i class="fas fa-check-circle text-[#F3A812] text-lg"></i>
    <span class="text-sm font-medium">${message}</span>
  `;

  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 3500);
}

/* ==========================================================================
   Menú Móvil
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
      });
    });
  }
}

/* ==========================================================================
   Navegación Inferior Móvil (Detección de Sección Activa)
   ========================================================================== */
function initMobileBottomNav() {
  const bottomItems = document.querySelectorAll('.mobile-bottom-item');
  const sections = ['inicio', 'productos', 'categorias', 'ubicacion'];

  window.addEventListener('scroll', () => {
    let current = 'inicio';
    const scrollPos = window.scrollY + 220;

    sections.forEach(secId => {
      const el = document.getElementById(secId);
      if (el && scrollPos >= el.offsetTop) {
        current = secId;
      }
    });

    bottomItems.forEach(item => {
      const href = item.getAttribute('href');
      if (href && href.startsWith('#')) {
        if (href === `#${current}`) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      }
    });
  }, { passive: true });
}
