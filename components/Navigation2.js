import Link from "next/link"

const Navigation2 = () => {
    return (
        <nav>
            <ul>
                <Link href="/">
                    <a><img src="/logo-traffico.svg" alt="" /></a>
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
        ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 65%;
            padding-top: 1rem;
            margin-left: 10rem;
            color: #fff;
        }
    `}</style>
        </nav>
    );
}

export default Navigation2;