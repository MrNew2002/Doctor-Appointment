import { useState } from "react";
import { formateDate } from "../../utils/formatdate";
import { Modal } from "antd";
import { BASE_URL } from "../../config";
import { toast } from "react-toastify";
/* eslint-disable react/prop-types */
const Appointments = ({ appointments }) => {
  const [formData, setFormData] = useState({
    isPaid: false,
    status: "pending",
  });
  const [bookingId, setBookingId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleEditBooking = (data) => {
    return async () => {
      setFormData({
        isPaid: data?.isPaid,
        status: data?.status,
      });
      setBookingId(data._id);
      setIsModalOpen(true);
    };
  };
  const handleInputOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const updateBookingHandler = async () => {
    try {
      const res = await fetch(`${BASE_URL}/bookings/${bookingId}`, {
        method: "Put",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (!res.ok) {
        throw Error();
      }
      setIsModalOpen(false);
      toast.success(result.message);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <table className="w-full text-left text-sm text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              name
            </th>
            <th scope="col" className="px-6 py-3">
              payment
            </th>
            <th scope="col" className="px-6 py-3">
              status
            </th>
            <th scope="col" className="px-6 py-3">
              price
            </th>
            <th scope="col" className="px-6 py-3">
              booked on
            </th>
            <th scope="col" className="px-6 py-3">
              action
            </th>
          </tr>
        </thead>
        <tbody>
          {appointments?.map((item) => (
            <tr key={item._id}>
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
              >
                <img
                  src={item?.user?.photo}
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
                <div className="pl-3">
                  <div className="text-base font-semibold">
                    {item?.user?.name}
                  </div>
                  <div className="text-normal text-gray-500">
                    {item?.user?.email}
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">
                {item.isPaid && (
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                    Paid
                  </div>
                )}
                {!item.isPaid && (
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                    Unpaid
                  </div>
                )}
              </td>
              <td className="px-6 py-4">{item.status}</td>
              <td className="px-6 py-4">{item.ticketPrice}</td>
              <td className="px-6 py-4">{formateDate(item.createdAt)}</td>
              <td className="px-6 py-4">
                <button
                  onClick={handleEditBooking(item)}
                  className="w-full bg-[#32cf32] p-3 text-[16px] leading-7 rounded-md text-white"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        open={isModalOpen}
        onOk={updateBookingHandler}
        onCancel={handleCancel}
      >
        <div>
          <p className="form__label">Payment*</p>
          <select
            name="isPaid"
            value={formData.isPaid}
            onChange={handleInputOnChange}
            className="form__input py-3.5"
          >
            <option value="">Select</option>
            <option value={true}>Paid</option>
            <option value={false}>Unpaid</option>
          </select>
        </div>
        <div>
          <p className="form__label">Status*</p>
          <select
            name="status"
            value={formData.status}
            onChange={handleInputOnChange}
            className="form__input py-3.5"
          >
            <option value="">Select</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </Modal>
    </>
  );
};

export default Appointments;
