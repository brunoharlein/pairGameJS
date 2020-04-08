# Jeux des paires

Le but du jeux est très simple. Au départ toutes les cartes sont cachées, en cliquant sur une carte une couleur apparaît, il faut alors retrouver l'autre carte avec la même couleur. Si l'on se trompe, les deux cartes sont à nouveau masquées.

Les compétences à développer par les étudiants sont :
- penser un programme selon des cas d'usage
- maîtriser l'algorithmie
- mettre en place un nommage pertinent
- organiser son code en fonctions
- utiliser les arguments des fonctions
- organiser son code de manière cohérente
- manipuler le DOM
- utiliser les événements côté client
- gérer le temps de jeux

Dans sa version simple, le jeux gère simplement le clique utilisateur sur les cartes et affiche un message de victoire quand le joueur a terminé.

Dans sa version avancée, le jeux gère les actions malveillantes de l'utilisateur (double clique sur une même carte, clique avant que les cartes précédentes ne soient retournées...). Le départ du jeu est également controllé par un bouton qui active un timer. Le joueur a donc une limite de temps impartie.

# Consignes

Affichez 14 cartes face cachée sur l'écran, quand le joueur clique sur une carte celle-ci se retourne, quand il clique sur une deuxième carte si elle est identique à la précédente les deux cartes restent face visible autrement les cartes sont à nouveau masquées.

L'objectif est de trouver toutes les paires et que les cartes soient toutes face visible.

Bonus :
- générer les cartes de manière aléatoire à l’écran
- rajouter un timer et/ou compteur d'essais à l'application
- s'assurer que l'utilisateur ne puisse pas faire bugger le déroulement du script.
