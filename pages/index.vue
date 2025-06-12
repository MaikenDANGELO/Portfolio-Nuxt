<template>
  <div class="flex flex-col gap-5 m-5 p-5">
    <div class="flex flex-row gap-20 m-10 h-full items-center">
      <div class="flex flex-col border-secondary border-2 rounded-2xl">
        <Image src="face.jpg" width="512px" class="rounded-img" />
      </div>

      <div class="flex flex-col gap-5">
        <div class="flex flex-col text-left gap-2">
          <h1>Maïken D'Angelo</h1>
          <h2>Développeuse à l'aventure</h2>
        </div>
        <div class="flex flex-row gap-5">
          <NuxtLink to="/contact">
            <Button
              class="bg-primary w-70 h-12"
              label="Me contacter"
              icon="pi pi-phone"
            />
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-5 m-5 p-5 w-full">
      <h2>Mes compétences</h2>
      <Tabs value="0">
        <TabList>
          <Tab value="0">Frameworks</Tab>
          <Tab value="1">Langages</Tab>
          <Tab value="2">Logiciels</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <Tabs value="0">
              <TabList>
                <Tab value="0">Backend</Tab>
                <Tab value="1">Frontend</Tab>
              </TabList>

              <TabPanels>
                <TabPanel value="0">
                  <div class="grid grid-cols-4 gap-5 place-items-center">
                    <Image
                      v-tooltip.left="'Nodejs'"
                      width="128"
                      src="/icons/nodejs.svg"
                    />
                    <Image
                      v-tooltip.left="'Nestjs'"
                      width="128"
                      src="/icons/nestjs.svg"
                    />
                    <Image
                      v-tooltip.left="'QT'"
                      width="128"
                      src="/icons/qt.svg"
                    />
                    <Image
                      v-tooltip.left="'PostgreSQL'"
                      width="128"
                      src="/icons/pgsql.svg"
                    />
                    <Image
                      v-tooltip.left="'MySQL'"
                      width="128"
                      src="/icons/mysql.svg"
                    />
                  </div>
                </TabPanel>

                <TabPanel value="1">
                  <div class="grid grid-cols-4 gap-5 place-items-center">
                    <Image
                      v-tooltip.left="'Vuejs3'"
                      width="128"
                      src="/icons/vuejs.svg"
                    />
                    <Image
                      v-tooltip.left="'Nuxt3'"
                      width="128"
                      src="/icons/nuxt.svg"
                    />
                    <Image
                      v-tooltip.left="'TailwindCSS'"
                      width="128"
                      src="/icons/tailwind.svg"
                    />
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </TabPanel>

          <TabPanel value="1">
            <div class="grid grid-cols-4 gap-5 place-items-center">
              <Image
                v-tooltip.left="'Typescript'"
                width="128"
                src="/icons/typescript.svg"
              />
              <Image
                v-tooltip.left="'Javascript'"
                width="128"
                src="/icons/javascript.svg"
              />
              <Image v-tooltip.left="'C'" width="128" src="/icons/c.svg" />
              <Image v-tooltip.left="'C++'" width="128" src="/icons/cpp.svg" />
              <Image
                v-tooltip.left="'C#'"
                width="128"
                src="/icons/csharp.svg"
              />
              <Image
                v-tooltip.left="'Java'"
                width="128"
                src="/icons/java.svg"
              />
              <Image
                v-tooltip.left="'Kotlin'"
                width="128"
                src="/icons/kotlin.svg"
              />
              <Image
                v-tooltip.left="'Swift'"
                width="128"
                src="/icons/swift.svg"
              />
              <Image
                v-tooltip.left="'Python'"
                width="128"
                src="/icons/python.svg"
              />
              <Image
                v-tooltip.left="'HTML-5'"
                width="128"
                src="/icons/html.svg"
              />
              <Image
                v-tooltip.left="'CSS-3'"
                width="128"
                src="/icons/css.svg"
              />
            </div>
          </TabPanel>

          <TabPanel value="2">
            <div class="grid grid-cols-4 gap-5 place-items-center">
              <Image
                v-tooltip.left="'Visual Studio Code'"
                width="128"
                src="/icons/vscode.svg"
              />
              <Image
                v-tooltip.left="'Blender'"
                width="128"
                src="/icons/blender.svg"
              />
              <Image
                v-tooltip.left="'Godot'"
                width="128"
                src="/icons/godot.svg"
              />
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <div class="flex flex-row gap-5">
        <NuxtLink to="/portfolio">
          <Button
            class="bg-primary w-70 h-12"
            label="Voir mon portfolio"
            icon="pi pi-briefcase"
          />
        </NuxtLink>
        <NuxtLink to="/contact">
          <Button
            class="bg-primary w-70 h-12"
            label="Me contacter"
            icon="pi pi-phone"
          />
        </NuxtLink>
      </div>
    </div>

    <div class="flex flex-col gap-5 m-5 p-5">
      <h2>Qui suis-je</h2>
      <p class="text-justify">
        <span
          >Curieuse et fière aventurière, j'arpente avec chic l'univers du
          numérique.<br /><br />
          Mon parcours est tout sauf typique, je me suis découvert de nouvelles
          passions par pure curiosité. Petite je touchais déjà aux ordinateurs,
          aux jeux vidéos, à Internet; j'y passais beaucoup de temps. La
          logique, les sciences, l'informatique m'attiraient fortement.<br /><br />
          Alors au lycée, j'ai choisi des spécialités qui n'avaient rien à voir
          avec tout cela : Histoire-Géographie, Géopolitique, Sciences
          Politiques, Langue, Littérature et Culture anglaise..Humanités,
          Littérature et Philosophie.. Juste pour découvrir et apprendre de
          nouvelles choses. Ne sachant pas quoi faire après le Bac, j'ai passé
          deux ans en licence LLCER Japonais, pour découvrir plus en profondeur
          une culture que j'aime. Mais je me suis rendue compte que ce n'était
          pas ce que je voulais pour mon futur, que je devais retourner à mes
          sources, revenir sur mes pas.<br /><br />
          La flamme qui sommeillait en moi s'est ranimée quand j'ai choisi le
          BUT Informatique.<br /><br />
          J'ai pu apprendre ce que j'ai toujours voulu apprendre : de nouvelles
          façon de penser et de travailler. J'ai pu y réaliser de nombreux
          projets, qui m'ont formé à la programmation, les architectures
          d'application, la gestion de projet, la méthode agile, et m'ont appris
          l'autonomie, le travail en équipe et la communication.<br /><br />
          Aujourd'hui, j'aime développer des applications, desktop, web ou
          mobile. J'aime l'art du frontend, et la logique du backend. J'aime la
          beauté des données, et l'importance de la sécurité.<br /><br />
          Je travaille couramment avec les langages Java, Python, Javascript, C,
          Dart, SQL, avec les frameworks JavaFX, Flask, Nodejs, Vuejs, Flutter,
          et le SGBDR MySQL. Je travaille ainsi sur plusieurs projets comme une
          application desktop de lecture de musique en local avec Dart et
          Flutter, et une d'application web fullstack avec Nodejs, Vuejs, MySQL,
          une API REST, et la méthodologie agile.<br /><br />
          Née trop tard pour explorer la Terre, trop tôt pour explorer
          l'univers. Mais née au bon moment pour explorer celui du numérique.
        </span>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.rounded-img ::v-deep(img) {
  border-radius: var(--radius-2xl);
}
</style>
