module.exports=de;

function de(){
    let day=new Date();
    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    return day.toLocaleDateString("en-US",options);
}