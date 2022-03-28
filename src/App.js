import React from "react"
import Image from "./components/Image"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import SocialMedia from "./components/SocialMedia"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

export default function App() {
	return (
		<main className="main-container">
			<Image/>
			<Info/>
			<About/>
			<Skills/>
			<Projects/>
			<Interests/>
			<SocialMedia/>
		</main>
	)
}
