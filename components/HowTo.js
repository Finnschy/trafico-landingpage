const HowTo = () => {
    return (  
        <section>
            <figure>
                <img src="/second-section_illustration.png" alt=""/>
            </figure>
            <article>
                <h2>HOW TO APPLY</h2>
                <p>When applying for a traffic permit, there are certain requirements that you must meet that are included in the examination: requirements for professional knowledge, solid establishment, good reputation and financial resources. Important to remember is to confirm your application for a traffic permit by the company's company signer or CEO. </p>
            </article>

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
            margin-top: 9rem;
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
            margin-right: 10rem;
        }
    
    `}</style>
        </section>
    );
}
 
export default HowTo;