export default {
  name: 'bootcamp-list',
  props: {
    /**
    * props que recebe valor no component pai
    */
    itemsList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    /**
     * envia action para o pai gerar uma action
     */
    actionItemList(action, item, status = false) {
      console.log(action);
      console.log(item);
      console.log(action);

      this.actionButton = {
        action,
        item,
        status,
      }
      this.$emit('actionItemList', this.actionButton)
    },
  }
}
