import {Link} from react-router-dom

export function Booklist(){
    return(
        <>
        <h1>Booklist</h1>
        <Link to = "/book/1">Book 1</Link>
        <Link to = "/book/2">Book 2</Link>
        </>
    )
}