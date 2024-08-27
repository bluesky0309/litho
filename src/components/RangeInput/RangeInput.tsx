import { RangeInputProps } from "@/types";
export default function RangeInput(props: RangeInputProps) {
  return (
    <>
      <input
        type="range"
        className="w-full slider appearance-none bg-transparent"
        aria-orientation="horizontal"
        value={props.stakePeriod}
        onChange={(e) => {props.setStakePeriod(parseInt(e.target.value))}}
        max={100}
        min={1}
        step={1}
      />
    </>
  );
}
