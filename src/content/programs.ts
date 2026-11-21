export type Category = 'academic' | 'professional' | 'languages' | 'it';

export interface Program {
  slug: string;
  category: Category;
  duration: string;
  icon: string; // we will use Lucide icons dynamically or map them
  objectives: string[];
  prerequisites: string[];
  certification: string;
}

export const programs: Program[] = [
  {
    slug: 'soutien-scolaire-bem-bac',
    category: 'academic',
    duration: '1 année scolaire',
    icon: 'graduation-cap',
    objectives: [
      'Préparation intensive aux examens du BEM et BAC',
      'Renforcement des bases dans les matières essentielles',
      'Méthodologie de révision et gestion du stress'
    ],
    prerequisites: ['Élève inscrit en 4AM ou 3AS'],
    certification: 'Attestation de suivi'
  },
  {
    slug: 'informatique-bureautique',
    category: 'it',
    duration: '3 mois',
    icon: 'monitor',
    objectives: [
      'Maîtrise des outils Microsoft Office (Word, Excel, PowerPoint)',
      'Initiation à l\'outil informatique et navigation internet',
      'Gestion électronique des documents'
    ],
    prerequisites: ['Aucun prérequis (Niveau débutant accepté)'],
    certification: 'Certificat de qualification professionnelle agréé par l\'état'
  },
  {
    slug: 'anglais-francais-communication',
    category: 'languages',
    duration: '6 mois',
    icon: 'languages',
    objectives: [
      'Amélioration de la fluidité à l\'oral et à l\'écrit',
      'Vocabulaire professionnel et technique',
      'Préparation aux entretiens d\'embauche'
    ],
    prerequisites: ['Test d\'évaluation de niveau initial'],
    certification: 'Attestation de niveau (A1-C1)'
  },
  {
    slug: 'comptabilite-et-gestion',
    category: 'professional',
    duration: '6 mois',
    icon: 'calculator',
    objectives: [
      'Tenue des livres comptables',
      'Maîtrise des logiciels de comptabilité (PC Compta)',
      'Établissement des bilans et déclarations fiscales'
    ],
    prerequisites: ['Niveau terminal (3AS) ou plus'],
    certification: 'Diplôme de Technicien (Agréé par l\'état)'
  },
  {
    slug: 'coiffure-et-esthetique',
    category: 'professional',
    duration: '12 mois',
    icon: 'scissors',
    objectives: [
      'Maîtrise des techniques de coupe et coloration',
      'Soins du visage et esthétique',
      'Gestion d\'un salon de beauté'
    ],
    prerequisites: ['Niveau moyen (4AM)'],
    certification: 'Certificat de Maîtrise Professionnelle (CMP)'
  },
  {
    slug: 'patisserie-traditionnelle-moderne',
    category: 'professional',
    duration: '6 mois',
    icon: 'chef-hat',
    objectives: [
      'Techniques de base de la pâtisserie',
      'Confection de gâteaux traditionnels algériens',
      'Pâtisserie française et moderne'
    ],
    prerequisites: ['Aucun prérequis'],
    certification: 'Attestation de Qualification Professionnelle'
  }
];
