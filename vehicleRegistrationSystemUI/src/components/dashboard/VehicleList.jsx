import React, { useEffect, useState } from "react";
import { viewAllData } from "../../api";

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const re = await viewAllData();
      setVehicles(re);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <table className="w-full">
          <thead>
            <tr className="p-2 bg-amber-300">
              <th>Name</th>
              <th>Vehicle Number</th>
              <th>Model</th>
              <th>Registration Year</th>
            </tr>
          </thead>
          <thead>
            {vehicles.map((da) => {
              return (
                <tr className="w-full">
                  <th>{da.ownerName}</th>
                  <th>{da.vehicleNumber}</th>
                  <th>{da.model}</th>
                  <th>{da.registrationYear}</th>
                </tr>
              );
            })}
          </thead>
        </table>
      </div>
    </div>
  );
};

export default VehicleList;
