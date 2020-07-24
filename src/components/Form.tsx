import React from "react";
import { Form as AntdForm } from "antd";
import { useFormikContext } from "formik";
const Form = () => {
  const { handleSubmit } = useFormikContext();
  return <AntdForm onSubmitCapture={handleSubmit} layout="vertical"></AntdForm>;
};

export default Form;
