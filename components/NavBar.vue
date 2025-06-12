<template>
  <div>
    <div class="grid grid-cols-3 gap-5 bg-[#0C0616] p-5 m-5 rounded-2xl">
      <div class="flex flex-row gap-5">
        <NuxtLink to="/">
          <Button class="w-50" label="Accueil" icon="pi pi-home " plain text />
        </NuxtLink>
        <NuxtLink to="/portfolio">
          <Button class="w-50" label="Mon portfolio" icon="pi pi-briefcase" plain text />
        </NuxtLink>
        <NuxtLink to="/contact">
          <Button class="w-50" label="Me contacter" icon="pi pi-phone" plain text />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>


</script>

<style></style>