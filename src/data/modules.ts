type ModuleDetails = {
  cours: { googleDriveFolderId: string };
  td: { googleDriveFolderId: string };
  ds: { googleDriveFolderId: string };
  extra?:{ googleDriveFolderId: string };
};

type Module = {
  code: string;
  name: string;
  details: ModuleDetails;
};

export const moduleData = {
  AP1: {
    S1: [
      {
        code: 'M111',
        name: 'Analyse 1',
        details: {
          cours: {
            googleDriveFolderId: '1-T2Z1bF8G27-HONiNPkOxal8tPFGm7-e'  // ID Google Drive pour les cours
          },
          td: {
            googleDriveFolderId: '1DdCDKpAmHpTxO5jEMh753-05eaWyHqdw'
          },
          ds: {
            googleDriveFolderId: '1orVWvsX4j8LQXgBb38qB7Sa5YxKxIbHS'
          },
          extra:{
            googleDriveFolderId: '1ftK-DuyxxIT1d9UiS4ZULS-g1MjOn-Nu' 
          }
        },
        background: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80'
      },

      {
        code: 'M112',
        name: 'Algèbre 1',
        details: {
          cours: { googleDriveFolderId: '1HrepEI0WNomcpb63O811wZbsfXp-ikLE' },
          td: { googleDriveFolderId: '1dMI02JEaG51pJWCFDf8HeDbeBYnY5me7' },
          ds: { googleDriveFolderId: '1aOR_OKxjfk690QsEI34cl2CtYKWeY4lM' }
        },
        background: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80'
      },
      {
        code: 'M113',
        name: 'Physique 1',
        details: {
          cours: { googleDriveFolderId: 'folderIdForCours' },
          td: { googleDriveFolderId: 'folderIdForTD' },
          ds: { googleDriveFolderId: 'folderIdForDS' }
        },
        background: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
      },
      {
        code: 'M114',
        name: 'Mécanique 1',
        details: {
          cours: { googleDriveFolderId: '17lPtA4YxWasrRiha95S6zY2qj0W44M6g' },
          td: { googleDriveFolderId: '1nkjFNJiyWGz2uLZl6tS2dE_SpSXyE36K' },
          ds: { googleDriveFolderId: '1Nu7fd5Yhr8BmTzA3X1J_o3hKWoaNpy4t' }
        },
        background: 'https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?auto=format&fit=crop&q=80'
      },
      {
        code: 'M115',
        name: 'Informatique 1',
        details: {
          cours: { googleDriveFolderId: '1qVA50LqDO05E9BMZg93FuL3bGLwsAo9D' },
          td: { googleDriveFolderId: 'folderIdForTD' },
          ds: { googleDriveFolderId: 'folderIdForDS' }
        },
        background: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80'
      },
      {
        code: 'M116',
        name: 'Méthodologie de travail universitaire',
        details: {
          cours: { googleDriveFolderId: 'folderIdForCours' },
          td: { googleDriveFolderId: 'folderIdForTD' },
          ds: { googleDriveFolderId: 'folderIdForDS' }
        },
        background: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80'
      },
      {
        code: 'M117',
        name: 'Langues Étrangères 1',
        details: {
          cours: { googleDriveFolderId: 'folderIdForCours' },
          td: { googleDriveFolderId: 'folderIdForTD' },
          ds: { googleDriveFolderId: 'folderIdForDS' }
        },
        background: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80'
      }
    ],
    S2: [
      {
        code: 'M121',
        name: 'Analyse 2',
        details: {
          cours: {
            googleDriveFolderId: '1-T2Z1bF8G27-HONiNPkOxal8tPFGm7-e'  // ID Google Drive pour les cours
          },
          td: {
            googleDriveFolderId: '1DdCDKpAmHpTxO5jEMh753-05eaWyHqdw'
          },
          ds: {
            googleDriveFolderId: '1orVWvsX4j8LQXgBb38qB7Sa5YxKxIbHS'
          },
          extra:{
            googleDriveFolderId: '1ftK-DuyxxIT1d9UiS4ZULS-g1MjOn-Nu' 
          }
        },
        background: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80'
      },
      {
        code: 'M122',
        name: 'Algèbre 2',
        details: {
          cours: {
            googleDriveFolderId: '1-T2Z1bF8G27-HONiNPkOxal8tPFGm7-e'  // ID Google Drive pour les cours
          },
          td: {
            googleDriveFolderId: '1DdCDKpAmHpTxO5jEMh753-05eaWyHqdw'
          },
          ds: {
            googleDriveFolderId: '1orVWvsX4j8LQXgBb38qB7Sa5YxKxIbHS'
          },
          extra:{
            googleDriveFolderId: '1ftK-DuyxxIT1d9UiS4ZULS-g1MjOn-Nu' 
          }
        },
        background: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80'
      },
      {
        code: 'M123',
        name: 'Physique 2',
        details: {
          cours: {
            googleDriveFolderId: '1-T2Z1bF8G27-HONiNPkOxal8tPFGm7-e'  // ID Google Drive pour les cours
          },
          td: {
            googleDriveFolderId: '1DdCDKpAmHpTxO5jEMh753-05eaWyHqdw'
          },
          ds: {
            googleDriveFolderId: '1orVWvsX4j8LQXgBb38qB7Sa5YxKxIbHS'
          },
          extra:{
            googleDriveFolderId: '1ftK-DuyxxIT1d9UiS4ZULS-g1MjOn-Nu' 
          }
        },
        background: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80'
      },
      {
        code: 'M124',
        name: 'Informatique 2',
        details: {
          cours: { googleDriveFolderId: 'folderIdForCours' },
          td: { googleDriveFolderId: 'folderIdForTD' },
          ds: { googleDriveFolderId: 'folderIdForDS' }
        },
        background: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80'
      },
      {
        code: 'M125',
        name: 'Chimie Générale',
        details: {
          cours: { googleDriveFolderId: 'folderIdForCours' },
          td: { googleDriveFolderId: 'folderIdForTD' },
          ds: { googleDriveFolderId: 'folderIdForDS' }
        },
        background: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80'
      },
      {
        code: 'M126',
        name: 'Culture digitale',
        details: {
          cours: { googleDriveFolderId: 'folderIdForCours' },
          td: { googleDriveFolderId: 'folderIdForTD' },
          ds: { googleDriveFolderId: 'folderIdForDS' }
        },
        background: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80'
      },
      {
        code: 'M127',
        name: 'Langues Étrangères 2',
        details: {
          cours: { googleDriveFolderId: 'folderIdForCours' },
          td: { googleDriveFolderId: 'folderIdForTD' },
          ds: { googleDriveFolderId: 'folderIdForDS' }
        },
        background: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80'
      }
    ]
  },
  AP2: {
    S3: [
      {
        code: 'M231',
        name: 'Analyse 3',
        details: {
          cours: {
            googleDriveFolderId: '1-T2Z1bF8G27-HONiNPkOxal8tPFGm7-e'  // ID Google Drive pour les cours
          },
          td: {
            googleDriveFolderId: '1DdCDKpAmHpTxO5jEMh753-05eaWyHqdw'
          },
          ds: {
            googleDriveFolderId: '1orVWvsX4j8LQXgBb38qB7Sa5YxKxIbHS'
          },
          extra:{
            googleDriveFolderId: '1ftK-DuyxxIT1d9UiS4ZULS-g1MjOn-Nu' 
          }
        },
        background: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80'
      },
      {
        code: 'M232',
        name: 'Algèbre 3',
        details: {
          cours: { googleDriveFolderId: 'folderIdForCours' },
          td: { googleDriveFolderId: 'folderIdForTD' },
          ds: { googleDriveFolderId: 'folderIdForDS' }
        },
        background: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80'
      },
      {
        code: 'M233',
        name: 'Électronique Analogique',
        details: {
          cours: { googleDriveFolderId: 'folderIdForCours' },
          td: { googleDriveFolderId: 'folderIdForTD' },
          ds: { googleDriveFolderId: 'folderIdForDS' }
        },
        background: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80'
      },
      {
        code: 'M234',
        name: 'Mécanique 2',
        details: {
          cours: { googleDriveFolderId: 'folderIdForCours' },
          td: { googleDriveFolderId: 'folderIdForTD' },
          ds: { googleDriveFolderId: 'folderIdForDS' }
        },
        background: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80'
      },
      {
        code: 'M235',
        name: 'Électronique Numérique et Architecture',
        details: {
          cours: { googleDriveFolderId: 'folderIdForCours' },
          td: { googleDriveFolderId: 'folderIdForTD' },
          ds: { googleDriveFolderId: 'folderIdForDS' }
        },
        background: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80'
      },
      {
        code: 'M236',
        name: 'Culture and art skills',
        details: {
          cours: { googleDriveFolderId: 'folderIdForCours' },
          td: { googleDriveFolderId: 'folderIdForTD' },
          ds: { googleDriveFolderId: 'folderIdForDS' }
        },
        background: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80'
      },
      {
        code: 'M237',
        name: 'Langues Étrangères 3',
        details: {
          cours: { googleDriveFolderId: 'folderIdForCours' },
          td: { googleDriveFolderId: 'folderIdForTD' },
          ds: { googleDriveFolderId: 'folderIdForDS' }
        },
        background: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80'
      }
    ],
    S4: [
      {
        code: 'M241',
        name: 'Analyse 4',
        details: {
          cours: {
            googleDriveFolderId: '1-T2Z1bF8G27-HONiNPkOxal8tPFGm7-e'  // ID Google Drive pour les cours
          },
          td: {
            googleDriveFolderId: '1DdCDKpAmHpTxO5jEMh753-05eaWyHqdw'
          },
          ds: {
            googleDriveFolderId: '1orVWvsX4j8LQXgBb38qB7Sa5YxKxIbHS'
          },
          extra:{
            googleDriveFolderId: '1ftK-DuyxxIT1d9UiS4ZULS-g1MjOn-Nu' 
          }
        },
        background: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80'
      },
      {
        code: 'M242',
        name: 'Probabilités',
        details: {
          cours: { googleDriveFolderId: 'folderIdForCours' },
          td: { googleDriveFolderId: 'folderIdForTD' },
          ds: { googleDriveFolderId: 'folderIdForDS' }
        },
        background: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80'
      },
      {
        code: 'M243',
        name: 'Physique 3',
        details: {
          cours: { googleDriveFolderId: 'folderIdForCours' },
          td: { googleDriveFolderId: 'folderIdForTD' },
          ds: { googleDriveFolderId: 'folderIdForDS' }
        },
        background: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
      },
      {
        code: 'M244',
        name: 'Thermodynamique et Statique des Fluides',
        details: {
          cours: { googleDriveFolderId: 'folderIdForCours' },
          td: { googleDriveFolderId: 'folderIdForTD' },
          ds: { googleDriveFolderId: 'folderIdForDS' }
        },
        background: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
      },
      {
        code: 'M245',
        name: 'Sciences et techniques de l\'Ingénieur',
        details: {
          cours: { googleDriveFolderId: 'folderIdForCours' },
          td: { googleDriveFolderId: 'folderIdForTD' },
          ds: { googleDriveFolderId: 'folderIdForDS' }
        },
        background: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80'
      },
      {
        code: 'M246',
        name: 'Développement personnel',
        details: {
          cours: { googleDriveFolderId: 'folderIdForCours' },
          td: { googleDriveFolderId: 'folderIdForTD' },
          ds: { googleDriveFolderId: 'folderIdForDS' }
        },
        background: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80'
      },
      {
        code: 'M247',
        name: 'Langues Étrangères 4',
        details: {
          cours: { googleDriveFolderId: 'folderIdForCours' },
          td: { googleDriveFolderId: 'folderIdForTD' },
          ds: { googleDriveFolderId: 'folderIdForDS' }
        },
        background: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80'
      }
    ]
  }
};


