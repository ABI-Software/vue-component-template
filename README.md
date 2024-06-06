# Vue Component Template

Base template to create new Vue component.

This template includes:

- `VueComponentTemplate` component in `src/components`
- API documentation in `docs` using `vitepress`
- Cypress component testing for `VueComponentTemplate` component in `cypress/component`
- ESLint


## Usage

1. Create a new repository using this template (choose repository template when creating a new repo on GitHub and select this template).
2. Update component name, `VueComponentTemplate` to `YourComponentName`. (See [Updating Component Names](#Updating-Component-Names) for details).
3. Configure GitHub page for API documentation (Settings > GitHub Pages > Build and deployment > Chnage "Deploy from a branch" to "GitHub Actions").
4. Run `npm install`.
5. Run `npm run serve` for development.
6. Run `npm run build-bundle` for production build to create bundle.
7. Run `npm run lint` for ESLint.

### Updating Component Names

If you are using VSCode, `[Ctrl + Shift + F]` or `[Cmd + Shift + F]` from root directory and search for "**vue-component-template**", and replace with your new component name.

Do the same thing for "**VueComponentTemplate**".

Rename `src/components/VueComponentTemplate.vue` and `cypress/component/VueComponentTemplate.cy.js` to your new component name.


## API Documentation

The API documentation is developed with `vitepress` and `vuese`. Documentation pages are in the `docs` folder.

### To run in local development mode
```bash
npm run docs:watch
```

This will start the documentation server with `vitepress` on port `:5173` and watch the components' changes.


## Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur
