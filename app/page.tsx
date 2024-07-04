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

      <div className={styles.productsdiv}>
        <div className={styles.productdiv}>
          <Image className={styles.productimg} src={"/apple.png"} alt={"icon"} width={140} height={140}></Image>
          <button className={styles.productbutton}>آیتونز اپل</button>
        </div>
        <div className={styles.productdiv}>
          <Image className={styles.productimg} src={"/telegram.png"} alt={"icon"} width={140} height={140}></Image>
          <button className={styles.productbutton}>تلگرام پرمیوم</button>
        </div>
        <div className={styles.productdiv}>
          <Image className={styles.productimg} src={"/google.png"} alt={"icon"} width={140} height={140}></Image>
          <button className={styles.productbutton}>گوگل پلی</button>
        </div>
        <div className={styles.productdiv}>
          <Image className={styles.productimg} src={"/steam.png"} alt={"icon"} width={140} height={140}></Image>
          <button className={styles.productbutton}>استیم (steam)</button>
        </div>
        <div className={styles.productdiv}>
          <Image className={styles.productimg} src={"/xbox.png"} alt={"icon"} width={140} height={140}></Image>
          <button className={styles.productbutton}>ایکس باکس(xbox)</button>
        </div>
        <div className={styles.productdiv}>
          <Image className={styles.productimg} src={"/playstation.png"} alt={"icon"} width={140} height={120} style={{ marginTop: "17px", marginBottom: "10px" }}></Image>
          <button className={styles.productbutton}>پلی استیشن</button>
        </div>
        <div className={styles.productline}></div>
        <div className={styles.productdiv}>
          <Image className={styles.productimg} src={"/spotify.png"} alt={"icon"} width={140} height={140}></Image>
          <button className={styles.productbutton}>اسپاتیفای (spotify)</button>
        </div>
        <div className={styles.productdiv}>
          <Image className={styles.productimg} src={"/mastercard.png"} alt={"icon"} width={140} height={120} style={{ marginTop: "17px", marginBottom: "10px" }}></Image>
          <button className={styles.productbutton}>مستر کارت مجازی</button>
        </div>
        <div className={styles.productdiv}>
          <Image className={styles.productimg} src={"/visa.png"} alt={"icon"} width={140} height={80} style={{ marginTop: "37px", marginBottom: "30px" }}></Image>
          <button className={styles.productbutton}>ویزا کارت مجازی</button>
        </div>
        <div className={styles.productdiv}>
          <Image className={styles.productimg} src={"/amazon.png"} alt={"icon"} width={140} height={140}></Image>
          <button className={styles.productbutton}>آمازون (amazon)</button>
        </div>
        <div className={styles.productdiv}>
          <Image className={styles.productimg} src={"/netflix.png"} alt={"icon"} width={140} height={140}></Image>
          <button className={styles.productbutton}>نتفلیکس(netflix)</button>
        </div>
        <div className={styles.productdiv}>
          <Image className={styles.productimg} src={"/nintendo.png"} alt={"icon"} width={140} height={140}></Image>
          <button className={styles.productbutton}>نینتندو (nintendo)</button>
        </div>
      </div>
      <div className={styles.introsdiv}>
        <div className={styles.introdiv}>
          <Image className={styles.productimg} src={"/quick.png"} alt={"icon"} width={75} height={75}></Image>
          <span style={{ position: "relative", top: "32.5px" }}>کد محصول بلافاصله پس از خرید تحویل داده میشود.<br></br>از قسمت گزارش خرید تمامی کد های خریداری شده را مشاهده نمایید.</span>
        </div>
        <div className={styles.introdiv}>
          <Image className={styles.productimg} src={"/precision.png"} alt={"icon"} width={75} height={75}></Image>
          <span style={{ position: "relative", top: "32.5px" }}>خواهشمند است در انتخاب کالا دقت فرمایید; کد تحویل داده شده تعویض و یا مرجوع نمی گردد.</span>
        </div>
        <div className={styles.introdiv}>
          <Image className={styles.productimg} src={"/info.png"} alt={"icon"} width={75} height={75}></Image>
          <span style={{ position: "relative", top: "32.5px" }}>جهت تماس با ما میتوانید روش های متفاوتی استفاده کنید.</span>
        </div>
      </div>
      <div className={styles.contactdiv}>
        <div className={styles.contactinnerdiv}>
          <div className={styles.contactinnerinnerdiv}>
            <Image className={styles.contactinnerimg} src={"/phone-call.png"} alt={"icon"} width={45} height={45}></Image>
            <div className={styles.contactinnerspandiv}>
              <span className={styles.contactinnerbigspan}>شماره تماس</span>
              <br></br>
              <span className={styles.contactinnersmallspan}>09031974483</span>
            </div>
          </div>
          <div className={styles.contactinnerinnerdiv}>
            <Image className={styles.contactinnerimg} src={"/email.png"} alt={"icon"} width={45} height={45}></Image>
            <div className={styles.contactinnerspandiv}>
              <span className={styles.contactinnerbigspan}>پست الکترونیکی</span>
              <br></br>
              <span className={styles.contactinnersmallspan}>sobhanolyayi@gmail.com</span>
            </div>
          </div>
          <div className={styles.contactinnerinnerdiv}>
            <Image className={styles.contactinnerimg} src={"/location.png"} alt={"icon"} width={45} height={45}></Image>
            <div className={styles.contactinnerspandiv}>
              <span className={styles.contactinnerbigspan}>آدرس</span>
              <br></br>
              <span className={styles.contactinnersmallspan}>بلوار احمدآباد - احمدآباد 32 - پلاک 54</span>
            </div>
          </div>
        </div>
        <Image className={styles.mapdiv} src={"/googlemap.png"} alt={"map"} width={500} height={300}></Image>
      </div>
      <p>طراح وب سایت : سید محمد سبحان اولیائی</p>
    </main>
  );
}
