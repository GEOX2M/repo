/*
	Eventually by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
const translations = {
	fr: {
	  download: "Télécharger mon CV",
	  title: "Développeur Unreal Engine",
	  phone: "Téléphone : ",
	  home: "Domicile : ",
	  homecontent: "Bruxelles, Belgique",
	  na: "Nationalité : ",
	  nacontent: "Belge",
	  showp: "Voir le portefolio",
	  titlep: "Passion et Expertise en Développement de Logiciels Vidéoludiques",
	  cvText: "Après mes études supérieures en informatique à Bruxelles, j’ai eu l’opportunité de travailler sur de nombreux projets avec le moteur de jeu Unreal Engine. Ce fut une grande surprise de voir mes compétences en informatique et ma passion pour les jeux vidéo se combiner si naturellement, me permettant de bâtir une carrière spécialisée dans le développement de logiciels. Je suis extrêmement motivé à l’idée de poursuivre cette voie au sein d’un grand projet d’équipe. J’ai hâte de continuer cette aventure et de développer de nouvelles compétences à vos côtés !",
	  projects: "Quelques projets",
	  aiassistant : "L’objectif de ce projet était de personnifier un LLM (Large Language Model). Pour y parvenir, j’ai combiné la console en temps réel d’OpenAI, Unreal Engine, et Nvidia Audio2Face. La création d’animations réalistes en temps réel a été un défi en soi, mais le plus complexe a été d’orienter les réponses vers des scénarios spécifiques et exigeants, tels que l’assistance dans un service des urgences. Mon projet à bien été acceuilli par le public dans divers salon tel que Living Tomorrow, le Kick Festival et le Proximus Event de Malines.",
	  jailbirds : "Jailbirds est un projet d’animation en temps réel en réalité virtuelle auquel j’ai contribué de manière significative. J’ai été responsable de l’intégration de tous les assets, de la création de certains shaders, effets de post-traitement, et systèmes de particules. Mon rôle principal a été d’intégrer la réalité virtuelle au projet. L’expérience permet aux utilisateurs de se déplacer dans l’environnement et d’observer les scènes du film sous n’importe quel angle. Certaines scènes se déclenchent uniquement lorsque l’utilisateur les regarde, ajoutant une dimension interactive et immersive unique.",
	  goalkeeper : "Poolpio m'a donné la charge de réaliser un petit jeu de tir au but qui serait installé dans une salle d'arcade physique, je devais pour cela créer une projection de deux écrans. Un capteur tactile détectait les coordonnées de l’impact de la balle, que j’utilisais pour simuler virtuellement la trajectoire et la continuité du ballon dans le monde virtuel. De plus, il fallait connecter mon application Unreal à une tablette, permettant de coordonner le match, de changer le mode de jeu, de relancer le compte à rebours, etc. ",
	  immersive : "Un artiste nommé Manu Di Martino m'a demandé de réaliser une expérience VR autonome pour le Quest 3, mettant en scène sa chorégraphie de danseurs conceptuels. L'objectif de l'application est de pouvoir orchestrer les danseurs, accélérer ou ralentir leurs mouvements, les déplacer dans l'espace et créer des formations. Nous avons également longuement réfléchi à sublimer ses personnages avec des effets visuels.",
	  handtracking : "J'ai eu la responsabilité de développer ce projet pour une exposition de la Commission Européenne. Mon objectif était de présenter leurs diapositives dans une application ludique avec un personnage et une webcam. Le jeu consistait à pouvoir lire et changer les diapositives avec des gestes de la main. Pour ce faire, j'ai intégré à Unreal Engine un système personnalisé de handtracking, basé sur les solutions fournies par MediaPipe et OpenCV.",
	  nouvellebelgique : "En collaboration avec Granola Studio, l'équipe Poolpio et moi avons développé un concert virtuel pour le rappeur flamand ZWANGERE di-GUY. Dans ce projet, j'ai eu la charge de créer tous les effets de particules, de projections, ainsi que la chorégraphie et la synchronisation des lumières en multijoueur. Nous avons également permis à un DJ de contrôler de nombreuses commandes pour créer en live l'ambiance lumineuse du concert.",
	  wallibi : "Le parc d'attractions Walibi organisait un événement e-sport sur Rocket League. Pour l'occasion, nous avons développé un hub où les joueurs pouvaient se rassembler en ligne avec leur avatar, assister aux matchs de Rocket League diffusés sur les écrans du stade, connectés directement à une chaîne Twitch e-sport.",
	  planetarium : "J'ai eu pour mission de créer une application pour le casque de réalité virtuelle Vive Focus Plus. Cette application permet à l'utilisateur de voyager à travers des captures 360° photo, video de l'Observatoire Royal de Bruxelles. En se focalisant sur certains éléments, l'utilisateur peut faire apparaître devant lui des textes et des vidéos descriptifs, le tout disponible en trois langues : français, anglais et néerlandais.",
	  student : "Projets étudiant",
	  studentcontent : "Voici quelques projets que j'ai réalisés durant mes études. Tous ont été développés en C++ en respectant le design pattern Model-View-Controller. L'interface utilisateur (UI) a été conçue à l'aide du framework Qt Creator.",
	  formations : "Formations",
	  formation01 : "Informatique et systèmes, finalité réseaux et télécommunication",
	  formation01content : "Diplômé d’un bachelier (3 ans) de l’<a href='https://he2b.be/'>HE2B</a> en 2020, une école supérieure d’informatique située à Bruxelles, j’ai acquis les bases fondamentales de l’informatique, notamment :",
	  formation01contentli01 : "Les bases en algorithmique",
	  formation01contentli02 : "Les langages de programmation : Java, C/C++, JavaScript, PHP",
	  formation01contentli03 : "Les langages de balisage : HTML, XML",
	  formation01contentli04 : "Les langages de requête : Oracle, MySQL, PostgreSQL",
	  formation01contentli05 : "Les infrastructures réseau",
	  formation01contentli06 : "La programmation système sous Linux et Windows",
	  formation02content : "J'ai appri à utiliser ce framework en suivant une formation Udemy intitulée <a href='https://www.udemy.com/course/unreal-engine-5-gas-top-down-rpg/'>'Unreal Engine 5 - Gameplay Ability System - Top Down RPG'</a>",
	  footComment : "Ce site web a été conçu par mes soins avec HTML, CSS et JavaScript",
	  website : "Hébergé sur <a href='https://github.com/GEOX2M'>github</a>",
	  experience : "Expérience professionnelle",
	  exp01 : "Lead developper chez <a href='https://poolpio.com/'>Poolpio</a> & <a href='https://magicloom.studio'>MagicLoom</a>",
	  exp01content : "Responsable du développement et de la programmation chez Poolpio et MagicLoom, je supervise les aspects interactifs des projets, depuis l'analyse jusqu'au déploiement final. La majeure partie de ma carrière s'est déroulée avec le moteur de jeu Unreal Engine, où j'ai acquis une expertise polyvalente : programmation des mécaniques de jeu, création de shaders, logique d'animation, conception d'effets de particules, éclairage, modélisation d'environnements, développement d'interfaces utilisateur (UI), ainsi que la mise en place et la préparation de projets. J'aime apporter mon aide autant que possible, quel que soit le domaine de compétence.",
	  exp01legend : "Janvier 2021 - Aujourd'hui",
	},
	en: {
	  download: "Download CV",
	  title: "Unreal Engine developer",
	  phone: "Phone Number : ",
	  home: "Home : ",
	  homecontent: "Brussels, Belgium",
	  na: "Nationality : ",
	  nacontent: "Belgian",
	  showp : "Full Portfolio",
	  titlep: "Passion and Expertise in Video Game Software Development",
	  cvText: "After completing my higher education in computer science in Brussels, I had the opportunity to work on numerous projects using Unreal Engine. It was a pleasant surprise to see how my computer science skills and passion for video games could naturally come together, enabling me to build a career specializing in software development. I am highly motivated to continue along this path within a major team project. I look forward to continuing this journey and developing new skills with you!",
	  projects: "Some Projects",
	  aiassistant: "The goal of this project was to personify an LLM (Large Language Model). To achieve this, I combined OpenAI's real-time console, Unreal Engine, and Nvidia Audio2Face. Creating realistic animations in real time was a challenge, but the most complex part was guiding the responses toward specific and demanding scenarios, such as assistance in an emergency department. My project was well-received by the public at various events, including Living Tomorrow, the Kick Festival, and the Proximus Event in Mechelen.",
	  jailbirds: "Jailbirds is a real-time animation project in virtual reality to which I made a significant contribution. I was responsible for integrating all assets, creating certain shaders, post-processing effects, and particle systems. My main role was to integrate virtual reality into the project. The experience allows users to move around the environment and observe the film scenes from any angle. Some scenes are triggered only when the user looks at them, adding a unique interactive and immersive dimension.",
	  goalkeeper: "Poolpio assigned me the task of creating a penalty shootout mini-game for a physical arcade room. To do this, I developed a projection system for two screens. A touch sensor detected the coordinates of the ball’s impact, which I used to virtually simulate the ball's trajectory and continuity in the virtual world. Additionally, my Unreal application was connected to a tablet, allowing for match coordination, mode changes, countdown resets, and more.",
	  immersive: "An artist named Manu Di Martino asked me to create a standalone VR experience for the Quest 3, showcasing his choreography of conceptual dancers. The application’s goal is to orchestrate the dancers, speed up or slow down their movements, reposition them in space, and create formations. We also spent significant time enhancing the characters with visual effects.",
	  handtracking: "I was responsible for developing this project for an exhibition by the European Commission. My goal was to present their slides in an engaging application featuring a character and a webcam. The game involved reading and changing slides through hand gestures. To achieve this, I integrated a custom hand-tracking system into Unreal Engine, based on solutions provided by MediaPipe and OpenCV.",
	  nouvellebelgique: "In collaboration with Granola Studio, the Poolpio team and I developed a virtual concert for the Flemish rapper ZWANGERE di-GUY. In this project, I was responsible for creating all the particle effects, projections, choreography, and lighting synchronization in multiplayer. We also enabled a DJ to control numerous commands to create a live concert lighting ambiance.",
	  wallibi: "The Walibi amusement park organized an e-sports event for Rocket League. For this occasion, we developed a hub where players could gather online with their avatars, watch Rocket League matches on stadium screens, and stream directly from the e-sports Twitch channel.",
	  planetarium: "I was tasked with creating an application for the Vive Focus Plus virtual reality headset. This application allows users to travel through 360° photo and video captures of the Royal Observatory of Belgium. By focusing on certain elements, users can make descriptive texts and videos appear in front of them, all available in three languages: French, English, and Dutch.",
	  student: "Student Projects",
	  studentcontent: "Here are some projects I worked on during my studies. All of them were developed in C++ using the Model-View-Controller design pattern. The user interface (UI) was created using the Qt Creator framework.",
	  formations: "Education",
	  formation01: "Computer Science and Systems, specializing in Networks and Telecommunications",
	  formation01content: "Graduated with a Bachelor's degree (3 years) from <a href='https://he2b.be/'>HE2B</a> in 2020, a higher education institution in computer science located in Brussels. I acquired the fundamental foundations of computer science, including:",
	  formation01contentli01: "Basics of algorithms",
	  formation01contentli02: "Programming languages: Java, C/C++, JavaScript, PHP",
	  formation01contentli03: "Markup languages: HTML, XML",
	  formation01contentli04: "Query languages: Oracle, MySQL, PostgreSQL",
	  formation01contentli05: "Network infrastructures",
	  formation01contentli06: "System programming on Linux and Windows",
	  formation02content: "I learned to use this framework by following a Udemy course titled <a href='https://www.udemy.com/course/unreal-engine-5-gas-top-down-rpg/'>‘Unreal Engine 5 - Gameplay Ability System - Top Down RPG’</a>",
	  footComment : "This website was crafted by me using HTML, CSS, and JavaScript.",
	  website : "Hosted on <a href='https://github.com/GEOX2M'>github</a>",
	  experience : "Professional experience",
	  exp01 : "Lead developper at <a href='https://poolpio.com/'>Poolpio</a> & <a href='https://magicloom.studio'>MagicLoom</a>",
	  exp01content : "As a development and programming lead at Poolpio and MagicLoom, I oversee the interactive aspects of projects, from analysis to final deployment. Most of my career has been centered around Unreal Engine, where I have gained versatile expertise: programming game mechanics, creating shaders, animation logic, designing particle effects, lighting, environment modeling, user interface (UI) development, as well as project setup and preparation. I enjoy being as helpful as possible, no matter the field of expertise.",
	  exp01legend : "January 2021 - Today",
	},
  };

  let lang = 'en';  // Variable globale

  function download() {
	url = lang === 'en' ? "./files/CV Minez Geoffrey 2024 en.pdf" : "./files/CV Minez Geoffrey 2024 fr.pdf" 
	const a = document.createElement('a')
	a.href = url
	a.download = url.split('/').pop()
	document.body.appendChild(a)
	a.click()
	document.body.removeChild(a)
  }

function changeLanguage(newlang) {
	lang = newlang
	const elements = document.querySelectorAll("[data-key]");
	elements.forEach((el) => {
	  const key = el.getAttribute("data-key");
	  el.innerHTML = translations[lang][key];
	});
  }
  
  window.onload = function() {
	changeLanguage('en');
  };

  window.addEventListener('load', function () {
	const portfolio = document.getElementById('Portfolio');
	portfolio.classList.add('show'); // Ajoute la classe pour afficher le portfolio
  
	// Si besoin de manipuler le body
	document.body.style.overflow = 'visible'; // Exemple : Permettre le défilement
	document.body.style.overflowX = "hidden";
  });
(function() {

	"use strict";

	var	$body = document.querySelector('body');

	document.addEventListener('DOMContentLoaded', function () {
		document.body.style.overflowY = 'hidden'; // Cache la scrollbar au chargement
	  });

	document.getElementById('show-portfolio').addEventListener('click', function () {
		// Toggle the visibility of the Portfolio
		const portfolio = document.getElementById('Portfolio');
		portfolio.classList.toggle('show');
	  
		// Toggle the overflow style of the body
		const body = document.body;
		body.style.overflowY = (body.style.overflowY === 'hidden') ? 'visible' : 'hidden';
	  });

	// Methods/polyfills.

		// classList | (c) @remy | github.com/remy/polyfills | rem.mit-license.org
			!function(){function t(t){this.el=t;for(var n=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),i=0;i<n.length;i++)e.call(this,n[i])}function n(t,n,i){Object.defineProperty?Object.defineProperty(t,n,{get:i}):t.__defineGetter__(n,i)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var i=Array.prototype,e=i.push,s=i.splice,o=i.join;t.prototype={add:function(t){this.contains(t)||(e.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var n=0;n<this.length&&this[n]!=t;n++);s.call(this,n,1),this.el.className=this.toString()}},toString:function(){return o.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=t,n(Element.prototype,"classList",function(){return new t(this)})}}();

		// canUse
			window.canUse=function(p){if(!window._canUse)window._canUse=document.createElement("div");var e=window._canUse.style,up=p.charAt(0).toUpperCase()+p.slice(1);return p in e||"Moz"+up in e||"Webkit"+up in e||"O"+up in e||"ms"+up in e};

		// window.addEventListener
			(function(){if("addEventListener"in window)return;window.addEventListener=function(type,f){window.attachEvent("on"+type,f)}})();

	// Play initial animations on page load.
		window.addEventListener('load', function() {
			window.setTimeout(function() {
				$body.classList.remove('is-preload');
			}, 100);
		});

		// toggle.js

		document.getElementById('show-portfolio').addEventListener('click', function() {
			document.getElementById('portfolio').classList.toggle('show');
		  });


	// Slideshow Background.
		(function() {

			// Settings.
				var settings = {

					// Images (in the format of 'url': 'alignment').
						images: {
							'images/bg01.jpg': 'center',
							'images/bg02.jpg': 'center',
							'images/bg03.jpg': 'center'
						},

					// Delay.
						delay: 6000

				};

			// Vars.
				var	pos = 0, lastPos = 0,
					$wrapper, $bgs = [], $bg,
					k, v;

			// Create BG wrapper, BGs.
				$wrapper = document.createElement('div');
					$wrapper.id = 'bg';
					$body.appendChild($wrapper);

				for (k in settings.images) {

					// Create BG.
						$bg = document.createElement('div');
							$bg.style.backgroundImage = 'url("' + k + '")';
							$bg.style.backgroundPosition = settings.images[k];
							$wrapper.appendChild($bg);

					// Add it to array.
						$bgs.push($bg);

				}

			// Main loop.
				$bgs[pos].classList.add('visible');
				$bgs[pos].classList.add('top');

				// Bail if we only have a single BG or the client doesn't support transitions.
					if ($bgs.length == 1
					||	!canUse('transition'))
						return;

				window.setInterval(function() {

					lastPos = pos;
					pos++;

					// Wrap to beginning if necessary.
						if (pos >= $bgs.length)
							pos = 0;

					// Swap top images.
						$bgs[lastPos].classList.remove('top');
						$bgs[pos].classList.add('visible');
						$bgs[pos].classList.add('top');

					// Hide last image after a short delay.
						window.setTimeout(function() {
							$bgs[lastPos].classList.remove('visible');
						}, settings.delay / 2);

				}, settings.delay);

		})();

})();


function redirectTo(url) {
    window.location.href = url;
  }
  