import uuid from 'uuid/v4';
import { DateTime } from 'luxon';

const shiftTime = (dateObj, shiftDays = 0) =>
  DateTime.fromObject(dateObj).plus({ days: shiftDays }).valueOf();

const createMockShift = (values) => Object.assign({
  id: uuid(),
  booked: false,
}, values);

export default [ 
  createMockShift({
    area: 'Helsinki',
    startTime: shiftTime({ hour: 12 }),
    endTime: shiftTime({ hour: 14 }),
  }),
  createMockShift({
    area: 'Helsinki',
    startTime: shiftTime({ hour: 10 }),
    endTime: shiftTime({ hour: 12 }),
  }),
  createMockShift({
    area: 'Helsinki',
    startTime: shiftTime({ hour: 16 }),
    endTime: shiftTime({ hour: 17, minutes: 30 }),
  }),
  createMockShift({
    area: 'Turku',
    startTime: shiftTime({ hour: 16 }),
    endTime: shiftTime({ hour: 17, minutes: 30 }),
  }),
  createMockShift({
    area: 'Helsinki',
    startTime: shiftTime({ hour: 11 }),
    endTime: shiftTime({ hour: 13 }),
  }),
]