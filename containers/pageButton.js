import React from 'react'
import { connect } from 'react-redux'
import { fetchRepos, jumpPage } from '../actions'
import { PAGE_SIZE } from '../utils/constant'
import classNames from 'classnames/bind'
import styles from './pageButton.css'

const mapStateToProps = (state, ownProps) => {
    console.log("state check")
    let totalPage = state.repos.total_count ? Math.ceil(state.repos.total_count / PAGE_SIZE) : 1

    return {
        search: state.search,
        maxPageNum: totalPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNextClick: (search, maxPageNum) => {
            if(search.pageNum === maxPageNum)
                return

            search.pageNum ++
            dispatch(jumpPage(search.pageNum))
            dispatch(fetchRepos(search.keyword, search.pageNum))
        },
        onPrevClick: (search) => {
            if(search.pageNum === 1)
                return

            search.pageNum --
            dispatch(jumpPage(search.pageNum))
            dispatch(fetchRepos(search.keyword, search.pageNum))
        }
    }
}

let PageButtonContainer = ({ dispatch, onNextClick, onPrevClick, search, maxPageNum }) => {
    let prevBtnClass = classNames(styles.prev, { [styles.active]: search.pageNum > 1 })
    let nextBtnClass = classNames(styles.next, { [styles.active]: search.pageNum < maxPageNum })

    return (
        <div className = { styles.page }>
            <span onClick = { () => onPrevClick(search) } className = { prevBtnClass }>Prev</span>
            <span className = { styles.page_num }>{ `${search.pageNum}/${maxPageNum}` }</span>
            <span
                className = { nextBtnClass }
                onClick = { () => onNextClick(search, maxPageNum) }
            >
                Next
            </span>
        </div>
    )
}

PageButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageButtonContainer)

export default PageButtonContainer