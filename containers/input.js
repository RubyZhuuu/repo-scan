import React from 'react'
import { connect } from 'react-redux'
import { selectKeyword, fetchRepos } from '../actions'
import styles from './input.css'

let input = ({dispatch}) => {
    let text

    return (
        <span>
            <input ref = { node => {
                text = node
            }}/>
            <span className = { styles.search } onClick = { e => {
                if(!text.value.trim())
                    return

                dispatch(selectKeyword(text.value))
                dispatch(fetchRepos(text.value))
            }}>Go</span>
        </span>
    )
}

input = connect()(input)

export default input