const { default: Navigation2 } = require("./Navigation2")

const Footer = () => {
    return (
        <footer>
            <article>
                <p>We provide traffic management consultants so you get started quickly, contact us for a quote today!</p>

                <div>
                    <a href="">GET STARTED &#8594;</a>
                </div>

            </article>
            <Navigation2 />
            <section>
                <p>Copyright @ 2019 </p>

                <figure>
                    <img src="/f.png" alt=""/>
                    <img src="/t.png" alt=""/>
                    <img src="/i.png" alt=""/>
                </figure>
            </section>
            <style jsx>{`
        footer {
            background: url(/footer.png) top / cover no-repeat;
            border: .1px solid #fff;
        }

        article{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 22rem 0;
        }

        article > p {
            border-left: 10px solid #ED4D47;
            border-radius: 5px;
            font-weight: 300;
            line-height: 2rem;  
            font-size: 1.25rem;
            color: #fff;
            padding: 2rem;
            width: 30%;
            margin-right: 20rem;
        }

        a {
            padding: 1rem 3rem;
            background: #EE4D47;
            border-radius: 5px;
            font-weight: 500;
            color: #fff;
            display: inline-block;
        }

        section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 3rem 23rem;
            background: #fff;
        }

        section > p {
            font-weight: 300;
        }

        img {
            margin-right: 2rem;
        }
    `}</style>
        </footer>
    );
}

export default Footer;