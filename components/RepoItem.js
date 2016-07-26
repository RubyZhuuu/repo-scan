
import React from 'react'
import styles from './repoItem.css'

const RepoItem = ({ name, description, updated_at, owner, star_count, onClick }) => (
    <li onClick = { onClick } className = { styles.item }>
        <p>
            <span className = { styles.name }>
                { name }
            </span>
            { ` updated at ${updated_at} by ${owner}`}
        </p>
        <p className = { styles.res }>
            { description }
        </p>
        <p>
            <span className = { styles.star }>{ `${star_count} stars` }</span>
        </p>
    </li>
)

export default RepoItem