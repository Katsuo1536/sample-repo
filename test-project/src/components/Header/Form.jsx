import { Fragment, useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";



export const Form = () => {

  const [form, setFrom] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const Submit = async () => {

    try {
      const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: '',
          email: '',
          message: ''
        })
      })

      alert('送信しました。')
      handleClear()
    }
    catch {
      alert('送信を失敗しました。')
    } finally {
      setIsSubmit(false)
    }

  }


  const handleForm = e => {
    setFrom({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  const handleClear = () => {
    setFrom({
      name: '',
      email: '',
      message: ''
    });
  };

  const defaultValues = {
    name: '',
    email: '',
    message: ''
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ defaultValues });


  return (

    <form className="mx-auto max-w-3xl px-4 mt-3"
      onSubmit={handleSubmit(Submit)}>

      <div className="mt-20 text-2xl font-bold">問い合わせフォーム</div>

      <div className="flex justify-center gap-35 mx-auto container items-center mt-10">
        <label htmlFor="name">お名前</label>
        <input className="border border-b-gray-700 rounded-2xl p-4 w-100"
          type="text"
          name="name"
          {...register('name', {
            required: 'お名前は必須です。',
            maxLength: {
              value: 30,
              message: 'お名前は30文字以内で入力してください。'
            }
          })}
          onChange={handleForm}
          value={form.name}
          disabled={isSubmit} />
      </div>
      <div className="flex justify-center mx-auto container items-center text-red-500">{errors.name?.message}</div>

      <div className="flex justify-center gap-20 mx-auto container items-center mt-5">
        <label htmlFor="email">メールアドレス</label>
        <input className="border border-b-gray-700 rounded-2xl mt-3 p-4 w-100"
          name="email"
          type="email"
          {...register('email', {
            required: 'メールアドレスは必須です。'
          })}
          onChange={handleForm}
          value={form.email}
          disabled={isSubmit} />
      </div>
      <div className="flex justify-center mx-auto container items-center text-red-500">{errors.email?.message}</div>


      <div className="flex justify-center gap-40 mx-auto container items-center">
        <label htmlFor="message">本文</label>
        <textarea
          className="border border-gray-700 rounded-2xl mt-10 p-4 w-100"
          name="message"
          color="30" rows="7"
          {...register('message', {
            required: '本文は必須です。',
            maxLength: {
              value: 500,
              message: '本文は、500字以内で入力してください。'
            }
          })}
          value={form.message}
          onChange={handleForm}
          disabled={isSubmit}/>
      </div>
      <div className="flex justify-center mx-auto container items-center text-red-500">{errors.message?.message}</div>


      <div className="flex justify-center gap-10 mx-auto container items-center mt-20">
        <button className="bg-gray-950 text-mist-50 rounded-2xl font-bold p-3" type="submit" disabled={isSubmit}>
          送信</button>
        <button className="bg-gray-300 text-mist-900 rounded-2xl font-bold p-3" type="button" onClick={handleClear} disabled={isSubmit}>
          クリア</button>
      </div>

    </form>
  );


};