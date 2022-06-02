import ReactAudioPlayer from "react-audio-player";

const Podcast = () => {
  return (
    <div class="card insight_card">
      <div className="podcast_top">
        <i class="fa-solid fa-microphone-lines podcast_mic"></i>
        <h4 class="card-title"> Building the future of green steel</h4>

        <p>Speaker</p>
      </div>
      <div className="podcast_bottom">
        <ReactAudioPlayer
          src={window.api_storage_url + "/audio/podcast/podcast.mp3"}
          controls
        />
      </div>
    </div>
  );
};

export default Podcast;
