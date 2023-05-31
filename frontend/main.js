const myform=document.querySelector('#my-form')
const nameInput = document.querySelector('#inputName')
const emailInput=document.querySelector('#inputEmail')
const contactInput=document.querySelector('#inputContact')
const showAll=document.querySelector('.btn2')



const msg=document.querySelector('.msg')
const userlist= document.querySelector('#users')

myform.addEventListener('submit',onsubmit);

userlist.addEventListener('click',removeItem)
userlist.addEventListener('click',editItem)
showAll.addEventListener('click',ShowAllBookings)



async function onsubmit(e){
    e.preventDefault();

    if(nameInput.value==="" || emailInput.value==="" || contactInput.value===""){
    msg.innerHTML="ERROR:Please Enter All Feilds"
    setTimeout(()=>{
        msg.remove()
    },2000)

    }else{
        const newbookings=await axios.post('http://localhost:5000/bookings',{
            name: nameInput.value,
            email: emailInput.value
        });
        

        const li=document.createElement('li')
         
        li.appendChild(document.createTextNode(`${nameInput.value},${emailInput.value},${contactInput.value}`))

         userlist.appendChild(li);

         const deletebtn=document.createElement('button');
         deletebtn.className='delete'
         deletebtn.appendChild(document.createTextNode('Delete'));
         li.appendChild(deletebtn)


         const editbtn=document.createElement('button');
         editbtn.className='edit'
         editbtn.appendChild(document.createTextNode('Edit'))
         li.appendChild(editbtn)

        nameInput.value=""
        emailInput.value=""
        contactInput.value=""
    }
}

function removeItem(e){
    if(e.target.classList.contains('delete'))
    {   
    if(confirm("Are you sure?"))
    {
        var li = e.target.parentElement;
        userlist.removeChild(li);
    }
    }

}

function editItem(e){
    if(e.target.classList.contains('edit'))
    {
        if(confirm('Do you want to edit'))
        {
            const li=e.target.parentElement
            li.contentEditable = true;
        }
    }
}
async function ShowAllBookings(e){
    e.preventDefault();
    const products=await axios.get('http://localhost:5000/bookings');
    console.log(products.data);
    

    const bookings=document.getElementById('bookings');
    products.data.forEach(product=>{
        const childElement=document.createElement('li');
        childElement.innerHTML=product.name+","+product.email;
        bookings.appendChild(childElement);
    })
}

// async function addBookingsToDatabase(e){
//     e.preventDefault();
//     const newbookings=await axios.post('http://localhost:5000/bookings');
//     console.log(newbookings.data);
// }