# Petshop 




### Front-end

##### Choix techniques

1. npm: gestionnaire de packet pour node et adaptable en tant que système de build
2. webpack: assemble les différents modules de l'application et les aggrège ensemble dans un fichier bundle. Webpack est souple et adaptable et s'interface très bien avec reactjs.
3. react: librairie de rendu front-end. React s'occupe d'afficher le contenu de l'application en compilant un DOM virtuel vers le DOM réel. React encourage l'immutabilité, la composition et la gestion de l'état applicatif de manière plus souple et intelligente.
4. lessjs: précompilateur css. Less permet de rendre l'écriture du css moins lourde en offrant des outils proches de ceux d'un langage de programmation.
5. fetchjs: librarie similaire à ajax mais dont l'API est plus simple d'utilisation.


##### Améliorations possibles

1. Reduxjs: librarie se complémentant très bien avec React et permettant de gérer l'état global de l'application et le distribuer entre les principaux composants constiuant l'application. Redux simplifie la gestion de l'état applicatif qui est inpraticable dans une application React seule.
2. Mise en place de tests front-end.




### Back-end

##### Choix techniques

1. Play framework: framework web avec un fort partie pris stateless et facilitant le traitement de requêtes asynchrones. Play est en outre très comode lorsqu'il s'agit de mettre en place une API reste.Enfin, il fournit egalement tout un catalogue de bibliothèques cohérentes et un ensemble de plugins permettant d'accroître ses capacités comme les filtres.
2. JPA: librarie incluse dans play (version java) permettant de s'interfacer avec des bases de données. Simple d'utilisation, JPA fournit en outre un ORM pour gérer les différentes requêtes.
3. Jackson: librarie de sérialisation JSON.
4. JUnit: librarie de tests unitaires.
5. Sbt: outil de build par défaut utilisable avec play. Sbt possède de nombreux plugins et permet d'unifier simplement tout le workflow de l'application.


##### Améliorations possibles

1. Utiliser scala. Scala est un langage de programmation fonctionnelle et orienté objet. Il possède un système de type très puissant et sa syntaxe est beaucoup plus concise. Il favorise également l'immutabilité et la composition, rendant les applications plus lisibles et décomposables en entités fonctionnelles simples réutilisables. Egalement, scala fournit un ensemble d'outils pour la programmation asynchrone (cf. futures, acteurs...).

