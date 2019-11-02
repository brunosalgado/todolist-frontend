<template>
  <div>
    <form
      id="todolistbootcamp"
      @submit.prevent="addItemList"
    >
      <label for="input">
        What will you do
      </label>
      <div>
        <input
          id="input"
          v-model="valueInput"
          type="text"
          :placeholder="getMessagePlaceholder"
          :disabled="this.state == 'warning'"
          autocomplete="off"
        >
        <button
          v-if="valueInput.length"
        >
        X
        </button>
      </div>
    </form>
  </div>
</template>

<script src="./bootcamp-input.js" />
