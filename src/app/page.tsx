import CategoriesCards from "./components/Categories-Cards";
import Header from "./components/Header";

export default async function Home() {

  return (
    <div className="flex items-center flex-col pb-40">
      <Header />
      <CategoriesCards/>
    </div>
  
  );
}