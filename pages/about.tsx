import "keen-slider/keen-slider.min.css";
import { CareerSlider, Section } from "~/components";

export default function About() {
  return (
    <Section title="About Me" className="pt-0">
      <CareerSlider />
    </Section>
  );
}
