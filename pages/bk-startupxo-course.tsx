import React from "react";
import Hero from "../components/sections/heroes/with_sign_up_and_media_content";
import Layout from "../components/layout";
import AlternativeSideBySideWithVideoOrImg from "../components/alternative-side-by-side-with-video-img";
import MyAchievement from "../components/sections/feature-sections/with_feature_list";
import ThreeColumnCards from "../components/sections/blog-sections/3_column_cards";
import BrandPanelWithAppScreenShot from "../components/sections/cta-sections/brand_panel_with_app_screenshot";
import BrandPanelWithOverlappingImage from "../components/sections/cta-sections/brand_panel_with_overlapping_image";
import * as Icon from "@heroicons/react/outline";

const hero = {
  caption: "STARTUP X.0",
  titleNormal: " STARTUP X.0",
  titleHighlight: "CHƯƠNG TRÌNH",
  description: `**Con Đường Ngắn Nhất Xây Dựng Ước Mơ Khởi Nghiệp Của Bạn**`,
  imgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1632729923/Galatek.io%20Website/Sangletech.com/istockphoto-1218545883-170667a_amt1pc.jpg",
  videoSrc: "https://www.youtube.com/watch?v=l86OQXzhO8o",
  videoCaption: `CafeS Intro`,
  alt: "Startupxo-CafeS Intro",
};

const textOne = {
  leftCaption: "THỰC TẾ",
  leftTitle: "Bạn Có Biết?",
  leftDescription: `Bạn có biết, Khảo sát của Ban Nghiên cứu Phát triển Kinh tế tư nhân cho thấy: 
  <br></br>⟐   50% công ty khởi nghiệp bị phá sản sau năm đầu tiên. <br></br>⟐  2 năm tiếp theo có thêm 45% sẽ bị phá sản. 
  <br></br>Và chỉ vỏn vẹn **5% khởi nghiệp tồn tại sau 5 năm**!`,
  leftImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1625651836/Galatek.io%20Website/IMG_8057-1024x682_fa7z6z.jpg",
  leftAlt: "Hinh anh minh hoa Startupxo 1",
};

const textTwo = {
  rightCaption: "VẤN ĐỀ",
  rightTitle: "BẠN phải đối mặt với Covid-19 & Thời đại 4.0",
  rightDescription: `Trong thời đại 4.0, mọi thứ thay đổi một cách chóng mặt. Ngay cả những công ty “đồ sộ” như **Nokia, Blackberry và Kodak cũng phải đến bờ vực phá sản**. Bởi vậy nếu bạn không biết cách phát triển hiệu quả trong thời đại 4.0 thì bạn sẽ **tốn rất nhiều chi phí và thời gian**, và tệ hơn nữa đó là **khởi nghiệp của bạn sẽ có số phận giống như những công ty đó**.`,
  rightImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1626085142/Galatek.io%20Website/3D-Freelancers-illustration0028_pqynfh.png",
  rightAlt: "Hinh anh minh hoa Ret 2",
};

const courseDescript = {
  caption: "Mô Tả",
  title: "Khoá Học Quảng Cáo Retargeting",
  description: `*Chào mừng Bạn đến với Khóa học Retargeting / Remarketing hoàn chỉnh của Sang, nơi bạn sẽ tìm hiểu cách gợi nhớ hoặc nhắc nhở những khách hàng từng truy cập trang web của bạn nhưng họ đã rời đi để khiến họ quay lại vào đúng thời điểm và với đúng thông điệp.*
    <br></br>**⟐  Khóa học này được tạo ra từ rất nhiều kinh nghiệm quản lý và áp dụng hàng trăm chiến dịch quảng cáo **Retargeting** của Sang & đội ngũ Galatek** cho nhiều khách hàng ở rất nhiều lĩnh vực khác nhau.`,

  listOneTitle: false,
  listOneDescription: `Cookie được đưa vào trình duyệt của khách truy cập thông qua một đoạn mã nhỏ mà bạn đặt trên trang web của mình, thường được gọi là Pixel.`,

  listTwoTitle: false,
  listTwoDescription: `Nếu bạn đang sử dụng Retargeting với AdWords, thì AdWords sẽ cung cấp Pixel để bạn đặt trên trang web của mình.`,

  listThreeTitle: false,
  listThreeDescription: `Nếu bạn đang tiếp thị lại với Adroll, thì Adroll sẽ cung cấp cookie của họ để bạn đặt trên trang web của họ.`,

  listFourTitle: false,
  listFourDescription: `Tất cả những điều này về Cookie, Pixel và mã theo dõi nghe có vẻ phức tạp, nhưng trên thực tế, nó thực sự dễ học một khi bạn hiểu rõ về nó.`,

  listFiveTitle: false,
  listFiveDescription: `Công nghệ không phải là phần quan trọng của khóa học này....`,

  listSixTitle: false,
  listSixDescription: `Sang sẽ hướng dẫn và cho bạn thấy được giá trị thực sự nằm ở đâu khi chúng ta học cách hiểu tâm lý khách hàng và cách xây dựng, phát triển và tối ưu hóa các chiến dịch retargeting sinh lợi nhuận.`,

  listSevenTitle: false,
  listSevenDescription: `Retargeting vẫn là một trong những hình thức quảng cáo trực tuyến hiệu quả nhất và nó được các đối thủ cạnh tranh của bạn sử dụng để chuyển đổi phần lớn lưu lượng truy cập của họ.`,

  listEightTitle: false,
  listEightDescription: `Các chuyên gia dự đoán rằng trong vài năm tới, hầu hết những nội dung quảng cáo hiển thị trên web sẽ là Quảng cáo Remarketing và Retargeting.`,

  listNineTitle: false,
  listNineDescription: `Các chiến dịch Retargeting thường có tỷ lệ nhấp chuột và tỷ lệ chuyển đổi cao hơn nhiều so với các chiến dịch tìm kiếm và hiển thị truyền thống.`,

  listTenTitle: false,
  listTenDescription: `Điều này cho thấy rõ hơn tầm quan trọng của việc bạn có những kiến thức và kỹ năng để phát triển các chiến dịch Remarketing và Retargeting thành công của riêng mình.`,

  listElevenTitle: false,
  listElevenDescription: `Sử dụng các chiến dịch Remarketing của Google AdWords, Google Analytics, Google Tag Manager của Google, v.v.,`,

  listTwelveTitle: false,
  listTwelveDescription: `Sang sẽ hướng dẫn bạn từng bước cụ thể và trực tiếp thông qua dự án thực tế của Sang để bạn có thể nhận được lợi ích cao nhất từ khách truy cập trang web của  mình với các chiến dịch retargeting có tỷ lệ thành công cao.`,
};

const textThree = {
  leftCaption: "YÊU CẦU",
  leftTitle: "Bạn Cần Chuẩn Bị Gì Để Tham Gia Khóa Học?",
  leftDescription: `**✓**  Bạn phải có kết nối Internet.
    <br></br>**✓**   Bạn phải có tài khoản Google (Dễ dàng và miễn phí để thiết lập một tài khoản).
    <br></br>**✓**   Bạn phải có tinh thần sẵn sàng học hỏi những điều mới trong khoá học này và thực hành chúng trong các chiến dịch quảng cáo Retargeting của chính bạn xuyên suốt quá trình tham gia khóa học.
    <br></br>**✓**   Bạn phải sẵn sàng đặt câu hỏi nếu bạn không hiểu điều gì đó (các chiến lược Retagreting có thể rất phức tạp!).`,
  leftImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627541659/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0001_kvoymz.png",
  leftAlt: "Hinh anh minh hoa Ret 3",
};

const textFour = {
  rightCaption: "Bạn Có Phù Hợp?",
  rightTitle: "Khoá Học Này Dành Cho Những Ai?",
  rightDescription: `**✓   Nếu Bạn muốn tận dụng tối đa lưu lượng truy cập trang web của mình** bằng cách phát triển các chiến dịch Retargeting mang lại lợi nhuận.
  <br></br>**✓   Nếu Bạn biết rằng Quảng cáo Retargeting rất hiệu quả**, nhưng bạn vẫn chưa thể mang lại thành công cho doanh nghiệp của bạn.
  <br></br>**✓   Nếu Bạn muốn tìm hiểu thêm về cách hoạt động của Retargeting ở cấp độ sâu hơn** và bạn muốn thiết lập các chiến dịch Retargeting có lợi nhuận bằng cách sử dụng những kiến thức đó.
  <br></br>**✓   Nếu Bạn là một người kinh doanh** đang mong muốn thúc đẩy mức độ tương tác khách hàng cao hơn đối với thương hiệu và sản phẩm của mình.
  <br></br>**✓   Nếu Bạn là một chủ doanh nghiệp** cần trang web của mình chuyển đổi khách mua hàng nhiều hơn và bạn đã sẵn sàng khám phá về Quảng cáo Retargeting.
  <br></br>**✓   Nếu Bạn mong muốn "bỏ túi" một kỹ năng mới để có thể trở thành một Freelancer chuyên nghiệp** (người làm việc tự do chuyên nghiệp) cho các doanh nghiệp đang có nhu cầu phát triển các Chiến dịch Quảng cáo Retargeting của họ.
  <br></br>**✓   Nếu Bạn đã nghe nói về Quảng cáo Retargeting** và bạn muốn tìm hiểu thêm về những Chiến dịch Quảng cáo Retargeting/Remarketing.
  <br></br> **THÌ ĐÂY LÀ KHOÁ HỌC DÀNH CHO BẠN!**
  <br></br>*‼️ Khóa học này KHÔNG dành cho bạn nếu bạn không nghiêm túc về lưu lượng khách hàng truy cập trang web của mình*.`,
  rightImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627541145/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0002_pyykpi.png",
  rightAlt: "Hinh anh minh hoa Ret 2",
};

const courseValue = {
  caption: "GIÁ TRỊ",
  title: "Bạn Sẽ Học Được Gì Từ Khoá Học Này?",
  description: `**⟐  Sang sẽ hướng dẫn bạn cách thực hiện một Chiến dịch **Retargeting** hiệu quả** để bạn có cơ hội thay đổi phần lớn khách truy cập của mình, những người chỉ đơn giản là chưa sẵn sàng mua hàng trong lần truy cập đầu tiên của họ.<br></br>**⟐  Sang sẽ giải thích chính xác cách hoạt động của **Retargeting** từ góc độ công nghệ và Sang sẽ cho bạn thấy công nghệ đã trưởng thành và phát triển như thế nào trong những năm qua**. Nói một cách đơn giản, retargeting được thực hiện thông qua việc lưu lại dữ liệu qua cookie trên trình duyệt của khách truy cập, điều này cho phép nền tảng retargeting của bạn theo dõi người dùng đó trên internet.`,

  listOneTitle: false,
  listOneDescription: `Thiết lập, quản lý và tối ưu hóa các chiến dịch Retargeting chuyên nghiệp và hiệu quả.`,

  listTwoTitle: false,
  listTwoDescription: `Sử dụng các kỹ thuật Retargeting nâng cao để luôn đạt được lượng truy cập trang web và tương tác nhiều nhất.`,

  listThreeTitle: false,
  listThreeDescription: `Thiết lập danh sách các đối tượng khách hàng Retargeting nâng cao thông qua Google Analytics và Google Adwords.`,

  listFourTitle: false,
  listFourDescription: `Tất cả những điều này về Cookie, Pixel và mã theo dõi nghe có vẻ phức tạp, nhưng trên thực tế, nó thực sự dễ học một khi bạn hiểu rõ về nó.`,

  listFiveTitle: false,
  listFiveDescription: `Theo dõi các đặc điểm phức tạp của khách hàng truy cập trang web của bạn để áp dụng trong các chiến dịch Retargeting.`,

  listSixTitle: false,
  listSixDescription: `Thiết lập các thẻ (tag) Retargeting của bạn thông qua Trình Quản lý thẻ của Google (Google Tag Manager).`,

  listSevenTitle: false,
  listSevenDescription: `Retargeting vẫn là một trong những hình thức quảng cáo trực tuyến hiệu quả nhất và nó được các đối thủ cạnh tranh của bạn sử dụng để chuyển đổi phần lớn lưu lượng truy cập của họ.`,

  listEightTitle: false,
  listEightDescription: `Hiểu rõ về Retargeting là gì và cách thức Retargeting hoạt động ra sao.`,

  listNineTitle: false,
  listNineDescription: `Hiểu rõ công nghệ cơ bản của mọi chiến dịch Retargeting trên trang web.`,

  listTenTitle: false,
  listTenDescription: `Chọn lọc những người khách đã truy cập trang web mà bạn muốn chi tiền quảng cáo Retargeting, cũng như tìm ra những đối tượng khách truy cập mà bạn không muốn áp dụng chiến lược Retargeting.`,

  listElevenTitle: false,
  listElevenDescription: `Nắm bắt tâm lí của khách hàng đã truy cập trang web, và biết họ đang ở mức độ nào trong phễu bán hàng của bạn.`,

  listTwelveTitle: false,
  listTwelveDescription: `Lập danh sách cho chiến lược Retargeting và đối tượng bạn muốn nhắm đến để tối đa hoá lợi nhuận.`,

  listThirteenTitle: false,
  listThirteenDescription: `Tiết kiệm thời gian bố trí các chiến dịch Retargeting của bạn bằng cách sử dụng mẹo và phím tắt nâng cao trong Trình quản lý thẻ của Google (Google Tag Manager).`,

  listFourteenTitle: false,
  listFourteenDescription: `Sử dụng Google AdWords để thiết lập và quản lý chiến dịch Retarketing của bạn.`,

  listFifteenTitle: false,
  listFifteenDescription: `Sử dụng Công cụ phân tích của Google (Google Analytics) để phân tích dữ liệu của lượng truy cập trang web của bạn nhằm nâng cấp danh sách Retargeting từ trước của bạn.`,

  listSixteenTitle: false,
  listSixteenDescription: `Sử dụng thành thạo trình tạo đối tượng Google Analytics để đặt nền tảng cho các chiến dịch Retargeting của bạn.`,

  listSeventeenTitle: false,
  listSeventeenDescription: `Cách sử dụng Affinity Audiences và phân khúc thị trường nhằm nâng cao chiến dịch Retargeting của bạn.`,

  listEighteenTitle: false,
  listEighteenDescription: `Cách kết hợp Google Adwords và Google Analytics để chia sẻ những danh sách Retargeting.`,
};

const textPayment = {
  titleFirst: "Tham Gia Khoá Học Quảng Cáo Retargeting",
  titleSecond: "Không Yêu Cầu Kinh Nghiệm",
  description: `Với mức giá thấp hơn nhiều so với một bữa tối cùng gia đình, bạn sẽ nhận được hơn 10 giờ video bài giảng, quyền truy cập vào diễn đàn thảo luận dành cho các Chiến binh X.0 của Sang và bạn có thể hỏi Sang bất kỳ câu hỏi nào trong xuyên suốt khóa học.
  <br></br>Hơn hết, bạn nhận được quyền truy cập trọn đời và 3 ngày đảm bảo hoàn tiền 100%!`,
  buttonName: "THAM GIA KHOÁ HỌC",
  imgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627541339/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0001_qgzlmq.png",
  alt: "Hinh anh minh hoa Ret 5",
  videoSrc: "#",
};

const textBookxo = {
  title: "Tại sao cuốn sách của Sang được gọi là BÍ MẬT LÀM GIÀU X.0?",
  description: `**BẠN CÓ MUỐN ĐỌC THỬ SÁCH ĐIỆN TỬ ĐỘC QUYỀN TỪ SANG?**
    <br><br>⟐  Làm sao để đứng vững trong Kỷ nguyên 4.0 và Hậu Đại dịch?
    <br><br>⟐  Làm sao để giải phóng tiềm năng của những người trẻ có đam mê?
    <br></br>⟐  Những ý tưởng và những chiến lược mà Sang rút ra từ những doanh nhân tiếng tăm nhất trên thế giới?`,
  buttonName: "Tìm hiểu thêm về Sách",
  imgSrc:
    "https://super-static-assets.s3.amazonaws.com/8090ac7d-2195-4ec8-96be-1457b54a8900/images/c2a88c54-5779-493d-83ec-1d2d5429021f.jpg?w=240&f=webp",
  alt: "Hinh anh Book Cover",
};

function RetargetingCourse() {
  return (
    <Layout>
      <div>Pro X.0 Page</div>
      <Hero {...hero} />
      <AlternativeSideBySideWithVideoOrImg {...textOne} {...textTwo} />
      <MyAchievement {...courseDescript} />
      <AlternativeSideBySideWithVideoOrImg {...textThree} {...textFour} />
      <MyAchievement {...courseValue} />
      <BrandPanelWithAppScreenShot {...textPayment} />
      <BrandPanelWithOverlappingImage {...textBookxo} />
    </Layout>
  );
}

export default RetargetingCourse;