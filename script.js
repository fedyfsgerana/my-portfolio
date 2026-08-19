(function initTheme() {
  const saved = localStorage.getItem("theme") || "system";
  applyTheme(saved);
})();

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(mode) {
  const resolved = mode === "system" ? getSystemTheme() : mode;
  document.documentElement.classList.toggle("dark", resolved === "dark");
  updateToggleUI(mode);
}

function setTheme(mode) {
  localStorage.setItem("theme", mode);
  applyTheme(mode);
}

function updateToggleUI(mode) {
  document.querySelectorAll(".theme-btn").forEach((btn) => {
    const isActive = btn.dataset.mode === mode;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  document.querySelectorAll(".theme-dot").forEach((dot) => {
    dot.classList.toggle("active", dot.dataset.mode === mode);
  });
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    const saved = localStorage.getItem("theme") || "system";
    if (saved === "system") applyTheme("system");
  });

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-mode]");
  if (btn) setTheme(btn.dataset.mode);
});

const loader = document.getElementById("loader");
const loaderPct = document.getElementById("loader-pct");

let pct = 0;
const pctInterval = setInterval(() => {
  pct += Math.random() * 12;

  if (pct >= 100) {
    pct = 100;
    clearInterval(pctInterval);
  }

  loaderPct.textContent = Math.floor(pct) + "%";
}, 120);

window.addEventListener("load", () => {
  setTimeout(() => loader.classList.add("hidden"), 1900);
});

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {
  const totalHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = (window.scrollY / totalHeight) * 100 + "%";
});

const navbar = document.getElementById("navbar");
const backTop = document.getElementById("back-top");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);

  if (backTop) backTop.classList.toggle("visible", window.scrollY > 400);
});

if (backTop) {
  const darkSections = document.querySelectorAll("#kontak, footer");

  const btnObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          backTop.classList.add("light");
        } else {
          const anyDark = [...darkSections].some((sec) => {
            const secRect = sec.getBoundingClientRect();
            const btnRect = backTop.getBoundingClientRect();
            return secRect.top < btnRect.bottom && secRect.bottom > btnRect.top;
          });

          if (!anyDark) backTop.classList.remove("light");
        }
      });
    },
    {
      rootMargin: `-${window.innerHeight - 72}px 0px -28px -${window.innerWidth - 72}px`,
    },
  );

  darkSections.forEach((sec) => btnObserver.observe(sec));

  backTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
}

const navLinks = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((l) => l.classList.remove("active"));
      const activeLink = document.querySelector(
        `.nav-link[href="#${entry.target.id}"]`,
      );
      if (activeLink) activeLink.classList.add("active");

      updateBottomNav(entry.target.id);
    });
  },
  {
    rootMargin: "-40% 0px -55% 0px",
    threshold: 0,
  },
);

document
  .querySelectorAll("section[id]")
  .forEach((s) => sectionObserver.observe(s));

const bottomNavItems = document.querySelectorAll(".bottom-nav-item");

function updateBottomNav(sectionId) {
  bottomNavItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.section === sectionId);
  });
}

bottomNavItems.forEach((item) => {
  item.addEventListener("pointerdown", function (e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = e.clientX - rect.left - size / 2 + "px";
    ripple.style.top = e.clientY - rect.top - size / 2 + "px";

    this.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  });
});

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelectorAll(".reveal-word").forEach((word, i) => {
      setTimeout(() => word.classList.add("visible"), i * 100);
    });

    const heroDesc = document.getElementById("hero-desc");
    const heroBtns = document.getElementById("hero-btns");
    const heroSocial = document.getElementById("hero-social");

    setTimeout(() => {
      heroDesc.style.opacity = "1";
      heroDesc.style.transform = "";
    }, 400);
    setTimeout(() => {
      heroBtns.style.opacity = "1";
      heroBtns.style.transform = "";
    }, 550);
    setTimeout(() => {
      heroSocial.style.opacity = "1";
      heroSocial.style.transform = "";
    }, 650);
  }, 2000);
});

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      fadeObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".fade-up").forEach((el) => fadeObserver.observe(el));

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.querySelectorAll(".counter").forEach((el) => {
        const target = +el.dataset.target;
        let current = 0;
        const step = target / 40;

        const timer = setInterval(() => {
          current += step;

          if (current >= target) {
            current = target;
            clearInterval(timer);
          }

          el.textContent = Math.floor(current) + "+";
        }, 40);
      });

      counterObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.5 },
);

document.querySelectorAll(".fade-up").forEach((el) => {
  if (el.querySelector(".counter")) counterObserver.observe(el);
});

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.querySelectorAll(".skill-item").forEach((item, i) => {
        const fill = item.querySelector(".skill-fill");
        const width = item.dataset.width;

        setTimeout(() => {
          fill.style.width = width + "%";
        }, i * 120);
      });

      skillObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.3 },
);

document
  .querySelectorAll("#keahlian .card-lift")
  .forEach((card) => skillObserver.observe(card));

(function heroPhotoFallback() {
  const img = document.getElementById("hero-photo");
  if (!img) return;

  img.addEventListener("error", function () {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="380" viewBox="0 0 300 380">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   style="stop-color:#292524"/>
            <stop offset="100%" style="stop-color:#44403c"/>
          </linearGradient>
        </defs>
        <rect width="300" height="380" fill="url(#bg)"/>
        <circle cx="150" cy="145" r="60" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
        <circle cx="150" cy="145" r="80" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
        <text x="150" y="158" text-anchor="middle" dominant-baseline="middle"
              font-family="Georgia,serif" font-size="42" font-weight="700"
              fill="rgba(255,255,255,0.85)" letter-spacing="4">FFG</text>
        <text x="150" y="230" text-anchor="middle" dominant-baseline="middle"
              font-family="'DM Sans',sans-serif" font-size="13"
              fill="rgba(255,255,255,0.35)" letter-spacing="3">FEDY FS. GERANA</text>
        <text x="150" y="255" text-anchor="middle" dominant-baseline="middle"
              font-family="'DM Sans',sans-serif" font-size="11"
              fill="rgba(255,255,255,0.2)" letter-spacing="2">WEB DEVELOPER</text>
        <line x1="100" y1="215" x2="200" y2="215" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
      </svg>`.trim();

    const blob = new Blob([svg], { type: "image/svg+xml" });
    this.src = URL.createObjectURL(blob);
    this.onerror = null;
  });
})();

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const errName = document.querySelector(".err-name");
  const errEmail = document.querySelector(".err-email");

  errName.classList.toggle("hidden", name.length > 0);
  errEmail.classList.toggle("hidden", emailRegex.test(email));

  if (!name || !emailRegex.test(email)) {
    showToast(i18next.t("toast_error"), "error");
    return;
  }

  const btn = document.getElementById("submit-btn");
  const btnText = document.getElementById("btn-text");
  const btnIcon = document.getElementById("btn-icon");

  btn.disabled = true;
  btnText.textContent = i18next.t("form_sending");
  btnIcon.className = "fas fa-spinner fa-spin text-xs";

  emailjs
    .sendForm("service_tvkgqua", "template_avol9zm", this)
    .then(() => {
      this.reset();
      btn.disabled = false;
      btnText.textContent = i18next.t("form_submit");
      btnIcon.className =
        "fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1";
      showToast(i18next.t("toast_success"), "success");
    })
    .catch(() => {
      btn.disabled = false;
      btnText.textContent = i18next.t("form_submit");
      btnIcon.className =
        "fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1";
      showToast(i18next.t("toast_error"), "error");
    });
});

(function buildTicker() {
  const techs = [
    [
      "Vue.js",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><path d="M2 6h6l8 14 8-14h6L16 28z" fill="#41B883"/><path d="M8 6l8 14 8-14h-5l-3 7-3-7z" fill="#35495E"/></svg>`,
    ],
    [
      "React",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><ellipse cx="16" cy="16" rx="12" ry="5" stroke="#61DAFB" stroke-width="1.5" fill="none"/><ellipse cx="16" cy="16" rx="12" ry="5" stroke="#61DAFB" stroke-width="1.5" fill="none" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="12" ry="5" stroke="#61DAFB" stroke-width="1.5" fill="none" transform="rotate(120 16 16)"/><circle cx="16" cy="16" r="2.2" fill="#61DAFB"/></svg>`,
    ],
    [
      "Next.js",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#000"/><text x="6" y="22" font-family="monospace" font-weight="900" font-size="14" fill="white">N</text></svg>`,
    ],
    [
      "Nuxt.js",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="4" fill="#00DC82"/><path d="M8 22l8-14 4 7-2 3h6l-3-5" stroke="white" stroke-width="2" fill="none" stroke-linejoin="round"/></svg>`,
    ],
    [
      "TypeScript",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="4" fill="#3178C6"/><path d="M6 18h6M9 12v12M20 20c0 1.6 1 2.5 2.5 2.5S25 22 25 20.5c0-1.7-1.5-2.3-3-3-1.5-.7-3-1.3-3-3.2C19 12.8 20 12 22 12c1.6 0 2.8.8 3 2" stroke="white" stroke-width="1.8" stroke-linecap="round" fill="none"/></svg>`,
    ],
    [
      "Tailwind CSS",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><path d="M16 8c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.285 1.955 1.11 2.855 2.025C18.03 15.26 19.648 17 23.5 17c4 0 6.5-2 7.5-6C29.5 13 27.75 13.75 25.75 13.25c-1.14-.285-1.955-1.11-2.855-2.025C21.47 9.74 19.852 8 16 8zm-7.5 9C4.5 17 2 19 1 23c1.5-2 3.25-2.75 5.25-2.25 1.14.285 1.955 1.11 2.855 2.025C10.53 24.26 12.148 26 16 26c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.285-1.955-1.11-2.855-2.025C13.97 18.74 12.352 17 8.5 17z" fill="#06B6D4"/></svg>`,
    ],
    [
      "Bootstrap",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="4" fill="#7952B3"/><path d="M10 8h7.5a4.5 4.5 0 011 8.9A5 5 0 0116.5 26H10V8z" stroke="white" stroke-width="1.8" fill="none"/><path d="M10 17h7a3 3 0 010 6h-7" stroke="white" stroke-width="1.8" fill="none"/></svg>`,
    ],
    [
      "Laravel",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><path d="M28 8l-6 2-8-4-8 4v12l8 4 8-4 6 2V8z" stroke="#FF2D20" stroke-width="1.5" fill="none"/><path d="M14 6v12M20 8v12" stroke="#FF2D20" stroke-width="1.5"/></svg>`,
    ],
    [
      "CodeIgniter",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="4" fill="#EE4323"/><path d="M16 8c4 0 7 2.5 7 8 0 6-5 10-7 10S9 22 9 16c0-5.5 3-8 7-8z" stroke="white" stroke-width="1.5" fill="none"/></svg>`,
    ],
    [
      "Node.js",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><path d="M16 4L4 11v10l12 7 12-7V11z" stroke="#339933" stroke-width="1.5" fill="none"/><path d="M16 4v18M4 11l12 7 12-7" stroke="#339933" stroke-width="1.5"/></svg>`,
    ],
    [
      "Express.js",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="4" fill="#000"/><text x="4" y="22" font-family="monospace" font-weight="700" font-size="9" fill="white">Ex.js</text></svg>`,
    ],
    [
      "NestJS",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="4" fill="#E0234E"/><path d="M12 8c-2 3-2 8 4 10 6-2 6-7 4-10" stroke="white" stroke-width="1.5" fill="none"/><path d="M20 8c2 3 2 8-4 10C10 16 10 11 12 8" stroke="white" stroke-width="1.5" fill="none"/></svg>`,
    ],
    [
      "C# / .NET",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="4" fill="#512BD4"/><text x="3" y="21" font-family="monospace" font-weight="700" font-size="9" fill="white">C#/.NET</text></svg>`,
    ],
    [
      "Filament",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="4" fill="#FBBF24"/><path d="M10 22l3-8 3 4 3-6 3 10" stroke="#1c1917" stroke-width="2" stroke-linejoin="round" fill="none"/></svg>`,
    ],
    [
      "PostgreSQL",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><ellipse cx="16" cy="10" rx="8" ry="3.5" stroke="#336791" stroke-width="1.5" fill="none"/><path d="M8 10v12c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5V10" stroke="#336791" stroke-width="1.5" fill="none"/><path d="M8 16c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5" stroke="#336791" stroke-width="1.5" fill="none"/></svg>`,
    ],
    [
      "SQL Server",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="4" fill="#CC2927"/><ellipse cx="16" cy="10" rx="7" ry="3" stroke="white" stroke-width="1.3" fill="none"/><path d="M9 10v12c0 1.7 3.1 3 7 3s7-1.3 7-3V10" stroke="white" stroke-width="1.3" fill="none"/></svg>`,
    ],
    [
      "Prisma",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><path d="M16 4L6 26l10-6 10 6z" stroke="#2D3748" stroke-width="1.5" fill="none"/><path d="M16 4L26 26" stroke="#2D3748" stroke-width="1.5"/></svg>`,
    ],
    [
      "Redis",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="4" fill="#DC382D"/><path d="M8 20l8-4 8 4-8 4z" fill="white" opacity=".9"/><path d="M8 16l8-4 8 4-8 4z" fill="white" opacity=".7"/><path d="M8 12l8-4 8 4-8 4z" fill="white" opacity=".5"/></svg>`,
    ],
    [
      "Docker",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="4" fill="#2496ED"/><path d="M7 16h4v4H7zM12 16h4v4h-4zM17 16h4v4h-4zM12 11h4v4h-4z" fill="white"/></svg>`,
    ],
    [
      "Git",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="4" fill="#F05033"/><circle cx="12" cy="12" r="2.4" fill="white"/><circle cx="20" cy="20" r="2.4" fill="white"/><path d="M13.7 13.7L18.3 18.3" stroke="white" stroke-width="1.6"/></svg>`,
    ],
    [
      "Playwright",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="4" fill="#2EAD33"/><text x="4" y="22" font-family="monospace" font-weight="700" font-size="9" fill="white">PW</text></svg>`,
    ],
    [
      "Vite",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><path d="M28 6L16 28 4 6h8l4 8 4-8z" fill="#646CFF"/><path d="M20 6l-4 8" stroke="#FFBD2E" stroke-width="2"/></svg>`,
    ],
    [
      "Jest",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="4" fill="#C21325"/><path d="M14 8l-6 16M18 8l6 16M10 18h12" stroke="white" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    ],
    [
      "Swagger",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="4" fill="#85EA2D"/><path d="M8 16h16M16 9l7 7-7 7" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" fill="none"/></svg>`,
    ],
    [
      "Pino",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="4" fill="#333"/><text x="5" y="22" font-family="monospace" font-weight="700" font-size="10" fill="white">pino</text></svg>`,
    ],
    [
      "Pinia",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="4" fill="#FFD84E"/><text x="6" y="22" font-family="monospace" font-weight="900" font-size="15" fill="#333">P</text></svg>`,
    ],
    [
      "Zod",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="4" fill="#3068B7"/><text x="5" y="23" font-family="monospace" font-weight="700" font-size="14" fill="white">Z</text></svg>`,
    ],
    [
      "Zustand",
      `<svg class="ti" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="4" fill="#FF4154"/><circle cx="16" cy="16" r="5" stroke="white" stroke-width="1.5" fill="none"/></svg>`,
    ],
  ];

  function makePill(label, svgHtml) {
    const span = document.createElement("span");
    span.className = "ticker-pill";
    span.innerHTML = svgHtml + label;
    return span;
  }

  function fillTrack(trackEl, items) {
    const frag = document.createDocumentFragment();
    [...items, ...items].forEach(([label, svg]) =>
      frag.appendChild(makePill(label, svg)),
    );
    trackEl.appendChild(frag);
  }

  const half = Math.ceil(techs.length / 2);
  const track1 = document.getElementById("ticker-row-1");
  const track2 = document.getElementById("ticker-row-2");

  if (track1) fillTrack(track1, techs.slice(0, half));
  if (track2) fillTrack(track2, techs.slice(half));
})();

function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="toast-icon">
      <i class="fas ${type === "success" ? "fa-check" : "fa-xmark"}"></i>
    </div>
    <span>${message}</span>`;

  container.appendChild(toast);

  requestAnimationFrame(() =>
    requestAnimationFrame(() => toast.classList.add("show")),
  );

  setTimeout(() => {
    toast.classList.add("hide");
    toast.addEventListener("transitionend", () => toast.remove(), {
      once: true,
    });
  }, 3500);
}

document.getElementById("footer-year").textContent = new Date().getFullYear();

const DEFAULT_LANG = "id";

function detectLang() {
  const saved = localStorage.getItem("lang");
  if (saved === "id" || saved === "en") return saved;

  const browser = (navigator.language || "id").slice(0, 2).toLowerCase();
  return browser === "en" ? "en" : "id";
}

function applyTranslations(lang) {
  const t = window.translations[lang];
  if (!t) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.dataset.i18nPh;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.dataset.i18nAria;
    if (t[key] !== undefined) el.setAttribute("aria-label", t[key]);
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.dataset.i18nTitle;
    if (t[key] !== undefined) el.title = t[key];
  });

  document.documentElement.lang = lang;
  updateLangUI(lang);
}

function setLang(lang) {
  localStorage.setItem("lang", lang);
  i18next.changeLanguage(lang, () => applyTranslations(lang));
}

function updateLangUI(lang) {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function initI18n() {
  const lang = detectLang();

  i18next.init(
    {
      lng: lang,
      fallbackLng: DEFAULT_LANG,
      resources: {
        id: { translation: window.translations.id },
        en: { translation: window.translations.en },
      },
      interpolation: { escapeValue: false },
    },
    (err) => {
      if (err) console.warn("i18next init error:", err);
      applyTranslations(lang);
    },
  );
}

if (typeof i18next !== "undefined") {
  initI18n();
} else {
  document.addEventListener("DOMContentLoaded", () => {
    const check = setInterval(() => {
      if (typeof i18next !== "undefined") {
        clearInterval(check);
        initI18n();
      }
    }, 50);
  });
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".lang-btn");
  if (btn && btn.dataset.lang) setLang(btn.dataset.lang);
});

document.addEventListener("click", (e) => {
  const cvLink = e.target.closest("#cv-download");
  if (!cvLink) return;

  fetch(cvLink.href, { method: "HEAD" })
    .then((res) => {
      if (!res.ok) throw new Error("missing");
    })
    .catch(() => {
      e.preventDefault();
      showToast(i18next.t("toast_cv_missing"), "error");
    });
});