import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.scss";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Carousel() {
  return (
    <div className="carousel">
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="carousel"
      >
        <SwiperSlide>
          <img
            src="https://software.covetrus.com/wp-content/uploads/2023/05/careplans-header-bg.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://dogbydrlisa.com/cdn/shop/files/dog-insurance.jpg?v=5809665018608303824"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5edfe0445dacea6e66542d33/1602384033072-ZTL4RZMK4G4MHPLPR6P0/Pathway_191207-1100-ret.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>

      <div className="body_service">
        <div className="body_1">
          <div className="body_left">
            <div className="Blogo_1">
              <img
                src="https://media.istockphoto.com/id/1347122902/photo/pet-dog-taking-cbd-hemp-oil-canine-licking-cannabis-dropper-for-anxiety-treatment.jpg?s=612x612&w=0&k=20&c=YW-wnE8ZN0Z9kbbycLTD9NBfjYFbeb9XRt-WAVL866o="
                alt="logo"
              ></img>
            </div>
            <div className="BContent_1">
              <h1>Phòng khám thú y</h1>
              <p>
                Phòng khám thú y với đội ngũ bác sĩ thú y chuyên nghiệm chúng
                tôi luôn tận tâm và cố gắng hết sức để mang lại{" "}
              </p>
            </div>
          </div>

          <div className="body_right">
            <div className="Blogo_1">
              <img
                src="https://plus.unsplash.com/premium_photo-1661915652986-fe818e1973f9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGV0JTIwaGVhbHRofGVufDB8fDB8fHww"
                alt="logo"
              ></img>
            </div>
            <div className="BContent_1">
              <h1>Bệnh viện thú y pet</h1>
              <p>
                Phòng khám thú y với đội ngũ bác sĩ thú y chuyên nghiệm chúng
                tôi luôn tận tâm và cố gắng hết sức để mang lại{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="body_1">
          <div className="body_left">
            <div className="Blogo_1">
              <img
                src="https://th.bing.com/th/id/OIP.XchMhqG3NKSI61P7a8Ln2gAAAA?rs=1&pid=ImgDetMain"
                alt="logo"
              ></img>
            </div>
            <div className="BContent_1">
              <h1>Bác sĩ thú y tại nhà</h1>
              <p>
                Phòng khám thú y với đội ngũ bác sĩ thú y chuyên nghiệm chúng
                tôi luôn tận tâm và cố gắng hết sức để mang lại{" "}
              </p>
            </div>
          </div>

          <div className="body_right">
            <div className="Blogo_1">
              <img
                src="https://th.bing.com/th/id/OIP.gNbSo3Zp0J5ejpYOj7zz2gHaE8?rs=1&pid=ImgDetMain"
                alt="logo"
              ></img>
            </div>
            <div className="BContent_1">
              <h1>Dịch vụ trong thú cưng</h1>
              <p>
                Phòng khám thú y với đội ngũ bác sĩ thú y chuyên nghiệm chúng
                tôi luôn tận tâm và cố gắng hết sức để mang lại{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="body_1">
          <div className="body_left">
            <div className="Blogo_1">
              <img
                src="https://th.bing.com/th/id/R.27121cdab051ef2cae519f030b527307?rik=uSo%2fE4SL5LoxwA&pid=ImgRaw&r=0"
                alt="logo"
              ></img>
            </div>
            <div className="BContent_1">
              <h1>Pet grooming & spa</h1>
              <p>
                Phòng khám thú y với đội ngũ bác sĩ thú y chuyên nghiệm chúng
                tôi luôn tận tâm và cố gắng hết sức để mang lại{" "}
              </p>
            </div>
          </div>
        </div>
        <h3>Một số hình ảnh dịch vụ tại pet </h3>
        <div className="box-img2">
          <Swiper
            slidesPerView={4}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Pagination, Autoplay]}
            className="carousel"
          >
            <SwiperSlide>
              <img
                className="img2"
                src="https://www.petful.com/wp-content/uploads/2013/06/veterinary-care-cost-too-much.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img2"
                src="https://www.westernu.edu/media/pethealth/pet-health-center-photos-2015-648228-351.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img2"
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/per-carejpg-130932-16x9.jpg?VersionId=ebrLgt8xtcSZzbU_aqRcq0FcftIwgJwB&size=690:388"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img2"
                src="https://threebestrated.in/images/PETHEALTHCARE-Ulhasnagar-MH.jpeg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="box-img">
          <Swiper
            slidesPerView={4}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Pagination, Autoplay]}
            className="carousel"
          >
            <SwiperSlide>
              <img
                className="img2"
                src="https://res.cloudinary.com/embark/images/c_scale,w_848,h_624/embarkvet.com/uploads/Vet_Pet_Insurance/Vet_Pet_Insurance.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img2"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPqZIlMqu8IF2S0FtnZYQVVIJO6YYajEmWhFO43i-kuA&s"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img2"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIPfecNySwRbFTl-F39JGyK0_Fed8h56X-keqEHq-Ug&s"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img2"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYv9wPlIdhLllqFnwnpXaWfhetTj---omBAqmuYGTsFw&s"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="footer">
        <div className="footer_left">
          <h4>Company Name</h4>
          <p>
            Không ngừng nâng cao chất lượng phục vụ, nâng tầm chuyên môn để mang
            đến quý khách hàng những dịch vụ hoàn hảo nhất
          </p>
          <div className="ListIcon">
            <p>
              <FaFacebookF />
            </p>
            <p>
              <CiTwitter />
            </p>
            <p>
              <FaInstagram />
            </p>
            <p>
              <CiYoutube />
            </p>
          </div>
        </div>

        <div className="footer_right">
          <h4>Header Text</h4>
          <ul>
            <li>
              <span>
                <IoIosArrowForward />
              </span>
              <span>Hướng dẫn</span>
            </li>
            <li>
              <span>
                <IoIosArrowForward />
              </span>
              <span>Sự kiện</span>
            </li>
            <li>
              <span>
                <IoIosArrowForward />
              </span>
              <span>Contact us</span>
            </li>
            <li>
              <span>
                <IoIosArrowForward />
              </span>
              <span>Tin tức</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
