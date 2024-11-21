import React from "react"
import { useDispatch } from "react-redux"
import { updateBoxValue } from "../../features/boxProperties"

export default function BoxRange({ inputData }) {
  const dispatch = useDispatch()
  function handleInputs(e) {
    dispatch(
      updateBoxValue({
        inputNumber: inputData.inputNumber,
        value: e.target.value,
      })
    )
  }
  return (
    <div className="my-8">
      <div className="flex justify-between">
        <p> {inputData.name}</p>
        <div className="flex items-baseline mb-2">
          <input
            value={inputData.value}
            onChange={handleInputs}
            className="w-14 h-8 mr-2 border border-gray-200 text-center outline-gray-400"
            type="number"
          />
          <p>px</p>
        </div>
      </div>
      <div className="relative z-0 w-full flex items-center">
        <input
          min={inputData.minMax[0]}
          max={inputData.minMax[1]}
          className="w-full h-[2px] bg-gray-300 rounded-lg appearance-none cursor-pointer"
          type="range"
          onChange={handleInputs}
        />
      </div>
    </div>
  )
}
