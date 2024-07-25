$(document).ready(function(){
    $(".heading").waypoint(function(){
        $(".heading").addClass("animate__animated animate__fadeInLeft")
    },{offset:"80%"});
    $(".line").waypoint(function(){
        $(".line").addClass("animate__animated animate__fadeInUp")
    },{offset:"120%"});
    $(".about").waypoint(function(){
        $(".about").addClass("animate__animated animate__fadeInUp")
    },{offset:"80%"});
    $(".projects").waypoint(function(){
        $(".projects").addClass("animate__animated animate__fadeInUp")
    },{offset:"80%"});
    $(".contact-box").waypoint(function(){
        $(".contact-box").addClass("animate__animated animate__fadeInUp")
    },{offset:"80%"});
  
})