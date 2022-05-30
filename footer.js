var footerText = `<div> 
<footer class="footer-page">
  <div class="footer-page__text">Pizzaro 2021</div>
</footer>
</div>`;

function setFooter() {
  var footer =  document.createElement("div");
  footer.innerHTML = footerText ;
  document.body.insertAdjacentElement('beforeend', footer );
}

setFooter();