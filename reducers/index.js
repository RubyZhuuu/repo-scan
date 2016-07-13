import { combineReducers } from 'redux'
import readme from './readme'
import repos from './repos'
import keyword from './keyword'

const repoScan = combineReducers({
    readme,
    repos,
    keyword
})

export default repoScan