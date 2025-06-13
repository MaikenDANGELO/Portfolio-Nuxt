<template>
  <div class="flex flex-col gap-5 m-10">
    <h2 class="text-center">Stage chez Gen'IAtest</h2>

    <Card class="w-full">
      <template #content>
        <div class="flex flex-row gap-10">
          <div class="flex flex-col gap-2 w-[50vw]">
            <span><strong>Date : </strong> du 7 avril 2025 au 28 juin 2025 (12
              semaines)</span>
            <span><strong>Cadre : </strong>formation de BUT Informatique, deuxième
              année, à l'IUT Nord Franche Comté</span>
            <span><strong>Description : </strong><br />Réalisation d'un
              développement de solutions informatique, selon les besoins décrits
              des utilisateurs.<br />
              Une application web fullstack englobant protocoles
              d'authentification et d'autorisation adaptés à la base
              utilisateur, communiquant avec la base de données mise en place.
              <br />
              L'application permet l'affichage de référentiel de données, la
              gestion des droits des utilisateurs, et la saisie d'éléments de
              facturation, tout en restant modulable et robuste pour des
              évolutions futures.</span>
          </div>
          <div class="flex flex-col gap-2">
            <span><strong>Tuteur :</strong> Nicolas THIBERT, responsable DSI chez
              Gen'IAtest</span>
            <span><strong>Responsable :</strong> Ingrid COUTURIER, professeure
              d'anglais à l'IUT</span>
            <span><strong>Technologies utilisées :</strong></span>
            <div class="grid grid-cols-4 gap-5">
              <Image v-tooltip.left="'Typescript'" width="32" :src="`${baseURL}icons/typescript.svg`" />
              <Image v-tooltip.left="'NuxtJS'" width="32" :src="`${baseURL}favicon.ico`" />
              <Image v-tooltip.left="'VueJS'" width="32" :src="`${baseURL}icons/vuejs.svg`" />
              <Image v-tooltip.left="'Nodejs'" width="32" :src="`${baseURL}icons/nodejs.svg`" />
              <Image v-tooltip.left="'Nestjs'" width="32" :src="`${baseURL}icons/nestjs.svg`" />
              <Image v-tooltip.left="'PostgreSQL avec TypeORM'" width="32" :src="`${baseURL}icons/pgsql.svg`" />
              <Image v-tooltip.left="'TailwindCSS'" width="32" :src="`${baseURL}icons/tailwind.svg`" />
            </div>
          </div>
        </div>
      </template>
    </Card>
    <div class="flex flex-col m-5 gap-5 text-justify">
      <div class="flex flex-col gap-1">
        <div class="flex flex-col gap-2">
          <h2>Introduction</h2>
          <h3>L'organisation d'accueil : Gen'IAtest</h3>
        </div>
        <div class="grid grid-cols-2 gap-5">
          <div class="flex flex-col gap-2">
            <p>
              Gen'IAtest est une coopérative agricole basée à Roulans dans le
              Doubs (25), dont l'activité principale est l'insémination animale.
              <br /><br />
              Mais ce n'est pas sa seule activité, Gen'IAtest propose de
              nombreux services :
              <br />- Un service génétique (pointage, indexation génomique...)
              <br />- Un service reproduction (insémination animale,
              transplatation embryonnaires...) <br />- Un service conseil
              élevage (conseils, contrôles de performance) <br />- Un service
              parage bovin (soins des pieds des bovins) <br />- Un service
              reproducteurs (vente d'animaux) <br />- Un service monitoring
              (installation et vente d'appareils de surveillance des chaleurs et
              vêlages)
              <br />
              <br />- Et un service informatique, ou DSI, chez lequel j'ai
              réalisé mon stage.<br /><br />

              Gen'IAtest c'est une multitude de métiers au service des éleveurs
              et de leurs élevages, il est donc important de savoir qui compose
              l'organisation, ce qu'ils font, pourquoi et comment, afin
              d'adapter l'outil développé au mieux possible. <br /><span>Pour plus d'information sur Gen'IAtest, vous
                pouvez vous
                référer à leur site :
                <a target="_blank" href="https://www.geniatest.com/">geniatest.com</a></span>
              <br /><br />
            </p>
            <Image :src="`${baseURL}portfolio_geniatest/organigramme.jpg`" />
            <span>(Figure 2) Organigramme de Gen'IAtest présentant la hiérarchie
              des différents services</span>
          </div>
          <div class="flex flex-col gap-2">
            <Image width="512" :src="`${baseURL}portfolio_geniatest/carte_activite.jpg`" />
            <span class="w-[512px]">(Figure 1) Zone d'activité de Gen'IAtest, divisée par secteur,
              englobant les départements du Doubs, du Jura, de la Haute-Marne,
              de la Haute-Saône et du Territoire de Belfort ainsi que la Côte
              d'Or, le Haut-Rhin et les Vosges. <br />
              Source :
              <a target="_blank" href="https://www.geniatest.com/">geniatest.com</a></span>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-1">
        <div class="flex flex-col gap-2">
          <h3>Le stage</h3>
        </div>
        <div class="flex flex-col gap-2">
          <p>
            Durant ce stage, j'étais donc rattachée à la DSI de Gen'IAtest, qui
            est un tout jeune service créé en 2021. Comptant tout juste 3
            personnes en me comptant, ses capacités sont très limitées et ses
            principales missions sont notamment la maitenance du parc
            informatique de l'organisation, ainsi que le développement de
            solutions légères pour les utilisateurs.<br /><br />

            Au vu des capacités limitées du DSI, et de certains besoins pressant
            de certains utilisateurs, il était dans l'intérêt de Gen'IAtest de
            prendre une stagiaire en informatique afin de démarrer un projet de
            développement d'application pouvant répondre à ces besoins à coûts
            réduits. <br /><br />

            Mais alors quels besoins ?<br /><br />

            <span class="ml-2">- Premièrement, la saisie d'éléments de facturation de certains
              services voire certains métiers était non automatisée, par
              forcément uniforme, et prone à l'erreur. Certaines informations
              saisies nécessitaient de multiples vérifications en utilisant des
              fichiers Excel ou des notes.<br />
              Alors afin de faciliter cela, l'idée première était d'implémenter
              des écrans de référentiel, rendant accessible et lisible les
              données présentes dans la base de données de l'entreprise (appelée
              Base Activité), afin de faciliter les vérifications et la
              recherche d'information. Ensuite vient l'écran de saisie
              d'éléments de facturation, avec vérification automatique des
              informations, gestion des saisies, de leurs étapes, de leur dépôt
              sur le serveur de traitement par FTP, et des rejets éventuels.
              Aussi pour faciliter d'autant plus la chaîne de facturation de ces
              services, une version mobile pour les techniciens sur le terrain
              (inséminateur, marqueur, pointeur, pédicure...) est
              préconisée.</span>
            <br /><br />

            <span class="ml-2">- Deuxièmement, spécifiquement pour le service parage. Il faut
              revoir entièrement la chaîne de saisie de rendez-vous, car
              actuellement elle est réalisée à l'aide de 2 fichiers Excels, et
              du calendrier Outlook, triplant les saisies et donc les risques
              d'erreurs. Cette méthode chronophage et non pratique représente la
              majorité du temps de travail de la personne en charge de la
              gestion des rendez-vous, en plus de rendre cette activité
              difficile à déléguer en raison de sa complexité.</span><br /><br />

            Ces besoins étaient définies de manière assez vague au départ. C'est
            à dire qu'on savait qu'ils existaient, sans en savoir les détails.
            J'ai pu obtenir ces précisions à l'aide différentes réunions de
            recueil des besoins avec mes différents collègues concernés. Ces
            réunions furent une partie importante de l'organisation de mon
            stage.
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-1">
        <div class="flex flex-col gap-2">
          <h2>Déroulé du stage</h2>
          <h3>Organisation</h3>
        </div>
        <div class="flex flex-col gap-2">
          <p>
            Ce stage a été organisé de manière assez fluide et libre pour moi.
            C'est à dire que j'avais bien entendu des livrables à rendre à
            certains moments, mais j'étais bien la personne en charge dudit
            développement. C'était un choix de la part du DSI de me laisser
            libre de proposer, de réaliser le développement comme je le voulais,
            bien sûr avec quelques contraintes : <br />
            <br />- Maintenir une documentation à jour <br />- Le backend doit
            exposer une API REST, avec sa documentation Swagger <br />-
            Maintenir à jour un modèle de données <br />- Mettre en place une
            méthodologie GitFlow <br />- Mettre en place des tests unitaires
            <br />- Utiliser le langage Typescript <br />- Veiller à ce que les
            bibliothèques tierces utilisées soient maintenues <br />-
            Développement en "baseFirst", utilisant la Base Activité existante
            <br />- Veiller à respecter les nomenclatures et conventions de
            nommage adéquates <br />- Ne pas modifier les tables existantes et
            s'appuyer sur un nouveau schéma en base de données. <br /><br />

            Ces éléments ont été condensé dans un document Microsoft Loop, que
            j'ai utilisé comme référence au cours de mon développement.
            <Image width="1024" :src="`${baseURL}portfolio_geniatest/contraintes_consignes.png`" />
            <span class="text-md w-[1024px]">(Figure 3) - Capture d'écran d'une partie du document Microsoft
              Loop détaillant les contraintes et consignes à suivre lors du
              stage, rédigé par mes collègues du DSI.</span>
            <br /><br />

            D'autre part, le stage lui était divisé en 5 grandes parties :<br />
            <br />- Le choix des technologies à utiliser <br />- La mise en
            place d'un système d'authentification et d'autorisation adapté à
            l'application <br />- Créer les écrans de référentiel, pour se faire
            la main sur la manipulation de données de la Base Activité <br />-
            Développer les écrans de saisie de facturation desktop et mobile
            <br />- Travailler sur la refonte de la gestion des rendez-vous du
            service parage.<br /><br />

            Ces éléments ont aussi été décrit dans un document Microsoft Lists
            cette fois-ci, que j'ai utilisé comme référence au début de mon
            stage afin d'avoir une idée du rythme de travail et de
            l'organisation mise en place.
            <Image width="1024" :src="`${baseURL}portfolio_geniatest/calendrier_organisation_stage.png`" />
            <span class="text-md w-[1024px]">(Figure 4) - Capture d'écran d'une partie du document Microsoft
              Lists détaillant les étapes du stage avec une estimation des dates
              de réalisation, rédigé par mon tuteur.</span>
            <br /><br />

            Les deux premières parties étant les plus importantes, étant donné
            qu'elles posent les bases techniques sur lesquelles l'application
            future toute entière reposera. Ces parties existent car, comme
            sous-entendu, le projet part d'absolument zéro, et il est crucial de
            fournir une base robuste et scalable à l'application afin de pouvoir
            la faire évoluer, même après la fin de mon stage, d'où la nécessité
            de documentation.<br /><br />

            Quant à l'organisation du développement lui-même, il a été convenu,
            étant donné que je n'avais pas la possibilité de travailler dans le
            même bureau que mes deux collègues du DSI, de faire un point
            quotidien tous ensemble afin de voir ce qui a été fait, ce qu'il
            faudrait corriger et discuter de la suite. <br />
            En plus de cela, je suis resté en contact proche avec mes collègues
            pour leur demander de l'aide ou des conseils, ou bien encore pour
            les notifier de mes avancées ou difficutlés en leur envoyant un
            message via Microsoft Teams, ou encore en allant toquer à leur porte
            directement.<br /><br />

            Dernièrement, partie spécifique aux parties saisie d'éléments de
            facturation et service parage, il a été organisé des réunions avec
            les collègues concernés afin de recueillir leurs besoins et de
            discuter de pistes à explorer. Ce fut une étape très importante du
            développement, car ces réunions ont permis de faire ressortir les
            besoins communs aux services, et d'explorer une solution éventuelle
            à ceux-ci. En utilisant ces besoins, il est donc possible de
            commencer le développement des fonctionnalités demandées, tout en
            suivant une méthodologie agile et aller présenter les différents
            livrables aux utilisateurs et recueillir leurs retours.
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-1">
        <div class="flex flex-col gap-2">
          <h2>Réalisation</h2>
          <h3>Choix techniques</h3>
        </div>
        <div class="flex flex-col gap-2">
          <p>
            Les choix techniques du projet se sont fait selon plusieurs critères
            liées à l'application :
            <br />
            - Modularité <br />
            - Maintenabilité <br />
            - Robustesse <br />
            - Documenté <br />
            - Adapté <br /><br />
          </p>
        </div>
        <p>Frontend :</p>
        <div class="flex flex-row gap-5">
          <Image v-tooltip.left="'VueJS'" width="128" :src="`${baseURL}icons/vuejs.svg`" />
          <p>
            Le premier choix technique fait a été Vuejs comme framework de
            développement web, selon ma proposition lors de mon entretien
            d'embauche. Au vu de mon expérience avec le framework grâce aux
            projets universitaires réalisés lors de ma formation, il était tout
            a fait préférable de choisir Vuejs. Sa simplicité, sa modularité et
            sa maintenabilité en font un atout de choix. De plus son mode de
            rendu SPA convient totalement à une utilisation intra-entreprise, du
            fait du nombre restreint d'utilisateurs.
          </p>
        </div>
        <br />
        <div class="flex flex-row gap-[25px]">
          <Image v-tooltip.left="'VueJS'" width="64" :src="`${baseURL}favicon.ico`" />
          <p>
            Au delà de ça, il a été proposé par mes tuteurs d'utiliser le
            framework Nuxtjs par dessus Vuejs. Après avoir expérimenté avec
            cette technologie, j'en ai conclu que Nuxtjs était adapté à
            l'application du fait de sa structure, rendant l'application très
            maintenable et facile à développer, tout en étant robuste et
            modulable.
          </p>
        </div>
        <br />
        <div class="flex flex-row gap-[25px]">
          <i style="
              font-size: 32px;
              text-align: center;
              align-self: center;
              margin-right: 5px;
            " class="pi pi-prime" />
          <p>
            Comme bibliothèque de composant j'ai choisi Primevue pour sa
            documentation exhaustive, sa facilité d'utilisation, sa
            personnalisation, les nombreux cas d'usages pertinents aux besoins
            de l'application et son apparence moderne. Ces éléments en font une
            bibliothèque tout a fait adaptée à une application métier
            professionnelle.
          </p>
        </div>
        <br />
        <div class="flex flex-row gap-[25px]">
          <Image v-tooltip.left="'Tailwind'" width="64" :src="`${baseURL}icons/tailwind.svg`" />
          <p>
            Pour encore plus de personnalisation et pour avoir la main sur le
            style de l'application de manière simple et ergonomique, j'ai choisi
            d'utiliser Tailwindcss. Là aussi, sa documentation exhaustive et
            simplicité d'utilisation en font un premier choix. De plus, la
            bibliothèque Primevue utilise déjà Tailwindcss pour fonctionner,
            donc c'est une pierre deux coups.
          </p>
        </div>
        <br /><br />
        <p>Backend :</p>
        <div class="flex flex-row gap-5">
          <Image class="self-center" v-tooltip.left="'NestJS'" width="128" :src="`${baseURL}icons/nestjs.svg`" />
          <p>
            Pour le backend, mes collègues ont proposé Nestjs, du fait de sa
            base Typescript, de sa documentation exhaustive, et de sa
            modularité. Un de mes collègues m'a préparé un tutoriel sur Nestjs
            pour le début de mon stage, tutoriel que j'ai réalisé. Cette
            expérience m'a permis de comprendre la structure d'un projet Nestjs
            et son fonctionnement, et ainsi de me visualiser la suite du projet
            en utilisant cette technologie.<br />
            La structure de Nestjs se basant par module convient parfaitement au
            besoin de modularité de l'application et la rend maintenable de
            fait. Et sa base typescript rend Nestjs robuste et facilement
            testable. Un choix très supérieur à un projet Nodejs tout simple par
            exemple, même si Nestjs se base sur Nodejs.<br /><br />

            Vient ensuite tout ce qui viendra s'intégrer à cet ecosystème
            Nestjs, par exemple pour la partie authentification, on utilisera
            Passportjs, du fait de son efficacité prouvée, mon expérience passée
            avec lors de ma formation, et des différentes stratégies
            disponibles.<br />
            Et bien sûr, il faut un ORM pour la connexion à la base de données,
            et sur recommendation de mes collègues, j'ai choisi typeORM au lieu
            de Sequelize, tout simplement car typeORM est écrit en Typescript,
            se raccordant parfaitement au reste de l'application. De plus son
            utilisation via des fichiers .repository lui permet de s'intégrer
            pafaitement à la structure modulaire de Nestjs, tout en permettant
            une gestion simple de migrations.
          </p>
        </div>
        <div class="flex flex-row gap-[25px]">
          <Image
            v-tooltip.left="'PostgreSQL'"
            width="64"
            :src="`${baseURL}icons/pgsql.svg`"
          />
          <p>
            En parlant de base de données, là le choix était déjà fait et
            c'était non négociable. La Base Activité qu'utilise Gen'IAtest est
            une base PostgreSQL, il convient donc évidemment de l'utiliser pour
            manipuler les données et créer de nouvelles tables au besoin.
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-1">
        <div class="flex flex-col gap-2">
          <h3>Authentification</h3>
        </div>
        <div class="flex flex-col gap-2">
          <div class="flex flex-row gap-5">
            <div class="flex flex-col gap-2">
              <Image :src="`${baseURL}portfolio_geniatest/page_login.png`" />
              <span>(Figure 5) - Capture d'écran de la fenêtre d'authentification,
                démontrant les deux moyens d'authentification.</span>
            </div>
            <div class="flex flex-col gap-2">
              <Image width="768" :src="`${baseURL}portfolio_geniatest/authentification_schema.svg`" />
              <span>(Figure 6) - Schéma du processus d'authentification.</span>
            </div>
          </div>
          <div class="flex flex-row gap-5">
            <div class="flex flex-col gap-2">
              <Image :src="`${baseURL}portfolio_geniatest/structure_auth.png`" />
              <span>(Figure 7) - Capture d'écran de l'arborescence du module
                d'authentification dans le backend avec les deux
                stratégies.</span>
            </div>
            <p>
              L'authentification est une partie importante de l'application afin
              de restreindre son utilisation à des utilisateurs vérifiés
              provenant du sein de l'organisation. Il est important de savoir
              que Gen'IAtest fonctionne beaucoup avec des outils issus de
              Microsoft, et ont un annuaire Azure dédié avec tous leurs
              utilisateurs. Après discussion avec mon tuteur à ce sujet, j'ai
              décidé d'explorer la piste d'une connexion via Azure, la
              plateforme d'authenfication Microsoft, afin de pouvoir permettre
              aux utilisateurs d'utiliser leur compte Microsoft d'entreprise
              pour se connecter.<br /><br />

              Mon exploration m'a menée à la stratégie AzureAd de Passportjs,
              qui correspondait parfaitement à ce que je cherchais.
              <br /><br />Comment ça marche ? L'utilisateur va sur une page
              spécifique sur le serveur backend définie en paramètre de
              l'application, ce qui le redirige automatiquement sur la page
              d'authentification de Microsoft. Une fois connecté, Microsoft
              redirige automatiquement l'utilisateur vers l'application web, et
              appelle une route de redirection dans le backend afin de procéder
              à des traitements éventuels.<br />
              C'est ce qu'on peut voir sur la figure 6 par exemple.
              L'utilisateur appelle le serveur en allant sur une route
              spécifique, ce qui interroge la plateforme Azure. Microsoft
              renvoit une réponse, et des requête en base de données et des
              traitements sont effectués avant de renvoyer une réponse au client
              web sous forme de cookie contenant un token JWT.<br /><br />

              En parlant de token JWT, il s'agit de la deuxième stratégie
              d'authentification. En effet, si un utilisateur local, donc sans
              contrepartie Azure, existe, il devra utiliser l'authentification
              locale. Cette stratégie utilise les identifiants de connexion pour
              trouver l'utilisateur en base de données, compare les mots de
              passe, et renvoit un cookie contenant un token JWT
              d'authentification.<br /><br />

              En somme les deux stratégie fonctionne au final de la même façon,
              seule la source de l'utilisateur diffère. Et au final, à chaque
              fois qu'un nouvel utilisateur Azure se connecte, il est enregistré
              en base de données pour pouvoir gérer ses autorisations, et
              pouvoir effectuer des manipulations de données.<br /><br />

              De base, l'authentification Azure était censée requêter Microsoft
              à chaque requête avec un cookie spécifique pour authentifier
              l'utilisateur, mais cela ne fonctionnait pas. Alors j'ai décidé
              d'utiliser les informations utilisateurs renvoyées par Azure pour
              en faire un token JWT en utilisant la stratégie JWT de
              l'application.<br /><br />
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-1">
        <div class="flex flex-col gap-2">
          <h3>Autorisation</h3>
        </div>
        <div class="flex flex-col gap-5">
          <div class="flex flex-row gap-5">
            <div class="flex flex-col gap-2">
              <Image width="512" :src="`${baseURL}portfolio_geniatest/autorisation_model.png`" preview />
              <span>(Figure 8) - Modèle de données de la partie autorisation de
                l'application.</span>
            </div>
            <div class="flex flex-col gap-2">
              <Image :src="`${baseURL}portfolio_geniatest/gestion_utilisateur.png`" preview />
              <span>(Figure 9) - Écran de gestion des utilisateurs</span>
            </div>
          </div>
          <div class="flex flex-row gap-5">
            <p>
              Authentifier un utilisateur n'est que la première étape. Il faut
              savoir à quelle partie de l'application il a accès, et ce qu'il a
              le droit de faire. <br />
              Pour répondre à cette problématique, je me suis inspirée du
              système de rôle de Discord. C'est à dire qu'un utilisateur peut
              posséder un ou plusieurs rôles, et ces rôles ont des autorisations
              ou des droits. Et selon ces rôles, l'utilisateur a accès a des
              salons (parties de l'application) spécifiques.<br /><br />

              En imaginant qu'un module de l'application est un "salon", il
              suffirait d'assigner des rôles à ce module, et les utilisateurs
              ayant un de ces rôles auraient accès au dit module. Les droits
              contenus dans un rôle serviront eux donc à savoir si l'utilisateur
              a un droit d'écriture ou de lecture par exemple. Le modèle de
              données en figure 8 reflète ce méchanisme.<br /><br />

              Comme on peut le voir dans la figure 9, l'administrateur a accès à
              un écran de gestion des utilisateurs et des rôles. Il est donc
              possible de modifier dynamiquement les rôles des utilisateurs, et
              donc leur accès aux modules de l'application à tout moment. La
              modularité de ce système est primordial car de nouveaux
              utilisateurs peuvent être introduits ou d'autres retirés ou leurs
              missions changées. Et donc il faut pouvoir gérer leurs
              autorisations de manière simple et intuitive. <br /><br />
            </p>
            <div class="flex flex-col gap-2">
              <Image :src="`${baseURL}portfolio_geniatest/gestion_roles.png`" preview />
              <span>(Figure 10) - Écran de gestion des rôles</span>
              <Image :src="`${baseURL}portfolio_geniatest/gestion_modules.png`" preview />
              <span>(Figure 11) - Écran de gestion des modules</span>
            </div>
          </div>
          <div class="flex flex-row gap-5">
            <div class="flex flex-col gap-2">
              <Image width="512" :src="`${baseURL}portfolio_geniatest/autorisation_code.png`" preview />
              <span class="w-[512px]">(Figure 12) - Exemple de code montrant la structure du
                méchanisme d'autorisation sur une route</span>
            </div>
            <p>
              Cela se traduit dans le code par l'utilisation de décorateurs et
              de gardes d'autorisation. <br /><br />
              Après avoir défini la route, il faut protéger la route avec
              l'authentification, cela permet de récupérer les informations
              utilisateur qui sont primordiales pour que l'autorisation
              fonctionne. Viennent ensuite les décorateurs d'autorisation :
              <br />
              - @Droits() définit les droits nécessaires à l'accès de la route
              <br />
              - @Roles() définit les rôles nécessaires à l'accès de la route
              <br />
              - @Modules() définit quels modules utilisent cette route, et étant
              donné que les modules sont associés à un ensemble de rôles, ils
              sont effectivement un ensemble de rôle dynamique pour une
              route.<br /><br />

              La garde d'autorisation est le middleware récupérant les
              informations utilisateur depuis la stratégie d'authentification et
              la base de données, ainsi que les autorisations nécessaires à
              l'accès de la route et effectue les vérifications. La route ne
              peut pas être appelée sans son aval, et la garde est appelée à
              chauqe appel de route API l'utilisant.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-1">
        <div class="flex flex-col gap-2">
          <h3>Écrans de référentiel</h3>
        </div>
        <div class="flex flex-row gap-2">
          <div class="flex flex-col gap-2">
            <Image width="512" :src="`${baseURL}portfolio_geniatest/referentiel_prestations.png`" preview />
            <span class="w-[512px]">(Figure 13) - Capture d'écran de l'écran de référentiel des
              prestations</span>
          </div>
          <p>
            Les écrans de référentiels requêtent des données à la Base Activité,
            et les met en forme dans un composant DataTable de Primevue. Cet
            affichage permet une restitution claire et ergonomique
            d'informations, tout en permettant à l'occasion de modifier certains
            champs.<br /><br />
            Comme ici dans la figure 13, il s'agit de l'écran de référentiel des
            prestations. Son utilité réside dans le fait de pouvoir retrouver le
            code de prestation et diverses autres informations utilisées dans
            les chaînes de facturation par exemple. Mon tuteur avait aussi
            précisé que certaines colonnes devraient pouvoir être remplies et
            modifiées, ce que j'ai implémenté en mettant des composants de
            selection là où nécessaire.<br /><br />
            C'est essentiellement une interface CRUD avec seulement la lecture
            et la modification au besoin, mais aussi des fonctionnalités de filtre et de tri pour faciliter la
            navigation.<br /><br />
            L'export CSV est une fonctionnalité que j'ai rajouté afin de
            permettre à l'utilisateur de récupérer les données sur son
            ordinateur et en faire ce qu'il veut sans passer par l'application.
            <br /><br />Il y a deux autres écrans de référentiel, un pour les
            cheptels (élevages), et un autre pour les techniciens, mais par
            soucis de confidentialité je ne les montrerai pas.
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-1">
        <div class="flex flex-col gap-2">
          <h3>Saisie de facturation</h3>
        </div>
        <div class="flex flex-col gap-2"></div>
      </div>

      <div class="flex flex-col gap-1">
        <div class="flex flex-col gap-2">
          <h3>Gestion d'erreur</h3>
        </div>
        <div class="flex flex-col gap-2"></div>
      </div>

      <div class="flex flex-col gap-1">
        <div class="flex flex-col gap-2">
          <h3>Déploiement</h3>
        </div>
        <div class="flex flex-col gap-2"></div>
      </div>

      <div class="flex flex-col gap-1">
        <div class="flex flex-col gap-2">
          <h3>Documentation</h3>
        </div>
        <div class="flex flex-col gap-2"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const baseURL = useRuntimeConfig().app.baseURL;
</script>
