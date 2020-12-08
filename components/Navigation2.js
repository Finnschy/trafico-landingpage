import Link from "next/link"

const Navigation2 = () => {
    return (
        <nav>
            <ul>
                <Link href="/">
                    <a className="logo"><img src="/logo-traffico.svg" alt="" /></a>
                </Link>
                <li>
                    <Link href="/about">
                        <a>ABOUT</a>
                    </Link>
                </li>
                <li>
                    <Link href="/howto">
                        <a>HOW TO </a>
                    </Link>
                </li>
                <li>
                    <Link href="/faq">
                        <a>FAQS</a>
                    </Link>
                </li>
            </ul>


    <style jsx>{`

    nav {
        padding-bottom: 5rem;
    }
        ul {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            margin: 0 auto;
        }

        li {
            margin-right: 5rem;
        }

        .logo {
        margin-right: 40rem;
        }
    `}</style>
        </nav>
    );
}

export default Navigation2;