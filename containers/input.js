import React from 'react'
import { connect } from 'react-redux'
import { selectKeyword, fetchRepos } from '../actions'

let input = ({dispatch}) => {
    let text
    return (
        <input onChange = {e => {
            e.preventDefault()
            if(!text.value.trim())
                return
            dispatch(selectKeyword(text.value))
            dispatch(fetchRepos(text.value))
        }} ref = { node => {
            text = node
        }}/>
    )
}

input = connect()(input)

export default input