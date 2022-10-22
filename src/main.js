import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faFacebook, faInstagram, faWhatsapp, faGithub, faLinkedin, faTwitter, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight, faCopy, faEnvelope, faShareAlt, faX } from '@fortawesome/free-solid-svg-icons';


/* add icons to the library */
library.add(faFacebook,
  faInstagram,
  faWhatsapp,
  faGithub,
  faLinkedin,
  faTwitter,
  faFacebookMessenger,
  faEnvelope,
  faShareAlt,
  faX,
  faChevronRight,
  faCopy
)

createApp(App)
  .component('fa-icon', FontAwesomeIcon)
  .mount('#app')
