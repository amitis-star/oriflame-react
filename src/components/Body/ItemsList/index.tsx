import "../../../assets/styles/index.css";

const categories = [
  "ECATALOGUE",
  "NUTRITION",
  "SKIN CARE",
  "MAKE UP",
  "FRAGRANCE",
  "BATH & BODY",
  "HAIR",
  "ACCESSORIES",
  "MEN",
  "KIDS & BABY",
];

const ItemsList = () => (
  <div className="w-full h-13 flex justify-center items-center gap-7">
    {categories.map((category) => (
      <button
        key={category}
        className="text-14 text-gray-800 font-600 hover:text-gray-500"
        type="button"
      >
        {category}
      </button>
    ))}
  </div>
);

export default ItemsList;
