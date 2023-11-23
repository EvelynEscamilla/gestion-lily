import React, { useState } from 'react'

const inputImage = ({ id }) => {
    const [imagePreview, setImagePreview] = useState(null)
    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result)
            }
            reader.readAsDataURL(file)
        } else {
            setImagePreview(null)
        }
    }
    return (
        <>
            <div className="mx-auto w-7/12 lg:w-full  h-full  ">
                <label htmlFor="titulo" className="mb-1 block text-1xl font-semibold text-white"></label>
                <label className="flex w-full cursor-pointer appearance-none justify-center items-center hover:scale-105 duration-3 00 rounded-md border-2 border-dashed border-black p-6 transition-all hover:border-white">
                    <div className="space-y-1 text-center ">
                        <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:scale-95 duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-black">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                            </svg>
                        </div>
                        <div className="flex  items-center text-2xl"><p>Selecciona o arrastra aquí  </p></div>
                        <p className=" text-white 1xl">Sube tu imagen</p>
                    </div>
                    <input id={id} onChange={handleFileChange} accept='image/png,image/jpeg' type="file" className="sr-only" />
                </label>
                <div className='flex flex-col items-center justify-center'>
                    {imagePreview && (
                        <div className=' w-fit'>
                            <p className='text-xl text-center'>Imagen:</p>
                            <img src={imagePreview} alt="Vista previa" className='lg:w-fit max-h-44 justify-center rounded-lg' />
                        </div>
                    )}
                </div>
            </div>

        </>

    )
}
export default inputImage