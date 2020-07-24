import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Input, Button } from "antd";
import { Formik } from "formik";
import * as yup from "yup";
import Form from "./components/Form";
import TextField from "./components/TextField";
function App() {
  const validationSchema = React.useMemo(() => {
    return yup.object({
      name: yup.string().required(),
      description: yup.string().required(),
    });
  }, []);
  return (
    <div>
      <h1>React Formik</h1>
      <Formik
        initialValues={{ name: "", description: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {/* <Form> */}
        <TextField name="name" label="Name" placeholder="Jawa Timur Park" />
        <TextField
          name="description"
          label="Description"
          placeholder="Interactive jawa timur park map for visitor"
        />
        <Button
          type="primary"
          htmlType="submit"
          // loading={projectSync.isMutating}
        >
          Create Project
        </Button>
        {/* </Form> */}
      </Formik>
    </div>
  );
}

export default App;
