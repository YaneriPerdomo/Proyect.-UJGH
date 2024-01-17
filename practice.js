  
  console.log("Practice")
 
 let container_modal = document.querySelector(".container-modal-iniciar");
 let info = document.querySelector(".info");

  const title = document.querySelector(".title h1 small")
   
 const button_name = document.querySelector(".button_name");


 function button_namee (e)  {

  const input = document.querySelector("input").value;
  console.log(typeof(input))
  const input_a = document.querySelector(".input_adver label")
  if(!input ){
    input_a.innerHTML = ""
    input_a.innerHTML = "El campo esta vacìo."
   return input_a.style.background = "tomato"
    
  }



  const name = input;
  title.insertAdjacentText("afterbegin", name)
  const body_name = document.querySelector(".paso_1")
  body_name.removeChild(body_name.children[1])

  button_name.removeEventListener("click",button_namee)
  
  const preguntas = document.querySelector(".preguntas");
  preguntas.classList.replace("d-none","d-inline")

 }

 button_name.addEventListener("click", button_namee)
  
 const info_1 = document.querySelector(".info_1")
 
 
 info_1.addEventListener("click" , (e) => {
  container_modal.style.display = "flex";
  info.innerHTML = ` <h2 class=" class="text-primary">Alumnos nuevo ingreso</h2>
                      <u>Información académica.</u>
                      <br>
                      <p>Las materias se desarrollan de forma regular durante las 12 semanas que dura cada periodo.</p>
                      <u>Información administrativa</u>
                      <p>Las fechas de inscripción, así como los montos, son publicados en nuestras redes sociales @INFOUJGH</p>              
                      <p>Los documentos requeridos para la inscripción como alumno nuevo ingreso, son los siguientes:</p>
                      <ul>
                          <li>4 fotografías de frente tipo carné</li>
                          <li>3 copias de la cédula de identidad ampliada 150% y centrada (No recortar)</li>
                          <li>Partida de nacimiento (En buen estado)</li>
                          <li>Fondo negro del Título de Bachiller, certificado por la institución de procedencia.</li>
                          <li>Fondo negro de las notas de 1ro a 5to año de bachillerato, certificado por la institución de procedencia.</li>
                          <li>Certificado de participación en el Sistema Nacional de Ingreso a la Educación Universitaria – (OPSU).</li>
                      </ul>`
 })


  
 document.addEventListener("click", (e) => {
  if(e.target.matches(".close")){
    const window = document.querySelector(".container-modal-iniciar");
    window.style.display = "none"
    const login = document.querySelector(".Fondo-Login");
    login.style.animation = "finish 3s linear 200ms 1 alternate both;"
}

  if(e.target.matches("#info_2")){

    container_modal.style.display = "flex";
    info.innerHTML = `
    <h2 class="text-primary">Una vez inscrito, dónde puedes conseguir apoyo para los procesos académicos</h2>
    <p> Cada carrera está adscrita a un Decanato que dirige los procesos de docencia de manera efectiva, los estudiantes pueden a través  de estas dependencias,  canalizar cualquier tipo de asesoría o consulta relacionada con la actividad académica, tales como: Profesores de las materias, procesos para Trabajo Especial de Titulación, apoyo para solventar inconvenientes académicos, entre otros. </p>
    <span> <b> Decanato de la Facultad de Humanidades, Arte y Educación (FHAE)  Carreras:</b> Educación Integral y Educación Preescolar. </span>
    <p class="mt-2"> Prof. Gabriela Pérez-Decana de FHAE &ndash; <a class="text-decoration-none">  gabriela.perez@ujgh.edu.ve </a> </p>
    <br>
    <span> <b> Decanato de la Facultad de Ciencias Económicas y Sociales (FACES)  Carreras:</b> Administración, Contaduría Pública y Gerencia de Recursos Humanos. </span>
    <p> Prof. Marieugenia Fernán dez-Decana de FACES &ndash; <a class="text-decoration-none "> marieugenia.fernandez@ujgh.edu.ve </a></p>
    <br>
    <span> <b> Decanato de la Facultad de Ingeniería (FING)  Carreras:</b> Ingeniería de Sistemas e Ingeniería de Computación. </span>
    <p> Prof. Daniel Romero-Decano de FING &ndash; <a class="text-decoration-none"> daniel.romero@ujgh.edu.ve </a> </p>
    `
    
    

  }
 })