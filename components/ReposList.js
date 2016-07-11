import React from 'react'
import RepoItem from './RepoItem'

const ReposList = ({ items }) => {
if(items == undefined)
    return <ul></ul>
  
  return (<ul>
    {
        items.map((item, index) =>
        <RepoItem
          key = {index}
          {...item}
        />
        )
    }
  </ul>
)}

export default ReposList
