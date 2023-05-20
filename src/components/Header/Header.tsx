import styles from "./Header.module.css";
import Image from "next/image";

export const Header = () => {
  return (
    <div className={styles.root}>
      <Info />
      <Actions />
    </div>
  );
};

const Info = () => {
  return (
    <div className={styles.info}>
      <Image
        src="/screen.svg"
        alt="screen icon"
        width={64}
        height={64}
        priority
      />
      <div>
        <p>
          Screen Recording{" "}
          <Image
            src="/chevronup.svg"
            alt="up icon"
            width={16}
            height={16}
            priority
          />
        </p>

        <div className={styles.tags}>
          <small>1080p</small>
          <small>60FPS</small>
        </div>
      </div>
    </div>
  );
};

const Actions = () => {
  return (
    <div className={styles.actions}>
      <Image
        src="/microphone.svg"
        alt="microphone icon"
        width={40}
        height={40}
        priority
      />
      <button className={styles.button}>Start session</button>
      <Image
        src="/settings.svg"
        alt="settings icon"
        width={40}
        height={40}
        priority
      />
      <Image
        src="/avatar.svg"
        alt="avatar icon"
        width={40}
        height={40}
        priority
      />
    </div>
  );
};
