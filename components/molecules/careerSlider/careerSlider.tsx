import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";

export const CareerSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    vertical: true,
    slides: {
      perView: 1,
      origin: "center",
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div>
      <div
        ref={sliderRef}
        className="keen-slider"
        style={{
          height: "350px",
        }}
      >
        <article className="keen-slider__slide">
          <h3 className="text-4xl">Hola mundo 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo
            ducimus placeat explicabo facilis tempora exercitationem et
            possimus! Aliquid, nihil. Doloribus sunt, nemo animi laborum
            explicabo provident voluptatum dolor assumenda.
          </p>
        </article>
        <article className="keen-slider__slide">
          <h3 className="text-4xl">Hola mundo 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo
            ducimus placeat explicabo facilis tempora exercitationem et
            possimus! Aliquid, nihil. Doloribus sunt, nemo animi laborum
            explicabo provident voluptatum dolor assumenda.
          </p>
        </article>
        <article className="keen-slider__slide">
          <h3 className="text-4xl">Hola mundo 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo
            ducimus placeat explicabo facilis tempora exercitationem et
            possimus! Aliquid, nihil. Doloribus sunt, nemo animi laborum
            explicabo provident voluptatum dolor assumenda.
          </p>
        </article>
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              >
                hola {idx}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
