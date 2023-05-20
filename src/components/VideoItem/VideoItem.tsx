import styles from "./VideoItem.module.css";
import { useRef, useState } from "react";

type VideoItemProps = {
  width: string;
  height: string;
  video: string;
  image: string;
  createdAt: number;
};

export const VideoItem = ({
  video,
  image,
  createdAt,
  width,
  height,
}: VideoItemProps) => {
  const [duration, setDuration] = useState(0);

  const videoEl = useRef(null);

  const handleLoadedMetadata = () => {
    const video: any = videoEl.current;
    if (!video) return;
    setDuration(Math.round(video.duration));
  };

  return (
    <div className={styles.root}>
      <div className={styles.videoWrapper}>
        <video
          width={width}
          height={height}
          src={video}
          ref={videoEl}
          poster={image}
          onLoadedMetadata={handleLoadedMetadata}
          className={styles.video}
        />
        <small className={styles.duration}>{toTimeString(duration)}</small>
      </div>
      <small className={styles.time}>{timeAgo(createdAt)}</small>
    </div>
  );
};

function toTimeString(seconds: number) {
  const date = new Date(0);
  date.setSeconds(seconds);
  const timeString = date.toISOString().substring(11, 19);
  return timeString;
}

function timeAgo(input: number) {
  const date = new Date(input * 1000);
  const formatter = new Intl.RelativeTimeFormat("en");
  const ranges: any = {
    years: 3600 * 24 * 365,
    months: 3600 * 24 * 30,
    weeks: 3600 * 24 * 7,
    days: 3600 * 24,
    hours: 3600,
    minutes: 60,
    seconds: 1,
  };
  type RelativeTimeFormatUnit =
    | "year"
    | "years"
    | "quarter"
    | "quarters"
    | "month"
    | "months"
    | "week"
    | "weeks"
    | "day"
    | "days"
    | "hour"
    | "hours"
    | "minute"
    | "minutes"
    | "second"
    | "seconds";
  const units: RelativeTimeFormatUnit[] = [
    "years",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds",
  ]; // order matters here.
  const secondsElapsed = (date.getTime() - Date.now()) / 1000;
  for (let key in ranges) {
    let i = 0;
    if (ranges[key] < Math.abs(secondsElapsed)) {
      const delta = secondsElapsed / ranges[key];
      return formatter.format(Math.round(delta), units[i++]);
    }
  }
}
