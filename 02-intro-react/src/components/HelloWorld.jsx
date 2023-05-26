//prop, deafult value
export const HelloWorld = ({ user, id, title = "Hello World" }) => {
    console.log(title);
    // const name = 'Pepe';
    return (
        //Fragment-dont show in the DOM
        <>
            <div>{title}</div>
            <div>Hello World! {user.name} {user.lastname} with id {id + 10}</div>
        </>
    )
};