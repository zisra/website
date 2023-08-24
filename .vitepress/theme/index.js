import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import NotFound from './NotFound.vue'
import LandingPage from './LandingPage.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'not-found': () => h(NotFound),
      'landing-page': () => h(LandingPage),
    })
  },
}
