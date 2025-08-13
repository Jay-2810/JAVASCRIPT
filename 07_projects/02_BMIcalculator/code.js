const form=document.querySelector('form');
const guide=document.querySelector('#weight-guide');
console.log(guide);
// this usecase will give empty value
// const height=parseInt(document.querySelector('#height').value);

form.addEventListener('submit',function(e){
  // wait until submit action is performed
  e.preventDefault();
  const height=parseInt(document.querySelector('#height').value);
  const weight=parseInt(document.querySelector('#weight').value);
  const result=document.querySelector('#results');

  if(height=="" || height<0 || isNaN(height))
  {
    result.innerHTML=`Enter a valid height ${height}`;
  }
  else if(weight=="" || weight<0 || isNaN(weight))
  {
    result.innerHTML=`Enter a valid weight ${weight}`;
  }
  else
  {
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    result.innerHTML=`<span>${bmi}</span>`;
    // if(bmi<18.6)
    // {
    //   result.appendChild(guide[1]);
    // }
    // else if(bmi>=18.6 && bmi<24.9)
    // {
    //   result.appendChild(guide[2]);
    // }
    // else
    // {
    //   result.appendChild(guide[3]);
    // }
  }
})