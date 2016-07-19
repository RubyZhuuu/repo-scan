import React from 'react'
import RepoItem from './RepoItem'
import PageButtonContainer from '../containers/pageButton'

const ReposList = ({ items, onRepoItemClick, isLoading }) => {
    let hide = isLoading ? "mask" : "mask hide"

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
            <div style = {{overflow: "scroll", height: "100%"}}>
                <ul>
                {
                    items.map((item, index) =>
                        <RepoItem
                            key = { index }
                            { ...item }
                            onClick = { () => onRepoItemClick(item.name, item.owner) }
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