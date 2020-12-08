const { default: Navigation } = require("./Navigation")

const Header = () => {
    return (  
        <header>
            <Navigation />
            <h1>Your awesome traffic permit consultant.</h1>
            <a href="#" id="startBtn">GET STARTED &#8594;</a>
            <img src="/mobel.png" alt=""/>

    <style jsx>{`
        header {
            background: url(/Scene.png) left / cover no-repeat;
        }
        h1 {
            font-family: 'DM Serif Display', serif;
            color: #fff;
            font-size: 6.25rem;
            letter-spacing: .4rem;
            width: 50%;
            margin: 5rem 0 0 12.5rem;
            line-height: 6rem;
        }

        #startBtn {
            padding: 1rem 3rem;
            background: #EE4D47;
            border-radius: 5px;
            font-weight: 500;
            color: #fff;
            display: inline-block;
            margin: 10rem 0 0 12.5rem;
        }

        img {
            display: block;
            margin-top: 13rem;
        }
    
    `}</style>
        </header>
    );
}
 
export default Header;