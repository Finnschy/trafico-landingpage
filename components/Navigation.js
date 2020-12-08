import Link from "next/link"

const Navigation = () => {
    return (  
        <nav>
            <ul>
                <Link href="/">
                    <a id="logo"><img src="/logo-traffico.svg" alt=""/></a>
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
                <li>
                    <Link href="#">
                        <a id="contactBtn">CONTACT US</a>
                    </Link>
                </li>
            </ul>


    <style jsx>{`
        ul {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 1rem;
            color: #fff;
            margin: 0 auto;
        }

        #contactBtn {
            padding: 1rem 3rem;
            background: #EE4D47;
            border-radius: 5px;
        }

        #logo {
            margin-right: 40rem;
        }

        li {
            margin-right: 5rem;
        }
    `}</style>
        </nav>
    );
}
 
export default Navigation;