import { useSelector, useDispatch } from "react-redux"
import { updateCheckbox } from "../../features/shadows"

export default function ShadowCheckbox({ name, shadowID }) {
  const checkboxShadow = useSelector((state) =>
    state.shadowSlice.find((shadow) => shadow.id === shadowID)
  )
  const dispatch = useDispatch()
  return (
    <div>
      <input
        onChange={() => dispatch(updateCheckbox({ shadowID, name }))}
        className="border-gray-300 rounded mr-2 w-4 h-4"
        type="checkbox"
        checked={checkboxShadow[name]}
        id={`checkbox-${name}-${shadowID}`}
      />
      <label htmlFor={`checkbox-${name}-${shadowID}`}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
    </div>
  )
}
