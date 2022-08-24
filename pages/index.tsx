import axios from "axios";
import { BASE_URL } from "../utils";
import { Video } from "../types";
import VideoCard from "../components/VideoCard";
import NoResults from "../components/NoResults";

// icons import
import { MdOutlineVideocamOff } from "react-icons/md";

interface IProps {
  videos: Video[];
}

export const getServerSideProps = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/post`);

  return {
    props: {
      videos: data,
    },
  };
};

const Home = ({ videos }: IProps) => {
  return (
    <div className="flex flex-col gap-10 videos h-full">
      {videos.length ? (
        videos.map((video: Video) => <VideoCard key={video._id} post={video} />)
      ) : (
        <NoResults text="No Videos" icon={<MdOutlineVideocamOff />} />
      )}
    </div>
  );
};

export default Home;
