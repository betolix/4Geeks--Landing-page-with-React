import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import CardOne from "./CardOne.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container bg-white">
		<div className="d-flex justify-content-evenly"/>	
			<Navbar/>
			<div className="container">
				<Jumbotron/>
				<br/>
				<br/>

				<div className="card_container">			
				<CardOne card_title="Hola" card_text="Bla bla bla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque." card_img_src="https://picsum.photos/id/61/500/326"/>
				<CardOne card_title="Como" card_text="Bla bla bla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque." card_img_src="https://picsum.photos/id/62/500/326"/>
				<CardOne card_title="Estas?" card_text="Bla bla bla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque." card_img_src="https://picsum.photos/id/63/500/326"/>
				</div> 
			</div>
			<br/>
				<br/>
			<Footer/>
		</div>


		
		 
				
			 
	);
};

export default Home;
