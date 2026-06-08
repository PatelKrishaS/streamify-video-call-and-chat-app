import { VideoIcon } from "lucide-react";

function CallButton({ handleVideoCall }) {
  return (
    <div
      className="absolute top-3 right-14 z-50"
      style={{ right: "62px", top: "22px" }}
    >
      <button onClick={handleVideoCall} className="btn btn-success btn-sm">
        <VideoIcon className="size-5 text-white" />
      </button>
    </div>
  );
}

export default CallButton;
