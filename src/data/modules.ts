export type MaterialType = 'cours' | 'td' | 'ds' | 'extra';

export interface ModuleDetail {
  googleDriveFolderId: string;
  // Autres propriétés que vous pourriez avoir dans ModuleDetail
}

export interface Module {
  code: string;
  name: string;
  details: {
    [key in MaterialType]?: ModuleDetail;
  };
  background?: string;  // Par exemple, une image de fond pour un module
}

export type FileType = {
  id: string;
  name: string;
  mimeType: string;
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
          ds: { googleDriveFolderId: '1aOR_OKxjfk690QsEI34cl2CtYKWeY4lM' },
          extra:{googleDriveFolderId:"1_dlOFzncGYRJucWA-JmgxZE73XhOgtYe"}
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
          ds: { googleDriveFolderId: '1Nu7fd5Yhr8BmTzA3X1J_o3hKWoaNpy4t' },
          extra:{googleDriveFolderId:'1Rto7n2wcyKzyCmmaAyT71sE5S2UCEGTI'}
        },
        background: 'https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?auto=format&fit=crop&q=80'
      },
      {
        code: 'M115',
        name: 'Informatique 1',
        details: {
          cours: { googleDriveFolderId: '1qVA50LqDO05E9BMZg93FuL3bGLwsAo9D' },
          td: { googleDriveFolderId: '19lCkH3Z7PaXiJk5xulYT4AacA3eZZcwS' },
          ds: { googleDriveFolderId: '1bChNC9m_XKOagXdah8TMinydwZDTDnFO' }
        },
        background: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80'
      },
      {
        code: 'M116',
        name: 'Méthodologie de travail universitaire',
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
        background: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80'
      },
      {
        code: 'M117',
        name: 'Langues Étrangères 1',
        details: {
          cours: {
            googleDriveFolderId: '1f6ryH2vv6qshbIi0FqJAfZRn5HB6HbAV'  // ID Google Drive pour les cours
          },
          td: {
            googleDriveFolderId: ''
          },
          ds: {
            googleDriveFolderId: ''
          },
          extra:{
            googleDriveFolderId: '' 
          }
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
            googleDriveFolderId: '1Lby5xNRD5wtl0RPppT-dKoqnOVr613Uu'  // ID Google Drive pour les cours
          },
          td: {
            googleDriveFolderId: '1yFAxWggwmssDBeIwvOjwO_JwajzgQ923'
          },
          ds: {
            googleDriveFolderId: '1RHSJL5f6-ioOkpXvTfMjo57XssvPGBLs'
          },
          extra:{
            googleDriveFolderId: '1nFURGLWORIAqN5Ov3qJ5ZDm9ngSvI8bu' 
          }
        },
        background: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80'
      },
      {
        code: 'M122',
        name: 'Algèbre 2',
        details: {
          cours: {
            googleDriveFolderId: '1LwfXmpw2N5mgdMGxXR3RfF7fWyH2ajM_'  // ID Google Drive pour les cours
          },
          td: {
            googleDriveFolderId: '1FW9BxqTkzxP8XmHEeIpSk7ReMWO03zDf'
          },
          ds: {
            googleDriveFolderId: '1vwJBpxWyj0Rg9DQvliVmD6ihkhdmxe4d'
          },
          extra:{
            googleDriveFolderId: '1hiF9BFCSrTzXlg4_h9i_XNsUYqY-TYdO' 
          }
        },
        background: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80'
      },
      {
        code: 'M123',
        name: 'Physique 2',
        details: {
          cours: {
            googleDriveFolderId: ''  // ID Google Drive pour les cours
          },
          td: {
            googleDriveFolderId: ''
          },
          ds: {
            googleDriveFolderId: ''
          },
          extra:{
            googleDriveFolderId: '' 
          }
        },
        background: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80'
      },
      {
        code: 'M124',
        name: 'Informatique 2',
        details: {
          cours: {
            googleDriveFolderId: ''  // ID Google Drive pour les cours
          },
          td: {
            googleDriveFolderId: ''
          },
          ds: {
            googleDriveFolderId: ''
          },
          extra:{
            googleDriveFolderId: '' 
          }
        },
        background: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80'
      },
      {
        code: 'M125',
        name: 'Chimie Générale',
        details: {
          cours: {
            googleDriveFolderId: ''  // ID Google Drive pour les cours
          },
          td: {
            googleDriveFolderId: ''
          },
          ds: {
            googleDriveFolderId: ''
          },
          extra:{
            googleDriveFolderId: '' 
          }
        },
        background: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80'
      },
      {
        code: 'M126',
        name: 'Culture digitale',
        details: {
          cours: {
            googleDriveFolderId: ''  // ID Google Drive pour les cours
          },
          td: {
            googleDriveFolderId: ''
          },
          ds: {
            googleDriveFolderId: ''
          },
          extra:{
            googleDriveFolderId: '' 
          }
        },
        background: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80'
      },
      {
        code: 'M127',
        name: 'Langues Étrangères 2',
        details: {
          cours: {
            googleDriveFolderId: ''  // ID Google Drive pour les cours
          },
          td: {
            googleDriveFolderId: ''
          },
          ds: {
            googleDriveFolderId: ''
          },
          extra:{
            googleDriveFolderId: '' 
          }
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
            googleDriveFolderId: '1DcutCNCVLB3f2rftkB3Jv1Ennt4gkoau'  // ID Google Drive pour les cours
          },
          td: {
            googleDriveFolderId: '1v7vNztQdw1rET_eNSg9sB0a8Xs2A_gDQ'
          },
          ds: {
            googleDriveFolderId: '1BkjIzKB4JCwdr_bWSjtWYAvjJWtcSqDU'
          },
          extra:{
            googleDriveFolderId: '1gnRiqVhSSY2Q4v5kOzyJAAMvDTEfl8-T' 
          }
        },
        background: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80'
      },
      {
        code: 'M232',
        name: 'Algèbre 3',
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
        code: 'M233',
        name: 'Électronique Analogique',
        details: {
          cours: {
            googleDriveFolderId: '1_ScbeJE40fOud4AQmkw_nPjaAmHJ8iI6'  // ID Google Drive pour les cours
          },
          td: {
            googleDriveFolderId: '1MbPuHRWAoImev2lXnSfUnw-U0sTLnLD-'
          },
          ds: {
            googleDriveFolderId: '1LOjVAd2dhvKCTVY_l-fRi-DSNOf6dx2_'
          },
          extra:{
            googleDriveFolderId: '1pXXFCG9BlVTIt0HqpUBTWhamc4gKZArI' 
          }
        },
        background: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80'
      },
      {
        code: 'M234',
        name: 'Mécanique 2',
        details: {
          cours: {
            googleDriveFolderId: '1htwHTN1KH1POCaGs3l5zRV284Rjb1XDB'  // ID Google Drive pour les cours
          },
          td: {
            googleDriveFolderId: '1jhDfaCdNp5kg2MFqZ3EKkZBq76OkfBYW'
          },
          ds: {
            googleDriveFolderId: '1zNUQ1tE64i_xBS4vFMrld4x8fCwb-X6T'
          },
          extra:{
            googleDriveFolderId: '1HFzyTxiXB6QHuk8IjpbiBTz5qC-Rcy3H' 
          }
        },
        background: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80'
      },
      {
        code: 'M235',
        name: 'Électronique Numérique et Architecture',
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
        background: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80'
      },
      {
        code: 'M236',
        name: 'Culture and art skills',
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
        background: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80'
      },
      {
        code: 'M237',
        name: 'Langues Étrangères 3',
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
        background: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80'
      }
    ],
    S4: [
      {
        code: 'M241',
        name: 'Analyse 4',
        details: {
          cours: {
            googleDriveFolderId: '1DHlCnub66hXosNMhozj1uQg1mapiksHs'  // ID Google Drive pour les cours
          },
          td: {
            googleDriveFolderId: '1P2R8xDyhjXK17ztmABltTJEWsU0_kqkp'
          },
          ds: {
            googleDriveFolderId: '14w_2zvx166jJ_qKQ_aH7QL8u1ZAGFOqR'
          },
          extra:{
            googleDriveFolderId: '1BMO8Vn43P5FdMXFbNcSzwHYehX0g4DnL' 
          }
        },
        background: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80'
      },
      {
        code: 'M242',
        name: 'Probabilités',
        details: {
          cours: {
            googleDriveFolderId: '1JUE1aP0Gi815wFBwaVhL11YOOltTNT30'  // ID Google Drive pour les cours
          },
          td: {
            googleDriveFolderId: '1kOd8UI42NGYK3QMdVMIsM12VafoVTypj'
          },
          ds: {
            googleDriveFolderId: '1RGbiW7g3pIqvYkfgLqNKu1ylNMrPFvvX'
          },
          extra:{
            googleDriveFolderId: '1V4Bn1eONZ7D4mz5eqwigPp9k9ZfWz3gZ' 
          }
        },
        background: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80'
      },
      
        {
          code: 'M243',
          name: 'Physique 3',
          details: {
            cours: {
              googleDriveFolderId: ''  // ID Google Drive pour les cours
            },
            td: {
              googleDriveFolderId: ''
            },
            ds: {
              googleDriveFolderId: ''
            },
            extra: {
              googleDriveFolderId: '' 
            }
          },
          background: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
          subModules: [
            {
              code: 'M243A',
              name: 'Physique 3 - Optique',
              details: {
                cours: {
                  googleDriveFolderId: '18E4LpjpQWXSxyV6B7MZx2Xr1efzbJTne'
                },
                td: {
                  googleDriveFolderId: ''
                }
              }
            },
            {
              code: 'M243B',
              name: 'Physique 3 - Eléctromagnetisme',
              details: {
                cours: {
                  googleDriveFolderId: '11BR5BEzN05g5SIKtPwVCMLbsPDZSqL1k'
                }
              }
            }
          ]
        },
      {
        code: 'M244',
        name: 'Thermodynamique et Statique des Fluides',
        details: {
          cours: {
            googleDriveFolderId: ''  // ID Google Drive pour les cours
          },
          td: {
            googleDriveFolderId: ''
          },
          ds: {
            googleDriveFolderId: ''
          },
          extra:{
            googleDriveFolderId: ''
          }
        },
        background: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
      },
      {
        code: 'M245',
        name: 'Sciences et techniques de l\'Ingénieur',
        details: {
          cours: {
            googleDriveFolderId: ''  // ID Google Drive pour les cours
          },
          td: {
            googleDriveFolderId: ''
          },
          ds: {
            googleDriveFolderId: ''
          },
          extra:{
            googleDriveFolderId: ''
          }
        },
        background: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80'
      },
      {
        code: 'M246',
        name: 'Développement personnel',
        details: {
          cours: {
            googleDriveFolderId: ''  // ID Google Drive pour les cours
          },
          td: {
            googleDriveFolderId: ''
          },
          ds: {
            googleDriveFolderId: ''
          },
          extra:{
            googleDriveFolderId: ''
          }
        },
        background: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80'
      },
      {
        code: 'M247',
        name: 'Langues Étrangères 4',
        details: {
          cours: {
            googleDriveFolderId: ''  // ID Google Drive pour les cours
          },
          td: {
            googleDriveFolderId: ''
          },
          ds: {
            googleDriveFolderId: ''
          },
          extra:{
            googleDriveFolderId: ''
          }
        },
        background: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80'
      }
    ]
  }
};

export const getSemesterData = (semesterId: string): Module[] => {
  switch (semesterId) {
    case 'S1':
      return moduleData.AP1.S1;
    case 'S2':
      return moduleData.AP1.S2;
    case 'S3':
      return moduleData.AP2.S3;
    case 'S4':
      return moduleData.AP2.S4;
    default:
      return [];
  }
};


