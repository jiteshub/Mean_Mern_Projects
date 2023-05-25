import React from 'react'

// const Child = (props) => {
//     // de-structure the props
//     const { count, name, post } = props
//     return (
//         <div>
//             <h2>Child component</h2>
//             {count}, {name}, {post}
//         </div>
//     )
// }

const Child = ({ counter, name, post, handler }) => {

    return (
        <div>
            <h2>Child component</h2>
            {counter}, {name}, {post}
            <button onClick={() => handler('Hello from child')} >Send to Parent</button>
        </div>
    )
}

export default Child