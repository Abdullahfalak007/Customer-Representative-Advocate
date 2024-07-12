// import React from "react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Line,
// } from "recharts";
// import "../index.css"; // Import the CSS file for custom styles

// const data = [
//   { name: "Jan", bots: 400 },
//   { name: "Feb", bots: 300 },
//   { name: "Mar", bots: 200 },
//   { name: "Apr", bots: 278 },
//   { name: "May", bots: 189 },
//   { name: "Jun", bots: 239 },
//   { name: "Jul", bots: 349 },
//   { name: "Aug", bots: 200 },
//   { name: "Sep", bots: 300 },
//   { name: "Oct", bots: 250 },
//   { name: "Nov", bots: 150 },
//   { name: "Dec", bots: 200 },
// ];

// const TotalBotsChart = () => {
//   return (
//     <div
//       className="bg-[#EDF5FF] rounded-[1.21719rem] p-4"
//       style={{ width: "25.0625rem", height: "25.875rem" }}
//     >
//       <div style={{ paddingTop: "16px" }}>
//         <h3
//           className="font-poppins"
//           style={{
//             color: "#6C6A6A",
//             fontFamily: "Poppins",
//             fontSize: "0.85725rem",
//             fontWeight: "500",
//           }}
//         >
//           Total Bots
//         </h3>
//       </div>
//       <div className="chart-container">
//         <div style={{ width: "150%" }}>
//           <ResponsiveContainer width="100%" height={300}>
//             <AreaChart
//               data={data}
//               margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
//             >
//               <defs>
//                 <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0%" stopColor="#00B7FE" stopOpacity={1} />
//                   <stop offset="100%" stopColor="#5823FF" stopOpacity={1} />
//                 </linearGradient>
//               </defs>
//               <CartesianGrid stroke="#D9D9D9" vertical={false} />
//               <XAxis dataKey="name" interval={1} tick={{ dy: 10 }} />
//               <YAxis tick={{ dx: -10 }} style={{ marginLeft: "-10px" }} />
//               <Tooltip />
//               <Area
//                 type="linear"
//                 dataKey="bots"
//                 stroke="#8884d8"
//                 fill="url(#colorGradient)"
//               />
//               <Line
//                 type="linear"
//                 dataKey="bots"
//                 stroke="#8884d8"
//                 dot={{ r: 0 }} // remove dots on the line
//               />
//             </AreaChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TotalBotsChart;

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
} from "recharts";
import "../index.css"; // Import the CSS file for custom styles

const data = [
  { name: "Jan", bots: 400 },
  { name: "Feb", bots: 300 },
  { name: "Mar", bots: 200 },
  { name: "Apr", bots: 278 },
  { name: "May", bots: 189 },
  { name: "Jun", bots: 239 },
  { name: "Jul", bots: 349 },
  { name: "Aug", bots: 200 },
  { name: "Sep", bots: 300 },
  { name: "Oct", bots: 250 },
  { name: "Nov", bots: 150 },
  { name: "Dec", bots: 200 },
];

const TotalBotsChart = () => {
  return (
    <div className="bg-[#EDF5FF] rounded-[1.21719rem] p-4 w-[25.0625rem] h-[25.875rem]">
      <div className="pt-4">
        <h3 className="font-poppins text-[#6C6A6A] text-[0.85725rem] font-medium">
          Total Bots
        </h3>
      </div>
      <div className="chart-container">
        <div className="w-[150%]">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={data}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00B7FE" stopOpacity={1} />
                  <stop offset="100%" stopColor="#5823FF" stopOpacity={1} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#D9D9D9" vertical={false} />
              <XAxis dataKey="name" interval={1} tick={{ dy: 10 }} />
              <YAxis tick={{ dx: -10 }} style={{ marginLeft: "-10px" }} />
              <Tooltip />
              <Area
                type="linear"
                dataKey="bots"
                stroke="#8884d8"
                fill="url(#colorGradient)"
              />
              <Line
                type="linear"
                dataKey="bots"
                stroke="#8884d8"
                dot={{ r: 0 }} // remove dots on the line
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TotalBotsChart;
