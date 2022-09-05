import "keen-slider/keen-slider.min.css";
import { CareerSlider, Section } from "~/components";
import { jobs } from "~/data/jobs";

export default function About() {
  return (
    <Section title="About Me" className="pt-4">
      <CareerSlider slides={jobs} />
    </Section>
  );
}
