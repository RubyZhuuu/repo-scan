import React from 'react'
import KeywordContainer from '../containers/keyword'
import InputContainer from '../containers/input'
import styles from './KeywordsFilter.css'

const KeywordsFilter = () => (
    <div className = { styles.wrapper }>
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