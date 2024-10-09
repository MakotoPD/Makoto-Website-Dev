<template>
	<div>

		<Head>
			<Title>Makoto - {{ $t('page.contact.title') }}</Title>
		</Head>


		<div class="container mx-auto px-4 md:px-36">
			<div class="items-center pt-24 mb-24 md:mb-44">
				<h1 class="text-white text-4xl">{{ $t('page.contact.title') }}</h1>
				<h2 class="text-primary text-3xl font-light">{{ $t('page.contact.subtitle') }}</h2>
			</div>
		</div>

		<div class="container mx-auto px-12 sm:px-24 mb-12 text-white/90">
			<div class="flex justify-center text-lg font-light text-center">
				<p>{{ $t('page.contact.desc') }}</p>
			</div>

			<div class="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mt-4 sm:mt-2">
				<NuxtLink to="https://www.instagram.com/makotopd/" target="_blank" class="checkout_box flex px-3 py-1 border-2 border-gray-600 bg-pink-300/20 rounded-xl hover:border-pink-600/40 hover:bg-pink-300/40 duration-75">
					<i class='text-pink-400/70 bx bx-sm bxl-instagram-alt mr-2'></i>
					Instagram
				</NuxtLink>
				<NuxtLink to="https://x.com/MakotoPD" target="_blank" class="checkout_box flex px-3 py-1 border-2 border-gray-600 bg-blue-300/20 rounded-xl hover:border-blue-600/40 hover:bg-blue-300/40 duration-75">
					<i class='text-blue-400/70 bx bx-sm bxl-twitter mr-2'></i>
					Twitter
				</NuxtLink>
				<NuxtLink to="mailto:contact@makoto.com.pl" target="_blank" class="checkout_box flex px-3 py-1 border-2 border-gray-600 bg-yellow-300/20 rounded-xl hover:border-yellow-600/40 hover:bg-yellow-300/40 duration-75">
					<i class='text-yellow-400/70 bx bx-sm bxs-envelope mr-2'></i>
					E-mail
				</NuxtLink>
			</div>
		</div>

		<div class="container mx-auto px-4 sm:px-24 mb-12 text-white/90">
			<div class="flex justify-center text-lg font-light text-center">
				<p>{{ $t('page.contact.or') }}</p>
			</div>

			<div class="mx-auto max-w-[40rem] mt-4 rounded-xl bg-gray-800/40 py-12 px-8">
				<form id="messform" @submit.prevent="submitForm">
					<div class="grid gap-6 mb-6 md:grid-cols-2">
						<div>
							<label for="first_name" class="block mb-2 text-sm font-medium text-white">{{ $t('page.contact.Form.fName') }} </label>
							<input v-model="fname" type="text" id="first_name" class="border botext-sm rounded-lg  block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500" placeholder="Jan" required>
						</div>
						<div>
							<label for="last_name" class="block mb-2 text-sm font-medium   text-white">{{ $t('page.contact.Form.lName') }}</label>
							<input v-model="lname" type="text" id="last_name" class="border text-sm rounded-lg block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500" placeholder="Kowalski" required>
						</div>
						<div>
							<label for="phone" class="block mb-2 text-sm font-medium  text-white">{{ $t('page.contact.Form.phone') }}<span class="text-gray-600 text-xs px-2">({{ $t('page.contact.Form.optional') }})</span></label>
							<input v-model="phone" type="tel" id="phone" class="border text-sm rounded-lg block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500" placeholder="+48 123 456 789">
						</div>
						<div>
							<label for="email" class="block mb-2 text-sm font-medium  text-white">{{ $t('page.contact.Form.email') }}</label>
							<input v-model="email" type="email" id="email" class="border text-sm rounded-lg block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500" placeholder="jan.kowal@company.com" required>
						</div>
					</div>
					<div class="mb-6">
						<label for="title" class="block mb-2 text-sm font-medium text-white">{{ $t('page.contact.Form.title') }}</label>
						<select id="title" v-model="subject" required class=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
							<option selected value="web">{{ $t('page.contact.Form.Subject.web') }}</option>
							<option value="graphic">{{ $t('page.contact.Form.Subject.graphic') }}</option>
							<option value="coop">{{ $t('page.contact.Form.Subject.coop') }}</option>
							<option value="another">{{ $t('page.contact.Form.Subject.another') }}</option>
						</select>

					</div>
					<div class="mb-6">						
						<label for="message" class="block mb-2 text-sm font-medium  text-white">{{ $t('page.contact.Form.mess') }}</label>
						<textarea v-model="message" id="message" rows="4" class="block p-2.5 w-full text-sm rounded-lg border  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500" placeholder="Write your message here..."></textarea>
					</div>  
					
					<div class="mb-6">
						<NuxtTurnstile v-if="pageReady" v-model="token" :options="{theme: 'dark', action: 'vue',}" />
					</div>
					
					
					<div class="flex items-start mb-6">
						<div class="flex items-center h-5">
						<input id="remember" type="checkbox" value="" class="w-4 h-4 border rounded focus:ring-3  border-gray-600  focus:ring-blue-600  ring-offset-gray-800" required>
						</div>
						<label for="remember" class="ml-2 text-sm font-medium text-gray-300">I agree with the <a href="/privacy-policy" class="hover:underline  text-blue-500">privacy policy</a>.</label>
					</div>

					<button type="submit" class="flex justify-center items-start gap-2 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  bg-blue-600  hover:bg-blue-700  focus:ring-blue-800"> <p>{{ $t('page.contact.Form.btn') }}</p> <i class='mt-px bx bx-xs bx-send'></i></button>
					
					<Alert v-if="sendsucces" :text=" $t('page.contact.Form.sendsucces')" type="success" />
					<Alert v-if="error" :text="error" type="error" />

				</form>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
useHead({
	title: 'Contact - Makoto',
})

const pageReady = ref(false)
onMounted(() => {
	pageReady.value = true
})

const WEB3FORMS_ACCESS_KEY = "5570e19a-cefa-433f-8b62-26c58fa27628"

const fname = ref('')
const lname = ref('')
const email = ref('')
const phone = ref('')
const subject = ref('')
const message = ref('')


const token = ref("");
let sendsucces = ref(false)
let error = ref('')


const submitForm = async () => {

	if (email.value != "makotopd@icloud.com" && email.value != "contact@makoto.com.pl" && email.value != "contact@makoto.net.pl") {


		if(token.value == ''){
			error.value = 'Cpatcha not resolved, try again'
			setTimeout(() => {
				error.value = ''
			}, 10000)
		} else {

			const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				access_key: WEB3FORMS_ACCESS_KEY,
				subject: subject.value,
				name: fname.value + " " + lname.value,
				email: email.value,
				phone: phone.value,
				message: message.value
			}),
			});
			const result = await response.json();
			if (result.success) {
				console.log('Wiadmość wysłana')
				sendsucces.value = true


				fname.value = ''
				lname.value = ''
				email.value = ''
				phone.value = ''
				subject.value = ''
				message.value = ''
			} else if(result.error) {
				console.log('Błąd wysyłania')
				console.log(result.error)
				error.value = result.error
			}
		}
	}
	
}


</script>