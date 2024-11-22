import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Shadow from "./Shadow"
import { addShadow } from "../../features/shadows"

export default function ShadowList() {
  const shadows = useSelector((state) => state.shadowSlice)
  const dispatch = useDispatch()
  return (
    <>
      <div className="flex justify-between p-6 border-b border-gray-300">
        <p className="text-lg font-bold">Customize Shadows</p>
        <button
          className="py-1 px-3 text-sm rounded bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => dispatch(addShadow())}
        >
          Add a shadow
        </button>
      </div>
      <ul>
        {shadows.map((shadow, index) => (
          <Shadow panelNumber={index + 1} shadow={shadow} key={shadow.id} />
        ))}
      </ul>
    </>
  )
}
