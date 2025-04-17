/**
 * @author Ewan Pfister
 * @since 2025.04.02
 */

'use strict';

const personnes = [
    {
        nom: 'Doe',
        prenom: 'John',
        age: 25,
        localite: 'New York',
    },
    {
        nom: 'Doe',
        prenom: 'Jane',
        age: 30,
        localite: 'Los Angeles',
    },
    {
        nom: 'Doe',
        prenom: 'Jack',
        age: 28,
        localite: 'Chicago',
    },
    {
        nom: 'Doe',
        prenom: 'Jill',
        age: 35,
        localite: 'Miami',
    },
    {
        nom: 'Doe',
        prenom: 'Jim',
        age: 40,
        localite: 'San Francisco',
    }
];

// Récupération des éléments HTML
const champPrenom = document.getElementById('prenom');
const champNom = document.getElementById('nom');
const champAge = document.getElementById('age');
const champLocalite = document.getElementById('localite');
const formulaire = document.getElementById('form');
const personsTable = document.getElementById('table');
const champRechercher = document.getElementById('rechercher');

/**
 * Affiche les personnes du tableau JavaScipt `personnes`
 * dans le <tbody> du tableau HTML
 */
function afficherPersonnes() {
    let recherche = champRechercher.value.trim().toLocaleLowerCase();
    let personnesTrouvees = personnes.filter(person => person.prenom.toLocaleLowerCase().includes(recherche));
    let result = '';

    // Créer une ligne pour chaque personne
    for (let i = 0; i < personnesTrouvees.length; i++) {
        result += `
                <tr>
                    <td>${personnesTrouvees[i].nom}</td>
                    <td>${personnesTrouvees[i].prenom}</td>
                    <td>${personnesTrouvees[i].age}</td>
                    <td>${personnesTrouvees[i].localite}</td>
                </tr>
            `;
    }

    // Ajouter les lignes au tableau HTML
    personsTable.innerHTML = result;
}

/**
 * Fonction qui
 *   * valide la saisie utilisateur
 *   * ajoute une personne au tableau JavaScript `personnes`
 *   * ré-affiche le tableau en appelant la fonction `affichePersonnes()`
 * @param event - objet événement qui a appelé la fonction
 */
function ajouterNouvellePersonne (event) {
    event.preventDefault(); // Stoppe l'envoi du formulaire

    // Récupération et nettoyage des valeurs saisies par l'utilsateur dans le formulaire
    let prenom = champPrenom.value.trim(); // trim() Supprime les espaces en début et fin de chaîne de caractères
    let nom = champNom.value.trim();
    let age = parseInt(champAge.value); // parseInt() Transforme la saisie en entier
    let localite = champLocalite.value.trim();

    // Tester si le formulaire et correctement rempli
    if(!prenom || !nom || !age || !localite) {
        alert('Merci de remplir tous les champs correctement !');
        return; // Sort de la fonction ajouterNouvellePersonne
    }

    // Ajoute une nouvelle personne à la fin du tableau
    personnes.push({
        prenom: prenom,
        nom: nom,
        age: age,
        localite: localite
    });
    afficherPersonnes();
}

// Gestion des événements
formulaire.addEventListener('submit', ajouterNouvellePersonne());
champRechercher.addEventListener('input', afficherPersonnes());

// Initialisation de l'application
afficherPersonnes();
