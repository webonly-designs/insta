import { Switch } from '@headlessui/react'
import { useState } from 'react'

function ToggleSwitch() {

    const [enabled, setEnabled] = useState(false)

  return (
    <div className="bg-black flex justify-center py-24">
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
                enabled ? 'bg-sky-400' : 'bg-slate-700'
            } relative inline-flex h-12 w-24 items-center rounded-full`}
        >
            <span
                className={`${
                enabled ? 'translate-x-12' : 'translate-x-1'
                } inline-block h-10 w-10 transform rounded-full 
                bg-slate-900 transition`}
            />
        </Switch>
    </div>
  )
}

export default ToggleSwitch