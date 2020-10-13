import React from 'react'

export default function stockById(props) {
    return (
        <div>
            id : {props.match.params.id}
        </div>
    )
}
