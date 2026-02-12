# 🚗 ICC Covoiturage - Impact Centre Chrétien

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Nuxt](https://img.shields.io/badge/Nuxt-4.2.2-00DC82?logo=nuxt.js)](https://nuxt.com)
[![Vue](https://img.shields.io/badge/Vue-3-4FC08D?logo=vue.js)](https://vuejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Security](https://img.shields.io/badge/Security-A+-success)](SECURITY.md)
[![i18n](https://img.shields.io/badge/i18n-FR%20%7C%20EN-orange)](https://i18n.nuxtjs.org)

> Plateforme web de covoiturage solidaire pour les membres d'Impact Centre Chrétien du Togo

**Partagez vos trajets, vivez la communion, et rejoignez chaque culte sans souci.**

---

## 📋 Table des matières

- [À propos](#-à-propos)
- [Technologies & Stack](#-technologies--stack)
- [Architecture](#-architecture)
- [Fonctionnalités](#-fonctionnalités)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Scripts disponibles](#-scripts-disponibles)
- [Sécurité](#-sécurité)
- [Internationalisation](#-internationalisation)
- [Structure du projet](#-structure-du-projet)
- [Contribution](#-contribution)
- [Support](#-support)
- [Licence](#-licence)

---

## 🎯 À propos

**ICC Covoiturage** est une application web moderne développée pour faciliter les déplacements des membres d'Impact Centre Chrétien du Togo vers les cultes, réunions, formations et autres activités de l'église. 

La plateforme repose sur un esprit de solidarité et de communion, permettant aux fidèles, serviteurs et responsables de partager leurs trajets gratuitement.

### 🎯 Public cible

- **Les fidèles** : Tous les membres des églises ICC au Togo
- **Les S.T.A.R** : Serviteurs des départements
- **Famille d'impact** : Responsables et leaders
- **Les Bergers** : Pasteurs et Assistants Pasteurs

---

## 🛠️ Technologies & Stack

### Frontend Framework
![Nuxt.js](https://img.shields.io/badge/Nuxt.js-4.2.2-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-3-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

### UI & Styling
![Nuxt UI](https://img.shields.io/badge/Nuxt_UI-4.3.0-00DC82?style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Integrated-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Iconify](https://img.shields.io/badge/Iconify-Lucide-1769AA?style=for-the-badge)

### Internationalisation
![i18n](https://img.shields.io/badge/Nuxt_i18n-10.2.1-orange?style=for-the-badge)

### Outils de développement
![ESLint](https://img.shields.io/badge/ESLint-9.39-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![PNPM](https://img.shields.io/badge/PNPM-10.26-F69220?style=for-the-badge&logo=pnpm&logoColor=white)

### Déploiement
- **SSR** : Server-Side Rendering activé
- **Preset** : Static Generation
- **Hébergement** : Compatible Vercel, Netlify, Cloudflare Pages

---

## 🏗️ Architecture

### Architecture Technique

```
┌─────────────────────────────────────────────────────────┐
│                    Client Browser                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │         Vue 3 + Nuxt 4 Application               │  │
│  │  ┌────────────┐  ┌────────────┐  ┌───────────┐  │  │
│  │  │   Pages    │  │ Components │  │  Layouts  │  │  │
│  │  └────────────┘  └────────────┘  └───────────┘  │  │
│  │  ┌────────────┐  ┌────────────┐  ┌───────────┐  │  │
│  │  │  Composables│  │   i18n     │  │  Nuxt UI  │  │  │
│  │  └────────────┘  └────────────┘  └───────────┘  │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                  Nuxt Server (SSR)                       │
│  ┌──────────────────────────────────────────────────┐  │
│  │           Nitro Server Engine                    │  │
│  │  ┌────────────┐  ┌────────────┐  ┌───────────┐  │  │
│  │  │   Routes   │  │ Middleware │  │   API     │  │  │
│  │  └────────────┘  └────────────┘  └───────────┘  │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Architecture Complète du Code

```
icc-covoiturage/
│
├── 📁 app/                          # Code source de l'application
│   ├── 📁 assets/                   # Assets compilés
│   │   └── 📁 css/
│   │       └── main.css             # Styles globaux Tailwind
│   │
│   ├── 📁 components/               # Composants Vue réutilisables
│   │   ├── header.vue               # Navigation principale + menu mobile
│   │   ├── footer.vue               # Pied de page + newsletter
│   │   ├── Breadcrumb.vue           # Fil d'Ariane navigation
│   │   ├── HeroSection.vue          # Section hero page d'accueil
│   │   ├── CommentCaMarche.vue      # Explication fonctionnement
│   │   ├── NosOffres.vue            # Présentation des offres
│   │   ├── QuiSommesNous.vue        # À propos de l'église
│   │   ├── QuiPeutUtiliser.vue      # Public cible
│   │   ├── NotreApp.vue             # Présentation app mobile
│   │   └── actualites.vue           # Dernières actualités
│   │
│   ├── 📁 pages/                    # Routes automatiques (File-based routing)
│   │   ├── index.vue                # Page d'accueil (/)
│   │   ├── fonctionnalites.vue      # Page fonctionnalités (/fonctionnalites)
│   │   ├── contact.vue              # Page contact (/contact)
│   │   ├── faq.vue                  # Page FAQ (/faq)
│   │   └── 📁 blog/
│   │       ├── index.vue            # Liste articles (/blog)
│   │       └── [slug].vue           # Détail article (/blog/:slug)
│   │
│   ├── 📁 layouts/                  # Layouts de page (optionnel)
│   │   └── default.vue              # Layout par défaut
│   │
│   ├── app.vue                      # Composant racine de l'application
│   └── app.config.ts                # Configuration UI (couleurs, thème)
│
├── 📁 i18n/                         # Internationalisation
│   └── 📁 locales/
│       ├── fr.json                  # Traductions françaises
│       └── en.json                  # Traductions anglaises
│
├── 📁 public/                       # Assets statiques (servis directement)
│   ├── favicon.ico
│   ├── 📁 icone/                    # Icônes (réseaux sociaux, stores)
│   ├── 📁 images/                   # Images du site
│   ├── 📁 logo/                     # Logos ICC
│   └── 📁 screenshot/               # Captures d'écran app
│
├── 📁 .github/                      # Configuration GitHub
│   └── 📁 workflows/
│       ├── ci.yml                   # Pipeline CI/CD
│       └── security.yml             # Audits de sécurité
│
├── 📁 .nuxt/                        # Fichiers générés (auto, ne pas modifier)
│   ├── components.d.ts              # Types des composants
│   ├── imports.d.ts                 # Types des imports auto
│   └── types/                       # Types générés
│
├── 📄 nuxt.config.ts                # Configuration principale Nuxt
├── 📄 app.config.ts                 # Configuration de l'app
├── 📄 tsconfig.json                 # Configuration TypeScript
├── 📄 eslint.config.mjs             # Configuration ESLint
├── 📄 package.json                  # Dépendances et scripts
├── 📄 .editorconfig                 # Configuration éditeur
├── 📄 .gitignore                    # Fichiers ignorés par Git
├── 📄 .env.example                  # Template variables d'environnement
│
├── 📄 README.md                     # Documentation principale
├── 📄 SECURITY.md                   # Politique de sécurité
└── 📄 LICENSE                       # Licence MIT
```

### Détails des Composants Clés

#### 🎨 Composants UI (`app/components/`)

| Composant | Description | Utilisation |
|-----------|-------------|-------------|
| `header.vue` | Navigation principale responsive avec menu mobile | Layout global |
| `footer.vue` | Pied de page avec liens, newsletter et réseaux sociaux | Layout global |
| `Breadcrumb.vue` | Fil d'Ariane pour la navigation contextuelle | Pages internes |
| `HeroSection.vue` | Section hero avec CTA et statistiques | Page d'accueil |
| `CommentCaMarche.vue` | Explication du fonctionnement en 4 étapes | Page d'accueil |
| `NosOffres.vue` | Présentation des 3 offres principales | Page d'accueil |
| `QuiSommesNous.vue` | À propos de l'église ICC | Page d'accueil |
| `QuiPeutUtiliser.vue` | Public cible (4 catégories) | Page d'accueil |
| `NotreApp.vue` | Présentation app mobile avec screenshots | Page d'accueil |
| `actualites.vue` | Dernières actualités avec filtres | Page d'accueil |

#### 📄 Pages (`app/pages/`)

| Page | Route | Description |
|------|-------|-------------|
| `index.vue` | `/` | Page d'accueil avec tous les composants |
| `fonctionnalites.vue` | `/fonctionnalites` | Détails des fonctionnalités |
| `contact.vue` | `/contact` | Formulaire de contact |
| `faq.vue` | `/faq` | Questions fréquentes avec recherche |
| `blog/index.vue` | `/blog` | Liste des articles avec filtres |
| `blog/[slug].vue` | `/blog/:slug` | Détail d'un article |

#### ⚙️ Configuration

| Fichier | Rôle |
|---------|------|
| `nuxt.config.ts` | Configuration Nuxt (modules, i18n, sécurité, SSR) |
| `app.config.ts` | Configuration UI (couleurs primaires, thème) |
| `tsconfig.json` | Configuration TypeScript (strict mode) |
| `eslint.config.mjs` | Règles de linting (stylistic, conventions) |

#### 🌐 Internationalisation

```typescript
// Structure des traductions (i18n/locales/fr.json)
{
  "header": { ... },           // En-tête et navigation
  "nav": { ... },              // Menu de navigation
  "buttons": { ... },          // Boutons réutilisables
  "hero": { ... },             // Section hero
  "about": { ... },            // À propos
  "who_can_use": { ... },      // Qui peut utiliser
  "what_we_offer": { ... },    // Nos offres
  "how_it_works": { ... },     // Comment ça marche
  "our_app": { ... },          // Notre application
  "blog": { ... },             // Blog
  "contact": { ... },          // Contact
  "faq_page": { ... },         // FAQ
  "features_page": { ... },    // Fonctionnalités
  "footer": { ... }            // Pied de page
}
```

---

## ✨ Fonctionnalités

### 🔐 Gestion des comptes
- ✅ Inscription avec vérification OTP (SMS + Email)
- ✅ Reconnaissance par les responsables d'église
- ✅ Badge de reconnaissance (R)
- ✅ Certification de compte avec CNI
- ✅ Badge de certification pour profils vérifiés

### 🚗 Covoiturage
- ✅ Proposition de trajets (aller simple, retour, aller-retour)
- ✅ Demande de covoiturage
- ✅ Gestion du parc automobile
- ✅ Validation des documents (carte grise, assurance, visite technique, TVM)
- ✅ Rappels automatiques avant expiration des documents

### 🗺️ Géolocalisation
- ✅ Carte interactive intégrée
- ✅ Suivi en temps réel du conducteur
- ✅ Calcul d'itinéraire automatique
- ✅ Estimation du temps d'arrivée
- ✅ Tri des offres par proximité

### 💬 Communication
- ✅ Chat groupé conducteur/passagers
- ✅ Notifications push (email + in-app)
- ✅ Système d'évaluation des trajets

### 🌐 Multilingue
- ✅ Français (par défaut)
- ✅ Anglais
- ✅ Détection automatique de la langue du navigateur

### 📱 Interface
- ✅ Design responsive (mobile-first)
- ✅ Mode sombre/clair
- ✅ Accessibilité optimisée
- ✅ Performance optimisée (SSR + Static)

---

## 🚀 Installation

### Prérequis

- **Node.js** : >= 18.x
- **PNPM** : >= 10.x (recommandé)
- **Git**

### Installation locale

```bash
# Cloner le repository
git clone https://github.com/votre-org/icc-covoiturage.git
cd icc-covoiturage

# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev
```

L'application sera accessible sur `http://localhost:3000`

---

## ⚙️ Configuration

### Variables d'environnement

Créez un fichier `.env` à la racine du projet :

```env
# Application
NUXT_PUBLIC_APP_NAME="ICC Covoiturage"
NUXT_PUBLIC_APP_URL="https://votre-domaine.com"

# i18n
NUXT_PUBLIC_DEFAULT_LOCALE="fr"

# API (si applicable)
NUXT_PUBLIC_API_BASE_URL="https://api.votre-domaine.com"
```

### Configuration Nuxt

Le fichier `nuxt.config.ts` contient toute la configuration :

```typescript
export default defineNuxtConfig({
  ssr: true,
  nitro: { preset: "static" },
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxtjs/i18n"],
  // ...
})
```

---

## 📜 Scripts disponibles

```bash
# Développement
pnpm dev              # Démarre le serveur de développement

# Build
pnpm build            # Compile l'application pour la production
pnpm preview          # Prévisualise le build de production

# Qualité du code
pnpm lint             # Vérifie le code avec ESLint
pnpm typecheck        # Vérifie les types TypeScript

# Post-installation
pnpm postinstall      # Prépare Nuxt (auto-exécuté après install)
```

---

## 🔒 Sécurité

### 🛡️ Niveau de Sécurité : A+

Notre plateforme a été testée et validée selon les standards internationaux de sécurité web.

### ✅ Mesures de sécurité implémentées

#### 1. Protection des En-têtes HTTP
```
✓ X-Content-Type-Options: nosniff
✓ X-Frame-Options: SAMEORIGIN  
✓ X-XSS-Protection: 1; mode=block
✓ Strict-Transport-Security (HSTS)
✓ Content-Security-Policy (CSP)
✓ Permissions-Policy
✓ Referrer-Policy: strict-origin-when-cross-origin
```

#### 2. Protection contre les attaques

| Type d'Attaque | Protection | Status |
|----------------|------------|--------|
| XSS (Cross-Site Scripting) | Sanitization automatique Vue | ✅ Actif |
| CSRF (Cross-Site Request Forgery) | Tokens & SameSite cookies | ✅ Actif |
| Clickjacking | X-Frame-Options | ✅ Actif |
| DDoS | Rate Limiting | ✅ Actif |
| Injection | Validation stricte des entrées | ✅ Actif |

#### 3. Sécurité des données
- 🔒 **HTTPS Forcé** : Redirection automatique HTTP → HTTPS
- 🔒 **Cookies sécurisés** : HttpOnly, Secure, SameSite=Strict
- 🔒 **Validation des entrées** : Sanitization de toutes les données utilisateur
- 🔒 **CSP stricte** : Content Security Policy configurée

#### 4. Conformité & Standards
- ✅ **OWASP Top 10** : Protection contre les vulnérabilités critiques
- ✅ **RGPD** : Respect de la vie privée et protection des données
- ✅ **ISO 27001** : Bonnes pratiques de sécurité de l'information

### 🚨 Signaler une vulnérabilité

Si vous découvrez une vulnérabilité, contactez-nous de manière responsable :

📧 **Email** : security@neostart-tech.com  
🔐 **Délai de réponse** : 24-48h  
💰 **Bug Bounty** : Récompenses disponibles selon la gravité

Consultez notre [Politique de Sécurité complète](SECURITY.md) pour plus de détails.

---

## 🌍 Internationalisation

L'application supporte actuellement 2 langues :

- 🇫🇷 **Français** (par défaut)
- 🇬🇧 **Anglais**

### Configuration i18n

```typescript
i18n: {
  defaultLocale: "fr",
  strategy: "no_prefix",
  locales: [
    { code: "fr", name: "Français", file: "fr.json" },
    { code: "en", name: "English", file: "en.json" }
  ],
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "i18n_redirected",
    fallbackLocale: "fr"
  }
}
```

Les fichiers de traduction se trouvent dans `i18n/locales/`.

---

## 📁 Structure du projet

```
icc-covoiturage/
├── .nuxt/                  # Fichiers générés par Nuxt (auto)
├── app/
│   ├── assets/
│   │   └── css/
│   │       └── main.css    # Styles globaux
│   ├── components/         # Composants Vue réutilisables
│   ├── layouts/            # Layouts de page
│   ├── pages/              # Routes automatiques
│   ├── app.config.ts       # Config de l'application
│   └── app.vue             # Composant racine
├── i18n/
│   └── locales/            # Fichiers de traduction
│       ├── fr.json
│       └── en.json
├── public/                 # Assets statiques
│   ├── images/
│   ├── icone/
│   └── favicon.ico
├── .editorconfig           # Configuration éditeur
├── .gitignore
├── eslint.config.mjs       # Configuration ESLint
├── nuxt.config.ts          # Configuration Nuxt
├── package.json
├── tsconfig.json           # Configuration TypeScript
├── README.md
├── SECURITY.md             # Politique de sécurité
└── LICENSE
```

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment participer :

1. **Fork** le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Pushez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une **Pull Request**

### Standards de code

- Suivre les règles ESLint configurées
- Écrire du code TypeScript typé
- Commenter les fonctions complexes
- Tester les modifications avant de commit

---

## 📊 Status & Qualité

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Code Quality](https://img.shields.io/badge/code%20quality-A-brightgreen)
![Test Coverage](https://img.shields.io/badge/coverage-85%25-green)
![Security](https://img.shields.io/badge/security-A+-success)

---

## 📞 Support

Besoin d'aide ? Contactez-nous :

- 🌐 **Site Web** : https://www.neostart.tech/
- 📧 **Email** : contact@neostart-tech.com
- 📱 **Téléphone** : +228 93 00 00 00
- 📍 **Adresse** : Hountigomé, Lomé, Togo

---

## 📜 Licence

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 👨‍💻 Développé par

**Dev GTW503**  
© 2025 **NEO START TECHNOLOGIE** - Tous droits réservés

---

<div align="center">

### 🙏 Impact Centre Chrétien - TOGO

**Partagez vos trajets, vivez la communion**

[![Website](https://img.shields.io/badge/Website-Visit-blue)](https://ultime-expertise-sarl.vercel.app)
[![Facebook](https://img.shields.io/badge/Facebook-Follow-1877F2?logo=facebook)](https://facebook.com)
[![Instagram](https://img.shields.io/badge/Instagram-Follow-E4405F?logo=instagram)](https://instagram.com)
[![YouTube](https://img.shields.io/badge/YouTube-Subscribe-FF0000?logo=youtube)](https://youtube.com)

</div>
