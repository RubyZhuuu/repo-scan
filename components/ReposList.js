import React from 'react'
import RepoItem from './RepoItem'
import PageButtonContainer from '../containers/pageButton'

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
                <span>Prev</span>
                <PageButtonContainer direction="next"/>
            </div>
        </div>
    )
}

export default ReposList