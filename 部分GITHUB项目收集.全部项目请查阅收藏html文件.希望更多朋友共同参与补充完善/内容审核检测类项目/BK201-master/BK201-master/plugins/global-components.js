import Vue from 'vue'
import Element from 'element-ui/lib/element-ui.common'
import Icon from 'vue-awesome/components/Icon.vue'
import UserSearch from '~/components/search/UserSearch'
import Pagination from '~/components/Pagination'
import Dialog from '~/components/Dialog'
import hasRoleMixin from '~/mixins/hasRole'
import ImageLazyLoad from '~/components/ImageLazyLoad'
require('vue-awesome/icons')

Vue.use(require('vue-moment'))
Vue.use(Element)
Vue.use(ImageLazyLoad, {})
Vue.component('v-icon', Icon)
Vue.component(UserSearch.name, UserSearch)
Vue.component(Pagination.name, Pagination)
Vue.component(Dialog.name, Dialog)
Vue.mixin(hasRoleMixin)
