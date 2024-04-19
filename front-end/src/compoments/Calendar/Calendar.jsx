/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import {
  useSession,
  useSupabaseClient,
  useSessionContext,
} from "@supabase/auth-helpers-react";
import moment from "moment";
import convertTime from "../../utils/convertTime";
function Calendar({ timeSlots, doctorName }) {
  console.log("🚀 ~ Calendar ~ timeSlots:", timeSlots);
  const eventName = `Medical appointment with Dr. ${doctorName} `;

  const [eventDescription, setEventDescription] = useState("");

  const session = useSession(); // tokens, when session exists we have a user
  const supabase = useSupabaseClient(); // talk to supabase!
  const { isLoading } = useSessionContext();

  if (isLoading) {
    return <></>;
  }
  async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        scopes: "https://www.googleapis.com/auth/calendar",
      },
    });
    if (error) {
      alert("Error logging in to Google provider with Supabase");
      console.log(error);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  async function createCalendarEvent() {
    console.log("Creating calendar event");
    const event = {
      summary: eventName,
      description: eventDescription,
      start: {
        dateTime: moment(
          timeSlots.date + " " + timeSlots.time.endingTime
        ).toISOString(), // Date.toISOString() ->
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // America/Los_Angeles
      },
      end: {
        dateTime: moment(
          timeSlots.date + " " + timeSlots.time.endingTime
        ).toISOString(), // Date.toISOString() ->
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // America/Los_Angeles
      },
    };
    await fetch(
      "https://www.googleapis.com/calendar/v3/calendars/primary/events",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + session.provider_token, // Access token for google
        },
        body: JSON.stringify(event),
      }
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        alert("Event created, check your Google Calendar!");
      });
  }

  return (
    <div className="w-96 m-auto mt-8">
      <div className="text-[20px] leading-[30px] text-headingColor font-semiblod flex items-center gap-2">
        Add events to Google Calendar
      </div>
      {session ? (
        <>
          <div className="mt-[30px]">
            <p className="text__para mt-0 font-semibold text-headingColor">
              Time Slots:
            </p>
            {timeSlots.time.day != "" ? (
              <div>
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
                <p className="mt-4">Event description</p>
                <input
                  type="text"
                  onChange={(e) => setEventDescription(e.target.value)}
                  className="mt-2 border p-2 rounded"
                />
                <button
                  onClick={() => createCalendarEvent()}
                  className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Create Calendar Event
                </button>
              </div>
            ) : (
              <div className="text-[20px] leading-[30px] text-headingColor font-semiblod flex items-center gap-2">
                Choose time Slots
              </div>
            )}
          </div>
          <p className="mt-4"></p>
          <button
            onClick={() => signOut()}
            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => googleSignIn()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign In With Google
          </button>
        </>
      )}
    </div>
  );
}

export default Calendar;
