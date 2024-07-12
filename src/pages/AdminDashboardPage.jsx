// import React, { useState } from "react";
// import AdminSidebar from "../components/AdminSidebar";
// import Navbar from "../components/Navbar";
// import imagesPath from "../data/imagesPath.json";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   LabelList,
// } from "recharts";

// // Sample data for the chart
// const data = [
//   { name: "John", calls: 200, avatar: imagesPath.AdminDashboardPage.avatar1 },
//   { name: "Jane", calls: 150, avatar: imagesPath.AdminDashboardPage.avatar2 },
//   { name: "Tom", calls: 180, avatar: imagesPath.AdminDashboardPage.avatar3 },
//   { name: "Lucy", calls: 220, avatar: imagesPath.AdminDashboardPage.avatar4 },
//   { name: "Mike", calls: 160, avatar: imagesPath.AdminDashboardPage.avatar5 },
//   { name: "Emma", calls: 190, avatar: imagesPath.AdminDashboardPage.avatar6 },
// ];

// const CustomXAxisTick = ({ x, y, payload }) => {
//   const avatar = data[payload.index].avatar;
//   return (
//     <g transform={`translate(${x},${y})`}>
//       <image
//         href={avatar}
//         x={-12}
//         y={0}
//         width={24}
//         height={24}
//         style={{ borderRadius: "50%" }}
//       />
//     </g>
//   );
// };

// const CustomLabel = ({ x, y }) => {
//   return (
//     <image
//       xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSIxOSIgdmlld0JveD0iMCAwIDE5IDE5IiBmaWxsPSJub25lIj4KPGNpcmNsZSBjeD0iOS4zODgwNiIgY3k9IjkuNzk5MTkiIHI9IjguMDM0MjYiIGZpbGw9IiMwMEI3RkUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMi4yOTU1Ii8+Cjwvc3ZnPgo="
//       x={x - 3} // Center the SVG horizontally
//       y={y - 20} // Position the SVG above the bar
//       width={19}
//       height={19}
//     />
//   );
// };

// const AdminDashboardPage = () => {
//   const [selectedPage, setSelectedPage] = useState("Dashboard");

//   return (
//     <div className="flex min-h-screen w-full">
//       <AdminSidebar setSelectedPage={setSelectedPage} className="h-full" />
//       <div className="flex-1 flex flex-col">
//         <div className="w-full">
//           <Navbar
//             title={<span className="text-customBlue">Dashboard</span>}
//             showAddIcon={false}
//             showSearchBar={false}
//             showSecondSearchBar={false}
//           />
//         </div>
//         <div className="flex-1 p-4">
//           {/* Content of the dashboard page */}
//           <div className="grid grid-cols-4 gap-4 mb-4">
//             <div className="bg-customBlue rounded-[1.02206rem] w-[13.79775rem] h-[9.60731rem] shadow p-4 flex flex-col items-center justify-center">
//               <img
//                 src={imagesPath.AdminDashboardPage.totalClientsIcon}
//                 alt="Total Clients"
//                 className="w-12 h-12"
//               />
//               <h3 className="text-white font-poppins text-lg font-medium mt-2">
//                 Total Clients
//               </h3>
//               <p className="text-white font-poppins text-2xl font-semibold">
//                 67
//               </p>
//             </div>
//             <div className="bg-[#6049cd] rounded-[1.02206rem] w-[13.79775rem] h-[9.60731rem] shadow p-4 flex flex-col items-center justify-center">
//               <img
//                 src={imagesPath.AdminDashboardPage.totalAssistantsIcon}
//                 alt="Total Assistants"
//                 className="w-12 h-12"
//               />
//               <h3 className="text-white font-poppins text-lg font-medium mt-2">
//                 Total Assistants
//               </h3>
//               <p className="text-white font-poppins text-2xl font-semibold">
//                 12
//               </p>
//             </div>
//             <div className="bg-[#fa992a] rounded-[1.02206rem] w-[13.79775rem] h-[9.60731rem] shadow p-4 flex flex-col items-center justify-center">
//               <img
//                 src={imagesPath.AdminDashboardPage.totalBotsIcon}
//                 alt="Total Bots"
//                 className="w-12 h-12"
//               />
//               <h3 className="text-white font-poppins text-lg font-medium mt-2">
//                 Total Bots
//               </h3>
//               <p className="text-white font-poppins text-2xl font-semibold">
//                 500
//               </p>
//             </div>
//             <div className="bg-[#03a7cb] rounded-[1.02206rem] w-[13.79775rem] h-[9.60731rem] shadow p-4 flex flex-col items-center justify-center">
//               <img
//                 src={imagesPath.AdminDashboardPage.assignVAIcon}
//                 alt="Assign VA"
//                 className="w-12 h-12"
//               />
//               <h3 className="text-white font-poppins text-lg font-medium mt-2">
//                 Assign VA
//               </h3>
//             </div>
//           </div>
//           <div className="bg-white rounded shadow p-4 mb-4">
//             <h3 className="text-customBlue font-poppins text-lg font-medium mb-4">
//               Number of Calls
//             </h3>
//             <ResponsiveContainer
//               width="100%"
//               height={350}
//               style={{ backgroundColor: "#EDF5FF", borderRadius: "10px" }}
//             >
//               <BarChart data={data} margin={{ top: 20 }}>
//                 <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                 <XAxis dataKey="name" tick={<CustomXAxisTick />} />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar
//                   dataKey="calls"
//                   fill="url(#colorUv)"
//                   barSize={12} // width of the bar in pixels
//                 >
//                   <LabelList dataKey="calls" content={CustomLabel} />
//                 </Bar>
//                 <defs>
//                   <linearGradient id="colorUv" x1="0" y1="1" x2="0" y2="0">
//                     <stop offset="0%" stopColor="#00B7FE" stopOpacity={1} />
//                     <stop offset="100%" stopColor="#5823FF" stopOpacity={1} />
//                   </linearGradient>
//                 </defs>
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             <div className="bg-white rounded shadow p-4">
//               <h3 className="text-customBlue font-poppins text-lg font-medium mb-4">
//                 Total Bots
//               </h3>
//               {/* Placeholder for chart */}
//               <div className="h-64">Chart here</div>
//             </div>
//             <div className="bg-white rounded shadow p-4">
//               <h3 className="text-customBlue font-poppins text-lg font-medium mb-4">
//                 Total Clients
//               </h3>
//               {/* Placeholder for chart */}
//               <div className="h-64">Chart here</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboardPage;

import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import Navbar from "../components/Navbar";
import imagesPath from "../data/imagesPath.json";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

// Sample data for the chart
const data = [
  { name: "John", calls: 200, avatar: imagesPath.AdminDashboardPage.avatar1 },
  { name: "Jane", calls: 150, avatar: imagesPath.AdminDashboardPage.avatar2 },
  { name: "Tom", calls: 180, avatar: imagesPath.AdminDashboardPage.avatar3 },
  { name: "Lucy", calls: 220, avatar: imagesPath.AdminDashboardPage.avatar4 },
  { name: "Mike", calls: 160, avatar: imagesPath.AdminDashboardPage.avatar5 },
  { name: "Emma", calls: 190, avatar: imagesPath.AdminDashboardPage.avatar6 },
];

const CustomXAxisTick = ({ x, y, payload }) => {
  const avatar = data[payload.index].avatar;
  return (
    <g transform={`translate(${x},${y})`}>
      <image
        href={avatar}
        x={-12}
        y={0}
        width={24}
        height={24}
        style={{ borderRadius: "50%" }}
      />
    </g>
  );
};

const CustomLabel = ({ x, y }) => {
  return (
    <image
      xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSIxOSIgdmlld0JveD0iMCAwIDE5IDE5IiBmaWxsPSJub25lIj4KPGNpcmNsZSBjeD0iOS4zODgwNiIgY3k9IjkuNzk5MTkiIHI9IjguMDM0MjYiIGZpbGw9IiMwMEI3RkUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMi4yOTU1Ii8+Cjwvc3ZnPgo="
      x={x - 3} // Center the SVG horizontally
      y={y - 20} // Position the SVG above the bar
      width={19}
      height={19}
    />
  );
};

const AdminDashboardPage = () => {
  const [selectedPage, setSelectedPage] = useState("Dashboard");

  return (
    <div className="flex min-h-screen w-full">
      <AdminSidebar setSelectedPage={setSelectedPage} className="h-full" />
      <div className="flex-1 flex flex-col">
        <div className="w-full">
          <Navbar
            title={<span className="text-customBlue">Dashboard</span>}
            showAddIcon={false}
            showSearchBar={false}
            showSecondSearchBar={false}
          />
        </div>
        <div className="flex-1 p-4">
          {/* Content of the dashboard page */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="bg-customBlue rounded-[1.02206rem] w-[13.79775rem] h-[9.60731rem] shadow p-4 flex flex-col items-center justify-center">
              <img
                src={imagesPath.AdminDashboardPage.totalClientsIcon}
                alt="Total Clients"
                className="w-12 h-12"
              />
              <h3 className="text-white font-poppins text-lg font-medium mt-2">
                Total Clients
              </h3>
              <p className="text-white font-poppins text-2xl font-semibold">
                67
              </p>
            </div>
            <div className="bg-[#6049cd] rounded-[1.02206rem] w-[13.79775rem] h-[9.60731rem] shadow p-4 flex flex-col items-center justify-center">
              <img
                src={imagesPath.AdminDashboardPage.totalAssistantsIcon}
                alt="Total Assistants"
                className="w-12 h-12"
              />
              <h3 className="text-white font-poppins text-lg font-medium mt-2">
                Total Assistants
              </h3>
              <p className="text-white font-poppins text-2xl font-semibold">
                12
              </p>
            </div>
            <div className="bg-[#fa992a] rounded-[1.02206rem] w-[13.79775rem] h-[9.60731rem] shadow p-4 flex flex-col items-center justify-center">
              <img
                src={imagesPath.AdminDashboardPage.totalBotsIcon}
                alt="Total Bots"
                className="w-12 h-12"
              />
              <h3 className="text-white font-poppins text-lg font-medium mt-2">
                Total Bots
              </h3>
              <p className="text-white font-poppins text-2xl font-semibold">
                500
              </p>
            </div>
            <div className="bg-[#03a7cb] rounded-[1.02206rem] w-[13.79775rem] h-[9.60731rem] shadow p-4 flex flex-col items-center justify-center">
              <img
                src={imagesPath.AdminDashboardPage.assignVAIcon}
                alt="Assign VA"
                className="w-12 h-12"
              />
              <h3 className="text-white font-poppins text-lg font-medium mt-2">
                Assign VA
              </h3>
            </div>
          </div>
          <div
            className="bg-white rounded shadow p-4 pt-10 mb-4"
            style={{ backgroundColor: "#EDF5FF", borderRadius: "10px" }}
          >
            <h3 className="text-[#6C6A6A] font-poppins text-[0.85725rem] font-medium mb-4 ml-12">
              Number of Calls
            </h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={data} margin={{ top: 20 }}>
                <CartesianGrid stroke="#D9D9D9" vertical={false} />
                <XAxis dataKey="name" tick={<CustomXAxisTick />} />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="calls"
                  fill="url(#colorUv)"
                  barSize={12} // width of the bar in pixels
                >
                  <LabelList dataKey="calls" content={CustomLabel} />
                </Bar>
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#00B7FE" stopOpacity={1} />
                    <stop offset="100%" stopColor="#5823FF" stopOpacity={1} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded shadow p-4">
              <h3 className="text-customBlue font-poppins text-lg font-medium mb-4">
                Total Bots
              </h3>
              {/* Placeholder for chart */}
              <div className="h-64">Chart here</div>
            </div>
            <div className="bg-white rounded shadow p-4">
              <h3 className="text-customBlue font-poppins text-lg font-medium mb-4">
                Total Clients
              </h3>
              {/* Placeholder for chart */}
              <div className="h-64">Chart here</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
