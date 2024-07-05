import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.headerdiv}>
        <div className={styles.headerupperdiv}>
          <div className={styles.headerlogodiv}>
            <Image src={"/rocket.png"} alt={"icon"} width={45} height={45}></Image>
            <span className={styles.headernamespan}>فروش گیفت کارت</span>
          </div>
          <div className={styles.headermenudiv}>
            <span className={styles.headermenuspan}>خانه</span>
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

      <div>
        <div>

        </div>
        <div>
          <div>

          </div>
          <div>
            
          </div>
        </div>
      </div>
    </main>
  );
}
