import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react';
import { useForm } from 'react-hook-form';
import { db } from '../../firebase';

interface IFormData {
  thumbnailPath: string;
  videoUrl: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: IFormData) => {
    try {
      await addDoc(collection(db, 'series'), {
        timestamp: serverTimestamp(),
        thumbnailPath: data.thumbnailPath,
        videoUrl: data.videoUrl,
      });
    } catch (e) {
      console.log(e);
    }
    reset();
  };

  return (
    <div
      className='py-10 px-20'
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '45%' }}
    >
      <h2 className='mb-8 text-white font-bold text-2xl text-center'>
        Add new series
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder='Enter thumbnail path'
          className='w-full py-2 px-4 block mb-4 text-white'
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
          {...register('thumbnailPath', {
            required: true,
          })}
        />
        {errors.thumbnailPath && (
          <span className='text-red-700'>Plz fill thumbnail path field</span>
        )}
        <input
          placeholder='Enter video url'
          className='w-full py-2 px-4 block mb-4 text-white'
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
          {...register('videoUrl', {
            required: true,
          })}
        />
        {errors.videoUrl && (
          <span className='text-red-700'>Plz fill video url field</span>
        )}
        <input
          type='submit'
          value='Add'
          className='block border-none py-2 px-4 outline-none mx-auto mt-10
          cursor-pointer bg-pink-800'
          style={{ minWidth: 140 }}
        ></input>
      </form>
    </div>
  );
};

export default Form;
