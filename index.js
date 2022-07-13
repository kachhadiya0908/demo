function loadCoupon()
{
    document.getElementById("Coupon").style.display="block"
}
function closeCoupon()
{
    document.getElementById("Coupon").style.display="none"
}
function demoExternal()
{
    if(confirm('Are you sure for logout  from the web?'))
    {
        alert('You are logged out')
    }
    else
    {
        alert('Try!!sorry you can\'t logged out' )
    }
}
function changeMode()
        {   
            let dash=document.body;
            
            
            dash.classList.toggle('mybody')
        }
function myFunction()
{   
          // let dash1=document.nav;
          // dash1.classList.toggle('cg')
           let cdm=Array.from(document.getElementsByClassName("nav1"));
           console.log(cdm)
           cdm.map(elements=>elements.classList.toggle('cg'))

            
            
}