/* ===== Konfigurasi EmailJS (form kontak) =====
 * Public key aman berada di frontend. Atur "allowed origins" di dashboard EmailJS agar form tidak disalahgunakan.
 * Template EmailJS membaca kolom: name, email, subject, message.
 */
var EMAILJS = {
  publicKey: "qxIJgSnQkAvC_hw8o",
  service: "service_tvkgqua",
  template: "template_avol9zm",
};
if (window.emailjs) {
  emailjs.init(EMAILJS.publicKey);
}

/* ===== Tema (Sistem bawaan / Terang / Gelap) + penanda menu aktif ===== */
(function () {
  var root = document.documentElement,
    segs = document.querySelectorAll(".seg button"),
    themeColor = document.querySelector('meta[name="theme-color"]'),
    lightQuery = window.matchMedia("(prefers-color-scheme: light)");
  function paintThemeColor() {
    var theme = root.dataset.theme || (lightQuery.matches ? "light" : "dark");
    if (themeColor)
      themeColor.setAttribute(
        "content",
        theme === "light" ? "#ffffff" : "#000000",
      );
  }
  function setMode(mode, save) {
    if (mode === "light" || mode === "dark") root.dataset.theme = mode;
    else root.removeAttribute("data-theme");
    paintThemeColor();
    segs.forEach(function (b) {
      b.setAttribute(
        "aria-pressed",
        b.dataset.mode === mode ? "true" : "false",
      );
    });
    if (save) {
      try {
        localStorage.setItem("theme", mode);
      } catch (e) {}
    }
  }
  var saved = "system";
  try {
    var v = localStorage.getItem("theme");
    if (v === "light" || v === "dark" || v === "system") saved = v;
  } catch (e) {}
  setMode(saved, false);
  if (lightQuery.addEventListener)
    lightQuery.addEventListener("change", paintThemeColor);
  var year = document.getElementById("yr");
  if (year)
    year.textContent =
      "\u00a9 " + new Date().getFullYear() + " Fedy Fs. Gerana";
  segs.forEach(function (b) {
    b.addEventListener("click", function () {
      setMode(b.dataset.mode, true);
    });
  });
  var ids = ["beranda", "tentang", "keahlian", "proyek", "kontak"];
  var links = document.querySelectorAll(".links a,.bnav a");
  var navbar = document.querySelector(".navwrap");
  var locked = null,
    unlockTimer,
    frame = 0;
  function mark(cur) {
    links.forEach(function (a) {
      if (a.getAttribute("href") === "#" + cur)
        a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }
  function current() {
    var doc = document.documentElement;
    if (window.innerHeight + window.scrollY >= doc.scrollHeight - 4)
      return ids[ids.length - 1];
    var line = (navbar ? navbar.offsetHeight : 0) + 100,
      cur = ids[0];
    ids.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= line) cur = id;
    });
    return cur;
  }
  function spy() {
    frame = 0;
    if (!locked) mark(current());
  }
  function queue() {
    if (!frame) frame = requestAnimationFrame(spy);
  }
  function unlock() {
    clearTimeout(unlockTimer);
    locked = null;
    queue();
  }
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    var id = a.getAttribute("href").slice(1);
    if (ids.indexOf(id) < 0) return;
    a.addEventListener("click", function () {
      locked = id;
      mark(id);
      clearTimeout(unlockTimer);
      unlockTimer = setTimeout(unlock, 1000);
    });
  });
  addEventListener("scroll", queue, { passive: true });
  addEventListener("scrollend", function () {
    if (locked) unlock();
  });
  addEventListener("resize", queue);
  addEventListener("load", queue);
  spy();
})();

/* ===== Bahasa (ID / EN), salin email, validasi & pengiriman form ===== */
(function () {
  /* ---------- Terjemahan ID -> EN ---------- */
  var T = I18N.T,
    TD = I18N.TD,
    M = I18N.M;
  var lang = "id",
    items = [],
    attrs = [],
    errs = {};
  var titleEl = document.querySelector("title");
  var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT),
    n;
  while ((n = w.nextNode())) {
    var p = n.parentElement;
    if (!p || p.tagName === "SCRIPT" || p.tagName === "STYLE") continue;
    var raw = n.textContent,
      s = raw.replace(/\s+/g, " ").trim();
    if (!s) continue;
    var en = p.tagName === "DT" && TD[s] ? TD[s] : T[s];
    if (en)
      items.push({
        n: n,
        orig: raw,
        en: en,
        pre: raw.match(/^\s*/)[0],
        post: raw.match(/\s*$/)[0],
      });
  }
  document
    .querySelectorAll("[placeholder],[aria-label],[title],[alt]")
    .forEach(function (el) {
      ["placeholder", "aria-label", "title", "alt"].forEach(function (a) {
        var v = el.getAttribute(a),
          k = v && v.replace(/\s+/g, " ").trim();
        if (k && T[k]) attrs.push({ el: el, a: a, orig: v, en: T[k] });
      });
    });
  function showErrs() {
    ["nama", "email", "pesan"].forEach(function (k) {
      var el = document.getElementById("e-" + k),
        f = document.getElementById(k);
      if (errs[k]) {
        el.textContent = M[lang][errs[k]];
        el.hidden = false;
        f.setAttribute("aria-invalid", "true");
      } else {
        el.hidden = true;
        el.textContent = "";
        f.removeAttribute("aria-invalid");
      }
    });
  }
  function setLang(l, save) {
    lang = l;
    items.forEach(function (o) {
      o.n.textContent = l === "en" ? o.pre + o.en + o.post : o.orig;
    });
    attrs.forEach(function (o) {
      o.el.setAttribute(o.a, l === "en" ? o.en : o.orig);
    });
    document.documentElement.lang = l;
    document.documentElement.classList.remove("i18n-pending");
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.dataset.lang === l ? "true" : "false");
    });
    showErrs();
    if (save) {
      try {
        localStorage.setItem("lang", l);
      } catch (e) {}
    }
  }
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () {
      setLang(b.dataset.lang, true);
    });
  });
  var saved = "en";
  try {
    var sv = localStorage.getItem("lang");
    if (sv === "en" || sv === "id") saved = sv;
  } catch (e) {}
  setLang(saved, false);

  /* ---------- Salin email ---------- */
  var copyBtn = document.getElementById("copy"),
    copied = document.getElementById("copied"),
    timer;
  function say(msg) {
    copied.textContent = msg;
    clearTimeout(timer);
    timer = setTimeout(function () {
      copied.textContent = "";
    }, 2800);
  }
  copyBtn.addEventListener("click", function () {
    var text = "fedfg30@gmail.com";
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try {
        ok = document.execCommand("copy");
      } catch (e) {}
      document.body.removeChild(ta);
      say(ok ? M[lang].copied : M[lang].copyfail);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        say(M[lang].copied);
      }, fallback);
    } else fallback();
  });

  /* ---------- Form: validasi + status ---------- */
  var form = document.getElementById("form"),
    sent = document.getElementById("sent"),
    send = document.getElementById("send"),
    again = document.getElementById("again"),
    fail = document.getElementById("e-form");
  var fields = {
    nama: document.getElementById("nama"),
    email: document.getElementById("email"),
    pesan: document.getElementById("pesan"),
  };
  function validate() {
    errs = {};
    if (!fields.nama.value.trim()) errs.nama = "nama";
    var em = fields.email.value.trim();
    if (!em) errs.email = "email_req";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em))
      errs.email = "email_bad";
    var ps = fields.pesan.value.trim();
    if (!ps) errs.pesan = "pesan_req";
    else if (ps.length < 10) errs.pesan = "pesan_short";
    showErrs();
    for (var k in fields) {
      if (errs[k]) {
        fields[k].focus();
        break;
      }
    }
    return Object.keys(errs).length === 0;
  }
  Object.keys(fields).forEach(function (k) {
    fields[k].addEventListener("input", function () {
      if (errs[k]) {
        delete errs[k];
        showErrs();
      }
    });
  });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validate()) return;
    fail.hidden = true;
    send.disabled = true;
    send.children[0].hidden = true;
    send.children[1].hidden = false;
    function done(ok) {
      send.disabled = false;
      send.children[0].hidden = false;
      send.children[1].hidden = true;
      if (ok) {
        sent.style.minHeight = form.offsetHeight + "px";
        form.reset();
        form.hidden = true;
        sent.hidden = false;
        sent.focus();
      } else {
        fail.hidden = false;
      }
    }
    if (window.emailjs && emailjs.sendForm) {
      emailjs.sendForm(EMAILJS.service, EMAILJS.template, form).then(
        function () {
          done(true);
        },
        function () {
          done(false);
        },
      );
    } else {
      done(false);
    }
  });
  again.addEventListener("click", function () {
    form.reset();
    errs = {};
    showErrs();
    fail.hidden = true;
    sent.hidden = true;
    form.hidden = false;
    fields.nama.focus();
  });
})();

/* ===== Tautan proyek: Preview & GitHub =====
 * href terisi          -> tombol aktif, dibuka di tab baru
 * href kosong          -> tombol tampil redup (tidak bisa diklik) selama <section id="proyek"> punya data-show-empty="true";
 *                         ubah ke "false" jika tombol kosong ingin disembunyikan sepenuhnya.
 */
(function () {
  var sec = document.getElementById("proyek");
  var showEmpty = !sec || sec.getAttribute("data-show-empty") !== "false";
  document.querySelectorAll(".plink").forEach(function (a) {
    var h = (a.getAttribute("href") || "").trim();
    if (h && h !== "#") {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.hidden = false;
      a.removeAttribute("aria-disabled");
    } else if (showEmpty) {
      a.removeAttribute("href");
      a.setAttribute("aria-disabled", "true");
      a.hidden = false;
    } else {
      a.hidden = true;
    }
  });
  document.querySelectorAll(".plinks").forEach(function (box) {
    box.hidden = !box.querySelector(".plink:not([hidden])");
  });
})();

/* ===== Efek sorot kursor pada kartu ===== */
(function () {
  document.querySelectorAll(".spot").forEach(function (el) {
    el.addEventListener("pointermove", function (e) {
      var r = el.getBoundingClientRect();
      el.style.setProperty("--mx", e.clientX - r.left + "px");
      el.style.setProperty("--my", e.clientY - r.top + "px");
    });
  });
})();
