# Site Web Grand Public - Justice.cool

Ce projet est le site web grand public de Justice.cool, développé avec Next.js et utilisant les composants Shadcn UI pour l'interface utilisateur.

## Structure du Projet

Le projet est organisé selon la structure définie dans le document Coda "Documentation Site Web Grand Public" et comprend :

### Menu Principal (Sidebar)
- **Accueil** - Page d'accueil du site
- **Chat** - Interface de chat avec l'IA Justice.cool
- **Organisations** - Liste et gestion des organisations avec sous-menus :
  - Liste des organisations
  - Minisite - Accueil
  - Minisite - Offres
  - Minisite - Articles
  - Minisite - À propos

### Menu Utilisateur
- Espace utilisateur public
- Mes dossiers en cours
- Mon profil utilisateur
- Mon profil entreprise
- Mes organisations
- Mes articles

### Menu Secondaire
- Articles liste
- À propos de Justice.cool
- Presse
- Mentions Légales

## Technologies Utilisées

- **Next.js 16** - Framework React
- **TypeScript** - Langage de programmation
- **Tailwind CSS** - Framework CSS
- **Shadcn UI** - Composants d'interface utilisateur
- **Lucide React** - Icônes
- **Radix UI** - Composants primitifs accessibles

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Lancer en production
npm start
```

## Structure des Fichiers

```
site-web-grand-public/
├── app/
│   ├── globals.css          # Styles globaux avec variables CSS
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Page d'accueil avec sidebar
├── components/
│   └── ui/
│       ├── button.tsx       # Composant bouton
│       └── sidebar.tsx      # Composant sidebar principal
├── lib/
│   └── utils.ts             # Utilitaires (cn function)
├── tailwind.config.js       # Configuration Tailwind
├── postcss.config.js        # Configuration PostCSS
├── tsconfig.json            # Configuration TypeScript
└── package.json             # Dépendances et scripts
```

## Fonctionnalités de la Sidebar

- **Responsive** - S'adapte aux écrans mobiles et desktop
- **Collapsible** - Peut être réduite en mode icône
- **Raccourci clavier** - Cmd/Ctrl + B pour basculer
- **Persistance** - Mémorise l'état ouvert/fermé
- **Navigation hiérarchique** - Support des sous-menus
- **Accessibilité** - Conforme aux standards WCAG

## Personnalisation

Les couleurs et styles peuvent être personnalisés via les variables CSS dans `app/globals.css` :

```css
:root {
  --sidebar-background: 0 0% 98%;
  --sidebar-foreground: 240 5.3% 26.1%;
  --sidebar-primary: 240 5.9% 10%;
  /* ... autres variables */
}
```

## Développement

Le projet suit les bonnes pratiques de développement :

- Composants réutilisables
- TypeScript pour la sécurité des types
- Tailwind CSS pour le styling
- Structure modulaire et maintenable

## Auteur

Développé par Romain DROSNE pour Justice.cool
