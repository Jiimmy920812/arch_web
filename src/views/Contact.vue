<script setup>

</script>

<template>
  <div class="contactbg center">
    <div class="mainImg bgSetting"></div>
    <div class="menuBg">
      <div class="textGround">
        <div class="line"></div>
        <h1>CONTACT US</h1>
        <div class="line"></div>
      </div>

      <div class="form">
        <div class="row">
          <input class="inputCell" type="text" placeholder="姓名*">
          <input class="inputCell" type="text" placeholder="連絡電話">
        </div>
        <div class="row">
          <input class="inputCell long" type="text" placeholder="E-mail*">
        </div>
        <div class="row">
          <textarea class="textarea" name="" id="" cols="30" rows="10" placeholder="留言訊息*"></textarea>
        </div>
        <div class="row row_center">
          <button class="confirm_btn">確認送出</button>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footerSection">
        <div class="iconGround">
          <div class="icon icon_tel"></div>
          <p>07-2826999</p>
        </div>
        <div class="iconGround">
          <div class="icon icon_location"></div>
          <p>高雄市前金區五福三路63號9樓</p>
        </div>
      </div>
      <div class="footerSection">
        <div class="iconGround">
          <div class="icon icon_mail"></div>
          <p>youngder@young-der.com</p>
        </div>
        <div class="iconGround">
          <div class="icon icon_line"></div>
          <p>LINE官方帳號</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.confirm_btn {
  cursor: pointer;
  margin-top: 30px;
  width: 140px;
  height: 50px;
  background-color: var(--gold_1);
  font-size: 18px;
  letter-spacing: 3px;
  color: white;
}

.confirm_btn:hover {
  background-color: var(--black_1);
}

.contactbg{
  width: 100%;
  flex-direction: column;
}

.mainImg {
  width: 100%;
  height: 80vh;
  background-image: url('../../public/img/Contact/contact_main.jpeg');
}

.menuBg {
  margin-top: -200px;
  margin-bottom: 100px;
  width: 500px;
  height: 600px;
  background: #fff;
  padding: 50px 48px;
  border: 1px solid #d1d5d5;
  border-bottom: 2px solid var(--gold_1);
}



.textGround {
  display: flex;
  flex-direction: column;
  align-items: center;

  .line {
    height: 1.5px;
    width: 90%;
    background-color: var(--gold_1);
  }

  h1 {
    letter-spacing: 5px;
    font-weight: 900;
    color: var(--gold_1);
  }
}

.form {
  margin-top: 50px;

  .row {
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .row_center {
    justify-content: center;
  }


  .inputCell {
    font-size: 16px;
    height: 40px;
    width: 220px;
    border-bottom: 1px solid #111111;
    background: rgba(218, 218, 218, 0.1);
    padding: 6px 10px;
    outline: none
  }

  .long {
    width: 100%;
  }

  .textarea {
    font-size: 16px;
    height: 200px;
    width: 100%;
    border-bottom: 1px solid #111111;
    background: rgba(218, 218, 218, 0.1);
    padding: 6px 10px;
    outline: none;
    resize: none;
  }


}





.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 30px;
  height: 150px;
  background-color: var(--black_1);
  background-image: url("../../public/img/menu-line.png");


  .footerSection {
    display: flex;
    gap: 30px;
  }

  .iconGround {
    display: flex;
    align-items: center;
    gap: 15px;

    p {
      color: white;
      font-size: 14px;
    }

    .icon {
      width: 30px;
      height: 30px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .icon_tel {
      background-image: url('../../public/img/Contact/icons8-phone-50.png');
    }

    .icon_location {
      background-image: url('../../public/img/Contact/icons8-location-30.png');
    }

    .icon_mail {
      background-image: url('../../public/img/Contact/icons8-email-30.png');
    }

    .icon_line {
      background-image: url('../../public/img/Contact/contact-line.png');
    }
  }
}

@media screen and (max-width:950px) {
  .menuBg {
    width: 65%;
  }

  .row {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    .inputCell {
      width: 100%;
    }

    .confirm_btn {
      margin: 0px;
    }

  }

  .footerSection {
    flex-direction: column;
    gap: 40px
  }
}

@media screen and (max-width:580px) {
  .footer {
    height: 70vw;
    flex-direction: column;
    gap: 30px;
  }

  .footerSection {
    width: 90%;
    gap: 10px;
  }

}
</style>
