import "keen-slider/keen-slider.min.css";
import { CareerSlider, Section } from "~/components";
import { jobs } from "~/data/jobs";

export default function About() {
  return (
    <Section title="About Me" className="pt-12">
      {/* in development alert */}
      <p className="my-8">In development...</p>
      <CareerSlider slides={jobs} />
    </Section>
  );
}
