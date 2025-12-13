import React from "react";
import {useForm} from "react-hook-form"


function ReactHookForm() {
    let {register,handleSubmit,watch,formState: { errors },} = useForm()

    const onSubmitData = (data)=>{
         console.log(data)
    }
    console.log(watch("name")) 

  return (
    <form onSubmit={handleSubmit(onSubmitData)}>
      
      <input  {...register("name",{required:true})} placeholder="Enetr Your Name:" />
      {errors.name && <span>This field is required</span>}
      <input {...register("password")}  placeholder="Enter Your Password" />
      <button>Submit Data</button>
    </form>
  );
}

export default ReactHookForm;
