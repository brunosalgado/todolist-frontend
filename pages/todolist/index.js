import BootcampInput from '~/components/bootcamp-input/bootcamp-input.vue';
import BootcampList from '~/components/bootcamp-list/bootcamp-list.vue';

export default {
  data() {
    return {
      i: 1,
      itemsList: [],
    }
  },
  /**
   * registra os componentes
   */
  components: {
    BootcampInput,
    BootcampList,
  },
  methods: {
    /**
     * adiciona item na list
     * recebe valor vindo do componente filho
     */
    addItemList(value) {
      this.itemsList.push({
        id: this.i++,
        description: value,
        checked: '1'
      });
    },
    /**
     * recebe valor vindo do componente
     * conforme action faz alteração na lista
     */
    actionItemList(value) {
      if (value.action == 'delete') {
        this.deleteItemList(value)
      }
      if (value.action == 'toggle') {
        this.changeStateItemList(value)
      }
    },
    /**
     * conforme action faz alteração na lista
     */
    deleteItemList(value) {
      this.itemsList.map((i, k) => {
        if (i._id == value.item._id) {
          this.itemsList.splice(k, 1)
        }
      })
    },
    /**
     * muda estado de item na lista
     */
    changeStateItemList(value) {
      let itemsList = this.itemsList.find((i) => {
        return i._id == value.item._id
      })
      itemsList.checked = value.checked
    },
  },
}
