// Citations

let dernier = 0;
let nombreAléatoire = 0;

let citationsLittérature = [
  ["\"L'art de jouir est pour elle celui des privations\", Rousseau, La Nouvelle Héloïse."],
  ["\"Prévenir toujours ses besoins n'est pas l'art de les satisfaire, mais de les éteindre\", Rousseau, La Nouvelle Héloïse."],
  ["\"La multitude de livres qui traitent de l'homme et de ses sentiments m'ont rendu habile sans expérience.\", Chateaubriand, René."],
  ["\"L'imagination est riche, abondante et merveilleuse. L'existence pauvre, sèche et désenchantée. On habite avec un coeur plein un monde vie, et sans avoir usé de rien on est désabusés de tout.\", Chateaubriand, Le Génie du Christianisme"],
  ["\"Il y a au fond de l'âme humaine un besoin imprescriptible d'échapper aux tristes réalités de ce monde...\", Eugène Genoude, préface des Méditations Poétiques de Lamartine"]
];

let citationsPhilo = [
  ["\"Il y a des choses qui dépendent de nous et d'autres qui ne dépendent pas de nous \", Epictète."],
  ["\"Je sais que je ne sais rien \", Socrate dans l'Apologie de Socrate de Platon."],
  ["\"L'existence précède l'essence\", Jean-Paul Sartre, L'existentialisme est un humanisme."]
];

let citationLittéraire = document.querySelector("#CitationLittéraire");
let boutonLittéraire = document.querySelector("#BoutonLittéraire");
let citationPhilo = document.querySelector("#CitationPhilo");
let boutonPhilo = document.querySelector("#BoutonPhilo");

function générerNombreEntier(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

boutonLittéraire.addEventListener("click", () => {
  do {
    nombreAléatoire = générerNombreEntier(citationsLittérature.length);
  } while (nombreAléatoire == dernier)
  citationLittéraire.textContent = citationsLittérature[nombreAléatoire];
  dernier = nombreAléatoire;
});

boutonPhilo.addEventListener("click", () => {
  do {
    nombreAléatoire = générerNombreEntier(citationsPhilo.length);
  } while (nombreAléatoire == dernier);
  citationPhilo.textContent = citationsPhilo[nombreAléatoire];
  dernier = nombreAléatoire;
});