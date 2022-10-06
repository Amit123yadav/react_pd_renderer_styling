import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { addData, deleteData, editData } from "../redux/action";
import { useDispatch, useSelector } from "react-redux/es/exports";

function FormikContainer() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  console.log(data)
  const [edit, setEdit] = useState();
 
  const radioOptions = [
    { key: "Male", value: "male" },
    { key: "Female", value: "female" },
  ];
  const checkboxOptions = [
    { key: "cricket", value: "cricket" },
    { key: "coding", value: "coding" },
    { key: "travelling", value: "travelling" },
  ];
  const initial = {
    firstName: "",
    lastName: "",
    semesters: "",
    gender: "",
    hobbies: [],
  };
  const [initialValues, setinitialValues] = useState(initial);
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),

    semesters: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    // hobbies: Yup.array().required("Required"),
    hobbies: Yup.array().min(1).of(Yup.string().required()).required(),
  });
  const onSubmit = (values) => {
    // console.log("Form data", values);
    // console.log('Saved data', JSON.parse(JSON.stringify(values)));
    if (edit) {
      dispatch(editData(values, edit));
      setinitialValues(initial);
    } 
    else {
      dispatch(addData(values));
      setinitialValues(initial);
    }
    setEdit(null);
  };
//   console.log(data);
  const deleteForm = (id) => {
    dispatch(deleteData(id));
  };
  const editForm = (id) => {
    let newD = data.filter((el)=>{
      // console.log(el,'elllllllllllll')
      return (el.id === id)
    })
    setinitialValues(newD[0].data);
    setEdit(id);
  };

// console.log(initialValues,'jhjkjhjgjhgjgjgjghjghj')
  return (
    <>
      <div style={{border : '1px solid black' ,width : '700px', margin : 'auto'}}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form className="form">
            <FormikControl
              control="input"
              type="text"
              label="First Name"
              name="firstName"
            />
            <FormikControl
              control="input"
              type="text"
              label="Last Name"
              name="lastName"
            />

            <FormikControl
              control="select"
              type='text'
              label="Semesters"
              name="semesters"
             
            />

            <FormikControl
              control="radio"
              label="Gender"
              name="gender"
              options={radioOptions}
            />

            <FormikControl
              control="checkbox"
              label="Hobbies"
              name="hobbies"
              options={checkboxOptions}
            />

            <button type="submit" style={{ cursor: "pointer" }} onClick={()=>setinitialValues(initial)}>
              Save
            </button>
            <button
            type="reset"
              style={{ cursor: "pointer" }}
            >
              Cancel 
            </button>
          </Form>
        )}
      </Formik>
      </div>
      <table style={{ width: "100%" }}>
        <tr style={{ alignItems: "center", width: "100%" }}>
          <td>id</td>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Gender</td>
          <td>Semester</td>
          <td>Hobby</td>
          <td>Action</td>
        </tr>
        {data?.map((el) => {
          return (
            <>
              <tr>
                <td>{el.id}</td>
                <td>{el.data?.firstName}</td>
                <td>{el.data?.lastName}</td>
                <td>{el.data?.gender}</td>
                <td>{el.data?.semesters}</td>

                {el.data?.hobbies ? (
                  <td> {`${el.data.hobbies}`} </td>
                ) : null}

                <td>
                  <a href={"#"} onClick={() => deleteForm(el.id)}>
                    delete
                  </a>
                  /
                  <a href={"#"} onClick={() => editForm(el.id)}>
                    edit
                  </a>
                </td>
              </tr>
            </>
          );
        })}
      </table>
    </>
  );
}

export default FormikContainer;
