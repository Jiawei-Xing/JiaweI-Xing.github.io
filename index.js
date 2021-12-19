document.addEventListener('DOMContentLoaded', function() {
  document.querySelector("#home").onclick = function() {
    document.querySelector("#home_view").style.display = "block";
    document.querySelector("#research_view").style.display = "none";
    document.querySelector("#publication_view").style.display = "none";
    document.querySelector("#contact_view").style.display = "none";
  }; 
  
  document.querySelector("#research").onclick = function() {
    document.querySelector("#home_view").style.display = "none";
    document.querySelector("#research_view").style.display = "block";
    document.querySelector("#publication_view").style.display = "none";
    document.querySelector("#contact_view").style.display = "none";
  }; 
  
  document.querySelector("#publication").onclick = function() {
    document.querySelector("#home_view").style.display = "none";
    document.querySelector("#research_view").style.display = "none";
    document.querySelector("#publication_view").style.display = "block";
    document.querySelector("#contact_view").style.display = "none";
  }; 
  
  document.querySelector("#contact").onclick = function() {
    document.querySelector("#home_view").style.display = "none";
    document.querySelector("#research_view").style.display = "none";
    document.querySelector("#publication_view").style.display = "none";
    document.querySelector("#contact_view").style.display = "block";
  }; 
)};  
