import CoverCharge from "./components/Cover-Charge";
import Header from "./components/Header";
import CategoriesCards from "./components/Categories-Cards";

export default async function Home() {

  return (
    <div className="flex items-center flex-col pb-40">
      <Header />
      <CoverCharge></CoverCharge>
      <CategoriesCards></CategoriesCards>
    </div>
  
  );
}