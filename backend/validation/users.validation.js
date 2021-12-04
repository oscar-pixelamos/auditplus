import Joi from "joi";

const registerSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": `El campo de Nombres debe ser de tipo texto.`,
    "string.empty": `El campo de Nombres no puede estar vacío.`,
    "any.required": `El campo de Nombres es requerido.`,
  }),
  lastname: Joi.string().required().messages({
    "string.base": `El campo de Apellidos debe ser de tipo texto.`,
    "string.empty": `El campo de Apellidos no puede estar vacío.`,
    "any.required": `El campo de Apellidos es requerido.`,
  }),
  email: Joi.string().email().lowercase().trim().required().messages({
    "string.email": `Ingrese un Correo Electrónico valido.`,
    "string.empty": `El campo de Correo Electrónico no puede estar vacío.`,
    "any.required": `El campo de Correo Electrónico es requerido.`,
  }),
  type_id: Joi.string().alphanum().required().messages({
    "string.empty": `El campo de Tipo de Identificación no puede estar vacío.`,
    "string.alphanum": `El campo de Tipo de Identificación sólo puede contener caracteres alfanuméricos.`,
    "any.required": `El campo de Tipo de Identificación es requerido.`,
  }),
  id_number: Joi.string().alphanum().required().messages({
    "string.empty": `El campo de Número de Identificación no puede estar vacío.`,
    "string.alphanum": `El campo de Número de Identificación sólo puede contener caracteres alfanuméricos.`,
    "any.required": `El campo de Número de Identificación es requerido.`,
  }),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).min(8).required().messages({
    "string.empty": `El campo de Contraseña no puede estar vacío.`,
    "string.pattern.base": `La contraseña debe contener mínimo 8 caracteres y un número.`,
    "string.min": `La contraseña debe contener mínimo 8 caracteres.`,
    "any.required": `El campo de Contraseña es requerido.`,
  }),
});

const loginSchema = Joi.object({
  email: Joi.string().email().lowercase().trim().required().messages({
    "string.email": `Ingrese un Correo Electrónico valido.`,
    "string.empty": `El campo de Correo Electrónico no puede estar vacío.`,
    "any.required": `El campo de Correo Electrónico es requerido.`,
  }),
  password: Joi.string().required().messages({
    "string.empty": `El campo de Contraseña no puede estar vacío.`,
    "any.required": `El campo de Contraseña es requerido.`,
  }),
});

export { registerSchema, loginSchema };
