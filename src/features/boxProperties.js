import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  {
    iputNumber: 1,
    name: "Border radius",
    value: 25,
    type: "range",
    minMax: [0, 250],
  },
  {
    iputNumber: 2,
    name: "Height",
    value: 250,
    type: "range",
    minMax: [0, 500],
  },
  {
    iputNumber: 3,
    name: "Width",
    value: 250,
    type: "range",
    minMax: [0, 500],
  },

  {
    iputNumber: 4,
    name: "Background color",
    value: "#fff",
    type: "color",
  },
]

export const boxPropertiesSlice = createSlice({
  name: "boxProperties",
  initialState,
  reducers: {
    updateBoxValue: (state, action) => {},
  },
})

export const { updateBoxValue } = boxPropertiesSlice.actions
export default boxPropertiesSlice.reducer
