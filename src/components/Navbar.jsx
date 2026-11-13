import dayjs from 'dayjs'
import {navIcons, navLinks} from "#constants/index.js";
import useWindowStore from "#Store/window.js";
import usePopoverStore from "#Store/popover.js";

const Navbar = () => {
    const {openWindow}=useWindowStore();
    const { toggle } = usePopoverStore();
    return (
        <nav>
            <div>
                <img src={"/images/logo.svg"} alt={"logo"} />
                <p className={"font-bold"}>Ghassen's Portfolio</p>
                <ul>
                    {
                        navLinks.map(item =>
                            (<li key={item.id} onClick={()=>openWindow(item.type)}>{item.name}</li>)
                        )
                    }
                </ul>
            </div>
            <div>
                <ul>
                    {navIcons.map((icon) => (
                        <li key={icon.id}>
                            <button
                                data-popover-trigger
                                className="bg-transparent border-0 p-0 cursor-pointer"
                                onClick={() => icon.popover && toggle(icon.popover)}
                            >
                                <img src={icon.img} className="icon-hover" alt="icon" />
                            </button>
                        </li>
                    ))}
                </ul>
                <time>{dayjs().format("ddd MMM D h:mm A")}</time>
            </div>
        </nav>
    )
}
export default Navbar