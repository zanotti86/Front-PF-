import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createCollection, getCollection } from "../../../Redux/Actions/index";
import { useHistory } from "react-router-dom";
import "./createCategory.css";

const validateForm = input => {
  let error = {};
  if (!input.name) error.name = "El nombre de la colección es requerido";
  return error;
};

export default function CreateCollection() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    name: "",
  });

  const handleInputChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError(validateForm({ ...input, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (Object.keys(error).length === 0) {
      dispatch(createCollection(input));
      alert("Colección creada con éxito");
      history.push("/home");
      setInput({
        name: "",
      });
    } else {
      alert("Por favor, complete todos los campos requeridos");
    }
  };

  useEffect(() => {
    dispatch(getCollection());
    validateForm(input);
  }, []);

  return (
    <div>
      <h1>Crear colección</h1>
      <br></br>
      <div className='createCategory'>
        <form className='form-inputs' onSubmit={e => handleSubmit(e)}>
          <input
            onChange={handleInputChange}
            value={input.name}
            type='text'
            name='name'
            placeholder='Nombre'
          />
          {error.name && <p className='error'>{error.name} </p>}
          <br></br>
          <br></br>
          <br></br>
          <button type='submit' className='btn'>
            Crear Colección
          </button>
        </form>
      </div>
    </div>
  );
}