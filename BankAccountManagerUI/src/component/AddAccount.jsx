import React, { useState } from "react";
import { createAccount } from "../api";

const AddAccount = () => {
  const [account, setAccount] = useState({
    accountHolder: "",
    accountType: "",
    balance: 0.0,
    openeDate: "",
  });

  const formhandling = async (e) => {
    e.preventDefault();

    await createAccount(account);

    // reset form after success
    setAccount({
      accountHolder: "",
      accountType: "",
      balance: 0.0,
      openeDate: "",
    });
  };

  const resetbtn = () => {
    setAccount({
      accountHolder: "",
      accountType: "",
      balance: 0.0,
      openeDate: "",
    });
  };

  return (
    <div className="max-w-2xl bg-white p-6 rounded-lg shadow">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Add Account</h1>

      {/* Form */}
      <form onSubmit={formhandling} className="space-y-5">
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
            placeholder="Enter account holder name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            required
            className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select account type</option>
            <option value="Savings">Savings</option>
            <option value="Current">Current</option>
            <option value="Salary">Salary</option>
          </select>
        </div>

        {/* Balance */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Balance
          </label>
          <input
            type="number"
            value={account.balance}
            onChange={(e) =>
              setAccount({ ...account, balance: Number(e.target.value) })
            }
            placeholder="Enter opening balance"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Open Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Open Date
          </label>
          <input
            type="date"
            value={account.openeDate}
            onChange={(e) =>
              setAccount({ ...account, openeDate: e.target.value })
            }
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Save
          </button>

          <button
            onClick={resetbtn}
            type="reset"
            className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAccount;
