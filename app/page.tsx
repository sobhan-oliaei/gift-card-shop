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
        <div>
          <div>
            <div>
              <img></img>
            </div>
            <div>
              <h3>فروشگاه خرید گیفت کارت</h3>
              <br></br>
              <h5>اعتماد شما اعتبار ماست</h5>
            </div>
          </div>
          <div>
            <img></img>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
          </div>
        </div>
      </div>

      <div>
        <div>
          <img></img>
          <button></button>
        </div>
        <div>
          <img></img>
          <button></button>
        </div>
        <div>
          <img></img>
          <button></button>
        </div>
        <div>
          <img></img>
          <button></button>
        </div>
        <div>
          <img></img>
          <button></button>
        </div>
        <div>
          <img></img>
          <button></button>
        </div>
      </div>
    </main>
  );
}
