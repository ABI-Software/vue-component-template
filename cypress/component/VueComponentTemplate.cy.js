import VueComponentTemplate from '../../src/components/VueComponentTemplate.vue'

describe('<VueComponentTemplate />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(VueComponentTemplate)
  })
})
