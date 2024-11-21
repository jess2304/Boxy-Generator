import { configureStore } from "@reduxjs/toolkit"
import shadowSlice from "./features/shadows"
import boxPropertiesSlice from "./features/boxProperties"

export const store = configureStore({
  reducer: {
    shadowSlice,
    boxPropertiesSlice,
  },
})
