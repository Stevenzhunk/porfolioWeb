import React from 'react'

const Steps = () => {
  return (
  <section className="dark:bg-gray-800 dark:text-gray-100  bg-darkpurple">
	<div className="container max-w-5xl px-4 py-12 mx-auto">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3">
				<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
					<h3 className="text-3xl font-semibold text-white">TIMELINE</h3>
					<span className="text-sm font-bold tracking-wider uppercase text-graysoft ">Resaltantes solo programacion </span>
				</div>
			</div>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
						<h3 className="text-xl font-semibold tracking-wide text-white">Desarrollador Web Front-End </h3>
						<time className="text-xs tracking-wide uppercase text-graysoft "> 2022 - actualidad</time>
						<p className="mt-3 text-white">Desarrollo web SPA con React JSDesarrollo web SPA con React JS
Aptitudes: JavaScript · Desarrollo web · React.js · Hojas de estilos en cascada (CSS) · tailwind · HTML</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
						<h3 className="text-xl font-semibold tracking-wide text-white ">Desarrollador Web Front-end</h3>
						<time className="text-xs tracking-wide uppercase text-graysoft ">Jul 2015 - Dic 2016</time>
						<p className="mt-3 text-white">Creación de paginas web usando html, css y javascriptCreación de paginas web usando html, css y javascript
Aptitudes: JavaScript · Hojas de estilos en cascada (CSS) · HTML</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
  );
}

export default Steps;