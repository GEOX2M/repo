(function () {
	'use strict';

	// Translations object. Some entries include HTML so we use innerHTML when required.
	const translations = {
		fr: {
			download: "Télécharger mon CV",
			title: "Développeur C++ Unreal Engine",
			roleTitles: ["Développeur C++ Unreal Engine", "XR Developer", "Unreal Technical Developer", "Technical Artist", "Multiplayer Game Developer"],
			home: "Domicile",
			homecontent: "Bruxelles, Belgique",
			na: "Nationalité",
			nacontent: "Belge",
			titlep: "Développeur C++ Unreal Engine — Référent Technique — Développement Temps Réel",
			cvText: "<p>Développeur spécialisé en C++ et Unreal Engine avec plus de 6 ans d'expérience dans la conception d'applications temps réel immersives. Référent technique sur des projets variés mêlant réalité virtuelle, production virtuelle, expériences multijoueurs, visualisation 3D et applications interactives.</p><p>Autonome sur l'ensemble du cycle de développement, de l'architecture technique jusqu'au déploiement, je conçois des solutions Unreal Engine adaptées à des besoins complexes : systèmes multijoueurs synchronisés, plateformes VR, outils de production, intégration de pipelines, interfaces de supervision et applications temps réel.</p><p>Mon rôle dépasse le développement logiciel classique : j'interviens également sur l'infrastructure technique, l'optimisation des workflows, l'intégration de technologies externes et l'accompagnement des équipes afin d'améliorer la production.</p><p>Habitué à travailler sur des projets innovants nécessitant une forte polyvalence, je combine compétences en programmation C++, expertise Unreal Engine et compréhension des contraintes artistiques et techniques des environnements 3D temps réel.</p>",
			navProfil: "Profil",
			navExp: "Expérience",
			navFormations: "Formations",
			navProjects: "Projets",
			navGalerie: "Galerie",
			statYears: "Ans d'expérience",
			statLangs: "Langues",
			experience: "Expérience professionnelle",
			exp01Title: "Lead Unreal C++ Developer",
			ctaSite: "Voir le site ↗",
			ctaReadMore: "Lire la suite →",
			exp01legend: "Janvier 2021 - Aujourd'hui",
			formations: "Formations",
			formation02content: "J'ai appris à utiliser ce framework en suivant une formation Udemy intitulée \"Unreal Engine 5 - Gameplay Ability System - Top Down RPG\"",
			formation01: "Informatique et systèmes, finalité réseaux et télécommunication",
			formation01content: "Diplômé d'un bachelier (3 ans) de l'HE2B en 2020, une école supérieure d'informatique située à Bruxelles, j'ai acquis les bases fondamentales de l'informatique, notamment :",
			formation01contentli01: "Les bases en algorithmique",
			formation01contentli02: "Les langages de programmation : Java, C/C++, JavaScript, PHP",
			formation01contentli03: "Les langages de balisage : HTML, XML",
			formation01contentli04: "Les langages de requête : Oracle, MySQL, PostgreSQL",
			formation01contentli05: "Les infrastructures réseau",
			formation01contentli06: "La programmation système sous Linux et Windows",
			projects: "Quelques projets",
			lbeTitle: "Multiplayer LBE VR (Location-Based Entertainment VR)",
			lbeContent: "<p>L'un de mes projets les plus importants a été la conception d'une infrastructure multijoueur dédiée aux expériences VR en environnement physique partagé (Location-Based Entertainment).</p><p>Cette plateforme a été développée pour supporter plusieurs types d'applications : expériences artistiques immersives, formations collaboratives virtuelles et visites interactives de lieux.</p><p>Le principe consiste à reproduire un espace physique réel dans un environnement virtuel afin de permettre aux utilisateurs de se déplacer librement dans la zone tout en conservant une correspondance précise entre leurs mouvements réels et leur représentation virtuelle.</p><p>Les déplacements des participants, les mouvements de tête ainsi que le hand tracking sont capturés et synchronisés en temps réel entre tous les utilisateurs présents dans le même espace. Chaque participant partage ainsi une expérience multijoueur cohérente, où les interactions et les mouvements de chacun sont retranscrits instantanément dans l'environnement virtuel.</p><p>J'ai conçu l'architecture réseau et les systèmes nécessaires à la synchronisation des utilisateurs, ainsi que les outils permettant l'exploitation et la supervision des expériences.</p><p>Un système de contrôle centralisé permet à un opérateur de piloter les sessions via une suite d'outils connectés à une interface web. Les commandes envoyées depuis cette interface sont transmises directement au serveur multijoueur afin d'orchestrer les expériences, les formations ou les scénarios interactifs en temps réel.</p>",
			mocapTitle: "Motion Capture projects",
			mocapContent: "<p>En collaboration avec un collègue spécialisé en animation, nous réalisons des sessions de capture de mouvements (Motion Capture) destinées à l'animation de personnages 3D, avec une prévisualisation en temps réel sous Unreal Engine.</p><p>Ces sessions impliquent l'installation et la configuration complète du matériel et des logiciels : mise en place des caméras, calibration du système, préparation des combinaisons de capture, positionnement des capteurs et lancement des enregistrements.</p><p>Je suis ensuite responsable de l'intégration des animations dans nos applications temps réel et nos jeux sous Unreal Engine.</p><p>Ce travail requiert une grande rigueur afin d'obtenir des captures cohérentes, naturelles et facilement exploitables. L'objectif est de produire des animations qui s'intègrent parfaitement aux systèmes d'animation du moteur, en garantissant des transitions fluides et un rendu réaliste grâce à l'utilisation de State Machines, du Motion Matching, des Control Rigs et d'autres outils d'animation avancés.</p>",
			vpTitle: "Virtual production projects",
			vpContent: "<p>J'ai participé à plusieurs projets de production virtuelle pour le cinéma et l'audiovisuel, notamment sur les films La Nuit se traîne et Night in Paradise, ainsi que sur plusieurs productions de plus petite envergure, telles que des clips musicaux.</p><p>Mon rôle consistait à garantir le bon fonctionnement de l'infrastructure technique nécessaire aux tournages sur plateau LED. J'étais notamment responsable de la supervision des serveurs diffusant le contenu visuel sur les murs LED et de la stabilité de l'ensemble de la chaîne de diffusion.</p><p>J'assurais également l'intégration temps réel avec Unreal Engine afin de synchroniser la caméra physique du plateau avec sa caméra virtuelle. Cette configuration permettait un tracking précis reliant le décor virtuel au mouvement réel de la caméra, offrant ainsi un rendu cohérent directement pendant le tournage.</p><p>Enfin, je préparais les projets Unreal Engine pour permettre au réalisateur et à l'équipe de production de modifier en direct différents paramètres de la scène (décors, éclairages, variantes visuelles, etc.) sans interrompre le tournage, garantissant ainsi une grande flexibilité artistique sur le plateau.</p>",
			vodTitle: "VR VOD Platform – Video Streaming & 360° Experiences",
			vodContent: "<p>J'ai développé sous Unreal Engine une plateforme de vidéo à la demande (VOD) en réalité virtuelle permettant de diffuser et gérer des contenus immersifs à destination de plusieurs projets de visualisation 360°.</p><p>La plateforme propose une interface personnalisable pouvant être adaptée aux besoins de différents projets et clients. Les utilisateurs peuvent accéder à des expériences vidéo immersives directement en VR, avec la possibilité de lire les contenus en streaming ou de les télécharger localement afin de garantir une lecture fluide selon les contraintes réseau.</p><p>Les contenus sont stockés sur une infrastructure cloud et accessibles à distance à la demande. Un système de gestion permet d'ajouter, supprimer et organiser les vidéos ainsi que leurs différentes versions linguistiques sans nécessiter de modification de l'application.</p><p>J'ai conçu l'intégration Unreal Engine ainsi que les différents systèmes nécessaires à la gestion des contenus, à leur récupération distante et à leur exploitation dans un environnement VR temps réel.</p>",
			serverTitle: "Serveurs, outils et infrastructure technique",
			serverContent: "<p>En complément de mon rôle de développeur Unreal Engine, je suis responsable du bon fonctionnement de l'infrastructure informatique de l'entreprise, comprenant les postes de travail, les serveurs et les outils nécessaires à la production.</p><p>J'assure la supervision et la maintenance du réseau, ainsi que l'installation, la configuration et l'administration des différents outils utilisés par les équipes : solutions de transfert de fichiers, VPN, SVN, FTP, Perforce, NAS, outils collaboratifs et gestionnaires de mots de passe.</p><p>Je prends également en charge le diagnostic et la résolution des problèmes techniques rencontrés sur les postes de travail, les serveurs multimédias et l'environnement de production, afin de garantir la continuité des activités.</p><p>Parallèlement, je recherche et développe des solutions permettant d'améliorer les workflows internes et d'optimiser la collaboration entre les équipes. Cela inclut l'intégration et la personnalisation d'outils de gestion de production tels que Kitsu et AYON, ainsi que le développement d'outils dédiés à la création de projets, l'attribution des rôles, l'organisation des fichiers et l'automatisation de tâches récurrentes.</p><p>Cette approche me permet de contribuer à l'ensemble de la chaîne de production, depuis l'infrastructure technique jusqu'aux outils utilisés quotidiennement par les équipes créatives et techniques.</p>",
			aiTitle: "AI Assistant",
			aiassistant: "L'objectif de ce projet était de personnifier un LLM (Large Language Model). Pour y parvenir, j'ai combiné la console en temps réel d'OpenAI, Unreal Engine, et Nvidia Audio2Face. Mon projet a bien été accueilli par le public dans divers salons tel que Living Tomorrow, le Kikk Festival et le Proximus Event de Malines.",
			jailbirdsTitle: "Jailbirds",
			jailbirds: "Jailbirds est un projet d'animation en temps réel en réalité virtuelle. J'ai été responsable de l'intégration de tous les assets, de la création de certains shaders, effets de post-traitement, et systèmes de particules.",
			goalkeeperTitle: "Jeu de gardien de but",
			goalkeeper: "Poolpio m'a donné la charge de réaliser un petit jeu de tir au but installé dans une salle d'arcade physique, avec une projection sur deux écrans et un capteur tactile détectant l'impact de la balle.",
			immersiveTitle: "Immersive Fokus",
			immersive: "Un artiste nommé Manu Di Martino m'a demandé de réaliser une expérience VR autonome pour le Quest 3, mettant en scène sa chorégraphie de danseurs conceptuels.",
			handtrackingTitle: "Handtracking-Diaporama",
			handtracking: "J'ai eu la responsabilité de développer ce projet pour une exposition de la Commission Européenne, avec un système personnalisé de handtracking basé sur MediaPipe et OpenCV.",
			nouvelleTitle: "Nouvelle-belgique",
			nouvellebelgique: "En collaboration avec Granola Studio, l'équipe Poolpio et moi avons développé un concert virtuel pour le rappeur flamand ZWANGERE di-GUY, avec effets de particules et synchronisation des lumières en multijoueur.",
			wallibiTitle: "Walibi Esport Stadium",
			wallibi: "Le parc d'attractions Walibi organisait un événement e-sport sur Rocket League. Nous avons développé un hub où les joueurs pouvaient se rassembler en ligne avec leur avatar.",
			planetariumTitle: "Visite virtuelle du Planétarium de Bruxelles",
			planetarium: "J'ai créé une application pour le casque de réalité virtuelle Vive Focus Plus, permettant de voyager à travers des captures 360° de l'Observatoire Royal de Bruxelles.",
			student: "Projets étudiant",
			studentcontent: "Projets réalisés durant mes études, développés en C++ en respectant le design pattern Model-View-Controller, avec une UI conçue sous Qt Creator.",
			website: "Hébergé sur <a href='https://github.com/GEOX2M'>github</a>",
			tagIA: "IA", tagVR: "VR", tagInteractif: "Interactif", tagLive: "Live", tagEtudes: "Études", tagTechnique: "Technique",
		},
		en: {
			download: "Download CV",
			title: "C++ Unreal Engine Developer",
			roleTitles: ["C++ Unreal Engine Developer", "XR Developer", "Unreal Technical Developer", "Technical Artist", "Multiplayer Game Developer"],
			home: "Home",
			homecontent: "Brussels, Belgium",
			na: "Nationality",
			nacontent: "Belgian",
			titlep: "C++ Unreal Engine Developer — Technical Lead — Real-Time Development",
			cvText: "<p>C++ and Unreal Engine specialist with over 6 years of experience designing immersive real-time applications. Technical lead on a wide range of projects spanning virtual reality, virtual production, multiplayer experiences, 3D visualization and interactive applications.</p><p>Autonomous across the entire development cycle, from technical architecture to deployment, I design Unreal Engine solutions tailored to complex needs: synchronized multiplayer systems, VR platforms, production tools, pipeline integration, supervision interfaces and real-time applications.</p><p>My role goes beyond classic software development: I also work on technical infrastructure, workflow optimization, the integration of external technologies, and supporting teams to improve production.</p><p>Used to working on innovative projects that demand strong versatility, I combine C++ programming skills, Unreal Engine expertise and an understanding of the artistic and technical constraints of real-time 3D environments.</p>",
			navProfil: "Profile",
			navExp: "Experience",
			navFormations: "Education",
			navProjects: "Projects",
			navGalerie: "Gallery",
			statYears: "Years of experience",
			statLangs: "Languages",
			experience: "Professional experience",
			exp01Title: "Lead Unreal C++ Developer",
			ctaSite: "View site ↗",
			ctaReadMore: "Read more →",
			exp01legend: "January 2021 - Today",
			formations: "Education",
			formation02content: "I learned how to use this framework by taking a Udemy course entitled \"Unreal Engine 5 - Gameplay Ability System - Top Down RPG\"",
			formation01: "Computer Science and Systems, specializing in Networks and Telecommunications",
			formation01content: "Graduated with a Bachelor's degree (3 years) from HE2B in 2020, a higher education institution in computer science located in Brussels. I acquired the fundamental foundations of computer science, including:",
			formation01contentli01: "Basics of algorithms",
			formation01contentli02: "Programming languages: Java, C/C++, JavaScript, PHP",
			formation01contentli03: "Markup languages: HTML, XML",
			formation01contentli04: "Query languages: Oracle, MySQL, PostgreSQL",
			formation01contentli05: "Network infrastructures",
			formation01contentli06: "System programming on Linux and Windows",
			projects: "Some Projects",
			lbeTitle: "Multiplayer LBE VR (Location-Based Entertainment VR)",
			lbeContent: "<p>One of my most significant projects was designing a multiplayer infrastructure for VR experiences in a shared physical space (Location-Based Entertainment).</p><p>This platform was built to support several types of applications: immersive artistic experiences, collaborative virtual training, and interactive venue tours.</p><p>The principle involves reproducing a real physical space in a virtual environment, allowing users to move freely within the area while maintaining a precise match between their real movements and their virtual representation.</p><p>Participants' movements, head tracking and hand tracking are captured and synchronized in real time across all users present in the same space. Each participant thus shares a coherent multiplayer experience, where everyone's interactions and movements are instantly reflected in the virtual environment.</p><p>I designed the network architecture and the systems required for user synchronization, as well as the tools used to operate and supervise the experiences.</p><p>A centralized control system lets an operator run sessions through a suite of tools connected to a web interface. Commands sent from this interface are transmitted directly to the multiplayer server to orchestrate experiences, training sessions or interactive scenarios in real time.</p>",
			mocapTitle: "Motion Capture projects",
			mocapContent: "<p>In collaboration with a colleague specialized in animation, we run motion capture sessions for 3D character animation, with real-time previsualization in Unreal Engine.</p><p>These sessions involve the full setup and configuration of the hardware and software: positioning the cameras, calibrating the system, preparing the capture suits, placing the markers, and launching the recordings.</p><p>I am then responsible for integrating the animations into our real-time applications and games in Unreal Engine.</p><p>This work demands great rigor to obtain coherent, natural and easily usable captures. The goal is to produce animations that integrate seamlessly with the engine's animation systems, ensuring smooth transitions and realistic results through the use of State Machines, Motion Matching, Control Rigs and other advanced animation tools.</p>",
			vpTitle: "Virtual production projects",
			vpContent: "<p>I took part in several virtual production projects for film and audiovisual media, including the films La Nuit se traîne and Night in Paradise, as well as smaller-scale productions such as music videos.</p><p>My role was to ensure the smooth operation of the technical infrastructure required for shoots on an LED stage. I was notably responsible for supervising the servers broadcasting visual content to the LED walls and for the stability of the entire broadcast chain.</p><p>I also handled real-time integration with Unreal Engine to synchronize the physical set camera with its virtual counterpart. This setup enabled precise tracking linking the virtual set to the camera's real-world movement, delivering a coherent result directly on set.</p><p>Finally, I prepared the Unreal Engine projects to let the director and production team live-edit various scene parameters (sets, lighting, visual variants, etc.) without interrupting the shoot, ensuring great artistic flexibility on set.</p>",
			vodTitle: "VR VOD Platform – Video Streaming & 360° Experiences",
			vodContent: "<p>I developed a virtual reality video-on-demand (VOD) platform in Unreal Engine to distribute and manage immersive content for several 360° visualization projects.</p><p>The platform offers a customizable interface that can be adapted to the needs of different projects and clients. Users can access immersive video experiences directly in VR, with the ability to stream content or download it locally to ensure smooth playback depending on network constraints.</p><p>Content is stored on a cloud infrastructure and accessible remotely on demand. A management system allows videos and their various language versions to be added, removed and organized without requiring any changes to the application.</p><p>I designed the Unreal Engine integration as well as the various systems required for content management, remote retrieval and use in a real-time VR environment.</p>",
			serverTitle: "Servers, tools & technical infrastructure",
			serverContent: "<p>In addition to my role as an Unreal Engine developer, I am responsible for the smooth operation of the company's IT infrastructure, including workstations, servers and the tools required for production.</p><p>I oversee and maintain the network, as well as install, configure and administer the various tools used by the teams: file transfer solutions, VPN, SVN, FTP, Perforce, NAS, collaborative tools and password managers.</p><p>I also handle the diagnosis and resolution of technical issues encountered on workstations, media servers and the production environment, in order to ensure business continuity.</p><p>Alongside this, I research and develop solutions to improve internal workflows and optimize collaboration between teams. This includes integrating and customizing production management tools such as Kitsu and AYON, as well as developing tools dedicated to project creation, role assignment, file organization and the automation of recurring tasks.</p><p>This approach lets me contribute to the entire production chain, from the technical infrastructure to the tools used daily by the creative and technical teams.</p>",
			aiTitle: "AI Assistant",
			aiassistant: "The goal of this project was to personify an LLM (Large Language Model). To achieve this, I combined OpenAI's real-time console, Unreal Engine, and Nvidia Audio2Face. My project was well-received by the public at various events, including Living Tomorrow, the Kikk Festival, and the Proximus Event in Mechelen.",
			jailbirdsTitle: "Jailbirds",
			jailbirds: "Jailbirds is a real-time animation project in virtual reality. I was responsible for integrating all assets, creating certain shaders, post-processing effects, and particle systems.",
			goalkeeperTitle: "Goalkeeper game",
			goalkeeper: "Poolpio assigned me the task of creating a penalty shootout mini-game for a physical arcade room, with a two-screen projection and a touch sensor detecting the ball's impact.",
			immersiveTitle: "Immersive Fokus",
			immersive: "An artist named Manu Di Martino asked me to create a standalone VR experience for the Quest 3, showcasing his choreography of conceptual dancers.",
			handtrackingTitle: "Handtracking-Diaporama",
			handtracking: "I was responsible for developing this project for an exhibition by the European Commission, with a custom hand-tracking system based on MediaPipe and OpenCV.",
			nouvelleTitle: "Nouvelle-belgique",
			nouvellebelgique: "In collaboration with Granola Studio, the Poolpio team and I developed a virtual concert for the Flemish rapper ZWANGERE di-GUY, with particle effects and multiplayer lighting synchronization.",
			wallibiTitle: "Walibi Esport Stadium",
			wallibi: "The Walibi amusement park organized an e-sports event for Rocket League. We developed a hub where players could gather online with their avatars.",
			planetariumTitle: "Brussels Planetarium virtual tour",
			planetarium: "I created an application for the Vive Focus Plus virtual reality headset, allowing users to travel through 360° captures of the Royal Observatory of Belgium.",
			student: "Student Projects",
			studentcontent: "Projects developed during my studies in C++ using the Model-View-Controller design pattern, with a UI built in Qt Creator.",
			website: "Hosted on <a href='https://github.com/GEOX2M'>github</a>",
			tagIA: "AI", tagVR: "VR", tagInteractif: "Interactive", tagLive: "Live", tagEtudes: "Student", tagTechnique: "Technical",
		},
	};

	const pageTitles = {
		fr: 'Développeur C++ Unreal Engine - Geoffrey Minez',
		en: 'C++ Unreal Engine Developer - Geoffrey Minez',
	};

	// Local state for selected language. Expose a small API on window.app for compatibility with existing HTML on-page handlers
	let currentLang = (function () {
		try {
			const saved = window.localStorage.getItem('lang');
			if (saved && translations[saved]) return saved;
		} catch (e) { /* localStorage unavailable (privacy mode, etc.) */ }
		return (navigator.language || '').toLowerCase().startsWith('fr') ? 'fr' : 'en';
	}());

	/**
	 * Renders the sidebar's stacked role-title list from translations[lang].roleTitles.
	 */
	function renderRoleList() {
		const list = document.getElementById('role-list');
		if (!list) return;
		const titles = translations[currentLang].roleTitles || [translations[currentLang].title];
		list.innerHTML = titles.map((t) => `<li>${t}</li>`).join('');
	}

	/**
	 * Safely renders translations into elements marked with [data-key].
	 * If a key is missing, it leaves the element unchanged (helps debugging missing keys).
	 */
	function changeLanguage(newLang) {
		if (!translations[newLang]) {
			console.warn(`changeLanguage: unknown language '${newLang}'`);
			return;
		}

		currentLang = newLang;
		document.documentElement.lang = newLang;
		if (pageTitles[newLang]) document.title = pageTitles[newLang];
		try {
			window.localStorage.setItem('lang', newLang);
		} catch (e) { /* localStorage unavailable (privacy mode, etc.) */ }

		const langFr = document.getElementById('lang-fr');
		const langEn = document.getElementById('lang-en');
		if (langFr) langFr.classList.toggle('active', newLang === 'fr');
		if (langEn) langEn.classList.toggle('active', newLang === 'en');

		const elements = document.querySelectorAll('[data-key]');
		elements.forEach((el) => {
			const key = el.getAttribute('data-key');
			const val = translations[currentLang] && translations[currentLang][key];
			if (typeof val === 'string') {
				// Some translations include HTML; we leave responsibility to the author.
				el.innerHTML = val;
			} else if (val !== undefined) {
				el.textContent = String(val);
			} // else: missing key -> do nothing
		});

		renderRoleList();
	}

	/**
	 * Trigger file download for CV. Filenames are hard-coded in files/; if you rename files update the names here.
	 */
	function downloadCV() {
		const filename = 'CV Minez Geoffrey.pdf';
		const a = document.createElement('a');
		a.href = './files/' + encodeURIComponent(filename);
		a.download = filename;
		document.body.appendChild(a);
		a.click();
		a.remove();
	}

	function redirectTo(url) {
		if (!url) return;
		window.open(url, '_blank');
	}

	// Expose a small API to the global scope for backward compatibility with inline onclicks.
	window.app = window.app || {};
	window.app.changeLanguage = changeLanguage;
	window.app.downloadCV = downloadCV;
	window.app.redirectTo = redirectTo;

	window.changeLanguage = changeLanguage; // used by inline handlers
	window.download = downloadCV;
	window.redirectTo = redirectTo;
	window.downloadCV = downloadCV;

	// Fade+rise sections into view as they enter the viewport.
	function initRevealAnimations() {
		const targets = document.querySelectorAll('[data-reveal]');
		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (reduced || !('IntersectionObserver' in window)) {
			targets.forEach((el) => el.classList.add('in'));
			return;
		}

		const io = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('in');
					io.unobserve(entry.target);
				}
			});
		}, { threshold: 0.1 });

		targets.forEach((el) => io.observe(el));
	}

	/**
	 * Ambient auto-cycling slideshow for project cards backed by more than one
	 * photo (e.g. Motion Capture, Virtual Production). Independent of hover.
	 */
	function initSlideshows() {
		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		document.querySelectorAll('.case-media.slideshow').forEach((container) => {
			const imgs = container.querySelectorAll('img');
			if (imgs.length < 2 || reduced) return;

			let index = 0;
			const interval = parseInt(container.getAttribute('data-interval'), 10) || 3500;

			setInterval(() => {
				imgs[index].classList.remove('active');
				index = (index + 1) % imgs.length;
				imgs[index].classList.add('active');
			}, interval);
		});
	}

	/**
	 * Preview videos only start loading/playing once they actually scroll near
	 * the viewport, and native <video> previews pause again once scrolled away.
	 * With ~18 embedded Vimeo players on the page (each project video appears
	 * once in the Projects grid and once in the Gallery), letting all of them
	 * autoplay at once on page load is far too heavy for a phone — mobile
	 * browsers commonly refuse or silently fail that much simultaneous video,
	 * which is why the gallery could appear entirely black. Loading each embed
	 * lazily keeps only the handful currently on screen active at any time.
	 */
	function initLazyMedia() {
		if (!('IntersectionObserver' in window)) {
			// No IntersectionObserver support: fall back to loading everything
			// up front rather than showing nothing.
			document.querySelectorAll('.video-embed iframe[data-src]').forEach((iframe) => {
				iframe.src = iframe.getAttribute('data-src');
			});
			document.querySelectorAll('video[data-lazy-video]').forEach((video) => {
				video.play().catch(() => {});
			});
			return;
		}

		const io = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const el = entry.target;
				if (el.tagName === 'IFRAME') {
					if (entry.isIntersecting && !el.hasAttribute('src')) {
						el.src = el.getAttribute('data-src');
						io.unobserve(el);
					}
				} else if (el.tagName === 'VIDEO') {
					if (entry.isIntersecting) {
						el.play().catch(() => {});
					} else {
						el.pause();
					}
				}
			});
		}, { rootMargin: '200px 0px', threshold: 0.01 });

		document.querySelectorAll('.video-embed iframe[data-src]').forEach((iframe) => io.observe(iframe));
		document.querySelectorAll('video[data-lazy-video]').forEach((video) => io.observe(video));
	}

	/**
	 * Gallery lightbox: clicking (or pressing Enter/Space on) a tile opens its
	 * image or video large, centered, over a dark backdrop. Videos play with
	 * sound and controls here — the muted hover-preview is only for the small
	 * tile. Escape, the close button, or a click outside the content closes it.
	 */
	function initLightbox() {
		const overlay = document.getElementById('lightbox');
		if (!overlay) return;

		const stage = overlay.querySelector('.lightbox-stage');
		const captionEl = overlay.querySelector('.lightbox-caption');
		const linkEl = overlay.querySelector('.lightbox-link');
		const closeBtn = overlay.querySelector('.lightbox-close');
		let activePlayer = null;
		let lastFocused = null;

		function clearStage() {
			if (activePlayer && activePlayer.destroy) {
				activePlayer.destroy().catch(() => {});
			}
			activePlayer = null;
			stage.innerHTML = '';
		}

		function open(tile) {
			const type = tile.getAttribute('data-lightbox');
			let title = tile.getAttribute('data-title') || '';
			clearStage();

			if (type === 'image') {
				const img = document.createElement('img');
				img.src = tile.getAttribute('data-img-src');
				img.alt = title;
				stage.appendChild(img);
			} else if (type === 'video') {
				const frame = document.createElement('div');
				frame.className = 'lightbox-video-frame';
				const video = document.createElement('video');
				video.src = tile.getAttribute('data-video-src');
				video.controls = true;
				video.autoplay = true;
				video.playsInline = true;
				frame.appendChild(video);
				stage.appendChild(frame);
			} else if (type === 'vimeo') {
				const frame = document.createElement('div');
				frame.className = 'lightbox-video-frame';
				const iframe = document.createElement('iframe');
				const id = tile.getAttribute('data-vimeo-id');
				iframe.src = `https://player.vimeo.com/video/${id}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1`;
				iframe.setAttribute('frameborder', '0');
				iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share');
				iframe.setAttribute('allowfullscreen', '');
				iframe.title = title;
				frame.appendChild(iframe);
				stage.appendChild(frame);
				if (typeof Vimeo !== 'undefined' && Vimeo.Player) {
					activePlayer = new Vimeo.Player(iframe);
				}
			} else if (type === 'text') {
				const card = tile.closest('.case-card');
				const h3 = card ? card.querySelector('h3') : null;
				const copyEl = card ? card.querySelector('.case-copy') : null;
				if (h3) title = h3.textContent;
				const content = document.createElement('div');
				content.className = 'lightbox-text';
				content.innerHTML = copyEl ? copyEl.innerHTML : '';
				stage.appendChild(content);
			} else {
				return;
			}

			captionEl.textContent = title;
			const link = tile.getAttribute('data-link');
			if (link) {
				linkEl.href = link;
				linkEl.textContent = tile.getAttribute('data-link-label') || 'Voir la source ↗';
				linkEl.hidden = false;
			} else {
				linkEl.hidden = true;
			}

			lastFocused = document.activeElement;
			overlay.classList.add('open');
			overlay.setAttribute('aria-hidden', 'false');
			document.body.style.overflow = 'hidden';
			closeBtn.focus();
		}

		function close() {
			overlay.classList.remove('open');
			overlay.setAttribute('aria-hidden', 'true');
			document.body.style.overflow = '';
			clearStage();
			if (lastFocused && lastFocused.focus) lastFocused.focus();
		}

		document.querySelectorAll('.tile[data-lightbox], .case-media[data-lightbox], .read-more[data-lightbox]').forEach((tile) => {
			tile.setAttribute('tabindex', '0');
			tile.setAttribute('role', 'button');
			tile.addEventListener('click', (e) => {
				// Media sits inside cards/tiles that may have their own click
				// behaviour (e.g. a project card that navigates externally);
				// opening the lightbox always takes priority over that.
				e.stopPropagation();
				open(tile);
			});
			tile.addEventListener('keydown', (e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					e.stopPropagation();
					open(tile);
				}
			});
		});

		closeBtn.addEventListener('click', close);
		overlay.addEventListener('click', (e) => {
			if (e.target === overlay) close();
		});
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape' && overlay.classList.contains('open')) close();
		});
	}

	// Init
	document.addEventListener('DOMContentLoaded', function () {
		changeLanguage(currentLang);
		initRevealAnimations();
		initSlideshows();
		initLazyMedia();
		initLightbox();
	});

}());
