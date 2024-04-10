import React, { useState } from "react";
import doctorImg from "../../assets/images/doctor-img02.png";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import { Feedback } from "./Feedback";
import SidePanel from "./SidePanel";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../compoments/Loader/Loading.jsx";
import Error from "../../compoments/Error/Error.jsx";
import { useParams } from "react-router-dom";
import convertTime from "../../utils/convertTime.js";
import moment from "moment";
const DoctorDetail = () => {
  const [tab, setTab] = useState("about");
  const { id } = useParams();
  const {
    data: doctor,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors/${id}`);
  const {
    name,
    qualifications,
    experiences,
    timeSlots,
    reviews,
    bio,
    about,
    averageRating,
    totalRating,
    specialization,
    ticketPrice,
    photo,
  } = doctor;
  const [formData, setFormData] = useState({
    date: "",
    time: {
      day: "",
      startingTime: "00:00",
      endingTime: "00:00",
    },
  });
  const handleInputOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && <Loader />}
        {error && <Error />}
        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-[50px]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-5">
                <figure className="max-w-[200px] max-h-[200px]">
                  <img src={photo} className="w-full" alt="" />
                </figure>

                <div>
                  <span
                    className="bg-[#CCF0F3] text-irisBlueColor py-1 lg:py-2 lg:px-6 text-[12px]
                    leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded"
                  >
                    {specialization}
                  </span>
                  <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                    {name}
                  </h3>
                  <div className="flex items-center gap-[6px]">
                    <span
                      className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px]
                        lg:leading-7 font-semibold text-headingColor"
                    >
                      <img src={starIcon} alt="" />
                      {averageRating}
                    </span>
                    <span
                      className="text-[14px] leading-5 lg:text-[16px]
                        lg:leading-7 font-semibold text-textColor"
                    >
                      ({totalRating})
                    </span>
                  </div>

                  <p className="text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]">
                    {bio}
                  </p>
                </div>
              </div>
              <div>
                <div className="pt-5 w-[200px]">
                  <p className="form__label">Date:</p>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    className="form__input"
                    onChange={(e) => handleInputOnChange(e)}
                  />
                </div>
                {formData.date != "" && (
                  <>
                    <p className="form__label">Time:</p>
                    <div className="flex items-center gap-5">
                      {timeSlots
                        ?.filter((item) => {
                          const dayOfWeek = moment(formData.date)
                            .format("dddd")
                            .toLowerCase();
                          return item.day === dayOfWeek;
                        })
                        ?.map((item, index) => (
                          <span
                            key={index}
                            name="timeSlots"
                            onClick={() =>
                              setFormData({ ...formData, time: item })
                            }
                            className="bg-[#CCF0F3] text-irisBlueColor py-1 lg:py-2 lg:px-6 text-[12px]
                            leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded cursor-pointer"
                          >
                            {convertTime(item.startingTime)} -
                            {convertTime(item.endingTime)}
                          </span>
                        ))}
                    </div>
                  </>
                )}
              </div>

              <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                <button
                  onClick={() => setTab("about")}
                  className={` ${
                    tab == "about" &&
                    "border-b border-solid border-primaryColor"
                  }py-2 px-5 mr-5 text-[16px] leading-7
             text-headingColor font-semibold`}
                >
                  About
                </button>
                <button
                  onClick={() => setTab("feedback")}
                  className={` ${
                    tab === "feedback" &&
                    "border-b border-solid border-primaryColor"
                  }py-2 px-5 mr-5 text-[16px] leading-7
             text-headingColor font-semibold`}
                >
                  Feedback
                </button>
              </div>

              <div className="mt-[50px] ">
                {tab == "about" && (
                  <DoctorAbout
                    name={name}
                    about={about}
                    qualifications={qualifications}
                    experiences={experiences}
                  />
                )}
                {tab == "feedback" && (
                  <Feedback reviews={reviews} totalRating={totalRating} />
                )}
              </div>
            </div>
            <div>
              <SidePanel
                doctorId={doctor._id}
                ticketPrice={ticketPrice}
                timeSlots={formData}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorDetail;
