import CoverCharge from "./components/Cover-Charge";
import Header from "./components/Header";
import CategoriesCards from "./components/Categories-Cards";
import Social from "./components/Social";
import Footer from "./components/Footer";

export default async function Home() {

  return (
    <div className="flex items-center flex-col ">
      <Header />
      <Social></Social>
      <CoverCharge></CoverCharge>
      <CategoriesCards></CategoriesCards>
      <div className="flex-grow mb-48"></div>
      <Footer />
    </div>
  );
}