import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router";



export default function Navigation() {

    const { pathname } = useLocation();
    const links = [
        { to: "/Challenges/Counter", text: "Counter" },
        { to: "/Challenges/Shopping", text: "Shopping" },
        { to: "/Challenges/Circles", text: "Circles" },
        { to: "/Challenges/Colors", text: "Colors" },
    ]

    return (
        <ListGroup className="rounded-0 z-2 d-none d-md-block bg-[#e7e9eb] position-fixed top-0 bottom-0 left-0">

            {
                links.map((link, index) => (
                    <ListGroup.Item
                        key={index}
                        className={`${pathname.includes(link.text) ? 'bg-light' : 'bg-success'} text-black border-0 text-center p-3`}
                        as={Link}
                        to={link.to}
                    >
                        <span className={`${pathname.includes(link.text) ? 'text-success' : 'text-white'}`}>
                            {link.text}
                        </span>

                    </ListGroup.Item>
                ))
            }
        </ListGroup >
    )
}