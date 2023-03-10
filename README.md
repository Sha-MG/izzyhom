# Exercice FrontEnd Izzyhom
Réalisé par Morgane Gamory

----------------------------

## Pour installer et lancer le projet :

Une fois le projet Unzip ouvrez une console :

```sh
cd izzyhom_gamory_morgane

# installe les dépendances du projet 
yarn 
# ou
npm install

# lance le serveur de developpement
yarn start 
# ou
npm run start

# Rendez-vous sur http://localhost:8080/
```

Vous devriez voir apparaitre la page du projet.

---

## Le projet :

Tout est réalisé en React, chaque partie de la page est donc découpée en composants présents dans ```/src/components```

- App regroupe tous les autres composants avant de les exporter pour les rendre sur le DOM.
- Header & Footer sont des composants statiques utiles uniquement graphiquement.
- SearchBar est le composant qui contient tous les champs de formulaire et les boutons de soumissions.
- ResultHouses est le composant qui affiche les résultats et il contient lui-même le composant House qui correspond à l'affichage d'une maison.

Le projet utilise des .Scss (ou Sass), et donc dans chaque dossier composant en plus de trouver un index.js correspondant au code React, il y a un styles.scss qui énumère les styles appliqués sur ce composant précis. 
Toutes les variables utilisées dans le code scss sont listées dans ``` src/styles/_vars.scss```

Les icones proviennent toutes du site https://fontawesome.com/
### Les filtres : 

J'ai fait le choix de  proposer 3 filtres fonctionnels afin de me concentrer sur la présentation du code et du rendu. 

- Le titre, un input qui filtre tous les titres d'annonce qui incluent ce qui est inscris.
- La ville, un input qui filtre soit via un code postal soit un nom de ville, les deux peuvent être partiels ou complet et le filtre renvois les résultats incluant ce qui est inscris.
- Le loyer, un range-picker qui permet de selectionner le montant maximal que l'on souhaite dépenser par mois.
