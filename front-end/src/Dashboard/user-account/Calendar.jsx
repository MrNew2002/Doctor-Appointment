import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import DoctorCard from "../../compoments/Doctors/DoctorCard";
import Loading from "../../compoments/Loader/Loading";
import Error from "../../compoments/Error/Error";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useEffect, useRef } from "react";
const Calendar = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);
  const handleDateClick = (e) => {
    console.log("🚀 ~ handleDateClick ~ e:", e.event);
    //alert(e.event);
  };
  const calendarRef = useRef(null);
  const approvedAppointments = appointments.filter(
    (appointment) => appointment.status === "approved"
  );
  const generateEvents = () => {
    // Logic để tạo sự kiện tự động ở đây
    const events = [];
    approvedAppointments?.map((item) => {
      events.push({
        title: `Meeting ${item.doctor.name}`,
        date: `${item.date}`,
      });
    });
    return events;
  };
  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errMessage={error} />}
      {!loading && !error && (
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin]}
          events={generateEvents()}
          eventClick={(e) => handleDateClick(e)}
        />
      )}
      {!loading && !error && appointments.length === 0 && (
        <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor">
          you did not book any doctor yet!
        </h2>
      )}
    </div>
  );
};

export default Calendar;
