<template>
	<div class="flex flex-col justify-center items-center py-14">
		<h1 class="text-7xl font-semibold text-white">{{ $t('page.home.Welcome.first') }}</h1>
		<div class="mt-4 flex space-x-4">
			<p class="text-7xl font-semibold text-blue-400">{{ $t('page.home.Welcome.second') }}</p>
			<p class="text-7xl font-semibold text-blue-400 px-1 pb-4 border border-blue-500/50 relative decorateFirst">
				<span class="decorateSecond">
					<span class="decorateThird">
						<span class="decorateTourth">
							{{ $t('page.home.Welcome.decorated') }}
						</span>
					</span>
				</span>
			</p>
		</div>
		<p class="welcome-last text-4xl font-light text-gray-400">{{ $t('page.home.Welcome.last') }}</p>
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