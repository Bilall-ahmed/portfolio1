import React from 'react';

const AboutData = () => {
  return (
    <div>
      <marquee
        behavior="scroll"
        direction="left"
        style={{
          fontSize: "large",
          fontWeight: "bold",
          backgroundColor: "#acb4bf"
        }}
      >
        Welcome to Mohammed's Blog page
      </marquee>
      <h1
        style={{
          fontWeight: "bold",
          fontFamily: "Times New Roman, Times, serif",
          fontSize: 36, // Decreased font size for better readability
          paddingLeft: 20, // Adjusted padding for better alignment
          paddingRight: 20,
          width: "90%" // Adjusted width for responsiveness
        }}
      >
        Mohammed Bilal Ahmed's Journey as a Junior Software Engineer
      </h1>
      <img
        src="https://webappimages-1.s3.ap-south-1.amazonaws.com/profile.jpeg"
        alt="Profile of Mohammed Bilal Ahmed"
        style={{ paddingLeft: 20, paddingTop: 20, height: "auto", maxWidth: "100%" }} // Adjusted styling for better responsiveness
      />
      <div
        className="container123 mt-5"
        style={{
          fontSize: 18, // Decreased font size for better readability
          paddingRight: 20,
          paddingLeft: 20,
          color: "#6d6a21",
          fontFamily: "Times New Roman, Times, serif",
          textAlign: "justify"
        }}
      >
        <p>
          In my portfolio, I bring to the table a wealth of experience as an AWS
          Engineer, specializing in AWS DevOps and Python programming. Working
          with People Tech Group, I've consistently driven success by leveraging
          my skills to tackle complex challenges head-on. One of my core strengths
          lies in crafting cloud architectures that are not just scalable and
          secure, but also highly resilient. From the initial concept to the final
          execution, I ensure that every aspect of the architecture exceeds client
          expectations, delivering solutions that are robust and reliable.
        </p>
        {/* Removed <br /> tags for better semantic structure */}
        <p>
          Automation is at the heart of my approach. I develop pipelines and
          custom scripts that automate repetitive tasks, allowing teams to focus
          on innovation rather than getting bogged down by manual processes. This
          not only boosts efficiency but also minimizes errors, leading to
          smoother project workflows.
        </p>
        <p>
          Python is my go-to language for building tools and applications tailored
          to specific project needs. Whether it's creating monitoring dashboards
          or implementing machine learning algorithms, I leverage Python's
          versatility to deliver tailored solutions that meet and exceed client
          requirements.
        </p>
        <p>
          But it's not just about technical expertise. I firmly believe in
          fostering a DevOps culture that prioritizes collaboration,
          communication, and continuous improvement. By breaking down silos and
          encouraging cross-functional teamwork, I create an environment where
          everyone is empowered to contribute their best work.
        </p>
        <p>
          Cost optimization is another area where I excel. I proactively monitor
          cloud infrastructure to identify opportunities for optimization,
          ensuring that clients get the most value for their investment. This not
          only helps reduce costs but also improves overall performance and
          efficiency.
        </p>
        <p>
          My passion for innovation drives me to stay at the forefront of
          technology trends. I actively seek out opportunities to learn and grow,
          participating in open-source communities and exploring emerging
          technologies. This allows me to bring fresh ideas and perspectives to
          every project I undertake.
        </p>
        <p>
          Ultimately, my goal is to inspire a shared vision for success. By
          collaborating closely with clients and colleagues alike, I aim to shape
          the future of technology and deliver unparalleled value to every project
          I'm involved in.
        </p>
      </div>


      <div style={{ height: 50 }} />
      <div className="d-flex justify-content-center"> {/* Centered the following section */}
        <div className="card" style={{ width: "18rem", margin: "0 auto" }}> {/* Adjusted styling to center the card */}
          <img
            src="https://webappimages-1.s3.ap-south-1.amazonaws.com/card3.jpg"
            className="card-img-top"
            alt="Restricting API using API Keys"
          />
          <div className="card-body">
            <h5 className="card-title">Restricting API using API Keys</h5>
            <p className="card-text">
              Secure your API with API keys for controlled access, enhancing
              authentication and resource protection.
            </p>
          </div>
          <div className="card-body">
            <a
              href="https://webappstorage-1.s3.ap-south-1.amazonaws.com/restrict+api+usin+api+key+in+aws.pdf"
              className="card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Document
            </a>
          </div>
        </div>
        {/* Repeat similar card structures for other items */}

        
      </div>
      <div style={{ height: 50 }} />
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://webappimages-1.s3.ap-south-1.amazonaws.com/image1.jpeg"
              className="d-block w-100"
              style={{ height: 350, objectFit: "cover" }} // Adjusted styling for better image presentation
              alt="Carousel item 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://webappimages-1.s3.ap-south-1.amazonaws.com/image2.jpeg"
              className="d-block w-100"
              style={{ height: 350, objectFit: "cover" }} // Adjusted styling for better image presentation
              alt="Carousel item 2"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    
  );
}

export default AboutData;
