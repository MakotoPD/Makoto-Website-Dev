<template>
	<div class="flex flex-col justify-center items-center pt-14 pb-0 md:py-14">
		<h1 data-aos="zoom-in" class="text-5xl md:text-7xl font-semibold text-white text-center">{{ $t('page.home.Welcome.first') }}</h1>
		<div class="md:mt-4 flex flex-col items-center md:items-start md:flex-row md:space-x-4">
			<p data-aos="zoom-in" data-aos-delay="300" class="text-5xl md:text-7xl font-semibold text-blue-400">{{ $t('page.home.Welcome.second') }}</p>
			<p data-aos="fade-left" data-aos-delay="700" class="text-5xl md:text-7xl w-fit font-semibold text-blue-400 px-2 md:px-1 pb-4 border border-blue-500/50 relative decorateFirst">
				<span class="decorateSecond">
					<span class="decorateThird">
						<span class="decorateTourth">
							{{ $t('page.home.Welcome.decorated') }}
						</span>
					</span>
				</span>
			</p>
		</div>
		<p data-aos="fade-up" data-aos-delay="1000" class="welcome-last mt-4 md:mt-0 text-2xl md:text-4xl font-light text-gray-400">{{ $t('page.home.Welcome.last') }}</p>
	</div>
</template>

<style>
.decorateFirst::before{
	content: '';
	width: 12px;
	height: 12px;
	background-color: #035ec7;
	position: absolute;
	top: -6px;
	left:-6px;
}
.decorateFirst::after{
	content: '';
	width: 12px;
	height: 12px;
	background-color: #035ec7;
	position: absolute;
	top: -6px;
	right:-6px;
}
.decorateSecond::before{
	content: '';
	width: 12px;
	height: 12px;
	background-color: #035ec7;
	position: absolute;
	bottom: -6px;
	left:-6px;
}
.decorateSecond::after{
	content: '';
	width: 12px;
	height: 12px;
	background-color: #035ec7;
	position: absolute;
	bottom: -6px;
	right:-6px;
}
.decorateThird::before{
	content: '';
	width: 12px;
	height: 12px;
	background-color: #035ec7;
	position: absolute;
	bottom: 50%;
	left:-6px;
	transform: translateY(50%);
}
.decorateThird::after{
	content: '';
	width: 12px;
	height: 12px;
	background-color: #035ec7;
	position: absolute;
	bottom: 50%;
	right:-6px;
	transform: translateY(50%);
}
.decorateTourth::before{
	content: '';
	width: 12px;
	height: 12px;
	background-color: #035ec7;
	position: absolute;
	top: -6px;
	left: 50%;
	transform: translateX(-50%);
}
.decorateTourth::after{
	content: '';
	width: 12px;
	height: 12px;
	background-color: #035ec7;
	position: absolute;
	bottom: -6px;
	left: 50%;
	transform: translateX(-50%);
}
</style>