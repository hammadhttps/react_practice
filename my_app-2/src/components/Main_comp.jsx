import React from "react";
import "./style.css"

function Main_comp() {
  return (
    <main>
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">Welcome to Gym Rock</h2>
          <div className="about-content">
            <p className="about-text">
              We are a fitness website dedicated to helping you achieve your health and fitness goals.
              Whether you're looking to lose weight, build muscle, or simply maintain a healthy lifestyle,
              we have the resources and support you need. Our team of experts provides personalized workout
              plans, nutrition advice, and motivational content to keep you on track. Join our community
              today and start your journey towards a healthier you!
            </p>
          </div>
        </div>
      </section>

      <section id="videos" className="video-section">
        <div className="container">
          <h2 className="section-title">Featured Workouts</h2>
          <div className="video-grid">
            <div className="video-card">
              <div className="video-wrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/UIPvIYsjfpo" title="Full Body Workout" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
            <div className="video-card">
              <div className="video-wrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/m1UF4RgGoY0" title="HIIT Training" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
            <div className="video-card">
              <div className="video-wrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/eMjyvIQbn9M" title="Strength Training" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
            <div className="video-card">
              <div className="video-wrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/cbKkB3POqaY" title="Yoga for Beginners" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
            <div className="video-card">
              <div className="video-wrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/s6U3vDtdzrE" title="Cardio Workout" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
            <div className="video-card">
              <div className="video-wrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/LhL5SNZfnQs" title="Nutrition Guide" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Rock the Gym?</h2>
          <a href="#contact" className="btn btn-large">GET STARTED</a>
        </div>
      </section>

      <section id="categories" className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Gym Rock?</h2>
          <div className="features-grid">
            <article className="feature-card">
              <h3>What Does Fitness Mean?</h3>
              <p>
                Fitness encompasses physical, mental, and emotional well-being. It's about being sound in body and mind,
                having the energy for daily activities, and maintaining health through regular exercise and proper nutrition.
                At Gym Rock, we believe in holistic fitness that improves all aspects of your life.
              </p>
            </article>
            <article className="feature-card">
              <h3>Our Philosophy</h3>
              <p>
                Fitness is not just about looking good; it's about feeling good and being healthy.
                It's about having the energy to do the things you love and the strength to overcome life's challenges.
                Whether you're a beginner or a seasoned athlete, we offer resources for all fitness levels.
              </p>
            </article>
            <article className="feature-card">
              <h3>Our Community</h3>
              <p>
                Our platform is designed to be user-friendly and accessible to everyone.
                We offer workout videos, nutrition guides, and expert advice.
                Join our supportive community for motivation and encouragement on your fitness journey.
                Together, we can achieve our goals and lead healthier lives!
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Main_comp;