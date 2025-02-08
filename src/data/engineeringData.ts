export const engineeringData: Record<string, {
    name: string;
    background: string;
    description: string;
    courses: {
      S1: { code: string; name: string; details: string[]; background: string; }[];
      S2: { code: string; name: string; details: string[]; background: string; }[];
    };
  }> = {BTP: {
      name: "Génie Civil (BTP)",
      background: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80",
      description: "Formation en génie civil et construction",
      courses: {
        S1: [
          {
            code: 'BTP311',
            name: 'Mécanique des Sols',
            details: ['Géotechnique', 'Fondations'],
            background: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80'
          },
          {
            code: 'BTP312',
            name: 'Résistance des Matériaux',
            details: ['RDM avancée', 'Calcul de structures'],
            background: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80'
          },
          {
            code: 'BTP313',
            name: 'Matériaux de Construction',
            details: ['Béton armé', 'Matériaux innovants'],
            background: 'https://images.unsplash.com/photo-1516216628859-9bccb4f1505c?auto=format&fit=crop&q=80'
          },
          {
            code: 'BTP314',
            name: 'Hydraulique',
            details: ['Mécanique des fluides', 'Réseaux hydrauliques'],
            background: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a26?auto=format&fit=crop&q=80'
          }
        ],
        S2: [
          {
            code: 'BTP321',
            name: 'Construction Métallique',
            details: ['Structures métalliques', 'Assemblages'],
            background: 'https://images.unsplash.com/photo-1515578706925-0dc1a7bfc8cb?auto=format&fit=crop&q=80'
          },
          {
            code: 'BTP322',
            name: 'Béton Précontraint',
            details: ['Précontrainte', 'Calcul des structures'],
            background: 'https://images.unsplash.com/photo-1590372648787-e9934444a14d?auto=format&fit=crop&q=80'
          },
          {
            code: 'BTP323',
            name: 'Management de Projet',
            details: ['Gestion de chantier', 'Planning'],
            background: 'https://images.unsplash.com/photo-1507207611509-ec012433ff52?auto=format&fit=crop&q=80'
          },
          {
            code: 'BTP324',
            name: 'Géotechnique Avancée',
            details: ['Fondations profondes', 'Stabilité des pentes'],
            background: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80'
          }
        ]
      }
    },
    GI: {
      name: "Génie Industriel",
      background: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
      description: "Formation en génie industriel et optimisation",
      courses: {
        S1: [
          {
            code: 'GI311',
            name: 'Gestion de Production',
            details: ['Planification', 'Ordonnancement'],
            background: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80'
          },
          {
            code: 'GI312',
            name: 'Logistique Industrielle',
            details: ['Supply Chain', 'Transport'],
            background: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80'
          },
          {
            code: 'GI313',
            name: 'Qualité et Amélioration Continue',
            details: ['Six Sigma', 'Lean Manufacturing'],
            background: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80'
          },
          {
            code: 'GI314',
            name: 'Automatisation Industrielle',
            details: ['Automates', 'SCADA'],
            background: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80'
          }
        ],
        S2: [
          {
            code: 'GI321',
            name: 'Lean Manufacturing',
            details: ['Kaizen', '5S'],
            background: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80'
          },
          {
            code: 'GI322',
            name: 'Industrie 4.0',
            details: ['IoT', 'Big Data'],
            background: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80'
          },
          {
            code: 'GI323',
            name: 'Management des Risques',
            details: ['Analyse des risques', 'Sécurité'],
            background: 'https://images.unsplash.com/photo-1507207611509-ec012433ff52?auto=format&fit=crop&q=80'
          },
          {
            code: 'GI324',
            name: 'Simulation Industrielle',
            details: ['Modélisation', 'Optimisation'],
            background: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80'
          }
        ]
      }
    },
    GM: {
      name: "Génie Mécanique",
      background: "https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?auto=format&fit=crop&q=80",
      description: "Formation en conception et fabrication mécanique",
      courses: {
        S1: [
          {
            code: 'GM311',
            name: 'CAO/FAO',
            details: ['CATIA', 'SolidWorks'],
            background: 'https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?auto=format&fit=crop&q=80'
          },
          {
            code: 'GM312',
            name: 'Mécanique des Structures',
            details: ['Éléments finis', 'Dynamique'],
            background: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80'
          },
          {
            code: 'GM313',
            name: 'Matériaux Avancés',
            details: ['Composites', 'Métallurgie'],
            background: 'https://images.unsplash.com/photo-1531088009183-5ff5b7c95f91?auto=format&fit=crop&q=80'
          },
          {
            code: 'GM314',
            name: 'Robotique',
            details: ['Cinématique', 'Commande'],
            background: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80'
          }
        ],
        S2: [
          {
            code: 'GM321',
            name: 'Mécanique des Fluides',
            details: ['Aérodynamique', 'Hydraulique'],
            background: 'https://images.unsplash.com/photo-1576444356170-66073046b1bc?auto=format&fit=crop&q=80'
          },
          {
            code: 'GM322',
            name: 'Conception Mécanique',
            details: ['Dimensionnement', 'Optimisation'],
            background: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80'
          },
          {
            code: 'GM323',
            name: 'Maintenance Industrielle',
            details: ['Maintenance prédictive', 'Fiabilité'],
            background: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80'
          },
          {
            code: 'GM324',
            name: 'Énergétique',
            details: ['Thermodynamique', 'Transferts thermiques'],
            background: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80'
          }
        ]
      }
    },
    FID: {
      name: "Finance et Ingénierie Décisionnelle",
      background: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      description: "Formation en finance et aide à la décision",
      courses: {
        S1: [
          {
            code: 'FID311',
            name: 'Analyse Financière',
            details: ['Marchés financiers', 'Gestion de portefeuille'],
            background: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
          },
          {
            code: 'FID312',
            name: 'Machine Learning',
            details: ['Deep Learning', 'NLP'],
            background: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80'
          },
          {
            code: 'FID313',
            name: 'Optimisation',
            details: ['Recherche opérationnelle', 'Programmation linéaire'],
            background: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80'
          },
          {
            code: 'FID314',
            name: 'Statistiques Avancées',
            details: ['Séries temporelles', 'Économétrie'],
            background: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
          }
        ],
        S2: [
          {
            code: 'FID321',
            name: 'Data Science',
            details: ['Big Data', 'Analytics'],
            background: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
          },
          {
            code: 'FID322',
            name: 'Finance Quantitative',
            details: ['Trading algorithmique', 'Risk Management'],
            background: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80'
          },
          {
            code: 'FID323',
            name: 'Business Intelligence',
            details: ['Tableaux de bord', 'KPI'],
            background: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
          },
          {
            code: 'FID324',
            name: 'Blockchain et Fintech',
            details: ['Smart Contracts', 'Cryptomonnaies'],
            background: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80'
          }
        ]
      }
    },
    GE: {
      name: "Génie Électrique",
      background: "https://images.unsplash.com/photo-1620283085068-5aab84e2db8e?auto=format&fit=crop&q=80",
      description: "Formation en électrotechnique et électronique",
      courses: {
        S1: [
          {
            code: 'GE311',
            name: 'Électrotechnique',
            details: ['Machines électriques', 'Réseaux électriques'],
            background: 'https://images.unsplash.com/photo-1620283085068-5aab84e2db8e?auto=format&fit=crop&q=80'
          },
          {
            code: 'GE312',
            name: 'Électronique de Puissance',
            details: ['Convertisseurs', 'Onduleurs'],
            background: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80'
          },
          {
            code: 'GE313',
            name: 'Automatique',
            details: ['Systèmes asservis', 'Régulation'],
            background: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80'
          },
          {
            code: 'GE314',
            name: 'Microélectronique',
            details: ['VHDL', 'FPGA'],
            background: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80'
          }
        ],
        S2: [
          {
            code: 'GE321',
            name: 'Énergies Renouvelables',
            details: ['Solaire', 'Éolien'],
            background: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80'
          },
          {
            code: 'GE322',
            name: 'Smart Grids',
            details: ['Réseaux intelligents', 'IoT'],
            background: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80'
          },
          {
            code: 'GE323',
            name: 'Systèmes Embarqués',
            details: ['Microcontrôleurs', 'IoT'],
            background: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80'
          },
          {
            code: 'GE324',
            name: 'Télécommunications',
            details: ['Réseaux', 'Transmission'],
            background: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80'
          }
        ]
      }
    }
  };