"use client";
import styles from "./style.module.css";
import image from "../../../public/images/border.png";
import { useEffect, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Image from "next/image";
import { BsDashLg } from "react-icons/bs";

const Slider = () => {
  const fakeData = [
    {
      text: "Inventore vel alias consequatur nihil maiores voluptate enim ea deleniti.",
      name: "Sherri Cronin",
      profession: "Dynamic Program Designer",
      img: "https://i.ibb.co/pWgD0Xg/Image-1.png",
    },
    {
      text: "Inventore vel alias consequatur nihil maiores voluptate enim ea deleniti.",
      name: "Sherri Cronin",
      profession: "Dynamic Program Designer",
      img: "https://i.ibb.co/pWgD0Xg/Image-1.png",
    },
    {
      text: "Inventore vel alias consequatur nihil maiores voluptate enim ea deleniti.",
      name: "Sherri Cronin",
      profession: "Dynamic Program Designer",
      img: "https://i.ibb.co/pWgD0Xg/Image-1.png",
    },
    {
      text: "Inventore vel alias consequatur nihil maiores voluptate enim ea deleniti.",
      name: "Sherri Cronin",
      profession: "Dynamic Program Designer",
      img: "https://i.ibb.co/pWgD0Xg/Image-1.png",
    },
  ];

  const [people] = useState(fakeData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      //   setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="bg-gradient-to-b from-[#0CB09F] to-[#2D8AE0] lg:py-20 py-10 ">
      <div className="container mx-auto px-5">
        <h1 className="text-center text-white font-bold lg:text-[45px] text-[30px]">
          Our testers enjoyed the exprience
        </h1>

        <div>
          <section className="container mx-auto">
            <div className={styles.sectionCenter}>
              {people.map((item, indexPeople) => {
                const { id, img, name, text, profession } = item;
                let position = `${styles.nextSlide}`;
                if (indexPeople === index) {
                  position = `${styles.activeSlide}`;
                }
                if (
                  indexPeople === index - 1 ||
                  (index === 0 && indexPeople === people.length - 1)
                ) {
                  position = `${styles.lastSlide}`;
                }
                return (
                  <div className={`${position} ${styles.article}`} key={id}>
                    <div className="lg:mx-[250px] static z-[9999] bg-white grid lg:grid-cols-2 items-center gap-[60px] p-14 justify-items-end">
                      <div className="relative">
                        <div>
                          <p className="text-start lg:text-[27px] text-lg font-semibold text-[#414246]">
                            {text}
                          </p>
                          <div className="mt-5 flex items-center gap-4">
                            <div className="flex items-center">
                              <div className="w-6 h-6 bg-black"></div>
                              <BsDashLg className="text-[40px]" />
                            </div>
                            <div>
                              <p className="text-start font-semibold lg:text-base text-sm">
                                {name}
                              </p>
                              <p className="text-start lg:text-base text-xs">
                                {profession}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute -z-[89999] -left-[94px] -top-[118px] lg:block hidden">
                          <Image
                            src="/images/full-border.png"
                            alt=""
                            width={350}
                            height={200}
                            className="h-[420px]"
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <div>
                          <img
                            src={img}
                            className="w-[240px] h-[240px]"
                            alt=""
                          />
                        </div>
                        <div className="absolute -right-[20px] -top-[18px]">
                          <div className=" border-t-[12px] border-t-[#2E8CE0] border-b-[#0DAA9A] border-r-[#2E8CE0] border-b-[12px] b border-r-[12px] h-[275px] w-[150px]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <button
                className={styles.prev}
                onClick={() => setIndex(index - 1)}
              >
                <GrFormPrevious className="text-[#2D8AE0]" />
              </button>
              <button
                className={styles.next}
                onClick={() => setIndex(index + 1)}
              >
                <GrFormNext className="text-[#2D8AE0]" />
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Slider;
