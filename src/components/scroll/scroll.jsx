import { useEffect, useState } from "react"
import "./scroll.css"

export function Scroll() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const scrolls = () => {
            if (window.scrollY > 20) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        };

        window.addEventListener('scroll', scrolls)
        return () => {
            window.removeEventListener('scroll', scrolls)
        }
    }, [])

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };

    return (
        <div>
            {visible && (
                <button
                    onClick={scrollTop}
                    className="button15"
                    title="nos vamo pa arriba"
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        opacity: 1,
                        transition: 'opacity 0.3s',
                    }}
                >
                    <svg className="icono" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"></path></svg>
                </button>
            )}
        </div>
    )
}


