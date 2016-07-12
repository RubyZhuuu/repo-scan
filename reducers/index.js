import { combineReducers } from 'redux'
import readme from './readme'
import repos from './repos'

const repoScan = combineReducers({
    readme,
    repos
})

export default repoScan