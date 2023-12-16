import { atom } from "recoil"

const LoadActivity = atom({
  key: "LoadActivity", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
})
export default LoadActivity
