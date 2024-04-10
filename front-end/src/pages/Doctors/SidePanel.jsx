/* eslint-disable react/prop-types */
import convertTime from "../../utils/convertTime";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";
import moment from "moment";
const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
  console.log("🚀 ~ SidePanel ~ timeSlots:", JSON.stringify(timeSlots));
  const bookingHandler = async () => {
    try {
      const res = await fetch(`${BASE_URL}/bookings/checkout/${doctorId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(timeSlots),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message + "." + "Please try again");
      }
      toast.success("Booking successful");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          {ticketPrice} VND
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor">
          Time Slots:
        </p>
        {timeSlots.time.day != "" && (
          <ul className="mt-3">
            <li className="flex items-center justify-between mb-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {timeSlots.time.day.charAt(0).toUpperCase() +
                  timeSlots.time.day.slice(1)}
              </p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {moment(timeSlots.date).format("DD/MM/YYYY")}
              </p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {convertTime(timeSlots.time.startingTime)} -
                {convertTime(timeSlots.time.endingTime)}
              </p>
            </li>
          </ul>
        )}
      </div>

      <button onClick={bookingHandler} className="btn px-2 w-full rounded-md">
        Book Appointment
      </button>
    </div>
  );
};

export default SidePanel;
