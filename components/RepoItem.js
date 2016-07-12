
import React from 'react'

const RepoItem = ({ name, description, updated_at, owner, onClick }) => (
    <li
        onClick={ onClick }
        style={{ listStyle: 'none', borderBottom: "solid 1px #ccc" }}
    >
        <p>
            <span
                style={{ fontWeight: "bold" }}
            >
                { name }
            </span>
            { ' updated at ' + updated_at + ' by ' + owner.login }
        </p>
        <p>
            { description }
        </p>
    </li>
)

export default RepoItem