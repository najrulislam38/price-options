import axios from "axios";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { Audio } from "react-loader-spinner";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  axios("https://openapi.programming-hero.com/api/phones?search=iphone").then(
    (data) => {
      const phoneData = data.data.data;
      const phoneWithFakeData = phoneData.map((phone) => {
        const obj = {
          name: phone.phone_name,
          price: parseInt(phone.slug.split("-")[1]),
        };
        return obj;
      });
      setLoading(false);
      setPhones(phoneWithFakeData);
    }
  );
  return (
    <div>
      <div>
        {loading && (
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        )}
      </div>
      <h2 className="text-5xl">Phones: {phones.length}</h2>
      <BarChart width={600} height={400} data={phones}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Phones;
