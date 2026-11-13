import { useEffect, useRef, useState } from "react";
import usePopoverStore from "#Store/popover.js";

const otherNetworks = ["Hire_Me_5G", "Ghassen_Network", "BEST_DEV6B67"];

const Wifi = () => {
    const { active, close } = usePopoverStore();
    const [enabled, setEnabled] = useState(true);
    const ref = useRef(null);
    const open = active === "wifi";

    useEffect(() => {
        if (!open) return;
        const onClick = (e) => {
            if (ref.current?.contains(e.target)) return;
            if (e.target.closest("[data-popover-trigger]")) return; // let the icon toggle it
            close();
        };
        const onKey = (e) => e.key === "Escape" && close();
        document.addEventListener("mousedown", onClick);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("mousedown", onClick);
            document.removeEventListener("keydown", onKey);
        };
    }, [open, close]);

    if (!open) return null;

    return (
        <section id="wifi" ref={ref}>
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
                            <img src="/icons/wifi.svg" alt="" className="invert" />
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
            <button className="settings" onClick={close}>Wi-Fi Settings…</button>
        </section>
    );
};

export default Wifi;