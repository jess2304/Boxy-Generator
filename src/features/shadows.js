import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from "nanoid"

const initialState = [
  {
    id: nanoid(8),
    active: true,
    inset: false,
    inputs: [
      {
        iputNumber: 1,
        name: "Horizontal offset",
        value: 0,
        type: "range",
        minMax: [-250, 250],
      },
      {
        iputNumber: 2,
        name: "Vertical offset",
        value: 10,
        type: "range",
        minMax: [-250, 250],
      },
      {
        iputNumber: 3,
        name: "Blur radius",
        value: 15,
        type: "range",
        minMax: [0, 250],
      },
      {
        iputNumber: 4,
        name: "Spread radius",
        value: -3,
        type: "range",
        minMax: [-250, 250],
      },
      {
        iputNumber: 5,
        name: "Color",
        value: "#4f4f4f",
        type: "color",
      },
    ],
  },
]

export const shadowSlice = createSlice({
  name: "shadows",
  initialState,
  reducers: {
    removeShadow: (state, action) => {},
    addShadow: (state, action) => {},
    updateShadowValue: (state, action) => {},
    updateCheckbox: (state, action) => {},
  },
})

export const { removeShadow, addShadow, updateShadowValue, updateCheckbox } =
  shadowSlice.actions
export default shadowSlice.reducer
