/**
 * Vuese Generator
 *
 * To generate markdown files from Vue components
 * To watch components changes for Vitepress on Dev Mode
 *
 * Update the components array.
 */
const COMPONENTS = [
  'VueComponentTemplate'
]

import fs from 'fs'
import path from 'path'
import chokidar from 'chokidar'
import { parser } from '@vuese/parser'
import { parseSource } from 'vue-docgen-api'
import { Render } from '@vuese/markdown-render'

const watchMode = process.argv.find((argv) => argv === 'watch')

const componentsDir = 'src/components'
const outputDir = 'docs/components'
const components = COMPONENTS.map((component) => component + '.vue')

function generateMarkdown(file) {
  const fileWithPath = `${componentsDir}/${file}`
  const fileContent = fs.readFileSync(fileWithPath, 'utf-8')

  try {
    // vuese parser doesn't work with composition api
    // const parserResult = parser(fileContent)
    const parserResult = parseSource(fileContent, fileWithPath)
    parserResult.then((result) => {
      const name = result.displayName
      const desc = result.description
      const props = result.props

      // transform props to vuese styles
      props.forEach((prop) => {
        prop.name = prop.name
        prop.type = prop.type.name
        prop.describe = [prop.description]
        prop.default = prop.defaultValue.value.replaceAll('\n', '')
      })

      const parseResult = {
        name: name,
        componentDesc: {
          default: [desc]
        },
        props: props,
      }
      const r = new Render(parseResult)
      const renderResult = r.render()
      const markdownResult = r.renderMarkdown()
      const markdownContent = markdownResult.content
      const componentName = path.basename(fileWithPath, '.vue')

      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir)
      }

      fs.writeFile(`${outputDir}/${componentName}.md`, markdownContent, (err) => {
        if (err) {
          console.error(`Error writing markdown file for ${componentName}`, err)
        } else {
          console.log(`Markdown file for ${componentName} is generated!`)
        }
      })
    })
  } catch(e) {
    console.error(e)
  }
}

// To generate markdown files - one time
components.forEach((component) => {
  console.log(`Write markdown file for ${component} on first load.`)
  generateMarkdown(component)
})

// To watch component changes and generate markdown files
if (watchMode) {
  const watcher = chokidar.watch(components, {
    cwd: componentsDir,
    ignoreInitial: true,
  })

  watcher.on('change', (file) => {
    console.log(`The component ${file} has changed!`)
    generateMarkdown(file)
  })
}
