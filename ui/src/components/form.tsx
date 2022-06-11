import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { get, hash } from './fetch';
import '../layout/Body.scss';
import { Inputs } from '../types/types';
import { logic } from '../core/logic';

const Form = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({
    mode: 'onSubmit',
    criteriaMode: 'firstError',
    shouldFocusError: false,
  });

  const fetchToServer = async(data: Inputs) => {
    const url: string | undefined = process.env.VITE_ICONDITY_API_URL;
    const param = data.username.replace(/^@/, '');
    console.log(param);
    reset();
    // const fetchData = getDataInAsynchronous(data);
    const fetchData = await get(url, param);
    console.log(fetchData);
    const result = hash(fetchData);
    logic(result);
  }

  return (
    <>
      <h1 className="text">{t('body.text')}</h1>
      <div className="form-outer">
        <form className="form-inner" onSubmit={handleSubmit(fetchToServer)}>
          <h2 className="title">{t('body.title')}</h2>
          {errors.username?.type === "required" && <span className="errorMsg">{t('body.required')}</span>}
          {errors.username?.type === "pattern" && <span className="errorMsg">{t('body.pattern')}</span>}
          {errors.username?.type === "maxLength" && <span className="errorMsg">{t('body.maxLength')}</span>}
          {errors.username?.type === "minLength" && <span className="errorMsg">{t('body.minLength')}</span>}
          <input
            type="text"
            className="textBox"
            placeholder="@jack"
            {...register("username", {
              required: true,
              pattern: /@[0-9a-zA-Z_]{4,15}/,
              maxLength: 16,
              minLength: 5,
            })}
          />
          <button type="submit" className="btn">{t('body.generate')}</button>
        </form>
      </div>
    </>
  );
}

export default Form;