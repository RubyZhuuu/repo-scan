import React from 'react'
import ReposListContainer from "../containers/ReposList"
import RepoReadmeContainer from "../containers/repoReadme"
import KeywordsFilter from "./KeywordsFilter"

const App = () => (
    <div>
        <KeywordsFilter/>
        <ReposListContainer/>
        <RepoReadmeContainer />
    </div>
)

export default App