/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration pour éviter les avertissements sur les lockfiles multiples
  devIndicators: {
    buildActivity: false,
  },
  // Configuration Turbopack vide pour éviter l'erreur
  turbopack: {},
}

module.exports = nextConfig
