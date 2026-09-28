/* EN-only i18n for Bob's Sewerooter Services demo */
const i18n = {
  en: {
    "nav.services": "Services",
    "nav.why": "Why us",
    "nav.gallery": "Gallery",
    "nav.faq": "FAQ",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.call": "(515) 262-6520",
    "hero.kicker": "Des Moines, Iowa · Drain & sewer specialists · Open daily 8 AM–10 PM",
    "hero.title": "Clogged drain?<br>We'll clear it today.",
    "hero.sub": "Rated 4.8 out of 5 from 142 reviews: drain cleaning, sewer line work, root removal and septic pumping — done right the first time.",
    "hero.cta1": "Call (515) 262-6520",
    "hero.cta2": "See services",
    "trust.t1t": "Open daily 8–10",
    "trust.t1d": "7 days a week, including weekends",
    "trust.t2t": "Drain & sewer experts",
    "trust.t2d": "Rooters, inspections & repairs",
    "trust.t3t": "Same-day service",
    "trust.t3d": "Fast response when it matters",
    "stats.s1n": "4.8\u2605",
    "stats.s1l": "from 142 reviews",
    "stats.s2n": "7 days",
    "stats.s2l": "a week, 8 AM–10 PM",
    "stats.s3n": "Des Moines",
    "stats.s3l": "& surrounding areas",
    "stats.s4n": "Same-day",
    "stats.s4l": "service available",
    "services.kicker": "What we do",
    "services.title": "Drains, sewers & septic — handled",
    "services.s1t": "Drain cleaning",
    "services.s1d": "Professional rooter service to clear stubborn clogs — fast, clean and thorough.",
    "services.s2t": "Sewer line repair",
    "services.s2d": "Sewer line work that gets your system flowing again with minimal disruption.",
    "services.s3t": "Root removal",
    "services.s3d": "Tree roots choking your pipes? We cut them out and restore full flow.",
    "services.s4t": "Video pipe inspections",
    "services.s4d": "Camera inspections show exactly what's wrong inside your pipes — no guessing.",
    "services.s5t": "Septic pumping",
    "services.s5d": "Septic tank pumping to keep your system healthy and avoid costly backups.",
    "services.s6t": "Grease trap cleaning",
    "services.s6d": "Grease trap cleaning for restaurants and food businesses — stay compliant.",
    "why.kicker": "Why choose us",
    "why.title": "Des Moines' drain & sewer pros",
    "why.intro": "Clogs and sewer problems can't wait. We show up fast, diagnose honestly and leave your place clean — that's why Des Moines keeps calling us back.",
    "why.l1t": "Open 7 days",
    "why.l1d": "8 AM to 10 PM every day — weekends included.",
    "why.l2t": "Specialist equipment",
    "why.l2d": "Rooters, inspection cameras and the right tools for tough jobs.",
    "why.l3t": "Honest diagnosis",
    "why.l3d": "We show you what we see and explain your options plainly.",
    "why.l4t": "Clean work",
    "why.l4d": "We protect your home and clean up before we leave.",
    "gallery.kicker": "On the job",
    "gallery.title": "Work we're proud of",
    "gallery.c1": "Camera inspections, exact answers",
    "gallery.c2": "Septic pumping done right",
    "reviews.kicker": "Word on the street",
    "reviews.title": "Rated 4.8 out of 5 by Des Moines customers",
    "reviews.more": "See what customers say about us — 4.8 stars from 142 reviews",
    "faq.kicker": "Good to know",
    "faq.title": "Frequently asked questions",
    "faq.q1": "Do you offer same-day service?",
    "faq.a1": "Call us at (515) 262-6520 and we'll get to you as quickly as possible — we're open 7 days a week.",
    "faq.q2": "Can you find tree roots in my sewer line?",
    "faq.a2": "Yes — our video camera inspections locate roots and blockages exactly, then we cut the roots out.",
    "faq.q3": "Do you pump septic tanks?",
    "faq.a3": "Yes, septic pumping is one of our specialties — regular pumping keeps your system trouble-free.",
    "faq.q4": "How much does drain cleaning cost?",
    "faq.a4": "It depends on the job — call us for a fair, upfront quote before any work begins.",
    "contact.kicker": "Come see us",
    "contact.title": "Get in touch",
    "contact.addr": "Address",
    "contact.phone": "Phone",
    "contact.hours": "Hours",
    "contact.hoursVal": "Monday – Sunday<br>8:00 AM – 10:00 PM",
    "contact.cta": "Call now",
    "footer.tag": "Plumber · Des Moines, Iowa"
  }
};

function applyLang(lang) {
  const dict = i18n[lang] || i18n.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang("en");

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("mainNav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }, { passive: true });
});
