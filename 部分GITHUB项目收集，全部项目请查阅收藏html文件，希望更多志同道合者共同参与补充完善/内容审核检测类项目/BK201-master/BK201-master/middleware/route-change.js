export default ({ store }) => {
  if (store.state.user.id) {
    store.dispatch('getTodo')
  }
}
