import CoverCharge from "./components/Cover-Charge";
import Header from "./components/Header";
import CategoriesCards from "./components/Categories-Cards";
import Social from "./components/Social";
import Footer from "./components/Footer";
import LoaderWrapper from "./components/Loader";

export default async function Home() {

  return (
    <LoaderWrapper>
      <div className="flex items-center flex-col">
        <Header/>
        <Social/>
        <CoverCharge/>
        <CategoriesCards/>
        <div className="flex-grow mb-[27rem]"/>
          <Footer />
      </div>
    </LoaderWrapper>
  );
}