import React from "react";

const Text = ({heading1,heading2}) => {
  return (
    <div className="container">
      <h4>{heading1}</h4>
      <p>
        We are an online Acadamic platform that provide learning experience to
        the students based on their academic level, subject and the amount of
        support they need. We provide individual online learning support by
        developing personalized plan for every student. At Assignment Help, we
        pair the students with the Experts that matches their requirements and
        arrange one-to-one session according to the student’s convenience. From
        essays, to assignments, to presentations, lab reports, or type of
        homework we can help you with any tasks. You can choose any skilled
        Experts that fits your requirements. We make sure that at our platform,
        you have the best learning experience. For this, we have hired top
        professional experts who are highly qualified and have an experience of
        10 years in the teaching industry. We assure you that with their unique
        teaching methods and brilliant ideas, you will easily meet your academic
        goals.
      </p>
      <h4>{heading2}</h4>
      <p>
        We understand that every student learns at a different pace. To make you
        ahead of your class and be on the top, we offer you our finest Acadamic
        services at highly affordable rates. We know that students have very
        limited budget to spend, therefore, we have left our prices low. We also
        offer amazing discounts to our students so that you can easily avail our
        services.
      </p>
      <p>
        Here at Assignment Help, we empower students with knowledge and
        excellence. We teach them with unique methods and advance technologies
        to aid their learning. We make sure that our students get the best out
        of us. Our experts focus on improving students learning and try their
        level best to increase their skills. Thus, we work relentlessly hard to
        help you achieve your desired grades and career. So what are you waiting
        for? Get the best online learning experience at Assignment Help and ease
        your academic life!
      </p>
    </div>
  );
};

export default Text;
