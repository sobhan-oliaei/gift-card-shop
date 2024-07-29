"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [productNumber, setProductNumber] = useState(1);
  const [totalPrice, setTotalPrice] = useState(200000);
  useEffect(() => {
    setTotalPriceState(productNumber)
  }, [productNumber]);

  function setTotalPriceState(pN: number) {
    setTotalPrice(200000 * pN);
  }

  return (
    <main>
      <div className={styles.headerdiv}>
        <div className={styles.headerupperdiv}>
          <div className={styles.headerlogodiv}>
            <Image src={"/rocket.png"} alt={"icon"} width={45} height={45}></Image>
            <span className={styles.headernamespan}>فروش گیفت کارت</span>
          </div>
          <div className={styles.headermenudiv}>
            <span className={styles.headermenuspan} onClick={() => router.push('/')}>خانه</span>
            <span className={styles.headermenuspan}>آموزش ها</span>
            <span className={styles.headermenuspan}>اخبار و تخفیف ها</span>
            <span className={styles.headermenuspan}>اینستاگرام ما</span>
            <span className={styles.headermenuspan}>تماس با ما</span>
          </div>
          <div className={styles.headersignindiv}>
            <button className={styles.headersigninbutton}>ثبت نام</button>
            <button className={styles.headersigninbutton}>ورود</button>
          </div>
        </div>
        <div className={styles.headerlowerdiv}>
          <div className={styles.headerlowerrightdiv}>
            <Image className={styles.headerimg} src={"/giftcard.png"} alt={"icon"} width={350} height={200}></Image>
            <div className={styles.headernamediv}>
              <h1>فروشگاه خرید گیفت کارت</h1>
              <br></br>
              <h3>اعتماد شما اعتبار ماست</h3>
            </div>
          </div>
          <div className={styles.headerlowerleftdiv}>
            <Image className={styles.headercontactimg} src={"/phone.png"} alt={"icon"} width={50} height={50}></Image>
            <div className={styles.headercontactspandiv}>
              <span className={styles.headercontactspan}>شماره تماس :</span>
              <br></br>
              <span className={styles.headercontactspan}>09031974483</span>
              <br></br>
              <span className={styles.headercontactspan}>شماره تلگرام :</span>
              <br></br>
              <span className={styles.headercontactspan}>09031974483</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.productdiv}>
        <div className={styles.productinfopickdiv}>
          <div className={styles.productinfodiv}>
            <h2>خرید گیفت کارت آیتونز</h2>
            <p>خرید گیفت کارت آیتونز با تحویل فوری خرید گیفت کارت آیتونز با تحویل فوری خرید گیفت کارت آیتونز با تحویل فوری خرید گیفت کارت آیتونز با تحویل فوری خرید گیفت کارت آیتونز با تحویل فوری خرید گیفت کارت آیتونز با تحویل فوری خرید گیفت کارت آیتونز با تحویل فوری خرید گیفت کارت آیتونز با تحویل فوری خرید گیفت کارت آیتونز با تحویل فوری خرید گیفت کارت آیتونز با تحویل فوری خرید گیفت کارت آیتونز با تحویل فوری خرید گیفت کارت آیتونز با تحویل فوری خرید گیفت کارت آیتونز با تحویل فوری خرید گیفت کارت آیتونز با تحویل فوری خرید گیفت کارت آیتونز با تحویل فوری</p>
          </div>
          <div className={styles.productpickdiv}>
            <div className={styles.productpicksrightdiv}>
              <span className={styles.productpicksupperspan}>آیتونز آمریکا</span>
              <br></br>
              <span className={styles.productpickslowerspan}>10 دلار</span>
            </div>
            <div className={styles.productpicksleftdiv}>
              <span className={styles.productpicksupperspan}>آیتونز آمریکا</span>
              <br></br>
              <span className={styles.productpickslowerspan}>25 دلار</span>
            </div>
            <div className={styles.productpicksrightdiv}>
              <span className={styles.productpicksupperspan}>آیتونز آمریکا</span>
              <br></br>
              <span className={styles.productpickslowerspan}>10 دلار</span>
            </div>
            <div className={styles.productpicksleftdiv}>
              <span className={styles.productpicksupperspan}>آیتونز آمریکا</span>
              <br></br>
              <span className={styles.productpickslowerspan}>25 دلار</span>
            </div>
          </div>
        </div>
        <div className={styles.productimgdiv}>
          <Image src={"/giftcard-apple.png"} alt={"icon"} width={500} height={500}></Image>
        </div>
      </div>
      <div className={styles.paymentdiv}>
        <div className={styles.paymentinfodiv}>
          <span className={styles.paymentinfospan} style={{marginTop: "0"}}>قیمت واحد : 200000</span>
          <br></br>
          <span className={styles.paymentinfospan}>محصول : گیفت کارت آیتونز آمریکا</span>
          <br></br>
          <span className={styles.paymentinfospan}>تعداد :</span>
          <input className={styles.paymentinfoinput} type="number" max="3" min="1" step="1" value={productNumber} onChange={(e) => { setProductNumber(Number(e.target.value)) }}></input>
          <br></br>
          <span className={styles.paymentinfospan} style={{borderBottomStyle: "solid", paddingBottom: "5px", borderColor: "#3572EF"}}>قیمت کل : {totalPrice}</span>
        </div>
        <div className={styles.paymentpaydiv}>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={styles.paymenthelpdiv}>
        <span>کلیه کارت های بانکی عضو شبکه شتاب برای تمامی بانک ها امکان پرداخت دارند.</span>
        <br></br>
        <span>این وبسایت دارای نماد اعتماد الکترونیکی از وزارت بازرگانی می باشد.</span>
        <br></br>
        <span>تایید تلفن همراه و تلفن ثابت در این وبسایت الزامی میباشد.</span>
        <br></br>
        <span>خواهشمند است در انتخاب کالا دقت فرمایید؛ کد تحویل داده شده تعویض ویا مرجوع نمی گردد.</span>
      </div>
    </main>
  );
}
