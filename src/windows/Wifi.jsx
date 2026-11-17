import { useState } from "react";
import usePopoverStore from "#Store/popover.js";

const otherNetworks = ["Hire_Me_5G", "Ghassen_Network", "YourNextDeveloper_67B7"];

const Wifi = () => {
    const { popovers, closePopover } = usePopoverStore();
    const [enabled, setEnabled] = useState(true);

    if (!popovers.wifi.isOpen) return null;

    return (
        <>
            <div className="popover-backdrop" onClick={() => closePopover("wifi")} />
            <section id="wifi">
                <div className="row">
                    <h3>Wi-Fi</h3>
                    <button
                        className={`switch ${enabled ? "on" : ""}`}
                        onClick={() => setEnabled((v) => !v)}
                        aria-pressed={enabled}
                    >
                        <span />
                    </button>
                </div>

                {enabled && (
                    <>
                        <hr />
                        <h4>Known Network</h4>
                        <div className="network">
                            <div className="badge">
                                <img src="/icons/wifi.svg" alt="" />
                            </div>
                            <p>Secure Wi-Fi</p>
                            <img src="/icons/lock.svg" alt="" className="lock" />
                        </div>

                        <hr />
                        <details>
                            <summary>Other Networks</summary>
                            <ul>
                                {otherNetworks.map((n) => (
                                    <li key={n}>{n}</li>
                                ))}
                            </ul>
                        </details>
                    </>
                )}

                <hr />
                <button className="settings" onClick={() => closePopover("wifi")}>Wi-Fi Settings…</button>
            </section>
        </>
    );
};

export default Wifi;