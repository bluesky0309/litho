export default function RangeInput(props: any) {
  return (
    <>
      <input
        type="range"
        className="w-full bg-black cursor-pointer accent-[#3242F5] disabled:opacity-50 disabled:pointer-events-none focus:outline-none ring-white
        [&::-webkit-slider-thumb]:w-[14px]
        [&::-webkit-slider-thumb]:h-[14px]
        [&::-webkit-slider-thumb]:-mt-[5px]
        [&::-webkit-slider-thumb]:appearance-none
      [&::-webkit-slider-thumb]:bg-black
        [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:transition-all
        [&::-webkit-slider-thumb]:duration-150
        [&::-webkit-slider-thumb]:ease-in-out
        [&::-webkit-slider-thumb]:dark:bg-black
        [&::-moz-range-thumb]:w-[8px]
        [&::-moz-range-thumb]:h-[8px]
        [&::-moz-range-thumb]:appearance-none
        [&::-moz-range-thumb]:bg-black
        [&::-moz-range-thumb]:border-4
        [&::-moz-range-thumb]:border-none
        [&::-moz-range-thumb]:rounded-full
        [&::-moz-range-thumb]:transition-all
        [&::-moz-range-thumb]:duration-150
        [&::-moz-range-thumb]:ease-in-out
        [&::-webkit-slider-runnable-track]:w-full
        [&::-webkit-slider-runnable-track]:h-[5px]
        [&::-webkit-slider-runnable-track]:bg-[#ffffff28]
        [&::-webkit-slider-runnable-track]:rounded-full
        [&::-webkit-slider-runnable-track]:dark:bg-neutral-700
        [&::-moz-range-track]:w-full
        [&::-moz-range-track]:h-[8px]
        [&::-moz-range-track]:bg-black
        [&::-moz-range-track]:rounded-full"
        id="basic-range-slider-usage"
        aria-orientation="horizontal"
        value={props.stakePeriod}
        onChange={(e) => {props.setStakePeriod(e.target.value)}}
        max={100}
        min={1}
        step={1}
      />
    </>
  );
}
