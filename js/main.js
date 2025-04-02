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

const personsTable = document.getElementById('table');

function afficherPersonnes() {
    let result = '';

    for (let i = 0; i < personnes.length; i++) {
        result += `
                <tr>
                    <td>${personnes[i].nom}</td>
                    <td>${personnes[i].prenom}</td>
                    <td>${personnes[i].age}</td>
                    <td>${personnes[i].localite}</td>
                </tr>
            `;
    }
    personsTable.innerHTML = result;
}

afficherPersonnes();
