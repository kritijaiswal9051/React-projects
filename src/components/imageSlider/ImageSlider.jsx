import { useEffect, useState } from "react";
import "./ImageSlider.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function ImageSlider({ url, limit = 5, page = 1 }) {
  const [image, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errormss, setErrorMss] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImage(getUrl) {
    try {
      setLoading(true);
      const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await res.json();

      if (data) {
        setImage(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMss(error.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? image.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === image.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImage(url);
  }, [url]);

  if (loading) {
    return <div>Loading data ! Please Wait</div>;
  }
  if (errormss !== null) {
    return <div>Error occured ! {errormss}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {image && image.length
        ? image.map((imageItem, index) => {
            return (
              <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={
                  currentSlide === index
                    ? "current-image"
                    : "current-image hide-current-image"
                }
              />
            );
          })
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {image && image.length
          ? image.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}

export default ImageSlider;
