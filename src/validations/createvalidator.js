const { body } = require("express-validator");

module.exports = [
  body("title")
    .notEmpty()
    .withMessage("Por favor ingrese el titulo")
    .isAlphanumeric("es-ES", {ignore: ' '})
    .withMessage("Por favor sólo letras")
    .isLength({max:50})
    .withMessage("El título no debe pasar los 50 caracteres"),

  body("rating")
    .notEmpty()
    .withMessage("Por favor ingrese un rating")
    .isLength({
      max: 2,
    })
    .withMessage("Por favor solamente dos digitos")
    .isDecimal({min:0})
    .withMessage("Por favor sólo numeros"),
  body("awards")
    .notEmpty()
    .withMessage("Por favor ingrese un numero")
    .isNumeric()
    .withMessage("Por favor sólo números"),
  body("release_date")
    .notEmpty()
    .withMessage("Por favor ingrese una fecha"),

  body("length")
    .notEmpty()
    .withMessage("Por favor ingrese la duración de la película")
    .isNumeric()
    .withMessage("Por favor sólo números"),

];