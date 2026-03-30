import CoverCharge from "./components/Cover-Charge";
import Header from "./components/Header";
import CategoriesCards from "./components/Categories-Cards";
import Social from "./components/Social";

export default async function Home() {

  return (
    <div className="flex items-center flex-col pb-40">
      <Header />
      <Social></Social>
      <CoverCharge></CoverCharge>
      <CategoriesCards></CategoriesCards>
    </div>
  
  );
}