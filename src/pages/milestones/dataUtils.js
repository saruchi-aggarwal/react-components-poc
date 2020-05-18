import profile from "../../data/profile.json";

const DATE_TODAY = new Date();

export const PROFILE_CREATED_TIME = new Date(
  profile.profile.additionalInfo.createdDate
);

export const getTimeElapsed = (time1, time2) =>
  Math.abs(time1.getTime() - time2.getTime());

export const getDaysElapsed = (time1, time2) =>
  parseInt(getTimeElapsed(time1, time2) / (24 * 60 * 60 * 1000), 10);

export const getDateLocalObject = date => ({
  date: date.getDate(),
  month: date.getMonth(),
  year: date.getFullYear()
});

export const getDaysElapsedSinceJoining = () =>
  getDaysElapsed(DATE_TODAY, PROFILE_CREATED_TIME);

export const getUpcomingAnniversaryDetails = () => {
  const profileCreated = getDateLocalObject(PROFILE_CREATED_TIME);
  const today = getDateLocalObject(DATE_TODAY);
  let anniversary = {};
  // same year, so anniversary is next year
  if (today.year === profileCreated.year) {
    anniversary = {
      date: profileCreated.date,
      month: profileCreated.month,
      year: profileCreated.year + 1,
      anniversary: 1
    };
  }
  // some other year, and before month of anniversary
  if (today.month < profileCreated.month) {
    anniversary = {
      date: profileCreated.date,
      month: profileCreated.month,
      year: today.year,
      anniversary: today.year - profileCreated.year
    };
  }
  // some other year, and after this year's anniversary
  if (today.month > profileCreated.month) {
    anniversary = {
      date: profileCreated.date,
      month: profileCreated.month,
      year: today.year + 1,
      anniversary: today.year + 1 - profileCreated.year
    };
  }
  // some other year, same month, before annivesary date
  if (today.date <= profileCreated.date) {
    anniversary = {
      date: profileCreated.date,
      month: profileCreated.month,
      year: today.year,
      anniversary: today.year - profileCreated.year
    };
  }
  // some other year, same month, after annivesary date
  anniversary = {
    date: profileCreated.date,
    month: profileCreated.month,
    year: today.year + 1,
    anniversary: today.year + 1 - profileCreated.year
  };
  return {
    ...anniversary,
    dateObj: new Date(anniversary.year, anniversary.month, anniversary.date)
  };
};

export const daysToNextAnniversary = () =>
  getDaysElapsed(getUpcomingAnniversaryDetails().dateObj, DATE_TODAY);
