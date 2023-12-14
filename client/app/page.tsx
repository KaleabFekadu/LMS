'use client'
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero"

interface Props { }

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div>
      <Heading
        title="ELearning"
        description="Elearning is a platform for learning online with kaleab learning"
        keywords="Programing and some shits about programming"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem} />
      <Hero />
    </div>
  )
};

export default Page;