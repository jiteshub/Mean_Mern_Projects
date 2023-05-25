const fbcomp = (props) => {
    const {name, city} = props // De-structure the props
    return (
        <>
            <h3>This is a function component</h3>
            <p>Welcome { name }... let's understand the function component!</p>
            <div>This is some div</div>

            <footer>Designed by { name } from { city } </footer>
        </>
    )
}

export default fbcomp