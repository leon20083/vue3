const App = {
  data() {
    return {
      title: "Заметки",
      placeholder: "Новая заметка",
      notes: ["Заметка1", "Заметка2"],
      value: "",
    };
  },
  methods: {
    inputValue(event) {
      this.value = event.target.value;
    },
    saveNotes() {
      this.notes.push(this.value);//ДОБАВЛЯЕМ ЭЛЕМЕНТ В КОНЕЦ МАССИВА
      this.value = "";
    },
    delNotes(index) {
      this.notes.splice(index, 1);//УДАЛЯЕМ ЭЛЕМЕНТ МАССИВА ПО ИНДЕКСУ
    },
  },
};
Vue.createApp(App).mount("#app");
