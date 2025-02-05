import Header from "../components/common/Header";
import ProductAddForm from "../components/products/ProductAddForm";


const Addproduct = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Add products" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* SALES STATS */}
      
      </main>
      <section>
        <ProductAddForm />
      </section>
    </div>
  );
};
export default Addproduct;
