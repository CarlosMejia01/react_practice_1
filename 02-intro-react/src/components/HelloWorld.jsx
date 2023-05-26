export const HelloWorld = ({ user, id }) => {
    // const name = 'Pepe';
    return (
        //Fragment-dont show in the DOM
        <>
            <div>Hello World!</div>
            <div>Hello World! {user} with id {id}</div>
        </>
    )
}