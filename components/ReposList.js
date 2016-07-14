import React from 'react'
import RepoItem from './RepoItem'

const ReposList = ({ items, onRepoItemClick }) => {
    if(items == undefined)
        return <ul></ul>

    return (
        <div className = "repos-list">
            <ul>
                {
                    items.map((item, index) =>
                        <RepoItem
                            key = { index }
                            { ...item }
                            onClick = { () => onRepoItemClick(item.name, item.owner) }
                        />
                )}
            </ul>
            <div className = "page">
                <span>prev</span>
                <span className = "next">next</span>
            </div>
        </div>
    )
}

export default ReposList