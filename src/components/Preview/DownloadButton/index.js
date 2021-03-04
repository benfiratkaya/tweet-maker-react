import html2canvas from "html2canvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const DownloadButton = ({ text }) => {
  const downloadImage = () => {
    const downloadTime = Date.now();
    const options = {
      scrollX: -8,
      scrollY: -window.scrollY,
    };
    const htmlElement = document.getElementById("tweetPreview");

    html2canvas(htmlElement, options).then((canvas) => {
      var a = document.createElement("a");
      a.href = canvas.toDataURL("image/png");
      a.download = `ss_${downloadTime}.png`;
      a.click();
    });
  };
  return (
    <button
      className="btn btn-lg btn-block btn-primary mt-3"
      onClick={() => downloadImage()}
    >
      <FontAwesomeIcon icon={faDownload} className="mr-2" />
      {text}
    </button>
  );
};

export default DownloadButton;
