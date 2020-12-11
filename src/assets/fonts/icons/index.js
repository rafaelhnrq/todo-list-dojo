import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt, faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPencilAlt, faCheckCircle, faTrashAlt)

Vue.component('icon', FontAwesomeIcon)
