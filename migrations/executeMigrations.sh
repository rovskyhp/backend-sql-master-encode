
#/usr/bin/bash

knex migrate:up 20210506051020_empresas.js && 
knex migrate:up 20210506050915_prospectos.js && 
knex migrate:up 20210506050955_vacantes.js && 
knex migrate:up 20210507021515_postulaciones.js && 
knex migrate:up 20210506051011_habilidades.js && 
knex migrate:up 20210507011333_habilidades_prospectos.js && 
knex migrate:up 20210507011356_vacantes_habilidades.js && 
knex migrate:up 20210507011415_postulaciones_vacantes.js &&
knex migrate:up 20210513013236_agregar_is_active.js