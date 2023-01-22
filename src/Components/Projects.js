import React, { useState, useEffect, useRef } from "react";
import { ProjectImage } from "./UI/ProjectImage";

import { ProjectsContent } from "./UI/ProjectsContent";
import { useDispatch } from "react-redux";
import { changeNo } from "./Redux/Actions";
import one from "../Resources/1.png";
import two from "../Resources/2.png";
import third from "../Resources/3.png";
import four from "../Resources/4.png";
import five from "../Resources/5.png";
import six from "../Resources/6.png";
import seven from "../Resources/7.png";
import eight from "../Resources/8.png";
import nine from "../Resources/9.png";
import ten from "../Resources/10.png";
import MobileVersion from "./MobileVersion";

export const Projects = () => {
  const [scroll, setscroll] = useState(0);
  const [intersection, setintersection] = useState(false);
  const [Width, setWidth] = useState(false);
  const elem = useRef();

  const [data, setdata] = useState([
    {
      title: "Forkify App",
      description:
        "Recipe finding App which consumes a third party api to fetch the data and help you out to make awesome delicious recipes! Just type in Pizza and you're good to go!",
      link: "https://lnkd.in/drD9jW5A",
    },
    {
      title: "Quiz-App",
      description:
        "The Complete quiz app in which one can make his own quizzes and anyone can play it just by selecting the quiz and entering his name! it has many amazing functionalities so try it out!",
      link: "https://master.dps8bs1tywos9.amplifyapp.com/",
    },
    {
      title: "E-commerce Website",
      description:
        "E-Commerce app using advance state management , select your favourite product from the fetched products enter your details and check your orders in the orders tab! Try it out to check the amazing functionalities! ",
      link: "https://www.youtube.com/watch?v=ApotU7wKlDA&t=5s",
    },
    {
      title: "Landing Page",
      description:
        "Landing page cloned from the almabetter website with fully responsive sliders been made from scratch also can be viewed on any platform! ",
      link: "https://main.d2xp8x0jlkufqf.amplifyapp.com/",
    },
  ]);

  const dispatch = useDispatch();

  const renderContent = (val) => {
    dispatch(changeNo(val - 1));
  };

  {
    const handelScroll = () => {
      setscroll(window.scrollY);
    };

    useEffect(() => {
      if (window.screen.availWidth <= 960) {
        setWidth(true);
      }

      const intersectionObserver = new IntersectionObserver((entry) => {
        if (entry[0].isIntersecting) {
          setintersection(true);
        } else {
          setintersection(false);
        }
      });
      intersectionObserver.observe(elem.current);

      if (intersection && !Width) {
        window.addEventListener("scroll", handelScroll);
      }

      return () => {
        window.removeEventListener("scroll", handelScroll);
      };
    }, [scroll, intersection, Width]);

    const images = [
      [
        {
          image: one,
          width: "300px",
          style: `translateY(-${(scroll / 15) * 1.2}px)`,
        },
        {
          image: two,
          width: "300px",
          style: `translateY(-${(scroll / 15) * 0.2}px)`,
        },
      ],
      [
        {
          image: four,
          width: "300px",
          style: `translateY(-${(scroll / 15) * 2}px)`,
        },
        {
          image: third,
          width: "400px",
          style: `translateY(-${(scroll / 15) * 1.3}px)`,
        },
        {
          image: five,
          width: "200px",
          style: `translateY(-${(scroll / 15) * 1.8}px)`,
        },
      ],
      [
        {
          image: six,
          width: "350px",
          style: `translateY(-${(scroll / 15) * 1.8}px)`,
        },
        {
          image: seven,
          width: "300px",
          style: `translateY(-${(scroll / 15) * 3}px)`,
        },
      ],

      [
        {
          image: eight,
          width: "300px",
          style: `translateY(-${(scroll / 15) * 2}px)`,
        },
        {
          image: nine,
          width: "200px",
          style: `translateY(-${(scroll / 15) * 0.5}px)`,
        },
        {
          image: ten,
          width: "450px",
          style: `translateY(-${(scroll / 15) * 1.5}px)`,
        },
      ],
    ];

    return (
      <>
        <div className="projects-container" ref={elem}>
          {!Width && (
            <>
              {" "}
              <div className="projects-left-content">
                <ProjectsContent data={data} />
              </div>
              <div className="projects-right-image">
                <ProjectImage
                  id={1}
                  renderContent={renderContent}
                  scroll={scroll}
                  images={images[0]}
                  key={1}
                />
                <ProjectImage
                  id={2}
                  renderContent={renderContent}
                  scroll={scroll}
                  images={images[1]}
                  key={2}
                />
                <ProjectImage
                  id={3}
                  renderContent={renderContent}
                  scroll={scroll}
                  images={images[2]}
                  key={3}
                />
                <ProjectImage
                  id={4}
                  renderContent={renderContent}
                  scroll={scroll}
                  images={images[3]}
                  key={4}
                />
              </div>
            </>
          )}
          {Width && (
            <MobileVersion data={data} images={[one, four, six, eight]} />
          )}
        </div>
      </>
    );
  }
};
