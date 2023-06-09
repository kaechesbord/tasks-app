import React, { useEffect, useState } from "react";
import "./Tab.css";
import { DateTime } from "luxon";
import { mockData } from "../App";

const currentDate = DateTime.local().startOf("day");

export const mockDataTime = [
  {
    id: "95a2aaca-bab8-4504-8646-f75b325ec0e7",
    booked: false,
    area: "Helsinki",
    startTime: 1523610000000,
    endTime: 1523617200000,
  },
  {
    id: "001e40e5-05dc-4b9d-bdc5-cae63f651970",
    booked: true,
    area: "Tampere",
    startTime: 1523602800000,
    endTime: 1523610000000,
  },
  {
    id: "c5a7c672-3036-47d4-9f08-5cfe94f23067",
    booked: false,
    area: "Helsinki",
    startTime: 1523610000000,
    endTime: 1523617200000,
  },
  {
    id: "8f245d57-0b16-4e6f-af92-904a1a2e7127",
    booked: true,
    area: "Tampere",
    startTime: 1523602800000,
    endTime: 1523610000000,
  },
  {
    id: "0b7658e7-2e83-4a32-93fe-d8a22a1e17ae",
    booked: false,
    area: "Helsinki",
    startTime: 1523610000000,
    endTime: 1523617200000,
  },
  {
    id: "43738cf0-791b-4765-b7a4-491fd49ccf36",
    booked: true,
    area: "Tampere",
    startTime:  1686239322000,
    endTime:  1686253722000,
  },
  {
    id: "c9d791c0-2a1d-4f20-8e4b-4e5f56f7b0e0",
    booked: false,
    area: "Helsinki",
    startTime: 1523602800000,
    endTime: 1523610000000,
  },
];
export function calculateTimeDuration() {
  let totalDuration = 0;

  mockDataTime.forEach((item) => {
    const duration = item.endTime - item.startTime;
    totalDuration += duration;
  });
 
  return Math.round((totalDuration / 3600000) * 10) / 10;
}

export const Tab = ({ id, startTime, endTime, location, onTabCancel }) => {
  const [isStarted, setStarted] = useState(false);

  const calculateDateMatching = (shiftStart, shiftEnd) => {
    const myDate = new Date().getTime();
    const currentlyInShift = myDate - shiftStart > 0 && myDate - shiftEnd < 0;
    currentlyInShift ? setStarted(true) : setStarted(false);
  };
  const formattedStartTime = DateTime.fromMillis(startTime).toFormat("HH:mm");
  const formattedEndTime = DateTime.fromMillis(endTime).toFormat("HH:mm");

  const handleCancel = () => {
    onTabCancel(id);
  };

  useEffect(() => {
    const startTimestamp = startTime.valueOf();
    const endTimestamp = endTime.valueOf();
    calculateDateMatching(startTimestamp, endTimestamp);
  }, [startTime, endTime]);

  return (
    <div>
      <div className="tab">
        <div className="text">
          <h2 className="time">
            {formattedStartTime} - {formattedEndTime}
          </h2>
          <h4 className="location">{location}</h4>
        </div>
        <div className="btn">
          <button
            className={isStarted ? "btn-started" : "btn-notStarted"}
            onClick={!isStarted ? handleCancel : null}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const TabContainer = ({ tabs, onTabCancel }) => {
  const [currentTabs, setCurrentTabs] = useState(tabs);

  const handleTabCancel = (id) => {
    const updatedTabs = currentTabs.filter(tab => tab.id !== id);
    setCurrentTabs(updatedTabs);
    onTabCancel(id);
  };

  useEffect(() => {
    const sortedTabs = currentTabs.sort((a, b) => a.startTime - b.startTime);
    setCurrentTabs(sortedTabs);
  }, [currentTabs]);

  return (
    <div>
      {currentTabs.map((shift) => (
        <Tab
          key={shift.id}
          id={shift.id}
          startTime={shift.startTime}
          endTime={shift.endTime}
          location={shift.area}
          started={shift.booked}
          onTabCancel={handleTabCancel}
        />
      ))}
    </div>
  );
};

export default TabContainer;