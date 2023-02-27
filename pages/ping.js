import { FaWhatsappSquare } from "react-icons/fa";

function ping() {
  return (
    <div className="flex h-screen bg-black items-center justify-center">
        <div className="relative">
            <span 
                className="absolute animate-ping center
                h-16 w-16 rounded-full bg-green-500 opacity-60">
            </span>
            <span 
                className="absolute animate-ping left-1 bottom-1
                h-14 w-14 rounded-full bg-green-500 opacity-60">
            </span>
            <FaWhatsappSquare 
                className="relative h-16 w-16 text-green-500"
            />
        </div>
    </div>
  )
}

export default ping