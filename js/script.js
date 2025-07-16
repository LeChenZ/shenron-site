const commandsData = {
  categoryFun: {
    icon: "🎉",
    title: "Commandes - Fun",
    commands: [
      { name: "/8ball", description: "Pose une question et la boule magique te répond.", permission: "All" },
      { name: "/ascii-art", description: "Transforme ton texte en ASCII art stylisé", permission: "All" },
      { name: "/aura", description: "Analyse l’aura d’un membre.", permission: "All" },
      { name: "/avatar", description: "Affiche l’avatar d’un utilisateur", permission: "All" },
      { name: "/bot-feeling", description: "Découvre l'humeur actuelle du bot", permission: "All" },
      { name: "/friend-match", description: "Calcule un score d’amitié entre deux membres.", permission: "All" },
      { name: "/joke", description: "Envoie une blague aléatoire pour te faire rire. (ou pas)", permission: "All" },
      { name: "/meme", description: "Envoie un mème aléatoire depuis meme-api.com.", permission: "All" },
      { name: "/moodify", description: "Analyse ton texte et te renvoie une version moodifiée.", permission: "All" },
      { name: "/poll", description: "Gestion des sondages", permission: "All" },
      { name: "/quantum-coin", description: "Lance une pièce quantique : Pile, Face, ou Superposition !", permission: "All" },
      { name: "/quote", description: "Envoie une citation inspirante aléatoire.", permission: "All" },
      { name: "/random-sound", description: "Envoie un son drôle ou absurde aléatoire.", permission: "All" },
      { name: "/random-soundoard", description: "Joue un son aléatoire dans le salon vocal, comme une soundboard.", permission: "All" },
      { name: "/roll", description: "Lance un ou plusieurs dés et affiche le résultat.", permission: "All" },
      { name: "/say", description: "Faire dire au bot un message.", permission: "All" },
      { name: "/timecapsule", description: "Envoie un message différé que tu recevras plus tard.", permission: "All" },
      { name: "/update-log", description: "Affiche un changelog fictif de la dernière mise à jour du bot", permission: "All" },
    ],
  },

  categoryGiveaway: {
    icon: "🎁",
    title: "Commandes - Giveaway",
    commands: [
      { name: "/gend", description: "Terminer un giveaway actif immédiatement.", permission: "Mod" },
      { name: "/giveaway", description: "Créer un giveaway dans ce salon.", permission: "Mod" },
      { name: "/reroll", description: "Relancer un tirage d'un giveaway terminé.", permission: "Mod" },
    ],
  },

  categoryGames: {
    icon: "🎮",
    title: "Commandes - Jeux",
    commands: [
      { name: "/enigme", description: "Réponds à une énigme parmi plusieurs choix.", permission: "All" },
      { name: "/morpion", description: "Lance une partie de morpion.", permission: "All" },
      { name: "/pendu", description: "Jeu du pendu complet", permission: "All" },
      { name: "/puissance4", description: "Joue à Puissance 4 contre un autre utilisateur ou le bot", permission: "All" },
    ],
  },

  categoryModeration: {
    icon: "🛠️",
    title: "Commandes - Moderation",
    commands: [
      { name: "/addrole", description: "Ajoute un rôle à un membre", permission: "Mod" },
      { name: "/ban", description: "Bannir un membre du serveur.", permission: "Mod" },
      { name: "/clear", description: "Supprime un nombre de messages dans le channel", permission: "Mod" },
      { name: "/kick", description: "Exclut un membre du serveur", permission: "Mod" },
      { name: "/lock", description: "Verrouille le salon en empêchant les membres d'envoyer des messages.", permission: "Mod" },
      { name: "/lockall", description: "Verrouille tous les salons textuels du serveur.", permission: "Mod" },
      { name: "/mute", description: "Mute un membre en lui attribuant le rôle Muted.", permission: "Mod" },
      { name: "/nick", description: "Change le pseudo d'un membre.", permission: "Mod" },
      { name: "/nuke", description: "Duplique le salon actuel, supprime l'ancien.", permission: "Mod" },
      { name: "/removerole", description: "Retire un rôle à un membre", permission: "Mod" },
      { name: "/slowmode", description: "Définit un délai entre les messages dans un salon.", permission: "Mod" },
      { name: "/tempmute", description: "Mute temporairement un membre.", permission: "Mod" },
      { name: "/unban", description: "Débannir un membre du serveur.", permission: "Mod" },
      { name: "/unlock", description: "Déverrouille le salon en permettant aux membres d'envoyer des messages.", permission: "Mod" },
      { name: "/unlockall", description: "Déverrouille tous les salons textuels du serveur.", permission: "Mod" },
      { name: "/unmute", description: "Unmute un membre.", permission: "Mod" },
    ],
  },

  categoryRanking: {
    icon: "🏆",
    title: "Commandes - Ranking",
    commands: [
      { name: "/leaderboard", description: "Affiche le classement du serveur (Top 50).", permission: "All" },
      { name: "/rank", description: "Affiche votre bannière de niveau et XP.", permission: "All" },
    ],
  },

  categoryUtils: {
    icon: "🧰",
    title: "Commandes - Utils",
    commands: [
      { name: "/autorole", description: "Configure l’attribution automatique d’un rôle aux nouveaux membres.", permission: "Admin" },
      { name: "/botinfo", description: "Affiche des informations détaillées sur le bot.", permission: "All" },
      { name: "/color", description: "Affiche une couleur à partir d’un code hex ou nom.", permission: "All" },
      { name: "/crypto", description: "Affiche le cours actuel d'une cryptomonnaie ou le top des cryptos.", permission: "All" },
      { name: "/gradient", description: "Génère un dégradé entre deux couleurs avec options avancées.", permission: "All" },
      { name: "/ping", description: "Montre la latence du bot et de l’API Discord", permission: "All" },
      { name: "/qrcode", description: "Génère un QR code classique à partir d'un lien.", permission: "All" },
      { name: "/serverinfo", description: "Affiche des informations sur le serveur", permission: "All" },
      { name: "/timestamp", description: "Génère un timestamp Discord à partir d’une date.", permission: "All" },
      { name: "/translate", description: "Traduit un texte d’une langue source vers une langue cible.", permission: "All" },
      { name: "/userinfo", description: "Affiche des informations sur un utilisateur", permission: "All" },
      { name: "/weather", description: "Affiche la météo d'une ville donnée.", permission: "All" },
      { name: "/welcome", description: "Configurer le système de bienvenue.", permission: "Admin" },
    ],
  },

  categoryOwner: {
    icon: "👑",
    title: "Commandes - Owner",
    commands: [
      { name: "/blacklist", description: "Gérer la blacklist globale (owner bot uniquement)", permission: "Owner" },
      { name: "/server", description: "Affiche la liste des serveurs où le bot est présent (owner bot uniquement)", permission: "Owner" },
    ],
  },

  categoryTicket: {
    icon: "🎟️",
    title: "Commandes - Ticket",
    commands: [
      { name: "/ticket", description: "Commandes liées aux tickets", permission: "All" },
    ],
  },
};

function createCategoryButton(key, category) {
  return `
        <div class="bg-white/5 rounded-2xl border border-white/10" id="${key}-container">
            <button class="w-full px-8 py-6 flex justify-between items-center text-2xl font-semibold" 
                    onclick="toggleCategory('${key}')">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                        ${category.icon}
                    </div>
                    <span>${category.title}</span>
                </div>
                <svg class="w-6 h-6 transform transition-transform" id="${key}-arrow"
                     xmlns="http:
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            <div class="hidden px-8 pb-6 space-y-4" id="${key}-commands">
                <!-- Commands will be loaded here when category is opened -->
            </div>
        </div>
    `;
}

function createCommandHTML(cmd) {
  return `
        <div class="command-card bg-white/5 p-6 rounded-xl border border-white/10">
            <div class="flex justify-between items-start">
                <div>
                    <h4 class="text-xl font-semibold mb-2">${cmd.name}</h4>
                    <p class="text-white/70">${cmd.description}</p>
                </div>
                <span class="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg text-sm">
                    ${cmd.permission}
                </span>
            </div>
        </div>
    `;
}

const loadedCategories = new Set();

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.opacity = "0";
      setTimeout(() => loader.remove(), 500);
    }
  }, 1000);
});

gsap.registerPlugin(ScrollTrigger);
gsap.from("#hero-heading", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  delay: 0.5,
  ease: "power4.out",
});

gsap.from("#hero-subheading", {
  opacity: 0,
  y: 30,
  duration: 1.2,
  delay: 0.7,
  ease: "power4.out",
});

gsap.from("#hero-button1", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1,
  ease: "power4.out",
});

gsap.from("#hero-button2", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1.2,
  ease: "power4.out",
});

gsap.from("#hero-logo", {
  opacity: 0,
  scale: 0.8,
  duration: 1.5,
  delay: 0.5,
  ease: "power4.out",
});

function initHeroAnimations() {
  const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

  timeline
    .from("#hero h1", {
      opacity: 0,
      y: 100,
      duration: 1,
    })
    .from(
      "#hero p",
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
      },
      "-=0.5",
    )
    .from(
      "#hero button",
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
      },
      "-=0.5",
    )
    .from(
      "#hero img",
      {
        opacity: 0,
        x: 100,
        duration: 1,
      },
      "-=0.5",
    );
}

function initFeaturesAnimations() {
  const cards = gsap.utils.toArray(".feature-card");

  cards.forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      rotation: 5,
      duration: 0.8,
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      },
    });
  });
}

function toggleCategory(category) {
  const container = document.getElementById(`${category}-commands`);
  const arrow = document.getElementById(`${category}-arrow`);
  const cards = container.querySelectorAll(".command-card");

  if (container.classList.contains("hidden")) {
    container.classList.remove("hidden");

    arrow.classList.add("rotate");

    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 100);
    });
  } else {
    cards.forEach((card) => {
      card.classList.remove("show");
    });

    arrow.classList.remove("rotate");

    setTimeout(() => {
      container.classList.add("hidden");
    }, 300);
  }
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      const navHeight = document.querySelector("nav").offsetHeight;

      if (target) {
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        if (this.getAttribute("href") === "#commands") {
          gsap.to("#commands", {
            backgroundColor: "rgba(79, 70, 229, 0.1)",
            duration: 0.3,
            yoyo: true,
            repeat: 1,
          });
        }
      }
    });
  });
}

function initScrollAnimations() {
  gsap.to("nav", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "+=100",
      toggleClass: { targets: "nav", className: "nav-blur" },
      scrub: true,
    },
  });

  gsap.from("#commands .bg-white\\/5", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#commands",
      start: "top center+=100",
      toggleActions: "play none none reverse",
    },
  });
}

document.addEventListener("DOMContentLoaded", initializeWebsite);

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.opacity = "0";
      setTimeout(() => loader.remove(), 500);
    }
  }, 1000);
});

gsap.registerPlugin(ScrollTrigger);
gsap.from("#hero-heading", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  delay: 0.5,
  ease: "power4.out",
});

gsap.from("#hero-subheading", {
  opacity: 0,
  y: 30,
  duration: 1.2,
  delay: 0.7,
  ease: "power4.out",
});

gsap.from("#hero-button1", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1,
  ease: "power4.out",
});

gsap.from("#hero-button2", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1.2,
  ease: "power4.out",
});

gsap.from("#hero-logo", {
  opacity: 0,
  scale: 0.8,
  duration: 1.5,
  delay: 0.5,
  ease: "power4.out",
});

function initHeroAnimations() {
  const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

  timeline
    .from("#hero h1", {
      opacity: 0,
      y: 100,
      duration: 1,
    })
    .from(
      "#hero p",
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
      },
      "-=0.5",
    )
    .from(
      "#hero button",
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
      },
      "-=0.5",
    )
    .from(
      "#hero img",
      {
        opacity: 0,
        x: 100,
        duration: 1,
      },
      "-=0.5",
    );
}

function initFeaturesAnimations() {
  const cards = gsap.utils.toArray(".feature-card");

  cards.forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      rotation: 5,
      duration: 0.8,
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      },
    });
  });
}

function toggleCategory(category) {
  const commandsDiv = document.getElementById(`${category}-commands`);
  const arrow = document.getElementById(`${category}-arrow`);

  if (!loadedCategories.has(category)) {
    const commandsHTML = commandsData[category].commands
      .map((cmd) => createCommandHTML(cmd))
      .join("");
    commandsDiv.innerHTML = commandsHTML;
    loadedCategories.add(category);
  }

  commandsDiv.classList.toggle("hidden");
  arrow.classList.toggle("rotate-180");
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      const navHeight = document.querySelector("nav").offsetHeight;

      if (target) {
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        if (this.getAttribute("href") === "#commands") {
          gsap.to("#commands", {
            backgroundColor: "rgba(79, 70, 229, 0.1)",
            duration: 0.3,
            yoyo: true,
            repeat: 1,
          });
        }
      }
    });
  });
}

function initScrollAnimations() {
  gsap.to("nav", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "+=100",
      toggleClass: { targets: "nav", className: "nav-blur" },
      scrub: true,
    },
  });

  gsap.from("#commands .bg-white\\/5", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#commands",
      start: "top center+=100",
      toggleActions: "play none none reverse",
    },
  });
}

function initializeWebsite() {
  initHeroAnimations();
  initFeaturesAnimations();
  initScrollAnimations();
  initSmoothScroll();

  const ctaButtons = document.querySelectorAll(".gradient-bg");
  ctaButtons.forEach((button) => button.classList.add("pulse-on-hover"));

  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card) => card.classList.add("shine-effect"));
}
async function updateGitHubStats() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/redolenthalo/discord-bot-website-template",
    );
    const data = await response.json();

    document.getElementById("stars-count").textContent =
      `${data.stargazers_count} Stars`;
    document.getElementById("forks-count").textContent =
      `${data.forks_count} Forks`;
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
  }
}

updateGitHubStats();
setInterval(updateGitHubStats, 300000);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.onscroll = function () {
  const button = document.querySelector('[onclick="scrollToTop()"]');
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    button.style.opacity = "1";
    button.style.pointerEvents = "auto";
  } else {
    button.style.opacity = "0";
    button.style.pointerEvents = "none";
  }
};

document.addEventListener("DOMContentLoaded", initializeWebsite);
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("commands-container");

  const categoriesHTML = Object.entries(commandsData)
    .map(([key, category]) => createCategoryButton(key, category))
    .join("");

  container.innerHTML = categoriesHTML;
});

function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = document.querySelector(".menu-icon");
  const menuButton = document.querySelector(".md\\:hidden button");

  if (mobileMenu.classList.contains("hidden")) {
    // Show menu
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("animate-fade-in");
    menuIcon.setAttribute("d", "M6 18L18 6M6 6l12 12");
  } else {
    // Hide menu
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("animate-fade-in");
    menuIcon.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
  }

  // Stop event propagation
  event.stopPropagation();
}

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuButton = document.querySelector(".md\\:hidden button");

  // Only close if menu is open and click is outside menu and button
  if (
    !mobileMenu.classList.contains("hidden") &&
    !mobileMenu.contains(e.target) &&
    !menuButton.contains(e.target)
  ) {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("animate-fade-in");
    document
      .querySelector(".menu-icon")
      .setAttribute("d", "M4 6h16M4 12h16M4 18h16");
  }
});

// Prevent menu from closing when clicking inside
document.getElementById("mobileMenu")?.addEventListener("click", (e) => {
  e.stopPropagation();
});
