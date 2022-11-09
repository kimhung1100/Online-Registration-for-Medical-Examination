import Header from '../DefaultLayout/Header';
import Footer from '../DefaultLayout/Footer';

function NotLinearBar({ children }) {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
}

export default NotLinearBar;
