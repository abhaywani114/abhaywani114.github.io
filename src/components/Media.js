import React from "react"
import Ajay from '../images/ajay.jpg'

export default function Projects() {
	return (
		<div className="interests-div child-project">
			<h1>Media</h1>
			<p>The following are some of the misc media links:</p>
			<ul className="project-list">
				<li>
					<a target="_blank" href="https://www.greaterkashmir.com/todays-paper/multitalented-teenagerfrom-innovations-to-poetry-writing-abrar-does-it-all">Multitalented Teenager:From innovations to poetry writing, Abrar does it all (Greater Kashmir)</a>
				</li>
				<li>
					<a target="_blank" href="https://www.youtube.com/watch?v=mdJdogQK2G8">Radio Chinar (Youtube)</a>
				</li>
				<li>
					<a target="_blank" href={Ajay}>Letter From Ajay Bhatt (Inventor of USB, Intel USA)</a>
				</li>
				<li>
					<a target="_blank" href="https://www.poemhunter.com/abrar-ajaz-wani/biography/">Poemhunter</a>
				</li>
			</ul>
		</div>
	)
}
