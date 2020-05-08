import React, { useRef, useEffect } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { Input } from "../components/Input";
import { FiMail } from "react-icons/fi";

export const InputErrored: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    formRef.current?.setErrors({
      email: 'Email is required',
    });
  }, [])
  
  return (
    <Form ref={formRef} onSubmit={()=>{}}>
      <Input name="email" icon={FiMail} placeholder="E-mail" />
    </Form>
  )
};