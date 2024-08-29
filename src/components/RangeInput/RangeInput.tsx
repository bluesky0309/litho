import { useState, ChangeEvent, useRef } from "react";
import { RangeInputProps } from "@/types";
import "./RangeInput.css";
const RangeSlider = (props: RangeInputProps) => {
  const [value, setValue] = useState<number>(props.stakePeriod);
  const rangeRef = useRef<HTMLInputElement>(null);
  
  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const tempSliderValue = Number(event.target.value);
    setValue(tempSliderValue);

    const progress = (tempSliderValue / Number(event.target.max)) * 100;
    if (rangeRef.current) {
      rangeRef.current.style.background = `linear-gradient(to right, #3242F5 0%, #63D8EC ${progress}%, #FFFFFF4D ${progress}%)`;
    }
    props.setStakePeriod(Number(event.target.value));
  };

  return (
    <input
      type="range"
      min="0"
      max="100"
      value={value}
      id="range"
      className="h-[5px] w-full bg-[#FFFFFF4D] rounded-full appearance-none cursor-pointer focus:outline-none"
      onChange={handleSliderChange}
      ref={rangeRef}
      step={1}
    />
  );
};

export default RangeSlider;
