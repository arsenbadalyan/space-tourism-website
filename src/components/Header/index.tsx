import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { Container } from './styles'

export const Header: React.FC = () => {
	const activeClassName = 'active';
	const location = useLocation();
	const $navbarBtnRef = useRef<HTMLButtonElement>(null);

	const [showMobileNav, setShowMobileNav] = useState<boolean>()
	const [mobileAnimate, setMobileAnimate] = useState<boolean>()
	const [animate, setAnimate] = useState<boolean>()

	useEffect(() => {
		setAnimate(true);
	}, []);

	useEffect(() => {
		if ($navbarBtnRef.current)
			$navbarBtnRef.current.classList.remove('is-open')
		closeNav();
	}, [location]);

	const closeNav = () => {
		setMobileAnimate(false)
		setTimeout(() => setShowMobileNav(false), 500)
	}

	const openNav = () => {
		setShowMobileNav(true)
		setTimeout(() => setMobileAnimate(true), 10)
	}

	const handleClickBurgerBtn = () => {
		if ($navbarBtnRef.current)
			$navbarBtnRef.current.classList.toggle('is-open')
		showMobileNav ? closeNav() : openNav()
	}

	return (
		<Container>
			<div className='content'>
				<div className='logo'>
					<img src='./assets/shared/logo.svg' alt='logo' />
				</div>
				<div className={`line ${animate ? 'animate' : ''}`}></div>
				<button
					className='burger-btn'
					onClick={handleClickBurgerBtn}
					ref={$navbarBtnRef}
				></button>
				<nav
					className={`nav ${showMobileNav ? 'active' : ''} ${
						animate ? 'animate' : ''
					} ${mobileAnimate ? 'mobile-animate' : ''}`}
				>
					<ul>
						<li>
							<NavLink
								to='/'
								className={({ isActive }) =>
									isActive ? activeClassName : undefined
								}
							>
								<span>00</span>HOME
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/destination'
								className={({ isActive }) =>
									isActive ? activeClassName : undefined
								}
							>
								<span>01</span>DESTINATION
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/crew'
								className={({ isActive }) =>
									isActive ? activeClassName : undefined
								}
							>
								<span>02</span>CREW
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/technology'
								className={({ isActive }) =>
									isActive ? activeClassName : undefined
								}
							>
								<span>03</span>TECHNOLOGY
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</Container>
	)
}
