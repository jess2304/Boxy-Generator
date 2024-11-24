import getBoxShadowValue from "../../../utils/js/getBoxShadowValue"
import { useSelector } from "react-redux"
import { useEffect } from "react"

export default function ModalResult({ closeModal }) {
  const shadowValues = useSelector((state) => state.shadowSlice)
  const boxProperties = useSelector((state) => state.boxPropertiesSlice)
  useEffect(() => {
    document.body.style.overflowY = "hidden"

    return () => (document.body.style.overflowY = "auto")
  }, [])

  let runningAnimation = false

  function handleCopy(e) {
    if (!runningAnimation) {
      runningAnimation = true
      e.target.textContent = "Copied !"
      setTimeout(() => {
        e.target.textContent = "Copy"
        runningAnimation = false
      }, 1250)
    }
    const boxShadow = `box-shadow: ${getBoxShadowValue(shadowValues)};`
    const boxPropertiesCSS = boxProperties
      .map((property) => {
        const propertyName = property.name.toLowerCase().replace(/ /g, "-")
        if (property.type === "color") {
          return `${propertyName}: ${property.value};`
        }
        return `${propertyName}: ${property.value}px;`
      })
      .join("\n")
    const fullCSS = `${boxShadow}\n${boxPropertiesCSS}`
    navigator.clipboard.writeText(fullCSS)
  }

  return (
    <div
      onClick={closeModal}
      className="fixed z-10 inset-0 flex items-center justify-center bg-gray-600/75"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-[400px] rounded p-7 bg-gray-50 mb-[10vh]"
      >
        <div className="flex items-end mb-5">
          <p className="font-semibold mr-5">Here is your code 🎉</p>
          <button
            onClick={handleCopy}
            className="ml-auto mr-2 text-sm bg-blue-600 text-white hover:bg-blue-700 py-1 px-3 rounded"
          >
            Copy
          </button>
          <button
            onClick={closeModal}
            className="text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded"
          >
            Close
          </button>
        </div>
        <div className="rounded bg-gray-100 p-5">
          <p className="font-semibold mb-2">box-shadow :</p>
          <p>{getBoxShadowValue(shadowValues)}</p>
          <p className="font-semibold mt-5 mb-2">Box Properties :</p>
          <ul>
            {boxProperties.map((property) => (
              <li key={property.inputNumber} className="flex">
                <span className="font-semibold">{property.name}:&nbsp;</span>
                <span>
                  {property.type === "color"
                    ? `${property.value};`
                    : `${property.value}px;`}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
