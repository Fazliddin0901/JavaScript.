class searchView {
  #parentElement = document.querySelector('.search');

  getValue() {
    const val = document.querySelector('.search__field').value;
    console.log(val);
  }

  addHandleEvent(handle) {
    this.#parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = this.getValue();
      console.log(data);
    });
  }
}
export default new searchView();
