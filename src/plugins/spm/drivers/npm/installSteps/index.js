import preparing from './preparing'
import checkAlreadyExists from './checkAlreadyExists'
import createPackageJsonFile from './createPackageJsonFile'
import checkRegistry from './checkRegistry'
import npmInstall from './npmInstall'
import checkPackageJSON from './checkPackageJSON'
import writeDependenciesToPackageJson from './writeDependenciesToPackageJson'
import registerInConfigFile from './registerInConfigFile'
import createLoader from './createLoader'
import registerInPluginManager from './registerInPluginManager'

const steps = [
  preparing,
  checkAlreadyExists,
  createPackageJsonFile,
  checkRegistry,
  npmInstall,
  checkPackageJSON,
  writeDependenciesToPackageJson,
  registerInConfigFile,
  createLoader,
  registerInPluginManager
].reverse()

export default steps
