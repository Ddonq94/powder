import styles from "./VideoList.module.css";
import Link from "next/link";
import { Video } from "@/types";
import { VideoItem } from "../VideoItem";
import { useEffect, useState } from "react";
import Modal from "react-modal";

interface IVideoListProps {
  title?: string;
  data: Video[];
  seeAllHref?: string;
  wrap?: boolean;
}

Modal.setAppElement("#__next");

export const VideoList = ({
  title,
  data,
  seeAllHref,
  wrap = false,
}: IVideoListProps) => {
  const width = useWindowWidth();

  const videoItemWidth = getVideoSize(width).width;
  const videoItemHeight = getVideoSize(width).height;
  const videos = getVideosBySize(width, data);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalVideo, setModalVideo] = useState<Video>();

  function openModal(vid: Video) {
    setIsOpen(true);
    setModalVideo(vid);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles.root}>
      <div className={styles.heading}>
        {title && <p>{title}</p>}
        {seeAllHref && (
          <Link href={seeAllHref}>
            <small className={styles.all}>See All</small>
          </Link>
        )}
      </div>
      <div className={`${styles.videos} ${wrap ? styles.wrap : null}`}>
        {(wrap ? data : videos).map((videoItem) => {
          const { video, image, createdAt } = videoItem;

          const key = `${video}${image}${createdAt}`;

          return (
            <div key={key} onClick={() => openModal(videoItem)}>
              {wrap ? (
                <VideoItem
                  width={"20%"}
                  height={"120"}
                  video={video}
                  image={image}
                  createdAt={createdAt}
                />
              ) : (
                <VideoItem
                  width={videoItemWidth}
                  height={videoItemHeight}
                  video={video}
                  image={image}
                  createdAt={createdAt}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* video modal */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button onClick={closeModal} className={styles.button}>
          Close
        </button>

        <div>
          <video
            width={"70%"}
            height={"70%"}
            src={modalVideo?.video}
            controls
          />
        </div>
      </Modal>
    </div>
  );
};

// customHook
function useWindowWidth() {
  const [windowSize, setWindowSize] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    // Call handler first time to get initial window width
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function getVideoSize(windowWidth: number) {
  if (windowWidth >= 1312) {
    return {
      width: "20%",
      height: "120",
    };
  } else if (windowWidth >= 992) {
    return {
      width: "25%",
      height: "165",
    };
  }

  return {
    width: "33.3%",
    height: "161",
  };
}

function getVideosBySize(windowWidth: number, data: Video[]) {
  if (windowWidth >= 1312) {
    return data;
  } else if (windowWidth >= 992) {
    return data.slice(0, 4);
  }

  return data.slice(0, 3);
}
