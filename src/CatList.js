// write your CatList component here
import React from 'react'

const CatList = props => {

    return (
        <div>
            {props.catPics.map(cat => <img src={cat.url} />)}
        </div>
    )
}

export default CatList