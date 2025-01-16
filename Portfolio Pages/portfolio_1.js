"use strict";

class MeowCard extends HTMLElement
{
	static observedAttributes = ["title", "description", "creationdate", "updatedate", "updateversion"];
	title = "Item Name";
	description = "Short Description";
	creationDate = new Date();
	updatedate = new Date();
	updateversion = "0.0.0"



	constructor() {
		super();
	}

	attributeChangedCallback(name, oldValue, newValue)
	{
		// console.log(
			// `${name}: ${oldValue} -> ${newValue}`
		// );
		switch (name)
		{
			case "title":
				this.title = newValue;
			break;
			case "description":
				this.description = newValue;
			break;
			case "creationdate":
				this.creationDate = new Date(Date.parse(newValue));
				console.log(this.creationDate);
			break;
			case "updatedate":
				this.updatedate = new Date(Date.parse(newValue));
			break;
			case "updateversion":
				this.updateversion = newValue;
			break;
			

		}
	}

	connectedCallback()
	{
		this.classList.add("col");
		this.innerHTML = `<div class="portfolio-items">
						<img src="placeholder.jpg">
						<p class="name">
							${this.title}
						</p>
						<p class="Description">
							${this.description}
						</p>
						<p class="creationdate">
							${this.creationDate.toDateString()}
						</p>
						<p class="updatedate">
							${this.updatedate.toDateString()}
						</p>
						<p class="updateversion">
							${this.updateversion}
						</p>
						<a class="link" href="Portfolio Items/item template.html">
							Item Links
						</a>
				</div>`;
	}
}

customElements.define('meow-card', MeowCard);

function load()

{
	let thebestcard = new MeowCard();

	thebestcard.title = "Im the Best and no juan else";
	
	document.getElementById['cardHolder'].appendChild(thebestcard);
}

