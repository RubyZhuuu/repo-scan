import React from 'react'
import RepoItem from './RepoItem'

const ReposList = ({ items, onRepoItemClick }) => {
    if(items == undefined)
        return <ul></ul>

    return (
        <ul
            style = {{
                width: "300px",
                float: "left",
                padding: "0"
            }}
        >
            {
                items.map((item, index) =>
                    <RepoItem
                        key = { index }
                        { ...item }
                        onClick = { () => onRepoItemClick(item.name, item.owner) }
                    />
            )}
        </ul>
    )
}

export default ReposList