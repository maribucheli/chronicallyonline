# Mariana Bucheli - Documentación web final

### 20 de abril 
- [Librerias, frameworks e I.A.](./tm112-mariana-bucheli)


### 27 de abril 


## Repositorio
 
> Modifiqué el título `Repo:` a `Repositorio`
> para poder tener un índice mejor organizado.
> [name=ruidajo] [time=lun., 4 de may. de 2026 6:26]

https://github.com/maribucheli/chronicallyonline 

## Antecedentes

- [Prompt para humanos](./m.buchelim2:02).
- https://buchelita.hotglue.me/
- https://maribucheli.github.io/intuicionesbinarias/
    - Repo: https://github.com/maribucheli/intuicionesbinarias
- https://maribucheli.github.io/ahbestia/
    - Repo: https://github.com/maribucheli/ahbestia
- https://maribucheli.github.io/recorrido/
    - Repo: https://github.com/maribucheli/recorrido

> Agregué la sección `Antecedentes`
> con el listado de entregables como recursos y referencia.
> [name=ruidajo] [time=lun., 4 de may. de 2026 6:26]

## Referentes
- Tipografía: https://enflujo.com/proyectos/tipografia-en-flujo/. Me gustó la estética y me llamó la atención la forma en la que fue creada. 
- Interactividad: https://jaimerodriguezgomez.com/proyectos/amor-en-pixeles/. Parecida a la del recorrido virtual, tiene un llamado a la acción claro. 
- Indice: https://worldonawire.net/#. Quiero copiarme de esta forma no lineal de presentar el índice. 
- Personajes: https://floor796.com/#t3l3,15,95. Esto está muy difícil pero quiero encontrar una forma de representar personajes en la web. 
- Diseño: https://cargo.site/templates/preview/3433978. Quiero que mi página emule la web de los 2010s, tipo ciber. 
- Ciber foto/basicos: https://jaimander.github.io/nm/


## Planteamiento 
- Qué voy a contar: la nostalgia del Internet hispano de la década de los 2010s. 
- Cómo lo voy a contar: a través de un mapa interactivo. Estamos dentro de un cibercafé, y debes elegir con qué grupo sentarte (la web se dirige hacia el usuario en segunda persona). Según la decisión que tomes, podrás acercarte al "starter pack" de cada grupo o tribu urbana.
- Grupos
    - Deprimidos tumblr
    - Gamers (Minecraft, Fornite, Call of Duty)
    - Crafters (slime, manillas, DIY)
    - Maquillaje (Yuya, James Charles)
    - Lectores (Juegos del Hambre, Crepúsculo)
    - Reggeatoneros 
- Cómo me lo imagino visualmente ---- usar hotglue para starter packs 

![](https://notes.commonscomputer.com/uploads/c30c4956-01c6-40d4-a9e0-0bb6b1898464.jpg)

![](https://notes.commonscomputer.com/uploads/6105571c-7bd3-46a0-9aec-cd26e454cc85.jpg)




## Limitaciones/ fe de erratas

1. Anacronía. Nací en el 2006, por ende, las culturas de Internet con las que crecí frueron las del 2013 a 2019, donde los cibercafés comenzaron a dejar de ser relevantes. Sin embargo, quiero mantener la estética Windows 7/ cibercafé ya que, debido a la brecha digital  de Colombia e Hispanoamérica, las tendencias o avances tecnológicos llegan con atraso comparado al Norte Global. Yo seguía yendo a cibercafés en 2015, por ejemplo.
2. A pesar de la anacronía, mi objetivo es regresar a la web de antes, antes del doomscrolling, de las tendencias vacías, de los influencers y su marketing excesivo. Quiero construir una utopía del Internet de la década de los 2010s y evocar ese pasado nostálgico de lo que crecimos viendo y consumiendo la generación Z  (o incluso millenials en una etapa tardía). 



## Reporte Lighthouse (accesibilidad)![](https://notes.commonscomputer.com/uploads/fe3547be-2ed7-4f67-81db-a714d3d068ba.png)

- Ojo SEO (search engine optimization) - WEB SEMATICA (que el algoritmo lo pueda leer y entender)
- Hacer webs accesibles para personas con discapacidades


## Livecoding

### Hydra 
- Fractales: 

```await loadScript("https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-fractals.js")

//await loadScript("https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-outputs.js")

//oS.setLinear()

src(o0)
	.scale(.5)
	.mirrorX10()
	.blend(o0,.7)
	.out() 
    
```

- Destruido: https://hydra.ojack.xyz/?sketch_id=malitzin_0 

```// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
//CNDSD
//http://malitzincortes.net/
// sand spirals

osc(3, 0.01, 0.4)
.color(1.2,1.2,1.3)
.saturate(0.4)
.modulateRepeat(osc(2),0, 0, 0, 0)
.modulateKaleid(osc(12,0.05,0),1)
.luma (0.4)
.rotate(4, 0.1,0)
.modulate(o0, () => mouse.y *0.0002 )
.scale(1).diff(o1)
.out(o0)

    
```

- Documentación: https://hydra.ojack.xyz/docs/ 





### Struddel 



```
$: s(`<<<bd -!2 bd!2 -!3>*8>!9 bd
     <<bd -!2 bd!2 -!3>*8>!6 bd -
     >`)
  .bank("casiorz1")
  .dec(slider(0.091,0,1))
  .gain(slider(0.2899,0.1))
  .room("0.20")

$: s("<<- hh>*4!9 - <- hh>*4!6 - ->")
  .bank("casiorz1")
  .dec(slider(0.082,0,1))
  .gain(slider(0.139,0,1))
```


![](https://notes.commonscomputer.com/uploads/5b75bd54-3953-41f1-9900-9e2f22d8817e.png)
![](https://notes.commonscomputer.com/uploads/6fe2e870-f5d1-42a4-89a6-6f69d1b7bbe3.png)




Cosas por hacer

[] Crear avatares en Dress to impress
[] Crear collages starterpacks en Hotglue
[] Integrar simulador collages y avatares al codigo principal
[] Integrar simulador log in y tiempo al codigo principal
[] Accesibilidad
[] Estilo (Windows, tipos de letra, colores, animaciones, etc)

