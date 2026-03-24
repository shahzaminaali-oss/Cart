import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
  const fileInputRef = useRef(null)
  const defaultVal={
      name: '',
      price: '',
      img:null
    }
  const { register, handleSubmit , reset} = useForm({defaultValues:defaultVal})

  const onsubmit = async(data) => {
     const file = fileInputRef.current.files[0]

    if (!file) {
      alert('Please upload an image')
      return
    }
    try{
     console.log('Form Data:', data, 'File:', file)
   
   const formData=new FormData()
   formData.append('name', data.name)
   formData.append('price', data.price)
   
   formData.append("img",file)

   const res=await fetch('http://localhost:5000/cat',{
    method:'POST',
    body:formData
   })

   const result = await res.json()
   if(res.ok){
    reset(defaultVal)
    alert(result.message)
   }
    else{
      alert(result.message)
    }

  }
  catch(err){
    alert(err.message)
  }
  }


  return (
    <div>
      <form
        className="flex flex-col items-center mx-auto mt-32 shadow-lg shadow-amber-500/60 w-[400px] h-auto py-2"
        onSubmit={handleSubmit(onsubmit)}
      >
        <div className="p-3 my-3 border border-amber-500">
          <input
            className="focus:outline-none w-full"
            {...register('name')}
            type="text"
            placeholder="Enter Category"
          />
        </div>

        <div className="p-3 my-3 border border-amber-500">
          <input
            className="focus:outline-none w-full"
            {...register('price')}
            type="number"
            placeholder="Enter Price"
          />
        </div>

        {/* File Upload Button */}
        <div className="p-3 flex flex-col items-center">
          <button
            type="button"
            className="bg-amber-500 font-bold p-4 mb-2 cursor-pointer"
            onClick={() => fileInputRef.current.click()} // opens file picker
          >
            Upload Image
          </button>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden" // hides default "No file chosen"
          />
        </div>

        <button
          className="block mx-auto my-3 text-center bg-amber-500 font-bold p-3 cursor-pointer"
          type="submit"
        >
          Create Category
        </button>
      </form>
    </div>
  )
}

export default Form
