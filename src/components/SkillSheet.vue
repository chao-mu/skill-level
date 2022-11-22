<template>
  <div class="col">
    <div class="row">
      <div class="col">
        <div class="skill q-mb-sm text-capitalize" v-for="skill in skills" v-bind:key="skill.name">
          <div class="text-h6">{{ skill.name }}</div>
          <div class="text-subtitle1">Level {{ skill.level }}</div>
          <q-linear-progress
              stripe
              size="1.5rem"
              rounded
            color="secondary"
            :value="skill.levelProgress"
             class="" >
             <div class="absolute-full flex flex-center">
               <q-badge color="white" text-color="accent">
                 {{ skill.exp }} / {{ skill.nextLevelExp }}
               </q-badge>
             </div>
          </q-linear-progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["skills"]
}
</script>
