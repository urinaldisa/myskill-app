import { formatDistance } from 'date-fns';

interface FormatDurationResult {
  originalDuration: number;
  formattedDuration: string;
}

const formatDuration = (durationInMilliseconds: number): FormatDurationResult => {
  const seconds = Math.floor(durationInMilliseconds / 1000);
  const milliseconds = durationInMilliseconds % 1000;

  const formattedDuration = `${seconds}.${milliseconds.toString().padStart(3, '0')}s`;

  return {
    originalDuration: durationInMilliseconds,
    formattedDuration,
  };
};

export default formatDuration;
