<template>
  <ul>
      <li
        v-for="item in itemsList"
        v-bind:key="item.text"
      >
        {{ `task: ${item.text} - status: ${item.status}` }}
        <span>
          <button
            @click="actionItemList('delete', item.id, item.status)"
          >
          X
          </button>
          <button
            @click="actionItemList('changeState', item.id, item.status == 1 ? '2' : '1')"
          >
          V
          </button>
        </span>
      </li>
    </transition-group>
  </ul>
</template>

<script src="./bootcamp-list.js" />
<style media="screen">

</style>
