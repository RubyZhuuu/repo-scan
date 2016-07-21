import React from 'react'
import KeywordContainer from '../containers/keyword'
import InputContainer from '../containers/input'

const KeywordsFilter = () => (
    <div className = "keyword-wrapper">
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
        <InputContainer/>
    </div>
)

export default KeywordsFilter