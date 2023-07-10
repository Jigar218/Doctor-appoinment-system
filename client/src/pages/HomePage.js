import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import { Row } from "antd";
import DoctorList from "../components/DoctorList";
const HomePage = () => {
  const [doctors, setDoctors] = useState([]);
  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.get(
        "/api/v1/user/getAllDoctors",

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      <Layout>
        <div className="container1">
          <img
            src="https://www.volumetree.com/wp-content/uploads/2019/07/Online-pet-healthcare-veterinary-telehealth.png"
            alt="img1"
          />
        </div>
        <h2 className="vet">Vet Doctor</h2>
        <Row className=" row text-center">
          {doctors && doctors.map((doctor) => <DoctorList doctor={doctor} />)}
        </Row>
        <div>
          <iframe
            className="frame"
            src="https://www.youtube.com/embed/hiyxV-EtMas"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="faq">
          <h3>FAQ</h3>
          <h4>1. Can I Consult a Vet For My Dog?</h4>
          <p>
            Yes, you can consult a vet online for your dog. Experienced
            veterinarians at Vetlive will provide you the best advice on matters
            concerning your Pet dog. In fact, consulting a veterinary doctor
            online is sometimes more convenient and sufficient to get a good
            remedy for almost all minor health issues of your dog.
          </p>
          <h4>
            2.I am unable to know the problem that my Pet is currently facing?
            Can I consult a vet online?
          </h4>
          <p>
            Yes, You can consult a vet online who will be able to assess the
            symptoms your pet is experiencing to identify the underlying health
            issue. Based on the assessment, the vet would suggest a further
            course of action or treatment.
          </p>

          <h4>3. Can I get a Vet Prescription Online?</h4>
          <p>
            Once the consultation gets over, the doctor will share the vet
            prescription online. You can easily purchase prescription medicines
            from your local vet pharmacies.
          </p>

          <h4>
            4.Is online Vet Consultation service available all over India?
          </h4>
          <p>
            Yes, Our online vet consultation service is available to pet parents
            living. We have provided service to pet parents living in Mumbai in
            India. Our Service has benefited many pet parents living in rural
            areas in India.
          </p>
        </div>

        <footer class="text-center1 text-white">
          <div class="text-center text-light p-2 bg-dark">
            <a
              class="btn2 btn-link btn-floating btn-lg text-light m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              class="btn2 btn-link btn-floating btn-lg text-light m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              class="btn2 btn-link btn-floating btn-lg text-light m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <div>
              {" "}
              © 2023 Copyright: Verterinary Doctor Appointment Scheduling System
            </div>
          </div>
        </footer>
      </Layout>
    </>
  );
};

export default HomePage;
