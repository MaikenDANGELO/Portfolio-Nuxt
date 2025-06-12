<template>
  <div class="grid grid-cols-2 gap-5 m-10">
    <div class="flex flex-col gap-20 ml-5">
      <div class="flex flex-col gap-5">
        <h2>Me contacter</h2>
        <div class="flex flex-col gap-5">
          <p>
            <span
              ><strong>Par e-mail : </strong>
              <a href="mailto:maiken_dangelo@proton.me"
                >maiken_dangelo@proton.me</a
              ></span
            ><br />
            <span
              ><strong>ou : </strong>
              <a href="mailto:maiken.d_angelo@edu.univ-fcomte.fr"
                >maiken.d_angelo@edu.univ-fcomte.fr</a
              ></span
            >
          </p>
          <p>
            <span><strong>Par téléphone :</strong> +33 7 83 85 78 60</span>
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-5">
        <h2>Mes réseaux</h2>
        <div class="flex flex-row gap-15">
          <a target="_blank" href="https://github.com/MaikenDANGELO"
            ><Image width="64" src="/icons/github.svg"
          /></a>
          <a target="_blank" href="https://github.com/RaskieL"
            ><Image width="64" src="/icons/github.svg"
          /></a>
          <a target="_blank" href="https://discord.com/users/444074251079778314"
            ><Image width="64" src="/icons/discord.svg"
          /></a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ma%C3%AFken-d-angelo-12a500331"
            ><Image width="64" src="/icons/linkedin.svg"
          /></a>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-5">
      <h2>Mon emplacement</h2>
      <iframe
        title="Carte"
        width="500"
        height="500"
        src="https://www.openstreetmap.org/export/embed.html?bbox=6.690845489501953%2C47.58486290927609%2C6.976146697998048%2C47.68492127193435&amp;layer=mapnik"
        style="border: 1px solid black"
      />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
