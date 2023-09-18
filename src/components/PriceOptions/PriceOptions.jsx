import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      features: [
        "Access to gym facilities",
        "Cardio equipment usage",
        "Locker room access",
      ],
      price: 29.99,
    },
    {
      id: 2,
      name: "Premium Membership",
      features: [
        "Access to gym facilities",
        "Cardio equipment usage",
        "Locker room access",
        "Strength training equipment usage",
        "Group fitness classes",
      ],
      price: 49.99,
    },
    {
      id: 3,
      name: "Family Membership",
      features: [
        "Access to gym facilities",
        "Cardio equipment usage",
        "Locker room access",
        "Strength training equipment usage",
        "Group fitness classes",
        "Childcare services (limited hours)",
      ],
      price: 79.99,
    },
    {
      id: 4,
      name: "Student Membership",
      features: [
        "Access to gym facilities",
        "Cardio equipment usage",
        "Locker room access",
        "Strength training equipment usage",
        "Group fitness classes",
        "Valid student ID required",
      ],
      price: 24.99,
    },
    {
      id: 5,
      name: "Senior Membership",
      features: [
        "Access to gym facilities",
        "Cardio equipment usage",
        "Locker room access",
        "Senior fitness classes",
        "Sauna and hot tub access",
      ],
      price: 39.99,
    },
    {
      id: 6,
      name: "Corporate Membership",
      features: [
        "Access to gym facilities",
        "Cardio equipment usage",
        "Locker room access",
        "Strength training equipment usage",
        "Group fitness classes",
        "Access for up to 5 employees",
      ],
      price: 199.99,
    },
  ];
  return (
    <div className="m-10">
      <h2 className="text-5xl ">Best Prices in the town</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
