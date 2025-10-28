# Système de Sections Justice.cool

Ce système de sections est inspiré des bonnes pratiques de Payblocks et offre une gestion cohérente et réutilisable des layouts.

## 🏗️ Composants disponibles

### 1. Container
Composant de base pour centrer et limiter la largeur du contenu.

```tsx
import { Container } from "@/components/ui/container"

<Container size="lg" className="custom-class">
  <p>Contenu centré avec padding responsive</p>
</Container>
```

**Props :**
- `size`: "sm" | "md" | "lg" | "xl" | "full" (défaut: "lg")
- `disablePadding`: boolean (défaut: false)
- `className`: string (classes CSS supplémentaires)

### 2. Section
Wrapper principal pour toutes les sections avec gestion des couleurs et espacements.

```tsx
import { Section } from "@/components/ui/section"

<Section backgroundColor="white" padding="lg" containerSize="lg">
  <h1>Ma section</h1>
</Section>
```

**Props :**
- `backgroundColor`: "white" | "gray" | "primary" | "secondary" | "muted" | "transparent"
- `padding`: "none" | "sm" | "md" | "lg" | "xl"
- `containerSize`: "sm" | "md" | "lg" | "xl" | "full"
- `disableContainer`: boolean (pour les cas spéciaux)
- `id`: string (pour l'ancrage)

### 3. Grid
Système de grille responsive avec gestion des colonnes et espacements.

```tsx
import { Grid } from "@/components/ui/grid"

<Grid cols={2} gap="lg" responsive={{ md: 3, lg: 4 }}>
  <div>Colonne 1</div>
  <div>Colonne 2</div>
  <div>Colonne 3</div>
  <div>Colonne 4</div>
</Grid>
```

**Props :**
- `cols`: nombre de colonnes par défaut
- `gap`: "none" | "sm" | "md" | "lg" | "xl"
- `responsive`: objet avec breakpoints (sm, md, lg, xl)

### 4. RenderSections
Système de rendu de sections multiples (inspiré de Payblocks).

```tsx
import { RenderSections, SectionData } from "@/components/ui/sections"

const sections: SectionData[] = [
  {
    type: "hero",
    backgroundColor: "white",
    padding: "xl",
    content: <h1>Hero Section</h1>
  },
  {
    type: "features", 
    backgroundColor: "gray",
    padding: "lg",
    content: <div>Features content</div>
  }
]

<RenderSections sections={sections} />
```

## 📐 Tailles et espacements

### Container sizes
- `sm`: max-width: 32rem (512px)
- `md`: max-width: 48rem (768px)  
- `lg`: max-width: 72rem (1152px) - **défaut**
- `xl`: max-width: 80rem (1280px)
- `full`: pas de limite de largeur

### Padding options
- `none`: pas de padding vertical
- `sm`: py-8 (2rem)
- `md`: py-16 (4rem)
- `lg`: py-24 (6rem) - **défaut**
- `xl`: py-32 (8rem)

### Gap options
- `none`: gap-0
- `sm`: gap-4 (1rem)
- `md`: gap-6 (1.5rem) - **défaut**
- `lg`: gap-8 (2rem)
- `xl`: gap-12 (3rem)

## 🎨 Couleurs de fond

- `white`: bg-white
- `gray`: bg-gray-50
- `primary`: bg-primary
- `secondary`: bg-secondary
- `muted`: bg-muted
- `transparent`: bg-transparent

## 💡 Exemples d'utilisation

### Section Hero simple
```tsx
<Section backgroundColor="white" padding="xl">
  <div className="text-center">
    <h1 className="text-4xl font-bold">Titre principal</h1>
    <p className="text-lg text-gray-600 mt-4">Sous-titre</p>
  </div>
</Section>
```

### Section avec grille
```tsx
<Section backgroundColor="gray" padding="lg">
  <Grid cols={1} gap="lg" responsive={{ md: 2, lg: 3 }}>
    {features.map(feature => (
      <FeatureCard key={feature.id} {...feature} />
    ))}
  </Grid>
</Section>
```

### Section pleine largeur
```tsx
<Section backgroundColor="primary" padding="lg" disableContainer>
  <div className="w-full h-64 bg-gradient-to-r from-blue-500 to-purple-600">
    <Container>
      <h2 className="text-white text-2xl">Contenu avec container interne</h2>
    </Container>
  </div>
</Section>
```

## 🔄 Migration depuis l'ancien système

**Avant :**
```tsx
<section className="flex items-center justify-center py-24 bg-white">
  <div className="w-full max-w-2xl flex flex-col gap-6 items-start px-4">
    {/* contenu */}
  </div>
</section>
```

**Après :**
```tsx
<Section backgroundColor="white" padding="lg" containerSize="lg">
  <div className="w-full max-w-2xl flex flex-col gap-6 items-start">
    {/* contenu */}
  </div>
</Section>
```

## ✅ Avantages du nouveau système

1. **Cohérence** : Spacing et couleurs uniformes
2. **Réutilisabilité** : Composants modulaires
3. **Maintenabilité** : Centralisation des styles
4. **Responsive** : Gestion automatique des breakpoints
5. **Flexibilité** : Props configurables pour tous les cas d'usage
6. **Performance** : Moins de CSS dupliqué
7. **DX** : Meilleure expérience développeur
