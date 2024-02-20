<script>
	import { supabase } from '$lib/supabaseClient';
	import { goto } from '$app/navigation';
	import bcrypt from 'bcryptjs'; // Import the bcrypt library

	let email = '';
	let username = ''; // Add username variable
	let password = '';
	let loading = false;
	let message = '';

	async function signUp() {
		loading = true;

		try {
			// Sign up the user with email and password
			const { user, error } = await supabase.auth.signUp({
				email,
				password
			});

			if (error) {
				throw error;
			}

			// Hash the password
			const hashedPassword = await hashPassword(password);

			// If signed up successfully, insert user data into profiles table
			const { data, error: insertError } = await supabase
				.from('profiles')
				.insert([{ email, username, password: hashedPassword }]); // Use hashed password

			if (insertError) {
				throw insertError;
			}

			message = 'Signup successful! Check your email to confirm.';
			goto('/Login');
		} catch (error) {
			message = error.message;
		}

		loading = false;
	}

	async function hashPassword(password) {
		// You can use bcrypt to hash the password securely
		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(password, saltRounds);
		return hashedPassword;
	}
</script>

<div class="min-h-screen flex justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-md w-full space-y-8">
		<div>
			<h2 class="mt-6 text-center text-3xl font-extrabold">Sign Up</h2>
		</div>
		<form class="mt-8 space-y-6" on:submit|preventDefault={signUp}>
			<input type="hidden" name="remember" value="true" />
			<div>
				<label for="email" class="sr-only">Email address</label>
				<input
					id="email"
					name="email"
					type="email"
					autocomplete="email"
					required
					class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
					placeholder="Email address"
					bind:value={email}
				/>
			</div>
			<div>
				<label for="username" class="sr-only">Username</label>
				<input
					id="username"
					name="username"
					type="text"
					autocomplete="username"
					required
					class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
					placeholder="Username"
					bind:value={username}
				/>
			</div>
			<div>
				<label for="password" class="sr-only">Password</label>
				<input
					id="password"
					name="password"
					type="password"
					autocomplete="current-password"
					required
					class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
					placeholder="Password"
					bind:value={password}
				/>
			</div>

			<div>
				<button
					type="submit"
					disabled={loading}
					class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
				>
					{loading ? 'Signing up...' : 'Sign Up'}
				</button>
			</div>
		</form>
		{#if message}
			<p class="mt-2 text-center text-sm text-red-600">{message}</p>
		{/if}
	</div>
</div>
