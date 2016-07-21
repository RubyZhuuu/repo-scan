
import React from 'react'

const RepoItem = ({ name, description, updated_at, owner, star_count, onClick }) => (
    <li onClick = { onClick } className = "repo-item">
        <p>
            <span className = "repo-name">
                { name }
            </span>
            { ` updated at ${updated_at} by ${owner}`}
        </p>
        <p className = "repo-des">
            { description }
        </p>
        <p>
            <span className = "star">{ `${star_count} stars` }</span>
        </p>
    </li>
)

export default RepoItem