/*
    Event Routes
    /api/event
*/
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt');
const { isDate } = require('../helpers/isDate');
const { 
    getEventos, 
    crearEvento, 
    actualizarEvento, 
    eliminarEvento 
} = require('../controllers/events');

router.use(validarJWT);

router.get('/', getEventos);

router.post('/', [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha final es obligatoria').custom(isDate),
    validarCampos
], crearEvento);

router.put('/:id',[
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha final es obligatoria').custom(isDate),
], actualizarEvento);

router.delete('/:id', eliminarEvento);


module.exports = router;
