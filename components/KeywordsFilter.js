import React from 'react'
import KeywordContainer from '../containers/keyword'

const KeywordsFilter = () => (
    <div>
        <KeywordContainer keyword = "react">
            React
        </KeywordContainer>
        <KeywordContainer keyword = "webpack">
            Webpack
        </KeywordContainer>
        <KeywordContainer keyword = "redux">
            Redux
        </KeywordContainer>
        <KeywordContainer keyword = "babel">
            Babel
        </KeywordContainer>
    </div>
)

export default KeywordsFilter