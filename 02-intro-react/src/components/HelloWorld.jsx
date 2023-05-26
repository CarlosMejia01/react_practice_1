import PropTypes from 'prop-types'

//prop, deafult value
export const HelloWorld = ({ user, id, title = "Hello World", book }) => {
    console.log(title);
    // const name = 'Pepe';
    return (
        //Fragment-dont show in the DOM
        <>
            <div>{title}</div>
            <div>Hello World! {user.name} {user.lastname} with id {id + 10}</div>
            <div>{book}</div>
        </>
    )
};

//proptypes
HelloWorld.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
};

HelloWorld.defaultProps = {
    title: 'Hello world default!',
    book: 'UML'
};