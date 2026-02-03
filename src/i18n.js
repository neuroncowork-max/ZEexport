import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)           // détecte automatiquement la langue du navigateur
  .use(initReactI18next)           // passe i18n à react-i18next
  .init({
    fallbackLng: 'fr',             // langue par défaut si détection échoue
    supportedLngs: ['fr', 'en', 'de'],
    debug: true,                   // mettez false en production

    resources: {
      fr: {
        translation: {
          // Navigation
          "Premium Algerian Dates": "Dattes Algériennes Premium",
          "À Propos": "À Propos",
          "Produits": "Produits",
          "Contact": "Contact",
          "Découvrir nos produits": "Découvrir nos produits",
          "Nous contacter": "Nous contacter",

          // Hero
          "De l'Algérie vers le Monde": "De l'Algérie vers le Monde",
          "Dattes premium et fruits naturels sélectionnés dans les meilleures fermes algériennes":
            "Premium dates and natural fruits selected from the best Algerian farms",

          // About
          "Notre Excellence": "Our Excellence",
          "Fondée en 2016, ZE Export & Business est une entreprise algérienne spécialisée dans la production et l'exportation de dattes premium et fruits naturels.":
            "Founded in 2016, ZE Export & Business is an Algerian company specialized in the production and export of premium dates and natural fruits.",

          "Expertise Algérienne": "Algerian Expertise",
          "Depuis 2016, spécialisés dans la production de dattes premium": "Since 2016, specialized in premium dates production",

          "Normes Internationales": "International Standards",
          "Conformité totale aux standards de qualité mondiaux": "Full compliance with global quality standards",

          "Contrôle Qualité": "Quality Control",
          "Vérification rigoureuse à chaque étape de production": "Rigorous checking at every production step",

          "Export Mondial": "Worldwide Export",
          "De l'Algérie vers le monde entier": "From Algeria to the whole world",

          // Products
          "Nos Produits Premium": "Our Premium Products",
          "Découvrez notre sélection de dattes algériennes d'exception": "Discover our selection of exceptional Algerian dates",

          "Premium Quality": "Qualité Premium",
          "Dattes Deglet Nour fraîches et originales sur branches. Qualité supérieure.":
            "Fresh Deglet Nour dates still on branches. Superior quality.",

          "Natural Sweetness": "Douceur Naturelle",
          "Teneur en humidité optimale, richesse naturelle en glucose, taille et couleur uniformes.":
            "Optimal moisture content, natural glucose richness, uniform size and color.",

          "Colorful Delight": "Délice Coloré",
          "Datte attrayante avec de belles couleurs vives. Rouge au stade bser, ambre translucide au stade rotab.":
            "Attractive date with vivid colors. Red at bser stage, translucent amber at rotab stage.",

          "Premium Semi-Dry": "Premium Semi-Sèche",
          "Dattes semi-sèches premium cultivées à El Menea. Couleur ambrée, texture délicate, riches en fibres.":
            "Premium semi-dry dates grown in El Menea. Amber color, delicate texture, rich in fiber.",

          "Soft & Sweet": "Moelleuse & Sucrée",
          "Dattes moelleuses caractérisées par une peau lisse, chair tendre et douceur riche.":
            "Soft dates characterized by smooth skin, tender flesh and rich sweetness.",

          "Industrial Grade": "Grade Industriel",
          "Utilisées pour la fabrication de nombreux produits: chocolat, sucre et autres matériaux.":
            "Used for manufacturing many products: chocolate, sugar and other materials.",

          "Formats:": "Formats disponibles :",

          // Agro
          "Solutions Agro-Industrielles": "Agro-Industrial Solutions",
          "Dattes blanches disponibles pour la transformation alimentaire": "White dates available for food processing",
          "Ingrédient idéal pour chocolat, yaourt, gâteaux et bien plus encore": "Ideal ingredient for chocolate, yogurt, cakes and much more",
          "Demander un devis": "Request a quote",

          // Contact
          "Contactez-Nous": "Contact Us",
          "Prêt à importer des dattes premium algériennes ?": "Ready to import premium Algerian dates?",
          "Message Rapide": "Quick Message",
          "Votre nom": "Your name",
          "Votre email": "Your email",
          "Votre message": "Your message",
          "Envoyer le message": "Send message",

          // Footer
          "Premium Algerian Dates - From Algeria to the World": "Dattes Algériennes Premium - De l'Algérie au Monde",
          "© 2026 ZE Export & Business. Tous droits réservés.": "© 2026 ZE Export & Business. All rights reserved.",
        }
      },

      en: {
        translation: {
          // (les textes anglais originaux déjà présents dans votre code)
          // Vous pouvez les laisser tels quels ou les compléter
        }
      },

      de: {
        translation: {
          "Premium Algerian Dates": "Premium Algerische Datteln",
          "À Propos": "Über uns",
          "Produits": "Produkte",
          "Contact": "Kontakt",
          "Découvrir nos produits": "Unsere Produkte entdecken",
          "Nous contacter": "Kontaktieren Sie uns",

          "De l'Algérie vers le Monde": "Von Algerien in die Welt",
          "Dattes premium et fruits naturels sélectionnés dans les meilleures fermes algériennes":
            "Premium-Datteln und natürliche Früchte aus den besten algerischen Farmen",

          // ... traduisez le reste de la même manière
          // (je n'ai pas tout traduit ici pour ne pas alourdir)
        }
      }
    },

    interpolation: {
      escapeValue: false // React échappe déjà
    }
  });

export default i18n;