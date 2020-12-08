import Head from "next/head"
import Header from "./Header";
import Footer from "./Footer"

const Layout = ({children}) => {
    return (  
        <main>
            <Head>
                <title>Trafico</title>
            </Head>
            <Header />
            {children}
            <Footer />
        </main>
    );
}
 
export default Layout;