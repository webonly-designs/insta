import { ClimbingBoxLoader } from 'react-spinners'

function spinner() {
  return (
    <div className='bg-black flex items-center justify-center h-screen'>
        <ClimbingBoxLoader 
            size={50}
            color={'#38bdf8'}
            loading={true}
        />
    </div>
  )
}

export default spinner