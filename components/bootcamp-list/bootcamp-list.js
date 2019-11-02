export default {
  name: 'bootcamp-list',
  props: {
    itemsList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    /**
     * envia action para o pai gerar uma action
     */
    actionItemList(action, id, status) {
      this.actionButton = {
        action,
        id,
        status
      }
      this.$emit('actionItemList', this.actionButton)
    },
  }
}
