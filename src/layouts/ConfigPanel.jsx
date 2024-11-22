import { useState } from "react"
import ShadowList from "./ShadowList/ShadowList"
import BoxPanel from "./BoxPanel/BoxPanel"

export default function ConfigPanel() {
  const [tab, setTab] = useState(0)
  const tabsList = [
    { name: "BoxPanel", component: <BoxPanel /> },
    { name: "Shadow", component: <ShadowList /> },
  ]
  return (
    <div className="relative mt-20 w-[600px] h-[550px] border rounded-b rounded-tr border-gray-300 shadow-xl bg-gray-50 md:mt-0">
      <div className="flex absolute -translate-y-full -left-[1px]">
        {tabsList.map((tab, index) => {
          return (
            <div key={index}>
              <button
                onClick={() => setTab(index)}
                className="min-w-[125px] py-2 px-3 mr-3 font-bold bg-slate-50 border-t border-x border-gray-300 rounded-t hover:bg-slate-200 focus:bg-slate-200"
              >
                {tab.name}
              </button>
            </div>
          )
        })}
      </div>
      <div>{tabsList[tab].component}</div>
    </div>
  )
}
