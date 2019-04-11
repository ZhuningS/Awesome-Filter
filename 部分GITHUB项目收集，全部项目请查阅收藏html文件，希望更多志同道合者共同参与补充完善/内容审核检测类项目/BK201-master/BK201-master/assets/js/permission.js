import sidebarMixin from '~/mixins/sidebar'

export default (route, store) => {
  const { mapVisit } = sidebarMixin.methods
  return route.matched.map(_ => _.meta.title).every(_ => mapVisit(_, store))
}
