import React, {Component} from 'react'
import classNames from 'classnames/bind'
import styles from './keyword.css';

const Keyword = ({ clickHandler, isCurrent, children, search }) => {
    let classes =classNames(styles.keyword, { [styles.current]: isCurrent })

    return (
        <span
            onClick = { () => clickHandler(search) }
            className = { classes }
        >
             { children }
        </span>
    )
}

export default Keyword