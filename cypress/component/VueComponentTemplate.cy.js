import VueComponentTemplate from '../../src/components/VueComponentTemplate.vue';

const TITLE = 'Vue Component Template';

describe('<VueComponentTemplate />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(VueComponentTemplate)
  });

  it(`should the title: ${TITLE}`, () => {
    cy.mount(VueComponentTemplate, {
      props: {
        title: TITLE
      }
    })
    .then(() => {
      cy.get('h1').should('have.text', TITLE);
    });
  });
});
