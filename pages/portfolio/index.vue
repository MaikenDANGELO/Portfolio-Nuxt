<template>
  <div class="flex flex-col m-10 gap-5">
    <h2 class="ml-5">Mon portfolio</h2>
    <div class="grid grid-cols-4 gap-5 place-items-center">
      <Card style="width: 25rem; overflow: hidden; padding: 15px;">
        <template #header
          ><div class="flex justify-center">
            <Image src="geniatest.png" /></div
        ></template>
        <template #title>Stage chez Gen'IAtest</template>
        <template #subtitle>BUT2 S4 Informatique - 04/25 au 07/25</template>
        <template #content>
          <p class="m-0">
            Stage de développement de solutions informatique chez Gen'IAtest,
            une coopérative agricole spécialisée dans l'insémination animale.
            <br /><br />
            Développement d'une application web fullstack.
          </p>
        </template>
        <template #footer>
          <div class="flex gap-4 mt-1">
            <NuxtLink class="w-full" to="/portfolio/stageS4BUT2geniatest">
              <Button label="Accéder" class="w-full" />
            </NuxtLink>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
