import * as components from 'src/Components'

/**
 * @param Vue
 * @returns {Vue}
 */
export default ({ Vue }) => {
  /**
   */
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key])
  })
}
