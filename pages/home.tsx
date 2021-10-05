import HeroWithAngelImageOnRight from "../components/sections/heroes/with_angled_image_on_right";
import AlternatingWithOptionalTestimonial from "../components/sections/feature-sections/alternating_with_optional_testimonial";
import AlternativeSideBySideWithImages from "../components/sections/feature-sections/alternative_side_by_side_with_images";
import BrandPanelWithAppScreenShot from "../components/sections/cta-sections/brand_panel_with_app_screenshot";
import BrandPanelWithOverlappingImage from "../components/sections/cta-sections/brand_panel_with_overlapping_image";
import HeroWithSocialNStats from "../components/hero-with-social-n-stats";

import ThreeColumnCards from "../components/sections/blog-sections/3_column_cards";
import SimpleCenterBranded from "../components/sections/cta-sections/simple_center_branded";
import SimpleWithHeading from "../components/sections/logo-clouds/simple_with_heading";
import Youtube from "../components/youtube";

import * as Icon from "@heroicons/react/outline";
import { getAllPosts } from "../utils/api";
import Post from "../types/post";

import Logos from "../components/sections/logo-clouds/simple_with_heading_on_brand";

// import Blog from "../components/post/3_column_cards";

/* 
Learn how to use available markdown and HTML 
https://github.com/rehypejs/rehype-raw
https://github.com/remarkjs/remark-gfm
https://commonmark.org/help/

Examples
`
  A mix of **Markdown** and <u>HTML</u>.
  ## Tasklist

* [ ] to do
* [x] done

## Autolink literals

www.example.com, https://example.com, and contact@example.com.
 `
*/

/* For Icons
https://heroicons.com/ 

(
    <Icon.InboxInIcon className="w-6 h-6 text-white" aria-hidden="true" />
  )
*/

type Props = {
  allPosts: Post[];
};

const hero = {
  titleHighlight: "VƯƠN TẦM BẢN THÂN",
  titleNormal: "Sang Le Tech",
  description: `Giúp Bạn Bước Đi Tự Tin Trên **Hành Trình 4.0**`,
  buttonNormal: "Sang Lê là ai?",
  buttonNormalSrc: "/sang-le-la-ai",
  buttonHighlight: "Xem Video",
  buttonHighlightSrc: "/posts/video-khoanh-khac-cuoc-doi",
  imgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1626615071/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0006_mbnffl.jpg",
  alt: "Hinh anh Sang Le",
};
const logos = {
  title: "Các Kênh Truyền Thông Đã Tham Gia",
  description: "",

  logoOneSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631872823/Galatek.io%20Website/Sangletech.com/20210322002340_Yantv_ehn2jn.png",
  logoOneAlt: "Yantv Logo",

  logoTwoSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631872985/Galatek.io%20Website/Sangletech.com/HTV9__282016-nay_29_o1bdfl.webp",
  logoTwoAlt: "Htv9 Logo",

  logoThreeSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631873061/Galatek.io%20Website/Sangletech.com/69dda2def8ca1b5e9d8d1bc98d9d1e0f_uv1ylj.png",
  logoThreeAlt: "Kmedia Logo",

  logoFourSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631873525/Galatek.io%20Website/Sangletech.com/10547129_1466047213649700_265444754095979044_o-removebg-preview_ubc7v9.png",
  logoFourAlt: "SaigonFm Logo",

  logoFiveSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631873674/Galatek.io%20Website/Sangletech.com/unnamed-removebg-preview_qzjw11.png",
  logoFiveAlt: "Vivutv Logo",

  logoSixSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631873719/Galatek.io%20Website/Sangletech.com/BTV_tw6qlw.png",
  logoSixAlt: "Btv Logo",

  logoSevenSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631873777/Galatek.io%20Website/Sangletech.com/HTV7Logomoi_pmzlar.png",
  logoSevenAlt: "Htv7 Logo",
};
const jow = {
  titleFirst: "HÀNH TRÌNH LÀM GIÀU X.0",
  titleSecond: "Cứ Đi Là Bạn Sẽ Đến!",
  description: `**Liệu có một Tấm Bản Đồ dẫn đến một Cuộc sống thịnh vượng cho Bạn hay không?**
  <br><br>
  Nếu bạn có trong tay tấm bản đồ  chỉ đường cho mình thì sao? Có cách nào để bạn gặt hái được những kết quả mà mình mong muốn như Sang hay không?`,
  buttonName: "Tìm hiểu thêm",
  imgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1628152810/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0001_c2ukh5.png",
  alt: "Hinh anh SL Hanh Trinh Lam Giau X.0",
  videoSrc: "posts/video-hanh-trinh-lam-giau",
  buttonSrc: "/sow-xo",
};

const sow = {
  leftIconName: (
    <Icon.BookOpenIcon className="w-6 h-6 text-white" aria-hidden="true" />
  ),
  leftTitle: "BÍ MẬT LÀM GIÀU X.0",
  leftDescription: `**CẢNH BÁO:** ĐỪNG ĐỌC CUỐN SÁCH NÀY NẾU BẠN LÀ NGƯỜI DỄ-TỔN-THƯƠNG!!
  <br><br>  **Đây Là Cuốn Sách Về...**
  <br><br> **⟐**  Làm sao để **đứng vững trong Kỷ nguyên 4.0** và **Hậu Đại dịch**?

  **⟐**  Làm sao để **giải phóng tiềm năng của những người trẻ có đam mê**?
  
  **⟐  Những ý tưởng và những chiến lược** mà Sang rút ra từ những doanh nhân tiếng tăm nhất trên thế giới?`,
  leftButtonName: "Tìm hiểu thêm",
  leftButtonSrc: "/book-xo",
  leftAppleSrc: "/form",
  leftGoogleSrc: "/form",
  leftWebSrc: "/form",
  leftTestimonial: `*Người Eskimo có câu: “Bão là thời gian để đi đánh cá”. <br></br>*Ra khơi vào đúng lúc đại dương nổi bão, chúng ta sẽ là những người đánh được nhiều “cá” hơn bất cứ ai.* <br></br>*Vậy, câu hỏi đặt ra là: **Chúng ta phải làm gì để nắm bắt cơ hội làm giàu trong thời đại 4.0, trong và hậu Covid?***`,
  leftAuthor: "Sang Lê - Tác giả sách Bí Mật Làm Giàu X.0",
  leftAuthorImgSrc: "/assets/sangle-profilePic.jpg",
  leftImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1628236747/Galatek.io%20Website/galatekgame-37-38-39-0000_crdalj.png",
  leftAlt: "Hinh anh Sach SOW",
};

const projectYou = {
  rightIconName: (
    <Icon.InboxInIcon className="w-6 h-6 text-white" aria-hidden="true" />
  ),
  rightTitle: "YOU X.0",
  rightDescription: `Bạn được sinh ra vào một ngày cụ thể vì một lý do và mục đích trên Trái đất này. Mỗi người trong chúng ta đều có một mục đích mà chúng ta cần phải tìm ra trước khi quá muộn. Bạn có thể đạt được sự vĩ đại và thực hiện vai trò của mình trong cuộc đời, miễn là bạn biết cách hoặc có một công cụ để làm được điều đó.
  <br><br> **Công Cụ YOU X.0 Sẽ Giúp Bạn..**
  <br><br> **⟐**  Tìm hiểu về những bí ẩn của các con số trong Ngày tháng năm sinh và Họ tên của Bạn để biết bạn thật sự là ai và sứ mệnh của bạn là gì. 

  **⟐**  Nhìn nhận thế giới xung quanh Bạn từ một góc độ khác và cho phép Bạn tập trung phát triển những mặt tích cực ở bản thân.
  <br><br> _**Việc hiểu được con người thực sự của bạn là điều cơ bản nhất để bắt đầu bước đi trên Hành Trình Làm Giàu X.0. Bạn cần biết bạn là ai và bạn có thể làm gì tốt nhất cho cuộc sống của bản thân, gia đình và xã hội.**_ `,
  rightButtonName: "Tìm hiểu thêm",
  rightButtonSrc: "/you-xo",
  rightAppleSrc: "/form",
  rightGoogleSrc: "/form",
  rightWebSrc: "/form",
  rightImgSrc: "/assets/youoxo-25-iphone-mockup-1.png",
  rightAlt: "",
};

const fin = {
  leftTitle: "FIN X.0",
  leftDescription: `Cho dù bạn đang tiết kiệm cho kỳ nghỉ mơ ước, lên kế hoạch cho tài chính trong tương lai của mình hay chỉ đơn giản là mong muốn quản lý tốt tài chính của bản thân - Fin X.0 là dành cho bạn.`,

  leftIconOne: Icon.GlobeAltIcon,
  leftIconOneTitle: "Lập kế hoạch",
  leftIconOneDescription: `Suy nghĩ lớn để bạn có thể đặt ra các mục tiêu thực tế, lập kế hoạch, theo dõi tiến trình của mình từng ngày và bắt tay vào hành động cho đến khi ước mơ của bạn trở thành hiện thực.`,

  leftIconTwo: Icon.ScaleIcon,
  leftIconTwoTitle: "Thực hiện ước mơ",
  leftIconTwoDescription: `Phát triển một con đường rõ ràng để đạt được ước mơ phù hợp với giá trị của bản thân, sử dụng dữ liệu thực tế từ cuộc sống của bạn (không chỉ là hy vọng và ước mơ).`,

  leftIconThree: Icon.LightningBoltIcon,
  leftIconThreeTitle: "Xây dựng sự giàu có",
  leftIconThreeDescription: `Tập trung vào việc tạo ra các mục tiêu và xây dựng sự giàu có thông qua sự đơn giản và minh bạch của công cụ này.`,

  leftButtonName: "Tìm Hiểu Thêm",
  leftButtonSrc: "/fin-xo",
  leftAppleSrc: "/form",
  leftGoogleSrc: "/form",
  leftWebSrc: "/form",
  leftImgSrc: "/assets/finxo-25-iphone-mockup-1.png",
  leftAlt: "",
};

const pro = {
  rightIconOne: "",
  rightIconOneTitle: "Bạn Có Biết?",
  rightIconOneDescription: `Pro X.0 là chuương trình được trực tiếp xây dựng và phát triển độc quyền bởi Sang Lê và Galatek`,

  rightIconTwo: "",
  rightIconTwoTitle: "Pro X.0 Là Gì?",
  rightIconTwoDescription: `**PRO X.0** là 1 nền tảng học trực tuyến mới đầy thú vị được tạo ra bởi Sang Lê. Với các chương trình giảng dạy từ phát triển cá nhân đến kinh doanh online, **giúp bạn bước đi tự tin trong thời đại 4.0**.`,

  rightIconThree: "",
  rightIconThreeTitle: "Vừa Học Vừa Chơi",
  rightIconThreeDescription: `Tất cả đều được cung cấp trên 1 nền tảng học tập trực tuyến mang tính giải trí, học cùng 1 cộng đồng và hành động nhỏ mỗi ngày để **tạo ra những kết quả mới cho bản thân và công việc kinh doanh của bạn** theo những cách mà chương trình học truyền thống không thể làm được.`,

  rightTitle: "PRO X.0",
  rightDescription: `KHÁM PHÁ NGAY ỨNG DỤNG HỌC TRỰC TUYẾN 4.0`,
  rightButtonName: "Tìm hiểu thêm",
  rightButtonSrc: "/pro-xo",
  rightAppleSrc: "/form",
  rightGoogleSrc: "/form",
  rightWebSrc: "/form",
  rightImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1626085141/Galatek.io%20Website/3D-Freelancers-illustration0023_srsafb.png",
  rightAlt: "Hinh anh minh Pro X.0",
};

const startup = {
  title: "Startup X.0",
  description: `Sau hơn 10 năm hoạt động kinh doanh ở nhiều lĩnh vực khác nhau, tổn thất hàng trăm ngàn đô la và nhiều đêm mất ngủ, Sang Lê đã học được vô số bài học đắt giá và đưa vào chương trình Startup X.0 để có thể giúp bạn **XÂY DỰNG ƯỚC MƠ KHỞI NGHIỆP**, và bước trên **CON ĐƯỜNG NGẮN NHẤT đến THÀNH CÔNG** trong thời đại 4.0 này.`,
  buttonName: "Tìm Hiểu Ngay",
  imgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1625651836/Galatek.io%20Website/IMG_8057-1024x682_fa7z6z.jpg",
  alt: "Hinh anh Sang va Royal Wedding",
  buttonSrc: "/startupxo-course",
};

const youtube = {
  //TODO: The button link redirects incorrectly
  title: "Video Youtube Nổi Bật",
  description: `Nếu bạn muốn đi nhanh thì đi một mình, nếu bạn muốn đi xa thì hãy đi cùng nhau!`,
  buttonName: "Theo Dõi Ngay",
  buttonLink: "http://youtube.sangletech.com",

  videoOneThumbnail:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631780175/Galatek.io%20Website/Sangletech.com/maxresdefault_cztyhf.jpg",
  videoOneLink: "https://www.youtube.com/watch?v=BmY-ye6j12k",
  videoOneAlt: "Sang Le Tech - 3 ly do ban nen but pha ngay thoi diem nay",

  videoTwoThumbnail:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631780254/Galatek.io%20Website/Sangletech.com/maxresdefault_r6poir.jpg",
  videoTwoLink: "https://www.youtube.com/watch?v=TnJErB8dwA4",
  videoTwoAlt: "Sang Le Tech - 3 buoc giup ban ban san pham online thanh cong",

  videoThreeThumbnail:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631779915/Galatek.io%20Website/Sangletech.com/Artboard_2_copy-100_e6ruzq.jpg",
  videoThreeLink: "https://www.youtube.com/watch?v=fDhBKfIsUx4",
  videoThreeAlt: "Sang Le Tech - Lam sao xay dung pheu ban hang de ra tien",
};

const blog = {
  title: "Sang Le Blog",
  description: `Đây là nơi Sang muốn chia sẻ những câu chuyện và trải nghiệm đáng giá mà Sang có được trên **Hành Trình Làm Giàu X.0**!`,
  buttonIconName: (
    <Icon.InboxInIcon className="w-6 h-6 text-white" aria-hidden="true" />
  ),
  buttonName: "Đọc thêm",
  buttonSrc: "/blog",

  blogOneThumbnail: "/assets/thumbnail-web-design.jpg",
  blogOneLink: "/posts/thiet-ke-website-ban-hang",
  blogOneCategory: "Startup",
  blogOneTitle: "Làm thế nào thiết kế Website bán được hàng?",
  blogOneDescription: `"Hầu hết các doanh nghiệp cho rằng Website chỉ để làm cảnh và ngốn rất nhiều chi phí. Nhưng bạn biết không, với một website được xây dựng hiệu quả thì khách hàng sẽ xuống tiền và đặt hàng nhanh hơn bất cứ nền tảng nào khác."`,
  blogOneAuthorImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1625719158/Galatek.io%20Website/sangle-profilePic_k2xxkw.jpg",
  blogOneAuthorName: "Sang Le",
  blogOneReadingTime: "5",

  blogTwoThumbnail: "/assets/thumbnail-branding.jpg",
  blogTwoLink: "/posts/logo-la-thuong-hieu",
  blogTwoCategory: "Marketing",
  blogTwoTitle: "Có phải THƯƠNG HIỆU chỉ đơn giản là LOGO?",
  blogTwoDescription: `"Bạn có biết những thương hiệu "khổng lồ" trên thế giới như Apple, Google, Starbucks,.. đã phải liên tục "lột xác" bằng cách thay đổi Logo để tồn tại?"`,
  blogTwoAuthorImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1625719158/Galatek.io%20Website/sangle-profilePic_k2xxkw.jpg",
  blogTwoAuthorName: "Sang Le",
  blogTwoReadingTime: "2",

  blogThreeThumbnail: "/assets/thumbnail-online-marketing.jpg",
  blogThreeLink: "",
  blogThreeCategory: "Marketing",
  blogThreeTitle: "Quảng cáo Facebook & Google đã đủ chưa?",
  blogThreeDescription: `"Mặc dù online marketing bắt đầu phát triển từ những năm 1995, khi các công ty công nghệ bắt đầu bùng nổ trong đó có Ebay, Amazon, Google và nhiều công ty công nghệ khác nữa... Nhưng khi Sang làm việc với các chủ doanh nghiệp, thì họ hầu như chưa nắm rõ định nghĩa về Online Marketing là gì hoặc nói nôm na là Quảng cáo Online."`,
  blogThreeAuthorImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1625719158/Galatek.io%20Website/sangle-profilePic_k2xxkw.jpg",
  blogThreeAuthorName: "Sang Le",
  blogThreeReadingTime: "4",
};

const social = {
  titleMain: "Kết nối",
  titleSecondary: "Hãy kết nối ngay với Sang!",
  description: `☞ Click để đăng ký tham gia miễn phí cùng hàng ngàn người theo dõi khác ngay trên Facebook Messenger. 
  <br></br>☞ Bạn sẽ nhận các thông tin và bí quyết từ Sang mỗi tuần để giúp bạn bước đi tự tin trên hành trình 4.0!`,

  buttonFacebookLink: "https://www.facebook.com/sangletech/",
  buttonYoutubeLink: "http://youtube.sangletech.com",
  buttonLinkedinLink: "http://linkedin.sangletech.com",
  buttonInstagramLink: "http://instagram.sangletech.com",
};

const company = {
  title: "Mảng Kinh Doanh",

  logoOneName: (
    <Icon.InboxInIcon className="w-6 h-6 text-white" aria-hidden="true" />
  ),
  logoOneSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1626171786/Galatek.io%20Website/updated-galatek-logo-300x101_ajkugi.png",

  logoOneAlt: "Galatek logo",

  logoTwoName: (
    <Icon.InboxInIcon className="w-6 h-6 text-white" aria-hidden="true" />
  ),
  logoTwoSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1626171832/Galatek.io%20Website/whitebg-cafes-logo011x-600x228-1.png_ubdsbd.webp",

  logoThreeName: (
    <Icon.InboxInIcon className="w-6 h-6 text-white" aria-hidden="true" />
  ),
  logoThreeSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1626171957/Galatek.io%20Website/print-spmet-logo.png_ex1cvm.webp",
};

function Home() {
  return (
    <>
      {/* <HeroWithAngelImageOnRight {...hero} /> */}
      <HeroWithSocialNStats {...hero} />
      <Logos {...logos} />
      <BrandPanelWithAppScreenShot {...jow} />
      <AlternatingWithOptionalTestimonial {...sow} {...projectYou} />
      <AlternativeSideBySideWithImages {...fin} {...pro} />
      <BrandPanelWithOverlappingImage {...startup} />
      <ThreeColumnCards {...blog} />
      <Youtube {...youtube} />

      <SimpleCenterBranded {...social} />
      <SimpleWithHeading {...company} />
    </>
  );
}

export default Home;
