<template>
    <div class="h-[40rem] w-screen flex flex-col items-center justify-center">
        <h1 class="text-2xl text-white font-bold mb-4">Profile</h1>
        <hanko-profile class="hankoComponent"></hanko-profile>

        <button @click="logout" class="mt-4 px-2 py-1 bg-blue-500 rounded-lg text-white font-medium">Logout</button>

        <!-- <div class="mt-8">
            <button @click="checkLogin" class="px-2 py-1 bg-blue-500 rounded-lg text-white font-medium">Check</button>
        </div> -->
    </div>
</template>

<script setup lang="ts">
const router = useRouter();
const hanko = useHanko();

function logout() {
  hanko!.user.logout();
  router.push({ path: "/login" });
}

const jwt = useCookie('hanko')
const options = {
    method: "GET",
    headers: {
		Authorization: `Bearer ${jwt.value}`
	},
}

async function checkLogin() {
    const { data, pending, error, refresh } = await useFetch(`https://5993eafd-5196-4712-bf5a-23f34e25e190.hanko.io/token`,
        options
    )
    console.log(jwt.value)
    console.log(data)
    console.log(error)
}

</script>

<style>
.hankoComponent::part(container) {
    padding: 2rem;
    border-radius: 14px;
}

.hankoComponent::part(hanko_dropdown):hover{
    background-color: #ffffff57;
}


hanko-auth, hanko-profile {
    /* Color Scheme */
    --color: #f1f1f1;

    --brand-color-shade-1: #6b84fb;
    --brand-contrast-color: white;

    --background-color: #ffffff21;

}

</style>