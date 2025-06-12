<template>
  <div class="flex flex-col gap-5 m-10">
    <h2 class="text-center">Stage chez Gen'IAtest</h2>

    <Card class="w-full">
      <template #content>
        <div class="flex flex-row gap-10">
          <div class="flex flex-col gap-2 w-[50vw]">
            <span
              ><strong>Date : </strong> du 7 avril 2025 au 28 juin 2025 (12
              semaines)</span
            >
            <span
              ><strong>Cadre : </strong>formation de BUT Informatique, deuxième
              année, à l'IUT Nord Franche Comté</span
            >
            <span
              ><strong>Description : </strong><br />Réalisation d'un
              développement de solutions informatique, selon les besoins décrits
              des utilisateurs.<br />
              Une application web fullstack englobant protocoles
              d'authentification et d'autorisation adaptés à la base
              utilisateur, communiquant avec la base de données mise en place.
              <br />
              L'application permet l'affichage de référentiel de données, la
              gestion des droits des utilisateurs, et la saisie d'éléments de
              facturation, tout en restant modulable et robuste pour des
              évolutions futures.</span
            >
          </div>
          <div class="flex flex-col gap-2">
            <span
              ><strong>Tuteur :</strong> Nicolas THIBERT, responsable DSI chez
              Gen'IAtest</span
            >
            <span
              ><strong>Responsable :</strong> Ingrid COUTURIER, professeure
              d'anglais à l'IUT</span
            >
            <span><strong>Technologies utilisées :</strong></span>
            <div class="grid grid-cols-4 gap-5">
              <Image
                v-tooltip.left="'Typescript'"
                width="32"
                src="icons/typescript.svg"
              />
              <Image v-tooltip.left="'NuxtJS'" width="32" src="favicon.ico" />
              <Image
                v-tooltip.left="'VueJS'"
                width="32"
                src="icons/vuejs.svg"
              />
              <Image
                v-tooltip.left="'Nodejs'"
                width="32"
                src="icons/nodejs.svg"
              />
              <Image
                v-tooltip.left="'Nestjs'"
                width="32"
                src="icons/nestjs.svg"
              />
              <Image
                v-tooltip.left="'PostgreSQL avec TypeORM'"
                width="32"
                src="icons/pgsql.svg"
              />
              <Image
                v-tooltip.left="'TailwindCSS'"
                width="32"
                src="icons/tailwind.svg"
              />
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
              d'adapter l'outil développé au mieux possible. <br /><span
                >Pour plus d'information sur Gen'IAtest, vous pouvez vous
                référer à leur site :
                <a target="_blank" href="https://www.geniatest.com/"
                  >geniatest.com</a
                ></span
              >
              <br /><br />
            </p>
            <Image src="portfolio_geniatest/organigramme.jpg" />
            <span
              >(Figure 2) Organigramme de Gen'IAtest présentant la hiérarchie
              des différents services</span
            >
          </div>
          <div class="flex flex-col gap-2">
            <Image width="512" src="portfolio_geniatest/carte_activite.jpg" />
            <span class="w-[512px]"
              >(Figure 1) Zone d'activité de Gen'IAtest, divisée par secteur,
              englobant les départements du Doubs, du Jura, de la Haute-Marne,
              de la Haute-Saône et du Territoire de Belfort ainsi que la Côte
              d'Or, le Haut-Rhin et les Vosges. <br />
              Source :
              <a target="_blank" href="https://www.geniatest.com/"
                >geniatest.com</a
              ></span
            >
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

            <span class="ml-2"
              >- Premièrement, la saisie d'éléments de facturation de certains
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
              préconisée.</span
            >
            <br /><br />

            <span class="ml-2"
              >- Deuxièmement, spécifiquement pour le service parage. Il faut
              revoir entièrement la chaîne de saisie de rendez-vous, car
              actuellement elle est réalisée à l'aide de 2 fichiers Excels, et
              du calendrier Outlook, triplant les saisies et donc les risques
              d'erreurs. Cette méthode chronophage et non pratique représente la
              majorité du temps de travail de la personne en charge de la
              gestion des rendez-vous, en plus de rendre cette activité
              difficile à déléguer en raison de sa complexité.</span
            ><br /><br />

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
            <Image
              width="1024"
              src="portfolio_geniatest/contraintes_consignes.png"
            />
            <span class="text-md w-[1024px]"
              >(Figure 3) - Capture d'écran d'une partie du document Microsoft
              Loop détaillant les contraintes et consignes à suivre lors du
              stage, rédigé par mes collègues du DSI.</span
            >
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
            <Image
              width="1024"
              src="portfolio_geniatest/calendrier_organisation_stage.png"
            />
            <span class="text-md w-[1024px]"
              >(Figure 4) - Capture d'écran d'une partie du document Microsoft
              Lists détaillant les étapes du stage avec une estimation des dates
              de réalisation, rédigé par mon tuteur.</span
            >
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
        <div class="flex flex-col gap-2"></div>
      </div>

      <div class="flex flex-col gap-1">
        <div class="flex flex-col gap-2">
          <h3>Authentification</h3>
        </div>
        <div class="flex flex-col gap-2"></div>
      </div>

      <div class="flex flex-col gap-1">
        <div class="flex flex-col gap-2">
          <h3>Autorisation</h3>
        </div>
        <div class="flex flex-col gap-2"></div>
      </div>

      <div class="flex flex-col gap-1">
        <div class="flex flex-col gap-2">
          <h3>Écrans de référentiel</h3>
        </div>
        <div class="flex flex-col gap-2"></div>
      </div>

      <div class="flex flex-col gap-1">
        <div class="flex flex-col gap-2">
          <h3>Saisie de facturation</h3>
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

<script lang="ts" setup></script>

<style></style>
