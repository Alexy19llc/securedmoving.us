<template>
    <div class="z-1 home-form w-full bg-white/60 rounded-lg shadow-md p-6">
        <form
            netlify
            name="contactV3"
            action="#"
            method="POST"
            class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
            <!-- Field wrap -->
            <div class="col-span-2">
            <label
                for="first-name"
                class="block text-sm font-bold text-gray-800"
                >Your Name</label
            >
            <div class="mt-1">
                <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                class="text-gray-800 block w-full rounded-md border-black-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
            </div>
            </div>
            <!-- End Field wrap -->
            <!-- Field wrap -->
            <div class="col-span-2">
            <label
                for="phone-number"
                class="block text-sm font-medium text-gray-800"
                >Phone Number</label
            >
            <div class="relative mt-1 rounded-md shadow-sm">
                <input
                type="text"
                name="phone-number"
                id="phone-number"
                autocomplete="tel"
                class="text-gray-800 block w-full rounded-md border-black-300 py-3 px-4 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="+1 (555) 987-6543"
                />
            </div>
            </div>
            <!-- End Field wrap -->
            <hr class="w-[32rem]" />

            <!-- Field wrap -->
            <div class="col-span-2">
            <label
                for="email"
                class="block text-sm font-bold text-gray-800"
                >Email</label
            >
            <div class="mt-1">
                <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                class="text-gray-800 block w-full rounded-md border-black-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
            </div>
            </div>
            <!-- End Field wrap -->
            <div class="col-span-2">
            <label
                for="type-of-move"
                class="block text-sm font-bold text-gray-800"
                >Type of Move</label
            >
            <div class="mt-1">
                <select
                name="type-of-move"
                id="type-of-move"
                class="text-gray-800 block w-full rounded-md border-black-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                <option value="choose" selected>Choose an option</option>
                <option value="local-move">Local Move</option>
                <option value="intermediate-move">
                    Intermediate Move(10-40mi)
                </option>
                <option value="long-distance-move">
                    Long Distance Move(over 40 mi)
                </option>
                </select>
            </div>
            </div>
            <!-- End Field Wrap -->
            <hr class="w-[32rem]" />
            <div class="col-span-2">
            <label
                for="size-of-move"
                class="block text-sm font-bold text-gray-800"
                >Size of Move</label
            >
            <div class="mt-1">
                <select
                name="size-of-move"
                id="size-of-move"
                class="text-gray-800 block w-full rounded-md border-black-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                <option value="choose" selected>Choose an option</option>
                <option value="one-bedroom">1 Bedroom Apartment</option>
                <option value="two-bedroom">2 Bedroom Apartment</option>
                <option value="three-bedroom">3 Bedroom Apartment</option>
                <option value="one-bedroom">
                    1 Bedroom House / Townhome
                </option>
                <option value="two-bedroom">
                    2 Bedroom House / Townhome
                </option>
                <option value="three-bedroom">
                    3 Bedroom House / Townhome
                </option>
                <option value="other">Other</option>
                </select>
            </div>
            </div>
            <!-- End Field Wrap -->
            <!-- Field Wrap -->
            <div class="col-span-2">
            <label
                for="message"
                class="block text-sm font-bold text-gray-800"
                >Message</label
            >
            <div class="mt-1">
                <textarea
                id="message"
                name="message"
                rows="4"
                class="text-gray-800 block w-full rounded-md border-black-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                ></textarea>
            </div>
            </div>

            <div class="sm:col-span-2">
            <button
                type="submit"
                class="inline-flex w-full items-center justify-center rounded-md border border-transparent hover:bg-sky-400 bg-sky-500 text-white font-bold duration-200 px-4 py-2"
            >
                Send
            </button>
            </div>
        </form>
        <!-- End form -->
        </div>
</template>