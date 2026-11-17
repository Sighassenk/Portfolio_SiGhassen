import usePopoverStore from "#Store/popover.js";
import { users } from "#constants/index.js";

const User = () => {
    const { popovers, closePopover } = usePopoverStore();

    if (!popovers.user.isOpen) return null;

    return (
        <>
            <div className="popover-backdrop" onClick={() => closePopover("user")} />
            <section id="user">
                <ul className="accounts">
                    {users.map(({ id, name, avatar, current }) => (
                        <li key={id}>
                            <div className="avatar">
                                <img src={avatar} alt={name} />
                                {current && <span className="check">✓</span>}
                            </div>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>

                <hr />
                <button className="item" onClick={() => closePopover("user")}>Login Window…</button>
                <hr />
                <button className="item" onClick={() => closePopover("user")}>Users & Groups Preferences…</button>
            </section>
        </>
    );
};

export default User;