import {useGlobalContext} from "./context"
import sublinks from "./data"
import {useRef} from "react"
const Submenu = () => {
    const {pageId, setPageId} = useGlobalContext()
    const subPage = sublinks.find((item) => item.pageId === pageId)
    const mouseOff = (e) => {
        e.preventDefault()
        setPageId(null)
    }

    if (pageId) {
        const {page, links} = subPage
        return (
            <div
                className={subPage ? "submenu show-submenu" : "submenu"}
                onMouseLeave={mouseOff}>
                <h5>{page}</h5>
                <div
                    className="submenu-links"
                    style={{
                        gridTemplateColumns:
                            subPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
                    }}>
                    {links.map((link) => {
                        const {id, url, icon, label} = link
                        return (
                            <a key={id} href={url}>
                                {icon} {label}
                            </a>
                        )
                    })}
                </div>
            </div>
        )
    }
    return
}
export default Submenu
