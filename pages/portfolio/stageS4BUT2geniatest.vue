<template>
  <div class="flex flex-col gap-5 m-10">
    <h2 class="text-center">Stage chez Gen'IAtest</h2>
    <Card class="w-full">
      <template #content>
        <div class="flex flex-row gap-10">
          <div class="flex flex-col gap-2 w-[50vw]">
            <span
              ><strong>Date : </strong> du 7 avril 2025 au 28 juin 2025 (12 semaines)</span
            >
            <span
              ><strong>Cadre : </strong>formation de BUT Informatique, deuxième
              année, à l'IUT Nord Franche Comté</span
            >
            <span
              ><strong>Description : </strong><br/>Réalisation d'un développement de
              solutions informatique, selon les besoins décrits des
              utilisateurs.<br />
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
                src="/icons/typescript.svg"
              />
              <Image v-tooltip.left="'NuxtJS'" width="32" src="/favicon.ico" />
              <Image
                v-tooltip.left="'VueJS'"
                width="32"
                src="/icons/vuejs.svg"
              />
              <Image
                v-tooltip.left="'Nodejs'"
                width="32"
                src="/icons/nodejs.svg"
              />
              <Image
                v-tooltip.left="'Nestjs'"
                width="32"
                src="/icons/nestjs.svg"
              />
              <Image
                v-tooltip.left="'PostgreSQL avec TypeORM'"
                width="32"
                src="/icons/pgsql.svg"
              />
              <Image
                v-tooltip.left="'TailwindCSS'"
                width="32"
                src="/icons/tailwind.svg"
              />
            </div>
          </div>
        </div>
      </template>
    </Card>
    <div class="flex flex-col m-5 gap-5">
      <div class="flex flex-col gap-2">
        <h2>Introduction</h2>
        <h3>L'organisation d'accueil : Gen'IAtest</h3>
      </div>
      <div class="flex flex-col gap-2"></div>

      <div class="flex flex-col gap-2">
        <h3>Le stage</h3>
      </div>
      <div class="flex flex-col gap-2"></div>

      <div class="flex flex-col gap-2">
        <h2>Déroulé du stage</h2>
        <h3>Organisation</h3>
      </div>
      <div class="flex flex-col gap-2"></div>

      <div class="flex flex-col gap-2">
        <h3>Méthodologies</h3>
      </div>
      <div class="flex flex-col gap-2"></div>

      <div class="flex flex-col gap-2">
        <h3>Difficultés</h3>
      </div>
      <div class="flex flex-col gap-2"></div>

      <div class="flex flex-col gap-2">
        <h2>Réalisation</h2>
        <h3>La stack technique</h3>
      </div>
      <div class="flex flex-col gap-2"></div>

      <div class="flex flex-col gap-2">
        <h3>Authentification</h3>
      </div>
      <div class="flex flex-col gap-2"></div>

      <div class="flex flex-col gap-2">
        <h3>Autorisation</h3>
      </div>
      <div class="flex flex-col gap-2"></div>

      <div class="flex flex-col gap-2">
        <h3>Écrans de référentiel</h3>
      </div>
      <div class="flex flex-col gap-2"></div>

      <div class="flex flex-col gap-2">
        <h3>Saisie de facturation</h3>
      </div>
      <div class="flex flex-col gap-2"></div>

      <div class="flex flex-col gap-2">
        <h3>Déploiement</h3>
      </div>
      <div class="flex flex-col gap-2"></div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
