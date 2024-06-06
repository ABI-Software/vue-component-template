# Vue Component Template

Base template to create new Vue component.

This template includes:

- `VueComponentTemplate` component in `src/components`
- API documentation in `docs` using `vitepress`
- Cypress component testing for `VueComponentTemplate` component in `cypress/component`


## Usage

1. Create a new repository using this template (choose repository template when creating a new repo on GitHub and select this template).
2. Update component name, `VueComponentTemplate` to `YourComponentName`. (See next section for details).
3. Configure GitHub page for API documentation (Settings > GitHub Pages > Build and deployment > Chnage "Deploy from a branch" to "GitHub Actions").

### Updating Component Name

1. `package.json` > `name`
2. `package-lock.json` > `name`
3. `index.html` > `<title>`
4. `src/components/VueComponentTemplate.vue` to `YourComponent.vue` and update the component name and content inside the file.
5. Update the import file name in `App.vue`.
6. Update `COMPONENTS` array variable name in `vuese-generator.js`.
7. Update TBC:
100. `public/favicon.svg` (optional, if you have favicon)


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
