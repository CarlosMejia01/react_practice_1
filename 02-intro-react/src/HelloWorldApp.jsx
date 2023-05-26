import PropTypes from 'prop-types'
import { Title } from "./components/Title";
import { UserDetails } from "./components/UserDetails";
import { Book } from "./components/Book";

//prop, deafult value
export const HelloWorldApp = ({ user, id, title = "Hello World", book }) => {
    console.log(title);
    // const name = 'Pepe';
    return (
        //Fragment-dont show in the DOM
        <>
            <Title title={title} />
            <UserDetails user={user} id={id} />
            <Book book={book}/>
        </>
    )
};

//proptypes
HelloWorldApp.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
};

HelloWorldApp.defaultProps = {
    title: 'Hello world default!',
    book: 'UML'
};