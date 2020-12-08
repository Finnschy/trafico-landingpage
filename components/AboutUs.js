const AboutUs = () => {
    return (
        <section>
            <article>
                <h2>ABOUT US</h2>
                <p>The occupational traffic permit is one of the most important things in the company when carrying out freight transport.  In fact, it is a prerequisite for doing business traffic at all. </p>

                <div>
                    <p>How do you do when you need to obtain <br/>
                        a commercial traffic permit for freight transport to your business?</p>
                </div>
            </article>

            <figure>
                <img src="/first-section_Illustration.png" alt=""/>
            </figure>


    <style jsx>{`
        section{
            display: flex;
            justify-content: center;
            margin: 15rem 0;
        } 
        h2 {
            color: #EE4D47;
            font-weight: 700;
            margin-bottom: 3rem;
            letter-spacing: .2rem;
        }
        article {
            width: 30%;
        }

        article > p {
            font-weight: 300;
            margin-bottom: 3rem;
            line-height: 2rem;  
            font-size: 1.1rem;
            width: 80%;
            
        }   

        p {
            color: #402B2B;
        }
        div {
            background: #FCDDD4;
            border-left: 10px solid #ED4D47;
            font-weight: 500;
            padding: 4rem;
            font-size: 1.25rem;
            line-height: 1.8rem;
            
        }

        img {
            margin-left: 10rem;
        }
    
    `}</style>
        </section>
    );
}

export default AboutUs;