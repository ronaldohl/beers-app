# Preguntas Técnicas

1. **¿Has aplicado los principios SOLID?**
   En parte si, trate de separar los componentes que se iban a repetir, en este caso solo la card y mi cargador. Para que tuvieran su funcionalidad exclusiva del componente.
   La store de vuex solo tiene lo necesario para su definición y funcionamiento, trate de separar el manejador de la store a traves de un composable pero hacía mas dificil y redudante la lectura del código en vez de hacerlo de manera mas limpia y directa.
   Además he tratado de seguir en la mayoria las buenas prácticas hasta donde el proyecto lo valga.


2. **¿Cuánto tiempo has estado pensando y escribiendo tests del código? Si
hubieras tenido mucho más tiempo... ¿qué habrías añadido? Si no has
realizado tests, ¿qué herramientas habrías utilizado para llevarlos a cabo?** 
    Para esta aplicación no realice pruebas, por falta de tiempo, habría definido pruebas unitarias para el modulo de la obtencion de la data, y de los filtrados de información, y las herramientas para haberlo utilizado serían JEST 
1. **¿Cómo mejorarías la API que has usado?**
    Permitiria un endpoint para obtener todas las cervezas, así como documentar cual es el máximo de items por request.
    En la respuesta para un endpoint si se esta estableciendo paginación en el endpoint, regresaria el endpoint para la siguiente y anterior página

2. **¿Crees que esta API soporta peticiones CORS? ¿Cómo has llegado a esa
conclusión?**
    Sí, porque en los encabezados de respuesta nos regresa los headers siguientes :
    **access-control-allow-credentials**: true
**access-control-allow-origin**: *
**access-control-expose-headers**: x-ratelimit-limit,x-ratelimit-remaining,content-length,origin,content-type,accept
     .
     así que si soporta las peticiones cors pero están configuradas para que se puedan hacer peticiones de cualquier origen

5. **¿Cómo rastrearías un problema de rendimiento en producción? ¿Alguna
vez has tenido que hacerlo?**
    No he tenido que hacerlo, podría ser configurando un logger segun los eventos deseados a rastrear. 


6. **Descríbete a ti mismo en formato JSON.**
   ```
    {
        "nombre" : "Ronaldo Antonio",
        "apellido_paterno" : "Hernández"
        "apellido_materno" : "López"
        "ubicacion" : "Aguascalientes, México"
        "edad" : 25,
        "datos_profesionales" : {
            "profesion" : "Ing. Sistemas Computacionales",
            "universidad_egreso" : "Universidad Autónoma de Aguascalientes"
            "fecha_egreso" : "2020",
            "experiencia_laboral" : [
                {
                    "empresa": "Club Campestre de Aguascalientes", 
                    "puesto": "Ingeniero en Sistemas", 
                    "desde": "2016",
                    "hasta": "actual"
                },
                {
                    "empresa": "Teko Estudio",
                    "puesto": "Desarrollador Web / Front End",
                    "desde": "2020", "hasta": "actual"
                },
                {
                    "empresa": "Boletify",
                    "puesto": "Desarrollador de Soporte",
                    "desde": "01/2020",
                    "hasta": "05/2020"
                },
                "tecnologias" : [
                    'HTML', 'CSS', 'Javascript', 'Vue', 'PHP', 'Wordpress'
                ]
            ]
        },
        pasatiempos: [
            'Ver Videos' , 'Series', 'Jugar Futbol', 'Leer Blogs de tecnología'
        ]
    }
   ```