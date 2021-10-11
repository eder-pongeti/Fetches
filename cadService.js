/*let myForm =document.querySelector("#myForm")
									let	postDados={
									  method: 'POST',
									  body:JSON.stringify({
        "service": myForm.service.value,
        "description": myForm.description.value}),
        "is_active": myForm.chk.checked,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0Mjk4NTEzLCJqdGkiOiI3MGYzNzM3YTQ4MjE0Y2NiYmY0ZjEyMmQ3YjgyMGY2MiIsInVzZXJfaWQiOjN9.FXJxj-6vTpVaLYULwAYnMTjKVOY9zM0kOu7RgbFibCc"
        }
							 }
								
								myForm.addEventListener('submit',(e)=>{
								e.preventDefault()
					
								fetch("https://scheduletce.herokuapp.com/services/",postDados)
.then(res => res.json())
.then(data => console.log(data))
.catch(e => console.log('Vish: ', e))
							
				 })//fecha o addEventListener

*/         
let myForm = document.querySelector("#myForm")

myForm.addEventListener('submit',(e)=>{
  e.preventDefault()

  var myHeaders = new Headers()
  myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0Mjk4NTEzLCJqdGkiOiI3MGYzNzM3YTQ4MjE0Y2NiYmY0ZjEyMmQ3YjgyMGY2MiIsInVzZXJfaWQiOjN9.FXJxj-6vTpVaLYULwAYnMTjKVOY9zM0kOu7RgbFibCc");
  myHeaders.append("Cookie", "csrftoken=pBlNpGwQ3XL5Gp1HqM5jp9GYXmt5W9QXAXnSQXky3JBUOCV2ZacBRTpizrryeRLN");
  
  
  var formdata = new FormData()
  formdata.append("service", myForm.service.value)
  formdata.append("description",myForm.description.value)
  formdata.append("is_active",myForm.is_active.checked)
  

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  }

fetch("https://scheduletce.herokuapp.com/services/", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))

})