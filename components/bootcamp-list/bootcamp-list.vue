<template>
  <ul>
      <li
        v-for="item in itemsList"
        v-bind:key="item._id"
      >
        {{ `task: ${item.description} - status: ${item.checked}` }}
        <span>
          <button
            @click="actionItemList('delete', item)"
          >
          X
          </button>
          <button
            @click="actionItemList('toggle', item, item.checked == 1 ? '2' : '1')"
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
