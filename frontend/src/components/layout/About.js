import React from 'react';
import '../../App.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container mt-5" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
            <div className="about-img">
              <img src="/images/hanoi.jpg" alt="About Us" />
            </div>
          
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>WEBSITE BÁN ĐẶC SẢN VÙNG MIỀN TỪ BẮC VÀO NAM</h3>
            <p className="fst-italic">
              Chào mừng bạn đến với Vườn Đặc Sản Việt, nơi kết nối những tinh hoa ẩm thực từ mọi vùng miền của đất nước.
              Tại đây, chúng tôi tự hào mang đến cho quý khách hàng một trải nghiệm mua sắm trực tuyến độc đáo,
              đầy ấn tượng và đảm bảo chất lượng.Một số tiêu chí quan trọng :
            </p>
            <ul className="list-unstyled">
              <li><i className="bi bi-check-circle"></i> Chất lượng sản phẩm: Sản phẩm phải đảm bảo chất lượng, tươi mới và không chứa các chất phụ gia độc hại.</li>
              <li><i className="bi bi-check-circle"></i> Nguồn gốc và bảo tồn địa phương: Ưu tiên lựa chọn các sản phẩm có nguồn gốc từ các vùng miền cụ thể, đồng thời đảm bảo sự bảo tồn và phát triển bền vững cho nguồn lợi này.</li>
              <li><i className="bi bi-check-circle"></i>Đa dạng sản phẩm: Trang web nên cung cấp một loạt các loại đặc sản từ nông sản, thực phẩm chế biến đến đặc sản độc đáo, đáp ứng nhu cầu và sở thích của đa dạng khách hàng. </li>
              <li><i className="bi bi-check-circle"></i>Giá cả hợp lý: Sản phẩm nên có mức giá phù hợp với chất lượng và giá trị thực của chúng, đồng thời cung cấp các chương trình khuyến mãi và ưu đãi hấp dẫn cho khách hàng. </li>
              <li><i className="bi bi-check-circle"></i>Dịch vụ khách hàng: Trải nghiệm mua sắm trực tuyến nên được hỗ trợ bởi dịch vụ khách hàng chuyên nghiệp và nhanh nhẹn, đảm bảo sự hài lòng và tin cậy từ phía khách hàng. </li>
              <li><i className="bi bi-check-circle"></i>Phản hồi và đánh giá: Cung cấp cơ hội cho khách hàng để đánh giá và phản hồi về sản phẩm và dịch vụ, giúp cải thiện chất lượng và trải nghiệm mua sắm. </li>
              <li><i className="bi bi-check-circle"></i>An toàn giao thông và bảo vệ thông tin cá nhân: Đảm bảo quy trình giao hàng nhanh an toàn và bảo mật thông tin cá nhân của khách hàng trong quá trình mua sắm trực tuyến. </li>

            </ul>
            <p>
              Với sứ mệnh tôn vinh và bảo tồn hương vị đặc trưng của từng vùng miền, chúng tôi tự tin cung cấp một loạt các sản phẩm chất lượng cao từ các nông sản, thực phẩm chế biến đến đặc sản độc đáo chỉ có ở các miền đất nước. Từ mắc khén nồng nàn của miền núi Tây Bắc đến vị ngọt bùi của dừa Bến Tre, mỗi sản phẩm trên trang web của chúng tôi đều là một phần của hành trình khám phá văn hóa ẩm thực đa dạng của Việt Nam.

              Với cam kết về chất lượng, nguồn gốc và sự phục vụ tận tâm, chúng tôi hy vọng mang lại cho quý khách hàng những trải nghiệm mua sắm trực tuyến đầy thú vị và đáng tin cậy. Hãy đồng hành cùng chúng tôi để khám phá và thưởng thức hương vị đặc biệt của đất nước Việt Nam!"
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About;
