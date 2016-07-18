import { combineReducers } from 'redux'
import readme from './readme'
import repos from './repos'
import search from './search'

const repoScan = combineReducers({
    readme,
    repos,
    search
})

export default repoScan