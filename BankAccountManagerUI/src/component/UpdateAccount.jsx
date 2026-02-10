import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAccountById, updateAccount } from "../api";

const UpdateAccount = () => {
  const { id } = useParams();
  const [account, setAccount] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      const re = await getAccountById(id);
      setAccount(re.data);
    };
    fetchdata();
  }, []);

  const updatedata = async () => {
    await updateAccount(id, account);
  };

  return (
    <div className="max-w-2xl bg-white p-6 rounded-lg shadow">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Update Account</h1>

      {/* Update Form */}
      <form className="space-y-5">
        {/* Account Holder */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Account Holder
          </label>
          <input
            type="text"
            value={account.accountHolder}
            onChange={(e) =>
              setAccount({ ...account, accountHolder: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Account Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Account Type
          </label>
          <select
            value={account.accountType}
            onChange={(e) =>
              setAccount({ ...account, accountType: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Savings</option>
            <option>Current</option>
            <option>Salary</option>
          </select>
        </div>

        {/* Balance */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Balance
          </label>
          <input
            value={account.balance}
            onChange={(e) =>
              setAccount({ ...account, balance: Number(e.target.value) })
            }
            type="number"
            placeholder="Update balance"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Open Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Open Date
          </label>
          <input
            value={account.openeDate}
            onChange={(e) =>
              setAccount({ ...account, openeDate: e.target.value })
            }
            type="date"
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            disabled
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            onClick={() => {
              updatedata();
              alert("Successfully Updated!");
              navigate("/viewaccount");
            }}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Update
          </button>

          <button
            type="reset"
            className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateAccount;
