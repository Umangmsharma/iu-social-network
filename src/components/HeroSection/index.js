import React, { useState } from "react";
import Video from "../../videos/video2.mp4";
import image from "../../videos/IU-sample.jpeg";
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight,
} from "./HeroElements";
// import { AccountBox } from "../Forms";
import { AuthForm } from "../AuthForm";

const HeroSection = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};

	return (
		<HeroContainer>
			<HeroBg>
				{/* <VideoBg autoPlay={true} loop={true} muted={true} src={Video} type="video/mp4" /> */}
				 <div style={{ backgroundImage:`url(${image})`,  
                 height:1000,width:1500, backgroundSize: "cover"
                 }}></div>
			</HeroBg>
			<HeroContent>
				<AuthForm />
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
