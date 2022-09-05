import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { Link, JobThumb } from "~/components";

interface Slide {
  title: string;
  content: string;
  date: string;
  company: string;
  companyUrl: string;
  image: string;
  thumbnail: {
    src: string;
    alt: string;
  };
}

interface CareerSliderProps {
  slides: Slide[];
}
export const CareerSlider: React.FC<CareerSliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    vertical: false,
    slides: {
      perView: 1,
      origin: "center",
    },
    breakpoints: {
      "(min-width: 640px)": {
        vertical: true,
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="flex flex-col sm:flex-row gap-6">
      <div
        ref={sliderRef}
        className="keen-slider"
        style={{
          height: "350px",
        }}
      >
        {slides.map((slide, index) => (
          <article key={index} className="keen-slider__slide">
            <Link href={slide.companyUrl}>
              <h2 className="text-4xl font-semibold">{slide.company}</h2>
            </Link>
            <h3 className="text-2xl font-medium">{slide.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: slide.content }}></div>
          </article>
        ))}
      </div>
      <div className="order-first overflow-x-scroll">
        <div className="flex items-center sm:flex-col gap-2">
          {slides?.map((slide, index) => (
            <>
              <JobThumb
                key={index}
                title={slide.title}
                date={slide.date}
                imageSrc={slide.thumbnail.src}
                onClick={() => {
                  instanceRef.current?.moveToIdx(index);
                }}
                isActive={index === currentSlide}
              />
              {index < slides.length - 1 && (
                <div className="hidden sm:block h-5 border-b-2 border-dotted border-slate-200"></div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
