import React, { useCallback } from "react";
import { Input, Form } from "antd";
import { useField } from "formik";
const TextField = (props: {
  label?: React.ReactNode;
  name: string;
  placeholder?: string;
  type?: "text" | "password";
}) => {
  const [field, meta] = useField({ name: props.name });
  const renderInput = useCallback(() => {
    switch (props.type) {
      case "text":
        //field from formik
        return (
          <Input {...field} id={props.name} placeholder={props.placeholder} />
        );
      case "password":
        return (
          <Input.Password
            {...field}
            id={props.name}
            placeholder={props.placeholder}
          />
        );
      default:
        return (
          <Input {...field} id={props.name} placeholder={props.placeholder} />
        );
    }
  }, [props.type, props.name, props.placeholder, field]);
  return (
    <Form.Item
      label={props.label}
      hasFeedback
      validateStatus={meta.error && "error"} //mengecek apakah error inputannya jika iya maka output akan tampil error jka tidak tidek merender apapun
      help={meta.error}
      htmlFor={props.name}
    >
      {renderInput()}
    </Form.Item>
  );
};

export default TextField;
