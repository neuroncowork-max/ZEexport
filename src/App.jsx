import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Globe, Award, Shield, TrendingUp, Languages } from 'lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ZEExportWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [language, setLanguage] = useState('fr');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const translations = {
  fr: {
    nav: {
      about: "À Propos",
      products: "Produits",
      offer: "premium",
      contact: "Contact"
    },
    hero: {
      title: "De l'Algérie\nvers le Monde",
      subtitle: "Huiles d'olive, vinaigres, tahini et épices authentiques d'Algérie",
      cta1: "Découvrir nos produits",
      cta2: "Nous contacter",
      imageAlt: "Produits premium algériens"
    },
    about: {
      title: "Notre Excellence",
      description: "Fondée en 2016, ZE Export & Business est une entreprise algérienne spécialisée dans la production et l'exportation de produits alimentaires premium.",
      description2: "Nous sélectionnons avec soin les meilleures variétés des fermes algériennes pour livrer des produits authentiques, sains et de haute qualité à nos partenaires internationaux.",
      features: [
        { title: "Expertise Algérienne", description: "Depuis 2016, spécialisés dans les produits de terroir" },
        { title: "Normes Internationales", description: "Conformité totale aux standards mondiaux" },
        { title: "Contrôle Qualité", description: "Vérification rigoureuse à chaque étape" },
        { title: "Export Mondial", description: "De l'Algérie vers le monde entier" }
      ]
    },
    products: {
      title: "Nos Produits Premium",
      subtitle: "Huiles d'olive, vinaigres, tahini et épices d'exception made in Algeria",
      formats: "Formats",
      items: [
        { name: "Deglet Nour Extra", subtitle: "Qualité Premium", description: "Dattes Deglet Nour fraîches et originales sur branches. Qualité supérieure." },
        { name: "Huile d'Olive Extra Vierge", subtitle: "Format Pratique Quotidien", description: "Huile d'olive extra vierge pressée à froid, issue des meilleures olives algériennes. Goût fruité et authentique." },
        { name: "Huile d'Olive Extra Vierge", subtitle: "Grand Format Familial", description: "Format familial économique. Même qualité premium, idéale pour la cuisine quotidienne ou professionnelle." },
        { name: "Huile d'Olive au Piment", subtitle: "Infusion Artisanale", description: "Huile d'olive extra vierge infusée au piment frais. Parfaite pour relever vos plats avec une touche piquante méditerranéenne." },
        { name: "Crème de Sésame (Tahini)", subtitle: "Pur & Naturel", description: "Tahini 100% sésame pur, sans additif. Onctueux, riche en goût, idéal pour houmous, sauces et pâtisseries orientales." },
        { name: "Vinaigre de Pomme Balsamique", subtitle: "Vieilli Traditionnellement", description: "Vinaigre de pomme vieilli naturellement, au goût riche et légèrement sucré. Parfait pour salades et marinades." },
        { name: "Vinaigre de Pomme Balsamique", subtitle: "Format Compact & Nomade", description: "Petit format pratique du vinaigre balsamique de pomme artisanal. Intense et raffiné." },
        { name: "Piment Rouge Algérien", subtitle: "Épice Pure", description: "Piment rouge séché et moulu, très aromatique. Apporte chaleur et profondeur à tous vos plats traditionnels." }
      ]
    },
    agro: {
      title: "Solutions Agro-Industrielles",
      subtitle: "Produits disponibles en vrac pour transformation",
      description: "Ingrédients de qualité pour l'industrie alimentaire",
      cta: "Demander un devis"
    },
    offer: {
      badge: "Offre Spéciale – Octobre 2025",
      title: "Découvrez notre sélection premium Octobre 2025",
      subtitle: "Dattes algériennes d'exception, dérivés innovants et produits végétaux de haute qualité – Prix compétitifs & qualité garantie",
      datesTitle: "Dattes de Qualité Premium",
      dates: {
        degletNour: "Deglet Nour premium – plusieurs formes",
        whiteDates: "Dattes blanches pour transformation alimentaire",
        trays: "Dattes en plateaux",
        branches: "Dattes sur branches et arjounes"
      },
      otherProductsTitle: "Produits Végétaux & Huiles d'exception",
      otherProducts: {
        oliveOil: "Huile d'olive extra vierge naturelle (Nord & Hauts Plateaux)",
        tomatoSauce: "Sauces tomates de haute qualité",
        chiliSauce: "Sauces pimentées artisanales"
      },
      derivativesTitle: "Dérivés Innovants de Dattes",
      derivatives: {
        dried: "Dattes séchées",
        paste: "Pâte de dattes",
        syrup: "Sirop (Dibs)",
        molasses: "Mélasse",
        sugar: "Sucre de dattes",
        powder: "Poudre de dattes",
        jam: "Confiture",
        puree: "Purée",
        vinegar: "Vinaigre de dattes",
        beverages: "Boissons à base de dattes",
        seedOil: "Huile de noyau",
        seedPowder: "Poudre de noyau",
        seedCoffee: "Café de noyau"
      },
      conclusion: {
        delivery: "Livraison soignée et fiable vers tous les pays européens — Qualité supérieure constante, fidèle à la réputation de",
        partnership: "Nous recherchons activement des partenariats durables avec importateurs, distributeurs, transformateurs et industriels agroalimentaires.",
        certifications: "Partenariats avec fournisseurs certifiés – Références et qualifications internationales reconnues."
      },
      imageAlt: "ZE Export & Business - Produits premium algériens",
      imageCaption: "Qualité algérienne authentique – Exportée dans le monde entier",
      contact: {
        title: "Contactez-nous directement",
        intro: "Nous sommes à votre disposition pour toute demande de devis, échantillons ou partenariat.",
        phonesTitle: "Téléphones",
        phones: {
          international: "International / WhatsApp :",
          hongkong: "Hong Kong / Asie :"
        },
        emailTitle: "Email",
        responseTime: "Réponse sous 24h ouvrées – Partenariats sérieux bienvenus"
      }
    },
    contact: {
      title: "Contactez-Nous",
      subtitle: "Prêt à importer des produits algériens authentiques ?",
      email: "Email",
      phone: "Téléphone",
      address: "Adresse",
      formTitle: "Message Rapide",
      formName: "Votre nom",
      formEmail: "Votre email",
      formMessage: "Votre message",
      formSubmit: "Envoyer le message"
    },
    footer: {
      tagline: "Produits Premium Algériens - De l'Algérie vers le Monde",
      rights: "Tous droits réservés"
    }
  },

  en: {
    nav: { 
      about: "About", 
      products: "Products", 
      offer: "premium",
      contact: "Contact" 
    },
    hero: {
      title: "From Algeria\nto the World",
      subtitle: "Authentic Algerian olive oils, vinegars, tahini & spices",
      cta1: "Discover our products",
      cta2: "Contact us",
      imageAlt: "Premium Algerian Products"
    },
    about: {
      title: "Our Excellence",
      description: "Founded in 2016, ZE Export & Business is an Algerian company specializing in the production and export of premium food products.",
      description2: "We carefully select the finest varieties from Algerian farms to deliver authentic, healthy, and high-quality products to our global partners.",
      features: [
        { title: "Algerian Expertise", description: "Since 2016, specialized in terroir products" },
        { title: "International Standards", description: "Full compliance with global standards" },
        { title: "Quality Control", description: "Rigorous verification at every stage" },
        { title: "Global Export", description: "From Algeria to the world" }
      ]
    },
    products: {
      title: "Our Premium Products",
      subtitle: "Exceptional olive oils, vinegars, tahini and spices from Algeria",
      formats: "Sizes",
      items: [
        { name: "Deglet Nour Extra", subtitle: "Premium Quality", description: "Fresh and original Deglet Nour dates on branches. Superior quality." },
        { name: "Extra Virgin Olive Oil", subtitle: "Everyday Practical Size", description: "Cold-pressed extra virgin olive oil from the finest Algerian olives. Fruity and authentic taste." },
        { name: "Extra Virgin Olive Oil", subtitle: "Family & Professional Size", description: "Economic family size. Same premium quality, perfect for daily or professional cooking." },
        { name: "Chili-Infused Olive Oil", subtitle: "Artisanal Blend", description: "Extra virgin olive oil infused with fresh chili. Perfect to spice up your dishes with Mediterranean heat." },
        { name: "Sesame Cream (Tahini)", subtitle: "Pure & Natural", description: "100% pure sesame tahini, no additives. Creamy, rich flavor, ideal for hummus, sauces and oriental pastries." },
        { name: "Apple Balsamic Vinegar", subtitle: "Traditional Aged", description: "Naturally aged apple vinegar with rich, slightly sweet taste. Perfect for salads and marinades." },
        { name: "Apple Balsamic Vinegar", subtitle: "Compact Travel Size", description: "Convenient small bottle of artisanal apple balsamic vinegar. Intense and refined." },
        { name: "Algerian Red Chili", subtitle: "Pure Spice", description: "Dried and ground red chili, highly aromatic. Adds warmth and depth to traditional dishes." }
      ]
    },
    agro: {
      title: "Agro-Industrial Solutions",
      subtitle: "Bulk products available for food processing",
      description: "High-quality ingredients for the food industry",
      cta: "Request a quote"
    },
    offer: {
      badge: "Special Offer – October 2025",
      title: "Discover our premium selection October 2025",
      subtitle: "Exceptional Algerian dates, innovative derivatives and high-quality plant products – Competitive prices & guaranteed quality",
      datesTitle: "Premium Quality Dates",
      dates: {
        degletNour: "Premium Deglet Nour – various forms",
        whiteDates: "White dates for food processing",
        trays: "Dates in trays",
        branches: "Dates on branches and arjounes"
      },
      otherProductsTitle: "Premium Plant Products & Oils",
      otherProducts: {
        oliveOil: "Natural extra virgin olive oil (North & High Plateaus)",
        tomatoSauce: "High-quality tomato sauces",
        chiliSauce: "Artisanal chili sauces"
      },
      derivativesTitle: "Innovative Date Derivatives",
      derivatives: {
        dried: "Dried dates",
        paste: "Date paste",
        syrup: "Date syrup (Dibs)",
        molasses: "Date molasses",
        sugar: "Date sugar",
        powder: "Date powder",
        jam: "Date jam",
        puree: "Date purée",
        vinegar: "Date vinegar",
        beverages: "Date-based beverages",
        seedOil: "Date seed oil",
        seedPowder: "Date seed powder",
        seedCoffee: "Date seed coffee"
      },
      conclusion: {
        delivery: "Careful and reliable delivery to all European countries — Constant superior quality, true to the reputation of",
        partnership: "We are actively seeking long-term partnerships with importers, distributors, processors and agri-food industries.",
        certifications: "Partnerships with certified suppliers – Internationally recognized references and qualifications."
      },
      imageAlt: "ZE Export & Business - Premium Algerian products",
      imageCaption: "Authentic Algerian quality – Exported worldwide",
      contact: {
        title: "Contact us directly",
        intro: "We are at your disposal for any request for quotes, samples or partnership.",
        phonesTitle: "Phones",
        phones: {
          international: "International / WhatsApp:",
          hongkong: "Hong Kong / Asia:"
        },
        emailTitle: "Email",
        responseTime: "Response within 24 working hours – Serious partnerships welcome"
      }
    },
    contact: {
      title: "Contact Us",
      subtitle: "Ready to import authentic Algerian products?",
      email: "Email",
      phone: "Phone",
      address: "Address",
      formTitle: "Quick Message",
      formName: "Your name",
      formEmail: "Your email",
      formMessage: "Your message",
      formSubmit: "Send message"
    },
    footer: {
      tagline: "Premium Algerian Products - From Algeria to the World",
      rights: "All rights reserved"
    }
  },

  de: {
    nav: { 
      about: "Über uns", 
      products: "Produkte",
      offer: "Hochwertig",
      contact: "Kontakt" 
    },
    hero: {
      title: "Von Algerien\nin die Welt",
      subtitle: "Authentische algerische Olivenöle, Essige, Tahini & Gewürze",
      cta1: "Unsere Produkte entdecken",
      cta2: "Kontaktieren Sie uns",
      imageAlt: "Premium-Produkte aus Algerien"
    },
    about: {
      title: "Unsere Exzellenz",
      description: "ZE Export & Business wurde 2016 gegründet und ist ein algerisches Unternehmen, das sich auf die Produktion und den Export von Premium-Lebensmitteln spezialisiert hat.",
      description2: "Wir wählen sorgfältig die besten Sorten aus algerischen Farmen aus, um authentische, gesunde und hochwertige Produkte an unsere internationalen Partner zu liefern.",
      features: [
        { title: "Algerische Expertise", description: "Seit 2016 spezialisiert auf Terroir-Produkte" },
        { title: "Internationale Standards", description: "Vollständige Einhaltung globaler Normen" },
        { title: "Qualitätskontrolle", description: "Strenge Überprüfung in jeder Phase" },
        { title: "Weltweiter Export", description: "Von Algerien in die Welt" }
      ]
    },
    products: {
      title: "Unsere Premium-Produkte",
      subtitle: "Außergewöhnliche Olivenöle, Essige, Tahini und Gewürze aus Algerien",
      formats: "Größen",
      items: [
        { name: "Deglet Nour Extra", subtitle: "Premium-Qualität", description: "Frische und originale Deglet Nour-Datteln an Zweigen. Überlegene Qualität." },
        { name: "Natives Olivenöl Extra", subtitle: "Praktische Alltagsgröße", description: "Kaltgepresstes natives Olivenöl extra aus den besten algerischen Oliven. Fruchtig und authentisch." },
        { name: "Natives Olivenöl Extra", subtitle: "Familien- & Profi-Größe", description: "Wirtschaftliches Familienformat. Gleiche Premium-Qualität, ideal für täglichen oder professionellen Gebrauch." },
        { name: "Olivenöl mit Chili", subtitle: "Artisanale Infusion", description: "Natives Olivenöl extra mit frischem Chili infundiert. Perfekt zum Würzen mit mediterraner Schärfe." },
        { name: "Sesamcreme (Tahini)", subtitle: "Pur & Natürlich", description: "100% reines Sesam-Tahini ohne Zusatzstoffe. Cremig, intensiver Geschmack, ideal für Hummus und orientalische Gerichte." },
        { name: "Apfel-Balsamicoessig", subtitle: "Traditionell gereift", description: "Natürlich gereifter Apfelessig mit vollem, leicht süßlichem Geschmack. Perfekt für Salate und Marinaden." },
        { name: "Apfel-Balsamicoessig", subtitle: "Kompakte Reisegröße", description: "Praktische kleine Flasche des handwerklichen Apfel-Balsamicoessigs. Intensiv und edel." },
        { name: "Algerischer Roter Chili", subtitle: "Reines Gewürz", description: "Getrockneter und gemahlener roter Chili, sehr aromatisch. Verleiht traditionellen Gerichten Wärme und Tiefe." }
      ]
    },
    agro: {
      title: "Agro-industrielle Lösungen",
      subtitle: "Produkte in Großgebinden für die Lebensmittelverarbeitung",
      description: "Hochwertige Zutaten für die Lebensmittelindustrie",
      cta: "Angebot anfordern"
    },
    offer: {
      badge: "Sonderangebot – Oktober 2025",
      title: "Entdecken Sie unsere Premium-Auswahl Oktober 2025",
      subtitle: "Außergewöhnliche algerische Datteln, innovative Derivate und hochwertige pflanzliche Produkte – Wettbewerbsfähige Preise & garantierte Qualität",
      datesTitle: "Premium-Qualität Datteln",
      dates: {
        degletNour: "Premium Deglet Nour – verschiedene Formen",
        whiteDates: "Weiße Datteln für Lebensmittelverarbeitung",
        trays: "Datteln in Tabletts",
        branches: "Datteln an Zweigen und Arjounes"
      },
      otherProductsTitle: "Premium-Pflanzenprodukte & Öle",
      otherProducts: {
        oliveOil: "Natürliches extra natives Olivenöl (Nord & Hochplateaus)",
        tomatoSauce: "Hochwertige Tomatensaucen",
        chiliSauce: "Handwerkliche Chilisauce"
      },
      derivativesTitle: "Innovative Dattelderivate",
      derivatives: {
        dried: "Getrocknete Datteln",
        paste: "Dattelpaste",
        syrup: "Dattelsirup (Dibs)",
        molasses: "Dattelmelasse",
        sugar: "Dattelzucker",
        powder: "Dattelpulver",
        jam: "Dattelkonfitüre",
        puree: "Dattelpurée",
        vinegar: "Dattelessig",
        beverages: "Getränke auf Dattelbasis",
        seedOil: "Dattelkernöl",
        seedPowder: "Dattelkernpulver",
        seedCoffee: "Dattelkernkaffee"
      },
      conclusion: {
        delivery: "Sorgfältige und zuverlässige Lieferung in alle europäischen Länder — Ständige überlegene Qualität, getreu dem Ruf von",
        partnership: "Wir suchen aktiv langfristige Partnerschaften mit Importeuren, Distributoren, Verarbeitern und der Lebensmittelindustrie.",
        certifications: "Partnerschaften mit zertifizierten Lieferanten – International anerkannte Referenzen und Qualifikationen."
      },
      imageAlt: "ZE Export & Business - Premium-Produkte aus Algerien",
      imageCaption: "Authentische algerische Qualität – Weltweit exportiert",
      contact: {
        title: "Kontaktieren Sie uns direkt",
        intro: "Wir stehen Ihnen für Anfragen zu Angeboten, Mustern oder Partnerschaften gerne zur Verfügung.",
        phonesTitle: "Telefone",
        phones: {
          international: "International / WhatsApp:",
          hongkong: "Hongkong / Asien:"
        },
        emailTitle: "E-Mail",
        responseTime: "Antwort innerhalb von 24 Arbeitsstunden – Seriöse Partnerschaften willkommen"
      }
    },
    contact: {
      title: "Kontaktieren Sie uns",
      subtitle: "Bereit, authentische algerische Produkte zu importieren?",
      email: "E-Mail",
      phone: "Telefon",
      address: "Adresse",
      formTitle: "Schnelle Nachricht",
      formName: "Ihr Name",
      formEmail: "Ihre E-Mail",
      formMessage: "Ihre Nachricht",
      formSubmit: "Nachricht senden"
    },
    footer: {
      tagline: "Premium-Produkte aus Algerien - Von Algerien in die Welt",
      rights: "Alle Rechte vorbehalten"
    }
  }
};
  const t = translations[language];

  const productData = [
    { id: 1, sizes: "1kg, 2kg, 5kg", image: "/assets/p1.png", color: "from-blue-700 to-blue-950" },
    { id: 2, sizes: "500ml", image: "/assets/p10.jpg", color: "from-green-700 to-emerald-950" },
    { id: 3, sizes: "5L", image: "/assets/p11.jpg", color: "from-green-800 to-emerald-900" },
    { id: 4, sizes: "500ml", image: "/assets/p14.jpg", color: "from-orange-700 to-red-900" },
    { id: 5, sizes: "375g", image: "/assets/p15.jpg", color: "from-amber-700 to-yellow-900" },
    { id: 6, sizes: "500ml", image: "/assets/p13.jpg", color: "from-purple-700 to-indigo-950" },
    { id: 7, sizes: "250ml", image: "/assets/p12.jpg", color: "from-purple-800 to-indigo-900" },
    { id: 8, sizes: "100g, 200g", image: "/assets/p16.jpg", color: "from-red-700 to-orange-900" }
  ];

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 animate-fade-in">
              <div className="w-30 h-22 rounded-lg overflow-hidden  transform hover:scale-110 transition-transform duration-300">
                <img 
                  src="/assets/logo.png"
                  alt="ZE Export & Business Logo"
                  className="w-full h-24 object-contain"
                />
              </div>
              <div>
                {/* <h1 className="text-xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                  ZE Export & Business
                </h1>
                <p className="text-xs text-blue-700">Premium Algerian Dates</p> */}
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-slate-900 hover:text-blue-700 transition-colors duration-300 font-medium">{t.nav.about}</a>
              <a href="#products" className="text-slate-900 hover:text-blue-700 transition-colors duration-300 font-medium">{t.nav.products}</a>
              <a href="#offer-products" className="text-slate-900 hover:text-blue-700 transition-colors duration-300 font-medium">{t.nav.offer || "Offre"}</a>
              
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="flex items-center space-x-2 text-slate-900 hover:text-blue-700 transition-colors duration-300 font-medium"
                >
                  <Languages size={20} />
                  <span className="text-xl">{languages.find(l => l.code === language)?.flag}</span>
                </button>
                
                {showLangMenu && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-blue-200 overflow-hidden animate-slide-down">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setLanguage(lang.code); setShowLangMenu(false); }}
                        className={`w-full px-4 py-3 flex items-center space-x-2 hover:bg-blue-50 transition-colors ${
                          language === lang.code ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-slate-900'
                        }`}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <a href="#offer-contact" className="px-6 py-2.5 bg-gradient-to-r from-blue-700 to-blue-950 text-white rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium">
                {t.nav.contact}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-900 hover:text-blue-700 transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-blue-200">
            <div className="px-6 py-4 space-y-4">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-slate-900 hover:text-blue-700 py-2 font-medium">{t.nav.about}</a>
              <a href="#products" onClick={() => setIsMenuOpen(false)} className="block text-slate-900 hover:text-blue-700 py-2 font-medium">{t.nav.products}</a>
              <a href="#offer-products" onClick={() => setIsMenuOpen(false)} className="block text-slate-900 hover:text-blue-700 py-2 font-medium">{t.nav.offer || "Offre"}</a>
              
              <div className="py-2 space-y-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code); setIsMenuOpen(false); }}
                    className={`w-full px-4 py-2 flex items-center space-x-2 rounded-lg transition-colors ${
                      language === lang.code ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-slate-900 hover:bg-blue-50'
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>

              <a href="#offer-contact" onClick={() => setIsMenuOpen(false)} className="block px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-950 text-white rounded-full text-center font-medium">
                {t.nav.contact}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 md:pb-0">
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-float"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl animate-float-delayed"></div>
  </div>

  <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1 flex justify-center md:justify-start">
        <img
          src="/assets/dates-hero.jpg"
          alt={t.hero.imageAlt || "Produits premium algériens"}  // ← maintenant traduit
          className="w-full max-w-lg rounded-2xl shadow-2xl object-cover"
        />
      </div>
      <div className="order-1 md:order-2 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight">
          {t.hero.title}
        </h2>
        <p className="text-xl md:text-2xl text-blue-800 mb-10">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
          <a 
            href="#products" 
            className="px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-950 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
          >
            {t.hero.cta1} <ChevronRight />
          </a>
          {/* <a 
            href="#contact" 
            className="px-8 py-4 border-2 border-blue-700 text-blue-900 rounded-full text-lg font-semibold hover:bg-blue-700 hover:text-white transition-all"
          >
            {t.hero.cta2}
          </a> */}
        </div>
      </div>
    </div>
  </div>
</section>
        {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-white/90 to-blue-50/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Colonne GAUCHE : texte principal */}
            <div className="md:col-span-6 order-2 md:order-1 flex flex-col items-center justify-center min-h-[500px] md:min-h-[600px] lg:min-h-[700px] px-4 md:px-8 lg:px-12">
              {/* Titre stylé */}
              <div className="w-full max-w-3xl text-center">
                <div className="inline-block mb-4 px-5 py-1.5 bg-blue-900/10 rounded-full border border-blue-200/40 text-blue-800 font-medium text-sm tracking-wider uppercase">
                  {t.about.since || "Since"} 2016
                </div>
                  
                <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 md:mb-8 leading-tight bg-gradient-to-r from-blue-950 via-blue-800 to-blue-700 bg-clip-text text-transparent">
                  {t.about.title}
                </h3>
              </div>
                  
              {/* Texte ajouté – centré partout */}
              <div className="w-full max-w-3xl space-y-6 md:space-y-8 text-lg md:text-xl text-blue-800/90 leading-relaxed font-light text-center">
                <p>
                  {t.about.description || "Founded in 2016, ZE Export & Business is an Algerian company specialized in the production and export of premium dates and natural fruits."}
                </p>
                <p>
                  {t.about.description2 || "We carefully select the finest varieties from Algerian farms to deliver authentic, healthy, and high-quality products to our global partners."}
                </p>
              </div>
            </div>
            {/* Colonne DROITE : Image */}
            <div className="md:col-span-6 order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl group">
                {/* Glow / aura douce */}
                <div className="absolute inset-[-5%] rounded-3xl bg-gradient-to-br from-blue-500/12 via-indigo-500/8 to-transparent blur-2xl opacity-65 group-hover:opacity-90 transition-opacity duration-700 -z-10"></div>
                <div className="absolute inset-[-2%] rounded-3xl bg-gradient-to-br from-blue-400/12 to-indigo-400/8 blur-xl -z-10"></div>
            
                <img
                  src="/assets/about-hero.jpg"
                  alt={t.about.imageAlt || "ZE Export & Business - Premium Algerian Dates"}
                  className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-2xl ring-1 ring-blue-200/30 transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-3xl"
                />
      
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-blue-600/20 to-indigo-600/10 rounded-full blur-3xl -z-10 opacity-70 group-hover:opacity-95 transition-opacity duration-700"></div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
              {t.products.title}
            </h3>
            <p className="text-xl text-blue-800">
              {t.products.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
            {t.products.items.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full"
                onMouseEnter={() => setActiveProduct(index)}
                onMouseLeave={() => setActiveProduct(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${productData[index].color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10 pointer-events-none`}></div>

                <div className="flex flex-col md:flex-row flex-1 relative z-20">
                  <div className="md:w-5/12 h-64 md:h-auto overflow-hidden flex-shrink-0">
                    <img
                      src={productData[index].image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="md:w-7/12 p-8 flex flex-col justify-center">
                    <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3 block">
                      {product.subtitle}
                    </span>
                    <h4 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-4 group-hover:text-blue-700 transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-blue-700 mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="mt-auto">
                      <span className="text-base font-semibold text-blue-600">
                        {t.products.formats} : {productData[index].sizes}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


            {/* ==================== SECTION OCTOBRE 2025 OFFER ==================== */}
<section id="offer-products" className="py-20 md:py-28 bg-white relative overflow-hidden">
  {/* Fond subtil bleu clair */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#3b82f6_0%,transparent_50%)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,#6366f1_0%,transparent_50%)]"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-6">
    {/* En-tête */}
    <div className="text-center mb-12 md:mb-16">
      {/* <div className="inline-block mb-5 px-7 py-2.5 bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-full text-lg font-semibold tracking-wider uppercase shadow-lg">
        {t.offer?.badge || "Offre Spéciale – Octobre 2025"}
      </div> */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent leading-tight">
        {t.offer?.title || "Découvrez notre sélection premium Octobre 2025"}
      </h2>
      <p className="text-xl md:text-2xl text-blue-800 max-w-4xl mx-auto font-light">
        {t.offer?.subtitle || "Dattes algériennes d'exception, dérivés innovants et produits végétaux de haute qualité – Prix compétitifs & qualité garantie"}
      </p>
    </div>

    {/* Les 3 blocs : vertical sur mobile, horizontal sur md+ */}
    <div className="flex flex-col md:flex-row gap-8 lg:gap-12 justify-center items-stretch">
      
      {/* Bloc 1 – Dattes premium */}
      <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-blue-100/60 p-8 transition-all duration-400 hover:-translate-y-2 flex-1 min-w-0 md:max-w-md">
        <div className="w-full h-70 mx-auto mb-6 rounded-3xl overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-400">
          <img 
            src="/assets/p5.jpg" 
            alt="Icône Dattes Premium" 
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-2xl font-bold text-blue-900 mb-5 text-center">
          {t.offer?.datesTitle || "Dattes de Qualité Premium"}
        </h3>
        <ul className="space-y-3 text-blue-800 text-base leading-relaxed">
          <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer?.dates.degletNour || "Deglet Nour premium – plusieurs formes"}</li>
          <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer?.dates.whiteDates || "Dattes blanches pour transformation alimentaire"}</li>
          <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer?.dates.trays || "Dattes en plateaux"}</li>
          <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer?.dates.branches || "Dattes sur branches et arjounes"}</li>
        </ul>
      </div>

      {/* Bloc 2 – Autres produits + huiles */}
      <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-blue-100/60 p-8 transition-all duration-400 hover:-translate-y-2 flex-1 min-w-0 md:max-w-md">
        <div className="w-full h-70 mx-auto mb-6 rounded-3xl overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-400">
          <img 
            src="/assets/p18.jpg" 
            alt="Icône Dattes Premium" 
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-2xl font-bold text-blue-900 mb-5 text-center">
          {t.offer?.otherProductsTitle || "Produits Végétaux & Huiles d'exception"}
        </h3>
        <ul className="space-y-3 text-blue-800 text-base leading-relaxed">
          <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer?.otherProducts.oliveOil || "Huile d'olive extra vierge naturelle (Nord & Hauts Plateaux)"}</li>
          <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer?.otherProducts.tomatoSauce || "Sauces tomates de haute qualité"}</li>
          <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer?.otherProducts.chiliSauce || "Sauces pimentées artisanales"}</li>
        </ul>
      </div>

      {/* Bloc 3 – Dérivés de dattes */}
{/* Bloc 3 – Dérivés de dattes (version compacte + expandable) */}
<div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-blue-100/60 p-8 transition-all duration-400 hover:-translate-y-2 flex-1 min-w-0 md:max-w-md">
        <div className="w-full h-70 mx-auto mb-6 rounded-3xl overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-400">
          <img 
            src="/assets/p17.jpg" 
            alt="Icône Dattes Premium" 
            className="w-full h-full object-cover"
          />
        </div>
  <h3 className="text-2xl font-bold text-blue-900 mb-5 text-center">
    {t.offer?.derivativesTitle || "Dérivés Innovants de Dattes"}
  </h3>

  {/* État pour ouvrir/fermer */}
  const [isExpanded, setIsExpanded] = useState(false);

  {/* Liste courte (toujours visible) */}
  <ul className="space-y-3 text-blue-800 text-base leading-relaxed">
    <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer?.derivatives.dried || "Dattes séchées"}</li>
    <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer?.derivatives.paste || "Pâte de dattes"}</li>
    <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer?.derivatives.syrup || "Sirop (Dibs)"}</li>
    <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer?.derivatives.molasses || "Mélasse"}</li>
    <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer?.derivatives.sugar || "Sucre de dattes"}</li>

    {/* Liste complète (cachée par défaut) */}
    {isExpanded && (
      <>
        <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer?.derivatives.powder || "Poudre de dattes"}</li>
        <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer?.derivatives.jam || "Confiture"}</li>
        <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer?.derivatives.puree || "Purée"}</li>
        <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer?.derivatives.vinegar || "Vinaigre de dattes"}</li>
        <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer?.derivatives.beverages || "Boissons à base de dattes"}</li>
        <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer?.derivatives.seedOil || "Huile de noyau"}</li>
        <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer?.derivatives.seedPowder || "Poudre de noyau"}</li>
        <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer?.derivatives.seedCoffee || "Café de noyau"}</li>
      </>
    )}
  </ul>

  {/* Bouton Voir plus / Voir moins */}
  <button
    onClick={() => setIsExpanded(!isExpanded)}
    className="mt-4 w-full flex items-center justify-center text-blue-700 hover:text-blue-900 font-medium transition-colors"
  >
    {isExpanded ? (
      <>
        Voir moins <ChevronUp className="ml-2 w-5 h-5" />
      </>
    ) : (
      <>
        ... ({t.offer?.derivativesTitle?.toLowerCase() || "dérivés"}) <ChevronDown className="ml-2 w-5 h-5" />
      </>
    )}
  </button>
</div>
    </div>

    {/* Conclusion produits */}
<div className="mt-16 md:mt-20 text-center max-w-5xl mx-auto">
  <p className="text-lg md:text-xl text-blue-800 leading-relaxed mb-8">
    {t.offer?.conclusion.delivery || "Livraison soignée et fiable vers tous les pays européens — Qualité supérieure constante, fidèle à la réputation de"} <strong>ZE EXPORT & BUSINESS</strong>.
  </p>

  <p className="text-xl md:text-2xl font-semibold text-blue-900 mb-8">
    {t.offer?.conclusion.partnership || "Nous recherchons activement des partenariats durables avec importateurs, distributeurs, transformateurs et industriels agroalimentaires."}
  </p>

    <p className="text-xl text-blue-700/80 italic mb-8">
      {t.offer?.conclusion.certifications || "Partenariats avec fournisseurs certifiés – Références et qualifications internationales reconnues."}
    </p>
</div>
  {/* Liste horizontale des certificats – pleine largeur */}
  <div className="mt-8">


    {/* Conteneur scrollable horizontal – images pleine largeur */}
    <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50">
      <div className="flex flex-nowrap gap-6 md:gap-10 justify-start md:justify-center items-center">
        
        {/* Certificat 1 – BRGS */}
        <a 
          href="https://www.brgs-certification.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-shrink-0 transition-transform hover:scale-105 hover:shadow-xl duration-300"
        >
          <img 
            src="/assets/2.png" 
            alt="BRGS Certification" 
            className="h-28 md:h-40 w-auto object-contain rounded-lg border border-blue-200 shadow-md"
          />
        </a>

        {/* Certificat 2 – Ecocert */}
        <a 
          href="https://www.ecocert.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-shrink-0 transition-transform hover:scale-105 hover:shadow-xl duration-300"
        >
          <img 
            src="/assets/3.png" 
            alt="Ecocert Certification" 
            className="h-28 md:h-40 w-auto object-contain rounded-lg border border-blue-200 shadow-md"
          />
        </a>

        {/* Certificat 3 – Agriculture Biologique (AB) */}
        <a 
          href="https://agriculture.gouv.fr/agriculture-biologique" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-shrink-0 transition-transform hover:scale-105 hover:shadow-xl duration-300"
        >
          <img 
            src="/assets/4.png" 
            alt="Agriculture Biologique AB" 
            className="h-28 md:h-40 w-auto object-contain rounded-lg border border-blue-200 shadow-md"
          />
        </a>

        {/* Certificat 4 – IFS */}
        <a 
          href="https://www.ifs-certification.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-shrink-0 transition-transform hover:scale-105 hover:shadow-xl duration-300"
        >
          <img 
            src="/assets/5.png" 
            alt="IFS Food Certification" 
            className="h-28 md:h-40 w-auto object-contain rounded-lg border border-blue-200 shadow-md"
          />
        </a>

        {/* Certificat 5 – USDA Organic */}
        <a 
          href="https://www.usda.gov/topics/organic" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-shrink-0 transition-transform hover:scale-105 hover:shadow-xl duration-300"
        >
          <img 
            src="/assets/1.png" 
            alt="USDA Organic Certification" 
            className="h-28 md:h-40 w-auto object-contain rounded-lg border border-blue-200 shadow-md"
          />
        </a>
      </div>
    </div>
  </div>
  </div>
</section>

<section id="offer-contact" className="py-16 md:py-20 bg-white relative overflow-hidden border-t border-blue-100">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* GAUCHE : Image – centrée au milieu de sa colonne */}
      <div className="flex items-center justify-center">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group w-full max-w-md md:max-w-none">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src="/assets/logo.png"
            alt={t.offer?.imageAlt || "ZE Export & Business - Produits premium algériens"}
            className="w-full h-auto md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105 rounded-3xl"
          />
          <div className="absolute bottom-6 left-6 right-6 text-white text-center">
            <p className="text-lg md:text-xl font-semibold drop-shadow-lg">
              {t.offer?.imageCaption || "Qualité algérienne authentique – Exportée dans le monde entier"}
            </p>
          </div>
        </div>
      </div>

      {/* DROITE : Informations de contact */}
      <div className="space-y-5">
        <div>
          <h3 className="text-2xl font-bold text-blue-900 mb-3">
            {t.offer?.contact.title || "Contactez-nous directement"}
          </h3>
          <p className="text-base text-blue-700 leading-relaxed">
            {t.offer?.contact.intro || "Nous sommes à votre disposition pour toute demande de devis, échantillons ou partenariat."}
          </p>
        </div>

        {/* Bloc Adresse */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100 shadow-lg">
          <div className="flex items-center mb-2">
            <svg className="w-7 h-7 text-blue-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h4 className="text-base md:text-lg font-semibold text-blue-900">
              {t.offer?.contact.addressTitle || "Adresse"}
            </h4>
          </div>
          <p className="text-blue-800 text-sm md:text-base ml-10 leading-tight">
            191, Bois des Cars 2<br />
            Dely Brahim, Alger<br />
            Algérie
          </p>
        </div>

        {/* Bloc Téléphones / WhatsApp – avec traductions */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100 shadow-lg">
          <div className="flex items-center mb-2">
            <svg className="w-7 h-7 text-blue-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <h4 className="text-base md:text-lg font-semibold text-blue-900">
              {t.offer?.contact.phonesTitle || "Téléphones / WhatsApp"}
            </h4>
          </div>
          <div className="space-y-1.5 text-blue-800 text-sm md:text-base ml-10">
            <p className="flex items-center">
              <span className="font-medium">
                {t.offer?.contact.phones.main || 
                  (language === 'fr' ? "Téléphone principal :" :
                   language === 'en' ? "Main phone :" :
                   "Haupttelefon :")}
              </span>
              <span className="ml-2 font-bold">+213 0555 453 377</span>
            </p>
            <p className="flex items-center">
              <span className="font-medium">
                {t.offer?.contact.phones.whatsapp || 
                  (language === 'fr' ? "WhatsApp :" :
                   language === 'en' ? "WhatsApp :" :
                   "WhatsApp :")}
              </span>
              <span className="ml-2 font-bold">+213 779 880 802</span>
            </p>
          </div>
        </div>

        {/* Bloc Email + Site web */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100 shadow-lg">
          <div className="flex items-center mb-2">
            <svg className="w-7 h-7 text-blue-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h4 className="text-base md:text-lg font-semibold text-blue-900">
              {t.offer?.contact.emailTitle || "Email & Site web"}
            </h4>
          </div>
          <div className="space-y-1.5 text-blue-800 text-sm md:text-base ml-10">
            <p className="font-medium break-all">
              <a href="mailto:info.ze.export@gmail.com" className="hover:text-blue-900 transition-colors">
                info.ze.export@gmail.com
              </a>
            </p>
            <p className="font-medium">
              {/* <a href="https://www.ezfoods.dz.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">
                www.ezfoods.dz.com
              </a> */}
            </p>
          </div>
        </div>

        {/* Petit texte final */}
        <p className="text-center text-blue-700 italic mt-4 text-sm md:text-base">
          {t.offer?.contact.responseTime || "Réponse sous 24h ouvrées – Partenariats sérieux bienvenus"}
        </p>
      </div>
    </div>
  </div>
</section>
      {/* Footer */}
      <footer className="bg-gradient-to-br from-blue-950 to-indigo-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h5 className="text-2xl font-bold mb-4">ZE Export & Business</h5>
          <p className="text-blue-200 mb-4">{t.footer.tagline}</p>
          <p className="text-blue-400 text-sm">
            © {new Date().getFullYear()} ZE Export & Business. {t.footer.rights}.
          </p>
        </div>
      </footer>

      {/* Animations globales */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 7s ease-in-out infinite; }
        .animate-float-delayed { animation: float 9s ease-in-out infinite; animation-delay: 2s; }
      `}</style>
    </div>
  );
}