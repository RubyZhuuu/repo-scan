import React from 'react'
import { connect } from 'react-redux'
import { fetchRepos, jumpPage } from '../actions'

const mapStateToProps = (state, ownProps) => {
    if(ownProps.direction == "next" && state.search.pageNum < 30)
        return { active: true, search: state.search}
    else return {
        active: false
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNextClick: (search) => {
            search.pageNum ++
            dispatch(jumpPage(search.pageNum))
            dispatch(fetchRepos(search.keyword, search.pageNum))
        }
    }
}

let PageButtonContainer = ({ dispatch, onNextClick, search }) => {
    return (
        <span
            className = "next"
            onClick = { () => onNextClick(search) }
        >
            Next
        </span>
    )
}

PageButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageButtonContainer)

export default PageButtonContainer