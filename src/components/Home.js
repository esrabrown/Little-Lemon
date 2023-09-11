import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


const Home = ({bookingData}) => {
    console.log(bookingData);
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  };

  export default Home;