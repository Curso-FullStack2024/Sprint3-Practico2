import express from "express";

import {
     obtenerSuperheroePorIdController, obtenerTodoslosSuperheroesController, buscarSuperheroesPorAtributoController,
     obtenerSuperheroesMayoresDe30Controller, agregarHeroeController, actualizarHeroeController, borrarHeroeController, borrarPorNombreController
} from '../controllers/superheroesController.mjs'
import { heroeValidation } from '../validators/heroeValidator.mjs'
import { handleValidationErrors } from "../middlewares/errorMiddleware.mjs";

const router = express.Router()

router.get('/heroes', obtenerTodoslosSuperheroesController)
router.get('/heroes/id/:id', obtenerSuperheroePorIdController)
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController)
router.get('/heroes/mayoresDe30/', obtenerSuperheroesMayoresDe30Controller)

router.post('/heroes/nuevoheroe/', heroeValidation(), handleValidationErrors, agregarHeroeController)
router.put('/heroes/actualizar/:id', heroeValidation(), handleValidationErrors, actualizarHeroeController)
router.delete('/heroes/borrar/:id', borrarHeroeController)
router.delete('/heroes/borrarpornombre/:name', borrarPorNombreController)

export default router;