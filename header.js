var headerText = `<div>
<header class="header-page">
    <div class="header-page__container">
      <div class="header-page__start">
        <div class="logo">
          <img class="logo__img" src="./img/common/logo.svg" alt="" width="127" height="21">
        </div>
      </div>
      <div class="header-page__end">
        <nav class="header-page__nav">
          <ul class="header-page__ul">
            <li class="header-page__li">
              <a class="header-page__link" href="D:/self/pizza course_work/index.html" data-scroll-to="section-catalog">
                <span class="header-page__text">пицца</span>
              </a>
            </li>
            <li class="header-page__li">
              <a class="header-page__link" href="./about-us.html">
                <span class="header-page__text">о нас</span>
              </a>
            </li>
            <li class="header-page__li">
              <a class="header-page__link" href="./contacts.html">
                <span class="header-page__text">контакты</span>
              </a>
            </li>
          </ul>
        </nav>
        <div class="phone">
          <a class="phone__item header-page__phone" href="tel:+375298513145">+375 29 851-31-45</a>
        </div>
        <div class="header-page__hamburger">
          <button class="btn-menu" type="button">
            <span class="btn-menu__box">
              <span class="btn-menu__inner"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </header>
</div>`;

function setHeader() {
  var header =  document.createElement("div");
  header.innerHTML = headerText ;
  document.body.insertAdjacentElement('afterbegin', header );
}

setHeader();

