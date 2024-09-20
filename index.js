function email(){
    var params={
name:document.getElementById('name').value,
email:document.getElementById('email').value,
// password:document.getElementById('password').value,
message:document.getElementById('message').value





    }

    const serviceID="service_cnfy71k";
    const templateID="template_4moumvg";

    emailjs.send(serviceID,templateID,params).then((res) => {

        document.getElementById('name').value="";
        document.getElementById('email').value="";
        document.getElementById('password').value="";
        document.getElementById('message').value="";

        console.log(res)
        alert('Your email sent successfully')
    })
    .catch((err)=>console.log(err))

    
}



let click=document.getElementsByClassName('sub')[0]
click.addEventListener('click',email)
console.log(click)







$(document).ready(function(){
    let updateCount=0;
     function counter(){
      updateCount++
    
    
      $('#cart-count').text(updateCount)
     }
    
    $('.button-1').on('click',counter)
    
    })










    $(document).ready(function(){
        let cartBtn= $('#cart-btn');
          let closeBtn=$('#close-btn');
          let sidebar =$('#cart-sidebar');
          // let overlay =$('#overlay');
      
          function show (){
      
      sidebar.addClass('open');
      // overlay.css('display','block')
      
          }
          cartBtn.on('click', show);
      
      
      function hide(){
      sidebar.removeClass('open');
      // overlay.css('display','none')
      
      }
      closeBtn.on('click', hide);
      
      
      
      })