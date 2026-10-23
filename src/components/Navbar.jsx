import dayjs from 'dayjs'
import {navIcons, navLinks} from "#constants/index.js";

const Navbar = () => {
    return (
        <nav>
            <div>
                <img src={"/images/logo.svg"} alt={"logo"} />
                <p className={"font-bold"}>Orenda Portfolio</p>
                <ul>
                    {
                        navLinks.map(item =>
                            (<li key={item.id}>{item.name}</li>)
                        )
                    }
                </ul>
            </div>
            <div>
                <ul>
                    {
                        navIcons.map((icon) =>(
                            <li key={icon.id}>
                                <img src={icon.img} className={"icon-hover"} alt={"icon"} />
                            </li>
                        ))
                    }
                </ul>
                <time>{dayjs().format("ddd MMM D h:mm A")}</time>
            </div>
        </nav>
    )
}
export default Navbar