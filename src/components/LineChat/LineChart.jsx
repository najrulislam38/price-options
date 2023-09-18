import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const studentData = [
    { id: 1, name: "Alice", math: 90, physics: 85, chemistry: 95 },
    { id: 2, name: "Bob", math: 78, physics: 92, chemistry: 88 },
    { id: 3, name: "Charlie", math: 86, physics: 89, chemistry: 91 },
    { id: 4, name: "David", math: 92, physics: 79, chemistry: 87 },
    { id: 5, name: "Eve", math: 75, physics: 88, chemistry: 94 },
    { id: 6, name: "Frank", math: 89, physics: 76, chemistry: 83 },
    { id: 7, name: "Grace", math: 94, physics: 85, chemistry: 90 },
    { id: 8, name: "Helen", math: 81, physics: 93, chemistry: 88 },
    { id: 9, name: "Ivy", math: 87, physics: 82, chemistry: 95 },
    { id: 10, name: "Jack", math: 72, physics: 90, chemistry: 89 },
  ];

  return (
    <div>
      <LChart width={800} height={400} data={studentData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey={"math"} stroke="red"></Line>
        <Line dataKey={"physics"} stroke="black"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
