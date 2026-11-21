export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "Comment puis-je m'inscrire à une formation ?",
    answer: "Vous pouvez vous pré-inscrire en ligne via notre page 'Admissions' ou vous présenter directement à notre établissement avec les documents requis (acte de naissance, photos, certificat de scolarité, etc.)."
  },
  {
    question: "Vos diplômes sont-ils reconnus par l'État ?",
    answer: "Oui, tous nos diplômes et certificats professionnels sont agréés et reconnus par l'État algérien, ce qui vous permet de les utiliser pour l'emploi ou des démarches administratives."
  },
  {
    question: "Quels sont les horaires des cours ?",
    answer: "Nous proposons des horaires flexibles (cours du jour, du soir et le week-end) pour s'adapter aux étudiants et aux travailleurs. Le planning exact dépend de la formation choisie."
  },
  {
    question: "Proposez-vous des facilités de paiement ?",
    answer: "Oui, nous offrons la possibilité de payer les frais de formation par tranches. N'hésitez pas à nous contacter pour plus de détails sur les modalités de paiement."
  },
  {
    question: "Y a-t-il des prérequis pour s'inscrire ?",
    answer: "Cela dépend de la formation choisie. Certaines formations exigent un niveau scolaire minimum (ex: 3AS pour la comptabilité), tandis que d'autres sont ouvertes à tous sans prérequis (ex: pâtisserie)."
  }
];
