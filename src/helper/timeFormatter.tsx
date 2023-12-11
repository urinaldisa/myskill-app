import { formatDistance } from 'date-fns';

interface FormatDurationResult {
  originalDuration: number;
  formattedDuration: string;
}

const formatDuration = (durationInMilliseconds: number): FormatDurationResult => {
  const seconds = durationInMilliseconds / 1000; // Convert milliseconds to seconds
  const roundedSeconds = Number(seconds.toFixed(2));

  return {
    originalDuration: durationInMilliseconds,
    formattedDuration: `${roundedSeconds}`,
  };
};


export default formatDuration;
