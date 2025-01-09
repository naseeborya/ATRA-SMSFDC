"use client";
import { useState, useEffect, useRef, use } from "react";
import { TbFilterCog } from "react-icons/tb";
import { IoReorderThreeOutline } from "react-icons/io5";
import { SlRefresh } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/navigation";
import requestedTable from "@/app/lib/constants/requested-table";

import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

export default function RequestedForms({ params }) {
  const resolvedParams = use(params); // Unwrap the params Promise
  const locale = resolvedParams?.locale || "en"; // Safely access `locale` with a fallback

  // alert(locale);

  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(requestedTable);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Added state for rows per page
  const [selectedRow, setSelectedRow] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedFormType, setSelectedFormType] = useState(null);
  const router = useRouter();
  // Refs for dropdowns
  const filterDropdownRef = useRef(null);
  const operationDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        filterDropdownRef.current &&
        !filterDropdownRef.current.contains(event.target)
      ) {
        setIsDropdownVisible(false);
      }
      if (
        operationDropdownRef.current &&
        !operationDropdownRef.current.contains(event.target)
      ) {
        setSelectedRow(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleFilterSelect = (formType) => {
    setSelectedFormType(formType);
    setIsDropdownVisible(false);
  };

  const handleRefresh = () => {
    console.log("Refreshed");
  };

  const handleEdit = (row) => {
    router.push(`requested-form/${row.id}/edit`);
  };
  const handleDelete = (row) => {
    alert(`Delete ${row.id}`);
    setSelectedRow(null);
  };
  const handleView = (row) => {
    router.push(`requested-form/${row.id}`);
  };

  const filteredData =
    data
      ?.filter((row) =>
        row.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
      ?.filter((row) =>
        selectedFormType ? row.formType === selectedFormType : true
      ) || [];

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Header with Filters */}
      <div dir="ltr" className="flex items-center justify-between mb-4">
        <div className="relative" ref={filterDropdownRef}>
          <button onClick={toggleDropdown}>
            <div className="text-center space-x-2 flex text-brand-primary p-4 rounded-2xl bg-white border border-brand-light">
              <TbFilterCog
                strokeWidth={1}
                className="text-brand-primary text-2xl"
              />
              <p className="text-base font-normal">Filter</p>
            </div>
          </button>
          {isDropdownVisible && (
            <div className="absolute left-0 mt-2 w-48 bg-white border border-brand-light rounded-2xl shadow-lg z-10">
              <ul className="p-2 space-y-2">
                <li
                  className="text-sm text-brand-primary cursor-pointer hover:bg-gray-100 p-2 rounded-xl"
                  onClick={() => handleFilterSelect("Frequency")}
                >
                  Frequency
                </li>
                <li
                  className="text-sm text-brand-primary cursor-pointer hover:bg-gray-100 p-2 rounded-xl"
                  onClick={() => handleFilterSelect("AnotherFormType")}
                >
                  AnotherFormType
                </li>
                <li
                  className="text-sm text-brand-primary cursor-pointer hover:bg-gray-100 p-2 rounded-xl"
                  onClick={() => handleFilterSelect(null)}
                >
                  Clear Filter
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <IoSearchOutline
              size={30}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search"
              className="text-brand-primary pl-12 py-4 rounded-2xl bg-white border border-brand-light focus:ring-1/2 focus:ring-brand-primary focus:border-brand-primary outline-none w-96 "
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button
            onClick={handleRefresh}
            className=" bg-brand-secondary rounded-2xl text-white p-4  text-center"
          >
            <SlRefresh size={24} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-gray-200">
          <thead className=" text-brand-primary text-base">
            <tr className="text-center">
              <th className="pb-6 px-4">Form No</th>
              <th className="pb-6 px-4">User</th>
              <th className="pb-6 px-4">Email</th>
              <th className="pb-6 px-4">Form Type</th>
              <th className="pb-6 px-4">Status</th>
              <th className="pb-6 px-4">Placed</th>
              <th className="pb-6 px-4">Operations</th>
            </tr>
          </thead>

          <tbody className="space-y-2 text-brand-primary  ">
            {paginatedData?.length > 0 ? (
              paginatedData.map((row, index) => (
                <tr
                  key={row.id}
                  className={`hover:bg-gray-200 rounded-md py-4 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-100"
                  }`}
                >
                  <td className="py-3 px-4 rounded-s-lg">{row.id}</td>
                  <td className="py-3 px-4">{row.user}</td>
                  <td className="py-3 px-4">{row.email}</td>
                  <td className="py-3 px-4">{row.formType}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded text-white ${
                        row.status === "Approved"
                          ? "bg-yellow-500"
                          : "bg-blue-500"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{row.placed}</td>
                  <td className="py-3 px-4 rounded-e-lg">
                    <div className="relative" ref={operationDropdownRef}>
                      <button
                        onClick={() =>
                          setSelectedRow(selectedRow === row.id ? null : row.id)
                        }
                        className="bg-gray-100 px-2 py-1 rounded-lg text-[25px] text-brand-primary hover:bg-brand-secondary hover:text-white ml-7 "
                      >
                        <IoReorderThreeOutline />
                      </button>
                      {selectedRow === row.id && (
                        // <div
                        //   className={` absolute  ${
                        //     locale === "en" ? "right-0" : "left-0"
                        //   }  mt-[-40%] w-auto bg-white border border-gray-300 shadow-lg rounded-2xl z-10`}
                        //   style={{ overflow: "visible" }}
                        // >
                        //   <ul className="flex items-start justify-center p-1">
                        //     <li
                        //       className="text-sm text-brand-primary cursor-pointer hover:bg-gray-100 p-2 rounded-xl"
                        //       onClick={() => handleEdit(row)}
                        //     >
                        //       Edit
                        //     </li>

                        //     <li
                        //       className="text-sm text-brand-primary cursor-pointer hover:bg-gray-100 p-2 rounded-xl"
                        //       onClick={() => handleDelete(row)}
                        //     >
                        //       Delete
                        //     </li>
                        //     <li
                        //       className="text-sm text-brand-primary cursor-pointer hover:bg-gray-100 p-2 rounded-xl "
                        //       onClick={() => handleView(row)}
                        //     >
                        //       View
                        //     </li>
                        //   </ul>
                        // </div>

                        <div
                          className={`absolute ${
                            locale === "en" ? "right-0" : "left-0"
                          } mt-[-40%] w-auto bg-white border border-gray-300 shadow-lg rounded-2xl z-10`}
                          style={{ overflow: "visible" }}
                        >
                          <ul className="flex items-start justify-center p-1 space-x-2">
                            {[
                              {
                                icon: <FaEdit />,
                                label: "Edit",
                                action: handleEdit,
                              },
                              {
                                icon: <FaTrash />,
                                label: "Delete",
                                action: handleDelete,
                              },
                              {
                                icon: <FaEye />,
                                label: "View",
                                action: handleView,
                              },
                            ].map(({ icon, label, action }, index) => (
                              <li
                                key={index}
                                className="relative group text-brand-primary cursor-pointer hover:bg-gray-100 p-2 rounded-xl"
                                onClick={() => action(row)}
                              >
                                <div className="text-lg">{icon}</div>
                                {/* Tooltip */}
                                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                  {label}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="py-4 px-4 text-center text-gray-500">
                  No data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <hr className="border-t-1 mt-4 border-brand-light " />

      {/* Pagination */}
      <div dir="ltr" className="flex justify-between items-center mt-2    ">
        <div className="flex items-center">
          <select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className=" p-4 border border-brand-light rounded-xl bg-white text-brand-primary "
          >
            {[5, 10, 16, 20].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span className="ml-2 text-gray-500"> per page</span>
        </div>

        <div className="flex items-center gap-3">
          <div>
            <div className="flex items-center text-brand-primary">
              <span className="text-base font-medium">{currentPage}</span>
              <span className="mx-2 text-gray-500">of</span>
              <span className="text-base font-medium">{totalPages}</span>
            </div>
          </div>
          <div>
            <div className="flex space-x-2">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={` rounded-xl p-4 hover:bg-brand-secondary hover:text-white   ${
                  currentPage === 1
                    ? " bg-white text-gray-400 border border-brand-light "
                    : " bg-white text-brand-primary border border-brand-light"
                }`}
              >
                <BsArrowLeft size={20} />
              </button>
              {/* bg-brand-secondary rounded-2xl text-white p-4 text-center */}
              <button
                onClick={() =>
                  handlePageChange(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className={`rounded-xl p-4 hover:bg-brand-secondary hover:text-white ${
                  currentPage === totalPages
                    ? "bg-white text-gray-400 border border-brand-light"
                    : "bg-white text-brand-primary border border-brand-light"
                }`}
              >
                <BsArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
