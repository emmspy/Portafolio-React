import React from 'react'

const CustomButton = () => {
  return (
    <button
        disabled = {false}
        type={"button"}
        className={'custom-btn bg-primary-purple text-white rounded-full mt-10 p-3'}
    >
        <span className={`flex-1`}>
            Contactar
        </span>
    </button>
  )
}

export default CustomButton