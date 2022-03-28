import React from "react"
import Twitter from "../images/Twitter Icon.png"
import Facebook from "../images/Facebook Icon.png"
import Instagram from "../images/Instagram Icon.png"
import LinkedIn from "../images/Linkedin Icon.png"
import GitHub from "../images/GitHub Icon.png"

export default function SocialMedia() {
	return (
		<div className="social-media-div">
			<ul>
				<li>
					<a href="https://twitter.com/wani_abhay" target="_blank">
						<img src={Twitter}/>
					</a>
				</li>
				<li>
					<a href="https://www.facebook.com/abhay.waniii.9" target="_blank">
						<img src={Facebook}/>
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com/abhaywaniii" target="_blank">
						<img src={Instagram}/>
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/abrar-w-915204120/" target="_blank">
						<img src={LinkedIn}/>
					</a>
				</li>
				<li>
					<a href="https://github.com/abhaywani114" target="_blank">
						<img src={GitHub}/>
					</a>
				</li>


			</ul>
		</div>
	)
}
