import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Globe, Award, Shield, TrendingUp, Languages, ChevronDown, ChevronUp } from 'lucide-react';

export default function ZEExportWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [language, setLanguage] = useState('fr');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState('fresh'); // ⭐ NEW : onglet actif

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ============================================================
  // TRADUCTIONS FR / EN / DE
  // ============================================================
  const translations = {
    // ============================================================
    // 🇫🇷 FRANÇAIS
    // ============================================================
    fr: {
      nav: {
        about: "À Propos",
        products: "Produits",
        offer: "premium",
        contact: "Contact"
      },
      hero: {
        title: "De l'Algérie\nvers le Monde",
        subtitle: "Dattes premium, huiles d'olive, vinaigres, tahini et épices authentiques d'Algérie",
        cta1: "Découvrir nos produits",
        cta2: "Nous contacter",
        imageAlt: "Produits premium algériens"
      },
      about: {
        since: "Depuis",
        title: "Notre Excellence",
        description: "Fondée en 2016, ZE Export & Business est une entreprise algérienne spécialisée dans la production et l'exportation de produits alimentaires premium.",
        description2: "Nous sélectionnons avec soin les meilleures variétés des fermes algériennes pour livrer des produits authentiques, sains et de haute qualité à nos partenaires internationaux.",
        imageAlt: "ZE Export & Business - Produits premium algériens",
        features: [
          { title: "Expertise Algérienne", description: "Depuis 2016, spécialisés dans les produits de terroir" },
          { title: "Normes Internationales", description: "Conformité totale aux standards mondiaux" },
          { title: "Contrôle Qualité", description: "Vérification rigoureuse à chaque étape" },
          { title: "Export Mondial", description: "De l'Algérie vers le monde entier" }
        ]
      },
      products: {
        title: "Nos Produits Premium",
        subtitle: "Découvrez notre gamme complète de produits algériens d'exception",
        formats: "Formats",
        productCount: "produits",
        categories: {
          fresh: {
            name: "Dattes Fraîches",
            shortName: "Dattes",
            description: "Deglet Nour algériennes d'exception"
          },
          derivatives: {
            name: "Dérivés de Dattes",
            shortName: "Dérivés",
            description: "Sirops, miels, vinaigres et pâtisseries"
          },
          others: {
            name: "Autres Produits",
            shortName: "Autres",
            description: "Huiles, marinades, épices et sauces"
          }
        },
        items: {
          // 🌴 DATTES FRAÎCHES
          d1: {
            name: "Dattes Algériennes Premium",
            subtitle: "Deglet Nour – Du Cœur du Sahara",
            description: "Dattes Deglet Nour d'exception, cultivées au cœur du Sahara algérien. Présentées dans un luxueux emballage bleu et or, elles incarnent le summum de la qualité algérienne. Chair tendre, riche en saveurs et en bienfaits nutritionnels."
          },
          d2: {
            name: "Dattes Deglet Nour Premium",
            subtitle: "Qualité Supérieure – 1kg",
            description: "Dattes Deglet Nour d'exception, sélectionnées avec soin dans les palmeraies algériennes. Chair tendre, translucide et très sucrée avec un goût fin et délicat. Présentées en boîte élégante avec fenêtre, idéales pour l'export et les cadeaux. Riches en fibres, potassium et énergie naturelle."
          },
          d3: {
            name: "Dattes Deglet Nour Oasis",
            subtitle: "Édition Premium – 500g",
            description: "Dattes Deglet Nour premium en édition élégante noire. Fruits charnus, brillants et d'une grande finesse gustative. Emballage luxueux idéal pour les cadeaux haut de gamme et les clients exigeants à la recherche d'authenticité algérienne."
          },
          d4: {
            name: "Dattes Deglet Nour Oasis",
            subtitle: "Algerian Premium Dates",
            description: "Dattes Deglet Nour de haute qualité, cultivées en Algérie et conditionnées avec soin. Douces, juteuses et naturellement sucrées, elles représentent le meilleur du terroir saharien. Emballage cadeau raffiné parfait pour les marchés internationaux."
          },
          d5: {
            name: "Dattes Daglet Nour Premium",
            subtitle: "Qualité d'Exception – 1kg",
            description: "Les fameuses Dattes Deglet Nour, fleuron de l'Algérie. Sélectionnées pour leur calibre généreux, leur couleur ambrée et leur saveur incomparable. Conditionnées avec soin dans un emballage moderne et épuré, parfait pour l'exportation."
          },
          d6: {
            name: "Dattes Deglet Nour",
            subtitle: "Qualité Algérienne Authentique",
            description: "Dattes Deglet Nour premium en emballage vert dynamique. Fruits sélectionnés pour leur douceur naturelle et leur qualité supérieure. Emballage moderne et attractif, parfait pour les marchés européens et les distributeurs."
          },
          d7: {
            name: "Dattes Deglet Nour Oasis",
            subtitle: "Cadeau Premium",
            description: "Magnifiques dattes Deglet Nour présentées dans un emballage cadeau blanc élégant avec ruban rouge. Chair fondante, goût délicatement sucré et texture parfaite. Idéales pour les fêtes, les entreprises et les clients qui recherchent le raffinement algérien."
          },

          // 🍯 DÉRIVÉS DE DATTES
          chocoDate: {
            name: "Choco-Date Pistache & Caramel",
            subtitle: "Dattes enrobées de Chocolat Premium",
            description: "Délicieuses dattes Deglet Nour premium enrobées de chocolat fin, fourrées à la pistache et au caramel. Un mariage parfait entre la douceur naturelle de la datte algérienne, le croquant de la pistache et la richesse du caramel. Élégante boîte cadeau de 10 pièces, idéale pour les fêtes et cadeaux d'entreprise."
          },
          depsClassic: {
            name: "Dibs de Datte (Sirop de Datte)",
            subtitle: "100% Naturel & Pur",
            description: "Sirop de datte premium (Dibs), obtenu par concentration naturelle du jus de dattes algériennes. Couleur brun foncé intense, texture onctueuse et fluide, goût riche, sucré et caramélisé aux notes fruitées profondes. Parfait pour boissons, pancakes, yaourts, pâtisseries. Sans sucre ajouté, sans conservateurs."
          },
          depsExtract: {
            name: "Extrait de Dattes / Mélasse de Datte",
            subtitle: "100% Naturelle – Pure Date Extract",
            description: "Extrait pur de dattes (Dibs de Datte) de haute qualité, produit artisanalement à partir de dattes algériennes sélectionnées. Concentré riche et savoureux, à la texture épaisse et à la saveur intense de caramel et de fruits secs. Disponible en bouteilles et pots pratiques."
          },
          flocons: {
            name: "Flocons d'Avoine",
            subtitle: "100% Naturels - Muesli Classique",
            description: "Flocons d'avoine premium riches en fibres et protéines. Idéaux pour petits-déjeuners sains, porridge, granola et recettes de pâtisseries. 400g de pureté naturelle."
          },
          mielDatte: {
            name: "Miel de Datte",
            subtitle: "100% Naturel & Pur",
            description: "Miel de datte premium, obtenu par la concentration naturelle du jus de dattes algériennes sélectionnées. Texture onctueuse, belle couleur ambrée foncée, goût riche, doux et caramélisé avec de délicates notes fruitées. Excellent comme tartinade, édulcorant naturel ou en accompagnement de fromages."
          },
          mielLagmi: {
            name: "Miel Lagmi Naturel",
            subtitle: "Miel de Sève de Palmier – Vitalité",
            description: "Miel Lagmi 100% naturel issu de la sève du palmier dattier algérien. Riche et tonifiant, il est traditionnellement apprécié pour son énergie naturelle et ses bienfaits sur la vitalité."
          },
          grenade1: {
            name: "Mélasse de Grenade",
            subtitle: "100% Naturelle & Pure",
            description: "Mélasse de grenade premium au goût sucré-acidulé intense. Issue de la réduction naturelle du jus de grenades algériennes. Parfaite pour marinades, sauces, salades et plats orientaux."
          },
          grenade2: {
            name: "Mélasse de Grenade",
            subtitle: "Sauce & Assaisonnement Premium",
            description: "Mélasse de grenade 100% naturelle. Idéale pour rehausser le goût des grillades, poissons, salades et plats mijotés. Touche acidulée et aromatique incomparable."
          },
          sucreDatte: {
            name: "Sucre de Dattes",
            subtitle: "100% Naturel & Sans Gluten",
            description: "Sucre de dattes premium issu de dattes algériennes. Alternative saine et nutritive au sucre raffiné, riche en fibres et minéraux. Goût caramélisé délicat, parfait pour pâtisseries et boissons."
          },
          tahini: {
            name: "Crème de Sésame (Tahini)",
            subtitle: "100% Pur & Naturel",
            description: "Tahini premium à base de sésame 100% pur. Texture onctueuse et goût finement noisetté. Idéal pour houmous, sauces, vinaigrettes et pâtisseries orientales."
          },
          farineSesame: {
            name: "Farine de Sésame",
            subtitle: "100% Naturelle",
            description: "Farine fine de sésame torréfié au goût intense et concentré. Parfaite pour enrichir pâtisseries, sauces et recettes healthy. Riche en protéines et minéraux."
          },
          vinaigreDatte: {
            name: "Vinaigre de Datte",
            subtitle: "100% Naturel & Artisanal",
            description: "Vinaigre de datte premium issu de la fermentation naturelle de dattes algériennes. Goût équilibré, légèrement sucré et fruité. Idéal pour salades, marinades et sauces."
          },
          vinaigreBalsamiqueElegant: {
            name: "Vinaigre Balsamique de Pomme",
            subtitle: "Vieilli & Raffiné",
            description: "Vinaigre balsamique de pomme premium à la robe acajou intense. Élaboré à partir de pommes sélectionnées et vieilli naturellement, il développe un goût riche, doux et complexe avec des notes boisées et légèrement sucrées. Idéal pour salades, viandes grillées et fromages."
          },
          vinaigreBalsamiqueCompact: {
            name: "Vinaigre Balsamique de Pomme",
            subtitle: "Format Pratique 220 ml",
            description: "Vinaigre balsamique de pomme artisanal en format compact. Belle couleur foncée et goût équilibré entre douceur et acidité, parfait pour un usage quotidien. Excellent pour les vinaigrettes et marinades."
          },
          vinaigreCidreBio: {
            name: "Vinaigre de Cidre de Pomme Bio",
            subtitle: "Organic – Non Pasteurisé & Non Filtré",
            description: "Vinaigre de cidre de pomme biologique, issu de la fermentation naturelle de pommes fraîches. Non pasteurisé et non filtré, il conserve tous ses enzymes, probiotiques et bienfaits naturels. Idéal pour la cuisine santé et les boissons détox."
          },
          vinaigrePommeClassique: {
            name: "Vinaigre de Pomme",
            subtitle: "100% Naturel",
            description: "Vinaigre de pomme traditionnel algérien, fabriqué à partir de pommes sélectionnées. Goût pur, fruité et agréablement acidulé. Polyvalent et essentiel en cuisine : parfait pour salades, marinades, sauces et conserves. Disponible en 250 ml et 500 ml."
          },

          // 🫒 AUTRES PRODUITS
          huilePiment: {
            name: "Huile d'Olive au Piment",
            subtitle: "Infusion Artisanale",
            description: "Huile d'olive extra vierge infusée au piment rouge. Goût aromatique et légèrement piquant. Parfaite pour relever pizzas, grillades, pâtes et marinades."
          },
          huileExtraVierge500: {
            name: "Huile d'Olive Extra Vierge",
            subtitle: "Qualité Premium – 500ml",
            description: "Huile d'olive extra vierge pressée à froid, au goût fruité et authentique. Riche en bienfaits naturels, idéale pour la cuisine et les assaisonnements."
          },
          huileExtraVierge5L: {
            name: "Huile d'Olive Extra Vierge",
            subtitle: "Grand Format 5L",
            description: "Format familial et professionnel de notre huile d'olive extra vierge premium. Qualité supérieure et excellent rapport qualité/prix."
          },
          olivesNoiresEntieres: {
            name: "Olives Noires Entières",
            subtitle: "Qualité Premium",
            description: "Olives noires entières de premier choix, sélectionnées pour leur calibre généreux, leur couleur noire intense et leur chair ferme et savoureuse. Idéales pour salades, pizzas, tapas et cuisine méditerranéenne."
          },
          olivesNoiresTranchees: {
            name: "Olives Noires Tranchées",
            subtitle: "Prêtes à l'Emploi",
            description: "Olives noires tranchées finement et uniformément. Pratiques et faciles à utiliser, elles apportent une touche méditerranéenne à pizzas, sandwiches, salades, pâtes et plats chauds."
          },
          olivesVertesEntieres: {
            name: "Olives Vertes Entières",
            subtitle: "Qualité Premium",
            description: "Olives vertes entières fermes et croquantes, au goût légèrement fruité et équilibré. Parfaites pour l'apéritif, les salades, les tajines, ou comme accompagnement."
          },
          macedoine: {
            name: "Macédoine de Légumes",
            subtitle: "Mélange Coloré",
            description: "Macédoine de légumes premium, composée d'un mélange varié de carottes, petits pois, haricots verts, maïs et autres légumes. Prête à l'emploi, idéale pour salades composées et accompagnements."
          },
          maisDoux: {
            name: "Maïs Doux Jaune",
            subtitle: "Grains Tendres & Sucrés",
            description: "Maïs doux jaune premium, tendre et naturellement sucré. Grains juteux et savoureux, parfaits pour les salades, soupes, accompagnements et plats mexicains."
          },
          safran: {
            name: "Safran Pur",
            subtitle: "L'Or Rouge Naturel",
            description: "Safran d'exception à l'arôme floral unique et raffiné. Riche en antioxydants, il sublime vos plats, infusions et pâtisseries. Un trésor précieux de la nature."
          },
          saucesPiments: {
            name: "Gamme de Sauces Piment",
            subtitle: "3 Variantes – Vert, Rouge Hot & Fumé",
            description: "Notre trio de sauces piment artisanales : la Sauce Piment Vert au goût vif et herbacé pour grillades et tacos ; la Sauce Piment Rouge Hot puissante et fruitée pour les amateurs de sensations fortes ; et la Sauce Piment Fumé aux arômes profonds de barbecue, parfaite pour grillades et plats mijotés."
          }
        }
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
        seeMore: "Voir plus",
        seeLess: "Voir moins",
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
          addressTitle: "Adresse",
          phonesTitle: "Téléphones / WhatsApp",
          phones: {
            main: "Téléphone principal :",
            whatsapp: "WhatsApp :"
          },
          emailTitle: "Email & Site web",
          responseTime: "Réponse sous 24h ouvrées – Partenariats sérieux bienvenus"
        }
      },
      contact: {
        title: "Contactez-Nous",
        subtitle: "Prêt à importer des produits algériens authentiques ?"
      },
      footer: {
        tagline: "Produits Premium Algériens - De l'Algérie vers le Monde",
        rights: "Tous droits réservés"
      }
    },

    // ============================================================
    // 🇬🇧 ENGLISH
    // ============================================================
    en: {
      nav: {
        about: "About",
        products: "Products",
        offer: "premium",
        contact: "Contact"
      },
      hero: {
        title: "From Algeria\nto the World",
        subtitle: "Premium dates, olive oils, vinegars, tahini and authentic Algerian spices",
        cta1: "Discover our products",
        cta2: "Contact us",
        imageAlt: "Premium Algerian Products"
      },
      about: {
        since: "Since",
        title: "Our Excellence",
        description: "Founded in 2016, ZE Export & Business is an Algerian company specializing in the production and export of premium food products.",
        description2: "We carefully select the finest varieties from Algerian farms to deliver authentic, healthy, and high-quality products to our global partners.",
        imageAlt: "ZE Export & Business - Premium Algerian Products",
        features: [
          { title: "Algerian Expertise", description: "Since 2016, specialized in terroir products" },
          { title: "International Standards", description: "Full compliance with global standards" },
          { title: "Quality Control", description: "Rigorous verification at every stage" },
          { title: "Global Export", description: "From Algeria to the world" }
        ]
      },
      products: {
        title: "Our Premium Products",
        subtitle: "Discover our complete range of exceptional Algerian products",
        formats: "Sizes",
        productCount: "products",
        categories: {
          fresh: {
            name: "Fresh Dates",
            shortName: "Dates",
            description: "Exceptional Algerian Deglet Nour"
          },
          derivatives: {
            name: "Date Derivatives",
            shortName: "Derivatives",
            description: "Syrups, honeys, vinegars & pastries"
          },
          others: {
            name: "Other Products",
            shortName: "Others",
            description: "Oils, marinades, spices & sauces"
          }
        },
        items: {
          d1: {
            name: "Premium Algerian Dates",
            subtitle: "Deglet Nour – From the Heart of the Sahara",
            description: "Exceptional Deglet Nour dates grown in the heart of the Algerian Sahara. Presented in luxurious blue and gold packaging, they embody the pinnacle of Algerian quality. Tender flesh, rich in flavor and nutritional benefits."
          },
          d2: {
            name: "Premium Deglet Nour Dates",
            subtitle: "Superior Quality – 1kg",
            description: "Exceptional Deglet Nour dates, carefully selected from Algerian palm groves. Tender, translucent flesh, very sweet with a fine and delicate taste. Presented in an elegant box with window, ideal for export and gifts. Rich in fiber, potassium and natural energy."
          },
          d3: {
            name: "Deglet Nour Oasis Dates",
            subtitle: "Premium Edition – 500g",
            description: "Premium Deglet Nour dates in elegant black edition. Plump, shiny fruits with great gustatory finesse. Luxurious packaging ideal for high-end gifts and demanding clients seeking Algerian authenticity."
          },
          d4: {
            name: "Deglet Nour Oasis Dates",
            subtitle: "Algerian Premium Dates",
            description: "High-quality Deglet Nour dates, grown in Algeria and packaged with care. Soft, juicy and naturally sweet, they represent the best of the Saharan terroir. Refined gift packaging perfect for international markets."
          },
          d5: {
            name: "Premium Daglet Nour Dates",
            subtitle: "Exceptional Quality – 1kg",
            description: "The famous Deglet Nour dates, the flagship of Algeria. Selected for their generous size, amber color and incomparable flavor. Carefully packaged in modern, sleek packaging, perfect for export."
          },
          d6: {
            name: "Deglet Nour Dates",
            subtitle: "Authentic Algerian Quality",
            description: "Premium Deglet Nour dates in dynamic green packaging. Fruits selected for their natural sweetness and superior quality. Modern and attractive packaging, perfect for European markets and distributors."
          },
          d7: {
            name: "Deglet Nour Oasis Dates",
            subtitle: "Premium Gift",
            description: "Magnificent Deglet Nour dates presented in an elegant white gift box with red ribbon. Melting flesh, delicately sweet taste and perfect texture. Ideal for celebrations, businesses and clients seeking Algerian refinement."
          },
          chocoDate: {
            name: "Choco-Date Pistachio & Caramel",
            subtitle: "Dates Coated in Premium Chocolate",
            description: "Delicious premium Deglet Nour dates coated in fine chocolate, filled with pistachio and caramel. A perfect marriage between the natural sweetness of Algerian dates, the crunch of pistachio and the richness of caramel. Elegant 10-piece gift box, ideal for celebrations and corporate gifts."
          },
          depsClassic: {
            name: "Date Dibs (Date Syrup)",
            subtitle: "100% Natural & Pure",
            description: "Premium date syrup (Dibs), obtained by natural concentration of high-quality Algerian date juice. Intense dark brown color, smooth fluid texture, rich, sweet and caramelized taste with deep fruity notes. Perfect for drinks, pancakes, yogurts, pastries. No added sugar, no preservatives."
          },
          depsExtract: {
            name: "Date Extract / Date Molasses",
            subtitle: "100% Natural – Pure Date Extract",
            description: "Pure high-quality date extract (Date Dibs), produced artisanally from selected Algerian dates. Rich and tasty concentrate, with thick texture and intense flavor of caramel and dried fruits. Available in convenient bottles and jars."
          },
          flocons: {
            name: "Oat Flakes",
            subtitle: "100% Natural - Classic Muesli",
            description: "Premium oat flakes rich in fiber and protein. Ideal for healthy breakfasts, porridge, granola and pastry recipes. 400g of natural purity."
          },
          mielDatte: {
            name: "Date Honey",
            subtitle: "100% Natural & Pure",
            description: "Premium date honey, obtained by natural concentration of selected Algerian date juice. Smooth texture, beautiful dark amber color, rich, soft and caramelized taste with delicate fruity notes. Excellent as a spread, natural sweetener or as an accompaniment to cheeses."
          },
          mielLagmi: {
            name: "Natural Lagmi Honey",
            subtitle: "Palm Sap Honey – Vitality",
            description: "100% natural Lagmi honey from the sap of the Algerian date palm. Rich and invigorating, traditionally appreciated for its natural energy and benefits on vitality."
          },
          grenade1: {
            name: "Pomegranate Molasses",
            subtitle: "100% Natural & Pure",
            description: "Premium pomegranate molasses with intense sweet-sour taste. Made from the natural reduction of Algerian pomegranate juice. Perfect for marinades, sauces, salads and oriental dishes."
          },
          grenade2: {
            name: "Pomegranate Molasses",
            subtitle: "Premium Sauce & Seasoning",
            description: "100% natural pomegranate molasses. Ideal for enhancing the taste of grills, fish, salads and stews. Incomparable tangy and aromatic touch."
          },
          sucreDatte: {
            name: "Date Sugar",
            subtitle: "100% Natural & Gluten-Free",
            description: "Premium date sugar made from Algerian dates. Healthy and nutritious alternative to refined sugar, rich in fiber and minerals. Delicate caramelized taste, perfect for pastries and beverages."
          },
          tahini: {
            name: "Sesame Cream (Tahini)",
            subtitle: "100% Pure & Natural",
            description: "Premium tahini made from 100% pure sesame. Smooth texture and finely nutty taste. Ideal for hummus, sauces, vinaigrettes and oriental pastries."
          },
          farineSesame: {
            name: "Sesame Flour",
            subtitle: "100% Natural",
            description: "Fine roasted sesame flour with intense and concentrated taste. Perfect for enriching pastries, sauces and healthy recipes. Rich in protein and minerals."
          },
          vinaigreDatte: {
            name: "Date Vinegar",
            subtitle: "100% Natural & Artisanal",
            description: "Premium date vinegar from the natural fermentation of Algerian dates. Balanced taste, slightly sweet and fruity. Ideal for salads, marinades and sauces."
          },
          vinaigreBalsamiqueElegant: {
            name: "Apple Balsamic Vinegar",
            subtitle: "Aged & Refined",
            description: "Premium apple balsamic vinegar with intense mahogany color. Made from selected apples and naturally aged, it develops a rich, soft and complex taste with woody and slightly sweet notes. Ideal for salads, grilled meats and cheeses."
          },
          vinaigreBalsamiqueCompact: {
            name: "Apple Balsamic Vinegar",
            subtitle: "Practical 220 ml Format",
            description: "Artisanal apple balsamic vinegar in compact format. Beautiful dark color and balanced taste between sweetness and acidity, perfect for daily use. Excellent for vinaigrettes and marinades."
          },
          vinaigreCidreBio: {
            name: "Organic Apple Cider Vinegar",
            subtitle: "Organic – Unpasteurized & Unfiltered",
            description: "Organic apple cider vinegar from the natural fermentation of fresh apples. Unpasteurized and unfiltered, it retains all its enzymes, probiotics and natural benefits. Ideal for healthy cooking and detox drinks."
          },
          vinaigrePommeClassique: {
            name: "Apple Vinegar",
            subtitle: "100% Natural",
            description: "Traditional Algerian apple vinegar, made from selected apples. Pure, fruity and pleasantly tangy taste. Versatile and essential in cooking: perfect for salads, marinades, sauces and preserves. Available in 250 ml and 500 ml."
          },
          huilePiment: {
            name: "Chili-Infused Olive Oil",
            subtitle: "Artisanal Infusion",
            description: "Extra virgin olive oil infused with red chili. Aromatic and slightly spicy taste. Perfect to enhance pizzas, grills, pasta and marinades."
          },
          huileExtraVierge500: {
            name: "Extra Virgin Olive Oil",
            subtitle: "Premium Quality – 500ml",
            description: "Cold-pressed extra virgin olive oil with fruity and authentic taste. Rich in natural benefits, ideal for cooking and seasonings."
          },
          huileExtraVierge5L: {
            name: "Extra Virgin Olive Oil",
            subtitle: "Large 5L Format",
            description: "Family and professional format of our premium extra virgin olive oil. Superior quality and excellent value for money."
          },
          olivesNoiresEntieres: {
            name: "Whole Black Olives",
            subtitle: "Premium Quality",
            description: "First-choice whole black olives, selected for their generous size, intense black color and firm, tasty flesh. Ideal for salads, pizzas, tapas and Mediterranean cuisine."
          },
          olivesNoiresTranchees: {
            name: "Sliced Black Olives",
            subtitle: "Ready to Use",
            description: "Finely and uniformly sliced black olives. Practical and easy to use, they bring a Mediterranean touch to your pizzas, sandwiches, salads, pasta and hot dishes."
          },
          olivesVertesEntieres: {
            name: "Whole Green Olives",
            subtitle: "Premium Quality",
            description: "Firm and crunchy whole green olives, with a slightly fruity and balanced taste. Perfect for aperitifs, salads, tagines, or as an accompaniment."
          },
          macedoine: {
            name: "Mixed Vegetables",
            subtitle: "Colorful Mix",
            description: "Premium vegetable medley, composed of a varied mix of carrots, peas, green beans, corn and other vegetables. Ready to use, ideal for mixed salads and side dishes."
          },
          maisDoux: {
            name: "Yellow Sweet Corn",
            subtitle: "Tender & Sweet Kernels",
            description: "Premium yellow sweet corn, tender and naturally sweet. Juicy and tasty kernels, perfect for salads, soups, side dishes and Mexican dishes."
          },
          safran: {
            name: "Pure Saffron",
            subtitle: "Natural Red Gold",
            description: "Exceptional saffron with a unique and refined floral aroma. Rich in antioxidants, it sublimates your dishes, infusions and pastries. A precious treasure of nature."
          },
          saucesPiments: {
            name: "Chili Sauce Range",
            subtitle: "3 Variants – Green, Hot Red & Smoked",
            description: "Our trio of artisanal chili sauces: the Green Chili Sauce with a vivid and herbaceous taste for grills and tacos; the powerful and fruity Hot Red Chili Sauce for those who love strong sensations; and the Smoked Chili Sauce with deep barbecue aromas, perfect for grills and stews."
          }
        }
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
        seeMore: "See more",
        seeLess: "See less",
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
          addressTitle: "Address",
          phonesTitle: "Phones / WhatsApp",
          phones: {
            main: "Main phone:",
            whatsapp: "WhatsApp:"
          },
          emailTitle: "Email & Website",
          responseTime: "Response within 24 working hours – Serious partnerships welcome"
        }
      },
      contact: {
        title: "Contact Us",
        subtitle: "Ready to import authentic Algerian products?"
      },
      footer: {
        tagline: "Premium Algerian Products - From Algeria to the World",
        rights: "All rights reserved"
      }
    },

    // ============================================================
    // 🇩🇪 DEUTSCH
    // ============================================================
    de: {
      nav: {
        about: "Über uns",
        products: "Produkte",
        offer: "Hochwertig",
        contact: "Kontakt"
      },
      hero: {
        title: "Von Algerien\nin die Welt",
        subtitle: "Premium-Datteln, Olivenöle, Essige, Tahini und authentische algerische Gewürze",
        cta1: "Unsere Produkte entdecken",
        cta2: "Kontaktieren Sie uns",
        imageAlt: "Premium-Produkte aus Algerien"
      },
      about: {
        since: "Seit",
        title: "Unsere Exzellenz",
        description: "ZE Export & Business wurde 2016 gegründet und ist ein algerisches Unternehmen, das sich auf die Produktion und den Export von Premium-Lebensmitteln spezialisiert hat.",
        description2: "Wir wählen sorgfältig die besten Sorten aus algerischen Farmen aus, um authentische, gesunde und hochwertige Produkte an unsere internationalen Partner zu liefern.",
        imageAlt: "ZE Export & Business - Premium-Produkte aus Algerien",
        features: [
          { title: "Algerische Expertise", description: "Seit 2016 spezialisiert auf Terroir-Produkte" },
          { title: "Internationale Standards", description: "Vollständige Einhaltung globaler Normen" },
          { title: "Qualitätskontrolle", description: "Strenge Überprüfung in jeder Phase" },
          { title: "Weltweiter Export", description: "Von Algerien in die Welt" }
        ]
      },
      products: {
        title: "Unsere Premium-Produkte",
        subtitle: "Entdecken Sie unser komplettes Sortiment außergewöhnlicher algerischer Produkte",
        formats: "Größen",
        productCount: "Produkte",
        categories: {
          fresh: {
            name: "Frische Datteln",
            shortName: "Datteln",
            description: "Außergewöhnliche algerische Deglet Nour"
          },
          derivatives: {
            name: "Dattelderivate",
            shortName: "Derivate",
            description: "Sirupe, Honige, Essige & Gebäck"
          },
          others: {
            name: "Weitere Produkte",
            shortName: "Sonstige",
            description: "Öle, Marinaden, Gewürze & Saucen"
          }
        },
        items: {
          d1: {
            name: "Premium Algerische Datteln",
            subtitle: "Deglet Nour – Aus dem Herzen der Sahara",
            description: "Außergewöhnliche Deglet Nour-Datteln, angebaut im Herzen der algerischen Sahara. Präsentiert in luxuriöser blau-goldener Verpackung. Zartes Fruchtfleisch, reich an Geschmack und Nährstoffen."
          },
          d2: {
            name: "Premium Deglet Nour Datteln",
            subtitle: "Höchste Qualität – 1kg",
            description: "Außergewöhnliche Deglet Nour-Datteln, sorgfältig aus algerischen Palmenhainen ausgewählt. Zartes, durchscheinendes Fruchtfleisch, sehr süß mit feinem und delikatem Geschmack. Elegante Schachtel mit Fenster, ideal für Export und Geschenke. Reich an Ballaststoffen, Kalium und natürlicher Energie."
          },
          d3: {
            name: "Deglet Nour Oasis Datteln",
            subtitle: "Premium Edition – 500g",
            description: "Premium Deglet Nour-Datteln in eleganter schwarzer Edition. Üppige, glänzende Früchte mit großer geschmacklicher Finesse. Luxuriöse Verpackung, ideal für hochwertige Geschenke und anspruchsvolle Kunden."
          },
          d4: {
            name: "Deglet Nour Oasis Datteln",
            subtitle: "Algerische Premium-Datteln",
            description: "Hochwertige Deglet Nour-Datteln, in Algerien angebaut und sorgfältig verpackt. Weich, saftig und natürlich süß, sie repräsentieren das Beste aus dem Saharan-Terroir. Raffinierte Geschenkverpackung, perfekt für internationale Märkte."
          },
          d5: {
            name: "Premium Daglet Nour Datteln",
            subtitle: "Außergewöhnliche Qualität – 1kg",
            description: "Die berühmten Deglet Nour-Datteln, das Flaggschiff Algeriens. Ausgewählt für ihre großzügige Größe, bernsteinfarbene Farbe und unvergleichlichen Geschmack. Sorgfältig in moderner, schlanker Verpackung verpackt, perfekt für den Export."
          },
          d6: {
            name: "Deglet Nour Datteln",
            subtitle: "Authentische Algerische Qualität",
            description: "Premium Deglet Nour-Datteln in dynamischer grüner Verpackung. Früchte ausgewählt für ihre natürliche Süße und überlegene Qualität. Moderne und attraktive Verpackung, perfekt für europäische Märkte."
          },
          d7: {
            name: "Deglet Nour Oasis Datteln",
            subtitle: "Premium Geschenk",
            description: "Wunderschöne Deglet Nour-Datteln präsentiert in einer eleganten weißen Geschenkbox mit roter Schleife. Schmelzendes Fruchtfleisch, zart süßer Geschmack und perfekte Textur. Ideal für Feste, Unternehmen und Kunden, die algerische Raffinesse suchen."
          },
          chocoDate: {
            name: "Choco-Date Pistazie & Karamell",
            subtitle: "Datteln in Premium-Schokolade",
            description: "Köstliche Premium Deglet Nour-Datteln, überzogen mit feiner Schokolade, gefüllt mit Pistazie und Karamell. Eine perfekte Verbindung zwischen der natürlichen Süße der algerischen Dattel, dem Knusprigen der Pistazie und dem Reichtum des Karamells. Elegante 10-Stück-Geschenkbox, ideal für Feste und Firmengeschenke."
          },
          depsClassic: {
            name: "Datteln-Dibs (Dattelsirup)",
            subtitle: "100% Natürlich & Rein",
            description: "Premium-Dattelsirup (Dibs), durch natürliche Konzentration des Saftes hochwertiger algerischer Datteln gewonnen. Intensiv dunkelbraune Farbe, glatte fließende Textur, reicher, süßer und karamellisierter Geschmack mit tiefen fruchtigen Noten. Perfekt für Getränke, Pfannkuchen, Joghurts, Gebäck. Ohne Zuckerzusatz, ohne Konservierungsstoffe."
          },
          depsExtract: {
            name: "Dattel-Extrakt / Dattelmelasse",
            subtitle: "100% Natürlich – Reines Dattel-Extrakt",
            description: "Reines hochwertiges Dattel-Extrakt (Dattel-Dibs), handwerklich aus ausgewählten algerischen Datteln hergestellt. Reichhaltiges und schmackhaftes Konzentrat mit dicker Textur und intensivem Geschmack von Karamell und Trockenfrüchten. Erhältlich in praktischen Flaschen und Töpfen."
          },
          flocons: {
            name: "Haferflocken",
            subtitle: "100% Natürlich - Klassisches Müsli",
            description: "Premium-Haferflocken reich an Ballaststoffen und Proteinen. Ideal für gesunde Frühstücke, Porridge, Granola und Gebäckrezepte. 400g natürliche Reinheit."
          },
          mielDatte: {
            name: "Datteln-Honig",
            subtitle: "100% Natürlich & Rein",
            description: "Premium-Datteln-Honig, durch natürliche Konzentration des Saftes ausgewählter algerischer Datteln gewonnen. Glatte Textur, schöne dunkle bernsteinfarbene Farbe, reicher, weicher und karamellisierter Geschmack mit zarten fruchtigen Noten. Hervorragend als Aufstrich, natürlicher Süßstoff oder als Begleitung zu Käse."
          },
          mielLagmi: {
            name: "Natürlicher Lagmi-Honig",
            subtitle: "Palmensaft-Honig – Vitalität",
            description: "100% natürlicher Lagmi-Honig aus dem Saft der algerischen Dattelpalme. Reichhaltig und belebend, traditionell geschätzt für seine natürliche Energie und Vorteile für die Vitalität."
          },
          grenade1: {
            name: "Granatapfelmelasse",
            subtitle: "100% Natürlich & Rein",
            description: "Premium-Granatapfelmelasse mit intensivem süß-saurem Geschmack. Hergestellt aus der natürlichen Reduktion von algerischem Granatapfelsaft. Perfekt für Marinaden, Saucen, Salate und orientalische Gerichte."
          },
          grenade2: {
            name: "Granatapfelmelasse",
            subtitle: "Premium-Sauce & Würze",
            description: "100% natürliche Granatapfelmelasse. Ideal zur Geschmacksverstärkung von Gegrilltem, Fisch, Salaten und Schmorgerichten. Unvergleichliche säuerliche und aromatische Note."
          },
          sucreDatte: {
            name: "Datteln-Zucker",
            subtitle: "100% Natürlich & Glutenfrei",
            description: "Premium-Datteln-Zucker aus algerischen Datteln. Gesunde und nährstoffreiche Alternative zu raffiniertem Zucker, reich an Ballaststoffen und Mineralien. Zart karamellisierter Geschmack, perfekt für Gebäck und Getränke."
          },
          tahini: {
            name: "Sesamcreme (Tahini)",
            subtitle: "100% Rein & Natürlich",
            description: "Premium-Tahini aus 100% reinem Sesam. Glatte Textur und fein nussiger Geschmack. Ideal für Hummus, Saucen, Vinaigretten und orientalisches Gebäck."
          },
          farineSesame: {
            name: "Sesammehl",
            subtitle: "100% Natürlich",
            description: "Feines geröstetes Sesammehl mit intensivem und konzentriertem Geschmack. Perfekt zur Bereicherung von Gebäck, Saucen und gesunden Rezepten. Reich an Proteinen und Mineralien."
          },
          vinaigreDatte: {
            name: "Datteln-Essig",
            subtitle: "100% Natürlich & Handwerklich",
            description: "Premium-Datteln-Essig aus der natürlichen Fermentation algerischer Datteln. Ausgewogener Geschmack, leicht süß und fruchtig. Ideal für Salate, Marinaden und Saucen."
          },
          vinaigreBalsamiqueElegant: {
            name: "Apfel-Balsamicoessig",
            subtitle: "Gereift & Raffiniert",
            description: "Premium Apfel-Balsamicoessig mit intensiver Mahagoni-Farbe. Hergestellt aus ausgewählten Äpfeln und natürlich gereift, entwickelt er einen reichen, weichen und komplexen Geschmack mit holzigen und leicht süßen Noten. Ideal für Salate, gegrilltes Fleisch und Käse."
          },
          vinaigreBalsamiqueCompact: {
            name: "Apfel-Balsamicoessig",
            subtitle: "Praktisches Format 220 ml",
            description: "Handwerklicher Apfel-Balsamicoessig im kompakten Format. Schöne dunkle Farbe und ausgewogener Geschmack zwischen Süße und Säure, perfekt für den täglichen Gebrauch. Hervorragend für Vinaigretten und Marinaden."
          },
          vinaigreCidreBio: {
            name: "Bio Apfelessig",
            subtitle: "Bio – Nicht Pasteurisiert & Nicht Filtriert",
            description: "Bio-Apfelessig aus der natürlichen Fermentation frischer Äpfel. Nicht pasteurisiert und nicht filtriert, behält er alle seine Enzyme, Probiotika und natürlichen Vorteile. Ideal für gesunde Küche und Detox-Getränke."
          },
          vinaigrePommeClassique: {
            name: "Apfelessig",
            subtitle: "100% Natürlich",
            description: "Traditioneller algerischer Apfelessig, hergestellt aus ausgewählten Äpfeln. Reiner, fruchtiger und angenehm säuerlicher Geschmack. Vielseitig und unverzichtbar in der Küche: perfekt für Salate, Marinaden, Saucen und Konserven. Erhältlich in 250 ml und 500 ml."
          },
          huilePiment: {
            name: "Olivenöl mit Chili",
            subtitle: "Handwerkliche Infusion",
            description: "Natives Olivenöl extra mit rotem Chili infundiert. Aromatischer und leicht scharfer Geschmack. Perfekt zum Verfeinern von Pizzen, Gegrilltem, Pasta und Marinaden."
          },
          huileExtraVierge500: {
            name: "Natives Olivenöl Extra",
            subtitle: "Premium-Qualität – 500ml",
            description: "Kaltgepresstes natives Olivenöl extra mit fruchtigem und authentischem Geschmack. Reich an natürlichen Vorteilen, ideal für Küche und Würzungen."
          },
          huileExtraVierge5L: {
            name: "Natives Olivenöl Extra",
            subtitle: "Großes 5L Format",
            description: "Familien- und Profi-Format unseres Premium nativen Olivenöls extra. Höchste Qualität und ausgezeichnetes Preis-Leistungs-Verhältnis."
          },
          olivesNoiresEntieres: {
            name: "Ganze Schwarze Oliven",
            subtitle: "Premium-Qualität",
            description: "Erstklassige ganze schwarze Oliven, ausgewählt für ihre großzügige Größe, intensive schwarze Farbe und festes, schmackhaftes Fruchtfleisch. Ideal für Salate, Pizzen, Tapas und mediterrane Küche."
          },
          olivesNoiresTranchees: {
            name: "Geschnittene Schwarze Oliven",
            subtitle: "Verzehrfertig",
            description: "Fein und gleichmäßig geschnittene schwarze Oliven. Praktisch und einfach zu verwenden, verleihen sie Pizzen, Sandwiches, Salaten, Pasta und warmen Gerichten eine mediterrane Note."
          },
          olivesVertesEntieres: {
            name: "Ganze Grüne Oliven",
            subtitle: "Premium-Qualität",
            description: "Feste und knackige ganze grüne Oliven, mit leicht fruchtigem und ausgewogenem Geschmack. Perfekt für Aperitif, Salate, Tajines oder als Beilage."
          },
          macedoine: {
            name: "Gemischtes Gemüse",
            subtitle: "Bunte Mischung",
            description: "Premium-Gemüsemischung, bestehend aus einer abwechslungsreichen Mischung aus Karotten, Erbsen, grünen Bohnen, Mais und anderem Gemüse. Verzehrfertig, ideal für gemischte Salate und Beilagen."
          },
          maisDoux: {
            name: "Gelber Süßer Mais",
            subtitle: "Zarte & Süße Körner",
            description: "Premium gelber süßer Mais, zart und natürlich süß. Saftige und schmackhafte Körner, perfekt für Salate, Suppen, Beilagen und mexikanische Gerichte."
          },
          safran: {
            name: "Reiner Safran",
            subtitle: "Natürliches Rotes Gold",
            description: "Außergewöhnlicher Safran mit einzigartigem und raffiniertem floralen Aroma. Reich an Antioxidantien, veredelt er Ihre Gerichte, Aufgüsse und Gebäck. Ein kostbarer Schatz der Natur."
          },
          saucesPiments: {
            name: "Chili-Saucen Sortiment",
            subtitle: "3 Varianten – Grün, Scharf Rot & Geräuchert",
            description: "Unser Trio handwerklicher Chili-Saucen: die Grüne Chili-Sauce mit lebendigem und krautigem Geschmack für Gegrilltes und Tacos; die kraftvolle und fruchtige Scharfe Rote Chili-Sauce für Liebhaber starker Empfindungen; und die Geräucherte Chili-Sauce mit tiefen Barbecue-Aromen, perfekt für Gegrilltes und Schmorgerichte."
          }
        }
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
        otherProductsTitle: "Premium Pflanzenprodukte & Öle",
        otherProducts: {
          oliveOil: "Natürliches natives Olivenöl extra (Norden & Hochplateaus)",
          tomatoSauce: "Hochwertige Tomatensaucen",
          chiliSauce: "Handwerkliche Chili-Saucen"
        },
        derivativesTitle: "Innovative Dattelderivate",
        derivatives: {
          dried: "Getrocknete Datteln",
          paste: "Dattelpaste",
          syrup: "Dattelsirup (Dibs)",
          molasses: "Dattelmelasse",
          sugar: "Dattelzucker",
          powder: "Dattelpulver",
          jam: "Dattelmarmelade",
          puree: "Dattelpüree",
          vinegar: "Datteln-Essig",
          beverages: "Dattelgetränke",
          seedOil: "Dattelkernöl",
          seedPowder: "Dattelkernpulver",
          seedCoffee: "Dattelkern-Kaffee"
        },
        seeMore: "Mehr sehen",
        seeLess: "Weniger sehen",
        conclusion: {
          delivery: "Sorgfältige und zuverlässige Lieferung in alle europäischen Länder — Konstante Spitzenqualität, treu dem Ruf von",
          partnership: "Wir suchen aktiv langfristige Partnerschaften mit Importeuren, Distributoren, Verarbeitern und der Lebensmittelindustrie.",
          certifications: "Partnerschaften mit zertifizierten Lieferanten – International anerkannte Referenzen und Qualifikationen."
        },
        imageAlt: "ZE Export & Business - Premium-Produkte aus Algerien",
        imageCaption: "Authentische algerische Qualität – Weltweit exportiert",
        contact: {
          title: "Kontaktieren Sie uns direkt",
          intro: "Wir stehen Ihnen für jede Anfrage nach Angeboten, Mustern oder Partnerschaften zur Verfügung.",
          addressTitle: "Adresse",
          phonesTitle: "Telefone / WhatsApp",
          phones: {
            main: "Haupttelefon:",
            whatsapp: "WhatsApp:"
          },
          emailTitle: "E-Mail & Website",
          responseTime: "Antwort innerhalb von 24 Werktagen – Seriöse Partnerschaften willkommen"
        }
      },
      contact: {
        title: "Kontaktieren Sie uns",
        subtitle: "Bereit, authentische algerische Produkte zu importieren?"
      },
      footer: {
        tagline: "Premium-Produkte aus Algerien - Von Algerien in die Welt",
        rights: "Alle Rechte vorbehalten"
      }
    }
  };

  const t = translations[language];

  // ============================================================
  // 📦 DONNÉES PRODUITS (33 produits, indépendant des langues)
  // Le `id` correspond à la clé dans translations.products.items
  // ============================================================
  const productsData = [
    // 🌴 DATTES FRAÎCHES (7)
    { id: 'd1', category: 'fresh', image: '/assets/Dattes/D1.png',  sizes: '1kg' },
    { id: 'd2', category: 'fresh', image: '/assets/Dattes/D2.jpg',  sizes: '1kg' },
    { id: 'd3', category: 'fresh', image: '/assets/Dattes/D3.jpg',  sizes: '500g' },
    { id: 'd4', category: 'fresh', image: '/assets/Dattes/D4.jpg',  sizes: '1kg' },
    { id: 'd5', category: 'fresh', image: '/assets/Dattes/D5.jpg',  sizes: '1kg' },
    { id: 'd6', category: 'fresh', image: '/assets/Dattes/D6.jpg',  sizes: '1kg' },
    { id: 'd7', category: 'fresh', image: '/assets/Dattes/D7.jpg',  sizes: '500g, 1kg' },

    // 🍯 DÉRIVÉS DE DATTES (16)
    { id: 'chocoDate',                  category: 'derivatives', image: '/assets/DeriveDatte/Chocolat/D1.png',     sizes: '10 pcs' },
    { id: 'depsClassic',                category: 'derivatives', image: '/assets/DeriveDatte/Deps/D1.png',         sizes: '250ml, 500ml, 1L' },
    { id: 'depsExtract',                category: 'derivatives', image: '/assets/DeriveDatte/Deps/D2.png',         sizes: '500ml, 1L' },
    { id: 'flocons',                    category: 'derivatives', image: '/assets/DeriveDatte/Flocon/D1.png',       sizes: '400g' },
    { id: 'mielDatte',                  category: 'derivatives', image: '/assets/DeriveDatte/MielDatte/D1.png',    sizes: '250g, 500g' },
    { id: 'mielLagmi',                  category: 'derivatives', image: '/assets/DeriveDatte/MielLagmi/D1.png',    sizes: '250g' },
    { id: 'grenade1',                   category: 'derivatives', image: '/assets/DeriveDatte/SiropGrenade/D1.png', sizes: '250ml' },
    { id: 'grenade2',                   category: 'derivatives', image: '/assets/DeriveDatte/SiropGrenade/D2.png', sizes: '500ml' },
    { id: 'sucreDatte',                 category: 'derivatives', image: '/assets/DeriveDatte/SucreDatte/D1.png',   sizes: '250g, 500g' },
    { id: 'tahini',                     category: 'derivatives', image: '/assets/DeriveDatte/tahini/D1.png',       sizes: '250g, 500g' },
    { id: 'farineSesame',               category: 'derivatives', image: '/assets/DeriveDatte/tahini/D2.jpg',       sizes: '250g' },
    { id: 'vinaigreDatte',              category: 'derivatives', image: '/assets/DeriveDatte/VinegreDatte/D1.png', sizes: '500ml' },
    { id: 'vinaigreBalsamiqueElegant',  category: 'derivatives', image: '/assets/DeriveDatte/VinegrePomme/D1.png', sizes: '500ml' },
    { id: 'vinaigreBalsamiqueCompact',  category: 'derivatives', image: '/assets/DeriveDatte/VinegrePomme/D2.png', sizes: '220ml' },
    { id: 'vinaigreCidreBio',           category: 'derivatives', image: '/assets/DeriveDatte/VinegrePomme/D3.jpg', sizes: '500ml' },
    { id: 'vinaigrePommeClassique',     category: 'derivatives', image: '/assets/DeriveDatte/VinegrePomme/D4.jpg', sizes: '250ml, 500ml' },

    // 🫒 AUTRES PRODUITS (10)
    { id: 'huilePiment',          category: 'others', image: '/assets/AutreProduit/Huil/D1.jpg',    sizes: '250ml' },
    { id: 'huileExtraVierge500',  category: 'others', image: '/assets/AutreProduit/Huil/D2.jpg',    sizes: '500ml' },
    { id: 'huileExtraVierge5L',   category: 'others', image: '/assets/AutreProduit/Huil/D3.jpg',    sizes: '5L' },
    { id: 'olivesNoiresEntieres', category: 'others', image: '/assets/AutreProduit/Marine/D1.png',  sizes: '350g, 700g' },
    { id: 'olivesNoiresTranchees',category: 'others', image: '/assets/AutreProduit/Marine/D2.png',  sizes: '350g' },
    { id: 'olivesVertesEntieres', category: 'others', image: '/assets/AutreProduit/Marine/D3.png',  sizes: '350g, 700g' },
    { id: 'macedoine',            category: 'others', image: '/assets/AutreProduit/Marine/D4.png',  sizes: '400g' },
    { id: 'maisDoux',             category: 'others', image: '/assets/AutreProduit/Marine/D5.png',  sizes: '340g' },
    { id: 'safran',               category: 'others', image: '/assets/AutreProduit/Safran/D1.png',  sizes: '1g, 5g' },
    { id: 'saucesPiments',        category: 'others', image: '/assets/AutreProduit/Sauces/D1.png',  sizes: '200ml' },
  ];

  // Configuration visuelle des catégories
  const categoryConfig = [
    { id: 'fresh',       icon: '', gradient: 'from-amber-500 to-orange-700' },
    { id: 'derivatives', icon: '', gradient: 'from-blue-600 to-indigo-800' },
    { id: 'others',      icon: '', gradient: 'from-emerald-600 to-green-800' }
  ];

  // Filtrage par catégorie active
  const filteredProducts = productsData.filter(p => p.category === activeCategory);

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English',  flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch',  flag: '🇩🇪' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-sans">

      {/* ========== Navigation ========== */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 animate-fade-in">
              <div className="w-30 h-22 rounded-lg overflow-hidden transform hover:scale-110 transition-transform duration-300">
                <img
                  src="/assets/logo.png"
                  alt="ZE Export & Business Logo"
                  className="w-full h-24 object-contain"
                />
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
              <a href="#about"           onClick={() => setIsMenuOpen(false)} className="block text-slate-900 hover:text-blue-700 py-2 font-medium">{t.nav.about}</a>
              <a href="#products"        onClick={() => setIsMenuOpen(false)} className="block text-slate-900 hover:text-blue-700 py-2 font-medium">{t.nav.products}</a>
              <a href="#offer-products"  onClick={() => setIsMenuOpen(false)} className="block text-slate-900 hover:text-blue-700 py-2 font-medium">{t.nav.offer || "Offre"}</a>

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

      {/* ========== Hero Section ========== */}
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
                alt={t.hero.imageAlt}
                className="w-full max-w-lg rounded-2xl shadow-2xl object-cover"
              />
            </div>
            <div className="order-1 md:order-2 text-center md:text-left">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight whitespace-pre-line">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== About Section ========== */}
      <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-white/90 to-blue-50/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="md:col-span-6 order-2 md:order-1 flex flex-col items-center justify-center min-h-[500px] md:min-h-[600px] lg:min-h-[700px] px-4 md:px-8 lg:px-12">
              <div className="w-full max-w-3xl text-center">
                <div className="inline-block mb-4 px-5 py-1.5 bg-blue-900/10 rounded-full border border-blue-200/40 text-blue-800 font-medium text-sm tracking-wider uppercase">
                  {t.about.since} 2016
                </div>
                <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 md:mb-8 leading-tight bg-gradient-to-r from-blue-950 via-blue-800 to-blue-700 bg-clip-text text-transparent">
                  {t.about.title}
                </h3>
              </div>
              <div className="w-full max-w-3xl space-y-6 md:space-y-8 text-lg md:text-xl text-blue-800/90 leading-relaxed font-light text-center">
                <p>{t.about.description}</p>
                <p>{t.about.description2}</p>
              </div>
            </div>
            <div className="md:col-span-6 order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl group">
                <div className="absolute inset-[-5%] rounded-3xl bg-gradient-to-br from-blue-500/12 via-indigo-500/8 to-transparent blur-2xl opacity-65 group-hover:opacity-90 transition-opacity duration-700 -z-10"></div>
                <div className="absolute inset-[-2%] rounded-3xl bg-gradient-to-br from-blue-400/12 to-indigo-400/8 blur-xl -z-10"></div>
                <img
                  src="/assets/about-hero.jpg"
                  alt={t.about.imageAlt}
                  className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-2xl ring-1 ring-blue-200/30 transition-all duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-blue-600/20 to-indigo-600/10 rounded-full blur-3xl -z-10 opacity-70 group-hover:opacity-95 transition-opacity duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ⭐ NOUVELLE Products Section avec ONGLETS de catégories ========== */}
      <section id="products" className="py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/40 to-white relative overflow-hidden">
        {/* Décors de fond subtils */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Titre */}
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
              {t.products.title}
            </h3>
            <p className="text-lg md:text-xl text-blue-800/80 max-w-3xl mx-auto">
              {t.products.subtitle}
            </p>
          </div>

          {/* ============ ONGLETS DE CATÉGORIES ============ */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-12 md:mb-16">
            {categoryConfig.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = productsData.filter(p => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`group relative px-6 py-4 md:px-8 md:py-5 rounded-2xl transition-all duration-500 overflow-hidden ${
                    isActive
                      ? `bg-gradient-to-r ${cat.gradient} text-white shadow-2xl scale-105`
                      : 'bg-white text-blue-900 hover:bg-blue-50 shadow-md hover:shadow-xl border border-blue-100'
                  }`}
                >
                  <div className="relative z-10 flex items-center gap-3 md:gap-4">
                    <span className="text-3xl md:text-4xl">{cat.icon}</span>
                    <div className="text-left">
                      <div className="font-bold text-base md:text-lg leading-tight">
                        {t.products.categories[cat.id].name}
                      </div>
                      <div className={`text-xs md:text-sm font-medium ${isActive ? 'text-white/80' : 'text-blue-600/70'}`}>
                        {count} {t.products.productCount}
                      </div>
                    </div>
                  </div>
                  {/* Soulignement actif */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/50"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Description courte de la catégorie active */}
          <div className="text-center mb-10 md:mb-12">
            <p className="text-base md:text-lg italic text-blue-700/70">
              {t.products.categories[activeCategory].description}
            </p>
          </div>

          {/* ============ GRILLE DE PRODUITS (animation fade-in à chaque changement) ============ */}
          <div
            key={activeCategory} /* force remount → relance animation */
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-fade-in"
          >
            {filteredProducts.map((product, index) => {
              const itemTrans = t.products.items[product.id];
              const catColor = categoryConfig.find(c => c.id === product.category);
              return (
                <article
                  key={product.id}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col border border-blue-100/60 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onMouseEnter={() => setActiveProduct(product.id)}
                  onMouseLeave={() => setActiveProduct(null)}
                >
                  {/* IMAGE adaptative — object-contain → conserve les proportions, fond doux */}
                  <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/50 overflow-hidden flex items-center justify-center p-6">
                    {/* Glow décoratif au hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${catColor?.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    <img
                      src={product.image}
                      alt={itemTrans?.name || product.id}
                      loading="lazy"
                      className="relative max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-md"
                      onError={(e) => { e.target.style.opacity = '0.3'; e.target.alt = '⚠️ ' + product.image; }}
                    />
                  </div>

                  {/* CONTENU */}
                  <div className="flex-1 p-6 md:p-7 flex flex-col">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2 block">
                      {itemTrans?.subtitle}
                    </span>
                    <h4 className="text-xl md:text-2xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors leading-tight">
                      {itemTrans?.name}
                    </h4>
                    <p className="text-blue-700/85 text-sm md:text-base mb-4 leading-relaxed flex-1">
                      {itemTrans?.description}
                    </p>
                    {product.sizes && (
                      <div className="mt-auto pt-4 border-t border-blue-100">
                        <span className="text-sm font-semibold text-blue-600">
                          {t.products.formats} : <span className="text-blue-900">{product.sizes}</span>
                        </span>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* ⛔⛔⛔ DÉBUT — SECTION OFFRE OCTOBRE 2025 (à supprimer manuellement) ⛔⛔⛔ */}
      {/* =================================================================== */}
      <section id="offer-products" className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#3b82f6_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,#6366f1_0%,transparent_50%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            {/* Bloc badge volontairement commenté dans la version d'origine */}
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch flex-wrap">
            {/* Bloc 1 – Dattes */}
            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-blue-100/60 p-8 transition-all duration-400 hover:-translate-y-2 flex-1 min-w-0 md:max-w-md">
              <div className="w-full h-70 mx-auto mb-6 rounded-3xl overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-400">
                <img src="/assets/p18.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-5 text-center">
                {t.offer.datesTitle}
              </h3>
              <ul className="space-y-3 text-blue-800 text-base leading-relaxed">
                <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer.dates.degletNour}</li>
                <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer.dates.whiteDates}</li>
                <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer.dates.trays}</li>
                <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer.dates.branches}</li>
              </ul>
            </div>

            {/* Bloc 2 – Autres */}
            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-blue-100/60 p-8 transition-all duration-400 hover:-translate-y-2 flex-1 min-w-0 md:max-w-md">
              <div className="w-full h-70 mx-auto mb-6 rounded-3xl overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-400">
                <img src="/assets/p18.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-5 text-center">
                {t.offer.otherProductsTitle}
              </h3>
              <ul className="space-y-3 text-blue-800 text-base leading-relaxed">
                <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer.otherProducts.oliveOil}</li>
                <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer.otherProducts.tomatoSauce}</li>
                <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer.otherProducts.chiliSauce}</li>
              </ul>
            </div>

            {/* Bloc 3 – Dérivés (expandable) */}
            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-blue-100/60 p-8 transition-all duration-400 hover:-translate-y-2 flex-1 min-w-0 md:max-w-md">
              <div className="w-full h-70 mx-auto mb-6 rounded-3xl overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-400">
                <img src="/assets/p17.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-5 text-center">
                {t.offer.derivativesTitle}
              </h3>

              <ul className="space-y-3 text-blue-800 text-base leading-relaxed">
                <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer.derivatives.dried}</li>
                <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer.derivatives.paste}</li>
                <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer.derivatives.syrup}</li>
                <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer.derivatives.molasses}</li>
                <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer.derivatives.sugar}</li>

                {isExpanded && (
                  <>
                    <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer.derivatives.powder}</li>
                    <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer.derivatives.jam}</li>
                    <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer.derivatives.puree}</li>
                    <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer.derivatives.vinegar}</li>
                    <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer.derivatives.beverages}</li>
                    <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer.derivatives.seedOil}</li>
                    <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer.derivatives.seedPowder}</li>
                    <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span> {t.offer.derivatives.seedCoffee}</li>
                  </>
                )}
              </ul>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 w-full flex items-center justify-center text-blue-700 hover:text-blue-900 font-medium transition-colors"
              >
                {isExpanded ? (
                  <>{t.offer.seeLess} <ChevronUp className="ml-2 w-5 h-5" /></>
                ) : (
                  <>{t.offer.seeMore} <ChevronDown className="ml-2 w-5 h-5" /></>
                )}
              </button>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mt-16 md:mt-20 text-center max-w-5xl mx-auto">
            <p className="text-lg md:text-xl text-blue-800 leading-relaxed mb-8">
              {t.offer.conclusion.delivery} <strong>ZE EXPORT & BUSINESS</strong>.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-blue-900 mb-8">
              {t.offer.conclusion.partnership}
            </p>
            <p className="text-xl text-blue-700/80 italic mb-8">
              {t.offer.conclusion.certifications}
            </p>
          </div>

          {/* Certificats */}
          <div className="mt-8">
            <div className="overflow-x-auto pb-6">
              <div className="flex flex-nowrap gap-6 md:gap-10 justify-start md:justify-center items-center">
                <a href="https://www.brgs-certification.com/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 transition-transform hover:scale-105 hover:shadow-xl duration-300">
                  <img src="/assets/2.png" alt="BRGS Certification" className="h-28 md:h-40 w-auto object-contain rounded-lg border border-blue-200 shadow-md" />
                </a>
                <a href="https://www.ecocert.com/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 transition-transform hover:scale-105 hover:shadow-xl duration-300">
                  <img src="/assets/3.png" alt="Ecocert Certification" className="h-28 md:h-40 w-auto object-contain rounded-lg border border-blue-200 shadow-md" />
                </a>
                <a href="https://agriculture.gouv.fr/agriculture-biologique" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 transition-transform hover:scale-105 hover:shadow-xl duration-300">
                  <img src="/assets/4.png" alt="Agriculture Biologique AB" className="h-28 md:h-40 w-auto object-contain rounded-lg border border-blue-200 shadow-md" />
                </a>
                <a href="https://www.ifs-certification.com/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 transition-transform hover:scale-105 hover:shadow-xl duration-300">
                  <img src="/assets/5.png" alt="IFS Food Certification" className="h-28 md:h-40 w-auto object-contain rounded-lg border border-blue-200 shadow-md" />
                </a>
                <a href="https://www.usda.gov/topics/organic" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 transition-transform hover:scale-105 hover:shadow-xl duration-300">
                  <img src="/assets/1.png" alt="USDA Organic Certification" className="h-28 md:h-40 w-auto object-contain rounded-lg border border-blue-200 shadow-md" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =================================================================== */}
      {/* ⛔⛔⛔ FIN — SECTION OFFRE OCTOBRE 2025 ⛔⛔⛔                            */}
      {/* =================================================================== */}

      {/* ========== Contact Section ========== */}
      <section id="offer-contact" className="py-16 md:py-20 bg-white relative overflow-hidden border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex items-center justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group w-full max-w-md md:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src="/assets/logo.png"
                  alt={t.offer.imageAlt}
                  className="w-full h-auto md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105 rounded-3xl"
                />
                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                  <p className="text-lg md:text-xl font-semibold drop-shadow-lg">
                    {t.offer.imageCaption}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">{t.offer.contact.title}</h3>
                <p className="text-base text-blue-700 leading-relaxed">{t.offer.contact.intro}</p>
              </div>

              {/* Adresse */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100 shadow-lg">
                <div className="flex items-center mb-2">
                  <svg className="w-7 h-7 text-blue-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h4 className="text-base md:text-lg font-semibold text-blue-900">{t.offer.contact.addressTitle}</h4>
                </div>
                <p className="text-blue-800 text-sm md:text-base ml-10 leading-tight">
                  191, Bois des Cars 2<br />
                  Dely Brahim, Alger<br />
                  Algérie
                </p>
              </div>

              {/* Téléphones */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100 shadow-lg">
                <div className="flex items-center mb-2">
                  <svg className="w-7 h-7 text-blue-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <h4 className="text-base md:text-lg font-semibold text-blue-900">{t.offer.contact.phonesTitle}</h4>
                </div>
                <div className="space-y-1.5 text-blue-800 text-sm md:text-base ml-10">
                  <p className="flex items-center">
                    <span className="font-medium">{t.offer.contact.phones.main}</span>
                    <span className="ml-2 font-bold">+213 0555 453 377</span>
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium">{t.offer.contact.phones.whatsapp}</span>
                    <span className="ml-2 font-bold">+213 779 880 802</span>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100 shadow-lg">
                <div className="flex items-center mb-2">
                  <svg className="w-7 h-7 text-blue-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h4 className="text-base md:text-lg font-semibold text-blue-900">{t.offer.contact.emailTitle}</h4>
                </div>
                <div className="space-y-1.5 text-blue-800 text-sm md:text-base ml-10">
                  <p className="font-medium break-all">
                    <a href="mailto:info.ze.export@gmail.com" className="hover:text-blue-900 transition-colors">
                      info.ze.export@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <p className="text-center text-blue-700 italic mt-4 text-sm md:text-base">
                {t.offer.contact.responseTime}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Footer ========== */}
      <footer className="bg-gradient-to-br from-blue-950 to-indigo-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h5 className="text-2xl font-bold mb-4">ZE Export & Business</h5>
          <p className="text-blue-200 mb-4">{t.footer.tagline}</p>
          <p className="text-blue-400 text-sm">
            © {new Date().getFullYear()} ZE Export & Business. {t.footer.rights}.
          </p>
        </div>
      </footer>

      {/* ========== Animations globales (CORRIGÉ : plus de `jsx global`) ========== */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-20px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-float          { animation: float 7s ease-in-out infinite; }
        .animate-float-delayed  { animation: float 9s ease-in-out infinite; animation-delay: 2s; }
        .animate-fade-in        { animation: fade-in 0.5s ease-out both; }
        .animate-slide-down     { animation: slide-down 0.25s ease-out both; }
      `}</style>
    </div>
  );
}