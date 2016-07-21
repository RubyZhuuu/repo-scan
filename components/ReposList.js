import React from 'react'
import RepoItem from './RepoItem'
import PageButtonContainer from '../containers/pageButton'
import classNames from 'classnames/bind'

const ReposList = ({ items, onRepoItemClick, isLoading }) => {
    let hide = classNames("mask", { "hide": !isLoading })

    if(!items)
        return (
            <div className = "repos-list">
                <div className = "mask">
                    <div className = "loading"></div>
                </div>
            </div>
        )

    return (
        <div className = "repos-list">
            <div className = { hide }>
                <div className = "loading"></div>
            </div>
            <div className = "repos-wrapper">
                <ul>
                {
                    items.map((item, index) =>
                        <RepoItem
                            key = { index }
                            { ...item }
                            onClick = { () => onRepoItemClick(item.name, item.owner, item.github_url, item.default_branch) }
                        />
                    )
                }
                </ul>
            </div>
            <PageButtonContainer direction="next"/>
        </div>
    )
}

export default ReposList