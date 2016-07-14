
import React from 'react'

const RepoItem = ({ name, description, updated_at, owner, star_count, onClick }) => (
    <li
        onClick = { onClick }
        style = {{ listStyle: 'none', borderBottom: "solid 1px #ccc" }}
    >
        <p>
            <span
                style={{ fontWeight: "bold"}}
            >
                { name }
            </span>
            { ' updated at ' + updated_at + ' by ' + owner}
        </p>
        <p
            style = {{ fontWeight: "medium", color: "#555" }}
        >
            { description }
        </p>
        <p>
            <span
                style = {{ color: "#fd9d28" }}
            >{ star_count + " stars" }</span>
        </p>
    </li>
)

export default RepoItem