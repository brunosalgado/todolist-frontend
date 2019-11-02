<template>
  <div>
    <nuxt-link to="/">Back to Beginning</nuxt-link>
    <div>
      <bootcamp-input
        :itemsList="itemsList"
        @addItemList="addItemList"
      />
      <bootcamp-list
        v-if="itemsList.length"
        :itemsList="itemsList"
        @actionItemList="actionItemList"
      />
    </div>
  </div>
</template>

<script src="./index.js"></script>
