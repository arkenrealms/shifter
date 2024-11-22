import * as dotenv from 'dotenv'
import { log, isDebug } from '@arken/node/util'
import { subProcesses, catchExceptions } from '@arken/node/util/process'
import migrate from './migrate'

dotenv.config()

// console.log('env', process.env)

process.env.REACT_APP_PUBLIC_URL = 'https://arken.gg/'

if (isDebug) {
  log('Running DB in DEBUG mode')
}

async function init() {
  catchExceptions(true)

  try {
    migrate()
  } catch (e) {
    log('Error', e)
  }
}

init()
